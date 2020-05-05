import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HomeContainerComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    HomeContainerComponent
  ]
})
export class HomeTemplateModule { }
