import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Layout } from './core/layout/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ Layout ],
})
export class App {
}
