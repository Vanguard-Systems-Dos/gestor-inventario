import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeRegistro } from './formulario-de-registro';

describe('FormularioDeRegistro', () => {
  let component: FormularioDeRegistro;
  let fixture: ComponentFixture<FormularioDeRegistro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDeRegistro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDeRegistro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
