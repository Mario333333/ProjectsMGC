import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola', //este es el nombre de la etiqueta con el que se usara
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit { //nombre de la clase se usa en el archivo module 
    title = 'Hola';
  users = ['1','2','3','4','5'];
  constructor() { }
  

  ngOnInit() {
  }

}
