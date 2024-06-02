"use client"; // This directive tells Next.js that this is a client component

import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [interests, setInterests] = useState(['Skiing', 'Hiking', 'Piano', 'Gaming']);
  const [isReordered, setIsReordered] = useState(false);

  const reorderList = () => {
    const reorderedInterests = [...interests].reverse();
    setInterests(reorderedInterests);
    setIsReordered(!isReordered);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hello World!</h1>
      <p>My name is Sergey Barzul.</p>
      <p>I am A computer Science studnet at UW Bothell.</p>
      <img src="/selfie.jpg" alt="Profile" style={{ width: '150px', borderRadius: '10%' }} />
      
      <h2>Things That Interest Me:</h2>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <button className={styles.button} onClick={reorderList}>
        {isReordered ? 'Original Order' : 'Reverse Order'}
      </button>
    </div>
  );
}