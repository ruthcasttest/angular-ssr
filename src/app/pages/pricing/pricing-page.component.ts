import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pricing-page',
  templateUrl: './pricing-page.component.html',
})
export default class PricingPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    console.log(this.platform)
    // if( isPlatformServer(this.platform)){ Para verificar si estoy dentro del servidor
    // }
      this.title.setTitle('Pricing page');
      this.meta.updateTag({ name:'description', content:'This is the pricing page' })
      this.meta.updateTag({ name:'og:title', content:'Pricing page' })
      this.meta.updateTag({ name:'keywords', content:'Hola,Mundo,Pricing,Club,Cima' })

  }
}
