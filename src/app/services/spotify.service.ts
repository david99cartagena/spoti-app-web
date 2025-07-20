/* import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
}) */
// export class SpotifyService {
//   constructor(private http: HttpClient) {
//     console.log('Spotify services listo');
//   }

//   getQuery(query: string) {
//     const url = `https://api.spotify.com/v1/${query}`;

//     const headers = new HttpHeaders({
//       Authorization:
//         'Bearer BQB4NxlkGz4DYozq63SFgz5D_WWSOLEjjqCUFDEKw4LZVhvL9GU95bqIo1_0FZWLk61JYCvPsi_xQY3l7p-5C-P5YqKciMqUeA9gmv25rwILtW0Hzg4',
//     });

//     return this.http.get(url, { headers });
//   }

//   getNewReleases() {
//     return this.getQuery('browse/new-releases?limit=30').pipe(
//       map((data: any) => data['albums'].items)
//     );

//     /* const headers = new HttpHeaders({
//       Authorization:
//         'Bearer BQDu3WWw4wJz8Nkg22D0AhbpB5EVpZc7OR0IawkCismxiuvOgHChakJf8aIdfgL14aPwfOKmVvIv1AEDp5S0Tu4T0nsad2htUPPZ-l6xHQqKwGDvSug',
//     });

//     return (
//       this.http
//         .get('https://api.spotify.com/v1/browse/new-releases', { headers })
//         // .pipe(
//         //   map((data: any) => {
//         //     return data['albums'].items;
//         //   })
//         // );
//         .pipe(map((data: any) => data['albums'].items))
//     ); */
//   }

//   getArtistas(termino: string) {
//     return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
//       map((data: any) => data['artists'].items)
//     );

//     /* const headers = new HttpHeaders({
//       Authorization:
//         'Bearer BQDu3WWw4wJz8Nkg22D0AhbpB5EVpZc7OR0IawkCismxiuvOgHChakJf8aIdfgL14aPwfOKmVvIv1AEDp5S0Tu4T0nsad2htUPPZ-l6xHQqKwGDvSug',
//     });

//     return this.http
//       .get(
//         `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
//         { headers }
//       )
//       .pipe(map((data: any) => data['artists'].items)); */
//   }

//   getArtista(id: string) {
//     return this.getQuery(`artists/${id}`);
//     // .pipe(map((data: any) => data['artists'].items));
//   }

//   getTopTracks(id: string) {
//     return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
//       map((data: any) => data['tracks'])
//     );
//   }
// }

import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,
  HttpResponse, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  // public  tokenNuevo: any [] = [];
  public token = '';

  constructor(private http: HttpClient) {
    console.log('servicio privado de spotify listo');
  }

  /* ngOnInit() {
   const token =  this.getToken();
   console.log(this.token);
   this.getNewReleases();
  } */

  getToken() {
    const clientId = 'ae93d45f63ae40c6bbea562c1dbcad92'; // Your client id
    const clientSecret = '978f618d87204bd58ba979a9ce9a1ea3'; // Your secret
    const body = new HttpParams()
      .append('grant_type', 'client_credentials')
      .append('client_id', clientId)
      .append('client_secret', clientSecret);
    return this.http
      .post('https://accounts.spotify.com/api/token', body)
      .toPromise()
      .then(
        (token: any) => {
          this.token = `Bearer ${token['access_token']}`;
          console.log('estoy en el gettoken');
          console.log(this.token);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

  async getQuery(query: string) {
    console.log('voy al get queriy');
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `${this.token}`,
      // Authorization: 'Bearer BQB0V5EbIC6rcsofPELwakkFTdx8N5k497fsT_3Nm5T2gQeUtjSsgmozEIpOmReTRPknBuBYAUkH0NEVE7o'
    });
    return this.http.get(url, { headers });
  }
  async getNewReleases() {
    console.log('new release');
    console.log(this.token);
    const obs = await this.getQuery('browse/new-releases?limit=30');
    return obs.pipe(map((data: any) => data.albums.items));
  }

  async getArtistas(termino: string) {
    const obs = await this.getQuery(
      `search?q=${termino}&type=artist&market=pa&limit=15`
    );
    return obs.pipe(map((data: any) => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  async getTopTracks(id: string) {
    const obs = await this.getQuery(`artists/${id}/top-tracks?country=us`);
    return obs.pipe(map((data: any) => data['tracks']));
  }
}
