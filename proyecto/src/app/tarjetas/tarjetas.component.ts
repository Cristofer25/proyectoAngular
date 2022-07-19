import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  @Input() titulo:string=''
  @Input() imagen:string='https://fundaciongabo.org/sites/default/files/imagenes-falsas.jpg'
  @Input() idGame:string=''

  constructor(private router:Router){}

  detalles(){
    this.router.navigate(["detalles",this.idGame])

  }
}
