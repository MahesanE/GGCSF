import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/searchcomponents.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieReviewsListComponent } from './components/moviereviewslist.component';
import { PostCommentComponent } from './components/post-comment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieReviewsListComponent,
    PostCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
