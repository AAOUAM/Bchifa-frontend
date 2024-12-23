import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rendezvous',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule], // Import necessary modules like CommonModule for pipes
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezvousComponent implements OnInit {
  currentMonth = new Date();
  

  constructor() {
    this.generateDaysInMonth();
  }
  daysInMonth: number[] = [];
  rendezvousDates: Date[] = [
    new Date(2024, 11, 25), // Example dates
    new Date(2024, 11, 30),
  ];
  rendezvousList = [
    {
      title: 'Meeting with John',
      date: new Date('2024-12-22T14:00:00'),
      location: 'Conference Room A',
      description: 'Discuss project progress and next steps.'
    },
    {
      title: 'Doctor Appointment',
      date: new Date('2024-12-23T09:00:00'),
      location: 'City Hospital',
      description: 'Annual checkup.'
    },
    {
      title: 'Team Lunch',
      date: new Date('2024-12-25T12:00:00'),
      location: 'Café Italia',
      description: 'Team bonding session over lunch.'
    }
  ];

  

  ngOnInit(): void {
    this.initCalendar();
  }

  initCalendar() {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) {
      console.error('Calendar element not found!');
      return;
    }

    calendarEl.innerHTML = `<h3>Your Rendez-vous</h3>`;
    this.rendezvousList.forEach(rendezvous => {
      const date = new Date(rendezvous.date);
      calendarEl.innerHTML += `<p>${rendezvous.title} - ${date.toLocaleString()}</p>`;
    });
  }
  generateDaysInMonth() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);
  }
  isRendezvousDate(day: number): boolean {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    return this.rendezvousDates.some(
      (date) =>
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day
    );
  }
}
