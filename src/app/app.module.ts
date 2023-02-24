import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncryptService, LibCryptoNinjaModule } from 'lib-crypto-ninja';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibCryptoNinjaModule.forRoot(environment)
  ],
  providers: [
    EncryptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
