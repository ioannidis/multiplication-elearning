import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exercise-four',
  templateUrl: './exercise-four.component.html',
  styleUrls: ['./exercise-four.component.scss']
})
export class ExerciseFourComponent implements OnInit {

  @Input() math: number[];
  @Input() parentFormGroup: FormGroup;
  @Input() control: string
  @Output() nextStepEmitter: EventEmitter<any> = new EventEmitter<any>();

  public selected: any;
  public options: any;

  constructor() { }

  ngOnInit(): void {
    this.selected = this.math[Math.floor(Math.random() * 2)];
    this.options = [
      {
        label: this.math[0][0] + " x " + this.math[0][1],
        value: this.math[0]
      },
      {
        label: this.math[1][0] + " x " + this.math[1][1],
        value: this.math[1]
      }
    ];
  }

  nextStep() {
    this.nextStepEmitter.emit({
      advanceIndexValue: 1,
      exerciseType: 4,
      control: this.control,
      selectedMath: this.selected
    });
  }

  isControlInvalid() {
    return this.parentFormGroup.get(this.control).invalid;
  }

}
