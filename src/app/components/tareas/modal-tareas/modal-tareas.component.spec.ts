import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTareasComponent } from './modal-tareas.component';

describe('ModalTareasComponent', () => {
  let component: ModalTareasComponent;
  let fixture: ComponentFixture<ModalTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
