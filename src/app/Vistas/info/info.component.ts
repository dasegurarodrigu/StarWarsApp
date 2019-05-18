import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula, Personaje } from 'src/app/Modelos/Pelicula';
import { PeliculasService } from 'src/app/Servicios/peliculas.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  pelicula :  Pelicula;
  personajes: Personaje[];
  links : string[];
  constructor(private activated :  ActivatedRoute, private service : PeliculasService) { 
    this.links =  new Array();
    this.personajes = new Array<Personaje>();
    this.activated.params.subscribe( res => {
      this.pelicula = <Pelicula> res;

      this.activated.params.subscribe( res => {
        console.log(res['id']);
        let x: number = res['id'];
        this.service.getPeliculaById(x +"").subscribe(dos => {
          this.pelicula =  dos;
          console.log(this.pelicula);
          
        });
      }
      );

      // this.pelicula.characters.forEach(personaje => {
      //   this.service.getPersonaje(personaje).subscribe(x => {
      //     this.personajes.push(x);
      //   });
      // });
      // console.log(this.pelicula);
      // console.log(this.personajes);
    }
    );
  }

  ngOnInit() {
  }

}
