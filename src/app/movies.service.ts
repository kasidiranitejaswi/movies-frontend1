import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  // getdata() {
  //   return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=saw")
  //   console.log(this.getdata);
  // }

  // movieData() {
  //   return this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=harry potter")
  // }


  
  backData(search) {

    return this.http.post("http://localhost:4700/api/movie/movieSearch", search)
  }
}
