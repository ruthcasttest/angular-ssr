import { SimplePokemon } from './../../interfaces/simple-pokemon.interface';
import { Component, computed, effect, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'pokemon-card',
  imports: [RouterLink, RouterModule],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  public pokemon = input.required<SimplePokemon>();

  public readonly pokemonImage = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${this.pokemon().id}.png`,
  );

  // losEffect = effect ( () => {
  //   console.log('PokemondCard: ', this.pokemon())
  // });
}
