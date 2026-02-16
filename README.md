# Job Notification Tracker

A premium SaaS application built with the **KodNest Premium Build System** design system.

## Design System

This project uses a calm, intentional, and coherent design system focused on:
- Minimal color palette (off-white background, deep red accent)
- Serif headings with clean sans-serif body text
- Consistent spacing scale (8px, 16px, 24px, 40px, 64px)
- Predictable component patterns

See [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) for complete design specifications.

## Project Structure

```
JobwebApp/
├── index.html              # Main application preview
├── base-styles.css         # Design system implementation
├── design-tokens.css       # CSS custom properties
├── DESIGN-SYSTEM.md        # Design system documentation
└── README.md              # This file
```

## Running Locally

1. Start a simple HTTP server:
   ```bash
   python -m http.server 5500
   ```

2. Open your browser to:
   ```
   http://localhost:5500/index.html
   ```

## Layout Structure

Every page follows this structure:
- **Top Bar**: Project name, progress indicator, status badge
- **Context Header**: Large serif headline with subtext
- **Primary Workspace (70%)**: Main product interaction area
- **Secondary Panel (30%)**: Step explanations and actions
- **Proof Footer**: Completion checklist

## License

MIT
