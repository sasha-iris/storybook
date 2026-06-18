import React from 'react';

interface QRFrameProps {
  /** QR code SVG/image content to render inside the frame. */
  children: React.ReactNode;
  className?: string;
}

/**
 * Branded QR code frame — wraps a QR code SVG in the Iris frame styling.
 *
 * USE FOR: login QR codes, TOTP setup QR codes, mobile app deep-link QR codes
 * REPLACES MUI: custom <Box> wrapper with border-radius styling
 * DO NOT USE FOR: generic images — the frame has QR-specific proportions
 *
 * Provide the QR code as children (typically a QR SVG from a library like `qrcode.react`).
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * import QRCode from 'qrcode.react';
 * <QRFrame><QRCode value={totpUri} size={160} /></QRFrame>
 */
export function QRFrame({ children, className }: QRFrameProps) {
  return (
    <span className={['qr-frame', className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
}
