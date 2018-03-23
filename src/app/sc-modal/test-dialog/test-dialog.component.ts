import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.css']
})
export class TestDialogComponent implements OnInit {

  constructor(private ms:ModalService) { }

  ngOnInit() {
  }

  openIt(d, prop){
   this.ms.openIt()
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor() { }

  onNoClick(): void {
    //this.dialogRef.close();
  }

}
