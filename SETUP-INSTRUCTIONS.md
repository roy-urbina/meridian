# Meridian — Setup Instructions

You have 4 files. Here is exactly what to do with each one.

---

## Files You Have

| File | What it is |
|------|-----------|
| `index.html` | The Meridian app itself |
| `manifest.json` | Tells phones "this is an app" |
| `sw.js` | Makes it work offline |
| `icon-192.png` | App icon (small) |
| `icon-512.png` | App icon (large) |

---

## Step 1 — Create a GitHub Account

Go to **github.com** and sign up for a free account. Confirm your email.

---

## Step 2 — Put Your Files on GitHub Pages

1. Log in to GitHub
2. Click the **+** button (top right) → **New repository**
3. Name it exactly: `meridian`
4. Set it to **Public** (required for free GitHub Pages)
5. Click **Create repository**
6. Click **uploading an existing file** (link in the middle of the page)
7. Drag and drop ALL 5 files (`index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`) onto the upload area
8. Click **Commit changes**
9. Now go to: **Settings** tab → **Pages** (left sidebar)
10. Under "Source" select **Deploy from a branch**
11. Select branch: **main**, folder: **/ (root)**
12. Click **Save**
13. Wait about 60 seconds, then your app is live at:
    **https://YOUR-GITHUB-USERNAME.github.io/meridian/**

---

## Step 3 — Install on Your Phone

**iPhone (Safari):**
1. Open Safari and go to your URL above
2. Tap the **Share** button (box with arrow pointing up)
3. Tap **Add to Home Screen**
4. Tap **Add**
5. Meridian appears on your home screen like a real app

**Android (Chrome):**
1. Open Chrome and go to your URL
2. Tap the **three dots** menu (top right)
3. Tap **Add to Home Screen** or **Install App**
4. Tap **Install**

---

## Step 4 — Set Up Data Sync

This lets your phone and computer share the same data.

### Get a GitHub Token:
1. On GitHub, click your **profile picture** → **Settings**
2. Scroll to the bottom → click **Developer settings**
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Name: `Meridian Sync`
6. Expiration: No expiration
7. Check **gist** (just that one checkbox)
8. Click **Generate token**
9. **Copy the token immediately** — it starts with `ghp_` — GitHub only shows it once

### First device (push):
1. Open Meridian
2. Click **☁️ Sync Data** in the sidebar
3. Paste your token
4. Leave Gist ID blank
5. Click **⬆ Push to Cloud**
6. A Gist ID will appear — **write it down or copy it**

### Every other device (pull):
1. Open Meridian on the new device
2. Click **☁️ Sync Data**
3. Paste your token AND the Gist ID from above
4. Click **⬇ Pull from Cloud**
5. Your data loads — you are synced

### Ongoing use:
- After making changes on any device, click **⬆ Push to Cloud**
- On another device, click **⬇ Pull from Cloud** to get the latest data
- The sync button in the sidebar shows your sync status at a glance

---

## Updating the App

When I give you a new version of `index.html`:
1. Go to your GitHub repository
2. Click on `index.html`
3. Click the **pencil edit** icon or drag a new file over it
4. Commit the changes
5. Wait ~60 seconds and your live app updates automatically on all devices

---

## Troubleshooting

**"Page not found" on your URL:** Wait a few minutes after setting up Pages — it can take up to 5 minutes the first time.

**Sync says "GitHub error: Bad credentials":** Your token expired or was copied incorrectly. Generate a new one.

**App does not look right on phone:** Make sure you opened it in Safari (iPhone) or Chrome (Android) before adding to home screen.

**Data on phone is different from computer:** One device needs to Pull from Cloud. Always Push first from the device with the most recent data.
