import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})


export class MessageComponent implements AfterViewInit {
  message: string = ''; // For binding with ngModel
  newMessage: string = '';  // Binding for the input field
  selectedPerson: { id: string, name: string, avatar: string, status: string, lastSeen: string } | null = null;
  currentTime: string = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  peopleList = [
    {
      id: 'vincent',
      name: 'Vincent Porter',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      status: 'offline',
      lastSeen: 'left 7 mins ago'
    },
    {
      id: 'aiden3',
      name: 'Aiden Chavez',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      status: 'online',
      lastSeen: 'online'
    },
    {
      id: 'mike3',
      name: 'Mike Thomas',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      status: 'online',
      lastSeen: 'online'
    }, {
      id: 'vincent4',
      name: 'cooper Porter',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      status: 'offline',
      lastSeen: 'left 7 mins ago'
    },
    {
      id: 'aiden4',
      name: 'Aiden alavez',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      status: 'online',
      lastSeen: 'online'
    },
    {
      id: 'mike4',
      name: 'Mike santos',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      status: 'online',
      lastSeen: 'online'
    } 
  ];
  chatHistories: { [key: string]: { messages: { text: string, sender: string, time: string }[] } } = {
    vincent: {
      messages: [
        { text: 'Hey Vincent!', sender: 'me', time: '9:00 AM' },
        { text: 'Can we talk later?', sender: 'me', time: '9:05 AM' }
      ]
    },
    aiden: {
      messages: [
        { text: 'Hi Aiden, how are you?', sender: 'me', time: '10:00 AM' },
        { text: 'I’m good, thanks! How about you?', sender: 'other', time: '10:02 AM' }
      ]
    },
    mike: {
      messages: [
        { text: 'Hello Mike!', sender: 'me', time: '8:00 AM' },
        { text: 'Good morning!', sender: 'other', time: '8:10 AM' }
      ]
    }
  };
  selectPerson(person: { id: string, name: string , avatar: string, status: string, lastSeen: string}) {
    this.selectedPerson = person;
  }
  ngAfterViewInit(): void {
    // Automatically scroll to the bottom when the component initializes
    const chatHistory = document.querySelector('.chat-history');
    chatHistory?.scrollTo(0, chatHistory.scrollHeight);
  }
  sendMessage(): void {
  if (this.newMessage.trim()) { // Ensure the message isn't empty
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Locate the chat history container
    const chatHistory = document.querySelector('.chat-history ul');
    if (chatHistory) {
      // Create a new <li> element for the message
      const newMessageElement = document.createElement('li');
      newMessageElement.classList.add('clearfix'); // Add clearfix for layout fixes

      // Build the inner HTML
      newMessageElement.innerHTML = `
        <div class="message-data text-right clearfix" 
             style="
               margin-bottom: 15px;
               text-align: left;
               color: #434651;
               font-size: 16px;">
          <span class="message-data-time" 
                style="padding-left: 6px;">${currentTime}, Today</span>
        </div>
        <div class="message my-message" 
             style="
               color: #444;
               background: #efefef;
               padding: 18px 20px;
               line-height: 26px;
               font-size: 16px;
               border-radius: 7px;
               display: inline-block;
               position: relative;
               margin-bottom: 30px;">
          ${this.newMessage}
          <div style="
               bottom: 100%;
               left: 30px;
               border: solid transparent;
               content: ' ';
               height: 0;
               width: 0;
               position: absolute;
               pointer-events: none;
               border-bottom-color: #efefef;
               border-width: 10px;
               margin-left: -10px;">
          </div>
        </div>
      `;

      // Append the new message to the chat history
      chatHistory.appendChild(newMessageElement);

      // Added: Update the selected person's chat history
      const personId = this.selectedPerson!.id;
      if (!this.chatHistories[personId]) {
        this.chatHistories[personId] = { messages: [] }; // Ensure history exists
      }
      this.chatHistories[personId].messages.push({
        text: this.newMessage,
        sender: 'me',
        time: currentTime
      });

      this.newMessage = ''; // Clear the input field
      // Added: Automatically scroll to the bottom after adding a new message
      chatHistory.scrollTo({ top: chatHistory.scrollHeight, behavior: 'smooth' });
    }
  }
}
  toggleSearch() {
    const inputGroup = document.querySelector('.input-group');
    const inputField = document.querySelector('.input-group .form-control') as HTMLInputElement;
  
    if (inputGroup && inputField) {
      // Toggle the expanded class on the input group when the search icon is clicked
      inputGroup.classList.toggle('expanded');
      
      // If the input is expanded, focus on the input field
      if (inputGroup.classList.contains('expanded')) {
        inputField.focus(); // Now focus method is valid for inputField
      }
    }
  }
  
 
  
}

