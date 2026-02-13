import { Component } from '@angular/core';
import { MpcCardMenuComponent } from 'mpc-lib-angular';

/**
 * Interface representing an article.
 * @interface Article
 */
interface Article {
  title: string;
  publicationDate: string;
  journal: string;
  url: string;
  issn: string;
}

@Component({
  selector: 'articles',
  imports: [MpcCardMenuComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  /**
   * List of published articles.
   * @type {Article[]}
   */
  protected articles: Article[] = [];

  constructor() {
    this.articles = [
      {
        title: 'Ergonomic Assessment of Avodah Scale Management System Interface Quality: a Project-Based Learning Case Study',
        publicationDate: 'December - 2021',
        journal: 'International Journal of Development Research - IJDR',
        url: 'https://www.journalijdr.com/sites/default/files/issue-pdf/23530_0.pdf',
        issn: 'ISSN: 2230-9926',
      },
    ];
  }

  /**
   * Opens the article link in a new tab.
   * @param url Article URL.
   */
  protected goToArticle(url: string): void {
    window.open(url, '_blank');
  }
}
