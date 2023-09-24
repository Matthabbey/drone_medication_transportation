import { IsString, IsInt, Max, IsNotEmpty } from 'class-validator';

export class MedicationDao {
    @IsNotEmpty()
    private medicationName: string;

    @IsInt()
    @Max(500)
    private weight: number;

    constructor(medicationName: string, weight: number) {
        this.medicationName = medicationName;
        this.weight = weight;
    }
}


