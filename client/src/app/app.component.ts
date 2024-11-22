import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { UserModel } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'userDetails-client';

  users: UserModel[] = [];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(
      data => {
        this.users = data;
        console.log(data);
    });
  }
}
