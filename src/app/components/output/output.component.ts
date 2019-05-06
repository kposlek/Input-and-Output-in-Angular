import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'output',
  templateUrl: './output.component.html'
})
export class OutputComponent {
  @Output()
  sendText: EventEmitter<string> = new EventEmitter<string>();
  clicking(output: string) {
    this.sendText.emit(output);
  }
}
