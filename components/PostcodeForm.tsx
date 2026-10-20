'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';

/** Hero postcode box. Phase 1: passes the postcode to the quote form, no back end. */
export default function PostcodeForm({ id, button = 'Get a price' }: { id: string; button?: string }) {
  const router = useRouter();
  const [postcode, setPostcode] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pc = postcode.trim();
    router.push(pc ? `/book?postcode=${encodeURIComponent(pc)}` : '/book');
  };

  return (
    <form className="inline-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor={id} className="label">
          Property postcode
        </label>
        <input
          id={id}
          className="input"
          type="text"
          inputMode="text"
          autoComplete="postal-code"
          placeholder="e.g. E17 4PP"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg">
        {button}
      </button>
    </form>
  );
}
