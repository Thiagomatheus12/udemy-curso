import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  ngOnInit() {

  }

  public exit(): boolean {
    if (confirm('Você deseja realmente sair?')) {
      return true;
    }
    return false;
  }
}
