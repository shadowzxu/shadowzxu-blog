import * as React from "react"
import {
    Select
} from "@chakra-ui/react"
import { AiOutlineGlobal } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {

    const {t, i18n} = useTranslation();
    
    const changeLanguage = (event: any) => {
        console.log(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

  return (
    <Select w='75px' icon={<AiOutlineGlobal/>}
    onChange = {(event) => changeLanguage(event)}>
        <option value = 'en'>En</option>
        <option value = 'zh'>中</option>
    </Select>
  )
}