import { FidsAlertStatus } from 'app/classes/fids-alert-status';

export class FidsAlert {

    alertDescriptionText: string;
    alertName: string;
    alertNotificationOptionDocumentKey: string;
    alertQualifierCode: string;
    alertQualifierValueText: string;
    alertStatus: FidsAlertStatus;
    alertSubTypeCode: string;
    alertSystemNumber: string;
    alertTypeCode: string;
    currentAlertStatusCode: string;
    flightDocumentKey: string;
    flightId: string;
    latitudeNumber: string;
    longitudeNumber: string;
    personName: string;
    primaryEmailAddressText: string;
    recordUpdateTimestamp: Date;
    recordUpdateUserNumber: number;
    secondaryEmailAddressText: string;
    status: string;

 }
