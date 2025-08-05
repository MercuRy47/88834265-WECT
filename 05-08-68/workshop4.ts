import { createServer } from 'http';
import { parse } from 'url';

const PORT = 8888;

const server = createServer((req, res) => {
    const parsedUrl = parse(req.url || '', true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
      <h2>Multiplication</h2>
      <form action="/next" method="GET">
        <input type="number" name="num1" required>
        <input type="number" name="num2" required>
        <button type="submit">Submit</button>
      </form>
      <hr>
    `);
    } else if (pathname === '/next') {
        const { num1, num2 } = parsedUrl.query;
        const n1: number = Number(num1);
        const n2: number = Number(num2);

        let resultHtml = '<h2>Result</h2><ul>';
        for (let i: number = 1; i <= n2; i++) {
            resultHtml += `<li>${n1} x ${i} = ${n1 * i}</li>`;
        }
        resultHtml += '</ul><a href="/">Back</a>';

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(resultHtml);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
