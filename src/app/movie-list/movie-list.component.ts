import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies!: Movie[];
  movie1!: Movie;

  ngOnInit() {
    this.movies = [
       new Movie(
        'Oppenheimer',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ut evenie...',
        'https://movies.monnaie-services.com/FR/poster/FA4E7DDB/320/RAY6M.jpg',
        5,
        false
      ),
      new Movie(
        'ça 2',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ut evenie...',
        'https://www.cinemaffiche.fr/6147-tm_large_default/ca-chapitre-2-titre-original-it-chapter-two.jpg',
        4,
        false
      )
    ]
     
  }
}
