import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {
  const { url, method } = req;
  const pathToRead = 'E:/exerc.txt';
  const pathtoWrite = 'E:/exerc.txt';
  let content = 'exercicio final';

  fs.promises
  .writeFile (pathtoWrite, content, 'utf-8')

  if (method === 'GET') {
    fs.promises
    .readFile (pathToRead)
    return res.end(content);
  }

  if (method === 'POST') {
    fs.promises
    .appendFile (pathtoWrite, url.replace, 'utf-8')
    return res.end('Criado');
  }

  return res.end('Ok');
});

server.listen(8080);
