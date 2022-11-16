import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextStepModule } from './next-step/next-step.module';
import { HighlightComponent } from './highlight/highlight.component';
import { ResourceComponent } from './resource/resource.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';


const komponen = [HighlightComponent,ResourceComponent,ToolbarComponent,FooterComponent]
@NgModule({
  declarations: [komponen],
  imports: [CommonModule,NextStepModule],
  exports:[komponen,NextStepModule]
})
export class DashboardModule { }
