import { Pages } from "../src/pages/Pages";
import { Page } from "../src/page/Page";
import { IterableMagazine as Magazine } from "../src/magazine/Magazine";

describe("Magazine", () => {
  it("toString should return correct value", () => {
    let counter = 1;
    const magazine = new Magazine(
      "G.Q",
      new Pages([
        new Page(1, "with article", "glossy paper"),
        new Page(2, "with article", "glossy paper"),
      ])
    );

    for (const page of magazine) {
      expect(page).toEqual(
        `Magazine: G.Q with number of pages: 2, here is page with article #${counter} and it\'s material is glossy paper`
      );
      counter++;
    }
  });
});
