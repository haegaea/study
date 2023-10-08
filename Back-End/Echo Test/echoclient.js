const net = require("net");
const readline = require("readline");

// 서버 설정
const host = "127.0.0.1";  // 서버 IP 주소
const port = 12345;        // 서버 포트 번호

// 클라이언트 생성
const client = new net.Socket();

// 서버에 연결
client.connect(port, host, () => {
  console.log(`서버에 연결되었습니다. (호스트: ${host}, 포트: ${port})`);
  
  // 사용자 입력을 위한 인터페이스 생성
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // 사용자로부터 메시지 입력
  rl.question("메시지를 입력하세요 (종료하려면 'exit' 입력): ", (message) => {
    // 입력한 메시지를 서버로 전송
    client.write(message);

    // 'exit' 입력 시 클라이언트 종료
    if (message === "exit") {
      client.end();
    }
  });

  // 서버로부터 데이터 수신
  client.on("data", (data) => {
    console.log(`서버 응답: ${data}`);
  });

  // 서버 연결 종료
  client.on("close", () => {
    console.log("서버와의 연결이 종료되었습니다.");
    rl.close();
  });
});
