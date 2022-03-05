import {
    Select
} from "@chakra-ui/react"
import { AiOutlineGlobal } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {

    const {t, i18n} = useTranslation();
    
    const changeLanguage = (event: any) => {
        i18n.changeLanguage(event.target.value);
    };

  return (
    <Select 
      w='75px' size='md' fontSize='lg'
      icon={<AiOutlineGlobal/>} 
      onChange = {(event) => changeLanguage(event)} 
      defaultValue = {i18n.language}>    
        <option value = 'en'>En</option>
        <option value = 'zh'>中</option>
    </Select>
  )
}