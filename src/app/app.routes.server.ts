import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
    path: 'pokemons/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Genera /pokemons/1 ... /pokemons/151
      return Array.from({ length: 151 }, (_, i) => ({ id: `${i + 1}` }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
