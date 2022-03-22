import type { NextPage } from "next";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "../apollo/apolloClient";
import Products from "../components/Products/Products";
import type { Country } from "../types";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          name
          shortCode
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries,
    },
  };
}

interface HomePage {
  countries: Country[];
}

const Home: NextPage<HomePage> = ({ countries }) => {
  return <Products countries={countries} />;
};

export default Home;
