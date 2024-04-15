import { sign } from 'jsonwebtoken';

export class RefreshToken {
  id: string;
  userId: string;
  userAgent: string;
  ipAddress: string;

  sign() {
    return sign({ ...this }, process.env.REFRESH_TOKEN_SECRET);
  }
}
