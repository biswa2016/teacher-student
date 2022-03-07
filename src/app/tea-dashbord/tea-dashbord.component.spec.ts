import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaDashbordComponent } from './tea-dashbord.component';

describe('TeaDashbordComponent', () => {
  let component: TeaDashbordComponent;
  let fixture: ComponentFixture<TeaDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
