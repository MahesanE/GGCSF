import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewserviceService } from '../service/reviewservice.service';
import { Comments } from '../models';

@Component({
  selector: 'app-post-comment-component',
  templateUrl: './post-comment-component.component.html',
  styleUrls: ['./post-comment-component.component.css']
})
export class PostCommentComponent implements OnInit {

  title!: string
  movieName!: string
  
  constructor(private fb : FormBuilder, private activatedRoute : ActivatedRoute, private router: Router,
    private reviewSvc: ReviewserviceService){}

    commentForm!: FormGroup;

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.params['title']
    this.movieName = this.activatedRoute.snapshot.params['movieName']
    this.commentForm = this.createForm()
  }

  private createForm(): FormGroup{
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      rating: this.fb.control<number>(0, [Validators.required]),
      comment: this.fb.control<string>('', [Validators.required])
    })

  }
  postComment() {
    const formData = this.commentForm.value as Comments;
    formData.movieName = this.movieName;
    console.log(formData);
    this.reviewSvc.postComment(formData)
    this.back();
    
  }

  back() {
    this.router.navigate(['/movie-reviews-list', this.title]);
  }

  
  

}
