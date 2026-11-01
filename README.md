# Profile Atlas — CAT profile mapping, action plans & mentor scheduling

One Cloudflare Worker + one Durable Object (built-in database). No other services needed.

## Deploy (GitHub → Cloudflare, same as your other apps)
1. Create a new GitHub repo (e.g. `profile-atlas`) and upload **index.js** and **wrangler.toml** to the repo ROOT (not in a folder).
2. Cloudflare dashboard → Workers & Pages → Create → **Import a repository** → pick the repo.
   - Project name must be **profile-atlas** (matches `name` in wrangler.toml — or change both).
   - Build command: leave empty. Deploy command: `npx wrangler deploy`.
3. After the first deploy: Worker → Settings → Variables and Secrets → add a **Secret** `ADMIN_PASSWORD`. (Until you do, the admin password is `atlas-admin`.)

## First run
1. Open the site → **Programme admin** → log in.
2. Settings: set programme name, **cohort code**, CAT date.
3. Mentors tab: add each mentor (name, email, PIN). Share email + PIN with them.
4. Mentors log in → Sessions & slots → publish weekly slots (with Meet/Zoom link).
5. Share the site link + cohort code with students. They self-register and are auto-assigned to the least-loaded mentor (admin can reassign).

## What's inside
- **Student:** 12-step tap-card mapping (10 territories: Quant, Verbal, DILR, Mock craft, Academics, Work, Leadership, Extra-curricular, Awareness, Narrative) → live hex **Atlas**, readiness/gate/profile indices, route-to-target percentile strip, strengths / gaps / fog, ranked **quests** with 5-step guides, PI questions, progress log with proof links, kanban; mock tracker; weekly check-in; resource hub (48 curated links, editable); mentor tab with triggers, slot booking, Google Calendar / .ics; XP ranks.
- **Mentor:** auto alert queue (mock drop ≥8, near-exam gap, stalled 10+ days, blocked quest, two low-mood check-ins, narrative gap, critical pillars, help requests, first review due), roster heatmap, deep-dive per student, assign quests, shared/private notes, slots & outcomes.
- **Admin:** cohort heatmap, students (bulk assign, reset PIN, delete), mentors, resource library editor, settings, CSV export.
