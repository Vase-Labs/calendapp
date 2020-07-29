import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmbebedPage } from './embebed.page';

describe('EmbebedPage', () => {
  let component: EmbebedPage;
  let fixture: ComponentFixture<EmbebedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbebedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmbebedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
