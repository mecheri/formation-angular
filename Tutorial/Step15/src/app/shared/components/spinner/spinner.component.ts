import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpinnerState, Spinner } from './../../../core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  visible: boolean;
  spinnerStateChanged: Subscription;

  /**
   * Creates an instance of SpinnerComponent.
   * @param {Spinner} spinner
   * @memberof SpinnerComponent
   */
  constructor(
    private spinner: Spinner
  ) { }

  /**
   * Component init
   *
   * @memberof SpinnerComponent
   */
  ngOnInit() {
    this.spinnerStateChanged = this.spinner.spinnerState
      .subscribe((state: SpinnerState) => this.visible = state.show);
  }

  /**
   * Component destroy
   *
   * @memberof SpinnerComponent
   */
  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}