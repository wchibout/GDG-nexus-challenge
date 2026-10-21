export interface RegistryItem {
  id: string;
  name: string;
  category: string;
  region: string;
  description: string;
  tags: string[];
  code: string;
  testCase?: string;
}

export interface HighlightSegment {
  text: string;
  isMatch: boolean;
}
