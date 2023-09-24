import { IsString, IsInt, MinLength, MaxLength, Max } from 'class-validator';

export class DroneDao {
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    private serialNumber: string;

    @IsInt()
    @Max(500)
    private weight: number;

    @IsInt()
    @Max(100)
    private batteryCapacity: number;

    @IsString()
    private state: string;

    constructor(
        serialNumber: string,
        weight: number,
        batteryCapacity: number,
        state: string
    ) {
        this.serialNumber = serialNumber;
        this.weight = weight;
        this.batteryCapacity = batteryCapacity;
        this.state = state;
    }
}

