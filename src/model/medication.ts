import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    Lob,
} from 'typeorm';
import { IsString, IsInt, IsNotEmpty, MaxLength } from 'class-validator';
import { Drone } from './drone';

@Entity()
export class Medication {
    @PrimaryGeneratedColumn()
    private id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    @Column({ name: 'medicationName', nullable: false, length: 50 })
    private medicationName: string;

    @IsInt()
    @Column({ name: 'medicationWeight', nullable: false })
    private weight: number;

    @IsString()
    @IsNotEmpty()
    @Column({ name: 'medicationCode', nullable: false })
    private code: string;

    @Lob()
    @Column({ name: 'medicationPicture' })
    private photo: Buffer;

    @ManyToOne(() => Drone, { fetch: 'EAGER' })
    @JoinColumn({ name: 'drone_id' })
    private drone: Drone | null;

    constructor(
        medicationName: string,
        weight: number,
        code: string,
        photo: Buffer,
        drone: Drone | null
    ) {
        this.medicationName = medicationName;
        this.weight = weight;
        this.code = code;
        this.photo = photo;
        this.drone = drone;
    }
}
