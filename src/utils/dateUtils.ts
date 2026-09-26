/**
 * Calculate full elapsed years since a given date string (YYYY-MM-DD).
 * Updates dynamically over time without manual code changes.
 */
export function calculateYearsSince(startDateStr: string): number {
  const start = new Date(startDateStr);
  const now = new Date();
  
  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--;
  }
  
  return Math.max(years, 1);
}

// Official milestone start dates
export const JAROSLAV_JAGOS_START_DATE = '2007-10-14';
export const ZFP_GROUP_START_DATE = '1995-04-01';
