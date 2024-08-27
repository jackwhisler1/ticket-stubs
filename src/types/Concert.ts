type Artist = {
  mbid: string;
  name: string;
  sortName: string;
  disambiguation: string;
  url: string;
};

type City = {
  id: string;
  name: string;
  state: string;
  stateCode: string;
  coords: {
    lat: number;
    long: number;
  };
  country: {
    code: string;
    name: string;
  };
};

type Venue = {
  id: string;
  name: string;
  city: City;
  url: string;
};

type Tour = {
  name: string;
};

type Song = {
  name: string;
  with?: Artist; 
};

type Set = {
  encore?: number; 
  song: Song[];
};

type Concert = {
  id: string;
  versionId: string;
  eventDate: string; 
  lastUpdated: string; 
  artist: Artist;
  venue: Venue;
  tour: Tour;
  sets: {
    set: Set[];
  };
  info: string;
  url: string;
};

export default Concert;
