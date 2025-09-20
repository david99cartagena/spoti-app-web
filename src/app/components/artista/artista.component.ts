import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean | undefined;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;

    this.router.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  async getArtista(id: string) {
    this.loadingArtist = true;

    (await this.spotify.getArtista(id)).subscribe((artista) => {
      // console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  async getTopTracks(id: string) {
    (await this.spotify.getTopTracks(id)).subscribe((topTracks) => {
      // console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
