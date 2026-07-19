# {{PROJECT_NAME}} Runbook

Operational truth: how to verify, run, and regenerate everything. If a claim
in docs or reports cannot be backed by a command on this page, the claim is
suspect.

## Standard verification set

Run before claiming any work done, and always before real-world dispatch:

```bash
{{TEST_COMMAND}}            # full test suite
{{STATIC_CHECK_COMMAND}}    # types/lint (or state explicitly: none available)
{{CONFORMANCE_COMMAND}}     # arch/conformance.json checker
```

Known quirks (flaky-in-parallel tests, slow suites, environment
dependencies) are listed here with their workarounds — and whether each
passes in isolation.

## Running the system

{{PROJECT_SPECIFIC_COMMANDS}}

## Experiments

How to execute a declared experiment for this project: the zero-cost
rehearsal mode, the real mode, where artifacts land, and how closure is
recorded. Reference `experiments/README.md` for the record discipline.

## Generator-owned artifacts — never hand-edit

| Artifact | Regeneration command |
| --- | --- |
| {{ARTIFACT}} | {{COMMAND}} |

Regeneration must be deterministic from committed inputs; a published
artifact that cannot be regenerated is a defect.

## Environment

Machine/OS assumptions, credentials handling (references only — never
secrets in the repo, logs, or prompts), and external service dependencies.
