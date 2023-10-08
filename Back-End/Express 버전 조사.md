# Express 버전 조사

## 각 버전별 주요 업데이트 내용

## 0.X

### **0.01 / 2010-01-03**

- 첫 릴리즈.

### **0.1.0 / 2010-02-03**

- 요청 처리를 위한 훅 변경.
- 세션 및 메모리 스토어 지원 도입.
- 다중 파트 업로드와 정적 파일 캐싱 지원 추가.

### **0.9.0 / 2010-04-14**

- 에러 처리를 위한 DSL 레벨 라우트 지원 추가.
- 뷰 부분과 라우트 매개변수 전처리 기능 도입.

### **0.10.0 / 2010-04-30**

- 문자셋 UTF-8 지원 및 에러 응답의 형식 확장.
- ETag 지원을 포함한 성능 개선.

### **0.11.0 / 2010-05-06**

- 다양한 템플릿 엔진을 사용하는 레이아웃 지원 추가.
- EJS 부분 지원 개선.

### **0.12.0 / 2010-05-22**

- node v0.1.96 호환성 및 쿠키 처리 개선.
- 뷰 헬퍼가 추가적인 로컬 변수로 작동 가능.

### **0.13.0 / 2010-06-01**

- node v0.1.97 호환성과 쿠키 삭제 기능 도입.
- 'not-found' 페이지의 문자셋을 utf-8로 수정.

### **0.14.0 / 2010-06-15**

- 상대 경로 요구사항을 활용한 기능 개선.
- Static bufferSize 옵션과 뷰 캐싱 문제 해결.

## 1.X

### **1.0.0beta / 2010-07-15**

- 전체 코드가 리라이트됨.
- 성능 향상과 코드 경량화 이루어짐.

### **1.0.0beta2 / 2010-07-23**

- 절대 뷰 경로 지원 추가.
- 뷰 로컬과 동적 뷰 로컬 지원을 위한 메서드 추가.

### **1.0.0rc / 2010-07-28**

- 마운트 후크 기능 도입.
- 라우트 콜백의 파라미터 구조 단순화.

### **1.0.0rc2 / 2010-08-17**

- 템플릿 엔진 매핑을 위한 `app.register()` 추가.
- `res.download()`과 `res.sendfile()`에 콜백 지원 도입.

### **1.0.0rc3 / 2010-09-20**

- 큰 파일 전송을 위한 스트림 임계값 설정과 스트리밍 지원 추가.
- 쿠키 제어 기능 강화.

### **1.0.0rc4 / 2010-10-14**

- 환경 변수 `NODE_ENV` 지원 도입, `EXPRESS_ENV` 폐기.
- JSONP와 쿼리 문자열 파서의 유연한 사용을 위한 기능 추가.

### **1.0.0 / 2010-11-16**

- 부분 객체 이름 자동 유추 기능 추가.
- 다양한 content type에 대한 `res.redirect()` 지원 확장.
- `express(1)` 명령어에 다양한 플래그와 설정 옵션 추가.

### **1.0.1 / 2010-12-29**

- 스택된 미들웨어의 수정으로 Express 메서드와 속성에 더 쉽게 액세스 가능.

### **1.0.8 / 2011-03-01**

- 부모 앱을 통한 `req.query` 미리 정의 지원.
- `EXPRESS_ENV` 지원 제거.

## 2.X

### 2.0.0beta / 2011-03-03

- HTTPS 지원 추가
- `res.cookie()`에 maxAge 지원 도입
- `req.header()`에서 "Referrer"와 "Referer" 둘 다 사용 가능
- 마운트 지원을 통한 `res.redirect()` 개선

### 2.0.0rc / 2011-03-14

- HTTPSServer 생성자 노출 버그 수정
- express(1)의 기본 테스트 문자셋 수정
- 기본 문자셋을 "utf8"에서 "utf-8"로 변경

### 2.0.0 / 2011-03-17

- index 뷰 경로 수정
- 객체 없이 `res.locals()` 반환 변경

### 2.1.0 / 2011-03-24

- `<root>/_?<name>` 부분 조회 지원 추가
- `req.flash()`에 req.session이 없을 때 예외 처리 추가
- JSON 응답을 위한 `res.send(bool)` 지원 추가

### 2.2.0 / 2011-03-30

- `app.lookup.VERB()` 추가, 예: `app.lookup.put('/user/:id')`
- `app.match.VERB()` 추가, 예: `app.match.put('/user/12')`
- `app.VERB(path)`를 `app.lookup.VERB()`의 별칭으로 추가

### 2.3.0 / 2011-04-25

- `res.clearCookie()`에 옵션 지원 추가
- `res.locals()`를 `res.helpers()`의 별칭으로 추가
- `res.send()` 사용 시 JSON 기본 설정을 UTF-8로 변경

### 2.4.0 / 2011-06-28

- 체인 가능한 `res.status(code)` 추가
- `res.json()`, `res.send(obj)`의 명확한 버전 추가
- 간단한 웹 서비스 예제 추가

### 2.5.0 / 2011-10-24

- 생성된 앱에 `./routes` 디렉토리 기본 추가
- `express(1)` 앱 생성에 npm 설치 리마인더 추가
- 0.5.x 지원 추가
- Node 0.5.x와 호환되지 않는 `make test-cov` 제거

### 2.5.5 / 2012-01-08

- 캐시된 템플릿에 파일 이름 설정 오류 수정

### 2.5.9 / 2012-04-02

- PURGE 요청 메소드 지원 추가
- 수신 대기 상태 이전에 `express(1)`로 생성된 앱의 `app.address()` 오류 수정

## 3.X

### **3.0.0 / 2012-10-23**

- HTTP 동사 메서드를 Router에 추가
- 응답에 Transfer-Encoding 헤더를 명시적으로 제거
- Etag 옵션 추가

### **3.0.0rc5 / 2012-09-18**

- CORS 예제 추가
- `x-powered-by` 설정 추가

### **3.0.0beta7 / 2012-07-16**

- `res.json(obj, status)` 지원 다시 추가

### **3.0.0beta6 / 2012-07-13**

- 에러 뷰 속성 추가
- `jsonp callback name` 설정 추가

### **3.0.0beta5 / 2012-07-03**

- 라우트 맵 예제 추가
- `res.json()`이 이전에 정의된 Content-Types를 유지하도록 변경

### **3.0.0alpha5 / 2012-05-30**

- `req.ip` 추가
- 서명된 쿠키 옵션 추가

### **3.0.0alpha4 / 2012-05-09**

- `res.jsonp()` 추가
- `res.send()`에서 ETag 인용 수정

### **3.0.0alpha1 / 2012-04-15**

- "view engine" 설정에서 앞에 "." 지원 추가
- 미들웨어 사용을 위한 `res.locals.use` 및 `app.locals.use` 제거

### **3.2.0 / 2013-04-15**

- "view" 생성자 설정 추가하여 뷰 동작 재정의 가능
- `req.acceptsEncoding(name)` 및 `req.acceptedEncodings` 추가

### **3.3.0 / 2013-06-26**

- JSON 응답에서 문자셋 제거
- req.accept* 함수에서 실제 불 값 반환

### **3.4.0 / 2013-09-07**

- `res.vary()`추가
- connect 업데이트

### **3.5.0 / 2014-03-06**

- 의존성 버전 업데이트

### **3.6.0 / 2014-05-09**

- `app.del()` 사용 중단, `app.delete()` 사용 권장
- PURGE 메서드 지원 추가

### **3.7.0 / 2014-05-18**

- 프록시 신뢰 설정 추가
- json, urlencoded 미들웨어를 body-parser로 대체

### **3.8.0 / 2014-05-21**

- res.send의 Content-Type에 적절한 문자셋 설정
- connect 업데이트

### **3.9.0 / 2014-05-30**

- ETag 제어를 위한 사용자 지정 및 기본 옵션 추가
- connect와 여러 미들웨어 업데이트

### **3.10.0 / 2014-06-02**

- `methodOverride()` 사용 중단 권고, 대신 method-override npm 모듈 사용 권장
- 여러 미들웨어 업데이트

### **3.11.0 / 2014-06-12**

- `req.accepts`에 "negotiator" 라이브러리 추가, 쿼리 매개 변수 지원 개선

### **3.12.0 / 2014-06-25**

- sendfile 옵션으로 “root” 경로 추가
- `res.sendfile`의 쿼리 문자열 지원 추가

### **3.12.1 / 2014-07-02**

- `res.redirect`에 대한 `status` 인수의 처리 수정

### **3.13.0 / 2014-07-03**

- `app.configure`에 대한 비권장 메시지 추가
- `req.auth`에 대한 비권장 메시지 추가
- `req.host`에서 포트 제거
- `app.param(function)` 비권장 추가

### **3.14.0 / 2014-07-11**

- "Rosetta Flash JSONP abuse" 보호 명시적 추가
- `res.redirect(url, status)` 비권장 -- `res.redirect(status, url)` 사용 권장

### **3.15.0 / 2014-07-22**

- depd 모듈로 일부 기능 비권장 표시 추가

### **3.15.3 / 2014-08-04**

- 디렉터리 인덱스 파일을 제공하는 `res.sendfile` 회귀 수정

### **3.16.0 / 2014-08-05**

- 프록시 직접 연결에 대한 `req.protocol` 수정

### **3.16.4 / 2014-08-10**

- `res.location`에서 원래 URL 파싱 수정

### **3.16.10 / 2014-09-04**

- `res.sendfile` 회귀에 대한 수정

### **3.17.0 / 2014-09-08**

- req.subdomains에서 X-Forwarded-Host 지원

### **3.17.1 / 2014-09-08**

- 비어있는 호스트에서 `req.subdomains`의 오류 수정

### **3.18.0 / 2014-10-17**

- res.attachment/res.download에 content-disposition 모듈 사용

### **3.18.1 / 2014-10-22**

- 내부 `utils.merge`의 비권고 경고 수정

### **3.18.6 / 2014-12-12**

- 응답 헤더 없이 `req.fresh/req.stale`에서의 예외 수정

### **3.19.0 / 2015-01-09**

- OPTIONS 응답에 HEAD 메서드 속성 포함
- `express(1)`에 프롬프트에 readline 사용

### **3.20.0 / 2015-02-18**

- 앱이 마운트될 때 "trust proxy" 설정을 상속
- 모든 요청 응답에 대해 ETag 생성

### **3.20.1 / 2015-02-28**

- "trust proxy" 홉 카운트를 사용할 때 `req.host`와 `req.protocol/req.secure` 수정

### **3.21.0 / 2015-06-18**

- 업데이트된 성능 최적화 기술을 도입

### **3.21.2 / 2015-07-31**

- 빈 헤더에서 빈 필드 설정 수정
- strict 모드 활성화
- 인수 재할당 제거

## 4.X

### 4.0.0 / 2014-04-09

- 주요 변경 : 여러 기능 제거 및 API 변화, 예를 들어, `express(1)`이 `express-generator`로 이동, `app.configure`, `app.router`, `req.auth` 등 제거
- 새로운 기능 : `app.router()`와 `app.route()` 추가로 새로운 라우트 및 라우터 인스턴스를 얻을 수 있음

### 4.1.0 / 2014-04-24

- 새로운 기능 : `res.sendfile` 옵션을 `send` 모듈로 전달 가능
- 버그 수정 : `req.host`를 IPv6 리터럴에 대해 수정

### 4.2.0 / 2014-05-11

- 개선 사항 : `req.accepts*` 메서드가 `req.accepts*s`로 변경, 예를 들어, `req.acceptsEncoding`은 `req.acceptsEncodings`로 변경

### 4.3.0 / 2014-05-21

- 새로운 기능 : `app.route()` 추가로 라우트 생성이 가능해짐
- 새로운 기능 : `req.baseUrl` 추가로 라우트 내에서 `req.url`에서 제거된 경로에 액세스 가능

### 4.4.0 / 2014-05-30

- 새로운 기능 : ETag 컨트롤을 위한 `app.set('etag', val)` 추가
- 버그 수정 : 여러 `app.VERB` 메서드에 대한 동작 문제 수정

### 4.5.0 / 2014-07-04

- 새로운 기능 : `res.headerSent`가 `res.headersSent`로 변경되어 Node.js의 `ServerResponse` 객체와 일치

### 4.6.0 / 2014-07-11

- 새로운 기능 : `express.json`과 `express.urlencoded` 미들웨어를 통해 각각 JSON 및 URL-encoded 형식의 본문을 파싱

### 4.7.0 / 2014-07-25

- 새로운 기능 : 쿼리 파서 설정이 가능한 `app.set('query parser', parser)` 추가

### 4.8.0 / 2014-08-05

- 새로운 기능 : `res.sendFile` 메서드 추가로 파일 시스템 경로를 바탕으로 응답을 전송 가능

### 4.9.0 / 2014-09-08

- 새로운 기능 : `res.sendStatus` 메서드 추가
- 개선 사항 : `req.subdomains`에서 IP 주소 호스트 지원

### 4.10.0 / 2014-10-23

- 새로운 기능 : `app.set('views', array)` 지원으로 여러 디렉토리에서 뷰를 조회할 수 있게 됨

### 4.11.0 / 2015-01-13

- 새로운 기능 : `res.append(field, val)` 메서드 추가로 헤더 추가 기능 지원

### 4.12.0 / 2015-03-28

- 새로운 기능 : `req.range()` 메서드 추가로 요청의 Range 헤더를 파싱하여 결과를 객체로 반환

### 4.13.0 / 2015-05-26

- 새로운 기능 : `app.locals` 및 `res.locals`에 `app.locals` 및 `res.locals` 메서드를 통한 프로퍼티 설정 지원

### 4.14.0 / 2016-09-01

- 새로운 기능 : `Router` 생성자에 `caseSensitive` 및 `strict` 옵션 추가
- 버그 수정 : `res.sendFile`에 `maxAge` 옵션 동작 오류 수정

### 4.15.0 / 2017-02-15

- 새로운 기능 : `res.format()`을 사용할 때 `default` 옵션 추가
- 버그 수정 : `next('router')` 동작 문제 해결

### 4.16.0 / 2017-09-28

- 새로운 기능 : `express.json`과 `express.urlencoded` 미들웨어를 통해 JSON 및 URL-encoded 형식의 본문 파서 내장
- 새로운 기능 : `req.get()`에서 검색 키에 대해 대소문자를 구분하지 않도록 개선

### 4.17.0 / 2018-08-22

- 새로운 기능 : `res.send`와 `res.json`에 대한 커스텀 JSON 문자열 변환 지원

### 4.17.1 / 2018-11-06

- 버그 수정 : `Router` 및 `Route`에 여러 콜백이 제공된 경우 `next('router')` 작동하지 않음 수정

### 4.17.2 / 2021-12-16

- 버그 수정 : `res.jsonp`에서 `undefined` 처리 수정
- 버그 수정 : "json escape" 활성화 시 `undefined` 처리 수정
- 버그 수정 : 고정되지 않은 RegExps로 미들웨어 실행 문제 수정
- 버그 수정 : 의존성 업데이트

### 4.17.3 / 2022-02-16

- 버그 수정 : 의존성 업데이트
- 버그 수정 : `__proto__` 키 처리 수정
- 버그 수정 : 성능 개선을 위해 불필요한 trust proxy 정규 표현식 제거

### 4.18.0 / 2022-04-25

- 새로운 기능 : `res.download`에 "root" 옵션 추가
- 새로운 기능 : `res.download`에서 파일 이름 없이 옵션 허용
- 새로운 기능 : `res.status`에 문자열 및 정수가 아닌 인수 사용 비권장
- 새로운 기능 : `res.cookie`에서 `maxAge`가 `null/undefined` 동작 수정
- 새로운 기능 : 매우 큰 스택의 동기 미들웨어 처리 방법 수정

### 4.18.1 / 2022-04-29

- 버그 수정 : 대규모 동기 라우트 스택에서의 정지 문제 수정

### 4.18.2 / 2022-10-08

- 버그 수정 : 단일 라우트에서 큰 스택 라우팅의 회귀 문제 수정
- 버그 수정 : 불필요한 객체 복제 제거하여 성능 개선
- 버그 수정 : 의존성 업데이트: `body-parser@1.20.1`, `qs@6.11.0`

## 5.X

- 제거된 메서드 및 속성
    - app.del()
    - app.param(fn)
    - 복수형 메서드 이름
    - app.param(name, fn)의 이름 인수 앞에 있는 콜론(:)
    - req.param(name)
    - res.json(obj, status)
    - res.jsonp(obj, status)
    - res.send(body, status)
    - res.send(status)
    - res.sendfile()변경된 사항
- 변경된 사항
    - 경로 라우트 매칭 구문
    - 미들웨어 및 핸들러에서 거부된 프로미스 처리
    - app.router
    - req.host
    - req.query
- 개선 사항
    - res.render()