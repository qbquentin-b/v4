import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message envoyé avec succès!", data: message });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Données invalides", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Erreur du serveur" });
      }
    }
  });

  // Get contact messages (for admin purposes if needed later)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, data: messages });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erreur du serveur" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
