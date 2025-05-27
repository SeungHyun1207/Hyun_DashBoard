/**
 *  내용 : Comment API
 */

export interface ICommentListFetchResponse {
  commentId: string;
  userId: string;
  profileImage: string;
  createUser: string;
  createDttm: string;
  updateUser: string;
  updateDttm: string;
  likeCount: number;
  isLikeByCurrentUser: string;
  isMyComment: boolean;
  parentId?: string;
  children: IChildrenComment[];
}

// 자식 댓글
export interface IChildrenComment {
  commentId: string;
  userId: string;
  profileImage: string;
  createUser: string;
  createDttm: string;
  updateUser: string;
  updateDttm: string;
  likeCount: number;
  isLikeByCurrentUser: string;
  isMyComment: boolean;
  parentId?: string;
}
