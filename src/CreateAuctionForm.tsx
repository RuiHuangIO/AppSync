import * as React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Mutation } from "react-apollo";
import { createAuction } from "./graphql/mutations";
import gql from "graphql-tag";
import { CreateAuctionMutationVariables, CreateAuctionMutation } from "./API";

interface FormValues {
  name: string;
  price: number;
}

export const CreateAuctionForm = () => {
  return (
    <Mutation<CreateAuctionMutation, CreateAuctionMutationVariables>
      mutation={gql(createAuction)}
    >
      {createAuction => (
        <Formik<FormValues>
          initialValues={{
            name: "",
            price: 0
          }}
          onSubmit={async ({ name, price }) => {
            //call mutation
            const response = await createAuction({
              variables: {
                input: {
                  name,
                  price
                }
              }
            });
            console.log(response);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  name="name"
                  label="Name"
                  value={values.name}
                  onChange={handleChange}
                  margin="normal"
                />
              </div>
              <div>
                <TextField
                  name="price"
                  label="Price"
                  value={values.price}
                  onChange={handleChange}
                  margin="normal"
                />
              </div>
              <div>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Formik>
      )}
    </Mutation>
  );
};
