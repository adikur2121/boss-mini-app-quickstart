const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = export const miniappConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjI5OTM2NiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDdiMEUxODM3NGI2YjhkOGEzNmFiQ0FmNEQzYjdENEEyN0UxNDdkNjgifQ",
    payload: "eyJkb21haW4iOiJib3NzLW1pbmktYXBwLXF1aWNrc3RhcnQudmVyY2VsLmFwcCJ9",
    signature: "MHhlZGJjNjhjNWE1ZWYzMjkyMjA1YTEwMjMwOWJiYjM1YWFhZThhMDBiZDdhM2MyMjAyZDQ2NGIzMjc0ZjRhNDNjMDhlNTFkMTRhMjJjZmNmZTgyYjEyNzZlNTkzNGNjZWYzN2UxOTAyNDEwOGE5Yjg4YWI4ZjA4NzNiZWU1MWQ4ZTFj"
  },
  miniapp: {
    version: 1,
    title: "Boss Mini App",
    subtitle: "Quickstart example",
    heroImageUrl: ${process.env.NEXT_PUBLIC_URL}/blue-hero.png,
    // dll...
  }
}
  miniapp: {
    version: "1",
    name: "Cubey", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

