import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { TranslateServerLoader } from './shared/services/translate-server-loader.service';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TransferState } from '@angular/platform-browser';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [TransferState]
      }
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }

export function translateFactory(transferState: TransferState) {
  return new TranslateServerLoader('/assets/i18n', '.json', transferState);
}