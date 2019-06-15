import { Resolver, Query, Mutation, Arg } from "type-graphql";
import bcrypt from "bcrypt";
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "hello";
  }

  @Mutation(() => User)
  async register(@Arg("input")
  {
    firstName,
    lastName,
    email,
    username,
    password
  }: RegisterInput): Promise<User> {
    const hasedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      username,
      password: hasedPassword
    }).save();

    return user;
  }
}
