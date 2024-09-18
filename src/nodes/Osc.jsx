import React from 'react';
import { Handle } from '@xyflow/react';
import { useStore } from '../store';

import '@xyflow/react/dist/style.css';
import './styles.css';


export default function Osc({ id, data }) {
  const store = useStore()
  const setFrequency = (e) => store.updateNode(id, { frequency: +e.target.value });


  return (
    <div className='box'>
      <div>
        <p>Oscillator Node</p>
 
        <label>
          <span>Frequency</span>
          <input
            className="nodrag"
            type="range"
            min="10"
            max="1000"
            defaultcheckedvalue={data.frequency} 
            onChange={setFrequency} />
          <span>{data.frequency}Hz</span>
        </label>
 
        <label>
          <span>Waveform</span>
          <select className="nodrag" defaultValue={data.type} onChange={store.setType}>
            <option value="sine">sine</option>
            <option value="triangle">triangle</option>
            <option value="sawtooth">sawtooth</option>
            <option value="square">square</option>
          </select>
        </label>
      </div>
      <Handle type="source" position="bottom" />
    </div>
  );
};