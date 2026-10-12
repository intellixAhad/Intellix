export const v_capabilities: {
  index: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    index: "01",
    title: "AI Voice Calls",
    description: "Sub-500ms AI voice calls in 30+ languages, built on Verbosa's own full-stack voice infrastructure — not a third-party API.",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.2a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    index: "02",
    title: "Lead Generation",
    description: "Pulls from 22+ data sources to find and qualify prospects that match your ideal customer profile automatically.",
    icon: (
      <>
        <circle cx={11} cy={11} r={8} />
        <line x1={21} y1={21} x2={16.65} y2={16.65} />
      </>
    ),
  },
  {
    index: "03",
    title: "Email Sequences",
    description: "Automated, personalized outbound email campaigns that follow up on calls and chats without manual work.",
    icon: (
      <>
        <rect x={2} y={4} width={20} height={16} rx={2} />
        <path d="M22 6l-10 7L2 6" />
      </>
    ),
  },
  {
    index: "04",
    title: "Omnichannel Chat",
    description: "Auto-replies on WhatsApp, Instagram, and Messenger — keeping conversations moving wherever prospects are.",
    icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
  },
];

export const f_capabilities: {
  index: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    index: "01",
    title: "Passkey-only sign-in",
    description: "Authentication runs entirely on WebAuthn. There is no password field to phish, reuse, or brute-force.",
    icon: (
      <>
        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
        <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
        <path d="M2 12a10 10 0 0 1 18-6" />
        <path d="M2 16h.01" />
        <path d="M21.8 16c.2-2 .131-5.354 0-6" />
        <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
        <path d="M8.65 22c.21-.66.45-1.32.57-2" />
        <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
      </>
    ),
  },
  {
    index: "02",
    title: "Secure meetings",
    description: "DTLS-SRTP encrypted calls with per-participant forensic watermarks, geofenced rooms, recaps and recordings.",
    icon: (
      <>
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x={2} y={6} width={14} height={12} rx={2} />
      </>
    ),
  },
  {
    index: "03",
    title: "Encrypted messaging",
    description: "Direct and group chats are encrypted in the browser. The server stores only ciphertext, with optional ephemeral threads.",
    icon: (
      <>
        <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    index: "04",
    title: "Encrypted file sharing",
    description: "Files are encrypted before upload and the key lives only in the share link's URL fragment. Expiry, download caps and revocation included.",
    icon: (
      <>
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <rect x={2} y={13} width={8} height={5} rx={1} />
        <path d="M8 13v-2a2 2 0 1 0-4 0v2" />
      </>
    ),
  },
  {
    index: "05",
    title: "Tamper-evident audit",
    description: "Every administrative and access event is written to an append-only, hash-chained log that can be re-verified on demand.",
    icon: (
      <>
        <path d="M15 12h-5" />
        <path d="M15 8h-5" />
        <path d="M19 17V5a2 2 0 0 0-2-2H4" />
        <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
      </>
    ),
  },
  {
    index: "06",
    title: "Web and mobile",
    description: "A responsive web app and an Expo mobile app share one hardened API. Full native passkey and call support is planned.",
    icon: (
      <>
        <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
        <path d="M12 18h.01" />
      </>
    ),
  },
];
