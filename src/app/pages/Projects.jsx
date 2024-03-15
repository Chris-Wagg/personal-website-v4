import ProjectCard from '../components/ProjectCard'

export default function Projects() {
	return (
		<section className='projects content-grid'>
			<h2 className='projects__title breakout-left'>Projects</h2>
			<div className='projects__wrapper full-width'>
				<ProjectCard
					projectName='Middle Earth Travel'
					cardImage='ME-travel-screenshot'
					cardAlt='Middle Earth travel screenshot'
					projectTech='Next.js, HTML, CSS'
					liveLink='https://chris-wagg.github.io/travel-v2/'
					githubLink='https://github.com/Chris-Wagg/travel-v2'
					femLink=''
					builtWith='Next.js'
				/>
				<ProjectCard
					projectName='Base Apparel landing page'
					cardImage='base-apparel-ss'
					cardAlt='Base Apparel landing page'
					projectTech='Next.js, HTML, CSS, TS'
					liveLink='https://chris-wagg-frontend-mentor-projects.github.io/base-apparel/'
					githubLink='https://github.com/Chris-Wagg-Frontend-Mentor-Projects/base-apparel'
					femLink='https://www.frontendmentor.io/solutions/base-apparel-with-next-typescript-flex-hwpXp9TkCa'
				/>
				<ProjectCard
					projectName='Signup form'
					cardImage='fem-signup-form'
					cardAlt='sign up project'
					projectTech='Next.js, HTML, CSS, JS'
					liveLink='https://chris-wagg-frontend-mentor-projects.github.io/sign-up-form/'
					githubLink='https://github.com/Chris-Wagg-Frontend-Mentor-Projects/sign-up-form'
					femLink='https://www.frontendmentor.io/solutions/introcomponentwithsignupform-built-with-nextjs-and-grid-ChLaAQ8PS9'
				/>
			</div>
		</section>
	)
}
