import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.scss']
})
export class ExerciseThreeComponent implements OnInit {

  @Input() math: number[];
  @Input() parentFormGroup: FormGroup;
  @Input() control: string;
  @Output() nextStepEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    this.nextStepEmitter.emit({value: 1});
  }

  isControlInvalid() {
    return this.parentFormGroup.get(this.control).invalid;
  }

}
