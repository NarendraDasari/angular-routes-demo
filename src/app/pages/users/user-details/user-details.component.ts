import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})



export class UserDetailsComponent implements OnInit {

  constructor(private selectedRout: ActivatedRoute) {

  }

  ngOnInit(): void {
    // paramMap is a Observable , so subscribe to it to get data from an onservable.
    let routes = this.selectedRout.paramMap
      .subscribe((params) => {
        let id = params?.get('id');
        console.log('id:' + id);
        console.log(params);

      });
  }

}
