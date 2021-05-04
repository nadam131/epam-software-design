import { pagesItarableMixin } from "./../mixins/PageIterable";
import { Pages } from "./../pages/Pages";
import { Item } from "../Item";

class Book extends Item {
  author: string;

  constructor(title: string, author: string, pages: Pages) {
    super(title, pages);
    this.author = author;
  }

  protected get bookAuthor() {
    return this.author;
  }

  protected set bookAuthor(author: string) {
    this.author = author;
  }

  toString() {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.items.length}`;
  }
}

export const IterableBook = pagesItarableMixin(Book);
