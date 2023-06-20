import React from "react";
import classes from './GenreCheckbox.module.css'
function GenreCheckbox(props) {
  const { genre, checked, onChange } = props;

  return (
    <div className={classes.checkbox}>
      <label>
        <input
          type="checkbox"
          value={genre}
          checked={checked}
          onChange={onChange}
        />
        <span class={classes.checkboxSpan}>{genre}</span>
      </label>
    </div>
  );
}

export default GenreCheckbox;
