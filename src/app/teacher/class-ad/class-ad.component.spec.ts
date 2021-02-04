import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAdComponent } from './class-ad.component';

describe('ClassAdComponent', () => {
  let component: ClassAdComponent;
  let fixture: ComponentFixture<ClassAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
