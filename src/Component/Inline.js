import React from 'react';

const heading = {
  fontSize: '72px',
  color: 'blue'
}

export const Inline = () => {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <h1 style={{ fontSize: '72px',   color: 'red'} }>Inline</h1>

    </div>
  )
}

// export default Inline
