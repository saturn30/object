import { Audience } from "./Audience";
import { TicketOffice } from "./TicketOffice";

export class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  sellTo = (audience: Audience) => {
    const ticket = this.ticketOffice.getTicket();
    if (ticket) this.ticketOffice.plusAmount(audience.buy(ticket));
    else {
      console.log("티켓이 존재하지 않습니다.");
    }
  };
}
