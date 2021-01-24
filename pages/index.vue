<template>
	<div class="h-full font-sans">
		<div class="h-full bg-gray-100">
			<Header />
			<Hero />
			<div class="py-4 w-full max-w-screen-2xl mx-auto">
				<div class="text-center py-6">
					<h2 class="text-gray-800 text-3xl font-medium">Commonly searched articles</h2>
					<div class="grid grid-cols-4 py-6 gap-8">
						<Article title="Information regarding system emails" image="idk" author="George" preview="Heimsnet system emails are emails that inform the user about changes to their account / services. These emails cannot be unsubscribed from since they are important for..." />
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
  export default {}

</script>

<style>

</style>
