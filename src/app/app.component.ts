import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  modalSize: 'small' | 'medium' | 'large' = 'medium'; // Default size
  isModalVisible = false;

  openModal(size: 'small' | 'medium' | 'large') {
    this.modalSize = size;
    this.isModalVisible = true;
  }

  handleClose() {
    console.log('Modal closed');
    this.isModalVisible = false;
  }

  handleConfirm() {
    console.log('Action confirmed!');
    // Add your confirmation logic here
  }
}
