import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/common/users/entities/user.entity';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => User)
  user: User;
}
