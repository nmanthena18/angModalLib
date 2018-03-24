import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-test-dialog',
  moduleId: module.id.toString(),
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.css']
})
export class TestDialogComponent implements OnInit {

  constructor(private ms:ModalService) { }

  ngOnInit() {
  }


}
