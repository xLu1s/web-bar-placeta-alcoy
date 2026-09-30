// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// In CI, GitHub Actions exposes GITHUB_REPOSITORY ("owner/name").
// Derive `site` and `base` so a project Pages site works under its subpath,
// while local dev keeps base "/".
const repo = process.env.GITHUB_REPOSITORY;
const [owner, name] = repo ? repo.split('/') : [];

const isUserSite =
  owner && name && name.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const site = owner ? `https://${owner}.github.io` : 'http://localhost:4321';
const base = repo && !isUserSite ? `/${name}` : '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
