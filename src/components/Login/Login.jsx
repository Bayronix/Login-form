import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  number: Yup.string()
    .required("Number is required")
    .matches(/^\d+$/, "Number must be numeric"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const Login = () => {
  return (
    <Formik
      initialValues={{ name: "", surname: "", number: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <h3>Name</h3>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" />
          <h3>Surname</h3>
          <Field name="surname" type="text" />
          <ErrorMessage name="surname" component="span" />
          <h3>Number</h3>
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="span" />
          <h3>Email</h3>
          <Field name="email" type="text" />
          <ErrorMessage name="email" component="span" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
