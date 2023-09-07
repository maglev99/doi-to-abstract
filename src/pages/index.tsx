import Head from "next/head";
import React, { useState } from "react";
import {
  Title,
  Text,
  Box,
  Container,
  Space,
} from "@mantine/core";

import { api } from "~/utils/api";

import DOIInput from "~/components/DOIInput";
import ErrorMessage from "~/components/ErrorMessage";
import Article from "~/components/Article";

interface AbstractData {
  title: string;
  abstract: string;
  error?: {
    message: string;
  };
}

export default function Home() {
  const [doi, setDOI] = useState<string>("");
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [abstract, setAbstract] = useState<string>("");
  const [error, setError] = useState<string>("");

  const doiQuery = api.example.doiData.useQuery(
    { doi: doi },
    { enabled: false }
  );

  const handleButtonClick = () => {
    // fetch doi data if text input field not empty
    if (doi) {
      void fetchDOIData();
    }
  };

  const fetchDOIData = async () => {
    const response = await doiQuery.refetch();
    const data: AbstractData | undefined = response.data;

    // update article title and abstract once data received
    if (data) {
      // display error if exists
      if (data.error?.message) {
        setError(data.error.message);
      } else {
        setError("");
      }
      // set article title and abstract
      setArticleTitle(data.title);
      setAbstract(data.abstract);
    }
  };

  return (
    <>
      <Head>
        <title>DOI to Abstract</title>
        <meta
          name="description"
          content="App that returns reseach article abstract based on article DOI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container size="md" px="sm" pt="xl">
          <Box
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[2],
              padding: theme.spacing.lg,
              borderRadius: 10
            })}
          >
            <Title order={2}>DOI to Abstract</Title>

            <Space h="lg" />

            <Text fz="lg">
              Input the DOI of a research article to get the abstract
            </Text>

            <Space h="sm" />

            <DOIInput
              doi={doi}
              setDOI={setDOI}
              handleButtonClick={handleButtonClick}
            />

            <Space h="xl" />

            {/* display error message */}
            {error && <ErrorMessage error={error} />}

            {/* display article title and abstract */}
            {articleTitle && abstract && (
              <Article articleTitle={articleTitle} abstract={abstract} />
            )}

            <Space h="sm" />
          </Box>
        </Container>
      </main>
    </>
  );
}
