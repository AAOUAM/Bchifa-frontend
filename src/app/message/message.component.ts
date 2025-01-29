import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from './messagesevice'; 
import { MessageChat } from './chatmessage'; 

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements AfterViewInit {

  newMessage: string = '';  
  selectedPerson: { id: string, name: string, avatar: string, status: string, lastSeen: string } | null = null;
  currentTime: string = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  chatHistories: { [key: string]: { messages: { content: string, sender: string, reciever: string, timestamp: string }[] } } = {
    vincent: {
      messages: [
        { content: 'Hey Vincent!', reciever: 'sss', sender: 'me', timestamp: '9:00 AM' },
        { content: 'Can we talk later?', reciever: 'sss', sender: 'me', timestamp: '9:05 AM' }
      ]
    },
    aiden: {
      messages: [
        { content: 'Hi Aiden, how are you?', reciever: 'sss', sender: 'me', timestamp: '10:00 AM' },
        { content: 'I’m good, thanks! How about you?', reciever: 'sss', sender: 'other', timestamp: '10:02 AM' }
      ]
    },
  };

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

  constructor(private messageService: MessageService, private MessageChat: MessageChat) {}

  selectPerson(person: { id: string, name: string, avatar: string, status: string, lastSeen: string }) {
    this.selectedPerson = person; // Set the currently selected person
  
    // Fetch chat history for the selected person
    this.messageService.getMessages(person.id).subscribe((messages) => {
      // Map the messages into the desired format
      this.chatHistories[person.id] = {
        messages: messages.map((msg) => ({
          content: msg.content,
          sender: msg.sender,
          reciever: msg.receiver,
          timestamp: new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }))
      };
    });
  }

  ngAfterViewInit(): void {
    const chatHistory = document.querySelector('.chat-history');
    chatHistory?.scrollTo(0, chatHistory.scrollHeight);
  }

  sendMessage(): void {
    if (this.newMessage.trim() && this.selectedPerson) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const message = {
        content: this.newMessage,
        sender: 'me', 
        receiver: this.selectedPerson.id, 
        time: currentTime
      };

      this.messageService.sendMessage(message).subscribe((savedMessage) => {
        const personId = this.selectedPerson.id;
        if (!this.chatHistories[personId]) {
          this.chatHistories[personId] = { messages: [] };
        }

        this.chatHistories[personId].messages.push({
          content: savedMessage.content,
          sender: 'me',
          reciever: this.selectedPerson.id,
          timestamp: currentTime
        });

        this.newMessage = ''; // Clear the input field

        // Scroll to the bottom of the chat history
        const chatHistory = document.querySelector('.chat-history');
        chatHistory?.scrollTo(0, chatHistory.scrollHeight);
      });
    }
  }

  toggleSearch() {
    const inputGroup = document.querySelector('.input-group');
    const inputField = document.querySelector('.input-group .form-control') as HTMLInputElement;

    if (inputGroup && inputField) {
      inputGroup.classList.toggle('expanded');
      if (inputGroup.classList.contains('expanded')) {
        inputField.focus();
      }
    }
  }
}