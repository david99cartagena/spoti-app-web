/* import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean | undefined;

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }
} */

import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean | undefined;
  constructor(private soptify: SpotifyService) { }

  async buscar(termino: string) {
    // console.log(termino);
    this.loading = true;
    const obs = await this.soptify.getArtistas(termino);
    obs.subscribe((data: any) => (this.artistas = data));
    console.log(this.soptify);
    this.loading = false;
  }
}
