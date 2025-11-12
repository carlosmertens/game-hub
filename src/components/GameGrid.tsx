import useGames from '@/hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='20px'
        gap='40px'
      >
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
