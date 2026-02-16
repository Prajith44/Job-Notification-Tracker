# KodNest Premium Build System

**Design system for a serious B2C product.** One mind. No drift.

---

## 1. Design Philosophy

| Principle | Meaning |
|-----------|--------|
| **Calm** | No visual noise. Space and clarity over density. |
| **Intentional** | Every color, size, and space has a reason. |
| **Coherent** | Same patterns everywhere. No one-off treatments. |
| **Confident** | Clear hierarchy, readable type, decisive actions. |

**Avoid:** Flashy, loud, playful, hackathon-style. No gradients, glassmorphism, neon colors, or animation noise.

---

## 2. Color System

**Maximum 4 colors across the entire system.**

| Role | Value | Usage |
|------|--------|--------|
| **Background** | `#F7F6F3` | Page and card backgrounds (off-white). |
| **Primary text** | `#111111` | Headings and body copy. |
| **Accent** | `#8B0000` | Primary actions, key highlights, links. |
| **Success** | Muted green | Success states, confirmations, completed. |
| **Warning** | Muted amber | Warnings, in-progress, attention. |

Success and Warning are the only semantic colors beyond Background, Primary text, and Accent. Use them sparingly.

**No:** Gradients, neon, pure black, decorative colors.

---

## 3. Typography

| Element | Font | Size | Line height | Notes |
|---------|------|------|-------------|--------|
| **Headings** | Serif | Large | Generous spacing | Confident, one clear level per section. |
| **Body** | Sans-serif | 16–18px | 1.6–1.8 | Clean, readable. |
| **Text blocks** | — | — | — | Max width **720px**. |

No decorative fonts. No random sizes. Stick to a simple scale (e.g. 16, 18, 24, 32, 40).

---

## 4. Spacing System

**Only these values:** `8px` · `16px` · `24px` · `40px` · `64px`

Never use arbitrary spacing (e.g. 13px, 27px). Whitespace is part of the design.

| Token | Value | Typical use |
|-------|--------|-------------|
| `space-1` | 8px | Tight gaps, icon padding |
| `space-2` | 16px | Default gap, list spacing |
| `space-3` | 24px | Section spacing, card padding |
| `space-4` | 40px | Between major blocks |
| `space-5` | 64px | Page-level vertical rhythm |

---

## 5. Global Layout Structure

Every page follows this order, top to bottom:

```
[ Top Bar ]
[ Context Header ]
[ Primary Workspace (70%)  |  Secondary Panel (30%) ]
[ Proof Footer ]
```

### 5.1 Top Bar

- **Left:** Project name (text only, no logo clutter).
- **Center:** Progress indicator — “Step X / Y” (clear, minimal).
- **Right:** Status badge — one of: **Not Started** · **In Progress** · **Shipped**.

Styling: minimal, one row, same background as page or subtle border-bottom. No shadows.

### 5.2 Context Header

- **Headline:** Large serif, one line.
- **Subtext:** One line, sans-serif, clarifies purpose.
- No hype language. Clear and direct.

### 5.3 Primary Workspace (70% width)

- Main product interaction lives here.
- Clean cards, predictable components.
- No crowding. Use the spacing scale.

### 5.4 Secondary Panel (30% width)

- **Step explanation** (short).
- **Copyable prompt box** (monospace or clear font).
- **Actions:** Copy · Build in Lovable · It Worked · Error · Add Screenshot.
- Calm styling. No competing emphasis.

### 5.5 Proof Footer (persistent bottom section)

Checklist style:

- □ UI Built  
- □ Logic Working  
- □ Test Passed  
- □ Deployed  

Each checkbox requires user proof input. Simple, scannable, part of the layout on every page.

---

## 6. Component Rules

| Component | Rule |
|-----------|------|
| **Primary button** | Solid deep red (`#8B0000`). One primary per context. |
| **Secondary button** | Outlined; same border radius and hover behavior as primary. |
| **Hover / focus** | Same transition and border radius everywhere (see Interactions). |
| **Inputs** | Clean borders, no heavy shadows. Clear focus state (e.g. border color change). |
| **Cards** | Subtle border, no drop shadows. Padding from spacing scale (e.g. 24px). |

No mixed border radii. Pick one (e.g. 4px or 6px) and use it globally for buttons, inputs, cards.

---

## 7. Interaction Rules

- **Transitions:** 150–200ms, ease-in-out only.
- **No:** Bounce, parallax, decorative motion, or animation noise.

Use motion only for feedback (e.g. hover, focus, loading).

---

## 8. Error & Empty States

| State | Rule |
|-------|------|
| **Errors** | Explain what went wrong and how to fix it. Never blame the user. |
| **Empty** | Provide the next action. Never feel dead or abandoned. |

Tone: helpful and clear. No drama, no guilt.

---

## 9. Summary

- **Colors:** 4 max (background, primary text, accent, plus semantic success/warning).
- **Type:** Serif headlines, sans-serif body, 16–18px, max 720px for text.
- **Space:** 8, 16, 24, 40, 64px only.
- **Layout:** Top Bar → Context Header → 70/30 Workspace/Panel → Proof Footer.
- **Components:** Consistent radius, one primary (solid red), one secondary (outline).
- **Motion:** 150–200ms ease-in-out only.

Everything must feel like one mind designed it. No visual drift.
