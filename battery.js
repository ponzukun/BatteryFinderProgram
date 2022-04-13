export class Battery {
    constructor(batteryName, capacityAh, voltage, maxDraw, endVoltage) {
        this.batteryName = batteryName;
        this.capacityAh = capacityAh;
        this.voltage = voltage;
        this.maxDraw = maxDraw;
        this.endVoltage = endVoltage;
    }

    getPowerConsumptionWh() {
        return this.endVoltage * this.maxDraw;
    }

    getPowerCapacityWh() {
        return this.voltage * this.capacityAh;
    }

    getBatteryLifeH() {
        return this.powerConsumptionWh() / this.powerCapacityWh();
    }

}