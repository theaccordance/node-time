import { MILLIS_PER_SECOND, DAYS_OF_WEEK, MONTHS, TZ_BLACKLIST} from "./enums";

describe("MILLIS_PER_SECOND", () => {
  it("Export exists", () => expect(MILLIS_PER_SECOND).not.toBeUndefined());
  it("Is type Number", () => expect(typeof MILLIS_PER_SECOND).toBe("number"));
  it("Has value of 1000", () => expect(MILLIS_PER_SECOND).toEqual(1000));
});

describe("DAYS_OF_WEEK", () => {
  it("Export exists", () => expect(DAYS_OF_WEEK).not.toBeUndefined());
  it("To be an array with seven items", () => expect(DAYS_OF_WEEK.length).toBe(7));
});

describe("MONTHS", () => {
  it("Export exists", () => expect(MONTHS).not.toBeUndefined());
  it("To be an array with 12 items", () => expect(MONTHS.length).toBe(12));

});

describe("TZ_BLACKLIST", () => {
  it("Export exists", () => expect(TZ_BLACKLIST).not.toBeUndefined());
  it("To be an array with 2 items", () => expect(TZ_BLACKLIST.length).toBe(2));
});
