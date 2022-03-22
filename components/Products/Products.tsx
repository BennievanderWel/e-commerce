import Image from "next/image";
import type { Country } from "../../types";

const Products = ({ countries }: { countries: Country[] }) => {
  return (
    <div>
      {countries.map((country) => {
        const { name, shortCode } = country;
        const url = `/flags/${shortCode.toUpperCase()}.svg`;

        return (
          <div key={name}>
            {name}
            <Image
              src={url}
              loading='lazy'
              alt='Country flag'
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
