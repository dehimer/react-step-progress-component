import React from 'react'

export default ({ step, steps }) => (
  <div>
    <div>Step Progress</div>
    <div>
      {
        steps.map(({label}, idx) => (
          idx === step ? `[${label}]` : label
        ))
      }
    </div>
  </div>
);
