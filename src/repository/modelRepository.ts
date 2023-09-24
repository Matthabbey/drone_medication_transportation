import { EntityRepository, Repository } from 'typeorm';
import { Models } from '../model/models';


@EntityRepository(Models)
class ModelsRepository extends Repository<Models> {
    async findByModelName(name: string): Promise<Models | null | undefined> {
        return this.findOne({
            where: {
                modelName: name,
            },
        });
    }
}

export default ModelsRepository;
