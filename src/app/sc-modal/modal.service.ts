import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  private modals: any[] = [];
  constructor() { }

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }
  remove(id: string) {
    // remove modal from array of active modals
    let modalToRemove = this.modals.indexOf(id);
    this.modals = this.modals.splice(modalToRemove, 1);
}

open(id: string) {
    var modal 
    this.modals.forEach( (item)=>{
        if(item.id == id) modal =  item;
    });
    modal.ele.nativeElement.style.display = 'block';
}

close(id: string) {
    var modal 
    this.modals.forEach( (item)=>{
        if(item.id == id) modal =  item;
    });
    modal.ele.nativeElement.style.display = 'none';
}

}
