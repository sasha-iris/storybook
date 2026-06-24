import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../../storybook/iris-components.css';
import { AddWidgetModal } from '../src/components/add-widget/AddWidgetModal';

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ fontFamily: 'inherit', background: 'var(--color-bg-muted)', minHeight: '100vh' }}>
      {!open && (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 80 }}>
          <button
            onClick={() => setOpen(true)}
            style={{ padding: '10px 24px', background: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}
          >
            Open Add Widget
          </button>
        </div>
      )}
      <AddWidgetModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={(ids) => { console.log('confirmed:', ids); setOpen(false); }}
      />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
