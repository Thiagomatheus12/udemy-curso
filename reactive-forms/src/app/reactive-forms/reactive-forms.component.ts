import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/[ a-zA-Z][a-zA-Z ]*$/),
      // this.validateName,
    ]],
    lastName: ['', Validators.required, Validators.minLength(5)],
    email: ['', Validators.required, Validators.email],
  })

  constructor(private formBuilder: FormBuilder) { }

  public submitForm() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      console.log(this.cadastroForm.value.firstName);
      console.log(this.cadastroForm.value.lastName);
    }

  }

  public clickForm(itemForm: any): boolean {
    if(this.cadastroForm.get(itemForm)?.invalid && (this.cadastroForm.get(itemForm)?.touched || this.cadastroForm.get(itemForm)?.dirty)) {      return true;
    } else {
      return false;
    }
  }

  public validateName(control: FormControl) {
    const parts = control.value.split(' ');

    if (parts.length < 2) {
      return { invalidName: true };
    }

    for (const part of parts) {
      if (part.length < 2 || /\d/.test(part)) {
        return { invalidName: true };
      }
    }

    return null;
  }
}
