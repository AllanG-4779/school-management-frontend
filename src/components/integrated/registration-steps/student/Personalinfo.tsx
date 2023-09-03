import { Field, Formik, useFormikContext } from "formik";
import { Form } from "formik";

const Personalinfo = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstname: "" }}
        onSubmit={() => console.log("Hello")}
      >
        {({ values }) => (
          <Form>
            {values.firstname}
            <Field name="firstname" type="email" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Personalinfo;
