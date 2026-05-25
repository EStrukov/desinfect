import { forwardRef, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const classNames = (...classes: (string | boolean | undefined)[]) => {
      return classes.filter(Boolean).join(' ');
    };

    const variantClasses = {
      default:
        'bg-primary text-white hover:bg-primary-dark border border-transparent shadow-sm',
      destructive:
        'bg-red-600 text-white hover:bg-red-700 border border-transparent shadow-sm',
      outline:
        'border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-blue-950 bg-transparent',
      secondary:
        'bg-secondary text-white hover:bg-secondary-dark border border-transparent shadow-sm',
      ghost:
        'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent',
      link: 'text-gray-600 dark:text-gray-400 underline-offset-4 hover:text-gray-900 dark:hover:text-white border border-transparent',
    };

    const sizeClasses = {
      default: 'px-4 py-2 text-sm',
      sm: 'px-3 py-1.5 text-xs',
      lg: 'px-6 py-3 text-base',
      icon: 'w-9 p-1',
    };

    const baseClasses =
      'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 active:scale-100 active:shadow-lg active:brightness-95 focus:outline-none focus:ring-0';

    return (
      <button
        className={classNames(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };