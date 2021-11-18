let data1, data2;
getData("BTC/USDT")
    .then((data1) => {
        getData("ETH/USDT")
            .then((data2) => {
                createChart(data1,data2)
            })
    })


// abc()
// async function abc() {
//     let task1 = getData("BTC/USDT");
//     let task2 = getData("ETH/USDT");
//     var temp = Promise.all(task1, task2);
//     temp.then((value) => {
//         createChart(value[0],value[1]);
//     })
// }

function createChart(data1, data2) {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June',];
    const data = {
        labels: labels,
        datasets: [{
            label: 'BTC',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data1,
        }, {
            label: 'ETH',
            backgroundColor: 'rgb(5, 21, 255)',
            borderColor: 'rgb(5, 21, 255)',
            data: data2,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


async function getData(typecoin) {
    var data = new ccxt.binance();
    var result = await data.fetchOHLCV(typecoin, '1m', undefined, 6)
    var data = result.map(price => {
        return price[4] % 9
    })
    return data;
}