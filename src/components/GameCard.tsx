import { Card, HStack, Image } from "@chakra-ui/react";
import type { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card.Root>
			<Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
			<Card.Body>
				<Card.Title>{game.name}</Card.Title>
				<HStack justifyContent="space-between">
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;
