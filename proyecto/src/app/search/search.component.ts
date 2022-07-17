import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
valorLink:string=""
infoBuscada:any=""

  constructor(private route:ActivatedRoute, private servicio:ServicioService) { 
    this.route.params.subscribe((data:any)=>{
      this.valorLink=data.id
      this.servicio.getInfoSearch(this.valorLink).subscribe((info:any)=>{
        this.infoBuscada=info
      })
    })
  }

  ngOnInit(): void {
  }

}
