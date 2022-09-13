import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Navigation } from "./component/navigation-shell/Navigation"
import { Logo } from "./Logo"
import { WelcomeBanner } from "./component/home/WelcomeBanner"

export const App = () => {
  
  
  return(
  <ChakraProvider theme={theme}>
    <Navigation />
    <WelcomeBanner />
      {/* <Logo h="40vmin" pointerEvents="none" /> */}
  </ChakraProvider>
)}
