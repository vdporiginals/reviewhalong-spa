import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  @Output() drawerClose = new EventEmitter();
  constructor(
    // public translate: TranslateService
  ) {
    // this.translate.addLangs(['en', 'vi']);
    // this.translate.setDefaultLang('vi');
    // this.translate.use('vi'); //--> I didn't had this line before
  }
  ngOnInit(): void {
  }

  switchLang(lang: string) {
    // this.translate.use(lang);
  }
  toggleSide(): void {
    this.sidenavToggle.emit();
    this.drawerClose.emit();
  }
}
