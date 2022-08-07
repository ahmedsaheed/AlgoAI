import React from "react";
import { useFormik } from "formik";
import { placeholder } from "./placeholder";

const InitialForm = () => {
    const formik = useFormik({
        initialValues: { question: "" },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
      });
      return (
       <form onSubmit={formik.handleSubmit} >
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="question">Ask Whatever</label>
          <input
            id="question"
            name="question"
            type="text"
            placeholder={placeholder()}
            onChange={formik.handleChange}
            value={formik.values.question}
            className=" block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <button type="submit">Submit</button>
        </form>
                   
      );
}

export default InitialForm;