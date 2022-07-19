import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  valorRuta:string=''
  infoRecibida:any=''

  constructor(private ruta:ActivatedRoute , private servicio:ServicioService) {
    this.ruta.params.subscribe((data:any)=>{
      this.valorRuta=data.value
      this.servicio.getInfoDetalles(this.valorRuta).subscribe((info:any)=>{
           this.infoRecibida=info
      })
    })
   }

  ngOnInit(): void {
  }

}
