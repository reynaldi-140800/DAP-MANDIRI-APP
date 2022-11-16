import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextSteplinkComponent } from './link/next-steplink.component';
import { NextStepComponent } from './next-step.component';
import { NextStepTerminalComponent } from './terminal/next-step-terminal.component';


const next_step_comp = [NextStepComponent, NextStepTerminalComponent,NextSteplinkComponent]
@NgModule({
  declarations: [next_step_comp],
  imports: [CommonModule],
  exports: [next_step_comp]
})
export class NextStepModule { }
