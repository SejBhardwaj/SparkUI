/**
 * Base Component Class
 * 
 * Foundation class for all UI components providing common functionality.
 */

export interface BaseComponentProps {
  className?: string;
  id?: string;
  testId?: string;
  ariaLabel?: string;
}

export abstract class BaseComponent<P extends BaseComponentProps = BaseComponentProps> {
  protected props: P;

  constructor(props: P) {
    this.props = props;
  }

  /**
   * Get combined class names
   */
  protected getClassName(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
  }

  /**
   * Get accessibility attributes
   */
  protected getA11yProps() {
    return {
      'aria-label': this.props.ariaLabel,
      'data-testid': this.props.testId,
    };
  }
}
