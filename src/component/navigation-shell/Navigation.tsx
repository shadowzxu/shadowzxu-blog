import * as React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Flex, Spacer, Box, Button, Heading,  IconButton, VStack } from '@chakra-ui/react';
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
        <VStack align = 'center'>
            <Flex w='95vw'>
                <Box p='2'>
                    <Heading size='md'>ShadowZxu Blog</Heading>
                </Box>
            <Spacer />
                <Flex>
                    <Button sx = {navButtonStyle} mr='2' >{t("NAV_ABOUT_BUTTON_TEXT")}</Button>
                    <Button sx = {navButtonStyle} mr='2'>{t("NAV_BLOG_BUTTON_TEXT")}</Button>
                    <ColorModeSwitcher mr='2'/>
                    <LanguageSwitcher />
                    <IconButton sx = {navHamburgerStyle} ml = '2' aria-label='menu' icon={<FiAlignJustify />} onClick={toggleShowMenu}/>
                </Flex>
            </Flex>

            <VStack w='95vw' sx = {active ? {} : hamburgerMenu}>
                <Button w='100%'>{t("NAV_ABOUT_BUTTON_TEXT")}</Button>
                <Button w='100%'>{t("NAV_BLOG_BUTTON_TEXT")}</Button>
            </VStack>
        </VStack>
    );
};