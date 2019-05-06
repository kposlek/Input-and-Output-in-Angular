import { Component, Input } from '@angular/core';

@Component({
  selector: 'inputcomponent',
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input()
  way: string;
  @Input()
  newText: string;
}
