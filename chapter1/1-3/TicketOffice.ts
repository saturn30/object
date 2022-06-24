import { Ticket } from "./Ticket";

export class TicketOffice {
  private amount: number;
  private tickets: Ticket[];

  constructor({ amount, tickets }: { amount: number; tickets: Ticket[] }) {
    this.amount = amount;
    this.tickets = tickets;
  }

  getTicket = () => this.tickets.shift();

  minusAmount = (amount: number) => (this.amount -= amount);

  plusAmount = (amount: number) => (this.amount += amount);
}
