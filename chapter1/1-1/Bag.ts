import { Invitation } from "./Invitation";
import { Ticket } from "./Ticket";

export class Bag {
  private amount: number;
  private invitation: Invitation | null;
  private ticket: Ticket | null;

  constructor({
    amount,
    invitation = null,
    ticket = null,
  }: {
    amount: number;
    invitation?: Invitation | null;
    ticket?: Ticket | null;
  }) {
    this.amount = amount;
    this.invitation = invitation;
    this.ticket = ticket;
  }

  hasInvitation = () => this.invitation !== null;

  hasTicket = () => this.ticket !== null;

  setTicket = (ticket: Ticket) => (this.ticket = ticket);

  minusAmount = (amount: number) => (this.amount -= amount);

  plusAmount = (amount: number) => (this.amount += amount);
}
