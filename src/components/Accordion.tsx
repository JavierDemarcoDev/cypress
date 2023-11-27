import { ReactNode, useState } from 'react';

function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: '80vw',
        border: '1px solid gray',
        borderRadius: '5px',
      }}
    >
      <div>
        <h3
          style={{
            padding: '0px 25px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid gray',
          }}
        >
          {title}{' '}
          <button onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Open'}
          </button>
        </h3>
      </div>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Accordion;
