document.addEventListener('DOMContentLoaded', function() {
    // 데이터 값
    const dataValues = [12, 19, 3, 5, 2, 3];

    // 차트를 그릴 캔버스 요소
    const ctx = document.getElementById('myBarChart').getContext('2d');

    // Chart.js 차트 생성
    const myBarChart = new Chart(ctx, {
        type: 'bar', // 차트 종류: 세로 막대형 차트
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // 레이블
            datasets: [{
                label: '# of Votes',
                data: dataValues, // 데이터 값
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Y축은 0부터 시작
                }
            }
        }
    });
});
