import { createEnum } from '@/models/CreateEnum';

export class Door {
  constructor(raw) {
    this.type = raw ? raw.type : DoorType.SINGLE;
    this.width = raw ? raw.width : 120;
    this.height = raw ? raw.height : 250;
    this.beams = raw ? raw.beams : 4;
    this.posts = raw ? raw.posts : 2;
    this.color = raw ? raw.color : DoorColor.BLACK;
  }

  update(property, value) {
    if (!this.hasOwnProperty(property)) return;

    switch (property) {
      case 'width':
        if (value <= 0 || value > 160) return;
        break;
      case 'height':
        if (value <= 0 || value > 300) return;
        break;
      case 'beams':
        if (value < 0 || value > 4) return;
        break;
      case 'posts':
        if (value < 0 || value > 4) return;
        break;
    }

    this[property] = value;
  }
}

export const DoorType = createEnum({
  SINGLE: 1,
  DOUBLE: 2,
});

export const DoorColor = createEnum({
  BLACK: 0,
  GRAY: 1,
  WHITE: 2,
});
