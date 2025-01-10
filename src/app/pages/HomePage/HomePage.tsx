import "./HomePage.css";
import Header from "../../../../public/header.png";
import Avatar from "../../../../public/avatar.png";
import Item from "@/app/shared/Item/Item";

export default function HomePage() {
  return (
    <>
      <div className="header">
        <img src={Header.src} alt="" />
        <div className="recipe">
          <div className="recipe__container">
            <div className="recipe__container__title">Salad Caprese</div>
            <div className="recipe__container__content">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
              herbs, olive oil, and balsamic vinegar create a refreshing dish
              for lunch or appetizer.
            </div>
            <img src={Avatar.src} className="recipe__container__avatar"></img>
            <div className="recipe__container__author">Salad Caprese</div>
            <button className="recipe__container__button">
              View now -&gt;
            </button>
          </div>
          <div className="recipe__title">Recipe of the day</div>
        </div>
      </div>
      <div className="summer__recipe__container">
        <div className="summer__recipe__title"> This Summer Recipes</div>
        <div className="summer__recipe__content">
          We have all your Independence Day sweets covered.
        </div>
        <div className="summer__recipe__list">
          <Item img={Avatar.src} name="Salad Caprese" time="14 minutes" />
          <Item img={Avatar.src} name="Salad Caprese" time="14 minutes" />
          <Item img={Avatar.src} name="Salad Caprese" time="14 minutes" />
          <Item img={Avatar.src} name="Salad Caprese" time="14 minutes" />
        </div>
      </div>
    </>
  );
}
