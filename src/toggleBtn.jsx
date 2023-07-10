import React, { useState } from 'react';

const ToggleButton = () => {
  const [toggleState, setToggleState] = useState(0);

  const handleToggle = (value) => {
    if (toggleState === value) {
      setToggleState(0); // Toggle off
    } else {
      setToggleState(value); // Toggle to the selected state
    }
  };

  return (
    <div className="toggle-button">
      <label className={`toggle-option toggle-option-pendding ${toggleState === 1 ? 'active' : ''}`}>
        <input
          type="radio"
          name="toggle"
          value={1}
          className='radio-btn'
          checked={toggleState === 1}
          onChange={() => handleToggle(1)}
        />
        {' '}
      </label>

      <label className={`toggle-option toggle-option-ongoing ${toggleState === 2 ? 'active' : ''}`}>
        <input
          type="radio"
          name="toggle"
          value={2}
          className='radio-btn'
          checked={toggleState === 2}
          onChange={() => handleToggle(2)}
        />
        {' '}
      </label>

      <label className={`toggle-option toggle-option-complete ${toggleState === 3 ? 'active' : ''}`}>
        <input
          type="radio"
          name="toggle"
          value={3}
          className='radio-btn'
          checked={toggleState === 3}
          onChange={() => handleToggle(3)}
        />
        {' '}
      </label>
    </div>
  );
};

export default ToggleButton;
