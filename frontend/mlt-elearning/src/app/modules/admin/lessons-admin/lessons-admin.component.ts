import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LessonService} from "../../../core/services/lesson-service/lesson.service";

@Component({
  selector: 'app-lessons-admin',
  templateUrl: './lessons-admin.component.html',
  styleUrls: ['./lessons-admin.component.scss']
})
export class LessonsAdminComponent implements OnInit {

  public users: any;
  public lessons: any[];

  public lesson: any;


  public displayDetails: any;
  public displayEdit: any;

  public lessonForm: FormGroup;
  public isSubmitted: boolean = false;

  constructor(private lessonService: LessonService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.lessonService.find()
      .subscribe(res => {
        this.lessons = res.lessons;
      })
  }

  detailsDialog(lessonId: string) {
    this.lessonService.findOne(lessonId)
      .subscribe(res => {
        this.lesson = res.lesson;
        console.log(this.lesson)
      })
    this.displayDetails = true;
  }

  editDialog(lesson: any) {
    console.log(lesson)
    this.lessonForm = this.formBuilder.group({
      _id: [lesson._id, [Validators.required]],
      url: [lesson.url, [Validators.required]],
      title: [{value: lesson.title, disabled: true}, Validators.required],
      content: [lesson.content, [Validators.required]]
    });
    this.displayEdit = true;
  }

  closeDialog() {
    this.displayDetails = false;
    this.lesson = null;
    this.displayEdit = false;
  }

  updateLesson() {
    if (this.lessonForm.invalid)
      return

    this.isSubmitted = true;

    console.log(this.lessonForm.value);

    this.lessonService.update(this.lessonForm.value)
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
