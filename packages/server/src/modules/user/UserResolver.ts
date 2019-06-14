import { Resolver, Query } from "type-graphql";
import { User } from "../../entity/User";

@Resolver(User)
export class UserResolver {
  constructor() {}

  @Query(() => User, { nullable: true })
  async me() {
    console.log("ME IS CALLED");
    return User.findOne({ id: "something" });
  }
}
