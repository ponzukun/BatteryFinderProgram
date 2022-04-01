export class Controller {
    static getPowerConsumptionWh(endVoltage, maxDraw) {
        return endVoltage * maxDraw;
    }

    static getPowerCapacityWh(voltage, capacityAh) {
        return voltage * capacityAh;
    }

    static getBatteryLifeH(powerConsumptionWh, powerCapacityWh) {
        return powerConsumptionWh / powerCapacityWh;
    }

    static getApplicableBatteryList(cameraPowerConsumptionWh, batteryList) {
        let applicableBatteryList = [];
        for(let i = 0; i < batteryList.length; i++) {
            let curr = batteryList[i]
            let batteryPowerConsumptionWh = getPowerConsumptionWh(curr.endVoltage, curr.maxDraw);
            if(cameraPowerConsumptionWh <= batteryPowerConsumptionWh) {
                applicableBatteryList.push(curr);
            }
        }
        return applicableBatteryList;
    }
}