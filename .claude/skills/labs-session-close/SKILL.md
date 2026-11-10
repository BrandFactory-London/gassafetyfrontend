---
name: labs-session-close
description: Run at the end of every BrandFactory Labs build session, whether the work finished, stopped or was abandoned. Follows SOP L5 Session Close from Notion.
---

# Labs Session Close (SOP L5)

1. Open the Current SOP page "L5. Session Close" in Notion with the Notion connector:
   https://app.notion.com/p/40e3cf592e43813f8f41c7f8accb9496
2. Complete Part A exactly as written there. Complete Part B too if the PR has been merged and production smoke reported.
3. End with the close-out report: a table of every Notion write (database, Ref, what changed) and anything left undone, with the reason.

## If the Notion connector is unavailable

Write the full close-out as text so Claude chat can enter it in Notion:

1. One block per Build Log row, field by field: Name, Type, Date, Project, Ticket, Branch, Commit, PR Link, Test Summary (runner lines verbatim), Verification Method, Outcome, Migrations, Visibility.
2. Ticket updates: Status and Client Status.
3. Known Issues to add or resolve.
4. Docs affected and what needs changing.
5. Proposed decisions and any process friction.
