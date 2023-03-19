import Link from "next/link"
import Project from "src/Components/Projects/Project/Project"
import styles from "./ProjectsPage.module.scss"
import client from "src/sanity";


export default function ProjectsPage({ projects }) {

    const { projects: portfolio, button, } = projects;

    const renderProjects = portfolio.map((project) => (
        <Project key={project._key} project={project} />
    ));
    return (
        <section className={styles.projects} id='projects'>
            <Link href="/" className={styles.h2}><h2>Home</h2></Link>
            <ul className={styles.list}>{renderProjects}</ul>
        </section>
    )
}


export const getStaticProps = async () => {
    const projects = await client.fetch(`*[_type == "projectsPage"][0]`);

    return {
        props: {
            projects,
        },
    };
};
