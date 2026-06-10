# NextJS - IT-Högskolan

## Uppgift 1: Student Directory (Next.js)

### Mål

Bygg en liten Next.js-applikation där användaren kan:

- Se en lista av studenter
- Klicka in på en specifik student
- Hämta data via Next.js API routes
- Navigera med file-based routing

Ni ska träna på:

- App Router
- File-based routing
- Dynamic routes
- API routes
- Fetch i server components
- Client navigation

### Scenario

Ni bygger ett internt system för en skola. Systemet ska visa information om studenter.

---

### Del 1 — Setup

Skapa ett nytt projekt:

```bash
npx create-next-app@latest
```

Välj:

- TypeScript
- App Router
- ESLint
- Tailwind (optional)

---

### Del 2 — API Route

Skapa en API endpoint: `app/api/students/route.ts`

Returnera fake data när man går till `/api/students`:

```json
[
    { "id": 1, "name": "Alice", "program": "Frontend" },
    { "id": 2, "name": "Bob", "program": "Backend" },
    { "id": 3, "name": "Charlie", "program": "UX" }
]
```

---

### Del 3 — Startsida

Skapa: `app/page.tsx`

---

### Del 4 — Routing

Skapa: `app/students/page.tsx`

Den sidan ska:

- Hämta data från `/api/students`
- Visa alla studenter i en lista
- Varje student ska vara klickbar

---

### Del 5 — Dynamic Route

Skapa: `app/students/[id]/page.tsx`

När man klickar på `/students/2` ska man se: _Bob - Backend_ t.ex.

---

### Del 6 — Navigation

Använd `<Link>` för navigation mellan sidor.

Måste finnas:

- Home → Students
- Students → Student detail
- Student detail → Back

---

### Bonus

- Lägg till en POST route med formulär för att kunna skapa en ny student
- Lägg till en loading animation medan data hämtas med `loading.tsx`

---

## Uppgift 2: Mini Product Dashboard i Next.js App Router

> **OBS.** Du kan använda samma Next-projekt som övning 1.

Målet är att träna på när något ska vara **Server Component** och när det ska vara **Client Component**.

I App Router är pages/layouts Server Components som standard. Client Components behövs för state, event handlers, hooks och browser-APIer.

### Uppgift

Bygg en sida `/products` som visar produkter från ett API.

---

### Krav

#### 1. Server Component — `app/products/page.tsx`

- Hämtar produkter med `fetch`
- Renderar rubrik och produktlista
- Skickar produkterna som props till en Client Component

#### 2. Client Component — `ProductFilter.tsx`

- Har `'use client'`
- Använder `useState`
- Filtrerar produkter via sökfält
- Har en knapp: _"Visa endast billiga produkter"_

#### 3. Server Component — `ProductCard.tsx`

- Visar namn, pris och kategori
- Ska **inte** ha `'use client'`

---

### API

```
https://fakestoreapi.com/products
```

---

### Lägg till

- Loading UI med `loading.tsx`
- En detaljsida `/products/[id]`
- En Client Component med _"Lägg till i favorit"_
- Spara favoriter i `localStorage`

---

### Reflektionsfrågor

När du är klar, svara på:

1. Varför är `page.tsx` en Server Component?
   I huvudsak för att den fetchar data från ett API, men också för att undvika att den datan, som API nycklar, tokens eller annat exponeras för klienten.

2. Varför måste `ProductFilter.tsx` ha `'use client'`?
   Om inte 'use client' finns kommer ramverket tolka det som en serverkomponent. Eventhandlers, usestate, med mera funkar endast i client.

3. Varför bör inte hela sidan göras till Client Component?
   Performance, det reducerar mängden data som skickas till webbläsaren.

4. Vad händer om du använder `useState` i en Server Component?
   Man får en build/compile error och appen körs ej.

---

## Uppgift 3: Bygg en enkel företagswebbplats

### Mål

Träna på:

- Statisk routing
- Nested routes
- `layout.tsx`
- Gemensam navigation

### Uppgift

Bygg en enkel företagswebbplats med följande sidor:

- `/`
- `/about`
- `/services`
- `/contact`

### Krav

Skapa en global layout som innehåller:

- Header
- Navigation
- Footer

Navigationen ska innehålla länkar till:

- Hem
- Om oss
- Tjänster
- Kontakt

Services (`/services`) ska ha en separat layout med en sidebar-navigation för undersidor:

- `/services/dedicated`
- `/services/vps`
- `/services/cloud`

---

## Uppgift 4: Dashboard med nested routing

### Mål

Träna på:

- Dynamisk routing
- Nested layouts
- Route groups
- Dashboard-struktur

### Uppgift

Bygg en dashboard med följande struktur:

- `/dashboard`
- `/dashboard/users`
- `/dashboard/settings`
- `/dashboard/analytics`
- `/dashboard/users/[id]`

### Krav

#### Dashboard layout

Skapa en separat `layout.tsx` för dashboarden med:

- Sidebar
- Dashboard navigation (Users, Settings, Analytics)

Denna layout ska endast användas för dashboard-sidorna.

#### Users page

Visa en lista med användare:

```json
[
  { "id": 1, "name": "Alex" },
  { "id": 2, "name": "Sara" },
  { "id": 3, "name": "John" }
]
```

Varje användare ska länka till `/dashboard/users/[id]`.

#### Lägg till

- `loading.tsx`
- `not-found.tsx`
- `generateStaticParams()`
- Route group för dashboard


## Uppgift 5: Eventplattform med dynamiska routes

### Del 1 — Bygg eventplattform med dynamiska routes

#### Mål

Fokus på:

- App Router
- Server Components
- `[slug]`
- `layout.tsx`
- `not-found.tsx`
- Strukturering av routes

#### Scenario

Bygg en eventplattform där användare kan se olika events.

Sidor som ska finnas:

- `/`
- `/events`
- `/events/frontend-conference`
- `/events/react-summit`
- `/events/nextjs-live`

#### Krav

- Skapa `/events`: visa alla events
- Skapa `/events/[slug]`: visa ett event baserat på url
- Använd `notFound()`: `events/not-found.tsx` om ett event inte existerar
- Använd `events/layout.tsx`: layouten ska innehålla gemensam navigation/sidebar (t.ex. lista på events, kategorier, filterpanel)

#### Server vs Client Components

- Eventdetaljer ska vara Server Components
- Någon interaktiv del ska vara Client Component (t.ex. favoritknapp, expandera sidebar, filtrering)

#### Reflektionsfrågor

1. Varför passar `[slug]` bra här?
2. Varför bör eventinformationen renderas på servern?
3. När behövs `"use client"`?
4. Vad är fördelen med `layout.tsx`?

---

### Del 2 — Nested event routes och avancerad routing

#### Mål

Fokus på:

- `[...slug]`
- `[[...slug]]`
- `error.tsx`
- Nested routing
- Breadcrumbs
- Bättre route-struktur

#### Scenario

Eventplattformen växer. Events ska nu kunna organiseras efter kategori och stad.

Exempel på routes:

- `/events/conferences/frontend-conf`
- `/events/workshops/nextjs-auth`
- `/events/sweden/stockholm/react-night`
- `/events/sweden/gothenburg/typescript-day`

#### Krav

1. **Nested routes** — sidan ska stödja flera nivåer av URL:er
2. **Breadcrumbs från url:en** — visa `Hem → Sida 1 → Sida 2` längst upp. Tips: använd segmenteringen från `params`
3. **Anpassat `error.tsx`** — visas om ett fel kastas i route-segmentet

#### Reflektionsfrågor

1. Varför valde du `[...slug]` eller `[[...slug]]`?
2. Vilka komponenter är server/client?
3. Varför ligger layouterna där de ligger?
4. Hur fungerar routing:en?
