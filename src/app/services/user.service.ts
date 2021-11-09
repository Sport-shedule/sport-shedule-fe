export class User {
  username: string;
  password: string;
  roles: string[];
}

export class UserService {
  user: User;
  constructor() {
  }

  hasAccess(path: string) {
    return false;
  }
}
