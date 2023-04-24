import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent {

  private poupanca: number = 10;
  private carteira: number = 50;

  constructor() {}

get getPoupanca(): number {
  return this.poupanca;
}

get getCarteira(): number {
  return this.carteira;
}

public setSacar(value: String): number {
  const sacar = Number(value);
  console.log(sacar)
  return sacar;
}

public setDepositar(value: String): number {
  const depositar = Number(value);
  console.log(depositar)
  return depositar;
}
}
