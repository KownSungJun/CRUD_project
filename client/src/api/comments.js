import api from './axios';

/**
 * 댓글 조회
 * @param {Object} params
 * @param {string} params.postId            // 필수
 * @param {string=} params.parentCommentId  // 선택
 * @param {number=} params.page              // 기본값은 서버 DTO
 * @param {number=} params.limit             // 기본값은 서버 DTO
 */
export const getComments = (params) => {
  return api.post('https://turbo-fishstick-95wpjj594vv2xx4j-3000.app.github.dev/api/posts', {
    params,
  });
};