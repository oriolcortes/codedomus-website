export type CheatItem = {
  primary: string;
  secondary?: string;
  meta?: string;
};

export type CheatSection = {
  id: string;
  title: string;
  notes?: string;
  items: CheatItem[];
};

export type CheatSheetData = {
  title: string;
  description?: string;
  sections: CheatSection[];
  ui?: {
    searchPlaceholder?: string;
    searchHelper?: string;
    footerText?: string;
  };
};
