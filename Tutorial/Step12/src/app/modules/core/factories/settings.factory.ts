import { SettingsService } from '../services/settings.service';

export function SettingsFactory(config: SettingsService) {
    return () => config.load();
}