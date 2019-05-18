import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pelicula, Films, Personaje } from '../Modelos/Pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http : HttpClient) { }

  getPeliculas(): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(environment.urlPeliculas);
  }

  getPeliculaById(id:string): Observable<Pelicula>{
    console.log(id);
    
    return this.http.get<Pelicula>(environment.urlPeliculas + id +"/");
  }

getPersonaje(x: string): Observable<Personaje>{
    return this.http.get<Personaje>(x + "");
  }
}
