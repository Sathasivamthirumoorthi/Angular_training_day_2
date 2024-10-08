// alert.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div
      *ngIf="isMessgeContent(); else inputContent"
      [ngClass]="['alert', alertType]"
      role="alert"
    >
      {{ message }}
    </div>
    <ng-template #inputContent>
      <div [ngClass]="['alert', alertType]" role="alert">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  styles: [
    `
      .alert {
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
      }
      .success {
        background-color: #dff0d8;
        color: #3c763d;
      }
      .error {
        background-color: #f2dede;
        color: #a94442;
      }
      .warning {
        background-color: #fcf8e3;
        color: #8a6d3b;
      }
      .info {
        background-color: #d9edf7;
        color: #31708f;
      }
      .close-button {
        margin-left: 10px;
      }
    `,
  ],
})
export class AlertComponent {
  @Input() alertType: 'success' | 'error' | 'warning' | 'info' = 'info';

  @Input() message: string = '';

  isMessgeContent() {
    return this.message && this.message !== '' && this.message.length > 0;
  }

  close() {
    // Logic to hide the alert (could use an EventEmitter to notify parent)
    console.log('Alert closed');
  }
}
