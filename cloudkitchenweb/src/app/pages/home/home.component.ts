import { OrderDetailsService } from 'src/app/service/order-details.service';
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { AnimationBuilder, animate } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: { url: string, title: string }[] = [
    { url: '../../../assets/img/slider/slide1-1.jpg', title: 'ultimate paneer pizza' },
    { url: '../../../assets/img/slider/slide1-2.jpg', title: 'stuffed garlic bread' },
    { url: '../../../assets/img/slider/slide1-3.jpg', title: 'canadian special sandwich' },
    { url: '../../../assets/img/slider/slide1-4.jpg', title: 'Mexican garlic bread' },
    { url: '../../../assets/img/slider/slide1-5.jpg', title: 'paneer patty wrap' },
  ];
  currentIndex = 0;
  transform = '0';
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTransform();
    }
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.updateTransform();
    }
  }

  updateTransform() {
    const transform = -this.currentIndex * 100 + '%';
    this.transform = transform;
  }

   constructor(private service:OrderDetailsService,private renderer: Renderer2, private elementRef: ElementRef) {}
   foodData:any;
   ngOnInit(): void {
     this.foodData=this.service.foodDetails;
     this.startSlider();
   }

  

  showTitleIndex: number | null = null;

  showTitle(index: number) {
    this.showTitleIndex = index;
  }

  hideTitle(index: number) {
    this.showTitleIndex = null;
  }

  startSlider() {
    setInterval(() => {
      this.showTitle(this.currentIndex); // Show the title with animation
      setTimeout(() => {
        this.hideTitle(this.currentIndex); // Hide the title after a certain time
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.transform = `-${this.currentIndex * 100}%`;
      },7000); // Adjust the time as needed
    }, 9000);
  }
  
}
