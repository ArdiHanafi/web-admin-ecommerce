import clsx from 'clsx';

const alertTypes = {
  success: 'bg-green-800 text-gray-100 font-semibold',
  error: 'bg-red-800 text-gray-100 font-semibold',
  warning: 'bg-yellow-800 text-gray-100 font-semibold',
  info: 'bg-blue-800 text-gray-100 font-semibold',
};

// @ts-ignore
export function Alert({ type = 'success', className, ...props }) {
  // Combine base (size/shape) and color styles
  className = clsx(
    // @ts-ignore
    alertTypes[type], // Apply size/shape styles
    className // Custom className props
  );

  // render the alert
  return (
    <div className={`rounded-md p-4 ${className}`} role="alert" {...props} />
  );
}

// @ts-ignore
export function SmallAlert({ type = 'success', className, ...props }) {
  // Combine base (size/shape) and color styles
  className = clsx(
    // @ts-ignore
    alertTypes[type], // Apply size/shape styles
    className // Custom className props
  );

  // render the alert
  return (
    <div
      className={`rounded-md p-2 text-left text-xs ${className}`}
      role="alert"
      {...props}
    />
  );
}
