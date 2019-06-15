import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  name: string;

  @Field()
  @Column({ type: "text", unique: true })
  username: string;

  @Field()
  @Column({ type: "text", unique: true })
  email: string;

  @Column()
  password: string;
}
