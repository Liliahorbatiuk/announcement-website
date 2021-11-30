import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/classes/blog.model';
import { IBlog } from 'src/app/interfaces/blog.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  adminBlog: Array<IBlog> = [];
  bId: number | string;
  bTitle: string;
  bText: string;
  bImage: string = 'https://thumbs.dreamstime.com/b/have-got-exciting-news-announcement-vector-illustration-announcements-sales-advertisement-185620735.jpg';
  bDate: Date = new Date();
  editStatus = false;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getAdminJSONPosts();
  }

  getAdminJSONPosts(): void {
    this.blogService.getJSONPosts().subscribe(
      data => {
        this.adminBlog = data
      },
      err => {
        console.log(err);

      }
    )
  }

  addAdminBlogs(): void {
    const newPost = new Blog(1, this.bTitle, this.bText, this.bImage, this.bDate);
    delete newPost.id;
    this.blogService.postJSONPost(newPost).subscribe(() => {
      this.getAdminJSONPosts();
    })
    this.resetForm()
  }

  deleteAdminBlogs(blog: IBlog): void {
    this.blogService.deleteJSONPost(blog).subscribe(() => {
      this.getAdminJSONPosts()
    })
  }

  private resetForm(): void {
    this.bText = '';
    this.bTitle = '';
  }

  editAdminBlogs(blog: IBlog): void {
    this.bTitle = blog.title;
    this.bText = blog.text;
    this.editStatus = true;
  }

  saveAdminBlogs(): void {
    const upPost = new Blog(1, this.bTitle, this.bText, this.bImage, this.bDate);
    this.blogService.updateJSONPost(upPost).subscribe(() => {
      this.getAdminJSONPosts();
    });
    this.editStatus = false;
    this.resetForm()
  }


}
