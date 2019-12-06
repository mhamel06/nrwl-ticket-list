import { Ticket, User } from '../../backend.service';
import { TicketAndUser } from '../ticket.model';
import { Dictionary } from '@ngrx/entity';

export const MOCK_TICKETS: Ticket[] = [{
    id: 0,
    description: 'Install a monitor arm',
    assigneeId: 111,
    completed: false
  },
  {
    id: 1,
    description: 'Move the desk to the new location',
    assigneeId: 111,
    completed: false
  }
];

export const MOCK_TICKETS_WITH_USERS: TicketAndUser[] = [
  {
    id: 0,
    description: 'Install a monitor arm',
    assigneeId: 111,
    completed: false,
    user: {
      id: 111,
      name: 'Victor'
    }
  },
  {
    id: 1,
    description: 'Move the desk to the new location',
    assigneeId: 111,
    completed: false,
    user: {
      id: 111,
      name: 'Victor'
    }
  }
];