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

  // CRITICAL: { index: false } prevents express.static from auto-serving index.html
  // for directory URLs. This lets our catch-all route below handle all HTML routing
  // and serve the correct per-route pre-rendered index.html with proper canonical/og:url.
  app.use(express.static(staticPath, { index: false }));

  // Handle client-side routing — serve per-route pre-rendered index.html if it exists,
  // otherwise fall back to root index.html for SPA routing
  app.get("*", (req, res) => {
    // Normalize the request path
    let reqPath = req.path;

    // Check if a pre-rendered index.html exists for this route
    const routeIndexPath = path.join(staticPath, reqPath, "index.html");
    if (fs.existsSync(routeIndexPath)) {
      return res.sendFile(routeIndexPath);
    }

    // Also check without trailing slash (e.g., /locations/nj/ramsey -> /locations/nj/ramsey/index.html)
    if (!reqPath.endsWith("/")) {
      const routeIndexPathWithSlash = path.join(staticPath, reqPath + "/", "index.html");
      if (fs.existsSync(routeIndexPathWithSlash)) {
        return res.sendFile(routeIndexPathWithSlash);
      }
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
