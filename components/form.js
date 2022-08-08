import React, { useState } from "react";
import * as Yup from "yup";
import { Formik , Field} from "formik";
import { placeholder } from "./placeholder";
import worker from "./worker"; 
import Loaders from "./spinner";

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
  let isMounted = false;
  const [formValues, setFormValue] = useState({
    question: ""
  });
  const [payLoad, setPayLoad] = useState("");


  return (
    
    <Formik
   
      initialValues={{ question: "" }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        console.log(values);
        setFormValue(values);
        result = await worker(values.question);
        if (result !== null){
          isMounted = true;
          setPayLoad(result);
        }
        // setPayLoad(result);
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
          <div className="bg-gray-100 border-t-4 border-gray-400 rounded-b text-gray-900 px-4 py-3 shadow-md mt-6">
         {/* {isMounted ? <pre><code>{payLoad}</code></pre> : <Loaders/>} */}
           <pre><code>{payLoad}</code></pre>
          </div>

         

  

        </form>


      
        );
      }}
    </Formik>
  );
}
