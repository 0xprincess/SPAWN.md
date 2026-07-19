# {{PROJECT_NAME}} — Overview

One paragraph: what the project is and the single sentence of purpose that
survives every pivot.

## Project status

Current phase, what exists and is trusted, what is aspirational. Update at
mission boundaries; this file is durable vision, not a changelog.

## Core idea

The load-bearing convictions — the small set of beliefs that, if wrong,
change everything. Keep guardrails minimal and meaningful: encode ones that
stay true as capabilities improve, not ones that will be obsolete in months.

## Scope and non-goals

What the project deliberately does not do. Non-goals recorded here save
every future session from re-litigating them.

## Workflow bindings (from ADAPTATION.md)

- B1 Proposal prefix: {{PREFIX}} (e.g. XIP-0001)
- B2 Architecture-track threshold: {{WHAT_NEEDS_A_PROPOSAL}}
- B3 Experiment spend unit: {{SPEND_UNIT}}
- B4 Verification set: see docs/RUNBOOK.md
- B5 Charter thresholds: {{BUDGETS_AND_TRIGGERS}}
- B6 Generator-owned artifacts: {{LIST_OR_NONE}}
- B7 Reserved holdouts: {{LIST_OR_NONE}}

## Repository structure

1. `arch/` — proposals (pure design decisions) + `conformance.json`.
2. `experiments/` — experiment records + `HANDOFF.md`.
3. `governance/` — charter + self-correction playbook.
4. `docs/` — runbook and operator docs.
5. {{PRODUCT_DIRECTORIES}} — the actual software.

## Open design questions

Numbered. Each should eventually become a proposal or get explicitly
dropped; a question that lingers here across many missions is a smell.
