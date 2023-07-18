import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoncomposantComponent } from './moncomposant/moncomposant.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RoutingModule } from './router.module';



@NgModule({
  declarations: [
    AppComponent,
    MoncomposantComponent,
    NavBarComponent,
    MovieComponent,
    MovieListComponent
  ],
  
  imports: [
    BrowserModule,
    RoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
