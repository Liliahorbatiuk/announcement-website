import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/interfaces/blog.interface';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  post: IBlog;

  constructor(private activatedRoute: ActivatedRoute,
              private blogService: BlogService,
              public location: Location) { }

  ngOnInit(): void {
    this.getPost();
  }

  private getPost(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.blogService.getJSONOnePost(id).subscribe(
      data => {
        this.post = data;
      },
      err => {
        console.log(err);
        
      }
    )
  }

}
