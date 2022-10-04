import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class BookstoreApiService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Response>{
    return this.http.get<Response>('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=D0SuP4SIKsIXWBJTSPEPusicJBC7eaKC')
  }
}
