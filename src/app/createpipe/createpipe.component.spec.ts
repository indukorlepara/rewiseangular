import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepipeComponent } from './createpipe.component';

describe('CreatepipeComponent', () => {
  let component: CreatepipeComponent;
  let fixture: ComponentFixture<CreatepipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatepipeComponent]
    });
    fixture = TestBed.createComponent(CreatepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
