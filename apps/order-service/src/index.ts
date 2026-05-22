import Fastify from "fastify";
import { clerkPlugin, getAuth } from '@clerk/fastify'
import { shouldBeUser } from "./middleware/authMiddleware.js";

const fastify = Fastify();

fastify.register(clerkPlugin);


fastify.get("/", async (request, reply) => {
  return { message: "Hello from order-service!" };
});

fastify.get("/test", { preHandler: async (request, reply) => { await shouldBeUser(request, reply); } }, async (request, reply) => {
  return reply.send({ message: `Hello user ${request.userId} from order-service!` });
});

const start = async () => {
  try {
    await fastify.listen({ port: 8001 });
    console.log("Order Service listening on port 8001");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();