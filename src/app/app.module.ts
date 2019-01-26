import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvasComponent } from './components/canvas/canvas.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { 
  MatButtonModule 
} from '@angular/material/';
import { OptionsFormComponent } from './components/options-form/options-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    LandingPageComponent,
    OptionsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
