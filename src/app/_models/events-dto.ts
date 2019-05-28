import { ArtistDto } from './artist-dto';

export class EventsDto {
    id: number;
    fullEventName: string;
    artistImg: string;
// tslint:disable-next-line: variable-name
    startDate: Date;
    timeApproved: Date;
    feature: boolean;
    image: string;
    url: string;
    venueName: string;
    venueAddress: string;
    artistsData: ArtistDto;
    instagram: string;





}

