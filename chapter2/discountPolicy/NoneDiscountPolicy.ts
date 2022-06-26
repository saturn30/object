import { Money } from "../Money";
import { DiscountPolicy } from "./DiscountPolicy";

export class NoneDiscountPolicy extends DiscountPolicy {
  protected override getDiscountAmount = () => Money.ZERO;
}
