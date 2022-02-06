import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.css']
})
export class Teste2Component implements OnInit {

  nome: String = 'Hariel Rodrigues Baltor';
  idade: Number = 23;
  constructor() { }

  ngOnInit(): void {
  }

}
