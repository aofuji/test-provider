import {
  Component,
  Host,
  HostAttributeToken,
  Inject,
  inject,
  Optional,
  SkipSelf,
} from '@angular/core';
import { EmojiService } from '../emoji.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom',
  imports: [CommonModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss',
})
export class CustomComponent {

  constructor(
    @Inject('TEST_VIEW_PROVIDER')
    @Optional()
    @Host()
    valorNoViewProviders?: string,

    @Inject('TESTE_PROVIDER')
    @Optional()
    valorNoProviders?: string
  ) {
    console.log(valorNoViewProviders);
    console.log(valorNoProviders);
  }
}
