import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  infoRecibida:any=''

  constructor(private servicio:ServicioService) { 
    servicio.getInfoGames().subscribe((data)=>{
      this.infoRecibida=data
    })
  }

  ngOnInit(): void {
  }

}
