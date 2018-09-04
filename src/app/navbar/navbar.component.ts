import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public movies: any;
  public moviename: any;
  public movieposter: any;
  public moviePoster: any;
  public movieTitle: any;
  public data: any;
  public new: any;
  public new2: any;
  public title: any;
  public moviedata: any;
  public totalmovies: any = [];
  public textInput: any;
  public backData: any;
  public backmovies:any;
  public search:any;

  constructor(
    private moviesService: MoviesService
  ) { }

  movie = {
    find: ''
  }

  ngOnInit() {

    // // this.search()
    // this.new2 = ''
    // this.moviesService.getdata()
    //   .subscribe(
    //     (response) => {
    //       // console.log(response)
    //       this.movies = response;
    //       // console.log(this.movies)

    //       this.movieposter = this.movies.Search;
    //       // this.totalmovies.push(this.movieposter);

    //       console.log('4444444444444444', this.movieposter)
    //       // this.movieSearch()
    //       // this.moviename = this.movies.Title;

    //       //  console.log(this.moviename)
    //     }
    //   )
    // this.moviesService.movieData()
    //   .subscribe(
    //     (responce) => {
    //       this.moviedata = responce;
    //       this.moviename = this.moviedata.Search;
    //       // this.movieposter.push(this.moviename);.
    //       console.log('uuuuuuuuuu', this.moviename)
    //       console.log('kkkkkkkkkkkkkkk', this.moviename, this.totalmovies)
    //       this.totalmovies = this.movieposter.concat(this.moviename);

    //     }
    //   )


      this.moviesService.backData(this.search)
      .subscribe(
        (Response) => {
          this.backData = Response;
          console.log(this.backData)
          this.backmovies = this.backData.addDetails;
          console.log(this.backmovies, 'backend movie list')
        }
      )
  
  }
}