import {apiGet} from '../genericServices';

const RESOURCE = 'users/94105502?fields=courses,creationDate,learningLanguage,picture,totalXp,username,streak';

const getUserData = async (config) => {
   return await apiGet(RESOURCE, config);
}

export {
   getUserData
}