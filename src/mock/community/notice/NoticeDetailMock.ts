/**
 *  공지사항 상세
 */

export interface INoticeDetailResponse {
  noticeId: number;
  title: string;
  content: string;
  createUser: string;
  createDttm: string;
  updateUser: string;
  updateDttm: string;
  isPinned: boolean;
  isVisible: string;
  viewCount: number;
  attachments?: File[];
}

export const mockNoticeDetail: INoticeDetailResponse = {
  noticeId: 101,
  title: '서비스 점검 안내',
  content: `
    안녕하세요, 운영팀입니다.  
    시스템 안정화를 위한 정기 점검이 아래와 같이 진행될 예정입니다.  
    
    📅 일정: 2025년 5월 10일(토) 00:00 ~ 06:00  
    🔧 내용: 서버 및 DB 최적화 작업  
    ⚠️ 점검 시간 동안 일부 기능이 일시적으로 중단될 수 있습니다.  

    이용에 불편을 드려 죄송하며, 더욱 안정적인 서비스 제공을 위해 노력하겠습니다.
  `,
  createUser: 'admin',
  createDttm: '2025-05-01T10:30:00',
  updateUser: 'admin',
  updateDttm: '2025-05-03T09:15:00',
  isPinned: true,
  isVisible: 'Y',
  viewCount: 248,
  attachments: [
    new File(['점검 안내 이미지'], 'maintenance.png', { type: 'image/png' }),
    new File(['안내문'], 'notice.pdf', { type: 'application/pdf' }),
  ],
};
