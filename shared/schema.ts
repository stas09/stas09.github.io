import { pgTable, text, serial, integer, boolean, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Enum for campaign status
export const campaignStatusEnum = pgEnum('campaign_status', ['Completed', 'In Progress', 'Scheduled']);

// Enum for risk level 
export const riskLevelEnum = pgEnum('risk_level', ['Low', 'Medium', 'High', 'Critical']);

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  displayName: text("display_name").notNull(),
  role: text("role").notNull(),
  companyName: text("company_name"),
  industry: text("industry"),
  position: text("position"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Campaigns table
export const campaigns = pgTable("campaigns", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  status: campaignStatusEnum("status").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  duration: integer("duration"),
  description: text("description"),
  targetGroups: text("target_groups"),
  businessImpact: text("business_impact"), // Added for business context
  riskLevel: riskLevelEnum("risk_level").notNull(),
  riskScore: integer("risk_score").notNull(),
  successRate: integer("success_rate"),
  emailsSent: integer("emails_sent"),
  emailsOpened: integer("emails_opened"),
  linksClicked: integer("links_clicked"),
  dataSubmitted: integer("data_submitted"),
  reportedPhishing: integer("reported_phishing"),
  complianceFramework: text("compliance_framework"), // Added for business compliance
  costSavings: integer("cost_savings"), // Added for ROI calculation
  createdBy: integer("created_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Department metrics table
export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  campaignId: integer("campaign_id").references(() => campaigns.id),
  value: integer("value").notNull(),
  riskLevel: riskLevelEnum("risk_level").notNull(),
  employeeCount: integer("employee_count"), // Added for business context
  averageTrainingScore: integer("average_training_score"), // Added for training metrics
});

// Timeline events table
export const timelineEvents = pgTable("timeline_events", {
  id: serial("id").primaryKey(),
  campaignId: integer("campaign_id").references(() => campaigns.id),
  title: text("title").notNull(),
  timestamp: timestamp("timestamp").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  iconBackground: text("icon_background").notNull(),
  businessImpact: text("business_impact"), // Added for business context
});

// Recommendations table
export const recommendations = pgTable("recommendations", {
  id: serial("id").primaryKey(),
  campaignId: integer("campaign_id").references(() => campaigns.id),
  type: text("type").notNull(), // 'critical', 'positive', 'action'
  title: text("title").notNull(),
  text: text("text").notNull(),
  icon: text("icon").notNull(),
  estimatedCost: integer("estimated_cost"), // Added for budget planning
  implementationTimeframe: text("implementation_timeframe"), // Added for project planning
  businessBenefit: text("business_benefit"), // Added for ROI justification
});

// Security metrics table
export const securityMetrics = pgTable("security_metrics", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  value: integer("value").notNull(),
  maxValue: integer("max_value"),
  trend: text("trend").notNull(), // 'up' or 'down'
  trendValue: text("trend_value").notNull(),
  unit: text("unit"),
  criticalCount: integer("critical_count"),
  mediumCount: integer("medium_count"),
  recordedAt: timestamp("recorded_at").defaultNow().notNull(),
  industryAverage: integer("industry_average"), // Added for benchmarking
  complianceTarget: integer("compliance_target"), // Added for compliance tracking
});

// Business metrics table (new)
export const businessMetrics = pgTable("business_metrics", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  value: integer("value").notNull(),
  securityImpact: text("security_impact").notNull(),
  description: text("description").notNull(),
  costImplication: integer("cost_implication"),
  recordedAt: timestamp("recorded_at").defaultNow().notNull(),
});

// Schema definitions for inserts
export const insertUserSchema = createInsertSchema(users).omit({ id: true, createdAt: true });
export const insertCampaignSchema = createInsertSchema(campaigns).omit({ id: true, createdAt: true });
export const insertDepartmentSchema = createInsertSchema(departments).omit({ id: true });
export const insertTimelineEventSchema = createInsertSchema(timelineEvents).omit({ id: true });
export const insertRecommendationSchema = createInsertSchema(recommendations).omit({ id: true });
export const insertSecurityMetricSchema = createInsertSchema(securityMetrics).omit({ id: true, recordedAt: true });
export const insertBusinessMetricSchema = createInsertSchema(businessMetrics).omit({ id: true, recordedAt: true });

// Types for inserts
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertCampaign = z.infer<typeof insertCampaignSchema>;
export type InsertDepartment = z.infer<typeof insertDepartmentSchema>;
export type InsertTimelineEvent = z.infer<typeof insertTimelineEventSchema>;
export type InsertRecommendation = z.infer<typeof insertRecommendationSchema>;
export type InsertSecurityMetric = z.infer<typeof insertSecurityMetricSchema>;
export type InsertBusinessMetric = z.infer<typeof insertBusinessMetricSchema>;

// Types for selects
export type User = typeof users.$inferSelect;
export type Campaign = typeof campaigns.$inferSelect;
export type Department = typeof departments.$inferSelect;
export type TimelineEvent = typeof timelineEvents.$inferSelect;
export type Recommendation = typeof recommendations.$inferSelect;
export type SecurityMetric = typeof securityMetrics.$inferSelect;
export type BusinessMetric = typeof businessMetrics.$inferSelect;
