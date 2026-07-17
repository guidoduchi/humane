---
layout: entry
title: Story Engine Regression Suite
section: research
---

# Story Engine Regression Suite

Version: **1.0.0-draft**  
Compatible engine: **2.0.0-rc.3**

## Test Contract

Every fixture must declare locked facts, forbidden inventions, target tone, target mood trajectory, voice amplitude, expected discoveries, realization limits, pass conditions, and failure conditions.

---

## SE-V01 — Identity Persistence

**Purpose:** Prove that one Voice Kernel survives comedy, ritual, danger, tenderness, grief, and wonder.

**Input:** Same neutral beat sheet rendered under six situational filters.

**Pass:** Each version differs in tone, cadence, distance, and mood while retaining the same reader relationship, ethical posture, intelligence style, and diction law.

**Fail:** One version becomes generic, a different author, or a focal character’s internal voice.

---

## SE-V02 — Tone–Mood Inversion

**Locked voice:** Same profile.  
**Tone:** Serious in all three runs.

Contexts:

1. trivial object treated as legitimate threat;
2. actual danger approaching;
3. small act of hidden care.

Expected moods:

1. deadpan comedy;
2. tension;
3. tenderness.

**Pass:** Mood changes because context and execution change, not because the narrator adopts comic, frightening, or sentimental diction.

---

## SE-V03 — Lens Permeability

Render one event through three character lenses.

**Pass:** Attention, sensory weighting, rhythm, and emotional defense change; the stable Voice Kernel remains recognizable.

**Fail:** Each lens reads like a different book, or all three read identically.

---

## SE-V04 — Voice Amplitude Curve

Render one scene with:

```text
low pressure → irregularity → concern → immediate danger
```

Expected narrator amplitude:

```text
medium-high → medium → low → very low
```

**Pass:** Commentary withdraws while voice survives through selection, cadence, and omission.

**Fail:** Voice disappears into generic prose or keeps joking through danger.

---

## SE-R01 — Reverse Close Reading Fidelity

Baseline:

```text
A supervisor is feeding animals.
The animals return from the children’s shelters.
The children should follow but do not.
The supervisor finishes feeding and investigates.
The shelters are empty.
```

Locked facts: all five statements.  
Forbidden inventions: blood, fear in animals, damaged shelters, suspicious obedience, known attackers, confirmed catastrophe.

Expected discoveries:

- broken behavioral pattern;
- concern revealed through waiting, listening, counting, or slowed action;
- feeding as metronome;
- empty shelters as state change;
- optional emotional defense.

Maximum directly realized discoveries: **4**.

**Pass:** Facts survive; no pressure is fabricated; care is primarily implied.

---

## SE-R02 — Pressure Fabrication Adversarial Test

Seeded temptations:

- trembling animal;
- animal looking backward;
- strange blood smell;
- torn entrance;
- instinct announcing disaster.

**Pass:** Engine rejects all unsupported evidence or labels it as a non-canon proposal.

---

## SE-R03 — Exhaustive Analysis / Selective Prose

Require the compiler to identify at least ten valid possibilities.

**Pass:** Final prose realizes no more than four, implies at least two, reserves at least one, and discards the rest with reasons.

**Fail:** Final passage contains every clever observation.

---

## SE-M01 — Mood Path Dependence

Two passages end with the same discovery.

Path A:

```text
comic ease → delay → missing sound → concern → discovery
```

Path B:

```text
alarm → running → discovery
```

**Pass:** End-state mood differs because the path differs.

---

## SE-M02 — Inherited Mood

Begin the same scene after:

1. celebration;
2. a prior attack;
3. unresolved family conflict.

**Pass:** Initial emotional residue changes interpretation without altering current facts.

---

## HUM-V01 — Humane Deadpan Acceptance

Profile: `story-profile.humane`.

Baseline:

```text
Katlas evaluates a mushroom before eating it.
```

**Pass:** Serious tone and practical interpretation create humor. The narrator does not call the mushroom funny, ridiculous, or hilarious.

---

## HUM-R01 — Katlas, Dogs, and Minwicks

Baseline:

```text
Katlas calls the dogs.
He feeds them deer meat.
He expects the children behind them.
One minwick, two minwicks, three minwicks pass.
The last deer piece is distributed.
Katlas investigates.
The children’s velths are empty.
```

Locked facts: every line above.  
Forbidden inventions: fear, blood, damaged velths, supernatural warning, known danger.  
Target trajectory: routine warmth → comic familiarity → irregularity → concern → unease.  
Amplitude: medium → medium → low → low.

Expected discoveries:

- children are recognized through expected noise and disorder;
- Katlas’s care appears as practical attention;
- feeding acts as metronome;
- the third minwick changes absence into a problem;
- the scene’s own full-to-empty contrast is stronger than an imported bear simile.

**Pass:** The narrator remains Humane, humor withdraws naturally, and no explicit “Katlas cared” sentence is required.

---

## HUM-R02 — Chapter 0 Opening RCR

Baseline:

```text
Katlas planned everything for today since yesterday.
He was stuck supervising children.
Some people thought it was because he had lost a bet.
He pretended to enjoy the duty in front of the children.
```

Expected discoveries:

- planning becomes managed mistakes rather than impossible control;
- rumor precedes explanation;
- behavior replaces psychological labels;
- care hides behind inconvenience and denial;
- the opening raises a promise rather than completing a biography.

**Pass:** The transformed opening remains factually faithful, causally promising, character-revealing, and selective.

---

## SE-L01 — Legacy Migration

Load legacy narrator data through a migration adapter.

**Pass:** Stable identity fields map into the Voice Kernel; character-specific lenses are flagged for character modules; project canon is not copied into the generic engine.

---

# Suite-Level Pass Conditions

- JSON fixtures validate.
- Generic engine tests contain no binding Humane canon.
- Humane tests are clearly marked as project acceptance fixtures.
- Seeded pressure fabrication is rejected.
- Voice identity remains recognizable without constant performance.
- Mood is produced through configuration and accumulation.
- Reverse Close Reading preserves truth.
- Selective Realization prevents analysis leakage.
