import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsInt, MaxLength, Max } from 'class-validator';

@Entity()
export class Drone {
    @PrimaryGeneratedColumn()
    private id: number;

    @IsString()
    @MaxLength(100)
    @Column({ length: 100 })
    private serialNumber: string;

    @IsString()
    @Column()
    private model: string;

    @IsInt()
    @Max(500)
    @Column()
    private weight: number;

    @IsInt()
    @Max(100)
    @Column()
    private batteryCapacity: number;

    @IsString()
    @Column()
    private state: string;

    constructor(
        serialNumber: string,
        model: string,
        weight: number,
        batteryCapacity: number,
        state: string
    ) {
        this.serialNumber = serialNumber;
        this.model = model;
        this.weight = weight;
        this.batteryCapacity = batteryCapacity;
        this.state = state;
    }
}

