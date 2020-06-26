import {AfterContentChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-help-student',
  templateUrl: './help-student.component.html',
  styleUrls: ['./help-student.component.scss']
})
export class HelpStudentComponent implements OnInit, AfterContentChecked {

  @Input() showHelp: String;
  @Output() closeHelpEvent: EventEmitter<any> = new EventEmitter<any>();

  display: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isVisible()
  }

  ngAfterContentChecked(): void {
    this.isVisible()
  }

  closeHelp() {
    this.closeHelpEvent.emit();
  }

  isVisible() {
    this.display = this.showHelp === 'student';
  }

}
