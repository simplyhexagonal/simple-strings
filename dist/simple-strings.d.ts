import { MultiReplaceSyncPatterns } from '@simplyhexagonal/multi-replace';
export declare const diacriticReplacePatterns: MultiReplaceSyncPatterns;
/**
 * This function transforms international diacritic characters in
 * a given string to their "normal" representations.
 * (i.e. "Árvíztűrő tükörfúrógép!" becomes "Arvizturo tukorfurogep!")
 */
export declare const removeDiacritics: (string: string, limitLength?: boolean) => string;
export declare const makeUrlSafe: (string: string) => string;
