import { DiscountPolicy } from "./discountPolicy/DiscountPolicy";
import { Money } from "./Money";
import { Screening } from "./Screening";

export class Movie {
  title: string;
  runningTime: number;
  fee: Money;
  discountPolicy: DiscountPolicy;

  constructor(params: {
    title: string;
    runningTime: number;
    fee: Money;
    discountPolicy: DiscountPolicy;
  }) {
    const { title, runningTime, fee, discountPolicy } = params;
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountPolicy = discountPolicy;
  }

  getFee = () => this.fee;

  calculateMovieFee = (screening: Screening) => {
    return this.fee.minus(
      this.discountPolicy.calculateDiscountAmount(screening)
    );
  };
}
