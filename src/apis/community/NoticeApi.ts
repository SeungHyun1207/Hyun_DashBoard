/**
 *  내용 : 공지사항 API
 */

import { CommonRequest } from '../../models/commons/CommonModels';

export interface INoticeListFetchResponse {
  noticeId: string;
  noticeTitle: string;
}

export const getNoticeList = async () => {
  const request: CommonRequest = {
    url: `/notice/list`,
    params: new URLSearchParams(),
  };
  try {
    return await getRestApi<INoticeListFetchResponse[]>(request);
  } catch (error) {
    console.log(error);
  }
};
