import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type DOIData } from "~/types/DOIData";

import { invertedIndexToString } from "~/utils/invertedIndex/invertedIndexToString";

export const defaultRouter = createTRPCRouter({
  doiData: publicProcedure
    .input(z.object({ doi: z.string() }))
    .query(async ({ input }) => {
      try {
        // openalex api url to fetch article data
        const url = `https://api.openalex.org/works/https://doi.org/${input.doi}`;

        const response = await fetch(url);

        if (response.ok) {
          const data: DOIData = (await response.json()) as DOIData;
          const abstract = invertedIndexToString(data.abstract_inverted_index);

          return {
            title: data.title,
            abstract: abstract,
          };
        } else {
          let errorMessage = `An error occured, status code: ${response.status}`;

          // Return specific error message if status is 404 not found
          if (response.status === 404) {
            errorMessage =
              "The article you requested could not be found, please check the DOI is correct and try again.";
          }

          return {
            title: "",
            abstract: "",
            error: { message: errorMessage },
          };
        }
      } catch (error) {
        return {
          title: "",
          abstract: "",
          error: {
            message: `An error occurred, error: ${(error as Error).message}`,
          },
        };
      }
    }),
});
