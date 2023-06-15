import React from "react";
import {getSportIcon} from "../../../../utils/utils";

import styles from "./SportCategoryButton.module.css"

const SportCategoryButton = (props) => {
    const icon = getSportIcon(props.sport_name)
    return (
        <button className={styles.button}>
            <span className={"material-symbols-outlined"}>{icon}</span>
            <h6> {props.sport_name}</h6>
        </button>
    )
}

export default SportCategoryButton