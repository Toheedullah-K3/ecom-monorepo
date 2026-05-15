import Fastify from "fastify";
import { clerkPlugin, getAuth } from '@clerk/fastify'

const fastify = Fastify();

fastify.register(clerkPlugin);


fastify.get("/", async (request, reply) => {
  return { message: "Hello from order-service!" };
});

fastify.get("/test", async (request, reply) => {
  const { userId } = getAuth(request);
  
  if(!userId){
    return reply.status(401).send({ message: "Unauthorized" });
  } 

  return { message: `Hello, user ${userId}! This is a protected route.` };
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