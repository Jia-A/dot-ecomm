import "./footer.css";

const Footer = () =>{
    return (
        <div className="App">
            <footer className="main-foot">
                <p className="quote">Books are a uniquely portable magic.</p>
                <p className="copyright">© | 2022 | jiyaagrawal</p>
                <div className="foot-links">
                    <a href="https://github.com/Jia-A"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jiyaagrawal/"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/jiya_agrawal2"><i class="fab fa-twitter"></i></a>
                </div>
            </footer>
        </div>
    );
}


export {Footer}

