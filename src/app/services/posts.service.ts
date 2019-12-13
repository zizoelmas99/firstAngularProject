import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  myApi: string = "https://jsonplaceholder.typicode.com/posts";
  posts: any;

  get(){
    return this.http.get(this.myApi);
  }

  // HTTP Create method to add new object
  create(newPost){
    return this.http.post(this.myApi,JSON.stringify(newPost));
  }
  
  // HTTP Update method to Update an Object
  update(id, Updatepost){
    return this.http.patch(this.myApi + '/' + id, Updatepost);
  }

  // HTTP Delete method to Delete an Object
  delete(id){
    return this.http.delete(this.myApi + '/' + id);
  }
  
}
