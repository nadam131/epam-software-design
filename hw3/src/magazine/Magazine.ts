import { pagesItarableMixin } from "./../mixins/PageIterable";
import { Pages } from "./../pages/Pages";
import { Item } from "../Item";

class Magazine extends Item {
  constructor(title: string, pages: Pages) {
    super(title, pages);
  }

  toString(): string {
    return `Magazine: G.Q with number of pages: 2`;
  }
}

export const IterableMagazine = pagesItarableMixin(Magazine);
