# GOAL: {{MISSION_NAME}}

You are a FRESH session. Read this file, then `experiments/HANDOFF.md`, then
`governance/CHARTER.md`, before writing any code. Verify claimed state before
relying on it.

One short paragraph: where the program is (what predecessors completed, with
the one or two numbers/artifacts that matter) and what this mission builds.

## Deliverable 1 — {{NAME}} ({{cost class: offline / paid / staged}})

Concrete, checkable statement of the deliverable. Cite the proposal(s) that
govern its design by number — and if the design does not exist yet, make
"design it as a proposal, accepted before implementation" an explicit part
of this deliverable. Include any binding details that came after the cited
designs were written, marked (binding).

## Deliverable 2 — ...

Deliverables are in strict order unless stated otherwise. Each states its
own acceptance evidence.

## Definition of Done

1. Numbered, falsifiable, command-or-artifact-backed conditions.
2. The standard verification set green (see Verification).
3. Then STOP and report. Name explicitly what is NOT authorized under this
   goal (follow-on features, extra campaigns, refactors) so momentum has a
   wall to hit.

## Expectation setting (when applicable)

If a deliverable can honestly "lose" (a baseline, a screen, a bet), say so:
"a losing result is a fully successful deliverable — do not iterate on
{{THING}} under this goal."

## Binding rules (unchanged ceilings)

Restate — do not merely reference — the charter rules most at risk in this
mission: validity semantics, failure settlement, frozen surfaces, honest
measurement. Redundancy here is intentional; the mission file is what a
session actually keeps in working memory.

## Budget and escalation

1. {{TOTAL}} for this goal; {{SUBCAP}} max for {{RISKIEST_PART}}.
2. Report at every deliverable completion and campaign closure.
3. STOP and ask when: budget breach risk, {{N}} consecutive terminal
   failures, any semantics change beyond what this file names, or any
   external-damage anomaly.

## Verification

- {{TEST_COMMAND}}
- {{STATIC_CHECK_COMMAND}}
- {{CONFORMANCE_COMMAND}}
- {{REGENERATION_CHECKS}} (published artifacts regenerate byte-exact)
