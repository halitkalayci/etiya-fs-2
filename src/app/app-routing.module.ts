import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssWorkshopComponent } from './pages/css-workshop/css-workshop.component';
import { FirstWorkshopComponent } from './pages/first-workshop/first-workshop.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: FirstWorkshopComponent },
  { path: 'css', component: CssWorkshopComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'post-detail/:id', component: PostDetailComponent },
]; // hangi url hangi sayfayı aktif edecek konfigürasyonu

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
