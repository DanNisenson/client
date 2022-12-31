import React from 'react';
import { useRouter } from "next/router";
import { useAppContext } from "../context/sharedData";

type Props = {}


const SingleHero = (props: Props) => {
  const context = useAppContext();  
  const { query } = useRouter();
  console.log(props, query, context)

  return (
    <div>SingleHero</div>
  )
}

export default SingleHero