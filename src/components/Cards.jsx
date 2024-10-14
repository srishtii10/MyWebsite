import React from "react";
import { Card } from "./Card";

export const Cards = () => {
  const ecom =
    " Developed a frontend app using React.js and Tailwind CSS to display products fetched from the API.Implemented product addition with local storage, viewing details, deleting items, and pagination.";
  const tic =
    " Built a Tic-Tac-Toe game in Java, reinforcing OOP and user input handling skills.Demonstrated proficiency in dynamic memory allocation, efficient array usage, and effective error handling.";
  const music =
    "Developed a dynamic music player web app using JavaScript, HTML, and CSS, showcasing proficiency in front-end web development.";

  return (
    <>
      <div className="flex flex-row justify-center flex-wrap">
        <Card
          image={
            "https://github.com/deepanshuxharry/images/blob/main/ecom2.png?raw=true"
          }
          heading={"E-Commerce-Product-Manager"}
          link={"https://e-commerce-product-manager.vercel.app/"}
          text={ecom}
        ></Card>
        <Card
          image={
            "https://github.com/deepanshuxharry/images/blob/main/tictactoe.png?raw=true"
          }
          link={"https://github.com/srishtii10/Tic-tac-toe"}
          heading={"Tic-Tac-Toe"}
          text={tic}
        ></Card>
        <Card
          image={
            "https://github.com/deepanshuxharry/images/blob/main/music.png?raw=true"
          }
          link={"https://srishtii10.github.io/Music-player-app/"}
          heading={"Music-Player-App"}
          text={music}
        ></Card>
      </div>
    </>
  );
};
