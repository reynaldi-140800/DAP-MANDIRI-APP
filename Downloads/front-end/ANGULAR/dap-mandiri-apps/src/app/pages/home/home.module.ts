import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesFullComponent } from './courses-full/courses-full.component';



const declaration_home = [
  
 CoursesComponent, HomeComponent, BannerComponent,NewsLetterComponent,ServiceComponent,AboutComponent,FAQComponent,InstructorsComponent,ContactComponent,
]

@NgModule({
  declarations: [...declaration_home, CoursesComponent, CoursesFullComponent],
  imports: [
    CommonModule,
  ],
  exports: [...declaration_home]
})
export class HomeModule { }
