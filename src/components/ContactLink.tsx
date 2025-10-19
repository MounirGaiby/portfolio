import React from 'react';

interface ContactLinkProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
  hoverColor?: string;
}

export const ContactLink: React.FC<ContactLinkProps> = ({ icon, text, href, hoverColor }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        style={{
          '--hover-color': hoverColor || '#00ffff'
        } as React.CSSProperties}
      >
        <span className="contact-link-icon">{icon}</span>
        <span>{text}</span>
      </a>
    );
  }

  return (
    <div className="contact-link">
      <span className="contact-link-icon">{icon}</span>
      <span>{text}</span>
    </div>
  );
};