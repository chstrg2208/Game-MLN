# TASK: REDESIGN GAME UI/UX — MAKE IT FEEL LIKE A REAL GAME, NOT AN AI-GENERATED WEBSITE

You are working on an existing educational game:

**Website:** https://game-mln-ebon.vercel.app/

The game is an educational philosophy battle game based on Marxist-Leninist philosophy.

The current game concept is:

> 2D action/platform shooter + boss fights + philosophy quiz + realtime classroom interaction + QR joining + leaderboard.

Your job is to **redesign and polish the existing game**, NOT rebuild the entire project from scratch.

---

# 1. CORE OBJECTIVE

Transform the current visual experience from:

> "AI-generated educational web app / demo"

into:

> **"A real indie arcade game designed by a human game designer."**

The game should feel:

* intentional
* game-like
* immersive
* energetic
* polished
* easy to understand
* suitable for classroom presentation
* visually memorable
* less corporate
* less dashboard-like
* less AI-generated

The result should NOT look like:

* a SaaS dashboard
* a generic AI landing page
* a Tailwind template
* a quiz website
* a glassmorphism demo
* an AI-generated portfolio project

---

# 2. VERY IMPORTANT — PRESERVE EXISTING FUNCTIONALITY

Before modifying anything:

1. Inspect the existing codebase.
2. Understand the current architecture.
3. Identify:

   * game loop
   * player movement
   * shooting
   * jumping
   * dash
   * ultimate
   * boss logic
   * quiz logic
   * scoring
   * health
   * progression
   * realtime functionality
   * QR joining
   * lobby
   * leaderboard
   * host/admin functionality
   * fullscreen/projector functionality

DO NOT remove or break these features.

The redesign must be primarily a:

> **UI / UX / visual / interaction / presentation improvement**

rather than a rewrite of the core game logic.

Do NOT replace working systems with fake mock functionality.

Do NOT remove realtime functionality.

Do NOT remove QR functionality.

Do NOT remove leaderboard functionality.

Do NOT remove the existing quiz system.

Do NOT remove existing player controls.

Do NOT change backend contracts unless absolutely necessary.

---

# 3. FIRST: AUDIT THE EXISTING PROJECT

Before editing:

Create a mental map of the existing project.

Identify:

* framework
* rendering approach
* components
* screens
* game engine
* state management
* CSS architecture
* assets
* animation system
* sound system
* backend/realtime implementation

Then identify which parts should be:

### KEEP

Existing game logic and working functionality.

### REDESIGN

Visual presentation and UX.

### REFACTOR ONLY IF NECESSARY

Components that prevent clean UI implementation.

Do not blindly rewrite files.

Avoid unnecessary dependency installation.

Prefer the project's existing stack.

---

# 4. NEW VISUAL DIRECTION

Use this visual direction:

## "2D INDIE ARCADE + PHILOSOPHY BATTLE"

References in spirit:

* modern indie arcade games
* retro-modern 2D shooters
* boss-rush games
* game-show presentation
* cinematic game HUDs

Do NOT copy any copyrighted game's exact design.

Use the references only for design principles.

The game should feel closer to:

> an actual arcade game

than:

> an educational web application.

---

# 5. REMOVE THE "AI GENERATED" LOOK

Strongly reduce or remove:

* excessive emoji
* emoji used as icons
* excessive rounded cards
* excessive glassmorphism
* huge gradients
* excessive glowing borders
* excessive drop shadows
* excessive blur
* excessive text
* excessive ALL CAPS
* excessive badges
* generic dashboard cards
* generic SaaS UI patterns
* generic AI-looking purple/blue gradients
* "AI" appearing everywhere
* unnecessary decorative elements

DO NOT use an emoji for every feature.

Instead use:

* simple SVG icons
* consistent iconography
* game graphics
* typography
* sprites
* particles
* subtle effects

---

# 6. IMPORTANT: REDUCE THE USE OF THE WORD "AI"

The current game overuses "AI".

Do NOT repeatedly use phrases such as:

* AI Battle
* AI Boss
* AI Arena
* AI Philosophy
* AI-powered
* AI-generated
* AI enemy

The game is about philosophy.

AI can exist as a supporting theme if necessary, but it should NOT dominate the branding.

Prefer a stronger game identity.

For example:

# BIỆN CHỨNG

with a subtitle such as:

> Philosophy Battle Arena

or another concise game subtitle.

Do not blindly use this exact name if the existing project already has a strong title.

---

# 7. HOME SCREEN / TITLE SCREEN

Completely redesign the current information-heavy landing screen.

The title screen should feel like a real game.

Instead of showing a long list of:

* features
* controls
* descriptions
* emojis
* statistics
* explanatory cards

Use a cinematic composition.

Suggested structure:

---

```
          GAME LOGO

     BIỆN CHỨNG

  PHILOSOPHY BATTLE

          [ PLAY ]

      [ HOW TO PLAY ]

       [ LEADERBOARD ]
```

---

The screen should prioritize:

1. game title
2. visual identity
3. primary CTA
4. secondary actions

Do NOT dump all game information on the first screen.

---

# 8. PLAYER JOIN FLOW

Keep the existing name / MSSV functionality.

But simplify the presentation.

Instead of a generic form card, make it feel like entering a game.

Example:

```
    ENTER YOUR IDENTITY

    [ NAME / MSSV ]

          [ JOIN ]
```

Small helper text:

> Your score will be recorded on the classroom leaderboard.

Keep the form extremely clean.

---

# 9. LOBBY / WAITING ROOM

Redesign the lobby into a game-show waiting room.

Prioritize:

* number of players
* player avatars/initials
* QR code
* game status
* host start state

Example structure:

```
          CLASS BATTLE

             24
           PLAYERS

      ● ● ● ● ● ● ●

          JOIN CODE

            QR

      WAITING FOR HOST...
```

Avoid displaying huge blocks of instructions.

---

# 10. HOST / ADMIN EXPERIENCE

Separate the player experience from the host experience.

Players should NOT see unnecessary admin controls.

Create a clean host mode containing:

* QR code
* player list
* ready status
* start game
* reset
* leaderboard
* projector mode

The host UI can be more dashboard-like.

But the PLAYER UI should remain game-like.

---

# 11. GAMEPLAY HUD

This is one of the most important changes.

The gameplay screen should feel like an actual arcade game.

HUD should be minimal.

Suggested layout:

TOP LEFT:

```
PLAYER
♥ ♥ ♥ ♥
HP BAR
```

TOP CENTER:

```
BOSS NAME

███████████████
```

TOP RIGHT:

```
SCORE
STAGE 1/4
```

BOTTOM LEFT:

```
★ ★ ☆
```

BOTTOM RIGHT:

```
SPACE  SHOOT
SHIFT  DASH
K      ULTIMATE
```

Do NOT display long instructional text during gameplay.

---

# 12. CONTROLS

Keep the existing controls.

However, present them progressively.

Do NOT show every key on the landing page.

Use contextual hints.

For example:

At the beginning:

> A / D — MOVE

After a few seconds:

> W — JUMP

When dash becomes relevant:

> SHIFT — DASH

When ultimate is available:

> K — ULTIMATE

This makes the game feel designed rather than documented.

---

# 13. BOSS PRESENTATION

Make every boss feel like a real game boss.

Each boss should have:

* unique name
* unique visual identity
* unique arena
* unique attack pattern
* unique introduction
* unique phase transition
* unique defeat feedback

Do not simply put a generic enemy inside a different color.

The four bosses should represent different philosophical concepts.

For example:

### BOSS 1

Matter

Gameplay identity:
heavy / direct attacks

### BOSS 2

Consciousness

Gameplay identity:
illusion / teleport / unpredictable movement

### BOSS 3

Contradiction

Gameplay identity:
changing attack patterns / two-sided attacks

### BOSS 4

Historical Development

Gameplay identity:
multiple phases / escalating difficulty

These are examples.

Use the existing game logic where possible.

Do NOT implement complicated new mechanics unless the current architecture supports them cleanly.

---

# 14. BOSS INTRO

Before each boss fight, add a short cinematic intro.

Example:

```
    ─────────────────

          CHAPTER I

           MATTER

    ─────────────────

    "The material world
     exists independently
     of consciousness."

          [ FIGHT ]
```

Keep it short.

Do NOT use long paragraphs.

---

# 15. QUIZ SYSTEM — VERY IMPORTANT

The quiz should NOT feel like a separate web form.

Currently the transition feels like:

> gameplay → suddenly a quiz website.

Fix this.

The quiz should feel like a:

> BATTLE CHALLENGE

Example:

```
    ┌─────────────────────────────┐

         BATTLE CHALLENGE

    What is the relationship
    between matter and consciousness?

    A  ................................
    B  ................................
    C  ................................
    D  ................................

    └─────────────────────────────┘
```

The visual language must match the game.

---

# 16. QUIZ → GAMEPLAY CONNECTION

Correct answers should affect gameplay.

Use the existing reward system if available.

Examples:

CORRECT:

> +HP
> DAMAGE UP
> COMBO +1

WRONG:

> HP LOST
> BOSS ENRAGED

Do NOT add fake mechanics if the current code does not support them.

If the existing game already has rewards, improve their presentation instead of rewriting the system.

The quiz should feel like part of the battle.

---

# 17. QUIZ FEEDBACK

Make feedback immediate and visual.

Correct:

* subtle screen flash
* satisfying sound if sound exists
* score increment
* reward animation
* short "CORRECT" indicator

Wrong:

* short red feedback
* HP reduction
* boss reaction

Avoid giant modal dialogs.

The player should return to gameplay quickly.

---

# 18. LEADERBOARD

Make leaderboard feel like an arcade scoreboard.

Instead of a generic table:

```
    TOP 5
```

Use:

```
    ┌───────────────────────────┐

         HALL OF CHAMPIONS

    01   PLAYER NAME       1240
    02   PLAYER NAME       1180
    03   PLAYER NAME       1090
    04   PLAYER NAME        980
    05   PLAYER NAME        920

    └───────────────────────────┘
```

Use strong hierarchy.

Highlight the current player.

Do NOT use excessive badges, cards or gradients.

---

# 19. END GAME SCREEN

Create a satisfying arcade-style result.

WIN:

```
    VICTORY

    PHILOSOPHY MASTER

    SCORE
    1,240

    QUESTIONS
    16 / 18

    BOSS
    4 / 4

    [ PLAY AGAIN ]

    [ VIEW LEADERBOARD ]
```

LOSS:

```
    DEFEATED

    THE DIALECTIC CONTINUES...

    SCORE
    720

    [ TRY AGAIN ]
```

Keep it concise and dramatic.

---

# 20. TYPOGRAPHY

Use a strong typographic hierarchy.

Use:

* one display font for game titles
* one highly readable font for UI

Do NOT use many fonts.

Avoid:

* excessive bold
* excessive uppercase
* random font sizes

Typography should create the game identity.

---

# 21. COLOR SYSTEM

Use a controlled palette.

Suggested direction:

BACKGROUND:
very dark navy / charcoal

PRIMARY:
electric blue

ACCENT:
warm yellow

DANGER:
red

TEXT:
off-white

Avoid:

* rainbow gradients
* excessive purple
* neon glow everywhere

Glow should only be used for:

* important interactive elements
* attacks
* power-ups
* boss effects
* score feedback

---

# 22. SHAPES

Avoid making every component a huge rounded rectangle.

Use a mixture of:

* sharp corners
* slightly rounded panels
* HUD bars
* frames
* lines
* separators
* pixel/arcade-inspired geometry

This will make the interface feel more like a game.

---

# 23. ANIMATION

Add subtle purposeful animation.

Examples:

TITLE SCREEN:

* logo entrance
* subtle background movement

BUTTON:

* hover movement
* click feedback

PLAYER:

* hit feedback
* dash trail

BOSS:

* attack telegraph
* hit reaction
* phase transition

QUIZ:

* answer feedback
* score pop-up

LEADERBOARD:

* score count-up

Do NOT animate everything.

Avoid excessive:

* bouncing
* floating
* scaling
* glowing
* particle spam

Every animation should have a purpose.

---

# 24. RESPONSIVE DESIGN

Maintain support for:

* desktop
* projector
* classroom display
* smaller screens where currently supported

The game should prioritize desktop gameplay.

Do NOT redesign it into a mobile-first SaaS interface.

---

# 25. ACCESSIBILITY

Maintain:

* readable contrast
* readable font sizes
* clear button states
* keyboard controls
* visible focus states
* understandable error states

Do not sacrifice usability for visual effects.

---

# 26. PERFORMANCE

Because this is a game:

DO NOT add huge libraries just for visual effects.

Avoid unnecessary:

* animation libraries
* UI libraries
* heavy background effects
* huge image assets

Prefer CSS / Canvas / existing game rendering mechanisms where appropriate.

Keep gameplay responsive.

---

# 27. DO NOT OVERDESIGN

This is extremely important.

If an element does not help:

* gameplay
* navigation
* feedback
* immersion
* information hierarchy

remove it.

The target is:

> fewer elements + stronger visual identity

NOT:

> more elements + more effects.

---

# 28. CONTENT STYLE

Replace overly AI-generated marketing language.

Avoid phrases such as:

> "Trải nghiệm đỉnh cao..."

> "AI độc bản..."

> "Công nghệ tiên tiến..."

> "Sẵn sàng chinh phục..."

> "Hành trình triết học đầy kịch tính..."

Use concise game language.

Examples:

> ENTER THE ARENA

> CHAPTER I

> BATTLE READY

> CORRECT

> WRONG

> BOSS ENRAGED

> VICTORY

> DEFEATED

Use Vietnamese where it improves comprehension, but keep important game terminology concise.

---

# 29. DO NOT CHANGE THE EDUCATIONAL CONTENT

Do NOT alter the meaning of the philosophy questions.

Do NOT invent new philosophical facts.

Do NOT rewrite questions just to make the UI look better.

The educational content must remain academically accurate.

Only improve:

* presentation
* hierarchy
* interaction
* timing
* feedback

---

# 30. IMPLEMENTATION STRATEGY

Work incrementally.

### STEP 1

Audit the existing project.

### STEP 2

Identify the current screens.

### STEP 3

Redesign:

1. Title screen
2. Join screen
3. Lobby
4. Gameplay HUD
5. Quiz
6. Boss introduction
7. Victory / defeat
8. Leaderboard
9. Host panel

### STEP 4

Add consistent visual system.

### STEP 5

Add animations and feedback.

### STEP 6

Test every existing gameplay feature.

### STEP 7

Fix regressions.

---

# 31. REGRESSION CHECKLIST

Before finishing, verify:

* [ ] Player can join
* [ ] Name/MSSV works
* [ ] Lobby works
* [ ] QR works
* [ ] Host can start game
* [ ] Player movement works
* [ ] Jump works
* [ ] Dash works
* [ ] Shooting works
* [ ] Ultimate works
* [ ] Bosses work
* [ ] Quiz works
* [ ] Correct answer works
* [ ] Wrong answer works
* [ ] HP works
* [ ] Score works
* [ ] Progression works
* [ ] Game over works
* [ ] Victory works
* [ ] Leaderboard works
* [ ] Realtime functionality works
* [ ] Projector/fullscreen works

---

# 32. FINAL DESIGN TEST

After implementation, ask yourself:

### Does this look like:

A. an AI-generated educational website?

OR

B. a real indie arcade game that happens to teach philosophy?

The target is:

> **B**

If a UI element makes the project look more like a generic AI website, simplify or remove it.

---

# 33. MOST IMPORTANT DESIGN PRINCIPLE

Do NOT try to impress the user by showing how many features the game has.

Instead:

> **Make the player feel the game.**

The player should understand what to do within 3 seconds.

The player should reach gameplay quickly.

The UI should disappear into the experience.

The game should communicate through:

* visuals
* animation
* sound
* feedback
* hierarchy

rather than paragraphs of explanation.

---

# FINAL REQUIREMENT

Do NOT rebuild the game from scratch.

Do NOT remove existing functionality.

Do NOT replace working gameplay with mockups.

Do NOT turn it into a landing page.

Do NOT turn it into a SaaS dashboard.

Do NOT overuse AI terminology.

Do NOT overuse emojis.

Do NOT overuse gradients.

Do NOT overuse glassmorphism.

Do NOT add unnecessary dependencies.

**Redesign the existing game into a cohesive, polished, human-designed indie arcade experience while preserving its current gameplay and educational functionality.**
