import { pagesItarableMixin } from "./../mixins/PageIterable";
import { Pages } from "./../pages/Pages";
import { Item } from "../Item";

class Comics extends Item {
  author: string;
  artist: string;

  constructor(title: string, artist: string, author: string, pages: Pages) {
    super(title, pages);
    this.author = author;
    this.artist = artist;
  }

  protected get comicsAuthor() {
    return this.author;
  }

  protected set comicsAuthor(author: string) {
    this.author = author;
  }

  protected get comicsArtist() {
    return this.artist;
  }

  protected set comicsArtist(artist: string) {
    this.artist = artist;
  }

  toString(): string {
    return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.items.length}`;
  }
}

export const IterableComics = pagesItarableMixin(Comics);
