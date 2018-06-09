import { FidsAlert } from 'app/classes/fids-alert';
import { FidsFlight } from 'app/classes/fids-flight';
import { FidsLocationComments } from 'app/classes/fids-location-comments';
import { FidsLocationParameters } from 'app/classes/fids-location-parameters';
// import { FidsAlertStatus } from 'app/classes/fids-alert-status';


export class FidsData {
    fidsAlerts: FidsAlert;
    fidsArrivingFlights: FidsFlight;
    fidsDepartingFlights: FidsFlight;
    fidsLocationComments: FidsLocationComments;
    fidsLocationParameters: FidsLocationParameters;
}
