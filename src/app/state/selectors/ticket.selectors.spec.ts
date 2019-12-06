import { selectTicketsWithUser } from './ticket.selectors';
import { Ticket, User } from '../../backend.service';
import { selectAllUserEntities, selectAllUsers } from './user.selectors';
import { Dictionary } from '@ngrx/entity';

describe('TicketSelectors', () => {
  const mockTickets = [
    {
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

  const mockUsers: Dictionary<User> = {
    '111':{
      id: 111,
      name: 'Victor'
    }
  };

  it('should return tickets with user objects included', () => {
    const result = [
      {
        id: 0,
        description: 'Install a monitor arm',
        assigneeId: 111,
        completed: false,
        user: {...mockUsers['111']}
      },
      {
        id: 1,
        description: 'Move the desk to the new location',
        assigneeId: 111,
        completed: false,
        user: {...mockUsers['111']}
      }
    ];

    expect(selectTicketsWithUser.projector(mockTickets, mockUsers)).toEqual(result);
  });
});