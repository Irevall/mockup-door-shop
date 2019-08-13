export class Organization {
  constructor(raw) {
    const { addressLine2, city } = /(?<addressLine2>[A-z0-9 ]+) city: (?<city>[A-z ]+)/g.exec(raw['address_line_2']).groups;

    this.id = raw.id;
    this.name = raw.name;
    this.email = raw.email;
    this.city = city;
    this.addressLine1 = raw['address_line_1'];
    this.addressLine2 = addressLine2;
    this.postalCode = raw['postal_code'];
    this.phoneNumber = raw['phone_number'];
  }
}
