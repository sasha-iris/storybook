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

interface StandaloneStep {
  icon?: React.ReactNode;
  title: string;
  /** One or more description lines rendered as separate paragraphs. */
  description: string | string[];
}

interface StandaloneStepsProps {
  steps: StandaloneStep[];
  className?: string;
}

/**
 * Self-contained instructional steps — numbered "how it works" explanations with
 * no connectors and no active/completed semantics. Not interactive.
 *
 * USE FOR: onboarding overviews, "How it works" explanations (e.g. 2FA setup instructions)
 * DO NOT USE FOR: progress tracking → Stepper; step navigation → Stepper
 *
 * CSS classes: stepper, stepper-item--standalone, stepper-step-icon, stepper-step-heading,
 *   stepper-icon, stepper-step-title, stepper-step-desc
 *
 * Requires iris-components.css to be loaded at app level.
 *
 * @example
 * <StandaloneSteps steps={[
 *   { icon: <InstallIcon />, title: 'Install an authenticator app', description: 'Download and install an authenticator app on your mobile device.' },
 *   { icon: <ScanIcon />, title: 'Scan the QR code', description: 'Open the app and scan the QR code or enter the setup key manually.' },
 * ]} />
 */
export function StandaloneSteps({ steps, className }: StandaloneStepsProps) {
  return (
    <div className={['stepper', className].filter(Boolean).join(' ')}>
      {steps.map((step, i) => {
        const descriptions = Array.isArray(step.description) ? step.description : [step.description];
        return (
          <div key={i} className="stepper-item stepper-item--standalone">
            {step.icon && <span className="stepper-step-icon">{step.icon}</span>}
            <span className="stepper-step-heading">
              <span className="stepper-icon" aria-hidden="true">{i + 1}</span>
              <span className="stepper-step-title">{step.title}</span>
            </span>
            {descriptions.map((d, j) => (
              <p key={j} className="stepper-step-desc">{d}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
