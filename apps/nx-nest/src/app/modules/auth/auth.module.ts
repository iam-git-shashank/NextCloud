import {  Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,

    JwtModule.register({
      global: true,
      secret: 'I_AM_THANOS_AND_YOU_ARE_NOTHING',
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AuthenticationModule {}
