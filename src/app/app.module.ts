
// Module
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
// Component
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { HeaderLoginComponent } from './shared/components/header-bar/header-login/header-login.component';
import { HeaderSearchComponent } from './shared/components/header-bar/header-search/header-search.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { SidenavExpandComponent } from './shared/components/sidenav-expand/sidenav-expand.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderBarComponent,
    HeaderSearchComponent,
    HeaderLoginComponent,
    SideMenuComponent,
    ErrorPageComponent,
    SidenavExpandComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ToastrModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
