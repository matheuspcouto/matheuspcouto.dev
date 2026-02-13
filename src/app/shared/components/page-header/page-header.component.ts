import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit, OnDestroy {

  /** Texts to be typed in the animation */
  private typedTexts: string[] = ['Hello World !'];

  /** Reference to the element where the text will be typed */
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  /** Instance of timeout for typing animation */
  private typedInstance: any;
  /** Current index of the text being typed */
  private currentIndex = 0;
  /** Currently displayed text */
  private currentText = '';
  /** Indicates if the text is being deleted */
  private isDeleting = false;
  /** Typing and deletion speed */
  private typeSpeed = 100;
  /** Deletion speed */
  private deleteSpeed = 50;
  /** Pause time when finishing typing a word */
  private pauseTime = 2000;

  ngOnInit() {
    this.startTypingEffect();
  }

  ngOnDestroy() {
    if (this.typedInstance) {
      clearTimeout(this.typedInstance);
    }
  }

  /**
   * Starts the typing effect on the referenced element.
   */
  private startTypingEffect(): void {
    const element = this.typedElement.nativeElement;
    const fullText = this.typedTexts[this.currentIndex];

    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    element.textContent = this.currentText;

    let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.currentText === fullText) {
      speed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.typedTexts.length;
    }

    this.typedInstance = setTimeout(() => this.startTypingEffect(), speed);
  }
}
