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
    modal.ele.nativeElement.style.visibility = 'visible';
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    let modalContainer = modal.ele.nativeElement.getElementsByClassName('modal')[0];
    let modalHeight = y - modalContainer.clientHeight;
    modalContainer.style.top = modalHeight/2+'px';
    this.addRemoveCls(modalContainer, 'modal-open', 'modal-close');
}

close(id: string) {
    var modal 
    this.modals.forEach( (item)=>{
        if(item.id == id) modal =  item;
    });
    let modalContainer = modal.ele.nativeElement.getElementsByClassName('modal')[0];
    this.addRemoveCls(modalContainer, 'modal-close', 'modal-open');     
    setTimeout( ()=>{
        modal.ele.nativeElement.style.visibility = 'hidden';
    }, 200);
}

private addRemoveCls(modal, add, remove){
    var classes = modal.getAttribute('class').split(" ");
    let isOpen = classes.indexOf(add);
    isOpen < 0 ? classes.push(add): '';
    let index = classes.indexOf(remove);
    index > -1 ? classes.splice(index, 1) : '';
    console.log(classes)
    modal.className = classes.join().replace(',', ' ');
}

}
