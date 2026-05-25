import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className = '' }: TypographyProps) {
  return (
    <h1
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold break-words text-gray-900 dark:text-white leading-tight ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = '' }: TypographyProps) {
  return (
    <h2
      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = '' }: TypographyProps) {
  return (
    <h3
      className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white leading-snug ${className}`}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className = '' }: TypographyProps) {
  return (
    <h4
      className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white leading-snug ${className}`}
    >
      {children}
    </h4>
  );
}

export function P({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
}

export function Lead({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium ${className}`}
    >
      {children}
    </p>
  );
}

export function Small({ children, className = '' }: TypographyProps) {
  return (
    <small
      className={`text-xs sm:text-sm text-gray-500 dark:text-gray-500 leading-normal ${className}`}
    >
      {children}
    </small>
  );
}

export function Large({ children, className = '' }: TypographyProps) {
  return (
    <div
      className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}