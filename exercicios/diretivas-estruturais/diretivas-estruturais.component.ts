import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome: string, idade: number}> = [
    {nome:'Thiago Matheus', idade: 29},
    {nome:'Thiago Matheus', idade: 29},
    {nome:'Thiago Matheus', idade: 29},
    {nome:'Thiago Matheus', idade: 29}
  ];

  public nome: string = "thiago";

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {

     if(this.condition) {
      this.condition = false;
     } else {
      this.condition = true;
     }
    }, 2000)
  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
     } else {
      this.conditionClick = true;
     }
  }

  public onClickAddList() {
    this.list.push({nome:"Thiago", idade: 31});
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1) // splice serve para remover item do array, o 1 significa para remover aquele item selecionado
  }
}
