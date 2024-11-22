import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { CustomComponent } from './custom/custom.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent, CustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [{ provide: 'TEST_VIEW_PROVIDER', useValue: 'testeee' }],
})
export class AppComponent {
  title = 'test-provider';
}
