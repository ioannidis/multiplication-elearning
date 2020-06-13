import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../../core/services/current-user-service/current-user.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public currentUserId: string;
  public hasCurrentUserPrivileges: boolean;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit() {
    this.currentUserId = this.currentUserService.getId();
    this.hasCurrentUserPrivileges = this.currentUserService.hasCurrentUserPrivileges(['SUPERADMIN', 'ADMIN']);
  }

}
