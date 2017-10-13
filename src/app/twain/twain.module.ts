import { TwainService } from './twain.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwainComponent } from './twain.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: TwainComponent}]),
  ],
  declarations: [TwainComponent],
  providers: [TwainService],
})
export class TwainModule { }
