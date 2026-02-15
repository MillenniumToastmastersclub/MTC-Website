# Millennium Toastmasters Club Website

A modern, professional web application for Millennium Toastmasters Club, Abu Dhabi. Built with React, Tailwind CSS, and Google Gemini AI.

## 🚀 How to Update the Live Website

This site is optimized for **Netlify**. To keep the live site updated, follow these steps:

### 1. The Recommended Way: GitHub Integration
The most efficient way to update the site is to link it to a GitHub repository:
1. **Push your code** to a new GitHub repository.
2. **Connect to Netlify**: Go to [Netlify](https://app.netlify.com), click "Add new site" > "Import an existing project" > "GitHub".
3. **Automatic Updates**: From now on, whenever you push a change to GitHub, Netlify will detect it and update your live website within seconds.

### 2. The Manual Way: Netlify Drop
If you don't want to use Git:
1. Go to your Site Overview in Netlify.
2. Go to the **Deploys** tab.
3. Drag and drop the entire project folder into the "Drag and drop" upload area.

---

## 🛠 Common Maintenance Tasks

Most of the content you will want to update is located in `constants.ts`.

### Updating the Next Meeting (Agenda)
Open `constants.ts` and update these variables:
- `MEETING_609_THEME`: Change the theme for the upcoming session.
- `MEETING_609_DATE`: Update the date and time.
- `MEETING_609_LOCATION`: Update the venue if it changes from the permanent location.
- `MEETING_609_WORD`: Set the word of the day (or leave blank to use the AI Word Master).

### Updating the Executive Committee (ExCo)
To change the leadership team:
1. Go to `constants.ts`.
2. Update the `EXCO_MEMBERS` array. 
3. You can change names, roles, bios, and photo IDs.

### Adding Gallery Photos
1. Upload your image to Google Drive.
2. Ensure the "Share" setting is "Anyone with the link".
3. Copy the File ID from the link.
4. Add the ID to the `GALLERY_IMAGES` array in `constants.ts`.

---

## 🔑 Environment Variables
The "Word Master" corner uses Google Gemini AI. To make this work on Netlify:
1. Go to **Site Settings** > **Environment variables** in the Netlify dashboard.
2. Add a variable named `API_KEY`.
3. Paste your Google AI Studio API Key.

---

## 💻 Local Development
To see changes on your computer before pushing live:
1. Open your terminal in this folder.
2. Run `npm start`.
3. Open `http://localhost:3000` in your browser.
