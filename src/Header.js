import dLogo from "./assets/dacode.png"

export default function Header() {
    


    return(
        <div className="hdr_main">
            <div className="logo"><img src={dLogo} height="16"/></div>
            <div className="nav_aaa">
                <a href="#" className="lnk1">Link 1</a>
                <a href="#" className="lnk1">Link 2</a>
                <a href="#" className="lnk1">Link 3</a>
                <a href="#" className="lnk1">Link 4</a>
                <a href="#" className="lnk2">The Best Link</a>
            </div>
        </div>
    )
}