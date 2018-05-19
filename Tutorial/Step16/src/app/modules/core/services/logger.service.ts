import { Injectable } from '@angular/core';

/**
 * Level enum
 *
 * @enum {number}
 */
enum Levels {
    TRACE = 'TRACE',
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    LOG = 'LOG',
    WARN = 'WARN',
    ERROR = 'ERROR'
}

/**
 * Color enum
 *
 * @enum {number}
 */
enum Colors {
    BLUE = 'blue',
    TEAL = 'teal',
    GRAY = 'gray',
    RED = 'red',
}

/**
 * Application Logger Service
 *
 * @export
 * @class Logger
 */
@Injectable()
export class Logger {

    private Levels: typeof Levels = Levels;
    private Colors: typeof Colors = Colors;

    private _log(level: string, message: any) {
        let color;
        if (!message) return;
        switch (level) {
            case Levels.TRACE: color = Colors.BLUE; break;
            case Levels.DEBUG: color = Colors.TEAL; break;
            case Levels.INFO:
            case Levels.LOG: color = Colors.GRAY; break;
            case Levels.WARN:
            case Levels.ERROR: color = Colors.RED; break;
        }

        if (level === Levels.ERROR) {
            console.log(`%c${new Date()} [${level}]`, `color:${color}`, message);
        } else {
            console.log(`%c${new Date()} [${level}] %c${message}`, `color:${color}`, 'color:black');
        }
    }

    /**
     * Trace log
     *
     * @param {*} message
     * @memberof Logger
     */
    trace(message: any) { this._log(Levels.TRACE, message); }

    /**
     * Debug log
     *
     * @param {*} message
     * @memberof Logger
     */
    debug(message: any) { this._log(Levels.DEBUG, message); }

    /**
     * Info log
     *
     * @param {*} message
     * @memberof Logger
     */
    info(message: any) { this._log(Levels.INFO, message); }

    /**
     * Log log
     *
     * @param {*} message
     * @memberof Logger
     */
    log(message: any) { this._log(Levels.LOG, message); }

    /**
     * Warnining log
     *
     * @param {*} message
     * @memberof Logger
     */
    warn(message: any) { this._log(Levels.WARN, message); }

    /**
     * Errorlog
     *
     * @param {*} message
     * @memberof Logger
     */
    error(message: any) { this._log(Levels.ERROR, message); }
}

