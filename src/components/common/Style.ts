// globalStyle

import { CSSProperties } from 'react'

type TStyleKey =
  // | 'blue'
  'gray' | 'global' | 'detail' | 'detailGray' | 'sideProjectDetail'
// | 'sign'
// | 'profileImg'
// | 'footerCover'
// | 'footer'
// | 'skillKeywordBadge';

export const Style: Record<TStyleKey, CSSProperties> = {
  gray: {
    color: 'slategray',
  },
  global: {
    fontFamily: 'Pretendard',
    lineHeight: 1.5,
  },
  detail: {
    fontSize: '75%',
    whiteSpace: 'pre-wrap',
  },
  detailGray: {
    color: 'gray',
    fontSize: '75%',
    whiteSpace: 'pre-wrap',
  },
  sideProjectDetail: {
    color: 'slategray',
    whiteSpace: 'pre-wrap',
  },
}
