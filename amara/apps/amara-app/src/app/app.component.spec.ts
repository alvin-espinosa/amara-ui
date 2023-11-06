
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { NgMaterialsModule } from '@amara/ng-materials';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [
      NxWelcomeComponent
    ],
    imports: [
      NgMaterialsModule,
      RouterModule
    ],
  });

  beforeEach(async () => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
