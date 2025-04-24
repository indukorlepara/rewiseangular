import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appProductDiscount]'  // The directive is applied using [appProductDiscount]
})
export class ProductDiscountDirective implements OnInit {
  @Input() price: number = 0;  // Input for original price
  @Input() discount: number = 0; // Input for discount amount

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
      const discountedPrice = this.price - this.discount;
      this.el.nativeElement.textContent=discountedPrice;

  }

}
