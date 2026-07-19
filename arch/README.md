# Architecture Track

Architecture work is captured as numbered improvement proposals under
`proposals/`. A proposal is a pure design document — it records a durable
decision, its context, tradeoffs, and a checkable specification. It never
records whether the codebase currently conforms to it.

(Instantiation note: replace "proposal/NNNN" language with your derived
prefix from ADAPTATION.md B1, e.g. "FIP-0001", throughout this file.)

## Decision lifecycle (Status header)

1. `Draft` — under active design.
2. `Review` — design complete, awaiting approval.
3. `Accepted` — approved; implementation may begin.
4. `Final` — specification settled and immutable, except for adding
   `Superseded-By:` and appending dated, operator-authorized Amendment
   sections (see proposal template).
5. `Superseded` — replaced by a later proposal (see `Superseded-By:` header).
6. `Withdrawn` — abandoned without replacement.

Design changes to a Final proposal are made by writing a new proposal with a
`Supersedes:` header, preserving decision history append-only.

## Implementation conformance (separate from decisions)

Whether the codebase conforms to each proposal is tracked in
`conformance.json`: per-proposal status
(`conformant` / `partial` / `unimplemented` / `n-a`), the modules and tests
that satisfy it, and explicit gaps. Validate it with the project's
conformance checker (see `docs/RUNBOOK.md`).

The check fails on invalid statuses, missing entries, dangling file
references, partial entries without listed gaps, and conformant entries
without tests. Update `conformance.json` in the same commit as the code that
changes conformance.

## Index

1. [0000: Proposal Template](proposals/0000-template.md)
