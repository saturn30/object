import { Customer } from "./Customer";
import { Movie } from "./Movie";
import { Reservation } from "./Reservation";

export class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  reserve = (customer: Customer, audienceCount: number) => {
    return new Reservation({
      customer,
      screening: this,
      fee: this.calculateFee(audienceCount),
      audienceCount,
    });
  };

  calculateFee = (audienceCount: number) => {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  };

  getStartTime = () => this.whenScreened;

  isSequence = (sequence: number) => this.sequence === sequence;

  getMovieFee = () => this.movie.getFee();
}
