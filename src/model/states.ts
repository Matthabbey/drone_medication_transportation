import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, MaxLength } from 'class-validator';

@Entity()
class States {
    @PrimaryGeneratedColumn()
    private id: number;

    @IsString()
    @MaxLength(100)
    @Column({ length: 100 })
    private stateName: string;

    constructor(stateName: string) {
        this.stateName = stateName;
    }
}

export default States;
