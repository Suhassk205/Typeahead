import { app } from "./server";

app.get("/", () => Bun.file("public/index.html"));

const port = parseInt(process.env.PORT ?? "3000");
app.listen(port);

console.log(
  `🚀 AuraType running at http://${app.server?.hostname || "localhost"}:${app.server?.port || port}`
);
