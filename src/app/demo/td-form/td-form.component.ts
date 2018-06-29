import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe();
  }

}
