import {NetworkStatus} from './dt_networkstatus';
import {Batterystatus} from './dt_batterystatus';
import {Temperature} from './dt_temperature';
import {ObjectPresent} from './dt_objectpresent';
import {Touch} from './dt_touch';
import {ConnectionLatency} from './dt_connectionlatency';
import {EthernetStatus} from './dt_cellularstatus';
import {CellularStatus} from './dt_ethernetstatus';
import {ConnectionStatus} from './dt_connectionstatus';

export class Reported {
  type: string;
  networkStatus: NetworkStatus;
  batteryStatus: Batterystatus;
  temperature: Temperature;
  objectPresent: ObjectPresent;
  touch: Touch;
  connectionLatency: ConnectionLatency;
  ethernetStatus: EthernetStatus;
  cellularStatus: CellularStatus;
  connectionStatus: ConnectionStatus;
}