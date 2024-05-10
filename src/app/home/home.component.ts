import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { withJsonpSupport } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  messages: any[] = [];

  constructor(public authService: AuthService, public router: Router, public chatService: ChatService) {}

  ngOnInit() {
   if (localStorage.getItem("currentConvo")) {
      this.messages = JSON.parse(localStorage.getItem("currentConvo"));   
    }
  }

  sendMessage(event: any) {
    this.messages.push({
      text: event.message,
      date: "",
      reply: true,
      type: 'text',
      user: {},
    });

    const reply = this.chatService.sendMessageReturnResponse(this.messages);
    console.log(reply);
    reply.then( (replyMessage) => {
      setTimeout(() => { this.messages.push(replyMessage),
        localStorage.setItem("currentConvo", JSON.stringify(this.messages));
       }, 500);
    })
  }


}
