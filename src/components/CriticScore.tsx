import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	const color = score > 90 ? "green" : score > 80 ? "yellow" : "";

	return (
		<Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius={4}>
			{score}
		</Badge>
	);
};

export default CriticScore;
