/* import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
}) */
// export class HomeComponent {
//   // paises: any[] = [];
//   nuevasCanciones: any[] = [];
//   loading: boolean;

//   error: boolean;
//   mensajeError: string | undefined;

//   constructor(private spotify: SpotifyService) {
//     /* this.http.get('https://restcountries.com/v3.1/lang/spanish')
//       .subscribe((resp:any) => {
//         this.paises = resp;
//         console.log(resp);
//       }); */
//     this.loading = true;
//     this.error = false;

//     this.spotify.getNewReleases().subscribe(
//       (data: any) => {
//         console.log(data);
//         this.nuevasCanciones = data;
//         this.loading = false;
//       },
//       (errorServicio) => {
//         this.loading = false;
//         this.error = true;
//         console.log(errorServicio);
//         this.mensajeError = errorServicio.error.error.message;
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { HttpClient } from '@angular/common/http';
//import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  public loading: boolean;
  error: boolean = false;
  mensajeError: string | undefined;
  // paises: any[] = [];
  constructor(private spotify: SpotifyService, private http: HttpClient) {
    // console.log('constructor');
    /* this.http
      .get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((resp: any) => {
        this.paises = resp;
        console.log(this.paises);
      }); */
    this.loading = true;

    /* this.spotify.getNewReleases().subscribe((data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
          }, (errorServicio) => {
          this.error = true;
          this.loading = false;
          // console.log(errorServicio.error.error.message);
          this.mensajeError = errorServicio.error.error.message;
          }); */
  }

  ngOnInit() {
    this.getNewReleases();
  }

  async getNewReleases() {
    const token = await this.spotify.getToken();
    // console.log(this.token);
    (await this.spotify.getNewReleases()).subscribe(
      (data: any) => {
        this.loading = false;
        this.nuevasCanciones = data;
      },
      (e) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = e.error.error.message;
        console.log(e);
      }
    );
  }
}
