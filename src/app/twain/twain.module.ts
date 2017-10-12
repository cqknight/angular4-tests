import { TwainService } from './twain.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwainComponent } from './twain.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TwainComponent],
  providers: [TwainService],
  exports: [TwainComponent]
})
export class TwainModule { }
