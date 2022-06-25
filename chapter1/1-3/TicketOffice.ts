import { Audience } from "./Audience";
import { Ticket } from "./Ticket";

export class TicketOffice {
  private amount: number;
  private tickets: Ticket[];

  constructor({ amount, tickets }: { amount: number; tickets: Ticket[] }) {
    this.amount = amount;
    this.tickets = tickets;
  }

  sellTicketTo = (audience: Audience) => {
    const ticket = this.getTicket();

    if (ticket) {
      this.plusAmount(audience.buy(ticket));
    } else {
      throw new Error("티켓이 존재하지 않습니다.");
    }
  };

  getTicket = () => this.tickets.shift();

  minusAmount = (amount: number) => (this.amount -= amount);

  plusAmount = (amount: number) => (this.amount += amount);
}
