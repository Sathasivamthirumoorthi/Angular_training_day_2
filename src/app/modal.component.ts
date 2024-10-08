// modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal" *ngIf="isVisible">
      <div class="modal-content"  [ngClass]="sizeClass">
        <span class="close" (click)="close()">&times;</span>
        <h2>{{ title }}</h2>
        <ng-content></ng-content>
        <div class="modal-footer">
            <button (click)="confirm()">Confirm</button>
            <button (click)="close()">Cancel</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal { display: flex; justify-content: center; align-items: center; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); }
    .modal-content { background-color: white; padding: 20px; border-radius: 5px; position: relative; }
    .modal-footer { display: flex; justify-content: flex-end; align-items: center; }
    .close { position: absolute; top: 10px; right: 20px; cursor: pointer; }
    .small { width: 300px; }
    .medium { width: 500px; }
    .large { width: 700px; }
  `]
})
export class ModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() isVisible: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // Default size
  @Output() onClose = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  get sizeClass() {
    return this.size; // Return the size as a class
  }

  close() {
    this.isVisible = false;
    this.onClose.emit();
  }

  confirm() {
    this.onConfirm.emit();
    this.close();
  }
}
