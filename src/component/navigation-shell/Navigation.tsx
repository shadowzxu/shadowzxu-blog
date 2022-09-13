import * as React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Flex, Spacer, Box, Button, Heading,  IconButton, VStack, useColorModeValue, ButtonGroup, HStack } from '@chakra-ui/react';
import { FiAlignJustify } from 'react-icons/fi';
import { useTranslation } from "react-i18next";

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
    const {t, i18n} = useTranslation();

    return (
        <Box bg = {useColorModeValue('#F7FAFC','#1A202C')} as = "nav" width = {"100%"} display={'block'} top = '0' position={'sticky'} >
            <Flex p = {2} width={'100%'} alignItems={'center'} >
                
            <Box>
                <Heading size='md'>ShadowZxu Blog</Heading>
            </Box>
            
            <Spacer />

            <ButtonGroup gap={0} >
                <Button 
                    sx = {navButtonStyle} 
                    variant ='ghost'>
                    {t("NAV_ABOUT_BUTTON_TEXT")}
                </Button>

                <Button 
                    sx = {navButtonStyle}
                    variant ='ghost'>
                    {t("NAV_BLOG_BUTTON_TEXT")}
                </Button>
            
                <LanguageSwitcher />

                <ColorModeSwitcher />  
                
                <IconButton 
                    sx = {navHamburgerStyle} 
                    aria-label='menu' 
                    variant = 'ghost'
                    icon={<FiAlignJustify />} 
                    onClick={toggleShowMenu}/>
                 
            </ButtonGroup>
            </Flex>

            <VStack p={2} alignItems={'center'} sx = {active ? {} : hamburgerMenu}>
                <Button w='95%'>{t("NAV_ABOUT_BUTTON_TEXT")}</Button>
                <Button w='95%'>{t("NAV_BLOG_BUTTON_TEXT")}</Button>
            </VStack>
        </Box>
    );
};