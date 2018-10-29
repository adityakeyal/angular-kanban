import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/board/card/summary/summary.component';
import { DetailComponent } from './components/board/card/detail/detail.component';

import { BoardComponent } from './components/board/board/board.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ListComponent } from './components/board/list/list.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ContentEditDirective } from './directives/common/content-edit.directive';
import {LocalService} from './service/board/local/local.service';
import { ContextMenuComponent } from './components/common/contextmenu/context-menu.component';




@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DetailComponent,
    BoardComponent,
    HeaderComponent,
    ListComponent,
    ContentEditDirective,
    ContextMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [ LocalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
