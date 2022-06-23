import { Audience } from "./Audience";
import { TicketSeller } from "./TicketSeller";

export class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  enter = (audience: Audience) => {
    if (audience.getBag().hasInvitation()) {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      ticket && audience.getBag().setTicket(ticket);
    } else {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      if (ticket) {
        audience.getBag().minusAmount(ticket.getFee());
        this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
        audience.getBag().setTicket(ticket);
      }
    }
  };
}
