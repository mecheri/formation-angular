import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

// Constants
import { Constants } from './constants.service';

/**
 * Application mixin service
 *
 * @export
 * @class MixinService
 */
@Injectable()
export class MixinService {
    public fr: any;
    public notifOpts: any;
    public emptyMessage: string;
    public maskDate: any[];
    public maskPhone: any[];
    public maskEmail: any[];
    public maskZipCode: any[];

    /**
     * Creates an instance of MixinService.
     *
     * @memberOf MixinService
     */
    constructor(
        private location: Location,
        private constants: Constants,
    ) {
        this.fr = {
            firstDayOfWeek: 0,
            dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
            monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            monthNamesShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Auo', 'Sep', 'Oct', 'Nov', 'Dec']
        };
        this.notifOpts = {
            position: ['bottom', 'right'],
            clickToClose: true,
            maxLength: 100
        };
        this.emptyMessage = 'Aucun résultat trouvé';
    }

    /**
     * Get calender options
     *
     * @param {((date: string) => void)} onClose
     * @returns {*}
     * @memberof MixinService
     */
    calendarOpts(onClose: ((date: string) => void)): any {
        return {
            altFormat: 'dd/mm/yy',
            dateFormat: 'dd/mm/yy',
            yearRange: '1900:+1',
            changeYear: true,
            changeMonth: true,
            dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
            dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            monthNamesShort: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            onClose: onClose,
        };
    }

    /**
     * Clone Object
     *
     * @param {*} obj
     * @returns {*}
     *
     * @memberOf MixinService
     */
    clone(obj: any): any {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * Find object by label
     *
     * @param {*} obj
     * @param {string} label
     * @returns {*}
     * @memberof MixinService
     */
    findObjectByLabel(obj: any, label: string): any {
        if (obj[label] === label) { return obj; }
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                let foundLabel = this.findObjectByLabel(obj[i], label);
                if (foundLabel) { return foundLabel; }
            }
        }
        return null;
    };

    /**
     * Get current timestamp
     *
     * @param {number} [addDays]
     * @returns {string}
     *
     * @memberOf MixinService
     */
    getCurrentDate(addDays?: number): Date {
        let currentDate = new Date();
        if (addDays !== null && addDays !== undefined) {
            // this computation is a way to get the time without the time since midnight
            let time: number = currentDate.getTime()
                - currentDate.getHours() * 3600 * 1000
                - currentDate.getMinutes() * 60 * 1000
                - currentDate.getSeconds() * 1000
                - currentDate.getMilliseconds();
            currentDate = new Date(time + (addDays * (24 * 3600 * 1000)));
        }
        return currentDate;
    }

    /**
     * Get current TimeStamp
     *
     * @returns {number}
     *
     * @memberOf MixinService
     */
    getCurrentTimeStamp(): number {
        return new Date().getTime();
    }

    /**
     * Get today date
     *
     * @param {number} [addDays]
     * @returns {string}
     * @memberof MixinService
     */
    getTodayDate(addDays?: number): string {
        let currentDate = this.getCurrentDate(addDays),
            dd = currentDate.getDate().toString(),
            mm = (currentDate.getMonth() + 1).toString(), // January is 0!
            yyyy = currentDate.getFullYear().toString(),
            today;

        if (Number.parseInt(dd) < 10) {
            dd = '0' + dd;
        }

        if (Number.parseInt(mm) < 10) {
            mm = '0' + mm;
        }

        return dd + '/' + mm + '/' + yyyy;
    }

    /**
     * Date to string
     *
     * @param {Date} date
     * @returns {string}
     * @memberof MixinService
     */
    dateToString(date: Date): string {
        let dd = date.getDate().toString(),
            mm = (date.getMonth() + 1).toString(), // January is 0!
            yyyy = date.getFullYear().toString(),
            today;

        if (Number.parseInt(dd) < 10) {
            dd = '0' + dd;
        }

        if (Number.parseInt(mm) < 10) {
            mm = '0' + mm;
        }

        return dd + '/' + mm + '/' + yyyy;
    }

    /**
     * Get date comparer for sorting
     *
     * @param {string} dateOne
     * @param {string} dateTwo
     * @returns {number}
     *
     * @memberOf MixinService
     */
    getDateComparer(dateOne: string, dateTwo: string): number {
        let a = (dateOne === null ? '' : dateOne);
        let b = (dateTwo === null ? '' : dateTwo);
        dateOne = a.split('/').reverse().join('');
        dateTwo = b.split('/').reverse().join('');
        return (dateOne > dateTwo ? 1 : dateOne < dateTwo ? -1 : 0);
    }

    /**
     * Verify if the date is valid
     *
     * @param {string} date
     * @returns
     * @memberof MixinService
     */
    isValidDate(date: string) {
        const DATE_REGEXP = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return DATE_REGEXP.test(date);
    }

    /**
     * Remove special chars from given string
     *
     * @param {string} str
     * @returns {string}
     *
     * @memberOf MixinService
     */
    removeSpecials(str: string): string {
        return str.replace(/[&\/\\#,+()$~%.'':*?<>{}]/g, '');
    }

    /**
     * Custom Timer
     *
     * @param {number} [duration=3000]
     * @returns {Promise<any>}
     * @memberof MixinService
     */
    startTimer(duration = 3000): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), duration);
        });
    }

    /**
     * Detect IE browser
     *
     * @returns {boolean}
     *
     * @memberOf MixinService
     */
    isIE(): boolean {
        let ua = window.navigator.userAgent;
        let msie = ua.indexOf('MSIE ');
        let trident = ua.indexOf('Trident/');
        let edge = ua.indexOf('Edge/');

        if (msie > 0 || trident > 0 || edge > 0) {
            return true;
        }

        // other browsers
        return false;
    }

    /**
     * Get percentage
     *
     * @param {number} num
     * @param {number} total
     * @returns {number}
     * @memberof MixinService
     */
    per(num: number, total: number, precision?: number): number {
        return (total && total > 0) ? (this.round((num * 100 / total), precision || 0)) : 0;
    }

    /**
     * Add round with precision
     *
     * @param {number} value
     * @param {number} precision
     * @returns {number}
     * @memberof MixinService
     */
    round(value: number, precision: number): number {
        const multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    /**
     * Clear local storage data
     *
     * @memberof MixinService
     */
    clearLocalStorageData(): void {
        localStorage.removeItem(this.constants.APP_USER);
        localStorage.removeItem(this.constants.ACCESS_TOKEN);
        localStorage.removeItem(this.constants.ACCESS_TOKEN_DURATION);
    }
}

