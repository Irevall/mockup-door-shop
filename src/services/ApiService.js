import { get, post } from '@/services/HttpService'

import { Organization } from '@/models/Organization'

export async function login({ email, password }) {
  return post('/login/', { email, password });
}

export async function getOrganization({ token }) {
  const organizationData = await get('/organization/', {}, { Authorization: token });
  return new Organization(organizationData);
}

export async function getLocationByCoords({ latitude, longitude }) {
  const locationData = await get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`);
  return locationData;
}
