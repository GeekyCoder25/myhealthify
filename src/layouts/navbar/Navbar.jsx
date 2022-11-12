import logo from "../../assets/logo.svg";
import sort from "../../assets/Sort.svg";
import user from "../../assets/user.png";

import dash from "../../assets/dash.svg";
import notification from "../../assets/notification.svg";
import calender from "../../assets/calender.svg";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <aside className={classes.logoContainer}>
        <img src={logo} alt="logo" style={{ width: "60%" }} />
        <img src={sort} alt="sort" className={classes.icon} />
      </aside>

      <aside className={classes.asideNav}>
        <div className={classes.refer}>
          <p>refer a friend</p>
          <img
            src={dash}
            alt=""
            className={classes.icon}
            style={{ marginRight: "1rem" }}
          />
        </div>

        <div className={classes.navIcon}>
          <img src={notification} alt="" className={classes.icon} />
          <img src={calender} alt="" className={classes.icon} />
          <img src={user} alt="" className={classes.icon} />
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
