import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/searchcomponents.component';
import { MovieReviewsListComponent } from './components/moviereviewslist.component';
import { PostCommentComponent } from './components/post-comment-component.component';

const routes: Routes = [
  
  { path: '', component: SearchComponent},
  { path: 'movie-reviews-list/:title', component: MovieReviewsListComponent },
  {path: 'post-comment/:title/:movieName', component:PostCommentComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
