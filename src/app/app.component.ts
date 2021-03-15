import { Component, OnInit } from '@angular/core';
declare const CanvasJS: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
	limits:any;
	events:any;
	dp:any;
	intiVariables():any{
		this.events = [
			{ value: 16790, label: "MS" },
			{ value: 16800.1, label: "SI" },
			{ value: 16805, label: "BS" },
			{ value: 16815.25, label: "BE" },
			{ value: 16900, label: "SI" },
			{ value: 16955.5, label: "SS" },
			{ value: 16958.25, label: "SE" },
			{ value: 17000, label: "SI" },
			{ value: 17022.25, label: "RD" },
			{ value: 17100.05, label: "SI" },
			{ value: 17134.75, label: "SL" },
			{ value: 17200.2, label: "SL" },
			{ value: 17266.5, label: "SI" },
			{ value: 17300, label: "SS" },
			{ value: 17328.75, label: "SS" },
			{ value: 17335.25, label: "SE" },
			{ value: 17355.25, label: "SE" },
			{ value: 17359.5, label: "SS" },
			{ value: 17400, label: "SI" },
		];
		this.limits = {
			Alert: { value: 0.5, color: "yellow" },
			Intervention: { value: 1.5, color: "orange" },
			Safety: { value: 2, color: "red" }
		}
		this.dp = [
			{ "y": 0.38 },
			{ "y": 0.4 },
			{ "y": 0.42 },
			{ "y": 0.44 },
			{ "y": 0.46 },
			{ "y": 0.47 },
			{ "y": 0.49 },
			{ "y": 0.5 },
			{ "y": 0.52 },
			{ "y": 0.52 },
			{ "y": 0.52 },
			{ "y": 0.52 },
			{ "y": 0.53 },
			{ "y": 0.52 },
			{ "y": 0.51 },
			{ "y": 0.5 },
			{ "y": 0.49 },
			{ "y": 0.48 },
			{ "y": 0.46 },
			{ "y": 0.46 },
			{ "y": 0.45 },
			{ "y": 0.45 },
			{ "y": 0.45 },
			{ "y": 0.44 },
			{ "y": 0.43 },
			{ "y": 0.42 },
			{ "y": 0.41 },
			{ "y": 0.41 },
			{ "y": 0.41 },
			{ "y": 0.41 },
			{ "y": 0.41 },
			{ "y": 0.44 },
			{ "y": 0.46 },
			{ "y": 0.49 },
			{ "y": 0.53 },
			{ "y": 0.55 },
			{ "y": 0.57 },
			{ "y": 0.57 },
			{ "y": 0.57 },
			{ "y": 0.58 },
			{ "y": 0.6 },
			{ "y": 0.6 },
			{ "y": 0.6 },
			{ "y": 0.6 },
			{ "y": 0.61 },
			{ "y": 0.59 },
			{ "y": 0.57 },
			{ "y": 0.52 },
			{ "y": 0.47 },
			{ "y": 0.4 },
			{ "y": 0.34 },
			{ "y": 0.23 },
			{ "y": 0.13 },
			{ "y": 0.09 },
			{ "y": 0.05 },
			{ "y": 0.04 },
			{ "y": 0.04 },
			{ "y": 0.04 },
			{ "y": 0.04 },
			{ "y": 0.05 },
			{ "y": 0.05 },
			{ "y": 0.07 },
			{ "y": 0.09 },
			{ "y": 0.14 },
			{ "y": 0.19 },
			{ "y": 0.26 },
			{ "y": 0.32 },
			{ "y": 0.4 },
			{ "y": 0.47 },
			{ "y": 0.56 },
			{ "y": 0.64 },
			{ "y": 0.72 },
			{ "y": 0.8 },
			{ "y": 0.84 },
			{ "y": 0.87 },
			{ "y": 0.92 },
			{ "y": 0.96 },
			{ "y": 0.99 },
			{ "y": 1.03 },
			{ "y": 1.07 },
			{ "y": 1.11 },
			{ "y": 1.12 },
			{ "y": 1.14 },
			{ "y": 1.14 },
			{ "y": 1.14 },
			{ "y": 1.14 },
			{ "y": 1.14 },
			{ "y": 1.15 },
			{ "y": 1.15 },
			{ "y": 1.15 },
			{ "y": 1.15 },
			{ "y": 1.16 },
			{ "y": 1.17 },
			{ "y": 1.17 },
			{ "y": 1.17 },
			{ "y": 1.17 },
			{ "y": 1.17 },
			{ "y": 1.18 },
			{ "y": 1.19 },
			{ "y": 1.23 },
			{ "y": 1.27 },
			{ "y": 1.34 },
			{ "y": 1.41 },
			{ "y": 1.47 },
			{ "y": 1.53 },
			{ "y": 1.59 },
			{ "y": 1.64 },
			{ "y": 1.69 },
			{ "y": 1.73 },
			{ "y": 1.75 },
			{ "y": 1.77 },
			{ "y": 1.77 },
			{ "y": 1.78 },
			{ "y": 1.79 },
			{ "y": 1.8 },
			{ "y": 1.81 },
			{ "y": 1.85 },
			{ "y": 1.83 },
			{ "y": 1.83 },
			{ "y": 1.83 },
			{ "y": 1.83 },
			{ "y": 1.83 },
			{ "y": 1.83 },
			{ "y": 1.82 },
			{ "y": 1.81 },
			{ "y": 1.8 },
			{ "y": 1.79 },
			{ "y": 1.78 },
			{ "y": 1.77 },
			{ "y": 1.76 },
			{ "y": 1.76 },
			{ "y": 1.75 },
			{ "y": 1.74 },
			{ "y": 1.74 },
			{ "y": 1.74 },
			{ "y": 1.74 },
			{ "y": 1.74 },
			{ "y": 1.77 },
			{ "y": 1.79 },
			{ "y": 1.83 },
			{ "y": 1.86 },
			{ "y": 1.88 },
			{ "y": 1.91 },
			{ "y": 1.93 },
			{ "y": 1.96 },
			{ "y": 1.99 },
			{ "y": 2.02 },
			{ "y": 2.03 },
			{ "y": 2.05 },
			{ "y": 2.05 },
			{ "y": 2.06 },
			{ "y": 2.07 },
			{ "y": 2.08 },
			{ "y": 2.08 },
			{ "y": 2.08 },
			{ "y": 2.06 },
			{ "y": 2.05 },
			{ "y": 2.02 },
			{ "y": 1.98 },
			{ "y": 1.95 },
			{ "y": 1.91 },
			{ "y": 1.87 },
			{ "y": 1.82 },
			{ "y": 1.79 },
			{ "y": 1.76 },
			{ "y": 1.76 },
			{ "y": 1.76 },
			{ "y": 1.76 },
			{ "y": 1.76 },
			{ "y": 1.76 },
			{ "y": 1.76 },
			{ "y": 1.76 },
			{ "y": 1.77 },
			{ "y": 1.77 },
			{ "y": 1.77 },
			{ "y": 1.8 },
			{ "y": 1.83 },
			{ "y": 1.92 },
			{ "y": 2 },
			{ "y": 2.11 },
			{ "y": 2.23 },
			{ "y": 2.33 },
			{ "y": 2.43 },
			{ "y": 2.5 },
			{ "y": 2.57 },
			{ "y": 2.62 },
			{ "y": 2.66 },
			{ "y": 2.69 },
			{ "y": 2.72 },
			{ "y": 2.73 },
			{ "y": 2.74 },
			{ "y": 2.74 },
			{ "y": 2.74 },
			{ "y": 2.74 },
			{ "y": 2.74 },
			{ "y": 2.72 },
			{ "y": 2.7 },
			{ "y": 2.68 },
			{ "y": 2.65 },
			
		];
	}
	setTableConfig(){
			var dataPoints1 = [],dataPoints2 = [];
			var stockChart = new CanvasJS.StockChart("chartContainer", {
				animationEnabled: false,
				theme: "light2",
				title: {
					text: "Simple Line Chart"
				},
				charts: [
					{
						axisY: {
							title: "",
							lineThickness: 0,
							gridThickness: 0,
							tickLength: 0,
							labelFormatter: function (e:any) {
								return "";
							},
							stripLines: [
								{
									value: this.limits.Alert.value,
									label: "Alert",
									labelPlacement: "outside",
									color: this.limits.Alert.color,
									lineDashType: "longDash",
								},
								{
									value: this.limits.Intervention.value,
									label: "Intervention",
									labelPlacement: "outside",
									color: this.limits.Intervention.color,
									lineDashType: "longDash",
								},
								{
									value: this.limits.Safety.value,
									label: "Safety",
									labelPlacement: "outside",
									color: this.limits.Safety.color,
									lineDashType: "longDash",
								},
								{
									value: -this.limits.Alert.value,
									label: "Alert",
									labelPlacement: "outside",
									color: this.limits.Alert.color,
									lineDashType: "longDash",
								},
								{
									value: -this.limits.Intervention.value,
									label: "Intervention",
									labelPlacement: "outside",
									color: this.limits.Intervention.color,
									lineDashType: "longDash",
								},
								{
									value: -this.limits.Safety.value,
									label: "Safety",
									labelPlacement: "outside",
									color: this.limits.Safety.color,
									lineDashType: "longDash",
								}
							],
						},
						axisX2: {
							labelPlacement: "outside",
							labelFormatter: (e:any) =>{
								const event = this.events.find((event:any) => +(e.value.toFixed(1)) === event.value);
								if (event) {
									return event.label;
								}
								return "";
							},
						},
		
						data: [{
							type: "line",
							axisXType: "secondary",
							indexLabelFontSize: 16,
							dataPoints: this.dataGenerator()
						}],
		
					},
				],
				rangeSelector: {
					enabled: false
				},
				navigator: {
					slider: {
						minimum: 16790,
						maximum: 16890
					}
				}
			});
			stockChart.render();
	}
	ngOnInit() {
		this.intiVariables();
		this.setTableConfig();
		this.dataGenerator();
	}
	dataGenerator() {
		let x = 16790;
		const points = [];
		for (let i = 0; i < this.dp.length; i += 1) {
			let color = 'blue';
			if (this.dp[i].y >= this.limits.Safety.value || this.dp[i].y <= -this.limits.Safety.value) color = this.limits.Safety.color;
			else if (this.dp[i].y >= this.limits.Intervention.value || this.dp[i].y <= -this.limits.Intervention.value) color = this.limits.Intervention.color;
			else if (this.dp[i].y >= this.limits.Alert.value || this.dp[i].y <= -this.limits.Alert.value) color = this.limits.Alert.color;
			points.push({
				x: x + 0.05,
				y: this.dp[i].y,
				lineColor: color,
			});
			x++;
		}
		return points;
	}
}