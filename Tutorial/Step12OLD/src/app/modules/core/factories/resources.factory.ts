import { ResourcesService } from '../services/resources.service';

export function ResourcesFactory(rsc: ResourcesService) {
    return () => rsc.load();
}