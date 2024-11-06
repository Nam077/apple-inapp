const text = `https://apps.apple.com/us/app/paraphrase-rewording-tool/id6450775423
https://apps.apple.com/vn/app/paraphrase-rewording-tool/id6450775423
https://apps.apple.com/ng/app/grammar-check-spell-corrector/id6448754772
https://apps.apple.com/eg-ar/app/grammar-check-spell-corrector/id6448754772`;
const sanitizedText = text.replace(/[\r\n]+/g, ' ');
fetch('http://localhost:3000/in-app/filter-urls', {
    headers: {
        accept: '*/*',
        'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
        'content-type': 'application/json',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "YaBrowser";v="24.10", "Yowser";v="2.5"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        cookie: 'refreshToken=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZmZTc0MDlkLTlkZGItNGMyNS1hNTYyLWY2MWRjMTYwYTAzNCJ9.eyJzdWIiOiI3ZDAwZWRkOS1hMWNlLTQ0MzAtOWQ0Mi05NjBiNDUyMDRmZTciLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJuYW1lIjoiSm9obiBEb2UiLCJzZXNzaW9uSWQiOiIyZDdjYjZkNy0zZjkyLTQ5YTEtYTI4ZS0yOWQ4MjMzNDQ4YTQiLCJpYXQiOjE3MjgzNDIxMzksImV4cCI6MTczMDkzNDEzOSwianRpIjoiZTVlNjlkZjEtNjM2NS00ZjQ3LTg3MGUtNWVmYWRjZTY3ZTU5In0.KJNn_3sRypZNQ8lsrodoRrt1EVVGx7xrHaHBvlAwdzGHzRj9FSUMdqM4QELGGat1Wm53RDDtpfnbsTlq7EnFar6hYWBZl0sEPtS5guiGUV2sSAkjZ9VAjyU4FEnDll9TAM9yCIydJLEHZ7OMCOwLL3wl3VRZHfMQMVYSMihOQ6L50NAMWLHdVnU6EhBcp6K6BJTrOLMHzhUhDKIH32-uu9M-Yt1g0QGgw0CRy5sE9hrK7eWm3hxZIuD3o2Q-fG8boQwdzCrMsU7WTgu5XP0Zhf9w7YVA1njR3xWMk94PqslALu57NJ-qGCFtZzJuk6dIq_qnN-IgKhCxXW1yrlUuKg',
        Referer: 'http://localhost:3000/api',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: '{\n  "text": "' + sanitizedText + '"\n}',
    method: 'POST',
})
    .then((response) => response.json())
    .then((data) => console.log(data));
