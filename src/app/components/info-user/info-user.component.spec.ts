import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameUserComponent } from './info-user.component';

describe('NameUserComponent', () => {
  let component: NameUserComponent;
  let fixture: ComponentFixture<NameUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
