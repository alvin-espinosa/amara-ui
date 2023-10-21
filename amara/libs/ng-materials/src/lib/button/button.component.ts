import { Component, Input } from '@angular/core';

@Component({
  selector: 'amara-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = 'Primary';
  @Input() color = 'primary';
}


