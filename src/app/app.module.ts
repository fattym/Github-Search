import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileService } from './services/profile.service';
import { HighlightDirective } from './highlight.directive';
import { DateAgoPipe } from './pipes/date-ago.pipe';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    PageNotFoundComponent,
    HighlightDirective,
    DateAgoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
