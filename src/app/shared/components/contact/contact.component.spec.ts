import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

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

  it('should submit form when valid', () => {
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);

    // Fill the form
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
    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);

    // Leave fields empty to make form invalid
    component['form'].controls.name.setValue('');
    component['form'].controls.email.setValue('');
    component['form'].controls.message.setValue('');

    component['submitForm']();

    expect(spy).not.toHaveBeenCalled();

    spy.mockRestore();
  });
});
