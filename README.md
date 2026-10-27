# Ace Fishing Guide

A mobile-first Next.js companion for UK sea anglers. This repository currently contains a runnable MVP for coastal mark discovery, general bait and rig guidance, species field notes, manual fish matching, tide-provider status, guest favourites and a browser-local fishing log.

## Run locally

From the workspace folder:

```powershell
cd .\tide-and-tackle
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful checks:

```powershell
npm run lint
npm test
npm run build
```

## What works now

- Responsive desktop sidebar, mobile menu and bottom navigation.
- Searchable fishing marks with map/list views and region/ground filters.
- Leaflet map using OpenStreetMap tiles, attribution and approximate place-centre markers.
- Mark detail pages with access, depth, provenance and verification caveats.
- Search/filter views and detail pages for UK shore species, bait and rigs, including attributed species reference images, bait photos and hook-mounting guides.
- Interactive rig component checklist and print action.
- Sequential build illustrations for beginner running-ledger, float and two-hook flapper rigs.
- Budget gear guide with original category illustrations and Amazon UK / Angling Direct search links; listings and prices are not live-verified.
- Manual fish guide that filters visible features; it does not identify uploaded photographs.
- Guest favourites and a private fishing log stored in browser storage. Shore/sea and boat trips can include a validated catch photo stored in IndexedDB; JSON export includes metadata and a photo-presence flag, not image bytes.
- Written learning guides, seven Isle of Wight tackle-shop directory entries, and external OpenStreetMap search for other locations.
- Seven-day high/low tide table backed by WorldTides when a server API key is configured. Without a key, the page explains setup and shows no tide values.
- Original low- and high-tide shoreline diagrams on the tide page offer general Isle of Wight beach-reading context and link to Sandown tide predictions. They are illustrations, not location photos or verified fishing marks.
- Supabase migration/seed starter files for content and user-owned records.

## Data quality and safety

Seeded named coastal places use approximate coordinates for map orientation, not verified fishing pegs. Every spot is marked as needing verification; fishing access, restrictions, ground, target species and local suitability must be confirmed before use. The source links open OpenStreetMap search results for the place name. Verify each coordinate and local conditions before changing a record to verified.

The map uses OpenStreetMap raster tiles and displays attribution. Follow the tile provider's usage policy before production or high-volume deployment. Tide predictions are provider data, not observed water levels or safety advice. Follow official forecasts and local advice, check tide cut-offs and escape routes, and do not fish a location if conditions are unsafe. Identification guidance is not a legal decision; verify species, measurement and current local rules before retaining fish.

Isle of Wight tackle-shop names and addresses are copied from Fish-UK's county directory. That source says its listings are unverified; the app repeats this warning and does not claim that a business is currently open or that its hours, stock, phone details or service are current. Confirm with the business before travelling.

## Environment and integrations

Copy `.env.example` to `.env.local` as needed. Guest browsing runs without credentials. Tide predictions require a server-side WorldTides API key.

- `WORLDTIDES_API_KEY`: register for an API key. WorldTides currently grants 100 starter credits; its published pricing currently charges one credit for seven-day high/low events. Further requests may require paid credits. Review the provider's current pricing, terms and coverage before deployment.
- `ADMIRALTY_TIDAL_API_KEY`: placeholder for a possible future UKHO integration; not currently used.
- `METOFFICE_API_KEY`: not currently consumed; live marine weather and official warnings still need an approved provider integration.
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`: not currently used by the UI. Configure a Supabase project before enabling authentication or persistence.
- `SUPABASE_SERVICE_ROLE_KEY`: server-only secret; never expose it to client code. No service-role calls are currently implemented.
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID` and `NEXT_PUBLIC_ADSENSE_SLOT_ID`: optional Google AdSense publisher and responsive ad-unit IDs. The shared layout shows one labeled ad placement only when both values are configured. Create the ad unit in your approved AdSense account, add the values to `.env.local`, and restart the app. Ad serving and earnings require Google's site review/approval and a deployed, eligible site; a local development URL will not generate revenue. Publish the privacy/cookie disclosures required for your audience and AdSense settings before enabling ads.

Do not commit `.env.local` or real credentials. WorldTides requests are made server-side; its API key is never sent to the browser. The API accepts only seeded spot slugs and has a basic six-requests-per-minute in-process limit. That limit is not shared between serverless instances; add a distributed rate limiter before production. Returned data includes provider attribution and datum, is not cached, and must not be used as the sole source for navigation or safety-critical decisions. Map tiles use the OpenStreetMap public tile endpoint without an application key; production deployments must observe its usage policy or switch to a licensed provider.

## Supabase starter schema

The initial SQL files are in `supabase/migrations` and `supabase/seed.sql`. They define provenance/verification fields, core content tables, coordinate constraints, and row-level security for favourites, sessions and private marks. Review the SQL and provider/licensing requirements before applying it to a production project. The frontend does not currently connect to Supabase; the schema alone does not enable authentication or server authorization.

With the Supabase CLI installed and a project linked, apply the migration and seed in your development project using the normal Supabase workflow. Never run the seed against production without reviewing the records and their verification status.

## Routes

`/` home · `/map` map · `/spots` listing · `/spots/[slug]` detail · `/tides` tide table · `/bait` and `/bait/[slug]` · `/rigs` and `/rigs/[slug]` · `/species` and `/species/[slug]` · `/identify` · `/learn` · `/gear` · `/rig-shop` · `/tackle-shops` · `/logbook` · `/saved` · `/profile` · `/admin`.

Account authentication, private server-side storage, admin actions, photo uploads/AI recognition, live weather, verified tackle products/shops and full regulatory datasets remain future work. Tide predictions work when a WorldTides key and credits are configured. Other unavailable integrations disclose their status rather than showing fabricated listings or live-looking values.
