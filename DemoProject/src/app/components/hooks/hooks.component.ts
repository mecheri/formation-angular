import {
  Component,
  Renderer,
  Input,
  ViewChild,
  SimpleChanges,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'hooks',
  template: `<input #input type="text">`
})
export class HooksComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  @Input() id: number = 0;
  @Input() label: string = "abc";

  @ViewChild('input') input;

  constructor(private renderer: Renderer) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('---> OnChanges fires <---');
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit() {
    console.log('---> OnInit fires <---');
  }

  ngDoCheck() {
    console.log('---> DoCheck fires <---');
  }

  ngAfterViewInit() {
    console.log('---> AfterViewInit fires <---');
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }

  ngAfterViewChecked() {
    console.log('---> AfterViewChecked fires <---');
  }

  ngOnDestroy() {
    console.log('---> OnDestroy fires <---');
  }
}
