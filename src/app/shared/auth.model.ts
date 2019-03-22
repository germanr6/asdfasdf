export class AuthRequest {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class AuthUser {
  userId: number;
  username: string;
  token: string;

  constructor(userId: number, username: string, token: string) {
    this.userId = userId;
    this.username = username;
    this.token = token;
  }
}
