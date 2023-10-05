import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleComponent } from './components/example/example.component';
import { DemoComponent } from './components/demo/demo.component';
import { CssWorkshopComponent } from './pages/css-workshop/css-workshop.component';
import { FirstWorkshopComponent } from './pages/first-workshop/first-workshop.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    DemoComponent,
    CssWorkshopComponent,
    FirstWorkshopComponent,
    PostListComponent,
    AddPostComponent,
    InputErrorComponent,
    PostDetailComponent,
    NotFoundComponent,
  ], // Bu modül (proje) içerisinde tanımlanan işlevler, modülün içerisinde barındırdığı schematicler
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ], // Bu modülün dışarıdan temin ettiği diğer modüller
  providers: [], // Dependency Injection
  bootstrap: [AppComponent], // Uygulamanın başlayacağı ana componenti temsil eden yapı..
  exports: [], // Declarations alanındaki tanımlardan hangilerini dışarıya açacağımızı belirtir.
})
export class AppModule {}
