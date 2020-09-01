import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  @Input() sidenav: MatDrawer;
  @Output() toggle = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.sidenav)
  }

  toggleSide() {
    this.toggle.emit(this.sidenav.open());
  }
}
