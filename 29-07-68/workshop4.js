import { createServer } from 'http';
import { parse } from 'url';

const PORT = 8888;

const server = createServer((req, res) => {
    const parsedUrl = parse(req.url || '', true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
      <h2>Input Number</h2>
      <form action="/next" method="GET">
        <input type="text" name="num" required>
        <button type="submit">Submit</button>
      </form>
      <hr>
    `);
    } else if (pathname === '/next') {
        const { num  } = parsedUrl.query;
        const splitString = num.toString().split('').map(Number);
        let sum = null;

        for (let i = 0; i < splitString.length; i++) {
            sum += splitString[i];
        }
        let resultHtml = `<h2>Result: ${sum}</h2>`;
        resultHtml += '<a href="/">Back</a>';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(resultHtml);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
