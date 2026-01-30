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
    // Функция для объединения классов
    const classNames = (...classes: (string | boolean | undefined)[]) => {
      return classes.filter(Boolean).join(' ');
    };

    // Определяем классы для variant - более сдержанный дизайн
    const variantClasses = {
      default: 'bg-primary text-white hover:bg-primary-dark shadow-sm',
      destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
      outline:
        'border border-gray-300 bg-transparent hover:bg-primary-dark text-gray-900',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      ghost: 'text-gray-700 hover:bg-gray-100',
      link: 'text-gray-600 underline-offset-4 hover:text-gray-900',
    };

    // Определяем классы для size - более компактные
    const sizeClasses = {
      default: 'h-9 px-3 py-1.5 text-sm',
      sm: 'h-8 px-2.5 py-1 text-xs',
      lg: 'h-10 px-4 py-2 text-base',
      icon: 'h-9 w-9 p-1.5',
    };

    // Базовые классы - более минималистичные
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
