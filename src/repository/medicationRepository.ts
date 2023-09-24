import { EntityRepository, Repository } from 'typeorm';
import { Drone } from '../model/drone';
import { Medication } from '../model/medication';


@EntityRepository(Medication)
export class MedicationRepository extends Repository<Medication> {
    async findByDrone(drone: Drone): Promise<Medication[]> {
        return this.find({
            where: {
                drone: drone,
            },
        });
    }
}

