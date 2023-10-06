import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv', // bu pipe çağırılırken htmlde hangi isim kullanılacak
})
export class KdvPipe implements PipeTransform {
  // value : pipe'ın uygulandığı değer
  // ... => n adet olabilir
  // transform(1,x,y,z,d,e,f)
  // percent:number=20 => parametreyi optional hale getirir, gönderilmediği durumda bu parametre 20 olarak işlem görür.
  transform(value: number, percent: number = 20): number {
    value += value * (percent / 100);
    return value;
  }
}
