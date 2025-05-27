/**
 *  DateTimeUtils
 *  사용법 : dayjs(값).format(DateTimeFormat.YYYYMMDD)
 */

export enum DateTimeFormat {
  /** 20251207 */
  YYYYMMDD = 'YYYYMMDD', // 20251207

  /** 2025-12-07 */
  YYYY_MM_DD = 'YYYY-MM-DD', // 2025-12-07

  /** 2025/12/07 */
  YYYY_SLASH_MM_DD = 'YYYY/MM/DD', // 2025/12/07

  /** 2025.12.07 */
  YYYY_DOT_MM_DD = 'YYYY.MM.DD', // 2025.12.07

  /** 2025년 12월 7일 */
  KOR_YYYY_MM_DD = 'YYYY년 MM월 DD일', // 2025년 12월 07일

  /** 2025 12 07 */
  YYYY_MM_DD_BLANK = 'YYYY MM DD', // 2025 12 07

  /** 12-07 */
  MM_DD = 'MM-DD', // 12-07

  /** 12/07 */
  MM_SLASH_DD = 'MM/DD', // 12/07

  /** 12월 07일 */
  KOR_MM_DD = 'MM월 DD일', // 12월 07일

  /** 2025-12-07 10:30 */
  YYYY_MM_DD_HH_MM = 'YYYY-MM-DD HH:mm', // 2025-12-07 10:30

  /** 2025/12/07 10:30:00 */
  YYYY_SLASH_MM_DD_HH_MM_SS = 'YYYY/MM/DD HH:mm:ss', // 2025/12/07 10:30:00

  /** 2025-12-07T10:30:00 */
  ISO_DATETIME = 'YYYY-MM-DDTHH:mm:ss', // 2025-12-07T10:30:00

  /** 10:30 */
  HH_MM = 'HH:mm', // 10:30

  /** 오전 10:30 */
  KOR_HH_MM_A = 'A hh:mm', // 오전 10:30

  /** 10:30:55 */
  HH_MM_SS = 'HH:mm:ss', // 10:30:55

  /** 2025년 12월 7일 일요일 */
  KOR_FULL_DATE_WITH_DAY = 'YYYY년 M월 D일 dddd', // 2025년 12월 7일 일요일
}
