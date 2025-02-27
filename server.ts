import index from "./index.html";

const server = Bun.serve({
  routes: {
    "/": index,
  },
  async fetch(req) {
    const path = new URL(req.url).pathname;
    if (path === "/api/names") {
      return Response.json(["Umut", "Celi"]);
    }
    return new Response("hello world");
  },
});

console.log(`Listening on http://${server.hostname}:${server.port}/`);
