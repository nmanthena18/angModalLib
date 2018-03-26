import { Component, OnInit, Input,  ElementRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { modelProp } from './typings/model';
import { ModalService } from './modal.service';

@Component({
  selector: 'sc-modal',
  moduleId: module.id.toString(),
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy  {
  @Input() id:string;
  private element:HTMLElement;
  constructor(
    private ms:ModalService,
    private ele :  ElementRef,
  ) { 
    this.element = ele.nativeElement;
  }

  ngOnInit() {
    let modal = this;
 
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
 
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.querySelector('body');
 
        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            var target = e.target;
            if(target.className == 'modal-background'){
              this.ms.close(this.id);
            }
        }.bind(this));
        this.ms.add(this);
  }

  openModal(id: string){
    this.ms.open(id);
  }

  closeModal(id: string){
      this.ms.close(id);
  }


  ngOnDestroy(){
    this.ms.remove(this.id);
    this.element.remove();
  }

}
