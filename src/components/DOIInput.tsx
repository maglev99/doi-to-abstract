// Component for inputting DOI
import React from "react";
import { Grid, TextInput, Button } from "@mantine/core";

interface Props {
  doi: string;
  setDOI: React.Dispatch<React.SetStateAction<string>>;
  handleButtonClick: () => void;
}

const DOIInput = ({ doi, setDOI, handleButtonClick }: Props) => {
  return (
    <Grid gutter="md">
      <Grid.Col span="auto">
        <TextInput
          placeholder="10.ABC123/peerj.123"
          value={doi}
          onChange={(event) => setDOI(event.currentTarget.value)}
        />
      </Grid.Col>

      <Grid.Col span="content">
        <Button onClick={handleButtonClick}>Get Abstract</Button>
      </Grid.Col>
    </Grid>
  );
};

export default DOIInput;
