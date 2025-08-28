import express from "express";
import { registerRoutes } from "../server/routes";

// Create a single Express app instance reused across invocations
const app = express();
// Permissive CORS for cross-origin calls from custom domain to vercel.app
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false, limit: "10mb" }));

let initialized: Promise<void> | null = null;
function ensureInitialized() {
  if (!initialized) {
    initialized = (async () => {
      await registerRoutes(app);
    })();
  }
  return initialized;
}

export default async function handler(req: any, res: any) {
  await ensureInitialized();
  return (app as any)(req, res);
}


