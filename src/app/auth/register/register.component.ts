import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsserviceService } from 'src/app/services/newsservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Formlogin:FormGroup = this._FB.group({
    usuario:['ivan', Validators.required],
    correo:['ivan@ivan.com', Validators.required],
    pass:['1234', Validators.required],
  })

  constructor( private _router:Router,
               private _FB:FormBuilder,
               private _servicio:NewsserviceService) { }

  ngOnInit(): void {
  }

  login(){
    this._router.navigateByUrl('/login')
  }
  Iniciar(){
    console.log(this.Formlogin.value);
    this._servicio.CrearUsuario(this.Formlogin.value).subscribe(({datos, existe})=>{
      console.log('usuario creado');
      if (existe === true) {
        this._router.navigateByUrl('/dash/new')
      }
      else{
        alert('error al crear usuario')
      }

      
    })
    

    //this._router.navigateByUrl('/dash/new')

  }

}
