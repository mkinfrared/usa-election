type Party = "democrat" | "republican";

export interface Candidate {
  name: string;
  imageSrc: string;
  party: Party;
}
