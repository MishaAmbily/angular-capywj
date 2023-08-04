import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inverted-child',
  templateUrl:'./inverted-child.component.html',
  
})
export class InvertedChildComponent {
  inputValue: string = '';
  @Output() valueEntered: EventEmitter<string> = new EventEmitter<string>();

  onValueEntered() {
    this.valueEntered.emit(this.inputValue);
  }
}
