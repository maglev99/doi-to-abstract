// type for DOI article data returned from openalex api call 
export type DOIData = {
  title: string;
  abstract_inverted_index: Record<string, number[]>;
};