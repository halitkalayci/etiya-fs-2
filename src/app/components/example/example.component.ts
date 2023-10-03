import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent {
  @Input() // => bu comp.'i çağıran complardan gönderilecek
  title: string = 'Ürün Başlığı';
}
