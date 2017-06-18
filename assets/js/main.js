window.Event = new Vue({})

Vue.component('skill-section',{
	template: `
		<div class="skills-sections">
			<section class="frontend">
				<h1 class="title">Frontend Skills</h1>
					<div class="columns">
						<div class="column">
							<h2 class="text-center"> HTML </h2>
							<progress class="progress is-success" value="95" max="100">95%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> CSS </h2>
							<progress class="progress is-success" value="95" max="100">95%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> Javascript </h2>
							<progress class="progress is-primary" value="75" max="100">70%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> JQuery </h2>
							<progress class="progress is-danger" value="35" max="100">35%</progress>
						</div>
					</div>
					<div class="columns">
						<div class="column">
							<h2 class="text-center"> VueJS </h2>
							<progress class="progress is-info" value="60" max="100">60%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> Webpack </h2>
							<progress class="progress is-primary" value="60" max="100">60%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> SASS </h2>
							<progress class="progress is-info" value="60" max="100">60%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> Bootstrap </h2>
							<progress class="progress is-success" value="90" max="100">90%</progress>
						</div>
					</div>
					<div class="columns">
						<div class="column">
							<h2 class="text-center"> Responsive Design </h2>
							<progress class="progress is-primary" value="75" max="100">75%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> WordPress </h2>
							<progress class="progress is-success" value="80" max="100">80%</progress>
						</div>
					</div>
			</section>
			<section class="backend">
				<h1 class="title">Backend Skills</h1>
					<div class="columns">
						<div class="column">
							<h2 class="text-center"> RelationalDB </h2>
							<progress class="progress is-success" value="95" max="100">80%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> mySQL </h2>
							<progress class="progress is-info" value="65" max="100">65%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> PostgreSQL</h2>
							<progress class="progress is-primary" value="75" max="100">75%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> Ruby </h2>
							<progress class="progress is-success" value="85" max="100">85%</progress>
						</div>
					</div>
					<div class="columns">
						<div class="column">
							<h2 class="text-center"> Testing </h2>
							<progress class="progress is-primary" value="75" max="100">75%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> RSpec </h2>
							<progress class="progress is-primary" value="75" max="100">75%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> Capybara </h2>
							<progress class="progress is-danger" value="45" max="100">45%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> Heroku </h2>
							<progress class="progress is-info" value="55" max="100">45%</progress>
						</div>
					</div>
					<div class="columns">
						<div class="column">
							<h2 class="text-center"> Ruby on Rails </h2>
							<progress class="progress is-success" value="90" max="100">90%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> RESTful Services </h2>
							<progress class="progress is-primary" value="75" max="100">75%</progress>
						</div>
					</div>
			</section>
			<section class="essential">
				<h1 class="title">Essentials</h1>
					<div class="columns">
						<div class="column">
							<h2 class="text-center"> Terminal Use</h2>
							<progress class="progress is-success" value="95" max="100">95%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> FTP </h2>
							<progress class="progress is-success" value="85" max="100">85%</progress>
						</div>
						<div class="column">
							<h2 class="text-center"> Sublime </h2>
							<progress class="progress is-success" value="90" max="100">90%</progress>
						</div>
					</div>
					<div class="columns">
						<div class="column">
							<h2 class="text-center"> Github </h2>
							<progress class="progress is-success" value="90" max="100">90%</progress>
						</div>
					</div>
			</section>
		</div>
	`
})

Vue.component('project-section',{
	template:`
		<div class="projects content is-small">
			<h1 class="text-center"> My past works </h1>
			<section class="project1">
				<h2> MCRD Enterprises </h2>
				<a href="http://www.mcrdenterprises.com" target="_blank"><h4>www.mcrdenterprises.com</h4></a>
				<h4> 2013 </h4>
				<h4> What is it? </h4>
				<p>
					It is a WordPress App.
				</p>
			</section>
		</div>
	`
})

new Vue({
	el: "#app",
	data: {
		showintro: true,
		showskills: false,
		showproject: false,
		showeduction: false
	},
	methods: {
		showIntroSection(){
			this.showintro = true
			this.showskills = false
			this.showproject = false
			this.showeduction = false
		},
		showSkillsSection() {
			this.showskills = true
			this.showintro = false
			this.showproject = false
			this.showeduction = false
		},
		showProjectSection() {
			this.showproject = true
			this.showintro = false
			this.showskills = false
			this.showeduction = false
		},
		showEducationSection() {
			this.showproject = false
			this.showintro = false
			this.showskills = false
			this.showeduction = true
		}
	}
})