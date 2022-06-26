export class Money {
  static ZERO = new Money(0);
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  wons = (amount: number) => {
    return new Money(amount);
  };

  getAmount = () => this.amount;

  plus = (amount: Money) => {
    return new Money(this.amount + amount.getAmount());
  };

  minus = (amount: Money) => {
    return new Money(this.amount - amount.getAmount());
  };

  times = (percent: number) => {
    return new Money(this.amount * percent);
  };

  isLessThan = (other: Money) => {
    return this.amount < other.getAmount();
  };

  isGreaterThanOrEqual = (other: Money) => {
    return this.amount >= other.getAmount();
  };
}
