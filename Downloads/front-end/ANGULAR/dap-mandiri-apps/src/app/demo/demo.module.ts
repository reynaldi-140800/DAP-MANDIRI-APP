import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ChildAaComponent } from './component-a/child-aa/child-aa.component';
import { ChildAbComponent } from './component-a/child-ab/child-ab.component';
import { PleaseChildComponent } from './component-a/please-child/please-child.component';
import { DemoRoutingModule } from './demo-routing.module';

const declarations_demo = [
  ComponentAComponent,
  ComponentBComponent,
  ChildAaComponent,
  ChildAbComponent,
  
]

@NgModule({
  declarations: [...declarations_demo, PleaseChildComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    RouterModule
  ],
  exports: [...declarations_demo]
})
export class DemoModule { }
