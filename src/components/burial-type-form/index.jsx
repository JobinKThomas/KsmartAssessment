import { Formik } from "formik";

const BurialTypeForm = ({ initialValues, onSubmit }) => {
  return (
    <>
      <h1>Add BurialType</h1>
      <Formik
        initialValues={initialValues}
        validate={(values) => {}}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setTimeout(() => {
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <select
              name="status"
              value={values.status}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="">None</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && touched.status && errors.status}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default BurialTypeForm;
