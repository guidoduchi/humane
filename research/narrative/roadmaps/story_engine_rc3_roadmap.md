---
layout: entry
title: Story Engine rc.3 Roadmap
section: research
---

# Story Engine 2.0.0-rc.3 Roadmap

Date: **2026-07-17**  
Branch target: **agent/story-engine-voice-kernel-rcr**  
Status: **Implementation draft**

## Goal

Upgrade the project-independent Story Engine so it can perform Reverse Close Reading, preserve a loaded narrator identity under lensing and tonal change, generate mood through accumulated conditions, and restrain its own discoveries before rendering prose.

## Deliverables

1. `research/narrative/story_engine.md`
2. `research/narrative/story_engine.json`
3. `research/narrative/schemas/story_profile.schema.json`
4. `research/narrative/profiles/humane_story_profile.md`
5. `research/narrative/profiles/humane_story_profile.json`
6. `research/narrative/tests/story_engine_regression.md`
7. `research/narrative/tests/story_engine_regression.json`

## Phase 1 — Structural Foundation

- preserve engine/canon/profile separation;
- add Voice Kernel runtime;
- add narrator-amplitude control;
- add Reverse Close Reading Compiler;
- add Narrative Possibility Map;
- add Selective Realization Gate;
- add Interpretive Rhetoric Layer;
- formalize mood accumulation and path dependence;
- expand failure taxonomy and verification gates.

**Exit condition:** Markdown and JSON agree, JSON validates, and no Humane-specific canon is embedded in the generic engine.

## Phase 2 — Humane Profile Extraction

- migrate stable narrator identity from legacy narrator files;
- define temperament, intelligence style, ethical posture, humor nature, rhetoric, material imagination, diction, cadence, and silence behavior;
- define amplitude defaults by situation;
- add good examples, bad examples, and failure scenarios;
- identify what belongs in character modules rather than the story profile.

**Exit condition:** The profile can render distinct moods and lenses while remaining recognizably Humane.

## Phase 3 — Regression Harness

- identity persistence;
- tone–mood inversion;
- lens permeability;
- voice amplitude;
- RCR fidelity;
- pressure-fabrication rejection;
- exhaustive-analysis/selective-prose;
- mood path dependence;
- inherited mood;
- legacy migration compatibility.

**Exit condition:** Seeded failures are correctly detected and the dog/minwick fixture passes without invented evidence.

## Phase 4 — Repository Migration

After Architect approval:

- mark legacy `narrator.md` and `.json` as superseded historical sources;
- link them to the new Story Profile;
- migrate character-specific lens content into character modules;
- migrate situational defaults that belong to the Story Profile;
- update research navigation and README links;
- promote rc.3 to the next release candidate or stable 2.0.0.

## Phase 5 — Chapter 0 Acceptance

Use Chapter 0 as the first project-level acceptance corpus:

- opening three paragraphs;
- mushroom debate;
- children and marking sequence;
- dogs/minwick/empty-velths transition;
- ritual passage;
- first danger transition;
- one tender Katlas beat;
- one multi-character dialogue scene.

The engine passes only if it improves causality and reader experience without erasing the narrator’s soul or crowding the prose with every discovery.

## Merge Strategy

Use a draft PR. Do not replace legacy narrator files in the first commit. Review architecture, profile identity, and regression fixtures separately. Merge only after the Architect approves both the generic engine and the Humane profile.
