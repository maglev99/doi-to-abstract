// Component that adds styling and background color to child content components
import React, { type ReactNode } from "react";
import { Box } from "@mantine/core";

interface Props {
  children: ReactNode;
}

const ContentBox = ({ children }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        padding: theme.spacing.md,
        borderRadius: 10,
      })}
    >
      {children}
    </Box>
  );
};

export default ContentBox;
