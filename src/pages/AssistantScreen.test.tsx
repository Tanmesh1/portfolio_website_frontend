import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { AssistantScreen } from './AssistantScreen';

describe('AssistantScreen', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('sends a chat message and displays the assistant reply', async () => {
    const user = userEvent.setup();
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ reply: 'Hello from the assistant.' }),
    });

    render(<AssistantScreen />);

    const input = screen.getByLabelText('Chat message');
    await user.type(input, 'What is your tech stack?');
    await user.click(screen.getByLabelText('Send message'));

    expect(await screen.findByText('What is your tech stack?')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('Hello from the assistant.')).toBeInTheDocument();
    });
  });

  it('submits the contact form and shows a success message', async () => {
    const user = userEvent.setup();
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, inserted_id: 'fake-id' }),
    });

    render(<AssistantScreen />);

    await user.type(screen.getByLabelText('Identification'), 'Jane Doe');
    await user.type(screen.getByLabelText('Digital Address'), 'jane@example.com');
    await user.type(screen.getByLabelText('Payload'), 'Interested in collaborating.');
    await user.click(screen.getByRole('button', { name: /transmit message/i }));

    await waitFor(() => {
      expect(screen.getByText(/message transmitted successfully/i)).toBeInTheDocument();
    });
  });

  it('shows a validation error when the contact form is submitted empty', async () => {
    const user = userEvent.setup();

    render(<AssistantScreen />);

    await user.click(screen.getByRole('button', { name: /transmit message/i }));

    expect(
      await screen.findByText(/please fill in your name, email, and message/i),
    ).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });
});
