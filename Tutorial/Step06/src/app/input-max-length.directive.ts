import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputMaxLength]'
})
export class InputMaxLengthDirective {

  @Input() appInputMaxLength: string;

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event']) onMouseEnter($event: any) {
    if ($event.srcElement.value.length === this.appInputMaxLength) {
      $event.preventDefault();
    }
  }
}