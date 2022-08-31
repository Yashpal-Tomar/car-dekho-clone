import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { LetestUpcomingGridComponent } from './component/letest-upcoming-grid/letest-upcoming-grid.component';
import { TrustedUsedCarMenubarComponent } from './component/trusted-used-car-menubar/trusted-used-car-menubar.component';
import { GridComponent } from './component/grid/grid.component';
import { ExpertReviewsComponent } from './component/expert-reviews/expert-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CarouselComponent,
    MenubarComponent,
    LetestUpcomingGridComponent,
    TrustedUsedCarMenubarComponent,
    GridComponent,
    ExpertReviewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
