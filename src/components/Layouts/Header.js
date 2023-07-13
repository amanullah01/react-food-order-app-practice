import { Fragment } from "react";

import mealsImage from "../../Assets/meals.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="List of delicious foods!" />
      </div>
    </Fragment>
  );
};

export default Header;
