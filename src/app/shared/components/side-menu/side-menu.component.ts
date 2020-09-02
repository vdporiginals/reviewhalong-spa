import { Component, OnInit } from '@angular/core';
import { Menu } from '../../config/menu-data';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  pages = Menu;
  constructor() { }

  ngOnInit(): void {
  }

}
