import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies!: Movie[];

  constructor() {
    this.movies = [
      new Movie(
        1,
        'Oppenheimer',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ut evenie...',
        'https://movies.monnaie-services.com/FR/poster/FA4E7DDB/320/RAY6M.jpg',
        5,
        false,
        10
      ),
      new Movie(
        2,
        'ça 2',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ut evenie...',
        'https://www.cinemaffiche.fr/6147-tm_large_default/ca-chapitre-2-titre-original-it-chapter-two.jpg',
        4,
        false,
        5
      ),
    ];
  }
}
