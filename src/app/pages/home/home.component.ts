import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // <!-- Start charts -->
  title = 'chart';
  ngOnInit(): void {
    this.renderChart('bar', 'barchart');
    this.renderChart('pie', 'piechart');
  }
  renderChart(type: any, id: any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: ['Blue', 'Red', 'Orange', 'Yellow', 'Green', 'Purpal'],
        datasets: [{
          label: '# of Votes',
          data: [10, 20, 30, 40, 50, 60], 
          borderWidth: 1
           }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
  // <!-- End charts -->
}
