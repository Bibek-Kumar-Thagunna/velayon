import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "company-preview/**",
    "subdomain-example/**",
    "src/app/notes/**",
    "src/app/work/**",
    "src/app/resume/**",
    "src/components/sections/**",
    "src/components/ui/ClientOnly.tsx",
    "src/components/ui/CreatorGrid.tsx",
    "src/components/ui/MagneticButton.tsx",
    "src/components/ui/PersonalContactForm.tsx",
    "src/components/ui/PhoneMockup.tsx",
    "src/components/ui/SpotlightCard.tsx",
    "src/components/ui/TechConstellation.tsx",
    "src/components/ui/TiltCard.tsx",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
