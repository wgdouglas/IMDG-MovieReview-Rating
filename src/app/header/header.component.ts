import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieAuthService } from '../services/movie-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private auth: MovieAuthService){ }

goToHomePage() {
this.router.navigate(['home']);
}
logout(){
this.auth.logout();
}
}
