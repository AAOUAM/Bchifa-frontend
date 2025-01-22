import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from './messagesevice'; 

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})



export class MessageComponent implements AfterViewInit {

 
  constructor(private messageService: MessageService) {}
  chatHistories2: { [key: string]: any[] } = {};

  
  newMessage: string = '';  
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
  chatHistories: { [key: string]: { messages: { content: string, sender: string, reciever: string, timestamp: string }[] } } = {
    vincent: {
      messages: [
        { content: 'Hey Vincent!',reciever:'sss' , sender: 'me', timestamp: '9:00 AM' },
        { content: 'Can we talk later?',reciever: 'sss', sender: 'me', timestamp: '9:05 AM' }
      ]
    },
    aiden: {
      messages: [
        { content: 'Hi Aiden, how are you?',reciever:'sss' , sender: 'me', timestamp: '10:00 AM' },
        { content: 'I’m good, thanks! How about you?',reciever:'sss' , sender: 'other', timestamp: '10:02 AM' }
      ]
    },
    
  };
  selectPerson(person: { id: string, name: string , avatar: string, status: string, lastSeen: string}) {
    this.selectedPerson = person;
    this.messageService.getMessages(person.id).subscribe((messages) => {
      this.chatHistories2[person.id] = messages;
    });
  }
  ngAfterViewInit(): void {
    // Automatically scroll to the bottom when the component initializes
    const chatHistory = document.querySelector('.chat-history');
    chatHistory?.scrollTo(0, chatHistory.scrollHeight);
  }
  sendMessage(): void {
    console.log("start");

    if (this.newMessage.trim() && this.selectedPerson) { // Ensure the message isn't empty
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  console.log("Ensure the message isn't empty");

      // Create the message object to send to the backend
      const message = {
        content: this.newMessage,
        sender: 'me', // Hardcoded for now; replace with actual sender if needed
        receiver: this.selectedPerson.id, // Use the selected person's ID
        time: currentTime
      };

      console.log(" Create the message object to send to the backend",message)

    
      // **ADDED:** Send the message to the backend
      this.messageService.sendMessage(message).subscribe((savedMessage) => {

        console.log(" inside message service")

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
                   color: rgb(255, 255, 255);;
                   background: #6786FF;
                   padding: 18px 20px;
                   line-height: 26px;
                   font-size: 16px;
                   border-radius: 7px;
                   display: inline-block;
                   position: relative;
                   margin-bottom: 30px;">
              ${savedMessage.content} <!-- **MODIFIED:** Use text from the backend response -->
              <div style="
                   bottom: 100%;
                   left: 30px;
                   border: solid transparent;
                   content: ' ';
                   height: 0;
                   width: 0;
                   position: absolute;
                   pointer-events: none;
                   border-bottom-color: #6786FF;
                   border-width: 10px;
                   margin-left: -10px;">
              </div>
            </div>
          `;
          console.log(" Create the message object to send to the backend")
          // Append the new message to the chat history
          chatHistory.appendChild(newMessageElement);
          console.log(" add message ")
  
          // **UNCHANGED:** Update the selected person's chat history
          const personId = this.selectedPerson.id;
          if (!this.chatHistories[personId]) {
            this.chatHistories[personId] = { messages: [] }; // Ensure history exists
          }
          this.chatHistories[personId].messages.push({
            content: savedMessage.text, // **MODIFIED:** Use text from the backend response
            sender: 'me',
            reciever:'her',
            timestamp: currentTime
          });
          console.log(" updated history ")
          this.newMessage = ''; // Clear the input field
          console.log(" empty bar ")
          // **UNCHANGED:** Automatically scroll to the bottom after adding a new message
          chatHistory.scrollTo({ top: chatHistory.scrollHeight, behavior: 'smooth' });
          console.log(" scroll ")
        }
      });
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

