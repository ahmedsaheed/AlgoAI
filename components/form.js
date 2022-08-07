import React from "react";
import { useFormik } from "formik";
import { placeholder } from "./placeholder";

const InitialForm = () => {
    const formik = useFormik({
        initialValues: { Text: "" },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
      });
      return (
       <form onSubmit={formik.handleSubmit} >
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={placeholder()}
            onChange={formik.handleChange}
            value={formik.values.email}
            className=" block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <button type="submit">Submit</button>
        </form>
                   
      );
}

export default InitialForm;