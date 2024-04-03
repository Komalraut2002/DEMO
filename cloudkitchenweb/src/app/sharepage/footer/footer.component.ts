import { Component, AfterViewInit, ViewChildren, ElementRef, Renderer2 } from '@angular/core';
import { QueryList } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  @ViewChildren('navigationLinks') navigationLinks!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.navigationLinks.forEach(link => {
      this.renderer.listen(link.nativeElement, 'click', () => {
        this.navigationLinks.forEach(item => this.renderer.removeClass(item.nativeElement, 'active'));
        this.renderer.addClass(link.nativeElement, 'active');
      });
    });
  }
}
