import styles from "./Filters.view.module.css";

export const FiltersSection = () => {
  return (
    <div className={styles.container}>
      <h5>Search</h5>
      <input type="text" placeholder="Search" />
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Samsung
        </label>
      </div>

      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          LG
        </label>
      </div>

      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Toshiba
        </label>
      </div>

      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Sony
        </label>
      </div>
    </div>
  );
};
