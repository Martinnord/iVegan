import React from "react";
import { Formik, Field } from "formik";
import Layout from "../components/Layout";
import { InputField } from "../components/InputField";
import { RegisterComponent } from "../components/apollo-components";

export default () => {
  return (
    <Layout title="Register">
      <RegisterComponent>
        {register => (
          <Formik
            initialValues={{
              email: "",
              username: "",
              firstName: "",
              lastName: "",
              password: ""
            }}
            onSubmit={async data => {
              const res = await register({ variables: { input: data } });

              console.log("res", res);
            }}
          >
            {({ values, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  placeholder="Email"
                  type="email"
                  component={InputField}
                />
                <Field
                  name="username"
                  placeholder="Username"
                  type="text"
                  component={InputField}
                />
                <Field
                  name="firstName"
                  placeholder="Firstname"
                  type="text"
                  component={InputField}
                />
                <Field
                  name="lastName"
                  placeholder="Lastname"
                  type="text"
                  component={InputField}
                />
                <Field
                  name="password"
                  placeholder="Password"
                  type="password"
                  component={InputField}
                />
                <button type="submit">submit</button>
              </form>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  );
};
