const PERSIAN_DIACRITICS_REGEX = /[\u064B-\u0652\u0670\u0640]/g; // tanwin, tashdid, sukun, tatweel

export function normalizePersian(input: string): string {
  return (input || '')
    .replace(/\u200c/g, ' ') // ZWNJ to space
    .replace(PERSIAN_DIACRITICS_REGEX, '')
    .replace(/[\u0622]/g, '\u0627') // آ -> ا
    .replace(/[\u064A\u06CC]/g, '\u06CC') // normalize ی
    .replace(/[\u0643\u06A9]/g, '\u06A9') // normalize ک
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

const PROFANITY_WORDS: string[] = [
  // Common Persian swear/profane words (normalized, lowercase)
  'گایید', 'گاییدن', 'گاییدم', 'کس', 'کص', 'کسکش', 'جنده', 'حرومزاده',
  'سکس', 'سکسی', 'کیر', 'کون', 'لعنتی', 'ناموس',
  'تف به', 'پدرسوخته', 'بی ناموس', 'بی‌ناموس', 'بیناموس', 'کثافت', 'عن', 'گوه', 'کس لیس',
  'پورن', 'پورنو', 'پورنوگرافی', 'س.ک.س', 'زنا', 'فاحشه', 'هرزه', 'روسپی',
  'لاشی', 'حرامزاده', 'fuck', 'sex', 'porn'
];

const PROFANITY_REGEXES = PROFANITY_WORDS.map(w => {
  const escaped = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = `(^|\\s|\\n)${escaped}(?=\\s|\\.|،|!|\\?|:|;|\\n|$)`;
  return new RegExp(pattern, 'i');
});

export function containsProfanity(input: string): { matched: string[] } {
  const normalized = normalizePersian(input);
  const matched = PROFANITY_REGEXES
    .filter(rx => rx.test(normalized))
    .map(rx => rx.source);
  return { matched };
}

export function isPersianNameValid(name: string): boolean {
  return /^[\u0600-\u06FF\s]{2,30}$/.test(name);
}

export function isPersianContentValid(content: string): boolean {
  return /^[\u0600-\u06FF\s\.,!؟،؛:\-\(\)\n]{5,600}$/.test(content);
}


