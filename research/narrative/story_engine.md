---
layout: entry
title: Story Engine
section: research
breadcrumbs:
  - title: Humane
    url: /
  - title: Research
    url: /research/
  - title: Narrative
    url: /research/narrative/
  - title: Story Engine
    url: /research/narrative/story-engine/
---

# Story Engine

Version: **2.0.0-rc.3**  
Engine schema: **2.0.0**  
Canon-module schema: **1.0.0**  
Story-profile schema: **1.1.0**  
Status: **Release candidate — voice-runtime and Reverse Close Reading upgrade**  
Scope: Project-independent narration, scripting, causal motion, behavioral truth, dialogue, canon interoperability, Reverse Close Reading, voice preservation, mood dynamics, selective realization, and regression verification.

> **Separation Law:** The Story Engine governs how a story is told. Canon modules govern what is true. The Story Profile governs who is telling.

## Upgrade Summary

`2.0.0-rc.3` preserves the rc.2 architecture and adds the missing transformation chain between a loaded narrator identity and rendered prose:

```text
Story Profile
→ Voice Kernel
→ Reverse Close Reading Compiler
→ Narrative Possibility Map
→ Tone and Mood Plan
→ Voice-Amplitude Controller
→ Selective Realization Gate
→ Narrator or Scripter Mode
→ Voice and Mood Verification
```

The upgrade solves five weaknesses found during calibration:

1. a story profile could declare a voice without defining its internal personality;
2. mood was treated too much like a selectable label instead of an accumulated reader state;
3. Reverse Close Reading existed as a writing practice but not as a formal engine stage;
4. the engine could discover many valid layers and then overcrowd the final prose with all of them;
5. technically correct prose could still belong to the wrong storyteller.

---

# Part I — System Boundaries

## 1. Engine, Profile, Canon, and Runtime State

| Layer | Owns |
|---|---|
| **Story Engine** | Reusable narrative behavior, transformation, rendering, diagnostics, and verification |
| **Story Profile** | Stable narrator identity, voice kernel, reader relationship, ethical posture, register, rhetoric, and style invariants |
| **Canon Registry** | Characters, cultures, rituals, locations, relationships, timeline, artifacts, world rules, and project truth |
| **Scene Contract** | Current objective, pressure, focal access, required changes, intended reader experience, and locked facts |
| **Scene-State Ledger** | Temporary truth: presence, knowledge, positions, injuries, objects, open questions, recent devices, and current mood residue |

The engine must never solve a prose problem by silently inventing canon.

## 2. Architect Authority

The Architect:

- approves canon;
- selects the active story profile;
- defines scene intent and locked facts;
- chooses between valid alternatives;
- records exceptions;
- may override any default when the living passage demands it.

> **Architect Principle:** The best version is not the one that displays the most technique. It is the one that creates the intended experience while preserving truth.

---

# Part II — Runtime Architecture

## 3. High-Level Architecture

```text
Architect
    ↓
Canon Registry + Story Profile
    ↓
Scene Contract + Scene-State Ledger
    ↓
Voice Kernel Resolution
    ↓
Reverse Close Reading Compiler
    ↓
Narrative Possibility Map
    ↓
Lens + Filter Resolution
    ↓
Tone Trajectory + Mood Dynamics
    ↓
Voice-Amplitude Controller
    ↓
Selective Realization Gate
    ↓
Narrator Mode / Scripter Mode
    ↓
Ledger Update
    ↓
Verification Pipeline
    ↓
Rendered Scene, Script, Revision, or Diagnostic
```

## 4. Execution Modes

### Narrator Mode

Governing question:

> **How should this experience reach the reader?**

It controls focalization, distance, selection, rhythm, imagery, implication, compression, expansion, commentary, and revelation.

### Scripter Mode

Governing question:

> **What does each person do because of the previous beat?**

It controls blocking, dialogue turns, interruption, silence, physical reaction, power shifts, decision formation, and scene exits.

Both modes share the same Voice Kernel, canon limits, human-causality checks, Scene-State Ledger, and verification system.

---

# Part III — Voice Runtime

## 5. Voice Kernel

A Voice Kernel is the stable internal personality of the telling intelligence. It is supplied by the active Story Profile and must remain recognizable under changes of tone, mood, lens, distance, and pressure.

Required Voice Kernel fields:

| Field | Function |
|---|---|
| **Identity** | Concise statement of who the telling intelligence is |
| **Temperament** | Persistent emotional and intellectual disposition |
| **Intelligence style** | How it connects facts, notices contradictions, and forms interpretations |
| **Interpretive posture** | How actively it comments, qualifies, corrects, or withholds |
| **Ethical posture** | What it treats with tenderness, gravity, skepticism, mercy, or judgment |
| **Reader relationship** | Companion, witness, investigator, confidant, outsider, or another position |
| **Narrative authority** | Confidence, uncertainty, reliability, and permission to generalize |
| **Knowledge behavior** | What it may know, disclose, infer, or protect |
| **Humor nature** | Where humor comes from and what it must never become |
| **Rhetorical behavior** | Preferred patterns of qualification, contradiction, denial, escalation, or silence |
| **Material imagination** | What kinds of physical images naturally carry thought |
| **Diction and register** | Accessibility, formality, lexical range, and linguistic texture |
| **Syntax and cadence** | Sentence movement, paragraph music, interruption, and emphasis |
| **Silence behavior** | When the narrator withdraws and lets gesture, action, or absence carry meaning |
| **Lens permeability** | How strongly focal characters may color attention without replacing the narrator |
| **Forbidden personalities** | Voices the profile must not drift into |

> **Voice Principle:** Voice is identity, not constant performance.

## 6. Voice Stability and Amplitude

The voice remains stable while its visibility changes.

Let:

- `V` = stable Voice Kernel;
- `α(t)` = narrator-amplitude curve.

The rendered voice contribution at a beat is `α(t)V`.

| Pressure | Typical amplitude behavior |
|---|---|
| Low pressure or comic observation | Medium to high interpretive visibility |
| Rising concern | Gradual reduction in overt commentary |
| Immediate danger | Voice survives mostly through selection, cadence, and omission |
| Ritual | Controlled, weighted, tactful visibility |
| Tenderness or grief | Quiet interpretation; gesture and material detail lead |
| Wonder | Expanded scale without losing lexical restraint |

Failure occurs at either extreme:

- **Voice dropout:** the passage becomes generic report prose;
- **Voice overamplitude:** every sentence performs the narrator until the scene feels written rather than lived.

## 7. Lens and Filter

The character lens changes attention. The situational filter changes pressure. Neither replaces the Voice Kernel.

```text
Stable Voice
+ Character Lens
+ Situational Filter
+ Current Distance
= Local Narrative Configuration
```

A character lens may alter:

- what is noticed first;
- what is mistrusted;
- what is avoided or misread;
- which metaphors become available;
- sentence pressure;
- humor permission;
- emotional defense.

A situational filter may alter:

- tone;
- rhythm;
- distance;
- sensory weighting;
- image density;
- narrator amplitude;
- information speed;
- interpretive tolerance.

> **Lens Principle:** The character colors the instrument. The situation changes the key. The Voice Kernel keeps the same musician.

---

# Part IV — Voice, Tone, Context, and Mood

## 8. Mood Is an Accumulated State

Mood is not an independent personality setting and should not be commanded through emotional adjectives alone.

Operational model:

```text
M(t) = M₀ + ∫ F(α(t)V, T(t), C(t), E(t)) dt
```

Where:

- `M(t)` = reader mood at narrative time `t`;
- `M₀` = inherited emotional residue from prior beats or scenes;
- `V` = stable voice;
- `T(t)` = local narratorial attitude;
- `C(t)` = scene configuration and current dramatic condition;
- `E(t)` = execution: rhythm, imagery, distance, diction, information order, and silence;
- `α(t)` = narrator visibility.

This is a conceptual control model, not a requirement for literal numeric scoring.

## 9. Scene Configuration Is Piecewise Stable

A scene may begin with one broad condition, but revelations create new local conditions.

```text
C₁: routine action proceeds
C₂: an expected behavior fails
C₃: the failure persists
C₄: consequence is confirmed
```

The engine must distinguish:

- gradual mood accumulation;
- event-driven emotional jumps;
- inherited mood;
- release and contrast;
- saturation.

## 10. Tone Does Not Equal Mood

The same tone may produce different moods under different contexts.

```text
serious tone + absurd context → deadpan comedy
serious tone + danger → tension
serious tone + hidden care → tenderness
serious tone + loss → restrained grief
calm tone + horrifying context → uncanny dread
```

> **Mood Principle:** The narrator should configure the causes of feeling, not merely name the desired feeling.

---

# Part V — Reverse Close Reading Compiler

## 11. Definition

Reverse Close Reading is the engine’s transformation stage for turning a factual baseline into a richer narrative possibility set without changing what is true.

It is not decoration. It is semantic excavation.

> **RCR Principle:** Do not decorate the baseline. Discover what the baseline has not yet learned to say.

## 12. Input Contract

The compiler receives:

- factual baseline;
- locked facts;
- forbidden inventions;
- active Story Profile;
- active canon modules;
- Scene Contract;
- Scene-State Ledger;
- intended reader trajectory;
- optional reference passages or approved golden behaviors.

## 13. Analysis Passes

The compiler performs these passes before generating prose:

1. **Truth preservation** — identify facts that must survive unchanged.
2. **Causal skeleton** — determine what causes what.
3. **Latent contradiction** — find tensions between behavior, self-image, duty, desire, and consequence.
4. **Hidden human truth** — identify what characters reveal without admitting.
5. **Expected-pattern analysis** — determine what should happen and why its failure matters.
6. **Reader-question analysis** — identify the strongest unanswered questions.
7. **Information-order analysis** — reorder for discovery rather than explanation.
8. **Behavioral conversion** — replace labels with action, timing, gesture, syntax, and omission.
9. **Rhetorical opportunity analysis** — identify qualification, correction, denial, escalation, anticlimax, or silence.
10. **Material grounding** — select world-compatible physical details that carry pressure.
11. **Mood-trajectory design** — define how the reader experience should accumulate.
12. **Risk analysis** — flag canon drift, fabricated pressure, overexplanation, device repetition, and tonal excess.

## 14. Narrative Possibility Map

The compiler outputs possibilities, not final prose.

Each discovery receives:

```yaml
id: discovery-id
source: baseline | canon | ledger | inference
confidence: confirmed | strong_inference | tentative
function: character | causality | mood | world | rhythm | rhetoric | setup | payoff
risk: none | canon_drift | overexplanation | repetition | tonal_excess | attention_theft
recommended_status: realize_now | imply_only | reserve_for_later | discard
```

This separation prevents analysis from leaking wholesale into the prose.

---

# Part VI — Selective Realization

## 15. Selective Realization Gate

The engine may discover more than the passage should express.

Every candidate insight must be assigned one status:

- **Realize now** — place directly on the page;
- **Imply only** — let action, rhythm, or omission carry it;
- **Reserve for later** — preserve in the ledger or plot-thread module;
- **Discard** — valid insight that would crowd, repeat, misdirect, or weaken the passage.

> **Restraint Principle:** The analysis should be exhaustive. The prose should be selective.

## 16. Selection Criteria

Prefer a discovery when it:

- changes the reader’s understanding;
- advances the causal spine;
- reveals character through behavior;
- creates or transforms pressure;
- deepens mood without naming it;
- prepares a future payoff;
- does multiple compatible jobs effortlessly.

Reject or defer it when it:

- repeats an implication already legible;
- turns a device into a tic;
- competes with a stronger image;
- invents unsupported evidence;
- makes the narrator admire its own sentence;
- causes the scene to orbit rather than move;
- belongs to a later revelation.

---

# Part VII — Interpretive Rhetoric Layer

## 17. Definition

Interpretive rhetoric lets the narrator arrange facts so exposition performs character and companionship without leaving the story world.

Available operations:

- qualification;
- correction;
- contradiction;
- proleptic framing;
- imagined alternatives;
- rhetorical insistence;
- escalation;
- anticlimax;
- isolated afterbeat;
- socially mediated characterization;
- serious framing of absurd material;
- strategic silence.

> **Interpretive Principle:** The narrator may interpret without explaining and comment without leaving the world.

## 18. Failure Conditions

- detached commentary;
- metafictional leakage;
- explanation after implication;
- uniform irony;
- character takeover;
- commentary without consequence;
- aphorism addiction;
- rhetorical saturation.

---

# Part VIII — Preserved Core Systems

## 19. Causal Motion

Every scene should have one governing objective. Richness may surround it, but every paragraph should change the situation.

Core questions:

- What does the focal person want now?
- What resists that objective?
- What changed because of this beat?
- What new question or pressure remains?

> **Motion Principle:** Knowledge should arrive as the by-product of motion.

## 20. Human Causality

Characters carry needs, histories, defenses, and unequal reasons—not assigned arguments.

Dialogue and action must pass:

- psychological plausibility;
- relationship continuity;
- knowledge limits;
- age and status logic;
- physical opportunity;
- emotional residue;
- resistance and consequence.

## 21. Detail and Performed Action

A detail must move, reveal, pressure, disturb, comfort, mislead, interact, or pay off.

> **Action Principle:** Do not merely report that the action happened when the way it happened is the point.

## 22. Dynamic Paragraph Composition

Paragraph shape follows pressure:

- long for accumulation, abundance, ritual, wonder, or social complexity;
- medium for practical movement and scene progression;
- short for turns, danger, shame, realization, silence, and deadpan cuts;
- one-line paragraphs only when they strike, deepen, reveal, or land.

## 23. Taste Control

Clarity defeats decoration. Emotional truth defeats a joke. Canon defeats convenience. The living scene defeats the display of technique.

---

# Part IX — Failure Taxonomy

## 24. Voice and Mood Failures

| Failure | Definition |
|---|---|
| **Voice dropout** | Correct facts rendered in generic report prose |
| **Voice overamplitude** | Narrator identity performs in nearly every sentence and overwhelms the scene |
| **Voice replacement** | Local lens produces a different narrator rather than a modulation |
| **Lens takeover** | Character psychology erases the story profile’s stable intelligence |
| **Wrong-book beauty** | Strong prose that does not belong to the loaded Story Profile |
| **Tone–mood confusion** | Desired mood is pursued by directly selecting an equivalent tone |
| **Mood command** | Emotional labels instruct the reader instead of creating conditions for feeling |
| **Mood discontinuity** | Emotional state changes without accumulation or justified shock |
| **Mood saturation** | Repetition makes humor, dread, tenderness, grief, or wonder numb |
| **Pressure fabrication** | Unsupported evidence is invented to force suspense or significance |

## 25. Reverse Close Reading Failures

| Failure | Definition |
|---|---|
| **RCR decoration** | Baseline receives prettier wording but no deeper discovery |
| **RCR under-extraction** | Hidden contradiction or human truth remains unused despite relevance |
| **RCR canon drift** | Transformation changes what happened or what is known |
| **RCR analysis leakage** | Too many internal discoveries are expressed directly |
| **RCR over-realization** | Insights that should remain implied are explained |
| **RCR false inference** | Tentative interpretation is treated as confirmed truth |
| **RCR path flattening** | Final state is reached without the emotional or causal route that gives it meaning |

## 26. Existing Core Failures

The rc.2 taxonomy remains active, including canon invention, category tour, metronome theft, dead detail, neutral fallback, cleverness theft, lens drift, scripted dialogue, symmetrical argument, retrospective intelligence, ledger amnesia, mechanical cliffhanger, and rule bloat.

---

# Part X — Verification Pipeline

## 27. Gate Order

1. **Compatibility Gate** — are required modules loadable?
2. **Truth Gate** — did locked facts and canon survive?
3. **RCR Gate** — were discoveries grounded and classified?
4. **Causal Gate** — does each meaningful beat change the situation?
5. **Human Gate** — would these people act this way now?
6. **Voice Gate** — does the passage belong to the loaded storyteller?
7. **Tone and Mood Gate** — did the intended trajectory emerge rather than get announced?
8. **Amplitude Gate** — is narrator visibility appropriate to pressure?
9. **Selective Realization Gate** — were enough discoveries withheld?
10. **Taste Gate** — does every visible technique belong?
11. **Continuity Gate** — is the ledger correctly updated?
12. **Architect Gate** — does the result serve the intended soul and direction?

## 28. Voice Verification Questions

- Which stable Voice Kernel traits are perceptible?
- Could this passage belong unchanged to another Story Profile?
- Did the focal character color attention or replace the narrator?
- Is the narrator too absent or too visible?
- Does humor emerge from configuration or joke delivery?
- Does commentary remain inside the world?
- Did the prose become quieter when pressure required it?

## 29. Mood Verification Questions

- What is the inherited mood?
- What is the intended trajectory by beat?
- Which local condition changes the trajectory?
- Is the transition gradual, or is there a justified jump?
- Is contrast preventing saturation?
- Did execution create the mood, or did adjectives announce it?

---

# Part XI — Test Contract

## 30. Required Test Fixture Fields

```yaml
test_id:
profile:
input_baseline:
loaded_canon:
scene_state:
locked_facts:
forbidden_inventions:
target_tone_trajectory:
target_mood_trajectory:
voice_amplitude_curve:
expected_discoveries:
maximum_realized_discoveries:
seeded_failures:
pass_conditions:
failure_conditions:
golden_reference_behavior:
```

## 31. Mandatory Test Families

- identity persistence across moods;
- tone–mood inversion;
- lens permeability;
- voice amplitude;
- RCR fidelity;
- adversarial pressure fabrication;
- exhaustive-analysis/selective-prose;
- mood path dependence;
- inherited mood and scene transition;
- canon compatibility;
- dialogue human causality;
- legacy profile migration.

See `tests/story_engine_regression.md` and `.json`.

---

# Part XII — Migration

## 32. Repository Structure

```text
research/narrative/
  story_engine.md
  story_engine.json
  profiles/
    humane_story_profile.md
    humane_story_profile.json
  schemas/
    story_profile.schema.json
  tests/
    story_engine_regression.md
    story_engine_regression.json
  roadmaps/
    story_engine_rc3_roadmap.md
```

The legacy `narrator.md` and `narrator.json` remain historical sources until the Architect approves the new profile and migration.

## 33. Release Notes — 2.0.0-rc.3

Added:

- Voice Kernel runtime;
- narrator-amplitude control;
- Reverse Close Reading Compiler;
- Narrative Possibility Map;
- Selective Realization Gate;
- Interpretive Rhetoric Layer;
- accumulated mood model;
- voice-specific and RCR-specific failure taxonomy;
- formal test-fixture contract;
- Humane Story Profile as a separate module.

Preserved:

- canon separation;
- Narrator and Scripter Modes;
- causal motion;
- human causality;
- dialogue architecture;
- detail behavior;
- Scene-State Ledger;
- rule precedence and override protocol;
- compatibility and verification systems.

## 34. Working Aphorisms

- The engine governs telling. Canon governs truth. The profile governs who tells.
- Voice is identity, not constant performance.
- Tone is attitude. Mood is accumulated atmosphere.
- The narrator should configure the causes of feeling.
- Do not decorate the baseline. Discover what it has not learned to say.
- The analysis should be exhaustive. The prose should be selective.
- The character colors the instrument. The situation changes the key. The voice keeps the musician.
- A technically correct scene can still belong to the wrong storyteller.
- Clarity defeats decoration. Emotional truth defeats a joke. Canon defeats convenience.
- The Architect decides when the living passage has surpassed the rule.
