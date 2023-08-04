import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
    
})
export class ParentComponent {

  inputValue: string = '';
  firstValue:string = '';
  

  displayValue() {
   this.firstValue = this.inputValue;
    
   
  }
}
