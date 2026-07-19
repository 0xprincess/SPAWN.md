# 0000: Proposal Template

Status: Final

## Summary

Use this template for major architecture decisions. A proposal is a pure
design document: it records what was decided and why, never whether the
codebase currently conforms to it. Implementation state lives in
`arch/conformance.json`, validated by the conformance checker.

## Headers

Every proposal starts with a `Status:` line and may carry relationship
headers:

1. `Status: Draft | Review | Accepted | Final | Superseded | Withdrawn`
2. `Supersedes: NNNN` — this proposal replaces an earlier decision.
3. `Superseded-By: NNNN` — added to the old proposal when it is replaced.
4. `Requires: NNNN` — this design depends on another accepted decision.
5. `Extended-By: NNNN` — informative; a later proposal builds on this one
   without replacing it.

Once `Final`, a proposal is immutable except for adding `Superseded-By:` and
appending Amendments (below). Other design changes are made by writing a new
proposal that supersedes it, preserving the decision history.

## Motivation

Explain why this decision matters now and what project risk it reduces.

## Decision

State the decision directly.

## Specification

Describe the observable behavior the decision requires, using MUST/SHOULD/MAY
language. This section is what conformance entries and acceptance tests are
written against; a proposal without a checkable specification cannot be
meaningfully tracked in `arch/conformance.json`.

## Consequences

List the obligations and tradeoffs created by the decision (design-level
only; do not describe current code here).

## Alternatives Considered

Record meaningful alternatives and why they were not selected.

## Open Questions

List follow-up design questions that should become future proposals.

## Amendments (only on Final proposals, when needed)

A Final proposal may gain appended sections titled
`## YYYY-MM-DD Amendment — <name>`, each carrying:

1. Its own status line and the authorization it was granted under
   (charter/operator reference).
2. An explicit supersession boundary: exactly which earlier statements it
   changes, and the conditions under which everything else stays true.
3. No rewriting of earlier text — amendments narrow or extend; a change that
   cannot be expressed as an appended boundary needs a superseding proposal.
