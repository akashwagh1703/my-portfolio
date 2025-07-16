const portfolio = [
    {
        id: 1,
        projectName: "Krushak Odisha Unified Portal",
        url: "https://fup.odisha.gov.in/",
        image: "projects/ocac.png",
        projectDetail: "Unified farmer platform built in React.js. Offers scheme calculators, chatbot, and public resources. Admin panel for content and activity management.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Bootstrap 5"
            },
            {
                tech: "CMMI 5"
            },
            {
                tech: "Git"
            },
            {
                tech: "JIRA"
            },
        ]
    },
    {
        id: 2,
        projectName: "NERACE - Agri Trading Platform",
        url: "https://www.nerace.in/",
        image: "projects/nerace.png",
        projectDetail: "Online marketplace connecting farmers, buyers, and sellers & interactive React interface for farmer-to-buyer trading. Seller/buyer dashboards for posting, tracking, and trading. Powered by CodeIgniter APIs. Developed role-based backend modules using CodeIgniter. Supports product listings, secure transactions, admin oversight.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Bootstrap 5"
            },
            {
                tech: "Codeigniter"
            },
            {
                tech: "Restfull APIs"
            },
            {
                tech: "CMMI 5"
            },
            {
                tech: "Git"
            },
            {
                tech: "JIRA"
            },
        ]
    },
    {
        id: 3,
        projectName: "FAMRUT",
        url: "https://www.famrut.com/",
        image: "projects/famrut.png",
        projectDetail: "Laravel API layer for POS operations. RESTful APIs for sales, billing, reporting integrated into CodeIgniter UI. Real-time syncing and robust performance. Farmer-focused POS interface using React. Quick billing, scanning, reporting features. Synchronized with Laravel APIs for real-time data.",
        technologiesUsed: [
            {
                tech: "Codeigniter"
            },
            {
                tech: "Restfull APIs"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "ReactJS"
            },
            {
                tech: "Bootstrap 5"
            },
            {
                tech: "CMMI 5"
            },
            {
                tech: "Git"
            },
            {
                tech: "JIRA"
            },
        ]
    },
    {
        id: 4,
        projectName: "ICAR & ICARG POS System",
        url: "https://play.google.com/store/search?q=onion+crop+advisor&c=apps&hl=en",
        image: "projects/icar.png",
        projectDetail: "React frontend for agriculture POS. Real-time order management, stock updates, and reporting. Integrated with CodeIgniter backend APIs.",
        technologiesUsed: [
            {
                tech: "Codeigniter"
            },
            {
                tech: "Restfull APIs"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "ReactJS"
            },
            {
                tech: "Bootstrap 5"
            },
            {
                tech: "CMMI 5"
            },
            {
                tech: "Git"
            },
            {
                tech: "JIRA"
            },
        ]
    },
    {
        id: 4,
        projectName: "Uzima - Hospital Management",
        // url: "https://play.google.com/store/search?q=onion+crop+advisor&c=apps&hl=en",
        // image: "projects/icar.png",
        projectDetail: "Laravel API services for hospital modules. Covered patient records, billing, inventory via secure REST APIs. Integrated with CodeIgniter frontend for seamless communication. Full-featured hospital management system. CodeIgniter handled UI/admin; Laravel APIs managed patient, billing, inventory. Built using jQuery, AJAX, and Bootstrap for responsive UX.",
        technologiesUsed: [
            {
                tech: "Codeigniter"
            },
            {
                tech: "Restfull APIs"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "ReactJS"
            },
            {
                tech: "Bootstrap 5"
            },
            {
                tech: "CMMI 5"
            },
            {
                tech: "Git"
            },
            {
                tech: "JIRA"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
