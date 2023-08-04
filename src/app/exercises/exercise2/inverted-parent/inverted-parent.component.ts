import { Component } from '@angular/core';

@Component({
  selector: 'app-inverted-parent',
  templateUrl: './inverted-parent.component.html',
  
})
export class InvertedParentComponent {
  inputValue: string = '';

  displayValue(value: string) {
    this.inputValue = value;
  }
}
