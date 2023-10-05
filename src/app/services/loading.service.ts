import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  // bir değişkenin abone olunabilir hale getirilmesi için Subject veya BehaviorSubject classları kullanılır.
  // subscribeable alanlar isimlendirilken sonuna $ işareti eklenir (kültür)

  // subject başlangıçta undefined
  // behaviorsubject başlangıç değeri ister
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  startLoading() {
    // setter
    this.isLoading$.next(true);
  }
  stopLoading() {
    this.isLoading$.next(false);
  }
}
