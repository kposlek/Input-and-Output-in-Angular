import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  text: string = '';
  commingText(message: string) {
    this.text = message;
  }
  normalText(typedText: string) {
    return this.text;
  }
  upperCaseText(typedText: string) {
    return this.text.toUpperCase();
  }
}
