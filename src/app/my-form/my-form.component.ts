import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'] 
})
export class MyFormComponent {
  onSubmit(form: any) {

    const confirmationMessage = `Are you sure you want to submit the form with the following data? \n\neventname:${form.value.eventname}\n\ntickettype:${form.value.tickettype}\n\nticket:${form.value.ticket}\n\nnumber:${form.value.number}\n\nEmail:${form.value.email} `;
    if (window.confirm(confirmationMessage)) {
      // Handle form submission logic here
      console.log('Form submitted:', form.value);
    } else {
      console.log('Form submission cancelled.');
    
    }
  }
}
