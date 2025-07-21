import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => "assets/users/" + this.selectedUser().avatar);

  //Getter: Function, meant to produce new value
  // get imagePath() {
  //   return "assets/users/" + this.selectedUser().avatar;
  // }

  onSelectUser() {
    //console.log("Clicked")

    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    //this.selectedUser = DUMMY_USERS[randomIndex]
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
