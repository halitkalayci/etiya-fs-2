import { Component } from '@angular/core';

@Component({
  templateUrl: './first-workshop.component.html',
  styleUrls: ['./first-workshop.component.css'],
})
export class FirstWorkshopComponent {
  private title2 = 'etiya-fs-2'; // html tarafından dahil erişilemez
  title = 'etiya-fs-2';
  students = ['Halit', 'Ozan', 'Murat', 'Musa', 'Merve', 'Emine'];
  name: string = '1234';
  address: string = '';
  toDoList: string[] = [];
  toDo: string = '';
  cartItems: number = 0;

  addToDo() {
    this.toDoList.push(this.toDo);
    this.toDo = '';
  }

  increase() {
    this.cartItems++;
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
