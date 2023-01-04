import axios from "axios";
import router from "next/router";
import React, { useState } from "react";
import Layout from "./Layout";

function AddHero() {
  const [userInput, setUserInput] = useState({
    name: "",
    publisher: "",
    alter_ego: "",
    first_appearance: "",
    characters: "",
    image: "",
  });
  const [error, setError] = useState({});

  const handleChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    const input = e.target;

    const newVal = {
      ...userInput,
      [input.name]: input.value,
    };

    setUserInput(newVal);
  };

  const handleSubmit: React.ReactEventHandler<HTMLInputElement> = async (e) => {
    e.preventDefault();
    try {
      const resp: any = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL,
        userInput
      );
      if (resp.status === 200) {
        router.push("/heroes");
      }
    } catch (error) {
      setError(error);
    }
    // console.log(resp)
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="name"></label>
          <input
            onChange={handleChange}
            value={userInput?.name}
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
          />
        </div>
        <div className="input-field">
          <label htmlFor="publisher"></label>
          <input
            onChange={handleChange}
            value={userInput?.publisher}
            type="text"
            id="publisher"
            name="publisher"
            required
            placeholder="Publisher"
          />
        </div>
        <div className="input-field">
          <label htmlFor="alter_ego"></label>
          <input
            onChange={handleChange}
            value={userInput?.alter_ego}
            type="text"
            id="alter_ego"
            name="alter_ego"
            required
            placeholder="Alter Ego"
          />
        </div>
        <div className="input-field">
          <label htmlFor="first_appearance"></label>
          <input
            onChange={handleChange}
            value={userInput?.first_appearance}
            type="text"
            id="first_appearance"
            name="first_appearance"
            required
            placeholder="First Appearance"
          />
        </div>
        <div className="input-field">
          <label htmlFor="characters"></label>
          <input
            onChange={handleChange}
            value={userInput?.characters}
            type="text"
            id="characters"
            name="characters"
            required
            placeholder="Characters"
          />
        </div>
        <div className="input-field">
          <label htmlFor="image"></label>
          <input
            onChange={handleChange}
            value={userInput?.image}
            type="url"
            id="image"
            name="image"
            required
            placeholder="Image"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {Object.keys(error).length !== 0 && (
        <>
          <h2>Error: {error?.response.status}</h2>
          <h3>{error?.response.data.errors}</h3>
        </>
      )}
      
    <style jsx>{`
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      input,
      button {
       border: none; 
       border-radius: 4px;
       font-size: 1.25rem;
       padding: .2rem;

      }
      button {
        background-color: #09f;
        color: #fff;
      }
      `}
    </style>
    </div>
  );
}

AddHero.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AddHero;
