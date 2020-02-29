import React from "react";
import cooperCalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";
import { Box, Grommet, Button } from "grommet";
import { grommet } from "grommet/themes";

const DisplayCooperResult = ({ 
  distance, 
  gender, 
  age,
  authenticated,
  entrySaved,
  entryHandler
 }) => {
  const result = cooperCalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
        <>
          <Grommet full theme={grommet}>
            <Box align="center">
              <p id="cooper-message">
                {age} y/o {gender} running {distance} meters.
              </p>
              <p id="cooper-result">Result: {result}</p>
              {authenticated && !entrySaved ? (
                <Button
                  id="save-result" label="Save entry"
                  onClick={() => saveData(result, entryHandler)}
                >
                </Button>
              ) : (
                <p id="response-message">Your entry was saved</p>
              )}
            </Box>
          </Grommet>
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;

