import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Module
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Component
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { HeaderSearchComponent } from './shared/components/header-bar/header-search/header-search.component';
import { HeaderLoginComponent } from './shared/components/header-bar/header-login/header-login.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderBarComponent,
    HeaderSearchComponent,
    HeaderLoginComponent,
    SideMenuComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}