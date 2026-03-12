A branded cookie consent popup for BoK that slides up from the bottom of the screen.

**How it works:**
- It appears automatically after a short delay when the page loads
- Users can expand a "Manage preferences" section to see and control three cookie types — Necessary (always on), Analytics, and Personalisation
- Three action buttons let users Accept All, Save their custom choices, or Decline non-essential cookies
- After a choice is made, the banner slides away and a confirmation message briefly appears

**Built with** React hooks — `useState` for toggles and visibility, `useEffect` for the load delay — and styled entirely with inline styles for reliable rendering.