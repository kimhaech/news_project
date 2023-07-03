const axios = require('axios');

const query = encodeURI('삼성전자');
const display = 100;
let start = 1;
const sort = 'date';
// API 요청을 보낼 엔드포인트 URL
const url = `https://openapi.naver.com/v1/search/news.json?query=${query}&display=${display}&start=${start}&sort=${sort}`;

// 필요한 경우 요청 헤더 설정
const headers = {
    'X-Naver-Client-Id' : 'meJ8zx8Em3Dd4pchP9xs',
    'X-Naver-Client-Secret' : '_lw5fuibdh',
};

// 요청을 보내는 함수
async function fetchData() {
    try {
        const response = await axios.get(url, { headers });
        // console.log(response)
        // API 응답 데이터를 처리
        const data = response.data;
        for(let i = 0; i < display; i++){
            let temp = {
                'title' : data.items[i].title,
                'description' : data.items[i].description,
                'date' : data.items[i].pubDate,
            }
            console.log(temp.date)

        }
    } catch (error) {
        console.error('API 요청 에러:', error);
    }
}

// 함수 실행
fetchData();