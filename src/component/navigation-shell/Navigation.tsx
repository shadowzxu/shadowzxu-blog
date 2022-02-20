import * as React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Flex, Spacer, Box, Button, Heading,  IconButton, VStack } from '@chakra-ui/react';
import { FiAlignJustify } from 'react-icons/fi';

export const Navigation = () => {

    const navButtonStyle = { "@media (max-width: 499px)": { display: "none" } };
    const navHamburgerStyle = { "@media (min-width: 500px)": { display: "none" } };

    const [active, setActive] = React.useState(false);
    
    const toggleShowMenu = () => {
        if(active){
            setActive(false);
        }else{
            setActive(true);
        }
    };

    const hamburgerMenu = {display: 'none'};

    return (
        <VStack align = 'center'>
            <Flex w='95vw'>
                <Box p='2'>
                    <Heading size='md'>ShadowZxu Blog</Heading>
                </Box>
            <Spacer />
                <Flex>
                    <Button sx = {navButtonStyle} mr='4' >About</Button>
                    <Button sx = {navButtonStyle}>Blog</Button>
                    <ColorModeSwitcher justifySelf="flex-end"/>
                    <IconButton sx = {navHamburgerStyle} ml = '4' aria-label='menu' icon={<FiAlignJustify />} onClick={toggleShowMenu}/>
                </Flex>
            </Flex>

            <VStack w='95vw' sx = {active ? {} : hamburgerMenu}>
                <Button w='100%'>About</Button>
                <Button w='100%'>Blog</Button>
            </VStack>
        </VStack>
    );
};