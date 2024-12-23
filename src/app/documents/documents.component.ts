import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doc } from '../Modules/Doc';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'], // Fixed typo from 'styleUrl' to 'styleUrls'
})
export class DocumentsComponent {
  wannadddoc = false; // Controls form visibility
  documentName: string = ''; // Default document name
  documentType: string | null = null; // Tracks the selected document type
  isDocumentType = false; // Tracks if a document type has been selected
  document: File | null = null; // Tracks the uploaded document
  isDocument = false; // Tracks if a document file has been uploaded
  selectedType: string = ''; // Stores the selected document type
  doc!: Doc; // Represents the document model (ensure `Doc` is properly defined)

  // Predefined document types
  documentTypes: string[] = [
    'Compte rendu de consultation',
    "Compte rendu d'hospitalisation",
    'Compte rendu opératoire',
    "Compte rendu d'imagerie médicale",
    'Lettre de liaison',
    "Compte rendu d'anatomie et de cytologie pathologiques",
    'Prescription médicale',
    'Compte rendu de réunion de concertation pluridisciplinaire',
    'Notification de rendez-vous',
    'Autre document médical',
    "Compte rendu d'entrée",
    "Lettre d'adressage",
    "Compte rendu d'accouchement",
    'Certificat médical',
    'Facture / Devis / Remboursement',
  ];

  constructor(private router: Router) {}

  // Toggles the form for adding a new document
  newDocument() {
    this.wannadddoc = !this.wannadddoc;
  }

  // Handles document type selection
  onOptionsSelected(selected: string): void {
    if (selected) {
      this.selectedType = selected;
      this.isDocumentType = true;
      console.log('Selected type:', this.selectedType);
    } else {
      this.isDocumentType = false;
      console.log('No valid selection made.');
    }
  }

  // Handles file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.document = input.files[0];
      this.isDocument = true;
      console.log('File selected:', this.document.name);
    } else {
      this.document = null;
      this.isDocument = false;
    }
  }

  // Adds a new document
  addDoc(): void {
    if (this.document && this.selectedType) {
      console.log('Document added:', {
        name: this.documentName,
        type: this.selectedType,
        file: this.document,
      });
      // Logic to add the document to the database
      this.resetForm();
    } else {
      console.error('Please complete all required fields before adding the document.');
    }
  }

  // Cancels the document addition process
  cancelAddDoc(): void {
    this.resetForm();
    this.wannadddoc = false;
  }

  // Resets the form fields
  private resetForm(): void {
    this.documentName = 'Untitled document';
    this.selectedType = '';
    this.document = null;
    this.isDocument = false;
    this.isDocumentType = false;
  }
}
