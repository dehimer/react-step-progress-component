const defaultState = {
  currentStep: 2,
  minStep: 2,
  maxStep: 5
};

export default function reducer(state = defaultState, action) {
  const { type } = action;

  switch (type) {
    case 'NEXTSTEP':
      {
        const { maxStep, currentStep } = state;
        const step = Math.min(maxStep, currentStep + 1);

        return { ...state, currentStep: step };
      }
    case 'PREVSTEP':
      {
        const { minStep, currentStep } = state;
        const step = Math.max(minStep, currentStep - 1);

        return { ...state, currentStep: step };
      }
    default:
      return state;
  }
}
