import { Screening } from "../Screening";
import { DiscountCondition } from "./DiscountCondition";

export class PeriodCondition implements DiscountCondition {
  private startTime: Date;
  private endTime: Date;

  constructor(params: { startTime: Date; endTime: Date }) {
    const { startTime, endTime } = params;

    this.startTime = startTime;
    this.endTime = endTime;
  }

  isSatisfiedBy = (screening: Screening) => {
    return (
      this.startTime <= screening.getStartTime() &&
      this.endTime <= screening.getStartTime()
    );
  };
}
