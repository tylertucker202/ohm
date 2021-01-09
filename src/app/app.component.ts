import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'ohm';
  public selectedIndex: number

  on_tab_click(event: any): void {
    console.log(event)
  }
}
