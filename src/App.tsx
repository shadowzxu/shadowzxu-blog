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

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Navigation />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
