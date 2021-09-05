import { IsUrl } from 'class-validator';

export class ShortenLinkDto {
    @IsUrl()
    fullLink: string;
}