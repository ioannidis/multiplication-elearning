import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {LessonService} from "../../../core/services/lesson-service/lesson.service";
import {ActivatedRoute} from "@angular/router";

import {MenuItem} from 'primeng/api';
import {MultiplicationService} from "../../../core/services/multiplication-service/multiplication.service";


@Component({
  selector: 'app-lessons-show',
  templateUrl: './lessons-show.component.html',
  styleUrls: ['./lessons-show.component.scss']
})
export class LessonsShowComponent implements OnInit {

  public lesson: any;

  public isReviewActive: boolean = true;
  // public questions: any
  // public activeIndex: number = 0;
  public actualNumber: number = 0;

  constructor(private lessonService: LessonService,
              private activatedRoute: ActivatedRoute,
              private multiplicationService: MultiplicationService) {
  }

  ngOnInit(): void {
    // this.questions = [
    //   {
    //     label: 'Question 1',
    //     command: (event: any) => {
    //       this.activeIndex = 0;
    //     }
    //   },
    //   {
    //     label: 'Question 2',
    //     command: (event: any) => {
    //       this.activeIndex = 1;
    //     }
    //   },
    //   {
    //     label: 'Question 3',
    //     command: (event: any) => {
    //       this.activeIndex = 2;
    //     }
    //   },
    //   {
    //     label: 'Question 4',
    //     command: (event: any) => {
    //       this.activeIndex = 3;
    //     }
    //   },
    //   {
    //     label: 'Question 5',
    //     command: (event: any) => {
    //       this.activeIndex = 4;
    //     }
    //   },
    // ];

    const lessonId = this.activatedRoute.snapshot.params['url'];

    if (lessonId.includes('number')) {
      this.actualNumber = lessonId.split('-')[1];
    }

    this.lessonService.findOne(lessonId)
      .subscribe(res => {
        this.lesson = res.lesson;
      })
  }

  // nextStep() {
  //   this.activeIndex++;
  // }


}
