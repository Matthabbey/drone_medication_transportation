import { Repository, EntityRepository, getRepository } from 'typeorm';
import { Drone } from '../model/drone';

@EntityRepository(Drone)
export class DroneRepository {
    constructor(
        private droneRepository: Repository<Drone>
    ){}

    async findByBatteryCapacityGreaterThanEqualAndState(
        batteryCapacity: number,
        state: string
    ): Promise<Drone[]> {
        return this.droneRepository.find({
            where: {
                batteryCapacity: {
                    $gte: batteryCapacity,
                },
                state: state,
            },
        });
    }

    async findDroneBySerialNumber(serialNumber: string): Promise<Drone | null | undefined> {
        return this.droneRepository.findOne({
            where: {
                serialNumber: serialNumber,
            },
        });
    }
}

export default DroneRepository;
