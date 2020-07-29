import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreadorEmbebedPage } from './creador-embebed.page';

describe('CreadorEmbebedPage', () => {
  let component: CreadorEmbebedPage;
  let fixture: ComponentFixture<CreadorEmbebedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadorEmbebedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreadorEmbebedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
