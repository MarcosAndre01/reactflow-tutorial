import React from 'react';
import { Handle } from '@xyflow/react';
import { useStore } from '../store';
 
 
export default function Out({ id, data }) {
  const { isRunning, toggleAudio } = useStore();
 
  return (
    <div className='box'>
      <Handle type="target" position="top" />
 
      <div>
        <p>Output Node</p>
 
        <button onClick={toggleAudio}>
          {isRunning ? (
            <span role="img" aria-label="mute">
              🔇
            </span>
          ) : (
            <span role="img" aria-label="unmute">
              🔈
            </span>
          )}
        </button>
      </div>
    </div>
  );
}