const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="home">Minim App</a>
                <form className="d-flex input-group w-auto">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </form>
            </div>
        </nav>
    )
}
export default Header;