import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegumeFruitFruitPage } from './legume-fruit-fruit.page';

describe('LegumeFruitFruitPage', () => {
  let component: LegumeFruitFruitPage;
  let fixture: ComponentFixture<LegumeFruitFruitPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumeFruitFruitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegumeFruitFruitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
