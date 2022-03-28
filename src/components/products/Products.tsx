import Image from "next/image";
import styles from "./Products.module.scss";

import type { Country } from "../../types";

const Products = ({ countries }: { countries: Country[] }) => {
  return (
    <div className={styles.container}>
      {countries.map((country) => {
        const { name, shortCode } = country;
        const url = `/flags/${shortCode}.png`;

        return (
          <div key={name} className={styles.item}>
            <div className={styles.itemImg}>
              <Image
                src={url}
                loading='lazy'
                alt='Country flag'
                layout='fill'
              />
            </div>
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
