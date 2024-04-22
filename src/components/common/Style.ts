// globalStyle

import {CSSProperties} from "react";

type TStyleKey =
// | 'blue'
  | 'gray'
  | 'global'
// | 'sign'
// | 'profileImg'
// | 'footerCover'
// | 'footer'
// | 'skillKeywordBadge';

export const Style: Record<TStyleKey, CSSProperties> = {
  gray: {
    color: "slategrey"
  },
  global: {
    fontFamily: 'Pretendard',
    lineHeight: 1.5,
  }
}