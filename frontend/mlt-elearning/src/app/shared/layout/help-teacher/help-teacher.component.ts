import {AfterContentChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-help-teacher',
  templateUrl: './help-teacher.component.html',
  styleUrls: ['./help-teacher.component.scss']
})
export class HelpTeacherComponent implements OnInit, AfterContentChecked {

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
    this.display = this.showHelp === 'teacher';
  }

}
