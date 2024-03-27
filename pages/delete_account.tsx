import Head from 'next/head';
import Wrapper, { Heading } from 'styles/pages/tos';
import v from 'styles/variables';
export default function Page() {
  return (
    <>

<Head>
	<title>Delete Account</title>
</Head>

<Wrapper>
	<section class=''>
		<form action='' method='POST' id='apiForm'>
			<Heading>Delete Account</Heading>
			<p>Enter your email address and click Submit to get a link in your email to delete your account.</p>	

			<div class='dTextboxesAlign'>
				<label for='email'>Email</label>
				<input type='email' id='email' name='email' required autofocus>
			</div>
			<button type='submit'>Submit</button>
		</form>
		<script>
			function validateForm() {
				var emailInput = document.getElementById('email');
				var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

				if (!emailPattern.test(emailInput.value)) {
					alert('Please enter a valid email address.');
					return false;
				}
				return true;
			}
		</script>
		<section class='testimonials-container'>
			<div style='height:50px;width:100%;background-color:#138cce;'>&#160;</div>
		</section>		
</Wrapper>
    </>
  );
}
