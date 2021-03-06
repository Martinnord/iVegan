import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema, formatArgumentValidationError } from "type-graphql";
import cors from "cors";

import { createTypeormConn } from "./createTypeormConn";
import { UserResolver } from "./modules/user/UserResolver";
import { RegisterResolver } from "./modules/user/Register";

const startServer = async () => {
  await createTypeormConn();

  const app = express();

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000"
    })
  );

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, RegisterResolver]
    }),
    formatError: formatArgumentValidationError
  } as any);

  server.applyMiddleware({ app }); // app is from an existing express app

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
