import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MultiplicationService} from "../../../core/services/multiplication-service/multiplication.service";
import {AchievementService} from "../../../core/services/achievement-service/achievement.service";
import {ActivatedRoute} from "@angular/router";
import {LessonService} from "../../../core/services/lesson-service/lesson.service";

@Component({
  selector: 'app-review-show',
  templateUrl: './review-show.component.html',
  styleUrls: ['./review-show.component.scss']
})
export class ReviewShowComponent implements OnInit {

  public reviewTitle: String;
  public lessonId: String;
  public numberOfExercises: number = 12;
  public forNumbers: number[];

  public questions: any[];
  public activeIndex = 0;

  public multiplication: any[];
  public selectedMath: any[];

  public reviewForm: FormGroup;

  public result: any[] = [];
  public score: number = 0;

  constructor(private multiplicationService: MultiplicationService,
              private lessonService: LessonService,
              private achievementService: AchievementService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {

    this.reviewForm = this.formBuilder.group(
      {
        q1: ['', Validators.required],
        q2: ['', Validators.required],
        q3: ['', Validators.required],
        q4: ['', Validators.required],
        q5: ['', Validators.required],
        q6: ['', Validators.required],
        q7: ['', Validators.required],
        q8: ['', Validators.required],
        q9: ['', Validators.required],
        q10: ['', Validators.required],
        q11: ['', Validators.required],
        q12: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {

    const title = this.activatedRoute.snapshot.params['url'].split('-').join(' ');
    this.reviewTitle = title.charAt(0).toUpperCase() + title.slice(1);

    this.lessonService.findOne(this.activatedRoute.snapshot.params['url'])
      .subscribe(res => {
        this.lessonId = res.lesson._id
      });

    this.questions = [
      {
        label: 'Question 1',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 2',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 3',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 4',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 5',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 6',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 7',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 8',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 9',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 10',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 11',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Question 12',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      },
      {
        label: 'Results',
        command: (event: any) => {
          this.activeIndex += 1;
        }
      }
    ];

    this.setupReview();

    this.multiplicationService.getMultiplicationInRange(this.forNumbers[0], this.forNumbers[1])
      .subscribe(res => {
        this.multiplication = res;

        this.selectedMath = [
          this.selectOneRandomMath(),
          this.selectOneRandomMath(),
          this.selectOneRandomMath(),
          this.selectOneRandomMath(),
          this.selectTwoRandomMath(),
          this.selectTwoRandomMath(),
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
    return this.multiplication[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 11)];
  }

  selectTwoRandomMath(): number[] {
    const first =  this.multiplication[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 11)];

    let second;
    do {
      second = this.multiplication[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 11)];
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

  setupReview() {
    switch (this.activatedRoute.snapshot.params['url']) {
      case "review-1":
        this.forNumbers = [1,3];
        break;
      case "review-2":
        this.forNumbers = [4, 6];
        break;
      case "review-3":
        this.forNumbers = [7, 9];
        break;
    }
  }

}
