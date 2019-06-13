import {
  Component,
  SimpleChanges,
  OnChanges,
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  Renderer,
  ViewChild
} from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

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
  image = 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f471-1f3fb.png';

  constructor(
    private cd: ChangeDetectorRef,
    private renderer: Renderer
  ) {
    // Est appelé lorsque Angular crée un composant en appelant new de la classe.
  }

  // Appelé à chaque fois qu'il y a un changement dans l'une des propriétés d'entrée (@Input) du composant.
  // SimpleChanges permet de voir quelles propriétés d'entrée ont changé (si nous en avons plusieurs) et quelles sont les valeurs précédentes et actuelles.
  @Input() dates;
  ngOnChanges(changes: SimpleChanges) {
    console.log('---> OnChanges fires here <---', changes);
  }

  ngOnInit() {
    // Invoqué lorsque le composant donné a été initialisé.
    // Ce hook n'est appelé qu'une fois après le premier ngOnChanges
    console.log('---> OnInit fires <---');
  }

  ngDoCheck(): void {
    // Ici, on peut grace au ChangeDetectorRef, declencher manuellement la detection du changement quand il s'agit d'une transformation et non d'une création d'un nouvelle référence de la structure de donnée en entrée
    this.cd.markForCheck();
    console.log('---> DoCheck fires <---', this.dates);
  }

  @ViewChild('input', null) input;
  ngAfterViewInit(): void {
    // Appelé lorsque la vue du composant a été complètement initialisée
    console.log('---> AfterViewInit fires <---');
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }

  ngAfterViewChecked(): void {
    // Appelé à chaque fois que la vue du composant donné a été vérifiée par le mécanisme Change Detection d'Angular.
    console.log('---> AfterViewChecked fires <---');
  }

  ngOnDestroy(): void {
    // Il est appelé pour nettoyer la logique d'un composant (events, abonnements, timers..), juste avant que ce dernier ne soit détruit.
    console.log('---> OnDestroy fires <---');
  }

}
