import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsserviceService } from 'src/app/services/newsservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Formlogin:FormGroup = this._FB.group({
    usuario:['ivan@iva.con', Validators.required],
    pass:['1234', Validators.required],
  })

  constructor(  private _Router:Router,
                private _FB:FormBuilder,
                private _service:NewsserviceService) { }

  ngOnInit(): void {
  }

  Register(){
    this._Router.navigateByUrl('/login/register')
  }

  Login(){
    this.Formlogin.value
   console.log('formulario--', this.Formlogin.value);
    this._service.PostUser(this.Formlogin.value).subscribe(({datos,existe})=>{
      console.log('datos--',datos);
      console.log('existe--',existe);

      if (existe === true) {
        this._Router.navigateByUrl('/dash/new')
        
      } else if(existe === false){
        alert('El usuario no existe, Favor de Registrarse')

      }
      
    })
    
    //this._Router.navigateByUrl('/dash/new')
  }

}
