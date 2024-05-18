import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PubHeaderComponent } from './components/headers/pub-header/pub-header.component';


@NgModule({
  imports: [
    CommonModule, 
    MatGridListModule, MatMenuModule, MatButtonModule,
    MatFormFieldModule, MatSelectModule,  MatInputModule, FormsModule, ReactiveFormsModule,
    MatIconModule, MatDialogModule,
    RouterModule],
  declarations: [ HeaderComponent,PubHeaderComponent,
    FooterComponent,
    NavBarComponent,
    CalendarViewComponent,
  ],
  providers: [],
  exports: [ 
    CalendarViewComponent,
    HeaderComponent, PubHeaderComponent, 
    FooterComponent, NavBarComponent],
})
export class SharedModule {}
