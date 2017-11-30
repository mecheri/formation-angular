import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
    // ElementRef permet d'acceder un element natif du DOM
    // ElementRef permet d'éviter de communiquer directement avec l'API DOM qui est une mauvaise pratique
    constructor(private el: ElementRef) {
       this.el.nativeElement.style.backgroundColor = 'red';
    }

    // @HostListener permet de s'abonner aux événements de l'élément DOM qui héberge la directive
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
    
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}