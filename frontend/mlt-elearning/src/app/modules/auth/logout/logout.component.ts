import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.logout()
      .subscribe(x => this.router.navigate(['/auth', 'login']),
          error =>  console.log('Error code :' +  error.status + ' - ' + error.message));
  }

}
