import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../core/services/user-service/user.service";
import {AchievementService} from "../../../core/services/achievement-service/achievement.service";
import {LessonService} from "../../../core/services/lesson-service/lesson.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
  styleUrls: ['./users-all.component.scss']
})
export class UsersAllComponent implements OnInit {

  public users: any;
  public lessons: any;

  public userAchievement: any;

  public displayDetails: any;
  public displayEdit: any;

  public userForm: FormGroup;
  public isSubmitted: boolean = false;

  constructor(private userService: UserService,
              private achievementService: AchievementService,
              private lessonService: LessonService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.findStudents()
      .subscribe(res => {
        console.log(res);
        this.users = res.users;
      })

    this.lessonService.find()
      .subscribe(res => this.lessons = res.lessons);
  }

  detailsDialog(username: string) {
    this.achievementService.findByUser(username)
      .subscribe(res => {
        console.log(res.achievements[0]?.lessons)
        this.userAchievement = res.achievements[0]?.lessons || {}
      })
    this.displayDetails = true;
  }

  editDialog(user: any) {
    this.userForm = this.formBuilder.group({
      _id: [user._id, [Validators.required]],
      username: [user.username, [Validators.required]],
      email: [user.email, [Validators.required]],
      firstName: [user.firstName, [Validators.required]],
      lastName: [user.lastName, [Validators.required]]
    });
    this.displayEdit = true;
  }

  closeDialog() {
    this.displayDetails = false;
    this.userAchievement = null;
    this.displayEdit = false;
  }

  deleteUser(user) {
    this.userService.delete(user.username)
      .subscribe(res => {
        location.reload();
      })
  }

  updateUser() {
    if (this.userForm.invalid)
      return

    this.isSubmitted = true;

    console.log(this.userForm.value);

    this.userService.update(this.userForm.value)
      .subscribe(res => {
        console.log(res);
        this.isSubmitted = false;
        this.closeDialog();
        location.reload();
      },
        error => {
          console.log(error);
        })

  }

}
