import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
})
export default class PricingPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact page');
    this.meta.updateTag({ name:'description', content:'This is the about page' })
    this.meta.updateTag({ name:'og:title', content:'Contact page' })
    this.meta.updateTag({ name:'keywords', content:'Hola,Mundo,About,Club,Cima' })
  }
}
