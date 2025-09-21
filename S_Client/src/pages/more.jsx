import MainLook from '../components/MainLook.jsx';

function More() {

    return (
        <MainLook>
            <div className="more_page">
                <h2>Professional Summary</h2>
                <p>Seasoned fullstack developer with years of experience in 
                    web-system design, contruction, implementation, and 
                    optimization.Experienced in working with JavaScript, 
                    React.js, and Node.js.<br />
                    Skilled in creating RESTful APIs for scalable applications. <br />
                    Proficient in group-synchronicity, resource-management,
                    as well as time-efficient problem-solving.
                </p>
                <h2>Skills</h2>
                <ul className='skills'>
                    <li><strong>Web-Development: </strong>Site-design, build and hosting</li>
                    <li><strong>System-integration: </strong>Server generation and integration</li>
                    {/*
                    <li><strong>Frontend:</strong>JavaScript, React.js, HTML/CSS, Python</li>
                    <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose, JWT</li>
                    <li><strong>Tools:</strong> Git, VS Code, GitHub, Postman</li>
                    */}
                    <li><strong>Other Skills:</strong> RESTful APIs, Internationalization, Flexible work-model, Research</li>
                </ul>
                <h2>Experince</h2>
                <div className="experience">
                    <h3>Freelancer, Nairobi | Jun 2023 - Present</h3>
                    <ul>
                        <li>Familiarity implementing systems using traditional Monolithic as well as the MERN-stack methods.</li>
                        <li>Made dynamic and WCAG-compliant webpages.</li>
                        <li>Intrepid problem-solver with experiece using software-testing technologies.</li>
                        <li>Maximized existing systems by optimizing available resources with view to improving service delivery.</li>
                    </ul>
                </div>
                <h2>Projects</h2>
                <div className="projects">
                    <ol>
                        <a href="https://finals-git-main-tachaeus-projects.vercel.app/?_vercel_share=Tl5L6HFn88cjkL4eYy6jFRVrSGA5JjN3">
                            <li>
                                <h3>Scriptor</h3>
                                <p>Scriptor's complete website</p>
                            </li>
                        </a>
                        <li>
                            <h3>Coming Soon Projects</h3>
                            <p>I shall post updates as I progress.</p>
                        </li>
                    </ol>
                </div>
                <h2>Hit Me Up!</h2>
                <div className="reach_out">
                    <p>Email: <a href="mailto:tachincursion@gmail.com">tachincursion@gmail.com</a></p>
                </div>
            </div>
        </MainLook>
    )
}

export default More;
