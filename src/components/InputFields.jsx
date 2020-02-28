import React from "react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <>
      <label>Distance</label>
      <input onChange={onChangeHandler} name="distance" id="distance"></input>

      <select onChange={onChangeHandler} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

      <label>Age</label>
      <input onChange={onChangeHandler} name="age" id="age"></input>
    </>
  );
};

export default InputFields;




{/* <Grommet full theme={grommet}>
<Box fill align="center" justify="center">
  <Box width="medium">
    <Form>
    <FormField onChange={onChangeHandler} id ="distance" name="distance" placeholder="Distance"></FormField>
    <FormField htmlFor="select"> 
      <Select onChange={onChangeHandler} htmlFor="select" options={'male', 'female'} name="gender" id="gender">
      </Select>
    </FormField>
    <FormField onChange={onChangeHandler} id ="age" name="age" placeholder="Age"></FormField>
    </Form>
  </Box>
</Box>
</Grommet> */}