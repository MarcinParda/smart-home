export interface Device {
  id: string;
  roomId: string;
  zoneId: string;
  name: string;
  type: string;
  model: string;
}

export interface Room {
  id: string;
  name: string;
}

export interface Zone {
  id: string;
  name: string;
}

export type Notification = {
  id: string;
  device: {
    id: string;
    roomId: string;
    zoneId: string;
    type: string;
  };
  title: string;
  message: string;
};
