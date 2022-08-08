import React, { useState } from "react";
import * as Yup from "yup";
import { Formik , Field} from "formik";
import { placeholder } from "./placeholder";
import worker from "./worker"; 
import Loaders from "./spinner";
import hljs from 'highlight.js';
import "highlight.js/styles/xcode.css"


// const ValidationSchema = Yup.object().shape({
//   question: Yup.string()
//     .min(1, "Minimal length: 1")
//     .max(16, "Maximum length: 100")
//     .matches(
//       "^^[a-zA-Z0-9\s]*$",
//     )
//     .required("Minimum length: 1")
// });



export default function InitialForm () {
  let result = ""
  const [formValues, setFormValue] = useState({question: ""});
  const [payLoad, setPayLoad] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  //TODO: add a spinner to the form

  return (
    
    <Formik
   
      initialValues={{ question: "" }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setIsEntered(true);
        setFormValue(values);
        result = await worker(values.question);
        if (result !== null){
          setPayLoad(result);
          setIsLoading(false);
        }
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
            autocomplete="off"
            className=" block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100  focus:bg-opacity-50 focus:backdrop-blur-lfocus:border-gray-500"
          />
          <button type="submit">Submit</button>
          <pre style={{display: isEntered ? "block" : "none"}} className="bg-gray-100 border-t-4 border-gray-400 bg-opacity-50 backdrop-blur-l  rounded-md px-4 py-3 shadow-md mt-6">
            {isLoading ? <center><Loaders/></center> : <div className="answerbox" dangerouslySetInnerHTML={{__html: hljs.highlightAuto(payLoad).value}} />}
          </pre>
        </form>


      
        );
      }}
    </Formik>
  );
}