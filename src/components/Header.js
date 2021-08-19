
const Header = ({ theme }) => {

    return (
      <div className="padT4 padB4">
          <div className="container mobile-container">
              <div className="d-flex justify-content-between">
                  <div>
                    <img src="site-logo.png"></img>
                  </div>
                  <div className="light">
                    <h4 className="header-title">
                        Technical Analysis Tool Kit
                    </h4>
                  </div>
                  <div className={theme === 'light' ? '' : 'text-info'}>
                        Hello John &nbsp; &nbsp;
                        <span>
                            <a href="#">sign-out</a>
                        </span>
                    </div>
              </div>
          </div>
      </div> 
    )
}

export default Header