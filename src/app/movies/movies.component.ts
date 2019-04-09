import { Component, OnInit } from '@angular/core';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
//import {Movies} from '../mock-movies';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = [];
  
  moviName='';
  rate='';
  rateImg='';
  dirname='';
  autrname='';
  moviImg='';
  myArray=[];
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
public getDataForm(formData:  NgForm) {
  this.movies.push({
    moviName:formData.value.moviName,
    rate:formData.value.rate,
    dirname:formData.value.dirname,
    autrname:formData.value.autrname,
    rateImg:'../../assets/images/star.jpg',
  moviImg:'../../assets/images/cover.jpg',
  myArray:['Mahershala Ali','Shariff Earp','Duan Sanderson']
  });
}
// onAdd(){

// }
}
