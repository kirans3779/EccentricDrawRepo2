import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule,SocketIoConfig } from "ngx-socket-io";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawingComponent } from './drawing/drawing.component';
import { ViewComponent } from './view/view.component';

const page1Config: SocketIoConfig = { url: 'http://localhost:4200', options: {} };
// const page2Config: SocketIoConfig = { url: 'http://localhost:4200/page2', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    DrawingComponent,
    ViewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(page1Config),
    // SocketIoModule.forRoot(page2Config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
