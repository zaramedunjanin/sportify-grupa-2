import React, { useEffect, useState } from "react";
import style from "./RatingStars.module.scss";
import { Form, Formik } from "formik";
import axios from "axios";
import { baseURL } from "../../../../services/AdminService/adminService";
import { useTranslation } from "react-i18next";
const RatingStart = ({ venue, user, oldRating, ...props }) => {
  if (oldRating === "") oldRating = 0;
  const [newRating, setNewRating] = useState(oldRating);
  const [hover, setHover] = useState(0);
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={{
        rating: oldRating,
        user: user,
        venue: venue,
      }}
      onSubmit={(values, actions) => {
        values["user"] = user;
        values["rating"] = newRating;
        console.log(values);
        axios.post(`${baseURL}/tables/ratings/add/`, values).catch((error) => {
          console.log(error.response);
        });
        props.submitted();
      }}
    >
      {({ values, errors }) => (
        <Form>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <>
                <button
                  type="button"
                  key={index}
                  className={
                    index <= (hover || newRating || oldRating)
                      ? style.on
                      : style.off
                  }
                  onClick={() => setNewRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(newRating)}
                >
                  <span className="material-symbols-outlined">star</span>{" "}
                </button>
              </>
            );
          })}
          <button type="submit">{t("rate")}</button>
        </Form>
      )}
    </Formik>
  );
};

export default RatingStart;
