import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "../Layout";
import type { Hero } from "../../types/heroes";

const AllHeros = () => {
  const [heros, setHeros] = useState<Hero[] | null>(null);

  useEffect(() => {
    const getAllHeroes = async () => {
      const resp: any = await axios.get("http://localhost:3003/");
      console.log(resp);
      setHeros(resp.data);
      
    };

    getAllHeroes();
  }, []);

  return (
    <div className="main">
      <h2>All Heroes</h2>
      {heros &&
        heros.map((hero: Hero) => (
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
