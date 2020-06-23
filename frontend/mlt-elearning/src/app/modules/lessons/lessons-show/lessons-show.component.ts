import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {LessonService} from "../../../core/services/lesson-service/lesson.service";
import {ActivatedRoute} from "@angular/router";

import {MenuItem} from 'primeng/api';
import {MultiplicationService} from "../../../core/services/multiplication-service/multiplication.service";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-lessons-show',
  templateUrl: './lessons-show.component.html',
  styleUrls: ['./lessons-show.component.scss']
})
export class LessonsShowComponent implements OnInit {

  public lesson: any;
  public multiplication: any;

  public isReviewActive: boolean = true;
  public actualNumber: number = 0;

  constructor(private lessonService: LessonService,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private multiplicationService: MultiplicationService) {
  }

  ngOnInit(): void {

    const lessonId = this.activatedRoute.snapshot.params['url'];

    if (lessonId.includes('number')) {
      this.actualNumber = lessonId.split('-')[1];
    }

    this.multiplicationService.getMultiplication(this.actualNumber)
      .subscribe(res => {
        console.log(res);
        this.multiplication = res
      });

    this.lessonService.findOne(lessonId)
      .subscribe(res => {
        this.lesson = res.lesson;
      })
  }

  sanitizeVideoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.lesson?.videoId}`);
  }


}
