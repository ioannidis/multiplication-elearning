import { Component, OnInit } from '@angular/core';
import {LessonService} from "../../../core/services/lesson-service/lesson.service";
import {LessonInterface} from "../../../core/models/lesson/lesson.interface";
import {forkJoin} from "rxjs";
import {AchievementService} from "../../../core/services/achievement-service/achievement.service";
import {Router} from "@angular/router";
import {CurrentUserService} from "../../../core/services/current-user-service/current-user.service";

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {

  public lessons: LessonInterface[];
  public achievements: any;
  public nextLesson: number = 1;
  public isAllLessonSucceed: boolean = true;

  public isTeacher: any;

  constructor(private lessonService: LessonService,
              private achievementService: AchievementService,
              private currentUserService: CurrentUserService,
              private router: Router) { }

  ngOnInit() {
    this.isTeacher = this.currentUserService.hasCurrentUserPrivileges(['teacher']);

    forkJoin([
      this.lessonService.find(),
      this.achievementService.find()
    ]).subscribe(res => {
      this.lessons = res[0].lessons;
      this.achievements = res[1].achievements[0]?.lessons || {};

      this.nextLesson = Object.keys(this.achievements).length+1;
      this.calcLessonSucceed();
    })
  }

  getLessonStatus(lessonId, order) {
    if (this.nextLesson === order && this.isAllLessonSucceed)
      return 'primary';

    if (this.isLessonActive(lessonId)) {
      if (this.achievements[lessonId].percentage < 75) {
        return 'danger';
      }else if (this.achievements[lessonId].percentage >= 75 && this.achievements[lessonId].percentage <= 95) {
        return 'warning';
      } else if (this.achievements[lessonId].percentage > 95) {
        return 'success';
      }
    } else {
      return 'dark';
    }
  }

  getLessonScore(lessonId) {
    if (this.achievements.hasOwnProperty(lessonId))
      return this.achievements[lessonId].percentage + "%";
    return "-"
  }

  getLessonEvaluation(lessonId) {
    if (this.achievements.hasOwnProperty(lessonId)) {
      if (this.achievements[lessonId].percentage < 75) {
        return 'Fail [F]';
      } else if (this.achievements[lessonId].percentage >= 75 && this.achievements[lessonId].percentage <= 95) {
        return 'Pass [B]';
      } else if (this.achievements[lessonId].percentage > 95) {
        return 'Excellent [A]';
      }
    }
    return ""
  }

  calcLessonSucceed() {
    for (let lesson in this.achievements) {
      if (this.achievements.hasOwnProperty(lesson)) {
        if (this.achievements[lesson].percentage < 75) {
          this.isAllLessonSucceed = false;
          return
        }
      }
    }
  }

  isCompleted(lessonId) {
    return this.achievements.hasOwnProperty(lessonId);
  }

  isLessonActive(lessonId) {
    return this.achievements.hasOwnProperty(lessonId);
  }

  openLink(path) {
    if (path.includes("number"))
      this.router.navigate(['lessons', path])
    else
      this.router.navigate(['reviews', path])
  }

}
