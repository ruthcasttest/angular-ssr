import { ApplicationRef, Component, effect, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonListSkeletonComponent } from './ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonsService } from '../../pokemons/services/pokemons.services';
import { SimplePokemon } from '../../pokemons/interfaces';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent, RouterLink, RouterModule],
  templateUrl: './pokemons-page.component.html',
})
export default class PokemonsPageComponent{

  public pokemons = signal<SimplePokemon[]>([]);

  public isLoading = signal(true);

  private appRef = inject(ApplicationRef);

  private $appRef = this.appRef.isStable.subscribe( isStable => {
    console.log({isStable})
  })

  private pokemonsService = inject(PokemonsService);

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);

  public currentPage = toSignal<number>(
    this.route.params.pipe(
      map( params =>  params['page'] ?? '1'),
      map( page => (isNaN(+page) ? 1 : +page)),
      map( page => Math.max(1, page))
    )
  )

  public loadOnPageChange = effect( () => {
    console.log('pagina cambio', this.currentPage())
    this.loadPokemons(this.currentPage())
  })

  // ngOnInit(): void {
  //   this.loadPokemons();

  //   // this.route.queryParamMap.subscribe(params => {
  //   //   console.log(params)
  //   // })
  //   // setTimeout( () => {
  //   //   this.isLoading.set(false);
  //   // },5000)
  // }

  loadPokemons( page = 0) {

    const pageToLoad = this.currentPage()! + page

    this.pokemonsService.loadPage(pageToLoad)
      .pipe(
        // tap( () => {
        //   this.router.navigate([], {queryParams: { page: pageToLoad } })
        // }),
        tap(
          () => this.title.setTitle(`Pokemons SSR - Page ${pageToLoad}`)
        )
      )
      .subscribe(pokemons => {
        this.pokemons.set(pokemons)
      })
  }
}
