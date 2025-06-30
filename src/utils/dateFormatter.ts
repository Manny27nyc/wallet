// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { format } from 'date-fns';

import type { Locale } from 'date-fns';

export const formatPasskeyDate = (date: Date, locale?: Locale) => {
  return format(date, 'yyyy-MM-dd HH:mm:ss', { locale });
};
