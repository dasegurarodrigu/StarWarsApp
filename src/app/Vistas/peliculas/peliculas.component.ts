import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "src/app/Servicios/peliculas.service";
import { Pelicula } from "src/app/Modelos/Pelicula";
import { Router } from "@angular/router";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[];
  constructor(private service: PeliculasService, private router: Router) {
    this.peliculas = new Array<Pelicula>();
    this.service.getPeliculas().subscribe(res => {
      this.peliculas = res["results"];
      console.log(this.peliculas);
    });
  }

  masInfo(pelicula: Pelicula) {
    return this.router.navigate(["info/", pelicula.episode_id]);
  }

  ngOnInit() {}
}
