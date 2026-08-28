import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty fields', () => {
    expect(component['form'].controls.name.value).toBe('');
    expect(component['form'].controls.email.value).toBe('');
    expect(component['form'].controls.message.value).toBe('');
  });

  it('should have required validators on all fields', () => {
    const form = component['form'];

    expect(form.controls.name.hasError('required')).toBe(true);
    expect(form.controls.email.hasError('required')).toBe(true);
    expect(form.controls.message.hasError('required')).toBe(true);
  });

  it('should validate email format', () => {
    const emailControl = component['form'].controls.email;

    emailControl.setValue('invalid-email');
    expect(emailControl.hasError('email')).toBe(true);

    emailControl.setValue('valid@email.com');
    expect(emailControl.hasError('email')).toBe(false);
  });

  it('should validate minimum length for name', () => {
    const nameControl = component['form'].controls.name;

    nameControl.setValue('Jo');
    expect(nameControl.hasError('minlength')).toBe(true);

    nameControl.setValue('João');
    expect(nameControl.hasError('minlength')).toBe(false);
  });

  it('should validate minimum length for message', () => {
    const messageControl = component['form'].controls.message;

    messageControl.setValue('Olá');
    expect(messageControl.hasError('minlength')).toBe(true);

    messageControl.setValue('Olá, esta é uma mensagem de teste');
    expect(messageControl.hasError('minlength')).toBe(false);
  });

  it('should submit form when valid', () => {
    const spy = vi.spyOn(window, 'open').mockImplementation(() => null);

    // Fill the form with valid data
    component['form'].controls.name.setValue('João Silva');
    component['form'].controls.email.setValue('joao@email.com');
    component['form'].controls.message.setValue('Olá, esta é uma mensagem de teste');

    component['submitForm']();

    expect(spy).toHaveBeenCalledWith(
      'mailto:matheuspcouto70@gmail.com?cc=João Silva&subject=joao@email.com&body=Olá, esta é uma mensagem de teste',
      '_blank'
    );

    spy.mockRestore();
  });

  it('should not submit form when invalid', () => {
    const spy = vi.spyOn(window, 'open').mockImplementation(() => null);

    // Leave fields empty to make form invalid
    component['form'].controls.name.setValue('');
    component['form'].controls.email.setValue('');
    component['form'].controls.message.setValue('');

    component['submitForm']();

    expect(spy).not.toHaveBeenCalled();

    spy.mockRestore();
  });
});
