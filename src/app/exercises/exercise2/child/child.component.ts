import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl:'./child.component.html',
    
})
export class ChildComponent {
 
  @Input() value: string = '';
  @Input() displayChild: boolean = false;

  
}
