import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsInt, MaxLength, Max } from 'class-validator';

@Entity()
export class Models {
    @PrimaryGeneratedColumn()
    private id: number;

    @IsString()
    @MaxLength(100)
    @Column({ length: 100 })
    private modelName: string;

    @IsInt()
    @Max(500)
    @Column()
    private maximumWeight: number;

    constructor(modelName: string, maximumWeight: number) {
        this.modelName = modelName;
        this.maximumWeight = maximumWeight;
    }
}

