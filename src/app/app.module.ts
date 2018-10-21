import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/board/card/summary/summary.component';
import { DetailComponent } from './components/board/card/detail/detail.component';

import { BoardComponent } from './components/board/board/board.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ListComponent } from './components/board/list/list.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DetailComponent,
    BoardComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
