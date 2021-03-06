import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static isBrowser = new BehaviorSubject<boolean>(null);
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
  
  }
  
}
