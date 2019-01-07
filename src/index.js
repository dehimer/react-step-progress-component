import React from 'react'

export default ({ step, steps, nextStep, prevStep }) => (
  <div>
    <div>Step Progress</div>
    <div>
      {
        steps.map((label, idx) => {
          const isActiveStep = (idx === step);

          const isNextStep = (step - idx === -1);
          const isPrevStep = (step - idx === 1);

          let handler = () => {};

          if (isNextStep) handler = nextStep;
          if (isPrevStep) handler = prevStep;

          return (
            <div onClick={handler}>
              { isActiveStep ? `[${label}]` : label }
            </div>
          )
        }).join(' - ')
      }
    </div>
  </div>
);
