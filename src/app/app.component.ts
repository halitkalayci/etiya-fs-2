import { Component } from '@angular/core';

@Component({
  selector: 'main-component', // ilgili component diğer htmller tarafından çağırılırken kullanılacak isim
  templateUrl: './app.component.html', // ilgili componentin bağlı olduğu html dosyasının yolu
  styleUrls: ['./app.component.css'], // ilgili componentin bağlı olduğu css dosyalarının yolu
  //template: '<h3>Merhaba</h3>', // ilgili componentin render edeceği html
  //styles: ['h3 {color:red}'], // ilgili componentin stilleri
})
export class AppComponent {}
