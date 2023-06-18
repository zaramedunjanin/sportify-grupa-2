import React, { useEffect, useState } from "react";
import style from "./RatingStars.module.scss";
import {Form, Formik} from "formik";
import axios from "axios";
import {baseURL} from "../../../../services/AdminService/adminService";
const RatingStart = ({venue, user}) => {
  const [newRating, setNewRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
      <Formik
    initialValues= {{
      rating: newRating,
        user: venue,
        venue: user,
    }}
  onSubmit={(values, actions) => {
      console.log(values)
          axios
              .put(`${baseURL}/tables/rating/${values.id}/`, values)
              .catch((error) => {
                  console.log(error.response);
              });
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
              className={index <= (hover || newRating) ? style.on : style.off}
              onClick={() => setNewRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(newRating)}
            >
              <span className="material-symbols-outlined">star</span>{" "}
            </button>
          </>
        );
      })}
      <button type="submit">Rate</button>
      </Form>
      )}
      </Formik>
  );
};

export default RatingStart;
