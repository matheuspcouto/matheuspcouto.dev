import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MpcButtonComponent, MpcInputTextComponent, MpcInputEmailComponent, MpcInputTextAreaComponent } from 'mpc-lib-angular';

@Component({
    selector: 'contact',
    imports: [CommonModule, ReactiveFormsModule, MpcButtonComponent, MpcInputTextComponent, MpcInputEmailComponent, MpcInputTextAreaComponent],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    private readonly formBuilder = inject(NonNullableFormBuilder);

    /**
     * Reactive form for contact.
     * @type {FormGroup}
     */
    protected form = this.formBuilder.group({
        name: [''],
        email: [''],
        message: ['']
    });

    /**
     * Submits the contact form.
     */
    protected submitForm(): void {
        if (this.form.valid) {
            const link = "matheuspcouto70@gmail.com"
                + "?cc=" + this.form.controls.name.value
                + "&subject=" + this.form.controls.email.value
                + "&body=" + this.form.controls.message.value;

            window.open('mailto:' + link, '_blank');
        }
    }
}
