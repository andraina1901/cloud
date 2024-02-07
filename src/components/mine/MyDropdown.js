function MyDropdown() {
    return(
        <div
            className="hero-search-wrapper wow fadeInUp"
            data-wow-delay="70ms"
        >
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="form_group">
                <input
                  type="search"
                  className="form_control"
                  placeholder="Search By Category"
                  name="search"
                  required=""
                />
                <i className="ti-ink-pen" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form_group">
                <select className="wide">
                  <option value="all">All Categories</option>
                  <option value="01">
                    <input type="checkbox" id="museums" /> Museums
                  </option>
                  <option value="02">
                    <input type="checkbox" id="restaurant" /> Restaurant
                  </option>
                </select>
              </div>
            </div>
            <MyDropdown/>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="form_group">
                <input
                  type="text"
                  className="form_control"
                  placeholder="Location"
                  name="location"
                  required=""
                />
                <i className="ti-location-pin" />
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="form_group">
                <button className="main-btn icon-btn">Search Now</button>
              </div>
            </div>
          </div>
        </form>
      </div>

    );
}