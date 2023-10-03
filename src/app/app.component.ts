import { Component } from '@angular/core';

@Component({
  selector: 'main-component', // ilgili component diğer htmller tarafından çağırılırken kullanılacak isim
  templateUrl: './app.component.html', // ilgili componentin bağlı olduğu html dosyasının yolu
  styleUrls: ['./app.component.css'], // ilgili componentin bağlı olduğu css dosyalarının yolu
  //template: '<h3>Merhaba</h3>', // ilgili componentin render edeceği html
  //styles: ['h3 {color:red}'], // ilgili componentin stilleri
})
export class AppComponent {
  private title2 = 'etiya-fs-2'; // html tarafından dahil erişilemez
  title = 'etiya-fs-2';
  students = ['Halit', 'Ozan', 'Murat', 'Musa', 'Merve', 'Emine'];
  name: string = '1234';
  address: string = '';
  toDoList: string[] = [];
  toDo: string = '';

  addToDo() {
    this.toDoList.push(this.toDo);
    this.toDo = '';
  }

  removeFromList(toDo: string) {
    // js'de listenen eleman kaldırmak
    // listeyi filtrelemek

    this.toDoList = this.toDoList.filter((value) => value != toDo);

    // [a,b,c]
    // c => [a,b]
  }

  changeName(event: any) {
    let newValue = event.target.value;
    this.name = newValue;
  }

  changeNameBtn() {
    this.name = 'Butondan değiştirildi';
    this.address = 'Ankara';
  }

  // To-Do Listesi değişkeni
  // to-Do string değişkeni (two way data binding)
  // add fonksiyonu toDo stringini listeye eklemeli
  // to-Do stringi boş stringe eşitlenmeli
}
