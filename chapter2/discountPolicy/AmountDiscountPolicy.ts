import { DiscountCondition } from "../discountCondition";
import { Money } from "../Money";
import { DiscountPolicy } from "./DiscountPolicy";

export class AmountDiscountPolicy extends DiscountPolicy {
  private discountAmount: Money;

  constructor({
    discountAmount,
    conditions,
  }: {
    discountAmount: Money;
    conditions: DiscountCondition[];
  }) {
    super(conditions);
    this.discountAmount = discountAmount;
  }

  protected override getDiscountAmount = () => {
    return this.discountAmount;
  };
}
