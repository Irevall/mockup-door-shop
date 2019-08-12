import { get, post } from '@/services/HttpService'

import { Organization } from '@/models/Organization'

export async function login({ email, password }) {
  return post('/login/', { email, password });
}

export async function getOrganization({ token }) {
  const organizationData = await get('/organization/', {}, { Authorization: token });
  return new Organization(organizationData);
}
