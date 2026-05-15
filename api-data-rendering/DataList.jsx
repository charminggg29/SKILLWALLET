import React from 'react';

export default function DataList({ items }) {
  return (
    <ul>
      {items.map((post) => (
        <li key={post.id}>
          <div className="title">{post.title}</div>
          <div className="meta">Post ID: {post.id}</div>
          <div className="muted">{post.body}</div>
        </li>
      ))}
    </ul>
  );
}

