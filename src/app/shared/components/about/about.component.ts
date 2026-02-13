import { Component } from '@angular/core';
import { MpcButtonComponent } from 'mpc-lib-angular';

@Component({
  selector: 'about',
  imports: [MpcButtonComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  /**
   * User's age.
   * @type {number}
   */
  protected age: number = new Date().getFullYear() - 2000;

  /**
   * Creates an instance of AboutComponent and calculates the age.
   */
  constructor() {
    const now = new Date();
    const birthDate = new Date('2000-05-23');
    const month = now.getMonth() - birthDate.getMonth();
    this.age = now.getFullYear() - birthDate.getFullYear();

    if (month < 0 || (month === 0 && now.getDate() < birthDate.getDate())) {
      this.age--;
    }
  }

  /**
   * Opens the Portuguese resume in a new tab.
   */
  protected viewResumePT(): void {
    window.open('https://www.canva.com/design/DAF-pR8ynQw/2daYc25BT31YuFiDKvtJjw/view', '_blank');
  }

  /**
   * Opens the English resume in a new tab.
   */
  protected viewResumeEN(): void {
    window.open('https://www.canva.com/design/DAF-pdf-9Es/GB2dltpM5DV3zNJbiT4w6A/view', '_blank');
  }
}
