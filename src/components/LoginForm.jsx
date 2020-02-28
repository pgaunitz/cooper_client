import React from "react";

import { Box, Button, Grommet, Form, FormField, TextInput } from "grommet";
import { grommet } from "grommet/themes";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Grommet full theme={grommet}>
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form onSubmit={submitFormHandler} id ="login-form"
        >
          <FormField label="Email">
            <TextInput name="email" type="email" id="email" />
          </FormField>

          <FormField label="Password">
            <TextInput name="password" type="password" id="password" />
          </FormField>

          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Button type="submit" label="Submit" id="submit"/>
          </Box>
        </Form>
      </Box>
    </Box>
  </Grommet>
  );
};

export default LoginForm;


