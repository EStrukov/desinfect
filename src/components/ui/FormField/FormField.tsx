'use client';

import {
  forwardRef,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

type BaseProps = {
  label: string;
  error?: string;
  required?: boolean;
};

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    type?: 'input';
  };

type SelectProps = BaseProps &
  SelectHTMLAttributes<HTMLSelectElement> & {
    type: 'select';
    children: React.ReactNode;
  };

type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    type: 'textarea';
  };

type FormFieldProps = InputProps | SelectProps | TextareaProps;

export const FormField = forwardRef<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  FormFieldProps
>(
  (
    { label, error, required, type = 'input', className = '', ...props },
    ref,
  ) => {
    const baseInputClasses =
      'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors';

    const labelClasses =
      'block text-sm font-medium text-gray-700 mb-2 text-left';

    return (
      <div className={className}>
        <label className={labelClasses}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {type === 'select' ? (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            className={baseInputClasses}
            {...(props as SelectProps)}
          >
            {(props as SelectProps).children}
          </select>
        ) : type === 'textarea' ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={`${baseInputClasses} resize-none`}
            {...(props as TextareaProps)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={baseInputClasses}
            {...(props as InputProps)}
          />
        )}

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

FormField.displayName = 'FormField';
