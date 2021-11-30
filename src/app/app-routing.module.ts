import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog'},
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'blogs', component: AdminBlogComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
