import {Component, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormControlName, FormGroup} from "@angular/forms";
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.scss']
})
export class ExerciseOneComponent implements OnInit {

  @Input() math: number[];
  @Input() parentFormGroup: FormGroup;
  @Input() control: string;
  @Output() nextStepEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.math);
    console.log(this.control);
  }

  nextStep() {
    this.nextStepEmitter.emit({value: 1});
  }

  isControlInvalid() {
    return this.parentFormGroup.get(this.control).invalid;
  }

}
