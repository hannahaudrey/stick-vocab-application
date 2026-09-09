# Stick Gamification Mechanics

## Product principle

Stick rewards memory progress, not time spent tapping. Users can always continue learning and practicing, but bonus rewards are limited so they cannot be farmed by repeating the same activity.

The main success metric is **words retained after 30 days**.

## The three progress systems

### XP

XP represents general activity and can be spent in the Rewards shop without lowering the user's level.

- Active recall: **5–24 XP**, depending on the self-rating
- Matching round: **40 XP**
- Word Rush: **20–80 XP**, based on accuracy
- Fill the Gap: **6–18 XP**
- Listen & Spell: **22 XP** for a correct answer
- Word Circle: **15 XP/RP reward for the first correct original use**

Each activity gives its full reward once per reward window. Repeating it is still allowed, but becomes **practice only**.

### Retention points (RP)

RP represents evidence that a memory became stronger. It is separate from XP and should feel more valuable.

- Award RP when a word is recalled at its scheduled SRS time
- Give more RP for a confident, correct recall
- Give no RP for viewing a word, guessing repeatedly, or practicing too early
- Use RP for retention milestones and progress reporting—not shop purchases

### Daily goal

The default daily goal is **five meaningful recalls**.

- A rewarded recall advances the goal by one
- Repeating a completed activity does not advance it again
- Completing the goal protects or extends the daily streak
- The goal can be personalized during onboarding

## Streaks

A streak grows when the user completes their daily recall goal before the day ends.

- Completing today's goal adds **one streak day**
- Partial practice does not extend the streak
- The calendar clearly shows completed, protected, current, and upcoming days
- A streak should motivate returning, not prevent practice

### Streak freezes

A freeze protects one missed day and is applied automatically.

- Cost: **400 XP**
- Maximum inventory: **3 freezes**
- One freeze covers one missed day
- The user sees which calendar day was protected
- A freeze preserves the streak but does not count as completing the daily goal

Future option: earn a free freeze at milestones such as a 7- or 14-day streak.

## Cooldowns and anti-spam rules

Cooldowns limit rewards, not access.

- A recalled word shows its next useful review time, such as **Ready in 2 days**
- Early review remains available but gives reduced XP and no RP
- Repeating a rewarded quiz becomes **Practice only**
- Only the first correct Word Circle sentence per word per day earns points
- Word Rush can have a limited number of rewarded runs each day
- Incorrect or duplicate social posts never award points

Use friendly language such as **Strong for now** or **Ready tomorrow**, rather than showing the activity as locked.

## Active recall scoring

The Anki-style self-rating determines both the reward and next review interval.

| Rating | Meaning | Example reward | Example next review |
|---|---|---:|---:|
| Again | Could not recall | 5 XP, 0 RP | 1 minute |
| Hard | Recalled with difficulty | 10 XP, 4 RP | 6 minutes |
| Good | Recalled correctly | 18 XP, 10 RP | 2 days |
| Easy | Immediate confident recall | 24 XP, 12 RP | 5 days |

The production SRS engine should calculate intervals from the user's actual recall history rather than relying on these fixed prototype values.

## Rewards economy

XP is the spendable currency. Spending XP does not reduce the user's lifetime level or achievement history.

Initial shop items:

- Streak freeze: **400 XP**
- Word packs: approximately **600–650 XP**
- Mascot cosmetics: milestone unlocks or XP purchases

RP should not be spendable. It remains a trustworthy measure of memory strength.

## UI states every activity needs

Each quiz or activity should communicate:

1. **Available:** full rewards are available now
2. **Completed:** reward earned and daily goal updated
3. **Cooldown:** next ideal recall time is visible
4. **Practice only:** activity remains playable without another bonus
5. **Success or retry:** mascot reaction, explanation, and next action

## Product guardrails

- Never block users from practicing
- Never award RP for passive exposure
- Do not let raw XP overshadow retained words
- Avoid punishing users with surprise streak loss
- Explain reward limits before users encounter them
- Keep all economy values configurable for later balancing

