import * as http from "http";
import * as url from "url";
import * as next from "next";

import { routes } from "./routes";

const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = url.parse(req.url as string, true);

      handle(req, res, parsedUrl);
    })
    .listen(port, (err: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
});
