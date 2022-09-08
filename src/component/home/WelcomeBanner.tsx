import { Button, ButtonGroup, Heading,  Text, VStack, Center, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const WelcomeBanner = () => {

    const SHADOWZXU_BLOG_GITHUB_LINK = "https://github.com/shadowzxu/shadowzxu-blog";
    const SHADOWZXU_BLOG_LINKEDIN_LINK = "https://linkedin.com/in/ziyou-xu";

    const {t, i18n} = useTranslation();
    const bg = useColorModeValue("teal.50","teal.400");
    const linkedInBtnColorScheme = useColorModeValue('linkedin', 'github');

    return (
        <Center h ='75vh' w='100vw' bg={bg}>
            <VStack textAlign='center' spacing = {8} margin = {5}>
                <Heading>{t("HOME_WELCOME_BANNER_TITLE")}</Heading>
                <Text mt='8'>{t("HOME_WELCOME_BANNER_DESCRIPTION")}</Text>
                <ButtonGroup variant='outline'spacing='6'>
                    <Button
                        colorScheme='github'
                        leftIcon={<FaGithub />}
                        onClick={() => {window.open(SHADOWZXU_BLOG_GITHUB_LINK, "_blank")}}>
                        Github
                    </Button>
                    <Button
                        colorScheme={linkedInBtnColorScheme}
                        leftIcon={<FaLinkedin />}
                        onClick={() => {window.open(SHADOWZXU_BLOG_LINKEDIN_LINK, "_blank")}}>
                        LinkedIn
                    </Button>
                </ButtonGroup>
            </VStack>  
        </Center>
    )
}
