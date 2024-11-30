import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="home-container">
            <h1>Podcast App</h1>
            <p>Discover your favorite podcasts with us.</p>
            <Link to={'/previews/'}>Browse</Link>
        </div>
    )
}