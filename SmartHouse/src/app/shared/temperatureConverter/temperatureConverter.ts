import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

    transform(value: number) {

        if (value && !isNaN(value)) {
            const unit = localStorage.getItem('unit');
            if (unit === undefined || unit === '' || unit === null) {
                return value.toFixed(2) + ' °C';
            }
            if (unit === 'C') {
                return value.toFixed(2) + ' °C';
            }
            if (unit === 'F') {
                const tempareature = (value * 1.8) + 32;
                return tempareature.toFixed(2) + ' °F';
            }

            if (unit === 'K') {
                const tempareature = value + 273.15;
                return tempareature.toFixed(2) + ' K';
            }
        }
        return;
    }
}
