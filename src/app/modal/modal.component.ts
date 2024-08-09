import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { convertDBDateToString } from '../shared';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() object!: Object;
  @Input() title!: string;

  constructor(public activeModal: NgbActiveModal) {}

  printModalText(): string {
    let modalTextContent = '';
    Object.entries(this.object).forEach(([key, value]) => {
      let property = `${key.charAt(0).toLocaleUpperCase()}${key.slice(1)}`;
      if (property == 'Nascimento') {
        value = convertDBDateToString(value);
      }
      modalTextContent += `<p><b>${property}</b>: ${value}</p>`;
    });
    return modalTextContent;
  }
}
