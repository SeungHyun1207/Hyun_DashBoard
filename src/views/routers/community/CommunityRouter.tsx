/**
 *  내용 : Community Router
 */

import { Route, Routes } from 'react-router-dom';
import NoticeIndex from '../../pages/community/notice/NoticeIndex';
import NoticeCreateAndModify from '../../pages/community/notice/component/NoticeCreateAndModify';
import NoticeDetail from '../../pages/community/notice/component/NoticeDetail';

const CommunityRouter = () => {
  return (
    <Routes>
      <Route path="notice">
        <Route index element={<NoticeIndex />} />
        <Route path="create" element={<NoticeCreateAndModify />} />
        <Route path="modify" element={<NoticeCreateAndModify />} />
        <Route path=":noticeId" element={<NoticeDetail />} />
      </Route>
    </Routes>
  );
};

export default CommunityRouter;
