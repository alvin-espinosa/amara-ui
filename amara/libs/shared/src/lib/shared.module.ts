import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, RouterModule, MatGridListModule, MatMenuModule, MatButtonModule, BrowserAnimationsModule,
    MatFormFieldModule, MatSelectModule,  MatInputModule, FormsModule, ReactiveFormsModule,
    MatIconModule, MatDialogModule
   ],
  declarations: [HeaderComponent, FooterComponent, NavBarComponent, CalendarViewComponent],
  providers: [],
  exports: [HeaderComponent, FooterComponent, NavBarComponent, CalendarViewComponent],
})
export class SharedModule {}
 