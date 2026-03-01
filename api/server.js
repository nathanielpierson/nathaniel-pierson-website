/**
 * Minimal API that returns total page views from Google Analytics 4.
 *
 * Deploy as a separate service (e.g. Render "Web Service") and set env vars:
 *   GA4_PROPERTY_ID   - Your GA4 property ID (numeric, from Admin > Property Settings)
 *   GOOGLE_APPLICATION_CREDENTIALS_JSON - Full JSON string of your service account key
 *
 * Frontend: set VITE_VIEW_COUNT_API_URL to this service's URL + /views (e.g. https://your-api.onrender.com/views)
 */

import express from "express";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const app = express();
const PORT = process.env.PORT || 3001;

// Optional CORS if your frontend is on a different origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

async function getGA4PageViews() {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;

  if (!propertyId || !credentialsJson) {
    throw new Error("Missing GA4_PROPERTY_ID or GOOGLE_APPLICATION_CREDENTIALS_JSON");
  }

  let credentials;
  try {
    credentials = JSON.parse(credentialsJson);
  } catch {
    throw new Error("Invalid GOOGLE_APPLICATION_CREDENTIALS_JSON");
  }

  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials,
  });

  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
    dimensions: [],
    metrics: [{ name: "screenPageViews" }],
  });

  const row = response.rows?.[0];
  const value = row?.metricValues?.[0]?.value;
  return value ? parseInt(value, 10) : 0;
}

app.get("/views", async (req, res) => {
  try {
    const count = await getGA4PageViews();
    res.json({ count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
});

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`View count API listening on port ${PORT}`);
});
