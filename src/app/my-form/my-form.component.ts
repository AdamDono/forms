import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'] // This should match the actual file path
})
export class MyFormComponent {
  onSubmit(form: any) {
    const confirmationMessage = `Are you sure you want to submit the form with the following data?\n\nName: ${form.value.name}\nEmail: ${form.value.email}`;
    if (window.confirm(confirmationMessage)) {
      // Handle form submission logic here
      console.log('Form submitted:', form.value);
    } else {
      console.log('Form submission cancelled.');
    }
  }
}
