'use client';

import Image from 'next/image';

import Header from './Header';
import PageBody from './Body/PageBody';
import { useState } from 'react';

export default function Home() {

  const [books, setBooks] = useState([]);

  return (
    <main className="flex flex-col">
      <Header getBooks={setBooks}/>
      <PageBody books={books}/>
    </main>
  )
}
