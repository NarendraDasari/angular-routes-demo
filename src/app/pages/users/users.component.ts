import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goToProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }

  goToContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

}
