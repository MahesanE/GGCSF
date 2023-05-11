import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewserviceService } from '../service/reviewservice.service';
import { Movie } from '../models';

@Component({
  selector: 'app-moviereviewslist',
  templateUrl: './moviereviewslist.component.html',
  styleUrls: ['./moviereviewslist.component.css']
})

export class MovieReviewsListComponent implements OnInit {
  title!: string;
  movies: Movie[] = [];
  noImg = 'assets/placeholder.jpg';

  constructor(private reviewSvc: ReviewserviceService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.params['title']
    this.reviewSvc.searchReviews(this.title)
      .then(result => this.movies = result)
    // .catch(err => console.log(err);
    console.log('title being searched is', this.title)
    console.log('movies are', this.movies)
    
  }

  onBack(): void {
    this.router.navigate(['/search-review']);
  }

  toComment(movieName: string): void {
    this.router.navigate(['/post-comment', this.title, movieName]);
  }

}

