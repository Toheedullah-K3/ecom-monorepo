import Fastify from "fastify";

const app = Fastify();

app.get("/", async (request, reply) => {
  return { message: "Hello from order-service!" };
});

const start = async () => {
  try {
    await app.listen({ port: 8001 });
    console.log("Order Service listening on port 8001");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();