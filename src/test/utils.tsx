import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) => ({
  ...render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  }),
  user: userEvent.setup(),
});

export * from '@testing-library/react';
export { customRender as render };
