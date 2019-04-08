import { Component, OnInit } from '@angular/core';
//import {Movies} from '../mock-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = [
    { id: 1,
        moviName: 'Moon Light',
        rate:7.8,
        rateImg:"../assets/images/star.jpg",
        dirname:"Barry Jenkins",
       autrname:"Tarell Alvin McCraney",
       myArray: ['Mahershala Ali','Shariff Earp','Duan Sanderson'],
       moviImg: "../assets/images/cover.jpg"},
       { id: 2,
        moviName: 'Fighter',
        rate:7.8,
        rateImg:"../assets/images/star.jpg",
        dirname:"Barry Jenkins",
       autrname:"Tarell Alvin McCraney",
       myArray: ['Mahershala Ali','Shariff Earp','Duan Sanderson'],
       moviImg: "../assets/images/cover1.jpg"},
       { id: 3,
        moviName: 'Star Wars',
        rate:7.8,
        rateImg:"../assets/images/star.jpg",
        dirname:"Barry Jenkins",
       autrname:"Tarell Alvin McCraney",
       myArray: ['Mahershala Ali','Shariff Earp','Duan Sanderson'],
       moviImg: "../assets/images/cover2.jpg"},
       { id: 4,
        moviName: 'Baby Driver',
        rate:7.8,
        rateImg:"../assets/images/star.jpg",
        dirname:"Barry Jenkins",
       autrname:"Tarell Alvin McCraney",
       myArray: ['Mahershala Ali','Shariff Earp','Duan Sanderson'],
       moviImg: "../assets/images/cover3.jpg"}
];
  selectedMovie;
  deleteMovi;
  constructor() { }

  ngOnInit() {
  }

  onSelect(movie): void {
    this.selectedMovie = movie
  }
  removeMovie(movie, index) : void {
    this.deleteMovi=movie;
    this.movies.splice(index, 1);
}
}
