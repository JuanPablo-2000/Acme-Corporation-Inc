$(function() {
    "use strict";
    // Dashboard 1 Morris-chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            Compras: 0,
            Ventas: 0,
            itouch: 0
        }, {
            period: '2011',
            Compras: 130,
            Ventas: 100,
            itouch: 80
        }, {
            period: '2012',
            Compras: 80,
            Ventas: 60,
            itouch: 70
        }, {
            period: '2013',
            Compras: 70,
            Ventas: 200,
            itouch: 140
        }, {
            period: '2014',
            Compras: 180,
            Ventas: 150,
            itouch: 140
        }, {
            period: '2015',
            Compras: 105,
            Ventas: 100,
            itouch: 80
        }, {
            period: '2016',
            Compras: 250,
            Ventas: 150,
            itouch: 200
        }],
        xkey: 'period',
        ykeys: ['Compras', 'Ventas'],
        labels: ['Compras', 'Ventas'],
        pointSize: 0,
        fillOpacity: 0,
        pointStrokeColors: ['#f62d51', '#7460ee', '#009efb'],
        behaveLikeLine: true,
        gridLineColor: '#f6f6f6',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#009efb', '#7460ee', '#009efb'],
        resize: true
    });

});