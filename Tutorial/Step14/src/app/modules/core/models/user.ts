import { Auth } from './auth';

/**
 * User view Model
 *
 * @export
 * @class User
 */
export class User extends Auth {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
}