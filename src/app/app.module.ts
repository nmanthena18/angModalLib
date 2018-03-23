import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DialgComponent } from './dialg/dialg.component';
import { MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScModalModule } from './sc-modal/sc-modal.module';
import { TestDialogComponent, DialogOverviewExampleDialog } from './sc-modal/test-dialog/test-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    DialgComponent,
    TestDialogComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ScModalModule
  ],
  entryComponents:[
    DialogOverviewExampleDialog,
    TestDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
