import { ModalService } from './sc-modal/modal.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './sc-modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private ele : HTMLElement;
  @ViewChild("modal") modal: ModalComponent;
  constructor(
    private ms:ModalService
  ){    
    
  }
  openModal(id){
    this.modal.openModal(id)
  }

  closeModal(id){
    this.modal.closeModal(id);
  }

  ngOnInit(){
  }
}

