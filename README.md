# SPAWN.md

A zero-dependency starting point for agentically developed software.

SPAWN.md is a workflow template for projects where autonomous agents write
most of the code and a human operator steers through bounded grants rather
than step-by-step supervision. It consists entirely of Markdown files and a
single JSON seed — no runtime, no framework, no tooling to install. An agent
instantiates it against a project description; the result is the governance
and record-keeping structure the project carries for its lifetime.

The template was extracted from a multi-month, benchmark-driven agentic
project and generalized. Its rules are not aspirational: each one traces to
a failure mode that occurred in practice, several of them repeatedly and at
real cost.

## Why

Agentically built projects tend to fail on four questions that nobody wrote
down the answers to:

1. What was decided, and does the code actually conform to it?
2. What was tried, what did it cost, and why did it win or lose?
3. What may the agent do without asking, and when must it stop?
4. How does a fresh session pick up the work without inheriting myths?

SPAWN.md gives each question a track with explicit rules, templates, and
verification hooks.

## Features

### Architecture track (`arch/`)

Design decisions are recorded as numbered improvement proposals with an
EIP-style lifecycle (Draft, Review, Accepted, Final, Superseded, Withdrawn)
and relationship headers (Supersedes, Requires, Extended-By). Final
proposals are immutable; changes happen by supersession or by dated,
explicitly bounded amendments. Decision history is append-only by
construction.

Implementation state is kept out of the proposals entirely. A separate
machine-readable conformance map (`arch/conformance.json`) records, per
proposal, whether the code conforms, which modules and tests satisfy it, and
what gaps remain. Conformant entries require tests; partial entries require
listed gaps; the map is updated in the same commit as the code it describes.

### Experiment track (`experiments/`)

Every contact with reality — paid runs, benchmarks, canaries, user tests —
gets a numbered record that is declared before any spend: hypothesis with an
explicit production mechanism, frozen scope, alternatives, risks,
falsifiable acceptance criteria, and budget. Every record ends with a
mandatory terminal closure: outcome, root cause, actual cost, next action.

The discipline encodes hard-won defaults: complete zero-cost rehearsal
before real dispatch (including the final publication and settlement steps),
single-unit failures settle their unit rather than killing the campaign,
terminally closed experiments are never resumed, and negative results are
retained with the same care as wins.

### Governance track (`governance/`)

Operator control is expressed as a charter: a falsifiable definition of
done, autonomy grants (spend caps, decision scope), hard invariants whose
violation voids the charter, direction constraints that encode already
diagnosed failure vectors, escalation triggers, and a reporting cadence in
which prolonged silence is itself an anomaly. Inside the grants the agent
does not ask permission; outside them it stops.

The track includes `SELF-CORRECTION.md`, a distilled failure playbook copied
verbatim into every instantiated project. Its rules cover the recurring
traps of agent-driven development: re-fixing a wrong assumption under new
masks, building process ceremony instead of the deliverable, gating
stochastic output on exact content, attributing wins to undeclared
mechanisms, and conflating agent claims with verifiable evidence.

### Session lifecycle

Missions are handed to fresh agent sessions through two documents with
distinct authority: `GOAL.md` is normative (ordered deliverables, binding
rules, budget, an explicit stop boundary) and `experiments/HANDOFF.md` is
descriptive (verified current state, working conventions, known quirks, and
a growing list of paid-for lessons). Sessions verify claimed state before
relying on it and rewrite the handoff for their successor when a mission
completes.

### Adaptation instead of variants

There are no per-project-type editions. `ADAPTATION.md` defines seven
bindings an instantiating agent derives from the project's own description:
proposal naming, the threshold for what needs a proposal, the spend unit,
the verification command set, charter thresholds, generator-owned artifacts,
and reserved holdout surfaces. It also defines how the structure scales down
for small projects — by collapsing documents, never by dropping the four
questions — and lists the instantiation anti-patterns an operator should
reject.

## Getting started

Point an agent at this repository and a project description, and instruct it
to instantiate the workflow:

1. It reads `WORKFLOW.md` (the durable rules) and `ADAPTATION.md` (the
   derivation guide).
2. It derives the project-specific bindings and records them in the
   instantiated `OVERVIEW.md`.
3. It copies the tree, renames `*.template.md` files to their real names,
   fills every placeholder, and seeds the conformance map.
4. It commits the instantiated workflow before any product code.

`WORKFLOW.md` and `governance/SELF-CORRECTION.md` are copied verbatim; the
`*.template.md` files carry `{{PLACEHOLDER}}` markers for the bindings.

## Repository layout

    WORKFLOW.md                     the workflow rules — copied verbatim
    ADAPTATION.md                   binding derivation guide — copied
    OVERVIEW.template.md            durable project vision
    GOAL.template.md                per-mission charter for a fresh session
    arch/README.md                  decision-track rules
    arch/proposals/0000-template.md proposal template
    arch/conformance.json           seed conformance map
    experiments/README.md           experiment-record discipline
    experiments/0000-template.md    experiment record template
    experiments/HANDOFF.template.md session handoff briefing
    governance/CHARTER.template.md  operator charter
    governance/SELF-CORRECTION.md   failure playbook — copied verbatim
    docs/RUNBOOK.template.md        verification and operations

## Scope

SPAWN.md governs how agentic work is decided, tried, bounded, and handed
over. It does not prescribe languages, frameworks, test runners, or agent
harnesses; those are bindings the instantiating agent derives per project.
