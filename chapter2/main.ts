import { SequenceCondition } from "./discountCondition";
import { AmountDiscountPolicy } from "./discountPolicy/AmountDiscountPolicy";
import { Money } from "./Money";
import { Movie } from "./Movie";

function main() {
  const avatar = new Movie({
    title: "아바타",
    runningTime: 120,
    fee: new Money(10000),
    discountPolicy: new AmountDiscountPolicy({
      discountAmount: new Money(2000),
      conditions: [new SequenceCondition(10)],
    }),
  });
}
