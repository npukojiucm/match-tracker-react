import { JSX } from 'react';
import { Header } from '@/components/header';
import { MatchList } from '@/components/match-list';

const HomePage = (): JSX.Element => {
  return (
    <div id="root">
      <div className="container">
        <Header />

        <MatchList />
      </div>
    </div>
  );
};

export default HomePage;
