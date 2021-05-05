import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-layout',
  templateUrl: './contacts-layout.component.html',
  styleUrls: ['./contacts-layout.component.css']
})
export class ContactsLayoutComponent {
  enterComment = "";
  comment = "";

  TransferData() {
    this.comment = this.enterComment;
  }
}
