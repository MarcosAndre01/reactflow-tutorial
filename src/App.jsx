import React from 'react';
import { ReactFlow, ReactFlowProvider, Background, Panel } from '@xyflow/react';
import { shallow } from 'zustand/shallow';
import { useStore } from './store';

import Osc from './nodes/Osc';
import Amp from './nodes/Amp';
import Out from './nodes/Out';

import '@xyflow/react/dist/style.css';

export default function App() {
  const store = useStore();

  const nodeTypes = {
    osc: Osc,
    amp: Amp,
    out: Out,
  };

  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={store.nodes}
          nodeTypes={nodeTypes}
          edges={store.edges}
          onNodesChange={store.onNodesChange}
          onEdgesChange={store.onEdgesChange}
          onConnect={store.addEdge}
          onNodesDelete={store.removeNodes}
          fitView
        >
          <Panel position='top-right'>
            <button onClick={() => store.createNode('osc')}>osc</button>
            <button onClick={() => store.createNode('amp')}>amp</button>
          </Panel>
          <Background />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
