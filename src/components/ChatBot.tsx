'use client';

import { ChatKit, useChatKit } from '@openai/chatkit-react';

export function ChatBot() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        const res = await fetch('/api/chatkit/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const { client_secret } = await res.json();
        return client_secret;
      },
    },
  });

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <ChatKit control={control} className="h-[600px] w-[400px] shadow-2xl rounded-lg" />
    </div>
  );
}
