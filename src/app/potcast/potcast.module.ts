import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotcastRoutingModule } from './potcast-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ContentComponent } from './components/content/content.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { PlanesComponent } from './components/planes/planes.component';
import { TestimonialesComponent } from './components/testimoniales/testimoniales.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomePageComponent,
    ContentComponent,
    EstadisticasComponent,
    PlanesComponent,
    TestimonialesComponent
  ],
  imports: [
    CommonModule,
    PotcastRoutingModule
  ]
})
export class PotcastModule { }
