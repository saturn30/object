import { Bag } from "./Bag";
import { Ticket } from "./Ticket";

export class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  buy = (ticket: Ticket) => {
    if (this.bag.hasInvitation()) {
      this.bag.setTicket(ticket);
      return 0;
    }

    this.bag.minusAmount(ticket.getFee());
    this.bag.setTicket(ticket);

    return ticket.getFee();
  };
}
