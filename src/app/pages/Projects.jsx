import ProjectCard from '../components/ProjectCard'

export default function Projects() {
	return (
		<section className='projects content-grid'>
			<h2 className='projects__title'>Projects</h2>
			<div className='projects__wrapper'>
				<ProjectCard
					projectName='Middle Earth Travel'
					cardImage='ME-travel-screenshot'
					projectTech='Next.js, HTML, CSS'
					liveLink='https://chris-wagg.github.io/travel-v2/'
					githubLink='https://github.com/Chris-Wagg/travel-v2'
					femLink=''
					builtWith='Next.js'
				/>
				<ProjectCard
					projectName='Accessible news homepage'
					cardImage='news-homepage'
					projectTech='Next.js, HTML, CSS, Accessibility'
					liveLink='https://chris-wagg-frontend-mentor-projects.github.io/news-homepage/'
					githubLink='https://github.com/Chris-Wagg-Frontend-Mentor-Projects/news-homepage'
					femLink='https://www.frontendmentor.io/solutions/news-homepage-cpQDBWXA6L'
				/>
				<ProjectCard
					projectName='Interactive rating component'
					cardImage='rating-component'
					projectTech='Next.js, HTML, CSS, Accessibility'
					liveLink='https://chris-wagg.github.io/interactive-rating/'
					githubLink='https://github.com/Chris-Wagg/interactive-rating'
					femLink='https://www.frontendmentor.io/solutions/nextjs-interactive-rating-component-vkuHfPE8gw'
				/>
				<ProjectCard
					projectName='Signup form'
					cardImage='fem-signup-form'
					projectTech='Next.js, HTML, CSS, JS'
					liveLink='https://chris-wagg-frontend-mentor-projects.github.io/sign-up-form/'
					githubLink='https://github.com/Chris-Wagg-Frontend-Mentor-Projects/sign-up-form'
					femLink='https://www.frontendmentor.io/solutions/introcomponentwithsignupform-built-with-nextjs-and-grid-ChLaAQ8PS9'
				/>
			</div>
		</section>
	)
}
