import React from 'react';
import { Button } from '../../components/feedback/Button/Button';
import { Alert } from '../../components/feedback/Alert/Alert';
import { Badge, CountBadge, StatusBadge } from '../../components/feedback/Badge/Badge';
import { ProgressBar } from '../../components/feedback/Progress/ProgressBar';
import { CircularProgress } from '../../components/feedback/Progress/ProgressVariants';
import { Spinner } from '../../components/feedback/Spinner/Spinner';
import { useFeedback } from '../../components/feedback/utils/useFeedback';

export const FeedbackExamples: React.FC = () => {
  const { feedback, showSuccess, showError, showWarning, showInfo } = useFeedback();
  
  return (
    <div className="examples-container">
      <h1>Feedback Components Examples</h1>
      
      <section>
        <h2>Buttons</h2>
        <div className="example-row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button loading>Loading</Button>
        </div>
      </section>
      
      <section>
        <h2>Alerts</h2>
        <div className="example-col">
          <Alert variant="success" title="Success">Operation completed successfully</Alert>
          <Alert variant="error" title="Error">An error occurred</Alert>
          <Alert variant="warning" title="Warning">Please review your input</Alert>
          <Alert variant="info">This is an informational message</Alert>
        </div>
      </section>
      
      <section>
        <h2>Badges</h2>
        <div className="example-row">
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
          <CountBadge count={5} />
          <StatusBadge status="online" />
        </div>
      </section>
      
      <section>
        <h2>Progress Indicators</h2>
        <div className="example-col">
          <ProgressBar value={75} showLabel />
          <ProgressBar value={50} variant="success" />
          <div className="example-row">
            <CircularProgress value={60} />
            <Spinner size="lg" />
          </div>
        </div>
      </section>
      
      <section>
        <h2>Feedback Hook</h2>
        <div className="example-row">
          <Button onClick={() => showSuccess('Success message!')}>Show Success</Button>
          <Button onClick={() => showError('Error message!')}>Show Error</Button>
          <Button onClick={() => showWarning('Warning message!')}>Show Warning</Button>
          <Button onClick={() => showInfo('Info message!')}>Show Info</Button>
        </div>
        {feedback.show && (
          <Alert variant={feedback.variant}>{feedback.message}</Alert>
        )}
      </section>
    </div>
  );
};
