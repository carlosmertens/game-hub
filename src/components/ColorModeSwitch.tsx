import { Icon, Switch } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<Switch.Root
			colorPalette="green"
			checked={colorMode === "dark"}
			onChange={toggleColorMode}
		>
			<Switch.HiddenInput />
			<Switch.Control>
				<Switch.Thumb />
				<Switch.Indicator fallback={<Icon as={FaMoon} color="yellow.400" />}>
					<Icon as={FaSun} color="yellow.400" />
				</Switch.Indicator>
			</Switch.Control>
			<Switch.Label>Dark Mode</Switch.Label>
		</Switch.Root>
	);
};

export default ColorModeSwitch;
