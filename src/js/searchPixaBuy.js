class SearchPixaBuy {
  constructor(APIkey, template) {
    this._APIkey = APIkey;
    this._searchQuery = '';
    this._currentPage = 0;
    this._per_page = 10;
    this._image_type = 'photo';
    this.template = template;

    this._templateString = null;
  }

  set searchQuery(value) {
    if (this._searchQuery !== value) {
      this._currentPage = 1;
      let divGallery = document.querySelector('.divGallery');
      divGallery.innerHTML = '';
    }
    this._searchQuery = value;
    this.fetchToPixabuy();
  }

  update_templateString() {
    this._templateString = `https://pixabay.com/api/?image_type=${this._image_type}&orientation=horizontal&q=${this._searchQuery}&page=${this._currentPage}&per_page=${this._per_page}&key=${this._APIkey}`;
  }

  fetchToPixabuy = async () => {
    this.update_templateString();
    this._currentPage += 1;
    let response = await fetch(this._templateString);
    let data = await response.json();
    await this.imageView(data);
    this.scroolToEnd();
  };

  imageView(data) {
    let galleryList = this.template(data.hits);
    let divGallery = document.querySelector('.divGallery');
    divGallery.innerHTML += galleryList;
  }

  scroolToEnd() {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth',
    });
  }
}

export default SearchPixaBuy;
