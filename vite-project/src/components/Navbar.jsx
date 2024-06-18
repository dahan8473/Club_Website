import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav class="nav">
            <div>
                <ul class="pages">
                    <CustomLink to="/" class="kanit-semibold">Home</CustomLink>
                    <CustomLink to="/about" class="kanit-semibold">About</CustomLink>
                    <CustomLink to="/projects" class="kanit-semibold">Projects</CustomLink>
                    <CustomLink to="/team" class="kanit-semibold">Team</CustomLink>
                </ul>
            </div>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return ( 
        <li className={ isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}