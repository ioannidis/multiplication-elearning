import {Component, Input, OnInit} from '@angular/core';
import {MultiplicationService} from "../../../core/services/multiplication-service/multiplication.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-mini-review',
  templateUrl: './mini-review.component.html',
  styleUrls: ['./mini-review.component.scss']
})
export class MiniReviewComponent implements OnInit {

  @Input() numberOfExercises: number;
  @Input() forNumber: number;

  public questions: any[];
  public activeIndex = 0;

  public multiplication: any[];
  public selectedMath: any[];

  public reviewForm: FormGroup;

  public result: any[] = [];
  public score: number = 0;

  constructor(private multiplicationService: MultiplicationService,
              private formBuilder: FormBuilder) {

    this.reviewForm = this.formBuilder.group(
      {
        q1: ['', Validators.required],
        q2: ['', Validators.required],
        q3: ['', Validators.required],
        q4: ['', Validators.required],
        q5: ['', Validators.required],
        q6: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.questions = [
      {
        label: 'Question 1',
        command: (event: any) => {
          this.activeIndex = 0;
        }
      },
      {
        label: 'Question 2',
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'Question 3',
        command: (event: any) => {
          this.activeIndex = 2;
        }
      },
      {
        label: 'Question 4',
        command: (event: any) => {
          this.activeIndex = 3;
        }
      },
      {
        label: 'Question 5',
        command: (event: any) => {
          this.activeIndex = 4;
        }
      },
      {
        label: 'Question 6',
        command: (event: any) => {
          this.activeIndex = 5;
        }
      },
      {
        label: 'Results',
        command: (event: any) => {
          this.activeIndex = 6;
        }
      }
    ];

    this.multiplicationService.getMultiplication(this.forNumber)
      .subscribe(res => {
        console.log(res);
        this.multiplication = res;

        this.selectedMath = [
          this.selectOneRandomMath(),
          this.selectOneRandomMath(),
          this.selectOneRandomMath(),
          this.selectOneRandomMath(),
          this.selectTwoRandomMath(),
          this.selectTwoRandomMath()
        ];
      })
  }

  selectOneRandomMath(): number[] {
    return this.multiplication[Math.floor(Math.random() * 11)];
  }

  selectTwoRandomMath(): number[] {
    const first =  this.multiplication[Math.floor(Math.random() * 11)];

    let second;
    do {
      second = this.multiplication[Math.floor(Math.random() * 11)];
    } while (first === second);

    return [first, second]
  }

  nextStep($event) {
    this.activeIndex++;
    console.log(this.activeIndex)
    console.log(this.reviewForm)
    if (this.activeIndex === this.selectedMath.length) {

      let index = 0;
      for (const property in this.reviewForm.value) {
        if (Array.isArray(this.reviewForm.value[property])) {
          console.log(this.reviewForm.value[property])
          console.log(this.selectedMath[index][2])
          console.log(this.reviewForm.value[property][2])
          this.result.push(this.selectedMath[index][2] === this.reviewForm.value[property][2])
        } else {
          // TODO need the correct pos
          console.log(this.selectedMath[index][2])
          console.log(this.reviewForm.value[property])
          this.result.push(this.selectedMath[index][2] === this.reviewForm.value[property])
        }
        index++;
      }

      let successful = 0;
      this.result.forEach(r => {
        console.log(r)
        if (r)
          successful++;
      });
      this.score = +((successful / this.result.length) * 100).toFixed();
      console.log(this.result);
      console.log(this.score);

    }
  }

}
