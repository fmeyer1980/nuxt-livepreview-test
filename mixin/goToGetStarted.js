export default {
	methods: {
		goToGetStarted()
		{
			var el = document.getElementById('getstarted');
			if(el){
				el.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
			}
			else
			{
				this.$router.push({name:'index',hash: '#getstarted'})
			}
		},
	}
}
