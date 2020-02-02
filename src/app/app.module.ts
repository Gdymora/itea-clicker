import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FinishComponent } from './component/finish/finish.component';
import { LayoutStartComponent } from './component/layout-start/layout-start.component';
import { LayoutPressComponent } from './component/layout-press/layout-press.component';
import {DataService} from './service/data.service';
import { FinishButtonComponent } from './component/finish-button/finish-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FinishComponent,
    LayoutStartComponent,
    LayoutPressComponent,
    FinishButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
