# Operator Charter — {{CHARTER_NAME}}

Status: active. Issued {{DATE}} by the operator ({{OPERATOR}}).
Scope string for records created under it: `{{charter-slug}}/v1`.

This charter governs all work toward {{DELIVERABLE}}. It grants bounded
autonomy: within the grants and constraints below, no per-step operator
sign-off is required. Violating a hard invariant or hitting an escalation
trigger suspends the charter until the operator responds.

When superseded, mark this header SUPERSEDED with a pointer to the successor
and retain the file — charter history is part of governance history.

## Mission

One paragraph: the ONLY deliverable that counts. Everything else — tooling,
hardening, tests, documentation — is instrumental and justified only insofar
as it unblocks this. (Write this sentence into the charter verbatim; it is
the primary defense against ceremony displacing the deliverable.)

## Definition of Done (falsifiable)

Numbered, checkable conditions. Each one must be verifiable by a command,
an artifact's existence, or a published record — not by narrative. When all
hold, the mission ends and this charter terminates. Include "then STOP and
report" explicitly: follow-on work is a new mission under a new grant.

## Autonomy Grants (no operator sign-off needed)

1. Spend: up to {{TOTAL_BUDGET}} total in {{SPEND_UNIT}}, at most
   {{PER_EXPERIMENT_CAP}} in any one experiment. Existing accounting
   machinery remains mandatory; records cite this charter's scope string.
2. Design discretion: full discretion over {{DISCRETION_SCOPE}} WITHIN the
   direction constraints below.
3. Successor experiments: propose, implement, and dispatch without
   per-experiment review, with at most one in flight at a time.
4. (Stage-gated grants: "after X exists, and only then: Y".)

## Hard Invariants (violating any of these voids the charter — stop and ask)

1. Never fabricate, repair, backfill, or reclassify measurement/evidence
   data. Honest measurement stays absolute.
2. Accounting, budget caps, and terminal-stop semantics stay as implemented.
3. {{FROZEN_SURFACES}} are frozen — no changes to their semantics under this
   charter.
4. No new {{HEAVY_MACHINERY_CLASS}} unless a demonstrated, recorded blocker
   requires one — and then the minimal fix only.

## Direction Constraints (encode diagnosed failure vectors — not negotiable)

Where the operator already knows how this class of work fails, the charter
says so as behavioral constraints, not vibes. Write them so a violation is
recognizable in the moment. Examples of the form:

1. "Validation of stochastic output is a sanity band, never byte-exact
   equality."
2. "Per-unit failure is data, not death: terminal only above N% exclusions."
3. "Plan changes between successive experiments are diffs, not re-freezes;
   new tests proportionate to behavior actually changed."

## Escalation Triggers (stop, report, and wait for the operator)

1. Budget: total observed+pending would exceed the cap, or one experiment
   would exceed its cap.
2. {{N_CONSECUTIVE}} consecutive terminal failures without producing the
   deliverable's prerequisite. Optionally pre-authorize a FALLBACK here so
   the stop has a productive next move instead of a third identical attempt.
3. Any need to weaken a hard invariant or change frozen semantics.
4. Any anomaly suggesting real external damage (billing, data loss,
   reputation).

## Cadence

After every experiment reaches terminal closure (success or failure): one
compact report — outcome, root cause in two sentences, spend totals, next
action — appended to the experiment record and surfaced to the operator. No
permission requests inside the granted scope; no silent multi-day building
either. If {{SILENCE_WINDOW}} passes without a dispatched unit of real work,
that itself is a report-worthy anomaly.

## Context to Internalize

A short paragraph of the operator's current diagnosis: what is proven and
trusted (and therefore does not need more strengthening to earn use), and
where the actual remaining risk lives. This section prevents the agent from
re-solving solved problems as a form of procrastination.
