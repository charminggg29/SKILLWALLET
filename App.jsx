import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import DataList from './components/DataList';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPosts() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (e) {
        if (!cancelled) setError(e?.message ?? 'Failed to load data');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="card">
      <h1>API Data Rendering (React)</h1>

      {loading && <Loader />}

      {!loading && error && (
        <div className="error" role="alert">
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Error</div>
          <div className="muted">{error}</div>
        </div>
      )}

      {!loading && !error && <DataList items={data} />}
    </div>
  );
}

