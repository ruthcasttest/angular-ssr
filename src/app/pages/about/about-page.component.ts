import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
})
export default class AboutPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About page');
    this.meta.updateTag({ name:'description', content:'This is the about page' })
    this.meta.updateTag({ name:'og:title', content:'About page' })
    this.meta.updateTag({ name:'keywords', content:'Hola,Mundo,About,Club,Cima' })
  }
}
