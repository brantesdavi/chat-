import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {


  segment = 'chats';
  open_new_chat = false;

  constructor() { }



  logout(){

  }

  onSegmentChanged(ev: any){

  }
  newChat(){
    this.open_new_chat = true;
  }
  cancel(){

  }
  onWilllDismiss(ev: any){

  }

}
