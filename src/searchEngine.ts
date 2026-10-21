import { RegistryItem } from './types';

export function getItemName(item: any): string {
  if (typeof item === 'string') return item;
  if (item && typeof item.name === 'string') return item.name;
  return '';
}

export function normalizeText(str: string): string {
  if (!str) return '';
  return str
    .replace(/[’‘`]/g, "'")
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function stripPunctuation(str: string): string {
  return normalizeText(str).replace(/[^a-z0-9]/g, '');
}

export function searchItems(query: string, items: any[]): any[] {
  const cleanQuery = normalizeText(query).trim();
  const compactQuery = stripPunctuation(query);

  if (!cleanQuery) {
    return items;
  }

  const matches = items.filter((item) => {
    const name = getItemName(item);
    const cleanName = normalizeText(name);
    const compactName = stripPunctuation(name);

    if (cleanName.includes(cleanQuery)) {
      return true;
    }

    if (compactQuery.length > 0 && compactName.includes(compactQuery)) {
      return true;
    }

    if (typeof item === 'object' && item !== null) {
      if (Array.isArray(item.tags)) {
        const matchesTag = item.tags.some((tag: string) => normalizeText(tag).includes(cleanQuery));
        if (matchesTag) return true;
      }
      if (typeof item.category === 'string' && normalizeText(item.category).includes(cleanQuery)) {
        return true;
      }
    }

    return false;
  });

  return matches.sort((a, b) => {
    const nameA = normalizeText(getItemName(a));
    const nameB = normalizeText(getItemName(b));

    const aStartsWith = nameA.startsWith(cleanQuery);
    const bStartsWith = nameB.startsWith(cleanQuery);
    if (aStartsWith && !bStartsWith) return -1;
    if (!aStartsWith && bStartsWith) return 1;

    const aWordStart = nameA.split(/[\s'’\-]+/).some((w) => w.startsWith(cleanQuery));
    const bWordStart = nameB.split(/[\s'’\-]+/).some((w) => w.startsWith(cleanQuery));
    if (aWordStart && !bWordStart) return -1;
    if (!aWordStart && bWordStart) return 1;

    return getItemName(a).localeCompare(getItemName(b));
  });
}

export function getHighlightedText(text: string, query: string) {
  if (!query || !query.trim()) {
    return [{ text, isMatch: false }];
  }

  const cleanText = normalizeText(text);
  const cleanQuery = normalizeText(query).trim();

  const matchIndex = cleanText.indexOf(cleanQuery);

  if (matchIndex !== -1) {
    const matchLength = cleanQuery.length;
    const before = text.slice(0, matchIndex);
    const matched = text.slice(matchIndex, matchIndex + matchLength);
    const after = text.slice(matchIndex + matchLength);

    return [
      { text: before, isMatch: false },
      { text: matched, isMatch: true },
      { text: after, isMatch: false },
    ].filter((part) => part.text.length > 0);
  }

  const compactQuery = stripPunctuation(query);
  const compactText = stripPunctuation(text);
  
  if (compactQuery.length > 0 && compactText.includes(compactQuery)) {
    return [{ text, isMatch: true }];
  }

  return [{ text, isMatch: false }];
}
