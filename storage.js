const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("cadastros")) || [];
  },

  save(data) {
    localStorage.setItem("cadastros", JSON.stringify(data));
  }
};
