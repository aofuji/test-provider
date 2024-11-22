import { Component } from '@angular/core';
import { EmojiService } from '../emoji.service';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  // providers:[{provide:EmojiService, useValue:'valor do provider'}, {
  //   provide:'TESTE_PROVIDER', useValue:'teste do provider'
  // }],
  // viewProviders: [{ provide: 'TEST_VIEW_PROVIDER', useValue: 'testeee' }],
})
export class ParentComponent {}
