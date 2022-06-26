import { Screening } from "../Screening";
import { DiscountCondition } from "./DiscountCondition";

export class SequenceCondition implements DiscountCondition {
  sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  isSatisfiedBy = (screening: Screening) => {
    return screening.isSequence(this.sequence);
  };
}
