# REST API / RESTful

### **REST API (Representational State Transfer API)**

- REST는 `Representational State Transfer`의 약어
- 웹 서비스의 아키텍처 스타일 중 하나
- HTTP 프로토콜 기반
- 자원을 나타내고 이 자원에 대한 상태를 표현하는 방식으로 작동
- RESTful API는 이러한 아키텍처 스타일을 따르는 API를 말하며, HTTP 메서드(GET, POST, PUT, DELETE)를 사용하여 리소스를 다룸
- RESTful API는 웹 서비스, 모바일 애플리케이션 및 다른 클라이언트와 서버 간의 통신에 널리 사용

### RESTful (Representational State Transfer)

- RESTful은 `Representational State Transfer`의 약어
- 웹 서비스를 위한 아키텍처 스타일 중 하나
- RESTful 웹 서비스는 자원을 나타내고 이 자원에 대한 상태를 표현하며, HTTP 메서드(GET, POST, PUT, DELETE)를 사용하여 리소스를 다룸
- 주요 특징
    - **자원 (Resource)**
        - RESTful 서비스는 자원을 나타내며, 각 자원은 고유한 URI(Uniform Resource Identifier)를 가짐
            - ex) 블로그 게시물, 사용자, 주문 등이 자원이 될 수 있음
    - **상태 (State)**
        - 각 자원은 그 자원의 상태를 표현
        - 상태는 JSON 또는 XML과 같은 형식으로 표현될 수 있으며, 클라이언트와 서버 간의 데이터 교환에 사용
    - **HTTP 메서드**
        - HTTP 메서드(GET, POST, PUT, DELETE)를 사용하여 자원을 다룸
            - ex) GET 메서드는 자원을 검색하고, POST 메서드는 자원을 생성하거나 수정하고, PUT 메서드는 자원을 업데이트하며, DELETE 메서드는 자원을 삭제
    - **무상태성 (Statelessness)**
        - RESTful 서비스는 클라이언트와 서버 간의 통신이 무상태적이어야 함
        - 즉, 각 요청은 독립적이며 이전 요청에 대한 상태 정보를 서버에 저장하지 않음
        - 이로써 서버의 부하를 줄이고 확장성을 높일 수 있음
    - **계층 구조 (Layered System)**
        - RESTful 아키텍처는 다층 구조를 가질 수 있으며, 각 계층은 독립적으로 구성될 수 있음
        - 이러한 구조는 서버의 확장성 및 보안을 향상
- RESTful 웹 서비스는 간단하고 확장 가능하며, 다양한 클라이언트 및 서버 간의 통신을 용이하게 만듬
- RESTful API는 웹 애플리케이션, 모바일 앱, IoT 장치 등 다양한 환경에서 사용되며, HTTP 프로토콜을 기반으로 하므로 웹을 통한 통신에 매우 적합