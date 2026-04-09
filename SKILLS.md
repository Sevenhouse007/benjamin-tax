# Benjamin Tax Service — Project Skills & Dependencies

## Summary
- Total runtime packages added beyond Next.js scaffold: **14**
- Dev dependencies added: **1** (sharp)
- Last updated: 2026-04-08

---

## Core Framework (scaffolded by create-next-app)
| Package | Why |
|---|---|
| next | App Router, RSC, image optimization, built-in Metadata API |
| react / react-dom | UI runtime |
| typescript | Type safety |
| tailwindcss (v4) | Utility-first styling — using `@theme` in globals.css |
| eslint / eslint-config-next | Lint baseline |

## Animation
| Package | Chosen Because | Used For |
|---|---|---|
| **framer-motion** | De-facto React animation lib, declarative variants, `whileInView`, respects `prefers-reduced-motion` | Hero entrance, TechSection step reveals |

Rejected: gsap (license + bundle), react-spring (overkill for this site), auto-animate (too limited).

## UI Primitives
| Package | Chosen Because | Used For |
|---|---|---|
| **@headlessui/react** | Tailwind team, fully accessible, tiny, perfect for Disclosure-style mobile menu | Mobile nav, future modals/accordions |

Rejected: shadcn/ui (heavier setup), react-aria (more than needed here), full @radix-ui (overkill).

## Icons
| Package | Chosen Because | Used For |
|---|---|---|
| **lucide-react** | Most popular Tailwind icon set, tree-shakeable, consistent stroke | Services icons, Upload, Phone, Menu, X |

Note: brand icons (Facebook/Instagram) are inline SVG in `Footer.tsx` because the installed lucide-react version dropped brand glyphs.

## Forms & Validation
| Package | Chosen Because | Used For |
|---|---|---|
| **react-hook-form** | 10M+ weekly downloads, minimal re-renders, tiny | Contact form, newsletter, upload |
| **zod** | Schema-first TS validation, single source of truth | Form schemas |
| **@hookform/resolvers** | Glue between RHF and zod | `zodResolver` |

## Scheduling
| Package | Chosen Because | Used For |
|---|---|---|
| **react-calendly** | Tiny wrapper, supports popup + inline embeds, zero backend | "Book Free Appointment" button |

## File Upload
| Package | Chosen Because | Used For |
|---|---|---|
| **react-dropzone** | 11M weekly downloads, smallest viable drag-drop, file-type + size filters | Document upload card on hero / portal |

## Notifications
| Package | Chosen Because | Used For |
|---|---|---|
| **react-hot-toast** | Smallest toast lib, beautiful defaults, mounted in `layout.tsx` | Form submit / upload success/error |

## SEO
| Choice | Reasoning |
|---|---|
| **Next.js built-in Metadata API** | Sufficient — already wired in `app/layout.tsx`. Inline JSON-LD `TaxPreparationService` schema covers local SEO. |

Rejected: next-seo (redundant on App Router), schema-dts (only adds types).

## Analytics
| Package | Chosen Because | Used For |
|---|---|---|
| **@vercel/analytics** | Zero-config on Vercel, privacy-friendly, no cookie banner needed | Page views, click tracking |
| **@vercel/speed-insights** | Core Web Vitals tracking, ships with Vercel | LCP/CLS/INP monitoring |

Both mounted in `layout.tsx`.

## Image Optimization
| Package | Chosen Because |
|---|---|
| **sharp** (dev) | Required by `next/image` for optimal local image processing |

## Utilities
| Package | Chosen Because |
|---|---|
| **clsx** | 50M weekly downloads, tiny conditional className helper |
| **tailwind-merge** | Resolves conflicting Tailwind classes correctly |
| **class-variance-authority** | Component variant API for buttons/cards if needed |

`cn()` helper exported from `src/lib/utils.ts`.

## Date / Number Formatting
| Choice | Reasoning |
|---|---|
| **Built-in `Intl` API** | Currency + dates handled natively. No library needed. |

## Phone Validation
| Choice | Reasoning |
|---|---|
| **Zod regex** | US phone validation in form schemas — no need for libphonenumber-js. |

---

## Installation Command (full reproduction)
```bash
npx create-next-app@latest benjamin-tax --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd benjamin-tax
npm install framer-motion lucide-react @headlessui/react \
  react-hook-form zod @hookform/resolvers \
  react-calendly react-dropzone react-hot-toast \
  @vercel/analytics @vercel/speed-insights \
  clsx tailwind-merge class-variance-authority
npm install -D sharp
```

## Rejected Packages
| Package | Category | Reason |
|---|---|---|
| gsap | Animation | License + bundle for what framer-motion already covers |
| react-spring | Animation | Physics not needed here |
| shadcn/ui | UI | Heavier copy-paste workflow, Headless UI sufficient |
| react-icons | Icons | Heavy, lucide-react covers all needs |
| formik | Forms | RHF is faster + smaller |
| filepond / uppy | Upload | Overkill, react-dropzone is leaner |
| react-toastify | Toast | Heavier than react-hot-toast |
| next-seo | SEO | Redundant with Next 14 Metadata API |
| date-fns / dayjs | Dates | Intl API covers current needs |
| libphonenumber-js | Validation | Zod regex sufficient |

---

## Verification
```bash
npm run build   # → ✓ Compiled successfully
```
