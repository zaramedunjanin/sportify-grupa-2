import React from "react";
import { Formik } from "formik";

const initialData = {
  venue_name: "",
  address: "",
  opening_time: "",
  closing_time: "",
  price_per_hour: "",
};

const Basic = () => (
  <div>
    <Formik
      initialValues={initialData}
      validate={(values) => {
        const errors = {};
        if (!values.venue_name) {
          errors.venue_name = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        // <form onSubmit={handleSubmit}>
        //   <input
        //     type="email"
        //     name="email"
        //     onChange={handleChange}
        //     onBlur={handleBlur}
        //     value={values.email}
        //   />
        //   {errors.email && touched.email && errors.email}
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Venue name
            </label>
            <input
              type="text"
              class="form-control"
              name="venue_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.venue_name}
              id="exampleInputEmail1"
            />
            {errors.venue_name && touched.venue_name && errors.venue_name}
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Adress
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="opening_time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.opening_time}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Type
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="closing_time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.closing_time}
            />
          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">
              Image
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Price per hour
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="price_per_hour"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price_per_hour}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Opening time
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="opening_time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.opening_time}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Closing time
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="closing_time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.closing_time}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Sport
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
