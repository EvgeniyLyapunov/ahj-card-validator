import Validator from "../Validator";

test.each([
  ["6011041877746519", true],
  ["371988055515966", true],
  ["6011041877746518", false],
])("should number of card %s is %s", (num, expected) => {
  const result = Validator.isNumberValid(num);
  expect(result).toBe(expected);
});

test.each([
  ["371988055515966", "american_express"],
  ["4532659856745320", "visa"],
  ["5200903679271520", "mastercard"],
  ["6011990562529129", "discover"],
  ["36241148106634", "diners"],
  ["3529936651689482", "jcb"],
  ["2202200975987809", "mir"],
  ["6759823113269059", "card"],
])("should card number %s is name %s", (cardNum, expected) => {
  const result = Validator.getCardName(cardNum);
  expect(result).toBe(expected);
});
