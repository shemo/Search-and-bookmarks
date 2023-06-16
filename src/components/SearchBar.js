import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SearchBar = ({ onSearch }) => {
  const validationSchema = Yup.object({
    search: Yup.string()
      .required("Search term is required")
      .min(3, "Search term must be at least 3 characters"),
  });

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSearch(values.search);
    },
  });

  return (
    <form className="p-5 mx-auto max-w-sm" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        value={formik.values.search}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-200"
        placeholder="Search repositories..."
      />
      {formik.touched.search && formik.errors.search && (
        <div className="text-red-500 my-2">{formik.errors.search}</div>
      )}

      <button
        type="submit"
        className="mt-2 w-full px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
