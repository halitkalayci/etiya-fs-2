import { Component } from '@angular/core';

@Component({
  selector: 'main-component', // ilgili component diğer htmller tarafından çağırılırken kullanılacak isim
  templateUrl: './app.component.html', // ilgili componentin bağlı olduğu html dosyasının yolu
  styleUrls: ['./app.component.css'], // ilgili componentin bağlı olduğu css dosyalarının yolu
  //template: '<h3>Merhaba</h3>', // ilgili componentin render edeceği html
  //styles: ['h3 {color:red}'], // ilgili componentin stilleri
})
export class AppComponent {
  title = 'etiya-fs-2';
  private title2 = 'etiya-fs-2'; // html tarafından dahil erişilemez
  students = ['Halit', 'Ozan', 'Murat', 'Musa', 'Merve', 'Emine'];
  name: string = '1234';

  changeName(event: any) {
    let newValue = event.target.value;
    this.name = newValue;
  }

  changeNameBtn() {
    this.name = 'Butondan değiştirildi';
  }
}
