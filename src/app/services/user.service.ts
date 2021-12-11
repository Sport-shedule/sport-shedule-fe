export class User {
  username: string;
  password: string;
}

export class UserService {
  user: User;
  constructor() {
  }

  login(username: string, password: string) {

  }

  hasAccess(path: string) {
    return false;
  }
}
