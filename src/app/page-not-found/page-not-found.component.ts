import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="alert alert-danger" role="alert">
  <h1 class="text-center"><b>Sorry, we couldn't find what you're looking for</b></h1>
  <hr>
  <p class="text-center">Please check your URL!</p>
</div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
