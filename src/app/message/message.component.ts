import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from './messagesevice';
import { MessageChat } from './chatmessage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements AfterViewInit {

  constructor(private messageService: MessageService, private MessageChat: MessageChat, private router: Router) { }
  showAddPersonModal: boolean = false;
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
      name: 'Dr Faical Tahiri',
      avatar: 'https://imagecdn.med.ovh/unsafe/130x130/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/207514-dr-faycal-tahiri-1657024314_3208.jpeg',
      status: 'offline',
      lastSeen: 'left 7 mins ago'
    },
    {
      id: 'aiden3',
      name: 'Dr Mohammed HATIM ',
      avatar: 'https://imagecdn.med.ovh/unsafe/130x130/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/43412-dr-mohammed-hatim-1712250465.jpg',
      status: 'online',
      lastSeen: 'online'
    },
   {
      id: 'vincent4',
      name: 'Dr Najlaa MAHMOUDI ',
      avatar: 'https://imagecdn.med.ovh/unsafe/130x130/filters:format(webp):quality(100):blur(0)/https://www.med.tn/uploads/offices/thumbnail/209100-dr-najlaa-mahmoudi-1686592292_5148.jpg',
      status: 'offline',
      lastSeen: 'left 7 mins ago'
    }
  ];





  newPerson: { name: string, avatar: string, status: string, lastSeen: string } = {
    name: '',
    avatar: '',
    status: '',
    lastSeen: ''
  };
  openAddPersonModal(): void {
    this.showAddPersonModal = true;
  }
  closeAddPersonModal(): void {
    this.showAddPersonModal = false;
    this.newPerson = { name: '', avatar: '', status: '', lastSeen: '' }; // Reset the form
  }

  onAddPerson(): void {
    // Fetch the person by name from the database
    this.messageService.getPersonneByName(this.newPerson.name).subscribe(
      (existingPerson) => {
        // If the person exists, add them to the peopleList
        const personExists = this.peopleList.some(person => person.id === existingPerson.id);

        if (!personExists) {
          this.peopleList.push({
            id: existingPerson.id,
            name: existingPerson.name,
            avatar: existingPerson.avatar,
            status: existingPerson.status,
            lastSeen: existingPerson.lastSeen
          });

          // Optionally, initialize an empty chat history for the new person
          this.chatHistories[existingPerson.id] = { messages: [] };

          console.log('Person added to chat list:', existingPerson.name);
          this.closeAddPersonModal(); // Close the modal after adding
        } else {
          console.log('Person is already in the chat list:', existingPerson.name);
          alert('This person is already in your chat list!');
        }
      },
      (error) => {
        // If the person doesn't exist, show an error message
        if (error.status === 404) {
          console.error('Person not found in the database:', this.newPerson.name);
          alert('Person not found in the database!');
        } else {
          console.error('Error fetching person by name:', error);
        }
      }
    );
  }
  addPerson(id: string, name: string, avatar: string, status: string, lastSeen: string): void {

    const personExists = this.peopleList.some(person => person.id === id);

    if (!personExists) {
      // Add the new person to the peopleList
      this.peopleList.push({
        id: id,
        name: name,
        avatar: avatar,
        status: status,
        lastSeen: lastSeen
      });

      // Optionally, initialize an empty chat history for the new person
      this.chatHistories[id] = { messages: [] };

      console.log(`New person added: ${name}`);
    } else {
      console.log(`Person with id ${id} already exists.`);
    }
  }
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

  appeler(): void {
    this.router.navigateByUrl('/video') ;
  }








}
