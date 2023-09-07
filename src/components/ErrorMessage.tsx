// Component that displays error message when getting DOI fails
import React from "react";
import { Space, Title, Text } from "@mantine/core";

import ContentBox from "./ui/ContentBox";

interface Props {
  error: string;
}

const ErrorMessage = ({ error }: Props) => {
  return (
    <>
      <Title order={4} color="red.9">
        Error:
      </Title>
      <Space h="xs" />
      <ContentBox>
        <Text fz="lg" color="red.9">
          {error}
        </Text>
      </ContentBox>
    </>
  );
};

export default ErrorMessage;
