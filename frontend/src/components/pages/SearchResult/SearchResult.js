import React from 'react';
import { Formik } from 'formik'
import {
  useMutation
} from '@tanstack/react-query'
import RegisterUser from '../../../services/Auth/Mutator';

// Create a client

/*
  - formik forma i validacija
  - vidjet da li se moze s vana menjat state
  - za onsubmit koristit react query a post metoda ce se nalazit u drugom fajlu 
*/

const SearchResult = () => {
  // Mutations
  const mutation = useMutation({
    mutationFn: RegisterUser,
  })



  return <>
    <div style={{ width: "650px", marginTop: "100px", marginLeft: "auto", marginRight: "auto" }}>
      <h1>Anywhere in your app!</h1>
      <h2>{mutation.isLoading ? <div>Adding todo...</div> : null}</h2>
      <h2>{mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}</h2>
      <h2>{mutation.isSuccess ? <div>User registered</div> : null}</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Required';
          } else if (
            values.password.length < 5
          ) {
            errors.password = 'Password should contain more than 5 characters';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          mutation.mutate({ username: 'almir.handaba1k4a1', password: 'almir.handabaka1', email: values.email, first_name: 'almir', last_name: 'handabaka1', city: 'Sarajevo', phone_number: '060654851', })
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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  </>
}

export default SearchResult;