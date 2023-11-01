import Image from 'next/image';

import Header from './Header/Header';
import PageBody from './Body/PageBody';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <PageBody />
    </main>
  )
}
