import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SpinnerState, Spinner } from './../../../core/services/spinner.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent implements OnInit, OnDestroy {
  private visible: boolean;

  private spinnerStateChanged: Subscription;

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