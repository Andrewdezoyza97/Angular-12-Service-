import { DataService } from "./data.service";
import { LoggerService } from "./logger.service";

export function dataServiceFactory (logger:LoggerService){
    let dataService : DataService = new DataService(logger);

    logger.log('Creating the new data Service with factory Function. ');
    return dataService;
}