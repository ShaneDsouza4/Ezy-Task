import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {


  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;


  get ImagePath() {
    return "assets/users/" + this.avatar;
  }

  onSelectUser() {

  }
}
