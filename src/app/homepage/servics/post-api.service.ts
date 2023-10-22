import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const endpoint = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    return this.http.get(endpoint);
  }

  getallbyID():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/posts/id')
  }
}
