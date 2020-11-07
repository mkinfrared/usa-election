export type ProgressBarProps = {
  /**
   * Progress in percents ranging from 0 to 100, defaults to 0
   */
  percent?: number;
  value?: number;
  showValue?: boolean;
  /**
   * Flip progress bar to increase width from right to left
   */
  flip?: boolean;
  className?: string;
};
