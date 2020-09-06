import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Module
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateBrowserLoader } from './shared/services/translate-browser-loader.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { ToastrModule } from 'ngx-toastr';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// AOT compilation support
export function exportTranslateStaticLoader(http: HttpClient, transferState: TransferState) {
  return new TranslateBrowserLoader('/assets/i18n/', '.json', transferState, http);
}
// Component
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { HeaderSearchComponent } from './shared/components/header-bar/header-search/header-search.component';
import { HeaderLoginComponent } from './shared/components/header-bar/header-login/header-login.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { SidenavExpandComponent } from './shared/components/sidenav-expand/sidenav-expand.component';
import { RouterModule } from '@angular/router';
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
    TransferHttpCacheModule,
    FlexLayoutModule.withConfig({ ssrObserveBreakpoints: ['xs', 'lt-md'] }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: exportTranslateStaticLoader,
        deps: [HttpClient, TransferState]
      }
    }
    ),
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
