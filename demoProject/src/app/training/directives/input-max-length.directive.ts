import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputMaxLength]'
})
export class InputMaxLengthDirective {
  @Input() inputMaxLength: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('keypress', ['$event']) onMouseEnter($event: any) {
    if($event.srcElement.value.length === this.inputMaxLength){
      $event.preventDefault();
    }
  }
}
