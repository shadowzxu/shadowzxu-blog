import * as React from "react";
import { Flex, Spacer, Box, Button, Heading,  Text, VStack, Center } from '@chakra-ui/react';
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

export const WelcomeBanner = () => {

    const SHADOWZXU_BLOG_GITHUB_LINK = "https://github.com/shadowzxu/shadowzxu-blog";
    const {t, i18n} = useTranslation();

    return (
        <Center h ='75vh' w='80vw'>
            <VStack textAlign='center' spacing = {8}>
                <Heading>{t("HOME_WELCOME_BANNER_TITLE")}</Heading>
                <Text mt='8'>{t("HOME_WELCOME_BANNER_DESCRIPTION")}</Text>
                <Button 
                    variant='outline' 
                    leftIcon={<FaGithub />}
                    onClick={() => {window.open(SHADOWZXU_BLOG_GITHUB_LINK, "_blank")}}>
                    Github</Button>
            </VStack>  
        </Center>
    )
}
