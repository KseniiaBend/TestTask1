export type Set = {
  name: string;
  logoUrl: string;
  code: string;
  ptcgoCode: string;
  releaseDate: string;
  standardLegal: boolean;
  expandedLegal: boolean;
  symbolUrl: string;
};

export interface Sets {
  sets: Set[];
}
