# Agentic Workflow Template

A project-agnostic workflow for software built primarily by autonomous agents
under an operator's bounded supervision. Extracted and generalized from a real
multi-month agentic project whose history includes both the wins and the
paid-for failures that shaped these rules.

This is not a process framework to admire. It exists to answer four questions
that every agentically-built project eventually fails on if left implicit:

1. What was decided, and is the code actually conforming to it?
   (`arch/` — append-only proposals + a separate, checkable conformance map)
2. What was tried, what did it cost, and why did it win or lose?
   (`experiments/` — pre-declared records with mandatory terminal closure)
3. What may the agent do without asking, and when must it stop?
   (`governance/` — charter with falsifiable done-criteria and hard invariants)
4. How does a fresh session pick up the work without inheriting myths?
   (`GOAL.md` + `experiments/HANDOFF.md` — normative mission, descriptive briefing)

## How to instantiate

An agent instantiating this template for a concrete project should:

1. Read `WORKFLOW.md` (the durable rules, copied into the project as-is).
2. Read `ADAPTATION.md` and the project's own description/brief.
3. Derive the project-specific bindings (proposal prefix, verification gates,
   spend units, escalation thresholds) as `ADAPTATION.md` directs. Do NOT look
   for a per-project-type variant here — there is none on purpose. The
   generalized guidance plus the project description is the input; the
   concrete instantiation is the agent's job.
4. Copy the tree, rename `*.template.md` files to their real names, fill
   `{{PLACEHOLDERS}}`, delete what the adaptation rules say to collapse.
5. Commit the instantiated workflow as its own commit, before any product code.

## Repository layout

    README.md                       this file (template meta; not copied)
    WORKFLOW.md                     the workflow itself — copied verbatim
    ADAPTATION.md                   how to derive project-specifics — copied
    OVERVIEW.template.md            durable project vision
    GOAL.template.md                per-mission charter for a fresh session
    arch/README.md                  decision-track rules (lifecycle, statuses)
    arch/proposals/0000-template.md proposal template (in-repo, like the rest)
    arch/conformance.json           seed conformance map
    experiments/README.md           experiment-record discipline
    experiments/0000-template.md    experiment record template
    experiments/HANDOFF.template.md session handoff briefing
    governance/CHARTER.template.md  operator charter (bounded autonomy)
    governance/SELF-CORRECTION.md   distilled failure lessons — copied verbatim
    docs/RUNBOOK.template.md        verification and operations

## Lineage

Generalized from a source repository of roughly 900 commits. The
benchmark-specific machinery (paired-arm matrices, usage ledgers, sandbox
attestation) was deliberately NOT carried over; what remains is the workflow
that produced and governed it. Where a rule sounds oddly specific — "never
demand byte-exact output from a stochastic process", "rehearse the complete
expensive path for free first" — it is because a real campaign died without it,
several times.
