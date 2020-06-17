import {Component, Input, OnInit} from '@angular/core';
import {MultiplicationService} from "../../../core/services/multiplication-service/multiplication.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AchievementService} from "../../../core/services/achievement-service/achievement.service";
import {$e} from "codelyzer/angular/styles/chars";

@Component({
  selector: 'app-mini-review',
  templateUrl: './mini-review.component.html',
  styleUrls: ['./mini-review.component.scss']
})
export class MiniReviewComponent implements OnInit {

  @Input() lessonId: String;
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
              private achievementService: AchievementService,
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
    const index = parseInt($event.control.substring(1));

    if (Array.isArray(this.reviewForm.value[$event.control])) {
      this.result.push($event.selectedMath[2] === this.reviewForm.value[$event.control][2])
    } else {
      this.result.push(this.selectedMath[index - 1][$event.exerciseType - 1] === this.reviewForm.value[$event.control])
    }


    this.activeIndex++;
    if (this.activeIndex === this.selectedMath.length) {
      let successful = 0;
      this.result.forEach(r => {
        if (r)
          successful++;
      });
      this.score = +((successful / this.result.length) * 100).toFixed();

      this.achievementService.save({lessonId: this.lessonId, percentage: this.score })
        .subscribe(res => console.log(res),
          error => console.log(error));
    }
  }

}
