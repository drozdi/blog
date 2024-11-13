import { dbEndpoint } from '../../config';
import { BaseRepository } from '../../utils/repository';

export const repPost = new BaseRepository(`${dbEndpoint}/posts`);
