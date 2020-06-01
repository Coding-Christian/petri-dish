class Thing {
  constructor(name = '', position = [0, 0]) {
    this.name = name;
    this.position = position;
    this.birthday = Date.now();
    this.matter = document.createElement('div');
    this.matter.classList.add('thing');
    this.matter.style.top = position[0];
    this.matter.style.left = position[1];
  }
  getAge() {
    const ageMilliseconds = Date.now() - this.birthday;
    return {
      ageMilliseconds,
      formattedAge: `${ageMilliseconds / 86400000} days`
    };
  }
}

export default Thing;
