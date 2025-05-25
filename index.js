// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// client/src/lib/mockData.ts
var securityMetrics = [
  {
    name: "Security Score",
    value: 76,
    maxValue: 100,
    trend: "up",
    trendValue: "5%",
    unit: "",
    industryAverage: 68,
    complianceTarget: 80
  },
  {
    name: "Open Vulnerabilities",
    value: 12,
    trend: "up",
    trendValue: "3",
    unit: "issues",
    criticalCount: 3,
    mediumCount: 9,
    industryAverage: 18
  },
  {
    name: "Phishing Success Rate",
    value: 23,
    trend: "down",
    trendValue: "12%",
    unit: "%",
    industryAverage: 32,
    complianceTarget: 15
  },
  {
    name: "Staff Awareness",
    value: 68,
    trend: "up",
    trendValue: "8%",
    unit: "%",
    industryAverage: 55,
    complianceTarget: 75
  }
];
var latestCampaign = {
  id: 1,
  name: "Spring Security Drill",
  type: "Email Campaign",
  status: "Completed",
  startDate: "May 15, 2023",
  endDate: "May 22, 2023",
  duration: 7,
  targetGroups: ["All Departments"],
  riskLevel: "Medium",
  riskScore: 60,
  successRate: 23,
  description: "This campaign simulated a phishing attack using a fake software update email from IT department. The email contained a malicious link that directed users to a fake login page designed to capture credentials.",
  emailsSent: 250,
  emailsOpened: 170,
  linksClicked: 105,
  dataSubmitted: 58,
  reportedPhishing: 45,
  businessImpact: "Identified $125,000 potential risk exposure from credential harvesting vulnerabilities.",
  complianceFramework: "ISO 27001, NIST CSF",
  costSavings: 125e3
};
var campaigns = [
  {
    id: 1,
    name: "Spring Security Drill",
    type: "Email Campaign",
    status: "Completed",
    startDate: "May 15, 2023",
    riskLevel: "Medium",
    riskScore: 60,
    successRate: 23,
    businessImpact: "Potential $125K risk exposure",
    complianceFramework: "ISO 27001, NIST CSF",
    costSavings: 125e3
  },
  {
    id: 2,
    name: "Web Portal Assessment",
    type: "Vulnerability Scan",
    status: "In Progress",
    startDate: "Jun 02, 2023",
    riskLevel: "High",
    riskScore: 85,
    successRate: null,
    businessImpact: "Customer data protection",
    complianceFramework: "PCI DSS, GDPR"
  },
  {
    id: 3,
    name: "Password Policy Audit",
    type: "Security Assessment",
    status: "Completed",
    startDate: "Apr 10, 2023",
    riskLevel: "Low",
    riskScore: 35,
    successRate: 18,
    businessImpact: "Access control enhancement",
    complianceFramework: "NIST 800-53",
    costSavings: 45e3
  },
  {
    id: 4,
    name: "Finance Team Phishing",
    type: "Targeted Campaign",
    status: "Scheduled",
    startDate: "Jun 15, 2023",
    riskLevel: "Critical",
    riskScore: 95,
    successRate: null,
    businessImpact: "Financial fraud prevention",
    complianceFramework: "SOX, GLBA"
  }
];
var departmentBreakdown = [
  { name: "Finance", value: 34, riskLevel: "High", employeeCount: 25, averageTrainingScore: 72 },
  { name: "HR", value: 27, riskLevel: "High", employeeCount: 18, averageTrainingScore: 75 },
  { name: "Sales", value: 24, riskLevel: "Medium", employeeCount: 42, averageTrainingScore: 80 },
  { name: "Marketing", value: 18, riskLevel: "Medium", employeeCount: 31, averageTrainingScore: 82 },
  { name: "Operations", value: 12, riskLevel: "Low", employeeCount: 38, averageTrainingScore: 88 },
  { name: "IT", value: 8, riskLevel: "Low", employeeCount: 15, averageTrainingScore: 94 }
];
var timelineEvents = [
  {
    id: 1,
    title: "Campaign Launched",
    timestamp: "May 15, 2023 - 9:00 AM",
    description: "250 emails were sent to all departments",
    icon: "play-fill",
    iconBackground: "bg-secondary",
    businessImpact: "Initial deployment of security testing resources"
  },
  {
    id: 2,
    title: "First Hour Activity",
    timestamp: "May 15, 2023 - 10:00 AM",
    description: "87 emails opened (35%), 42 links clicked (17%)",
    icon: "envelope-open",
    iconBackground: "bg-secondary-light",
    businessImpact: "Early indicators of security awareness gaps"
  },
  {
    id: 3,
    title: "First Credential Submission",
    timestamp: "May 15, 2023 - 10:12 AM",
    description: "First user submitted credentials on the fake login page",
    icon: "exclamation-triangle",
    iconBackground: "bg-warning",
    businessImpact: "Identified critical security training need"
  },
  {
    id: 4,
    title: "First Phishing Report",
    timestamp: "May 15, 2023 - 10:23 AM",
    description: "Security team received first phishing report",
    icon: "shield-check",
    iconBackground: "bg-success",
    businessImpact: "Evidence of effective security culture in some areas"
  },
  {
    id: 5,
    title: "Mid-Campaign Stats",
    timestamp: "May 18, 2023 - 12:00 PM",
    description: "145 emails opened (58%), 82 links clicked (33%), 42 credentials submitted (17%)",
    icon: "hourglass-split",
    iconBackground: "bg-neutral",
    businessImpact: "Ongoing assessment of potential business risk exposure"
  },
  {
    id: 6,
    title: "Campaign Ended",
    timestamp: "May 22, 2023 - 9:00 AM",
    description: "Final stats: 170 emails opened (68%), 105 links clicked (42%), 58 credentials submitted (23%)",
    icon: "flag-fill",
    iconBackground: "bg-gray-600",
    businessImpact: "Completed calculation of security risk metrics and ROI"
  }
];
var recommendations = {
  critical: [
    {
      type: "critical",
      title: "Critical Findings",
      text: "High submission rate in Finance department (34%)",
      icon: "x-circle",
      businessBenefit: "Protecting financial assets and sensitive fiscal data",
      estimatedCost: 18e3,
      implementationTimeframe: "1-2 weeks"
    },
    {
      type: "critical",
      title: "Critical Findings",
      text: "Low phishing reporting rate overall (18%)",
      icon: "x-circle",
      businessBenefit: "Accelerating threat identification and mitigation",
      estimatedCost: 5e3,
      implementationTimeframe: "1 week"
    },
    {
      type: "critical",
      title: "Critical Findings",
      text: "23% of staff submitted credentials without verification",
      icon: "x-circle",
      businessBenefit: "Preventing unauthorized access to sensitive systems",
      estimatedCost: 12e3,
      implementationTimeframe: "2-3 weeks"
    }
  ],
  positive: [
    {
      type: "positive",
      title: "Positive Observations",
      text: "IT department had the lowest submission rate (8%)",
      icon: "check-circle",
      businessBenefit: "Strong security culture in technical teams",
      implementationTimeframe: "Already established"
    },
    {
      type: "positive",
      title: "Positive Observations",
      text: "First phishing report was submitted within 23 minutes",
      icon: "check-circle",
      businessBenefit: "Some evidence of effective threat reporting",
      implementationTimeframe: "Already established"
    },
    {
      type: "positive",
      title: "Positive Observations",
      text: "32% of users who opened the email did not click the link",
      icon: "check-circle",
      businessBenefit: "Foundation for effective security awareness",
      implementationTimeframe: "Already established"
    }
  ],
  actions: [
    {
      type: "action",
      title: "Enhanced Security Training",
      text: "Schedule targeted security awareness training for Finance and HR departments with focus on identifying phishing emails and proper reporting procedures.",
      icon: "mortarboard",
      businessBenefit: "Reduced risk of financial fraud and data breaches",
      estimatedCost: 28e3,
      implementationTimeframe: "1 month"
    },
    {
      type: "action",
      title: "Authentication Enhancement",
      text: "Implement multi-factor authentication for all sensitive systems, especially for Finance and HR departments to mitigate credential harvesting risks.",
      icon: "shield-lock",
      businessBenefit: "Enhanced protection of critical business systems",
      estimatedCost: 45e3,
      implementationTimeframe: "2-3 months"
    },
    {
      type: "action",
      title: "Improve Reporting Mechanisms",
      text: 'Add a prominent "Report Phishing" button to the email client and conduct training on how to use it effectively.',
      icon: "bell",
      businessBenefit: "Faster identification and response to real threats",
      estimatedCost: 15e3,
      implementationTimeframe: "3 weeks"
    }
  ]
};

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/campaigns", (req, res) => {
    res.json(campaigns);
  });
  app2.get("/api/campaigns/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.json(latestCampaign);
  });
  app2.get("/api/metrics", (req, res) => {
    res.json(securityMetrics);
  });
  app2.get("/api/departments", (req, res) => {
    res.json(departmentBreakdown);
  });
  app2.get("/api/timeline", (req, res) => {
    res.json(timelineEvents);
  });
  app2.get("/api/recommendations", (req, res) => {
    res.json(recommendations);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { viteStaticCopy } from "vite-plugin-static-copy";
var vite_config_default = defineConfig({
  base: "/stas09.github.io/",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    viteStaticCopy({
      targets: [
        {
          src: "public/_redirects",
          dest: "."
        }
      ]
    }),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
