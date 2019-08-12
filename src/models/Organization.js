export class Organization {
  constructor(raw) {
    this.id = raw.id;
    this.name = raw.name;
    this.email = raw.email;
    this.city = raw.city;
    this.addressLine1 = raw['address_line_1'];
    this.addressLine2 = raw['address_line_2'];
    this.postalCode = raw['postal_code'];
    this.phoneNumber = raw['phone_number'];
  }
}
