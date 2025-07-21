import { Component, Input, input, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {


  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => "assets/users/" + this.avatar())

  // get ImagePath() {
  //   return "assets/users/" + this.avatar;
  // }

  onSelectUser() {

  }
}
