프론트 &amp; 백엔드 협업 repo

# 초반 프로젝트 설계
## 엔티티 구조
- User : 유저 정보 관련
- Post : 글 정보 관련
## 라우팅
라우팅은 NestJS에서 할 것이기 때문에 프론트에서는 개발용으로 페이지 스위칭 방식으로 UI 개발함 => 그냥 라우팅 일단 쓰고 합칠때 함 수정해야할 듯
### Post
#### Post 엔티티 구조
```js
Post {
    _id         // 고유 ID
    title       // 제목
    content     // 내용
    authorId    // 작성자 (User 참조)
    createdAt   // 생성일
    updatedAt   // 수정일
}
```
#### 스키마 변환
```js
const postSchema = new Schema({
    title: String,
    content: String,
    authorId: OjectId,
    createdAt: Date,
    updatedAt: Date,
})
```
### User
```js
User {
    id              //아이디
    username        //유저 이름
    password        //비밀번호
    userCreatedAt   //계정 생성 시간
}
```
#### 스키마 변환
```js
const userSchema = new Schema({
    id: String,
    username: String,
    password: String,
    userCreatedAt: Date,
})
```

# client
## pages
- LoginPage.jsx : 로그인
![alt text](docs/images/image.png)
- RegisterPage.jsx : 회원가입
![alt text](docs/images/image-1.png)
- WritePage.jsx : 글쓰기
![alt text](docs/images/image-2.png)
- PostPage.jsx : 포스트 읽기
- PostListPage.jsx : 포스트 목록

## 대충 만든 프론트 느낌
```text
/ PostListPage(메인 페이지) : 글들이 나열되어 있음
/login LoginPage : 로그인 창
/register RegisterPage : 회원가입 창
/post:id PostPage : 글 세부 창
/write WritePage : 글 작성 창
/mypage:id MyPage : 내 정보 볼 수 있는 창
```
## 관련 vscode extension
https://nyol.tistory.com/88 : react styled-components 인텔리센스

# server
[api 명세서](./server/docs/api-spec.md) <br>
[학습 내용](./server/docs/study.md)

# api
/users/:id POST
/users/register POST
/posts/:id GET
/posts GET
/posts POST
/posts/:id PATCH
/posts/:id DELETE
/auth/login POST
/comments POST
/comments GET
