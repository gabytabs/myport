window.Event = new Vue({})

Vue.component('skills-section',{
	template: `
		<div class="skills-sections">
			<section class="frontend">
				<h1 class="title">Frontend Skills</h1>
					<div class="columns">
						<div class="column">
							<h2 class="text-center"> HTML </h2>
							<progress class="progress is-success" value="98" max="100">98%</progress>
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
							<progress class="progress is-info" value="50" max="100">50%</progress>
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
							<progress class="progress is-success" value="80" max="100">80%</progress>
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
							<progress class="progress is-primary" value="75" max="100">75%</progress>
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

Vue.component('works-section', {
	template:`
		<div class="works content is-medium">
			<h1 class="text-center"> MY WORK EXPERIENCES </h1>
			<section class="ladderio">
				<div class="header-work-container">
					<h1 class="work-title"><a href="https://ladder.io/" target="_blank" >Ladder.io</a></h1>
					<h4> <span class="year-work">2017</span></h4>
				</div>
				<div class="work-divider"></div>
				<div class="content-work-container">
					<h4> Web Developer </h4>
					<p class="work-util"><strong>What I used: </strong> Ruby on Rails </p>
					<p class="work-description">
						<ul>
							<li>
								Worked directly under a client to create a Rails app to store marketing benchmarks data in a database; this app serves as an API
							</li>
							<li>
								Designed a reactJS app that serves as a search engine for client’s internal marketing benchmarks
							</li>
						</ul> 
					</p>
				</div>
			</section>
			<section class="seembu">
				<div class="header-work-container">
					<h1 class="work-title"><a href="http://www.seembu.com/" target="_blank" >Seembu</a></h1>
					<h4> <span class="year-work">2016</span></h4>
				</div>
				<div class="work-divider"></div>
				<div class="content-work-container">
					<h4> Web Developer </h4>
					<p class="work-util"><strong>What I used: </strong> Ruby on Rails, WordPress, Javascript, JQuery </p>
					<p class="work-description">
						<ul>
							<li>
								Built a profiling system for every architect in the Philippines so that home owners can easily look for a architect of their choice; utilized AWS - S3 to store photos and files
							</li>
							<li>
								Maintained and implemented a WordPress site
							</li>
						</ul>
					</p>
				</div>
			</section>
			<section class="seembu">
				<div class="header-work-container">
					<h1 class="work-title">Codeitat Software Development</h1>
					<h4> <span class="year-work">2014 - 2015</span></h4>
				</div>
				<div class="work-divider"></div>
				<div class="content-work-container">
					<h4> Web developer | Product manager </h4>
					<p class="work-util"><strong>What I used: </strong> WordPress, Laravel, Scrum Product Owner, Javascript </p>
					<p class="work-description">
						<ul>
							<li>
								Managed a team of android developers, and designers to create a customer loyalty app for dessert shops
							</li>
							<li>
								Built, and maintained custom theme WordPress apps
							</li>
							<li>
								Consulted local small businesses on improving their global web
								presence
							</li>
							<li>
								Created side project web apps with Laravel - PHP
							</li>
							<li>
								Performed user research to learn more about customer loyalty in
								the desert space
							</li>
						</ul>
					</p>
				</div>
			</section>
		</div>
	`
})

Vue.component('education-section',{
	template:`
		<div class="works content is-medium">
			<h1 class="text-center"> MY PAST PROJECTS </h1>
			<section class="ladderio-server">
				<h2 class="title">Ladder.io</h2>
				<ul class="ul-projects">
					<li>
						<a href="https://ladder-api-app.herokuapp.com/" target="_blank">
							Data Entry GUI - API App
						</a>
					</li>
					<li>
						<a href="https://ladder-api-app.herokuapp.com/api/v1/industries" target="_blank">
							Marketing benchmarks JSON URL
						</a>
					</li>
					<li>
						<a href="https://ladder-search.herokuapp.com/" target="_blank">
							Search Engine App
						</a>
					</li>
				</ul>
			</section>
			<section class="ladderio-server">
				<h2 class="title">Seembu</h2>
				<ul class="ul-projects">
					<li>
						<a href="http://www.seembu.com/" target="_blank">
							Seembu Blog Site
						</a>
					</li>
				</ul>
			</section>
			<section class="ladderio-server">
				<h2 class="title">MCRD Enterprises</h2>
				<ul class="ul-projects">
					<li>
						<a href="http://mcrdenterprises.com/" target="_blank">
							MCRD Landing Page
						</a>
					</li>
				</ul>
			</section>
			<section class="ladderio-server">
				<h2 class="title">Side Projects</h2>
				<ul class="ul-projects">
					<li>
						<a href="http://vue-js.bitballoon.com/" target="_blank">
							NewsAPI with VueJS
						</a>
					</li>
				</ul>
			</section>
		</div>
	`
})

const app = new Vue({
	el: "#app",
	data: {
		showintro: true,
		showskills: false,
		showproject: false,
		html: "0",
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