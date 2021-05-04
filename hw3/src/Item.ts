import { Pages } from "./pages/Pages";

export abstract class Item {
  title: string;
  pages: Pages;

  constructor(title: string, pages: Pages) {
    this.title = title;
    this.pages = pages;
  }

  protected get itemTitle() {
    return this.title;
  }

  protected set itemTitle(title: string) {
    this.title = title;
  }

  abstract toString(): string;
}
