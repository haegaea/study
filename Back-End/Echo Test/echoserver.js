const net = require("net");

// 서버 설정
const host = "127.0.0.1";  // 서버 IP 주소
const port = 12345;        // 서버 포트 번호

// 서버 생성
const server = net.createServer((client) => {
  console.log(`클라이언트 ${client.remoteAddress}:${client.remotePort}가 연결되었습니다.`);

  // 클라이언트로부터 데이터 수신
  client.on("data", (data) => {
    console.log(`수신한 데이터: ${data}`);
    
    // 수신한 데이터를 그대로 클라이언트에게 전송 (Echo)
    client.write(data);
  });

  // 클라이언트 연결 종료
  client.on("end", () => {
    console.log(`클라이언트 ${client.remoteAddress}:${client.remotePort}의 연결이 종료되었습니다.`);
  });
});

// 서버 시작
server.listen(port, host, () => {
  console.log(`Echo 서버가 ${host}:${port}에서 대기 중...`);
});
