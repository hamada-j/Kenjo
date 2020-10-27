import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

import { Album } from "./model/album";
import { Artist } from "./model/artist";

import { environment } from "../environments/environment";
import { Router } from "@angular/router";

const BACKEND_URL = environment.apiUrl;
@Injectable({
  providedIn: "root",
})
export class RestApiService {
  baseUrl = BACKEND_URL;

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  /*
  The code below will
  handel all methods
  for the Albums on API
  */

  getAllAlbums(): Promise<Album[]> {
    return this.httpClient.get<Album[]>(`${this.baseUrl}albums/all`).toPromise();
  }

  getAlbum(id): Promise<Album> {
    return this.httpClient.get<Album>(`${this.baseUrl}album/${id}`).toPromise();
  }

  postAlbum(formValues): Promise<any> {
    return this.httpClient.post<any>(`${this.baseUrl}album/`, formValues).toPromise();
  }

  postAlbumMany(arrayResult): Promise<Album> {
    return this.httpClient.post<Album>(`${this.baseUrl}albums/`, arrayResult).toPromise();
  }


  putAlbum(id, body): Promise<Album> {
    return this.httpClient.put<Album>(`${this.baseUrl}album/${id}`, body).toPromise();
  }


  deleteAlbum(albumId): Promise<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}album/${albumId}`).toPromise();
  }


  /*
  The code below will
  handel all methods
  for the Artists on API
  [name description what do the method]
  */
  getAllArtists(): Promise<Artist[]> {
    return this.httpClient.get<Artist[]>(`${this.baseUrl}artists/all`).toPromise();
  }

  getArtist(id): Promise<Artist> {
    return this.httpClient.get<Artist>(`${this.baseUrl}artist/${id}`).toPromise();
  }

  postArtist(formValues): Promise<any> {
    return this.httpClient.post<any>(`${this.baseUrl}artist/`, formValues).toPromise();
  }

  postArtistsMany(arrayResult): Promise<Artist> {
    return this.httpClient.post<Artist>(`${this.baseUrl}artists/`, arrayResult).toPromise();
  }

  putArtist(id, body): Promise<Artist> {
    return this.httpClient.put<Artist>(`${this.baseUrl}artist/${id}`, body).toPromise();
  }


  deleteArtist(artistId): Promise<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}artist/${artistId}`).toPromise();
  }

}
