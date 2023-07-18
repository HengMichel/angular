import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movie!: Movie;
  color : string = "white";

  heartClick() {
    if (this.movie.liked == true) {
      this.movie.likes--;
      this.movie.liked = false;
      this.color = 'white';
    } else {
      this.movie.likes++;
      this.movie.liked = true;
      this.color = 'pink';

    }
  }
}
