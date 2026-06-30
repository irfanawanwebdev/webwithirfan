/* Icons — simple stroke glyphs shared across components.
   Ported from design/js/icons.jsx as a typed React icon set. */
import type { ReactNode } from 'react';

export interface IconProps {
  size?: number;
  /** stroke width (default 1.7) */
  sw?: number;
  /** when true, render as a filled glyph (no stroke) */
  fill?: boolean;
}

function Ic({
  size = 24,
  sw = 1.7,
  fill = false,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill ? 'currentColor' : 'none'}
      stroke={fill ? 'none' : 'currentColor'}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const Icons = {
  wp: (p: IconProps) => (
    <Ic {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3 12c0 .8 2.5 1 4 7M21 12c0 1-2.4 1.5-4 7M9 3.5C7.5 7 7 10 9 20.4M15 3.5C16.5 7 17 10 15 20.4" />
    </Ic>
  ),
  code: (p: IconProps) => (
    <Ic {...p}>
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </Ic>
  ),
  ai: (p: IconProps) => (
    <Ic {...p}>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 8V4M9 4h6M9 14h.01M15 14h.01M2 13v3M22 13v3" />
    </Ic>
  ),
  agent: (p: IconProps) => (
    <Ic {...p}>
      <circle cx="12" cy="6" r="2.4" />
      <circle cx="5" cy="18" r="2.4" />
      <circle cx="19" cy="18" r="2.4" />
      <path d="M12 8.4v3.6M12 12l-6 4M12 12l6 4" />
    </Ic>
  ),
  seo: (p: IconProps) => (
    <Ic {...p}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4-4M8.5 11l2 2 4-4" />
    </Ic>
  ),
  plugin: (p: IconProps) => (
    <Ic {...p}>
      <path d="M10 3v3M14 3v3M7 9h10v4a5 5 0 0 1-10 0zM12 18v3" />
    </Ic>
  ),
  bolt: (p: IconProps) => (
    <Ic {...p}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
    </Ic>
  ),
  gauge: (p: IconProps) => (
    <Ic {...p}>
      <path d="M12 14 16 9M3.5 18a9 9 0 1 1 17 0" />
      <circle cx="12" cy="14" r="1.3" fill="currentColor" stroke="none" />
    </Ic>
  ),
  search: (p: IconProps) => (
    <Ic {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </Ic>
  ),
  star: (p: IconProps) => (
    <Ic {...p} fill>
      <path
        d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 17l-5.3 2.6 1-5.8-4.2-4.1 5.9-.9z"
        stroke="none"
      />
    </Ic>
  ),
  arrow: (p: IconProps) => (
    <Ic {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Ic>
  ),
  arrowUR: (p: IconProps) => (
    <Ic {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Ic>
  ),
  cmd: (p: IconProps) => (
    <Ic {...p}>
      <path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3z" />
    </Ic>
  ),
  home: (p: IconProps) => (
    <Ic {...p}>
      <path d="M4 11 12 4l8 7M6 10v9h12v-9" />
    </Ic>
  ),
  layers: (p: IconProps) => (
    <Ic {...p}>
      <path d="M12 3 3 8l9 5 9-5zM3 13l9 5 9-5M3 18l9 5 9-5" />
    </Ic>
  ),
  doc: (p: IconProps) => (
    <Ic {...p}>
      <path d="M7 3h7l4 4v14H7zM14 3v4h4" />
    </Ic>
  ),
  mail: (p: IconProps) => (
    <Ic {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Ic>
  ),
  type: (p: IconProps) => (
    <Ic {...p}>
      <path d="M4 7V5h16v2M9 19h6M12 5v14" />
    </Ic>
  ),
  palette: (p: IconProps) => (
    <Ic {...p}>
      <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h1a3 3 0 0 0 3-3c0-3.9-3.6-7-8-7z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="10" r="1" fill="currentColor" stroke="none" />
    </Ic>
  ),
  grid: (p: IconProps) => (
    <Ic {...p}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </Ic>
  ),
  menu: (p: IconProps) => (
    <Ic {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Ic>
  ),
  calendar: (p: IconProps) => (
    <Ic {...p}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </Ic>
  ),
  terminal: (p: IconProps) => (
    <Ic {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </Ic>
  ),
  flow: (p: IconProps) => (
    <Ic {...p}>
      <rect x="3" y="9" width="5" height="6" rx="1.5" />
      <rect x="16" y="4" width="5" height="6" rx="1.5" />
      <rect x="16" y="14" width="5" height="6" rx="1.5" />
      <path d="M8 12h4v-5h4M12 12v5h4" />
    </Ic>
  ),
  spark: (p: IconProps) => (
    <Ic {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </Ic>
  ),
  check: (p: IconProps) => (
    <Ic {...p}>
      <path d="m5 12 5 5L20 7" />
    </Ic>
  ),
  users: (p: IconProps) => (
    <Ic {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.8M21 20a6 6 0 0 0-4-5.6" />
    </Ic>
  ),
  github: (p: IconProps) => (
    <Ic {...p} fill>
      <path
        stroke="none"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
      />
    </Ic>
  ),
  x: (p: IconProps) => (
    <Ic {...p} fill>
      <path
        stroke="none"
        d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.1L8 21H5l7.5-8.5L4.5 3H11l4.5 5.6zm-1 16h1.7L8.1 4.8H6.3z"
      />
    </Ic>
  ),
  linkedin: (p: IconProps) => (
    <Ic {...p} fill>
      <path
        stroke="none"
        d="M4.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM9 9h2.9v1.6h.04c.4-.76 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V21h-3v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z"
      />
    </Ic>
  ),
  facebook: (p: IconProps) => (
    <Ic {...p} fill>
      <path
        stroke="none"
        d="M24 12a12 12 0 1 0-13.875 11.854v-8.385H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.956.926-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385A12.003 12.003 0 0 0 24 12z"
      />
    </Ic>
  ),
  phone: (p: IconProps) => (
    <Ic {...p}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v4a1 1 0 0 1-1.1 1A16 16 0 0 1 3 5.1 1 1 0 0 1 4 4z" />
    </Ic>
  ),
  arrowUp: (p: IconProps) => (
    <Ic {...p}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </Ic>
  ),
  whatsapp: (p: IconProps) => (
    <Ic {...p} fill>
      <path
        stroke="none"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.05 20.13h-.004a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"
      />
    </Ic>
  ),
} as const;

export type IconName = keyof typeof Icons;
