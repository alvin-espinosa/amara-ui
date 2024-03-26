import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { expressJwtSecret } from 'jwks-rsa';
import { promisify } from 'util';
import {GetVerificationKey, expressjwt} from 'express-jwt';



@Injectable()
export class AuthorizationGuard implements CanActivate {
  private AUTH0_AUDIENCE: string;
  private AUTH0_DOMAIN: string;

  constructor(private configService: ConfigService) {
    this.AUTH0_AUDIENCE = this.configService.get<string>('AUTH0_AUDIENCE');
    this.AUTH0_DOMAIN = this.configService.get<string>('AUTH0_DOMAIN');
  }


  async canActivate(context: ExecutionContext): Promise<boolean> {
    debugger
    const req = context.getArgByIndex(0);
    const res = context.getArgByIndex(1);
    const checkJwt = promisify(expressjwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_JWKS_URI}.well-known/jwks.json`,
      }) as GetVerificationKey,
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER,
      algorithms: ['RS256'],
    }));

    try {
      await checkJwt(req, res);
      return true;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
