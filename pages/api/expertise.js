const expertise = [
    {
        id: 0,
        title: 'PHP Development',
        desc: 'I am a skilled PHP developer with extensive experience in building robust web applications using PHP frameworks such as Laravel and CodeIgniter. I possess a strong understanding of server-side programming, API integration, and database management with MySQL and PostgreSQL. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'ReactJS Development',
        desc: "I am a skilled React.js developer with extensive experience in building dynamic and responsive web applications using React.js, JavaScript, HTML, and CSS. I have a strong understanding of component-based architecture, state management, and API integration. With my expertise, I can deliver efficient and user-friendly front-end solutions tailored to meet the unique requirements of clients.",
    },
    {
        id: 2,
        title: 'Scrum and Jira',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    }
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
