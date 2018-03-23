import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalComponent],
  entryComponents:[],
  exports:[ModalComponent],
  providers:[ModalService],
  bootstrap: [ModalComponent]
})
export class ScModalModule { }
