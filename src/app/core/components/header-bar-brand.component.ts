import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar-brand',
  template: `
    <div class="navbar-brand">
      <a class="navbar-item nav-home" router-link="/">
        <span class="tour">MI</span> <span class="of">PRIMERA</span>
        <span class="heroes">APP</span>
      </a>
    </div>
  `
})
export class HeaderBarBrandComponent {}
