import { Component, OnChanges, SimpleChanges, OnInit, AfterViewInit, ViewChild, Renderer, AfterViewChecked, OnDestroy } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  // path: src/app/user/user.component.ts
  user: User = {
    id: 1,
    username: 'test',
    password: 'pa$$word',
    email: 'mehdi.mecheri@viveris.fr',
    firstname: 'Mehdi',
    lastname: 'Mecheri',
    birthdate: new Date(2018, 5, 22)
  };
  dateFormat = "MM/dd/yy";
  image = 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';

  @ViewChild('input') input;

  constructor(private renderer: Renderer) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('---> OnChanges Can\'t fire here <---');
  }

  ngOnInit() {
    console.log('---> OnInit fires <---');
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
