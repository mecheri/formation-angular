/**
 * Authentication View Model
 *
 * @export
 * @class Auth
 */
export class Auth {
    constructor(
        public username?: string,
        public password?: string
    ) {
        this.username = null;
        this.password = null;
    }
}
