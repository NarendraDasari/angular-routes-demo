import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goToChangeUsername() {
    this.router.navigate(['change-username'], { relativeTo: this.route });

  }
  goToChangePassword() {
    this.router.navigate(['change-password'], { relativeTo: this.route });
  }

}
