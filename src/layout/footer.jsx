function Footer() {
    return <footer className="page-footer black">
        <div className="footer-copyright ">
            <div className="container">
            © {new Date().getFullYear()} RMP Copyright
            <a className="grey-text text-lighten-4 right" 
            href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
    export { Footer };