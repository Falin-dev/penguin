import './index.css'

const Home = () => {
    const linuxSystems = [
        {
            name: 'Ubuntu',
            description: 'A Debian-based Linux operating system known for its ease of use. It is one of the most popular distributions for beginners, personal computers, and servers.'
        },
        {
            name: 'Debian',
            description: 'One of the oldest and most stable operating systems based on the Linux kernel. It serves as the foundation for many other distributions.'
        },
        {
            name: 'Arch Linux',
            description: 'A lightweight and flexible Linux distribution that aims for simplicity and total control. It uses a rolling release model and targets advanced users.'
        },
        {
            name: 'Fedora',
            description: 'A community-driven Linux distribution sponsored by Red Hat. It is known for adopting the latest cutting-edge open-source technologies quickly.'
        }
    ]

    return (
        <div className="home-container">
            <h1>Linux Ecosystem</h1>
            <p>Linux is a family of open-source Unix-like operating systems based on the Linux kernel. Here are some of the most prominent distributions:</p>
            <div className="linux-list">
                {linuxSystems.map((system) => (
                    <div key={system.name} className="linux-item">
                        <h2>{system.name}</h2>
                        <p>{system.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
