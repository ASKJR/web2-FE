import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'web2-FE';
  isCollapsed = true;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
