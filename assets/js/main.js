window.Event = new Vue({})

Vue.component('skill-section',{
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
	`,
	methods: function() {

	}
})

Vue.component('project-section',{
	template:`
		<div class="projects content is-small">
			<h1 class="text-center"> MY PAST WORKS </h1>
			<a href="http://www.mcrdenterprises.com" target="_blank">
			<section class="hero is-primary project1">
			  <div class="hero-body">
			    <div class="container">
				      <h1 class="title">
				        MCRD Enterprises
				      </h1>
			      <h4 class="subtitle">
			        A family business engage in wholesale clothing and garment manufacturing,</br> printing, 
			        embroidering and design based on Philippines.
			      </h4>
			      <h4 class="subtitle"><strong>Year:</strong> 2014</h4>
			      <h4 class="subtitle"><strong>What is it: </strong> A promotional website built using WordPress.</h4>
			      <h4 class="subtitle"><strong>What I did: </strong> I build this using Divi theme with custom CSS. </h4>
			    </div>
			  </div>
			</section>
			</a>
			<section class="hero is-info project2">
			  <div class="hero-body">
			    <div class="container">
				    <h1 class="title">
				    	Codeitat Web Development
				    </h1>
			      <h4 class="subtitle">
			        A cross functional team that builds mobile apps, websites, web apps and graphic design</br> for businesses,
			        based in the Philippines
			      </h4>
			      <h4 class="subtitle"><strong>Year:</strong> 2013</h4>
			      <h4 class="subtitle"><strong>What is it: </strong> A landing page built using angular 1.</h4>
			      <h4 class="subtitle"><strong>What I did: </strong> I was the web developer and product manager of the group. </h4>
			    </div>
			  </div>
			</section>
			<section class="hero project3">
			  <div class="hero-body">
			    <div class="container">
				    <h1 class="title">
				    	Qmune Loyalty App
				    </h1>
			      <h4 class="subtitle">
			        A mobile android app that serves a digital loyalty system for dessert shops to </br>gather important informations for loyal customers.
			      </h4>
			      <h4 class="subtitle"><strong>Year:</strong> 2013</h4>
			      <h4 class="subtitle"><strong>What is it: </strong> An Android tablet application with a unique QR card.</h4>
			      <h4 class="subtitle"><strong>What I did: </strong> I was the product manager for this app. </h4>
			    </div>
			  </div>
			</section>
			<a href="http://www.seembu.com" target="_blank">
			<section class="hero is-success project4">
			  <div class="hero-body">
			    <div class="container">
				      <h1 class="title">
				        Seembu
				      </h1>
			      <h4 class="subtitle">
			      	A source of architectural insights, interior tips, marketing tips, self-improvement guides </br> and inspiring stories.
			      </h4>
			      <h4 class="subtitle"><strong>Year:</strong> 2015</h4>
			      <h4 class="subtitle"><strong>What is it: </strong> A blog site built using WordPress.</h4>
			      <h4 class="subtitle"><strong>What I did: </strong> I build this using X theme with custom CSS. </h4>
			    </div>
			  </div>
			</section>
			</a>
		</div>
	`
})

// Vue.component('education-section',{
// 	template:`
// 		<div>
			
// 		</div>
// 	`
// })

const app = new Vue({
	el: "#app",
	data: {
		showintro: true,
		showskills: false,
		showproject: false,
		html: "0"
		// showeduction: false
	},
	methods: {
		showIntroSection(){
			this.showintro = true
			this.showskills = false
			this.showproject = false
			// this.showeduction = false
		},
		showSkillsSection() {
			this.showskills = true
			this.showintro = false
			this.showproject = false
			// this.showeduction = false
		},
		showProjectSection() {
			this.showproject = true
			this.showintro = false
			this.showskills = false
			// this.showeduction = false
		},
		// showEducationSection() {
		// 	this.showproject = false
		// 	this.showintro = false
		// 	this.showskills = false
		// 	this.showeduction = true
		// }
	}
})