import Logo from "../../assets/svg/logo";
import styles from "./Header.view.module.css";
export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Logo />
          </a>
        </div>
      </nav>
      <h6 className={styles.pageName}>
        Home &gt; <span className={styles.sectionName}>Search</span>{" "}
      </h6>
    </>
  );
};
