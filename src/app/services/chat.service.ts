import { Injectable } from '@angular/core';

import { OpenAIClient, AzureKeyCredential } from '@azure/openai'
import { AuthService } from './auth.service';
import { AZURE_API_KEY } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  client: OpenAIClient;
  deploymentId = "amaia";

  constructor(public authService: AuthService) {
       this.client = new OpenAIClient(
        "https://amaia-ia.openai.azure.com/", 
        new AzureKeyCredential(AZURE_API_KEY)
      );
   }

   async sendMessageReturnResponse(messages: any[]): Promise<any> {

    const fMessages = this.formatMessagesToModel(messages);
    let responseText = "";
    var message;

    
    try {
      const events = await this.client.streamChatCompletions(this.deploymentId, fMessages, { maxTokens: 128});
      for await (const event of events) {
        for (const choice of event.choices) {
          const delta = choice.delta?.content;
            if (delta !== undefined) {
            responseText += delta;
          }
          }
        }

        message = {
          text: responseText,
          date: "",
          reply: false,
          type: 'text',
        //files: files
          user: {
             name: "Amaia",
             avatar: "/assets/icons/72.png"
          },
        };
    } catch (error) {
      this.authService.showToast('warning', 'Something went wrong!', 'Please wait and retry')

      message = {
        text: "Something went wrong!",
        date: "",
        reply: false,
        type: 'text',
      //files: files
        user: {
           name: "Amaia",
           avatar: "/assets/icons/72.png"
        },
      };
    }
      

      return message;

    }

    formatMessagesToModel(messages: any[]): any {
      var fMessages = [];

      for (const msg of messages) 
      {
        if (msg.user.name != "Amaia") {
            fMessages.push(
              { "role": "user", "content": msg.text }
            )
        } else {
            fMessages.push(
              { "role": "system", "content": msg.text }
            )
        }
      }

      return fMessages;
    }
  }



