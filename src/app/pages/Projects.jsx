import ProjectCard from '../components/ProjectCard'

export default function Projects() {
	return (
		<section className='projects'>
			<h2 className='projects__title'>Projects</h2>
			<div className='projects__wrapper'>
				<ProjectCard
					projectName='Middle Earth Travel'
					cardImage='ME-travel-screenshot'
					cardAlt='Middle Earth travel screenshot'
					projectTech='Next.js, HTML, CSS'
					liveLink='https://chris-wagg.github.io/travel-v2/'
					githubLink='https://github.com/Chris-Wagg/travel-v2'
				/>
				<ProjectCard
					projectName='Frontend Mentor Projects'
					cardImage='FEM-screenshot'
					cardAlt='Frontend Mentor screenshot'
					projectTech='Next.js, HTML, CSS, JS'
					liveLink='https://www.frontendmentor.io/profile/Chris-Wagg'
					githubLink='https://github.com/orgs/Chris-Wagg-Frontend-Mentor-Projects/repositories'
				/>
			</div>
		</section>
	)
}
