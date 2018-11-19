import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// Services
import { Logger } from '../services/logger.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(
        // Le ErrorHandler étant créé avant les services, nous utilisons l'injecteur pour les récupérer
        private injector: Injector
    ) { }

    /**
     * Intercepte et gère les erreurs coté client et serveur (erreurs JS ou erreurs HTTP)
     *
     * @param {(Error | HttpErrorResponse)} error Erreur interceptée
     * @memberof ErrorsHandler
     */
    handleError(error: Error | HttpErrorResponse): void {
        const router: Router = this.injector.get(Router);
        const logger: Logger = this.injector.get(Logger);
        const notifier: NotificationsService = this.injector.get(NotificationsService);

        // Log the error anyway
        logger.error(error);

        if (error instanceof HttpErrorResponse) {
            // Erreur HTTP => affichage d'une popup avec le message "user-friendly"
            // Erreur serveur ou erreur de connexion
            if (!navigator.onLine) {
                // Pas de connexion à internet
                notifier.alert('No Internet Connection');
            } else {
                // Erreur HTTP (error.status === 403, 404...)
                // On affiche une alerte à l'utilisateur
                notifier.error('Erreur', error.error.message);
            }
        } else {
            // Erreur JS coté client (Angular Error, ReferenceError...)
            // On redirige l'utilisateur vers la page d'erreur
            router.navigate(['/error']);
        }
    }

}
