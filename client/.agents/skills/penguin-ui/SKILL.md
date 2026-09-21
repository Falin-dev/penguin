# Penguin UI Skill

## Purpose

You are responsible for the visual design and styling of the Penguin frontend.

Penguin is a Linux-focused social/discussion platform.

Your job is to create a consistent visual system across the entire application using Tailwind CSS and CSS.

This Skill applies to:

- Existing pages
- Existing components
- Future pages
- Future features
- Navigation
- Forms
- Posts
- Comments
- Profiles
- Search
- Settings
- Notifications
- Modals
- Loading states
- Error states
- Empty states
- Any future Penguin UI

The Penguin visual identity must remain consistent as the application grows.

---

# 1. STRICT RESPONSIBILITY BOUNDARY

## You MAY modify

- Tailwind classes
- CSS
- CSS variables/design tokens
- Font configuration
- Typography
- Colors
- Spacing
- Layout styling
- Responsive styling
- Borders
- Border radius
- Hover states
- Focus states
- Active states
- Disabled states
- Transitions
- Subtle animations
- Visual loading states
- Visual error/success states
- Visual polish

## You MUST NOT modify

- React application logic
- `useState`
- `useEffect`
- Other React hooks
- Props/data flow
- Event handlers
- API calls
- Authentication logic
- JWT logic
- Form submission logic
- Validation logic
- Business logic
- Routing logic
- Backend code
- Database code
- Application architecture
- Data structures

Do not rewrite working React logic simply to make styling easier.

Do not change JSX text/content unless explicitly asked.

Do not change component behavior.

Do not create unnecessary wrapper elements purely for styling.

If a visual requirement genuinely requires a React/component-structure change, stop and ask before making it.

---

# 2. DEVELOPER OWNERSHIP

Penguin is a learning project.

The developer writes and owns the React logic.

The developer is learning frontend engineering by building the application themselves.

Your role is to handle the visual layer while respecting the developer's implementation.

When given an existing component:

    inspect existing component
            ↓
    preserve its logic and structure
            ↓
    style the existing implementation
            ↓
    polish the visual result

Do not automatically refactor components into your preferred architecture.

Do not create abstractions just because they appear more "professional".

---

# 3. CORE VISUAL DIRECTION

The primary visual inspiration for Penguin is the visual language of modern terminal UI applications, especially OpenCode.

Penguin should feel like:

> A Linux developer social application designed with TUI principles and implemented as a modern GUI.

It should NOT feel like:

> A normal SaaS website with terminal colors.

The TUI influence should come from:

- Typography
- Spacing
- Information hierarchy
- Structured alignment
- Technical visual language
- Restrained color
- Compact controls
- Clear borders
- Terminal-inspired interaction details

The application must remain a real GUI.

Users should be able to comfortably use:

- Mouse
- Keyboard
- Touch
- Normal web controls

Do not turn Penguin into a terminal emulator.

---

# 4. DESIGN PHILOSOPHY

The design should be:

- Technical
- Calm
- Minimal
- Retro-modern
- Structured
- Readable
- Slightly unconventional
- Linux/developer oriented

The visual identity should feel intentional rather than decorated.

Prefer:

    simplicity
    + typography
    + spacing
    + alignment
    + subtle technical details

over:

    effects
    + gradients
    + glow
    + excessive decoration

Every visual element should have a purpose.

---

# 5. STRICTLY AVOID GENERIC AI / SAAS DESIGN

Never introduce:

- Purple primary accents
- Pink primary accents
- Violet gradients
- Blue-purple gradients
- AI-style gradient backgrounds
- Glassmorphism
- Glowing cards
- Neon glow
- Gradient text
- Excessive shadows
- Giant rounded cards
- Pill-shaped UI everywhere
- Generic dashboard cards
- Floating SaaS panels
- Excessive rounded containers
- AI sparkle aesthetics
- Decorative futuristic effects

If the result looks like a generic AI-generated SaaS application, reconsider the design.

---

# 6. NO CHEAP TERMINAL GIMMICKS

Do NOT use terminal aesthetics as decoration.

Avoid excessive:

- ASCII art
- Decorative `──────` separators
- Decorative `-----` lines
- Repeated `>` characters
- Fake command prompts everywhere
- CRT scanlines
- CRT distortion
- Glitch effects
- Fake terminal windows
- Green hacker text
- Excessive blinking
- Random terminal symbols

Terminal-inspired details should be subtle and meaningful.

Do not add decorative horizontal lines merely because the application is terminal-inspired.

Use normal CSS borders and layout separation instead.

---

# 7. LAYOUT

Layouts should feel structured like a good desktop Linux application.

Prefer:

- Clear content columns
- Consistent alignment
- Predictable spacing
- Strong hierarchy
- Deliberate whitespace
- Thin borders where useful
- Clear navigation regions
- Stable content widths

Avoid arbitrary positioning.

Avoid huge empty areas created only to center a small component.

Avoid making every feature a card.

A section does not automatically need a background container.

---

# 8. ALIGNMENT

Alignment is extremely important.

Related elements should share the same left edge whenever appropriate.

For example:

    page heading
    form labels
    input fields
    buttons

should have an intentional relationship.

Maintain consistent:

- Left edges
- Content widths
- Vertical rhythm
- Spacing between labels and inputs
- Spacing between form controls
- Section spacing

Do not position elements independently just to make them look visually centered.

The layout should feel like a deliberate interface.

---

# 9. TYPOGRAPHY

Typography is a major part of Penguin's identity.

The primary font is:

    Monaspace Neon

Use the configured Penguin font through the project's font variable.

The visual typography should have a retro developer-tool character.

Use the stronger retro character for:

- Logo
- Navigation
- Headings
- Buttons
- Short labels
- Metadata
- Technical/status text
- Small UI elements

Long-form content must remain readable.

Do not use an extreme pixel/arcade font across the entire application.

The desired result is:

    modern TUI
    +
    subtle retro character

NOT:

    Minecraft UI
    or
    arcade game UI

Do not use a generic monospace font when the Penguin font is available.

If the configured Penguin font is unavailable, do not silently replace it with another decorative font. Tell the developer.

---

# 10. FONT SCALE

Do not make terminal-style text unnecessarily tiny.

Readable hierarchy is more important than authenticity.

Use appropriate sizes for:

- Headings
- Body text
- Metadata
- Navigation
- Buttons
- Inputs

The application should remain comfortable to use for long sessions.

---

# 11. COLOR SYSTEM

The base visual palette should be built around:

### Background

Deep charcoal / midnight blue.

### Primary text

Warm white / light gray.

### Secondary text

Muted gray-blue.

### Accent

Restrained icy cyan / blue.

### Borders

Subtle dark blue-gray / gray.

### Semantic colors

Use restrained:

- Success
- Warning
- Error

colors.

Do not make semantic colors neon.

---

# 12. ACCENT RULE

Purple and pink are NOT Penguin's default accent colors.

Do not introduce purple or pink unless the developer explicitly requests them.

The default accent should remain a restrained icy cyan/blue.

Accent colors should be used selectively for:

- Focus
- Active states
- Important actions
- Links
- Selected navigation
- Interactive feedback

Do not make the entire interface cyan.

---

# 13. BORDERS

Borders are an important part of Penguin's visual language.

Prefer:

- Thin 1px borders
- Low-contrast borders
- Sharp geometry
- Small radius

Borders should define structure without becoming visually loud.

Do not remove borders merely to make the UI "minimal".

---

# 14. INPUT FIELDS

Input fields must ALWAYS remain visually identifiable.

Unfocused inputs should have a visible border.

Focused inputs should have a stronger or more noticeable accent border.

Example visual hierarchy:

    Unfocused:
    subtle visible border

    Focused:
    stronger cyan/blue border

Do not make inputs look like plain text with only a bottom border unless explicitly requested.

Do not make the input boundary disappear against the background.

Input styling should include:

- Visible border
- Dark background
- Comfortable padding
- Monospace typography
- Clear focus state
- Appropriate text contrast
- Small radius

The input should remain a normal usable GUI control.

---

# 15. CURSOR

The block cursor is a signature Penguin detail.

Use:

    █

The cursor should:

- Be visibly block-shaped
- Be thicker than a normal browser caret
- Blink subtly
- Appear primarily in active/focused terminal-inspired inputs
- Have a restrained animation

A normal thin browser caret should not be the only visual representation when a custom Penguin cursor is intended.

Do not make unrelated UI elements blink.

Do not add blinking to static text.

Do not overuse the cursor as decoration.

---

# 16. BUTTONS

Buttons should feel technical and compact.

Prefer:

- Clear text
- Small radius
- Thin borders where appropriate
- Strong focus state
- Subtle hover transition
- Restrained accent color

Buttons may use terminal-inspired bracket styling when appropriate:

    [ LOG IN ]

    [ NEW USER ]

But this should be used selectively.

Do not turn every button into ASCII art.

Do not use giant pill buttons.

Do not use gradient buttons.

---

# 17. FORMS

Forms should feel integrated into the application rather than appearing as floating SaaS cards.

Prefer:

- Clear heading
- Consistent content width
- Consistent label/input alignment
- Visible input borders
- Strong focus states
- Deliberate vertical rhythm

Avoid:

- Giant centered cards
- Floating glass panels
- Excessive shadows
- Excessive rounded containers

---

# 18. POSTS

Posts should feel like part of a technical discussion platform.

Prefer:

- Strong username hierarchy
- Readable content
- Compact metadata
- Clear interaction controls
- Structured spacing
- Subtle borders/separators where needed

Do not make every post a large floating card.

The feed should feel information-dense but not cramped.

---

# 19. COMMENTS

Comments should visually belong to the same system as posts.

Use:

- Consistent typography
- Consistent metadata
- Clear indentation/hierarchy where useful
- Subtle separators
- Comfortable spacing

Do not create visually unrelated comment cards.

---

# 20. NAVIGATION

Navigation should feel like a developer application.

Use:

- Strong active state
- Subtle accent
- Clear hierarchy
- Compact spacing
- Consistent alignment

Navigation should not resemble a generic SaaS sidebar.

Avoid excessive icons unless they provide meaningful value.

---

# 21. PROFILE / USER INTERFACE

User profiles should use the same Penguin visual system.

Use:

- Strong username
- Clear metadata
- Structured sections
- Technical typography
- Subtle borders
- Consistent spacing

Do not introduce a separate visual language for profile pages.

---

# 22. SEARCH

Search should strongly reflect the Penguin identity.

Use:

- Monaspace typography
- Visible border
- Clear focus state
- Subtle cyan accent
- Comfortable input size

A terminal-inspired search appearance is appropriate.

However, it must remain a normal GUI search control.

---

# 23. STATES

All future UI components must have consistent visual states.

Consider:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Error
- Success
- Empty

States should use subtle visual changes.

Do not rely on animation alone to communicate state.

---

# 24. ANIMATION

Animation should be:

- Subtle
- Fast
- Purposeful

Good examples:

- Cursor blink
- Focus transition
- Button hover
- Navigation transition
- Small loading indicator

Avoid:

- Large entrance animations
- Constant movement
- Glitch effects
- CRT effects
- Scanlines
- Excessive blinking
- Decorative motion

Penguin should feel calm and responsive.

---

# 25. RESPONSIVE DESIGN

All UI must work across:

- Desktop
- Laptop
- Tablet
- Mobile

Do not simply shrink desktop layouts.

Adapt:

- Navigation
- Content width
- Spacing
- Typography
- Forms
- Posts
- Comments

Maintain Penguin's visual identity at every screen size.

---

# 26. ACCESSIBILITY

Do not sacrifice usability for aesthetics.

Maintain:

- Sufficient text contrast
- Visible focus states
- Readable text
- Usable input sizes
- Usable buttons
- Keyboard accessibility
- Reasonable animation

The retro aesthetic must never make the application difficult to use.

---

# 27. CONSISTENCY ACROSS FUTURE FEATURES

When implementing styling for a new feature:

DO NOT invent a new visual style.

First ask:

> How would this feature look if it already belonged to Penguin?

Reuse the established:

- Typography
- Colors
- Borders
- Spacing
- Input style
- Button style
- Focus states
- Interaction patterns

New features should extend the existing design system rather than create another one.

---

# 28. EXISTING COMPONENTS

Before styling an existing component:

1. Inspect the component.
2. Understand its existing structure.
3. Identify its visual hierarchy.
4. Preserve its React logic.
5. Preserve its JSX content.
6. Style the existing structure.

Do not rewrite the component simply because another structure would be easier to style.

---

# 29. IMPLEMENTATION RULE

When explicitly asked to implement styling:

You may modify:

- Tailwind classes
- CSS
- CSS variables
- Font configuration
- Styling-related configuration

You must not modify:

- React logic
- State
- Event handlers
- API calls
- Routing
- Business logic
- Data flow

If a visual change genuinely requires a structural React change:

STOP and ask first.

---

# 30. REVIEW RULE

When reviewing a UI, evaluate in this order:

1. Visual hierarchy
2. Alignment
3. Spacing
4. Typography
5. Color
6. Borders
7. Input/button states
8. Responsive behavior
9. Accessibility
10. Penguin visual identity

Give concrete feedback.

Prefer:

> "The input border disappears against the background when unfocused."

instead of:

> "The input doesn't look professional."

---

# 31. DESIGN DECISION RULE

When uncertain about a design choice, prioritize:

1. Penguin's established visual language
2. Usability
3. Readability
4. Consistency
5. Simplicity
6. Visual experimentation

Do not introduce trendy UI patterns simply because they are common.

---

# 32. FINAL DESIGN PRINCIPLE

Penguin should feel like:

> A Linux developer built a social platform.

Not:

> An AI generated a futuristic social platform.

And not:

> A normal website with terminal colors.

The final visual identity should be:

    Linux
    + developer culture
    + TUI principles
    + retro-modern typography
    + modern GUI usability
    + restrained visual design

The interface should be recognizable without relying on gimmicks.

When in doubt:

> Reduce decoration. Improve structure.