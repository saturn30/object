import { DiscountCondition } from "../discountCondition";
import { Screening } from "../Screening";
import { DiscountPolicy } from "./DiscountPolicy";

export class PercentDiscountPolicy extends DiscountPolicy {
  private percent: number;

  constructor({
    percent,
    conditions,
  }: {
    percent: number;
    conditions: DiscountCondition[];
  }) {
    super(conditions);
    this.percent = percent;
  }

  override getDiscountAmount = (screening: Screening) => {
    return screening.getMovieFee().times(this.percent);
  };
}
