import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Comments, Movie } from '../models';
import { catchError, lastValueFrom, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReviewserviceService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  searchReviews(title: string): Promise<Movie[]> {
    // const encodedTitle = encodeURIComponent(title);
    const params = new HttpParams().set('query', title);
    return lastValueFrom(this.http.get<Movie[]>(`${this.apiUrl}/search`, { params }));
  }


  countComments(title: string) {
    return this.http.get(`${this.apiUrl}/comments?title=${title}`);
  }

  //   async postComment(comment: Comments): Promise<void> {
  //     try {
  //       const response = await this.http.post<void>(
  //         `${this.apiUrl}/comment`, 
  //         comment,
  //         { headers: { 'Content-Type': 'application/json' } }
  //       ).toPromise();
  //       console.log('Comment posted successfully');
  //     } catch (error) {
  //       console.error('Error posting comment', error);
  //     }
  //   }

  async postComment(comment: Comments): Promise<void> {
    try {
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      const body = new HttpParams()
        .set('name', comment.name)
        .set('rating', comment.rating.toString())
        .set('comment', comment.comment)
        .set('movieName', comment.movieName);
  
      const response = await this.http.post<void>(
        `${this.apiUrl}/comment`,
        body.toString(),
        { headers }
      ).toPromise();
  
      console.log('Comment posted successfully');
    } catch (error) {
      console.error('Error posting comment', error);
    }
  }
}


