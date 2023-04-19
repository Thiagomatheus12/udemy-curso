import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public heightPx: string = "20px";
  public backgroundColor: string = "black";

  public nome: string = "";
  public list: Array<{nome: string}> = [];

  public date:Date = new Date();
  constructor() { }

  ngOnInit(): void {

    setInterval( () => {
      if (this.valor) {
        this.valor = false;
      }else {
        this.valor = true;
      }

      if(this.heightPx == "20px") {
        this.heightPx = "50px";
        this.backgroundColor = "blue";
      }else {
        this.heightPx = "20px"
        this.backgroundColor = "black";
      }
    }, 2000)
  }

  public salvar() {
    this.list.push({nome: this.nome});
    this.nome = "";
  }

}
