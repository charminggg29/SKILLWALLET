import React from 'react';

export default function Loader() {
  return (
    <div className="loader" aria-busy="true">
      <div className="muted">Loading posts...</div>
    </div>
  );
}

