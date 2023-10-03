import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './components/example/example.component';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [AppComponent, ExampleComponent, DemoComponent], // Bu modül (proje) içerisinde tanımlanan işlevler, modülün içerisinde barındırdığı schematicler
  imports: [BrowserModule, AppRoutingModule, FormsModule], // Bu modülün dışarıdan temin ettiği diğer modüller
  providers: [], // Dependency Injection
  bootstrap: [AppComponent], // Uygulamanın başlayacağı ana componenti temsil eden yapı..
  exports: [], // Declarations alanındaki tanımlardan hangilerini dışarıya açacağımızı belirtir.
})
export class AppModule {}
