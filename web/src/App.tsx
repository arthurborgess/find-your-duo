import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';

export interface IGame {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export const App = () => {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => setGames(response.data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo NLW e-Sports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal games={games} />
      </Dialog.Root>
    </div>
  )
}