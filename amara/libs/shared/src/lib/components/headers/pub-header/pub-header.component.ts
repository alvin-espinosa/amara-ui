import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'amara-pub-header',
  templateUrl: './pub-header.component.html',
  styleUrls: ['./pub-header.component.scss']
})
export class PubHeaderComponent {

  @Output() login = new EventEmitter();

  public redirectToHome() {
    this.login.emit();
  }

}
