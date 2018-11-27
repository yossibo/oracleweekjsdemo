import { ConsoleService } from './services/console.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AllusersComponent } from './allusers/allusers.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    Comp1Component,
    Comp2Component,
    AllusersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConsoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
