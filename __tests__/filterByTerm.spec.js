/**
 * JavaScript function that should filter an array of objects.

  For every object we must check a property called "url" and if
  the value of the property matches a given term then we should include the matching object in the resulting array.
 */
const filterByTerm = require("../src/filterByTerm");

describe("filter function", () => {
  test("should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output);
  });

  test("should filter by a search term (url)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
    ];

    expect(filterByTerm(input, "uRl")).toEqual(output);
  });

  test("should throw Error for an empty search term", () => {
    expect(() => {
      filterByTerm([], "");
    }).toThrowError("searchTerm cannot be empty");
  });
});
