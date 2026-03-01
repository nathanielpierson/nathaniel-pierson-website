# View count API (GA4)

This folder is a small backend that reads **total page views** from your Google Analytics 4 property and exposes them as JSON. The portfolio frontend can call it to show “X page views” on the home page.

## Why a backend?

The Google tag (gtag) on your site only *sends* data to GA4. It cannot *read* data back. To show a view count, you must use the [Google Analytics Data API (GA4)](https://developers.google.com/analytics/devguides/reporting/data/v1), which requires server-side authentication. This API is that small server.

## 1. Google Cloud & GA4 setup

1. **GA4 Property ID (numeric)**  
   In [Google Analytics](https://analytics.google.com/): Admin → Property settings. Copy the **Property ID** (numeric, e.g. `123456789`).  
   (Your measurement ID `G-EFWV2HNE1R` is not the same as this Property ID.)

2. **Google Cloud project**  
   - Go to [Google Cloud Console](https://console.cloud.google.com/).  
   - Create or select a project and link it to your GA4 property if needed.

3. **Enable the API**  
   - APIs & Services → Library → search “Google Analytics Data API” → Enable.

4. **Service account**  
   - APIs & Services → Credentials → Create credentials → Service account.  
   - Name it (e.g. “portfolio-view-count”), create, then open it.  
   - Keys → Add key → Create new key → JSON. Download the JSON.

5. **Grant access in GA4**  
   - In GA4: Admin → Property access management.  
   - Add the service account email (from the JSON, e.g. `xxx@xxx.iam.gserviceaccount.com`) as a Viewer.

## 2. Deploy this API (e.g. Render)

1. **Create a new Web Service** on [Render](https://render.com) (or any Node host).

2. **Connect** this repo and set:
   - **Root directory**: `api`  
   - **Build command**: `npm install`  
   - **Start command**: `npm start`

3. **Environment variables** in the Render dashboard:
   - `GA4_PROPERTY_ID` = your numeric GA4 Property ID (e.g. `123456789`).
   - `GOOGLE_APPLICATION_CREDENTIALS_JSON` = the **entire contents** of the service account JSON file as a single string (copy-paste the whole JSON).

4. Deploy. Note the service URL (e.g. `https://your-view-count-api.onrender.com`).

## 3. Point the frontend at the API

In the **main** portfolio app (not the `api` folder):

- Add an environment variable (e.g. in Render or `.env`):
  - `VITE_VIEW_COUNT_API_URL` = `https://your-view-count-api.onrender.com/views`
- Redeploy the frontend.

The home page will request that URL and, if it returns `{ "count": 12345 }`, show “12.3k page views” (or the number as-is when &lt; 1000).

## Endpoints

- `GET /views` – returns `{ "count": number }` (total GA4 screen page views).
- `GET /health` – returns `ok` for health checks.

## Optional: run locally

```bash
cd api
npm install
export GA4_PROPERTY_ID=your_numeric_id
export GOOGLE_APPLICATION_CREDENTIALS_JSON='{"type":"service_account",...}'
npm start
```

Then set `VITE_VIEW_COUNT_API_URL=http://localhost:3001/views` in the frontend `.env` and run the frontend to test.
