import React from "react";
import Layout from "./Layout";
import axios from "axios";
import { useState } from "react";

function AddHero() {
  const [userInput, setUserInput] = useState({
    name: "",
    publisher: "",
    alter_ego: "",
    first_appearance: "",
    characters: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent) => {
    const input = e.target;
    console.log(input.name);
    const newVal = {
      ...userInput,
      [input.name]: input.value,
    };
    console.log(newVal);
    setUserInput(newVal);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(JSON.stringify(userInput))

    const resp: any = await axios.post(process.env.NEXT_PUBLIC_BASE_URL, userInput);
    console.log(resp)
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={userInput?.name}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="publisher">Publisher</label>
          <input
            onChange={handleChange}
            value={userInput?.publisher}
            type="text"
            id="publisher"
            name="publisher"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="alter_ego">Alter Ego</label>
          <input
            onChange={handleChange}
            value={userInput?.alter_ego}
            type="text"
            id="alter_ego"
            name="alter_ego"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="first_appearance">First Appearance</label>
          <input
            onChange={handleChange}
            value={userInput?.first_appearance}
            type="text"
            id="first_appearance"
            name="first_appearance"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="characters">Characters</label>
          <input
            onChange={handleChange}
            value={userInput?.characters}
            type="text"
            id="characters"
            name="characters"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="image">Image</label>
          <input
            onChange={handleChange}
            value={userInput?.image}
            type="url"
            id="image"
            name="image"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

AddHero.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AddHero;
