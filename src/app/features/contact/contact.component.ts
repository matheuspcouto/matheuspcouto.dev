/**
 * Componente da seção de contato.
 * Exibe formulário para envio de mensagens via mailto.
 *
 * @example
 * <app-contact />
 *
 * @author Matheus Pimentel Do Couto
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MpcButtonComponent, MpcInputTextComponent, MpcInputEmailComponent, MpcInputTextAreaComponent } from 'mpc-lib-angular';
import { openInNewTab } from '../../shared/helpers';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MpcButtonComponent, MpcInputTextComponent, MpcInputEmailComponent, MpcInputTextAreaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private readonly formBuilder = inject(NonNullableFormBuilder);

  /**
   * Formulário reativo de contato com validação.
   */
  protected readonly form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  /**
   * Envia o formulário de contato via link mailto.
   */
  protected submitForm(): void {
    if (this.form.valid) {
      const { name, email, message } = this.form.controls;
      const link = `mailto:matheuspcouto70@gmail.com?cc=${name.value}&subject=${email.value}&body=${message.value}`;
      openInNewTab(link);
    }
  }
}
