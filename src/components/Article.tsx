// Component that displays article title and abstract
import React from "react";
import { Space, Title, ScrollArea, Text } from "@mantine/core";

import ContentBox from "./ui/ContentBox";

interface Props {
  articleTitle: string;
  abstract: string;
}

const Article = ({ articleTitle, abstract }: Props) => {
  return (
    <>
      <Title order={4}>Article Title:</Title>
      <Space h="xs" />
      <ContentBox>
        <Text fz="lg">{articleTitle}</Text>
      </ContentBox>
      <Space h="lg" />
      <Title order={4}>Abstract:</Title>
      <Space h="xs" />
      <ScrollArea.Autosize mah={500}>
        <ContentBox>
          <Text fz="lg">{abstract}</Text>
        </ContentBox>
      </ScrollArea.Autosize>
    </>
  );
};

export default Article;
