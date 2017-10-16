import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisService } from './../model/crisis.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule,
  ],
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
  ],
  providers: [CrisisService]
})
export class CrisisCenterModule { }
