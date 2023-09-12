import { Component } from '@angular/core';

@Component({
  selector: 'debug-remote-entry',
  template: `<debug-nx-welcome-2></debug-nx-welcome-2>`,
})
export class RemoteEntryComponent {
  constructor() {
    console.log('RemoteEntryComponent');
  }
}
