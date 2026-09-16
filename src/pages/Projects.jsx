import ProjectCard from "../component/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Website Mitra Industri",
        desc: "Aplikasi SPA yang menampilkan profil, daftar proyek, dan formulit kontak.",
        image: "/image/mitra.jpeg",
        tech:["React", "React-Router", "CSS"],
        githubUrl: "https://github.com/rafiDevelop-deep/Mitra-Kerja-Sama-Sekolah/",
        demoUrl:"https://jurnalfajriiiii.co-id.id/Perusahaan/login.php",
    },
    {
        id: 2,
        title: "Aplikasi Quizz Sederhana",
        desc: "aplikasi tes soal untuk ulangan.",
        image: "/image/quizz.png",
        tech: ["React", "UseState", "Localstorage"],
        githubUrl: "https://github.com/username/catatn.app",
        demoUrl: "https:quizz-rafi.netlify.app",
    },

{
        id: 3,
        title: "",
        desc: "aplikasi tes soal untuk ulangan.",
        image: "/image/quizz.png",
        tech: ["React", "UseState", "Localstorage"],
        githubUrl: "https://github.com/username/catatn.app",
        demoUrl: "https:quizz-rafi.netlify.app",
    },
];

function Projects() {
    return (
        <section className="projects">
            <h2>Projek Saya</h2>
            <div className ="project-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </div>
        </section>
    );
}

export default Projects;