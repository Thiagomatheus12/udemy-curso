import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  nome: string = "Thiago";
  idade: number = 25;

  checkedDisabled: boolean = true;

  imgSrc: string = "https://thumbs.dreamstime.com/b/elefante-s%C3%B3-contra-o-por-do-sol-e-nuvens-bonitos-no-savana-parque-nacional-de-serengeti-%C3%A1frica-tanz%C3%A2nia-imag-art%C3%ADstico-106950644.jpg";

  public position: {x: number, y: number} = {x: 0, y: 0};

  alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  mouseMoveTest(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
