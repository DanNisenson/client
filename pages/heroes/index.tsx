/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "../Layout";
import type { Hero } from "../../types/heroes";
import SharedData from "../../context/sharedData";
import apiCalls from "../../utils/apiCalls";

const AllHeros = () => {
  const context = useContext(SharedData);

  useEffect(() => {
    const getAllHeroes = async () => {
      const resp = await apiCalls.getAllHeroes();
      context.setHeroes(resp.data);
    };
    getAllHeroes();
  }, []);

  return (
    <div className="main">
      <h2 className="page-title">All Heroes</h2>
      <div className="all-heroes">
      {context.heroes &&
        context.heroes.map((hero: Hero) => (
          <div  key={hero.id}>
            <Link className="all-heroes__hero" href={`/heroes/${hero.id}`}>
              <img
                className="all-heroes__img"
                src={hero.image}
                alt="Picture of the author"
              />
              {hero.name}
            </Link>
          </div>
        ))}
        </div>
    </div>
  );
};

AllHeros.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AllHeros;
