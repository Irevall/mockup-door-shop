export class Door {
  constructor(raw) {
    this.type = raw ? raw.type : DoorType.SINGLE;
    this.width = raw ? raw.width : 120;
    this.height = raw ? raw.height : 250;
    this.beams = raw ? raw.beams : 4;
    this.posts = raw ? raw.posts : 2;
    this.color = raw ? raw.color : DoorColor.BLACK;
  }
}

export const DoorType = {
  SINGLE: 1,
  DOUBLE: 2,
};

export const DoorColor = {
  BLACK: 1,
  GRAY: 2,
  WHITE: 3,
};
