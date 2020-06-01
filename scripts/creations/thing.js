class Thing {
  constructor(name = '', position = [0, 0]) {
    this.name = name;
    this.position = position;
    this.birthday = Date.now();
    this.matter = document.createElement('div');
    this.active = false;

    //Inserting DOM Element into the Universes
    this.matter.setAttribute('data-name', name);
    this.matter.classList.add('thing');
    this.matter.style.top = `${position[0] < 500 ? position[0] : 0}px`;
    this.matter.style.left = `${position[1] < 500 ? position[1] : 0}px`;
    document.getElementById('universe').appendChild(this.matter);

    //Binding
    this.wander = this.wander.bind(this);

    //Behavior
    const wander = setInterval(this.wander, 1000);
  }
  getAge() {
    const ageMilliseconds = Date.now() - this.birthday;
    return {
      ageMilliseconds,
      formattedAge: `${ageMilliseconds / 86400000} days`
    };
  }
  setPosition(top, left) {
    this.position = [top, left];
    this.matter.style.top = `${top}px`;
    this.matter.style.left = `${left}px`;
  }
  wander() {
    let newTop = this.position[0] + Math.floor(Math.random() * 3) - 1;
    let newLeft = this.position[1] + Math.floor(Math.random() * 3) - 1;
    while (newTop < 0 || newTop >= 500) {
      newTop = this.position[0] + Math.floor(Math.random() * 3) - 1;
    }
    while (newLeft < 0 || newLeft >= 500) {
      newLeft = this.position[0] + Math.floor(Math.random() * 3) - 1;
    }
    this.setPosition(newTop, newLeft);
    console.log(this.position);
  }
}

export default Thing;
