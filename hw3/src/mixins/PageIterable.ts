import { Pages } from "../pages/Pages";

type GConstructor<T = {}> = new (...args: any[]) => T;
type IterableType = GConstructor<{ pages: Pages }>;

export const pagesItarableMixin = <TBase extends IterableType>(Base: TBase) => {
  return class Iterable extends Base {
    [Symbol.iterator]() {
      let count = 0;
      let isDone = false;

      let next = () => {
        if (count >= this.pages.items.length) {
          isDone = true;
        }

        return {
          done: isDone,
          value: isDone
            ? null
            : `${this.toString()}, ${this.pages.items[count++].toString()}`,
        };
      };

      return { next };
    }
  };
};
