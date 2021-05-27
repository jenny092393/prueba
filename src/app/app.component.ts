import { Component} from '@angular/core';
import {ServiceappService} from '../app/app-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
  fotos: any;
  texto: any = "";


  constructor(public service:ServiceappService) {
    
   this.service.getFotos().subscribe((data: any) => {
    console.log(data.hits);
    this.fotos=data.hits;
   });
  }
 buscarTexto(){
  
  console.log(this.texto);
  this.service.getbuscar(this.texto).subscribe((data: any) => {
    console.log(data.hits);
    this.fotos=data.hits;
   });
  
 }
}





 
  
     
