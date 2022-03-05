import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { Navigation } from "./component/navigation-shell/Navigation"
import { Logo } from "./Logo"
import { WelcomeBanner } from "./component/home/WelcomeBanner"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" p={2} position = "relative" width = "100%">
      <Navigation />
    </Box>

    <VStack spacing = {8}>
      <WelcomeBanner />
      <Logo h="40vmin" pointerEvents="none" />
    </VStack>
  </ChakraProvider>
)
