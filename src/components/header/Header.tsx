import Image from "next/image";
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { GrShop } from "react-icons/gr";
import { BsCheck } from "react-icons/bs";
import { SearchIcon } from "@chakra-ui/icons";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            src='/logo.svg'
            height={60}
            width={60}
            alt='Logo'
            className={styles.logo}
            priority
          />
          <span className={styles.brandName}>COUNTRYSHOP</span>
          <span className={styles.slogan}>bizarre, but possible</span>
        </div>
        <InputGroup className={styles.input} width={400}>
          <InputLeftElement
            pointerEvents='none'
            className={styles.inputIcon}
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color='gray.300' w={5} h={5} />}
          />
          <Input
            borderColor='cyan.900'
            colorScheme='cyan'
            size='lg'
            variant='flushed'
            placeholder='Search for country..'
          />
          <Button
            borderColor='cyan.900'
            textColor='cyan.900'
            className={styles.inputButton}
            size='lg'
            variant='outline'
          >
            Go!
          </Button>
        </InputGroup>
        <IconButton
          aria-label='Shopping bag'
          icon={<GrShop />}
          size='lg'
          variant='outline'
        />
      </div>
      <div className={styles.banner}>
        {["Cheap", "Free Shipping", "30 day cashback"].map((text) => (
          <span key={text}>
            {text}
            <Icon as={BsCheck} w={6} h={6} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
