import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
    public translate: TranslateService
  ) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('vi');
  }
  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
