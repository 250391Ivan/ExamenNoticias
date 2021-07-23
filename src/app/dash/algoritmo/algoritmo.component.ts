import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.css']
})
export class AlgoritmoComponent implements OnInit {

  resultado:number=0;

  constructor( private _router:Router) { }

  ngOnInit(): void {
    this.CalcularArea()
    console.log('res--', this.CalcularArea());
    
  }

  LogOut(){
    this._router.navigateByUrl('/login/login')
  }
  CalcularArea(){
    let n=4
    return  this.resultado =2*n*(n-1) +1;
  }

}
