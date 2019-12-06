import { User } from '../../backend.service';
import { Dictionary } from '@ngrx/entity';

export const MOCK_USERS_ENTITY: Dictionary<User> = {
  '111':{
    id: 111,
    name: 'Victor'
  }
};