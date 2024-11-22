import { Component, inject } from '@angular/core';
import { EmojiService } from '../emoji.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom',
  imports: [CommonModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent {

  public emoji = inject(EmojiService,{ optional:true })

}
