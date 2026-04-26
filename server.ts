import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Example matching logic endpoint (could be handled on client with Firebase, but server is better for complex logic)
  app.post("/api/match-volunteers", (req, res) => {
    const { need, volunteers } = req.body;
    // Simple matching scoring logic
    const matches = volunteers.map((v: any) => {
      let score = 0;
      // Skill match
      const skillMatch = v.skills.some((s: string) => need.category.toLowerCase().includes(s.toLowerCase()));
      if (skillMatch) score += 40;
      
      // Proximity (mocked for now, would use geo-distance)
      if (v.location === need.location) score += 30;
      
      // Availability/Urgency
      if (need.urgency === "Critical" && v.activeWorkload < 2) score += 20;
      
      // Experience
      if (v.experienceLevel === "Expert") score += 10;
      
      return { ...v, matchScore: score };
    }).sort((a: any, b: any) => b.matchScore - a.matchScore);

    res.json(matches);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
