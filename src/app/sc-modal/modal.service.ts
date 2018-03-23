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
    // open modal specified by id
    let index = this.modals.indexOf(id);
    let modal = this.modals[index];
    modal.open();
}

close(id: string) {
    // close modal specified by id
    let index = this.modals.indexOf(id)
    let modal = this.modals[index];
    modal.close();
}
}
