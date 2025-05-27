/**
 *  LLM (Large Language Model) Model
 *  💡LLM이란?
 *  LLM은 "Large Language Model"의 약자로,  대량의 텍스트 데이터를 학습해 사람이 쓰는 자연어를 이해하고 생성할 수 있는 AI 모델
 */

/**
 *  응답형태는 일치화 시키는게 좋다.
 *  ex ) 히스토리, 여러 질문 카테고리
 */
export interface LLMChatMessageCommonResponse {
  // 채팅방 아이디
  chatRoomId: number;
  // 채팅 질의응답 아이디
  chatQnaId: number;
  // 질문 시간
  questionDateTime: string;
  // 응답 시간
  answerDateTime: string;
  // 세션 아이디
  sessionId: string;
  // 질의응답에 대한 좋아요
  qnaGoodFlag: boolean;
  // 질의응답에 대한 싫어요
  qnaBadFlag: boolean;
  // 질문
  chatRequest: {
    // 채팅방 아이디
    chatRoomId: number;
    // 내 메세지
    myMessage: string;
    // 세션아이디
    sessionId: string;
  };
  // 응답
  chatResponse: {
    // 응답의 Type
    type: string;
    // 응답 데이터
    json_data:
      | {
          // 사번
          empNo: string;
          // 내용
          content: string;
          // 키워드
          keywords: string;
          // AI 의견
          reason: string;
          // AI 키워드 의견
          keywordsReason: string;
          // 팁
          tips: string;
        }[]
      | object;
    // ErrorMessage
    errorMessage: string;
  };
}
