import Image from "next/image";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { SearchIcon } from "@chakra-ui/icons";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src='/logo.svg'
          height={100}
          width={100}
          alt='Logo'
          className={styles.logo}
        />
        <p className={styles.brandName}>COUNTRYSHOP</p>
        <p className={styles.slogan}>bizarre, but possible</p>
      </div>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color='gray.300' />}
        />
        <Input placeholder='Search for country..' />
      </InputGroup>
      <Button>Go!</Button>
      <Icon as={FiShoppingCart} />
    </div>
  );
};

export default Header;
