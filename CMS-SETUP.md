# CMS Setup (Admin/Editor Workflow)

This project is CMS-ready via `src/content/contentService.js`.
If CMS env vars are missing, the site falls back to local data in `src/content/siteContent.js`.

## 1) Environment Variables
Copy `.env.example` to `.env` and set:

- `VITE_CMS_BASE_URL` (example: `https://your-cms-domain/api`)
- `VITE_CMS_TOKEN` (optional bearer token)

## 2) Expected Endpoints
The frontend currently expects these REST endpoints:

- `GET /home`
  - `latestNews[]` with: `id,title,excerpt,image,date,badge,link`
  - `impactCards[]` with: `id,title,description,image,link`

- `GET /blog`
  - `categories[]` (string list)
  - `posts[]` with: `id,title,excerpt,image,date,category,author`

- `GET /gallery`
  - `categories` object with arrays:
	- `community[]`
	- `education[]`
	- `healthcare[]`
  - each image item: `id,url,title,description,category`

## 3) Recommended Roles
- **Admin**: manage schemas/users/publishing
- **Editor**: create/update/publish content
- **Author**: create drafts only

## 4) Suggested CMS Platforms
- **Strapi** (self-hosted, strong role controls)
- **Sanity** (cloud-hosted, easy editorial UX)
- **Contentful** (cloud-hosted enterprise/editorial workflow)

## 5) Local Development
If no CMS is configured, edit:

- `src/content/siteContent.js`

This is the fastest way to update content while building.

## 6) Notes
- Dates are normalized and displayed by frontend locale formatting.
- Keep image URLs optimized (width/query params) for performance.
- After content/schema changes, run `npm run dev` and verify page rendering.
