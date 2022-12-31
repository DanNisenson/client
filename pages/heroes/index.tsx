import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "../Layout";
import type { Hero } from "../../types/heroes";
import { useAppContext } from "../context/sharedData";

const AllHeros = () => {
  const context = useAppContext();

  useEffect(() => {
    const getAllHeroes = async () => {
      const resp: any = await axios.get("http://localhost:3003/");
      // setHeros(resp.data);
      context.setHeroes(resp.data);
    };
    getAllHeroes();
  }, []);

  return (
    <div className="main">
      <h2>All Heroes</h2>
      {context.heroes &&
        context.heroes.map((hero: Hero) => (
          <Link href={`/heroes/${hero.id}`} key={hero.id}>
            {hero.name}
          </Link>
        ))}
    </div>
  );
};

AllHeros.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AllHeros;
