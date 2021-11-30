import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/interfaces/blog.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  userBlog: Array<IBlog> = [];
  searchPost:string;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getJSONPosts()
  }

  getJSONPosts(): void {
    this.blogService.getJSONPosts().subscribe(
      data => {
        this.userBlog = data
      },
      err => {
        console.log(err);
        
      }
    )
  }

}
