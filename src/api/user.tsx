import { UserType } from '../types/user';
import instance from './instance';

export const login = (user: UserType) => {
    const url = `/login`;
    return instance.post(url, user);
}

