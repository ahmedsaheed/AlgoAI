import React, { useState } from "react";
import * as Yup from "yup";
import { Formik , Field} from "formik";
import { placeholder } from "./placeholder";
import {worker} from "./worker"; 

const ValidationSchema = Yup.object().shape({
  question: Yup.string()
    .min(1, "Minimal length: 1")
    .max(16, "Maximum length: 100")
    .matches(
      "^^[a-zA-Z0-9\s]*$",
    )
    .required("Minimum length: 1")
});

export default function InitialForm () {
  let result = "";
  const [formValues, setFormValue] = useState({
    question: ""
  });

  return (
    <Formik
      initialValues={{ question: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setFormValue(values);
        result = worker(values.question);
        setSubmitting(true);
        setTimeout(() => {
          resetForm();
          setSubmitting(false);
        }, 500);
        
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => {
        return (
        <form onSubmit={handleSubmit} >
          <Field
            id="question"
            name="question"
            type="text"
            placeholder= {placeholder()}
            onChange={handleChange}
            value={values.question}
            className=" block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <button type="submit">Submit</button>
  

        </form>


      
        );
      }}
    </Formik>
  );
}
