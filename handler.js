const {sumRequestHandler} = require('./sum');

const requestHandler = (req, res) => {
    console.log(req.url, req.method, req.url);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>Practice Set</title></head>
                <body>
                    <h1>Welcome to Calculator</h1>
                    <a href="/calculator">Go to Calculator</a>
                </body>
            </html>    
            
            `);
            return res.end();
    } else if (req.url.toLowerCase() === "/calculator") {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>Practice Set</title></head>
                <body>
                    <form action="/calculator-result" method="POST">
                    <h1>Here is the Calculator</h1>
                    <input type="text" placeholder="First Num" name="first" />

                    <input type="text" placeholder="Second Num" name="second" />
                    <input type="submit" value="Sum">
                    </form>
                </body>
            </html> 
            `);
            return res.end();
    } else if (req.url.toLowerCase() === "/calculator-result" && req.method == 'POST') {
        return sumRequestHandler(req, res);
    }


    res.setHeader('Content-Type', 'text/html');
    res.write(`
            <html>
                <head><title>Practice Set</title></head>
                <body>
                    <h1>404 page doesnot exists</h1>
                    <a href="/">Go to Home</a>
                </body>
            </html>    
            
            `);
            return res.end();

}

exports.requestHandler = requestHandler;