import React from 'react';
import { Handle } from '@xyflow/react';
import { shallow } from 'zustand/shallow';
import { useStore } from '../store';

const selector = (id) => (store) => ({
  setGain: (e) => store.updateNode(id, { gain: +e.target.value }),
});

export default function Osc({ id, data }) {
  const store = useStore();
  const setGain = (e) => store.updateNode(id, { gain: +e.target.value });

  return (
    <div className='box'>
      <Handle type="target" position="top" />

      <p>
        Amp
      </p>
      <label>
        <p>Gain</p>
        <input
          className="nodrag"
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue={data.gain}
          onChange={setGain}
        />
        <p>{data.gain.toFixed(2)}</p>
      </label>

      <Handle type="source" position="bottom" />
    </div>
  );
}
