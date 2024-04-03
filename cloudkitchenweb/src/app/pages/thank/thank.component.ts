import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
// export class ThankComponent {
//   isPopupOpen: boolean = false;
   
//   openPopup() {
//     this.isPopupOpen = true;
//   }

//   closePopup() {
//     this.isPopupOpen = false;
//   }
// }

export class ThankComponent implements OnInit {
  isPopupOpen: boolean = false;

  ngOnInit() {
    this.openPopup();
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}
