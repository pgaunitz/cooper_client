import React from "react";
import { Box, Header, Grommet, Form, FormField } from "grommet";
import { grommet } from "grommet/themes";

const InputFields = ({ onChangeHandler }) => {
  return (
    <>
      <Grommet theme={grommet}>
        <Header background="light-4" pad="small">
          <Box direction="column" gap="medium">
          <Form align>
        <FormField onChange={onChangeHandler} id ="distance" name="distance" placeholder="Distance"></FormField>
        <FormField onChange={onChangeHandler} id ="age" name="age" placeholder="Age"></FormField>
        <FormField htmlFor="select"> 
        <select onChange={onChangeHandler} name="gender" id="gender">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </FormField>
        </Form>
          </Box>
        </Header>
      </Grommet>
    </>
  );
};

export default InputFields;

