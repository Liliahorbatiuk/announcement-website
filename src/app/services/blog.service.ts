import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  private arrBlog: Array<IBlog> = [
    {
      id: 1,
      title: 'Title 1',
      text: 'some text..',
      image: 'https://thumbs.dreamstime.com/b/have-got-exciting-news-announcement-vector-illustration-announcements-sales-advertisement-185620735.jpg',
      date: new Date()
    }

  ];
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/blogs';
  }


  getPost(): Array<IBlog> {
    return this.arrBlog;
  }

  setPosts(newPost: IBlog): void {
    this.arrBlog.push(newPost);
  }

  deletePosts(id: number | string): void {
    const index = this.arrBlog.findIndex(p => p.id === id);
    this.arrBlog.splice(index, 1);
  }

  updatePosts(blog: IBlog): void {
    const index = this.arrBlog.findIndex(p => p.id === blog.id);
    this.arrBlog.splice(index, 1, blog);
  }

  getJSONPosts(): Observable<Array<IBlog>> {
    return this.http.get<Array<IBlog>>(this.url);
  }

  postJSONPost(blog: IBlog): Observable<IBlog> {
    return this.http.post<IBlog>(this.url, blog);
  }

  updateJSONPost(blog: IBlog): Observable<IBlog> {
    return this.http.put<IBlog>(`${this.url}/${blog.id}`, blog);
  }

  deleteJSONPost(blog: IBlog): Observable<IBlog> {
    return this.http.delete<IBlog>(`${this.url}/${blog.id}`);
  }

  getJSONOnePost(id: number | string): Observable<IBlog> {
    return this.http.get<IBlog>(`${this.url}/${id}`)
  }
}

