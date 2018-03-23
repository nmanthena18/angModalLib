import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { ModalService } from '../sc-modal/modal.service';



@Component({
  moduleId: module.id.toString(),
  templateUrl: './dialg.component.html',
  styleUrls: ['./dialg.component.css']
})
export class DialgComponent implements OnInit {
  private bodyText: string;
  constructor(public dialog: MatDialog,
  private ms:ModalService
  ) { }


  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }
  
  openModal(id: string){
    this.ms.open(id);
  }

  closeModal(id: string){
      this.ms.close(id);
  }

}
