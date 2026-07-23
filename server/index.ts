import express from "express";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function startServer() {
  const app = express();
  const server = createServer(app);
  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));
  // Handle client-side routing — serve per-route pre-rendered index.html if it exists,
  // otherwise fall back to root index.html for SPA routing
  app.get("*", (req, res) => {
    // Normalize the request path (strip query params, ensure trailing slash for directories)
    let reqPath = req.path;

    // Check if a pre-rendered index.html exists for this route
    const routeIndexPath = path.join(staticPath, reqPath, "index.html");
    if (fs.existsSync(routeIndexPath)) {
      return res.sendFile(routeIndexPath);
    }

    // Also check without trailing slash
    const routeIndexPathNoSlash = path.join(staticPath, reqPath + "/", "index.html");
    if (reqPath !== "/" && fs.existsSync(routeIndexPathNoSlash)) {
      return res.sendFile(routeIndexPathNoSlash);
    }

    // Fall back to root index.html for SPA routing
    res.sendFile(path.join(staticPath, "index.html"));
  });
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
startServer().catch(console.error);
