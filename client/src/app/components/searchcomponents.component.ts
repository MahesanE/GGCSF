import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReviewserviceService } from '../service/reviewservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchcomponents',
  templateUrl: './searchcomponents.component.html',
  styleUrls: ['./searchcomponents.component.css']
})

export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  title!: string;

  constructor(private fb: FormBuilder, private movieService: ReviewserviceService, private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: this.fb.control<string>(
        '',
        [Validators.required, Validators['minLength'](2)]
      ),
    });
  
  }


  onSubmit() {
    this.title = this.searchForm.value['title'];
    console.log(this.title);
    this.router.navigate(['/movie-reviews-list', this.title]);
  }
}
