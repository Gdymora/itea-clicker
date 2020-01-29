import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './component/start/start.component';
import { PressComponent } from './component/press/press.component';
import { FinishComponent } from './component/finish/finish.component';
import { LayoutStartComponent } from './component/layout-start/layout-start.component';
import { LayoutPressComponent } from './component/layout-press/layout-press.component';
import {DataService} from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    StartComponent,
    PressComponent,
    FinishComponent,
    LayoutStartComponent,
    LayoutPressComponent
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
