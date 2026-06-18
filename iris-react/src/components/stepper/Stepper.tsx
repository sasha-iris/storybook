import React from 'react';

interface StepperStep {
  label: string;
}

interface StepperProps {
  steps: StepperStep[];
  activeStep?: number;
  className?: string;
}

/**
 * Horizontal step progress indicator — shows position in a multi-step flow.
 *
 * USE FOR: onboarding wizards, checkout flows, multi-step forms, setup guides
 * REPLACES MUI: <Stepper>, <Step>, <StepLabel>
 * DO NOT USE FOR: page-level tabs → Tabs; data progress tracking → ProgressBar
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <Stepper steps={[{ label: 'Account' }, { label: 'Plan' }, { label: 'Payment' }]} activeStep={1} />
 */
export function Stepper({ steps, activeStep = 0, className }: StepperProps) {
  return (
    <div
      className={['stepper', 'stepper--dots', className].filter(Boolean).join(' ')}
      role="list"
      aria-label="Progress"
    >
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="stepper-item" role="listitem" aria-current={i === activeStep ? 'step' : undefined}>
            <span className="stepper-dot" aria-hidden="true" />
            <span className="stepper-label">{step.label}</span>
          </div>
          {i < steps.length - 1 && <div className="stepper-line" aria-hidden="true" />}
        </React.Fragment>
      ))}
    </div>
  );
}
