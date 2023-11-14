const ctx = document.getElementById('myChart')
const names = ['Dólar estadounidense', 'yen japonés', 'lev búlgaro', 'coronas checas', 'coronas danesas', 'Libra esterlina', 'florín húngaro', 'zloty polaco', 'leu rumano', 'coronas suecas', 'Franco suizo', 'corona islandesa', 'corona noruega', 'Lira turca', 'dólar australiano', 'Real brasileño', 'Dolar canadiense', 'yuan renminbi chino', 'dólares de Hong Kong', 'rupia indonesia', 'shekel israelí', 'Rupia india', 'won surcoreano', 'peso mexicano', 'Ringgit malayo', 'moneda neozelandesa', 'Dolar de Nueva Zelanda', 'peso filipino', 'dolar de Singapur', 'baht tailandés', 'rand sudafricano']
const ages = [2002, 2005, 2008, 2011, 2014, 2017, 2020, 2023]

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            lsbel: 'edad',
            data: ages,
            backgroundClor: [
                'rgba(255, 99, 132, 0.2)'
                

            ]
        }]
    }
})