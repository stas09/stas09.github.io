import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { campaigns, latestCampaign, securityMetrics, departmentBreakdown, timelineEvents, recommendations } from "../client/src/lib/mockData";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all campaigns
  app.get('/api/campaigns', (req, res) => {
    res.json(campaigns);
  });

  // Get a single campaign by ID
  app.get('/api/campaigns/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    // For simplicity, we're just returning the latestCampaign
    // In a real app, you'd look up by ID
    res.json(latestCampaign);
  });

  // Get security metrics
  app.get('/api/metrics', (req, res) => {
    res.json(securityMetrics);
  });

  // Get department breakdown
  app.get('/api/departments', (req, res) => {
    res.json(departmentBreakdown);
  });

  // Get timeline events
  app.get('/api/timeline', (req, res) => {
    res.json(timelineEvents);
  });

  // Get recommendations
  app.get('/api/recommendations', (req, res) => {
    res.json(recommendations);
  });

  const httpServer = createServer(app);

  return httpServer;
}
