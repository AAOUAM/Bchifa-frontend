import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarStateService {
  private showButtonsSource = new BehaviorSubject<boolean>(true);
  showButtons$ = this.showButtonsSource.asObservable();

  setShowButtons(state: boolean): void {
    this.showButtonsSource.next(state);
  }
}
