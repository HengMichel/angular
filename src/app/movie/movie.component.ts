import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../movieService';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {

  constructor(private serviceMovie : MovieService){}
  @Input() movie!: Movie;
  couleur  = "white";

  heartClick() {
    if (this.movie.liked == true) {
      this.movie.likes--;
      this.movie.liked = false;
      this.couleur = 'white';
    } else {
      this.movie.likes++;
      this.movie.liked = true;
      this.couleur = 'pink';

    }
  }

  remove(){
    // this.serviceMovie.movies.filter(film => film.id == this.movie.id);


    const index = this.serviceMovie.movies.findIndex((film) => film.id === this.movie.id);
    if (index !== -1) {
      this.serviceMovie.movies.splice(index, 1);}
  }
}
