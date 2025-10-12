import React, { useState } from "react";
import Movie from "./movie";
import "../styles/movie.css";

export default function Movies() {
  let [moviesData] = useState([
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsSaTlX3TKS_baAQyVKPDanmWZkqLGesWUg&s",
      name: "Extraction 2",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://images.moviesanywhere.com/9692d65209db9caf56769b0ad4a39b7b/c8386f60-738a-4651-82ac-22f289e2487a.jpg",
      name: "DUNE",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaWm_8QVNCp2CQLedIu4Wm-5sF7ocBcMbdQ&s",
      name: "DUNE 2",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsSlIuRZMNllJkvZ4MxkwT0BmB017l0L-dA&s",
      name: "END GAME",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPSk2HBtjAV_T5SpP-1zq1FFykHzeMCrAmA&s",
      name: "SPIDER MAN 1",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://images.moviesanywhere.com/5a7e82e7749d6dd8e447fcfeec50c064/55462afc-41ad-4322-ad46-1caca29fcc36.jpg",
      name: "SPIDER MAN NO WAY HOME",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
    {
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6U_Js2F9cAZlu0PlSYP20-OibwVPGb5pwA&s",
      name: "Extraction",
      descreption: "action movie and drama and good movie",
    },
  ]);

  return (
    <>
      <div className="movie-wrap">
        {moviesData.map((mov) => (
          <Movie {...mov}></Movie>
        ))}
      </div>
    </>
  );
}
