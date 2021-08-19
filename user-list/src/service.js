export default class Service {
  $_apiUrl = "https://jsonplaceholder.typicode.com";
  getResearch = async (url, method, data) => {
    const res = await fetch(`${this.$_apiUrl}${url}`, {
      method,
      body: data ? JSON.stringify(data) : null,
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResearch("/users", "GET");
    return res.map((value) => this._transformPerson(value));
  };
  removePeople = async (id) => {
    return await this.getResearch(`/users/${id}`, "DELETE", id);
    
  };
  updatePeople = async (people) => {
    const res = await this.getResearch("/users", "POST", people);
    return res
     
  };
  addPeople = async (people) => {
    return await this.getResearch(`/users/`, "POST", people);
  };

  _transformPerson = (person) => {
    return {
      id: person.id,
      name: person.name,
      email: person.email,
      phone: person.phone,
    };
  };
}
