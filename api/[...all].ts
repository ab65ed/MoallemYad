import express from "express";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { registerRoutes } from "../server/routes";

// Create a single Express app instance reused across invocations
const app = express();
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await ensureInitialized();
  return (app as any)(req, res);
}


