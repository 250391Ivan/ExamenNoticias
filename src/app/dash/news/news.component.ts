import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsserviceService } from 'src/app/services/newsservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  noticias:any;
  fecha:any =  new Date()
  bandera:boolean = true;

  constructor(  private _newSer:NewsserviceService,
                private _router:Router) {
                  

                 }

  ngOnInit(): void {

    this._newSer.GetNews().subscribe(response=>{
      console.log('noticias--', this.fecha);

      if (!response) {
        this.bandera = true
       
      }
      this.bandera = false
      this.noticias = response;
    })

  }
  LogOut(){
    this._router.navigateByUrl('/login/login')
  }


 
}
