import { Component } from '@angular/core';
import { EmojiService } from '../emoji.service';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers:[EmojiService],
  // viewProviders: [{ provide: EmojiService, useValue: '👪' }],
})
export class ParentComponent {}
