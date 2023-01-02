/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import SharedData from "../../context/sharedData";
import apiCalls from "../../utils/apiCalls";
import Layout from "../Layout";

type Props = {};

const SingleHero = (props: Props) => {
  const [hero, setHero] = useState(null);
  const context = useContext(SharedData);
  const router = useRouter();

  useEffect(() => {
    const hero = context.heroes.filter(
      (hero) => hero.id === parseInt(router.query.heroId)
    );
    setHero(hero[0]);
  }, []);

  const deleteHero = async () => {
    const resp = await apiCalls.deleteHero(hero.id);
    if (resp.status === 200) {
      const heroes = context.heroes.filter(
        (hero) => hero.id !== parseInt(router.query.heroId)
        );

        context.setHeroes(heroes);
      router.push("/heroes")
    }
    console.log(resp);
  };

  return (
    <div className="main">
      {hero && (
        <>
          <h2 className="page-title">{hero.name}</h2>
          <img
            className="single-hero__img"
            src={hero.image}
            alt="Picture of the author"
          />
          <div>Alter Ego: {hero.alter_ego}</div>
          <div>First Appearance: {hero.first_appearance}</div>
          <div>Publisher: {hero.publisher}</div>
        </>
      )}
      <button onClick={deleteHero}>Delete</button>
    </div>
  );
};

SingleHero.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SingleHero;
