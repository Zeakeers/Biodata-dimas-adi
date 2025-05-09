declare module 'react-scroll' {
  import { ComponentType, ReactNode } from 'react';

  interface ScrollProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onClick?: () => void;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    className?: string;
    activeClass?: string;
    children?: ReactNode;
  }

  export const Link: ComponentType<ScrollProps>;
  export const Element: ComponentType<{ name: string; children?: ReactNode }>;
  export const Events: {
    scrollEvent: {
      register(event: string, callback: () => void): void;
      remove(event: string): void;
    };
  };
  export const scrollSpy: {
    update(): void;
  };
  export const scroller: {
    scrollTo(element: string, options?: ScrollProps): void;
  };
} 