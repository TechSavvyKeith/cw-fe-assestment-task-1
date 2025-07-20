[Example output - you should start from scratch]

## Changes Made

### `App.tsx`

1. **Component Decomposition**
   - Issue: Entire UI was inside a single flat component (`App.tsx`).
   - Fix: Split layout into meaningful, reusable components: `Header`, `HeroSection`, `SearchBox`, and `TagList`.

2. **Component Renaming**
   - Issue: Non-descriptive names (`BoxArea108`, `BoxArea97`) reduced readability and maintainability.
   - Fix: Renamed:
     - `BoxArea108` → `SearchBox`
     - `BoxArea97` → `HeroSection`

---

### `SearchBox.tsx`

1. **Debounced Input**
   - Issue: Input triggered search on every keystroke.
   - Fix: Introduced `useDebounce` hook to delay search trigger for better UX.

2. **Search Button Behavior**
   - Issue: Button click did not perform search.
   - Fix: Connected `onClick` to trigger `onSearch`.

3. **Keyboard Accessibility**
   - Issue: Pressing `Enter` did not trigger a search.
   - Fix: Added `onKeyDown` to call search on `Enter`.

4. **Accessibility**
   - Issue: Input and icon lacked proper accessibility labels.
   - Fix: Added `aria-label` to input and `aria-hidden` to icon.

---

### `HeroSection.tsx`

1. **Visual Improvements**
   - Issue: Background image appeared blurry and too dark.
   - Fix: Removed `backdrop-blur`, adjusted overlay to `bg-black/30`, added `brightness-110` for clarity.

2. **Mobile Detection Hook**
   - Issue: `useIsMobile` hook was unused.
   - Fix: Used `useEffect` to log device type — ready for future responsive logic.

---

### `Header.tsx`

1. **Semantic Structure**
   - Issue: Logo was not in a semantic container.
   - Fix: Wrapped logo inside `<header>` with proper spacing and alignment.

2. **Styling Adjustments**
   - Issue: Inconsistent spacing on mobile eg seearchbar was appearing on top of headername
   - Fix: Improved padding and layout responsiveness.

---

### `TagList.tsx`

1. **Improper Key Usage**
   - Issue: Used array index as `key`, which is unreliable.
   - Fix: Used tag name (`tag`) directly as `key`.

2. **Responsive Layout**
   - Issue: Tag list overflowed on small screens.
   - Fix: Made list horizontally scrollable and applied `flex-nowrap`.

---

### `hooks/useDebounce.ts`

1. **Custom Hook Implementation**
   - Issue: No mechanism to reduce rapid search input.
   - Fix: Created `useDebounce` hook to optimize input handling.
