export class TV {
  increaseVolume() {
    console.log("TV volume increased");
  }
  decreaseVolume() {
    console.log("TV volume decreased");
  }
  mute() {
    console.log("TV muted");
  }
}

export class Speaker {
  increaseVolume() {
    console.log("Speaker volume increased");
  }
  decreaseVolume() {
    console.log("Speaker volume decreased");
  }
}

export class Bridge {
  constructor(device) {
    this.device = device;
  }

  increase() {
    this.device.increaseVolume();
  }

  decrease() {
    this.device.decreaseVolume();
  }
}

export class BridgeWithMute extends Bridge {
  mute() {
    if (this.device.mute) {
      this.device.mute();
    } else {
      console.log("This device doesn't support mute");
    }
  }
}
