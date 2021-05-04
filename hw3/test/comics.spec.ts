import { Pages } from "../src/pages/pages";
import { Page } from "../src/page/Page";
import { IterableComics as Comics } from "../src/comics/Comics";

describe("Comics", () => {
  it("toString should return correct value", () => {
    let counter = 1;
    const comics = new Comics(
      "Spider-Man",
      "some author",
      "Stan Lee",
      new Pages([
        new Page(1, "with images", "glossy paper"),
        new Page(2, "with images", "glossy paper"),
      ])
    );

    for (const page of comics) {
      expect(page).toEqual(
        `Comics: Spider-Man by Stan Lee, the artist is some author, number of pages: 2, here is page with images #${counter} and it\'s material is glossy paper`
      );
      counter++;
    }
  });
});
