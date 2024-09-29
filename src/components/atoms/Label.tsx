import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Utility function for className merging, similar to your `cn` function.
const cn = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(' ');

const labelVariants = cva(
  'text-md font-normal text-base-content'
  // Add variants here as needed.
);

// Define the Label component props including children and className for custom styles.
type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
} & VariantProps<typeof labelVariants>;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, htmlFor, className, ...props }, ref) => (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={cn(labelVariants(), className)}
      {...props}
    >
      {children}
    </label>
  )
);

Label.displayName = 'Label';
