export default class UserModel {
  constructor(data = undefined) {
    if (typeof data === 'undefined') {
      return this.emptyModel();
    }

    this.picture = {uri: data.picture.medium || null};
    this.fullName = `${data.name.title} ${data.name.first} ${data.name.last}`.toUpperCase() || null;
  }

  emptyModel() {
    this.picture = null;
    this.fullName = '';

    return this;
  }
}