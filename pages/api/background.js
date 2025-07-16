const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Masters in Computer Science',
                degree: 'MG Vidyamandir Institute of Management',
                detail: "Completed Masters in Computer Science from MG Vidyamandir Institute of Management Nashik with GPA: 7.25",
                year: '2016-2018'
            },
            {
                id: 1,
                title: 'Bachelor in Computer Science',
                degree: 'MG Vidyamandir Institute of Management',
                detail: "Completed Bachelor in Computer Science from MG Vidyamandir Institute of Management Nashik with 60.25%",
                year: '2014-2016'
            },
            {
                id: 2,
                title: 'Diploma in Computer Technology',
                degree: 'S.M.E.S. Polytechnic Nashik',
                detail: "Completed Diploma in Computer Technology from S.M.E.S. Polytechnic Nashik with 62.58%",
                year: '2010-2014'
            },
            {
                id: 3,
                title: 'SSC',
                degree: 'DD Bytco Boys High School',
                detail: "Completed SSC from DD Bytco Boys High School Nashik with 55.23%",
                year: '2008 Passout'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'ESDS Software Solutions',
                role: 'Sr. PHP Developer & ReactJS',
                url: 'https://www.esds.co.in/',
                desc: 'Built and maintained dynamic web applications using React JS and PHP frameworks. Implemented role-based access control and optimized database queries. Designed and developed REST APIs for seamless communication between frontend and backend systems.',
                year: 'Aug 2022 - Present',
                location: 'Nashik, Maharashtra, India'
            },
            {
                id: 2,
                title: 'Prometteur Solutions Pvt. Ltd',
                role: 'Sr. PHP Developer',
                url: 'https://prometteursolutions.com/',
                desc: 'Developed scalable web solutions using Laravel and CodeIgniter, improving system performance by up to 40% and reducing server response time by 30%. Integrated 10+ third-party APIs (e.g., payment gateways, CRMs, analytics tools), enhancing. Projects application functionality and reducing development time by 25%. Collaborated with QA teams to ensure quality assurance, leading to 95% bug-free releases and reducing post-deployment issues by 40%.',
                year: 'Jun 2021 - Jul 2022',
                location: 'Pune, Maharashtra, India'
            },
            {
                id: 3,
                title: 'Image Online Pvt. Ltd',
                role: 'Sr. PHP Developer',
                url: 'https://www.imageonline.co.in/',
                desc: 'Enhanced application performance and usability through optimized coding practices, resulting in a 35% faster load time and a 20% increase in user engagement. Built 15+ custom modules for CMS platforms (e.g., WordPress), improving client-specific functionality and reducing reliance on third-party plugins by 40%. Handled system debugging and issue resolution, decreasing reported bugs by 50% and improving system stability across multiple deployments.',
                year: 'Dec 2020 - Jun 2021',
                location: 'Mumbai, Maharashtra, India'
            },
            {
                id: 4,
                title: 'Solace Technologies',
                role: 'PHP Developer',
                url: 'https://solaceinfotech.com/',
                desc: 'Delivered end-to-end solutions for 10+ web-based projects, ensuring timely delivery and achieving 95% on-time completion by adhering to agile methodologies. Collaborated with cross-functional teams (design, development, QA) to meet project requirements, resulting in 100% client satisfaction and a 15% improvement in project delivery time.',
                year: 'Jun 2017 - Nov 2020',
                location: 'Nashik, Maharashtra, India'
            }

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
