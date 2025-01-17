import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

export const HeaderBadges = () => {
  return (
    <BrowserOnly>
      {() => (
        <div className="header-badges">
          <a className="header-badge" href={`https://github.com/ArbitrumFoundation/docs/issues/new?title=Docs update request: ${new URL(window.location.href).pathname}&body=Source: ${window.location.href}%0A%0ARequest: (how can we help?)`}>
            <span className="badge-avatar emoji-avatar">✏️</span>
            <span className="badge-label">Request an update</span>
          </a>
        </div>
      )}
    </BrowserOnly>
  );
};