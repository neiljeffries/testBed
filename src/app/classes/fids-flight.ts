import { FidsFlightLoadData } from './fids-load-data'
export class FidsFlight {

    flightAircraftType: string;
    flightCaptain: string;
    flightComments: string;
    flightDate: Date;
    flightDestination: string;
    flightDirection: string; // Departing or Arriving
    flightEstTime: string; // ex: "14:26"
    flightEstTimeDiff: string; // ex: "+1:24"
    flightEstTimeStatus: string; // ex: "late", "ontime"
    flightLTPData: FidsFlightLoadData;
    flightLastUldTs: Date;
    flightLoadEstimate: string; // this is the percent complete for loading; 25%, 50%, 75%, 100%
    flightNumber: string;
    flightOrientationGateway: string;
    flightOrigin: string;
    flightParkingPosition: string;
    flightRouteWithNumber: string;
    flightSchedTime: string;
    flightState: string;
    flightStatus: string;
    flightTailNumber: string;
}
