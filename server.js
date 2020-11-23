const express=require("express");
const server=express();
server.use(express.static(__dirname+"/public"));
server.get('/',(req,res)=>{
    res.send(`
    <!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Personal Website</title>
</head>

<body>
	<div id="page">
		<div id="header">
			<div>
				
				<ul id="navigation">
					<li class="selected">
						<a><img src="images/logo.png" alt=""></a>
						</li>
						
				</ul>
			</div>
		</div>
		<div id="body" class="home">
			<div class="header">
				<img src="images/bg-home.jpg" alt="">
				<div>
					<a>Pakawat Boonrat</a>
				</div>
			</div>
			<div class="body">
            <br><br>    
            <div>
					<div>
						<h2>About Me</h2>
						<h1>Hi! guys, Welcome to my website. I'm Pakawat Boonrat. My student code is 59030195. COMPUTER</h1>
					</div>
					<img src="images/me.png" alt="">
				</div>
			</div>
		</div>
		<div id="footer">
			<div>
				<div class="connect">
					<a href="https://web.facebook.com/pakawat.boonrat/" class="facebook">facebook</a>
					<a href="https://twitter.com/GolfzThePheeAKA/" class="twitter">twitter</a>
					<a href="https://aboutme.google.com/u/0/?referer=gplus/" class="googleplus">googleplus</a>
				</div>
				<p>Directed by Pakawat Boonrat 59030195. And these is way to contact with me.</p>
			</div>
		</div>
	</div>
</body>

<style>
	body {
	margin: 0;
	padding: 0;
	position: relative;
	width: auto;
}
body #page {
	margin: 0;
	overflow: hidden;
	padding: 0;
	width: auto;
}
a {
	text-decoration: none;
	outline: none;
}
a:active {
	background: none;
}
img {
	border: none;
}
/*-------------------------------------------FONTS---------------------------------------------*/
@font-face {
	font-family: 'roboto-regular-webfont';
	src: url('../fonts/roboto-regular-webfont.eot');
	src: url('../fonts/roboto-regular-webfont.woff') format('woff'), url('../fonts/roboto-regular-webfont.ttf') format('truetype'), url('../fonts/roboto-regular-webfont.svg') format('svg');
}
@font-face {
	font-family: 'quicksand-bold-webfont';
	src: url('../fonts/quicksand-bold-webfont.eot');
	src: url('../fonts/quicksand-bold-webfont.woff') format('woff'), url('../fonts/quicksand-bold-webfont.ttf') format('truetype'), url('../fonts/quicksand-bold-webfont.svg') format('svg');
}
@font-face {
	font-family: 'magra-bold-webfont';
	src: url('../fonts/magra-bold-webfont.eot');
	src: url('../fonts/magra-bold-webfont.woff') format('woff'), url('../fonts/magra-bold-webfont.ttf') format('truetype'), url('../fonts/magra-bold-webfont.svg') format('svg');
}
@font-face {
	font-family: 'lato-regular-webfont';
	src: url('../fonts/lato-regular-webfont.eot');
	src: url('../fonts/lato-regular-webfont.woff') format('woff'), url('../fonts/lato-regular-webfont.ttf') format('truetype'), url('../fonts/lato-regular-webfont.svg') format('svg');
}
@font-face {
	font-family: 'lato-bold-webfont';
	src: url('../fonts/lato-bold-webfont.eot');
	src: url('../fonts/lato-bold-webfont.woff') format('woff'), url('../fonts/lato-bold-webfont.ttf') format('truetype'), url('../fonts/lato-bold-webfont.svg') format('svg');
}
/*----------------------------------------header-styles---------------------------------------*/
#header {
	background-color: #eeebec;
	margin: 0;
	padding: 0;
	position: relative;
	width: 100%;
}
#header div {
	margin: 0 auto;
	max-width: 940px;
	overflow: hidden;
	padding: 41px 10px 27px;
}
#header div a.logo {
	float: left;
	margin: 0 0 0 29px;
	padding: 0;
	width: auto;
}
#header div a.logo img {
	display: block;
	margin: 0;
	padding: 0;
	width: auto;
}
#header div ul {
	display: inline-block;
	list-style: none outside none;
	margin: 0 auto;
	padding: 17px 0 0;
	text-align: center;
	width: 513px;
}
#header div ul li {
	display: inline-block;
	*float: left;
	margin: 0 35px;
	padding: 0;
	position: relative;
	width: auto;
}
#header div ul li a {
	color: #7a6666;
	font-family: lato-regular-webfont;
	font-size: 15px;
	font-weight: normal;
	line-height: 15px;
	margin: 0;
	padding: 0;
	text-align: center;
	text-transform: uppercase;
}
#header div ul li.selected a, #header div ul li.selected a:hover {
	color: #cb3362;
}
#header div ul li a:hover, #header div ul li.menu:hover ul li a {
	color: #c8c10d;
}
#header div ul li ul li a {
	color: #cb3362;
	font-family: lato-regular-webfont;
	font-size: 15px;
	font-weight: normal;
	line-height: 15px;
	margin: 0;
	padding: 0;
	text-align: center;
	text-transform: uppercase;
}
#header div ul li.menu {
	min-height: 35px;
	z-index: 80;
}
#header div ul li.menu ul {
	display: block;
	float: none;
	left: -99999px;
	margin: 0;
	padding: 0;
	position: absolute;
	top: 24px;
	width: 106px;
	z-index: 90;
}
#header div ul li.menu:hover ul.primary, #header div ul li.menu ul#selected.primary {
	left: -30px;
}
#header div ul li.menu:hover ul.secondary, #header div ul li.menu ul#selected.secondary {
	left: -27px;
}
#header div ul li.menu ul li {
	float: none;
	margin: 0;
	padding: 0;
}
/*----------------------------------------body-home-styles---------------------------------------*/
#body.home {
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: relative;
	width: 100%;
}
#body.home div.header {
	background-color: #f8f8f8;
	margin: 0;
	max-width: none;
	overflow: hidden;
	padding: 0;
	width: 100%;
}
#body.home div.header img {
	display: block;
	left: 50%;
	margin: 0 auto 0 -563px;
	padding: 0;
	position: absolute;
	width: 1126px;
}
#body.home div.header div {
	margin: 0 auto;
	max-width: 960px;
	min-height: 660px;
	padding: 0;
	position: relative;
}
#body.home div.header div a {
	background: url(../images/icons.png) no-repeat 0 -128px;
	color: #FFFFFF;
	display: block;
	font-family: quicksand-bold-webfont;
	font-size: 24px;
	font-weight: normal;
	height: 99px;
	line-height: 24px;
	margin: 0;
	padding: 52px 0 0;
	position: absolute;
	right: 130px;
	text-align: center;
	text-transform: uppercase;
	top: 437px;
	width: 156px;
	z-index: 90;
}
#body.home div.body {
	background-color: #eae7e8;
	margin: 0;
	max-width: none;
	padding: 0;
	width: 100%;
}
#body.home div.body div {
	margin: 0 auto;
	max-width: 960px;
	overflow: hidden;
	padding: 0;
}
#body.home div.body div div {
	float: left;
	margin: 0;
	padding: 0 0 0 40px;
	width: 560px;
}
#body.home div.body div img {
	display: block;
	float: right;
	left: 0;
	margin: 0;
	padding: 0;
	position: relative;
	width: auto;
}
#body.home div.body div div h1 {
	color: #7A6666;
	display: block;
	font-family: lato-bold-webfont;
	font-size: 18px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 47px 0 18px;
	text-align: left;
	text-transform: uppercase;
	width: 560px;
}
#body.home div.body div div h2 {
	color: #E32A62;
	display: block;
	font-family: magra-bold-webfont;
	font-size: 30px;
	font-weight: normal;
	line-height: 30px;
	margin: 0;
	padding: 0 0 26px;
	text-align: left;
	text-transform: none;
	width: 560px;
}
#body.home div.body div div p {
	color: #7a6666;
	display: block;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0;
	text-align: left;
	width: 560px;
}
#body.home div.body div div p a {
	color: #7a6666;
	display: block;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0;
	text-decoration: underline;
}
#body.home div.body div div p a:hover {
	color: #c8c10d;
}
#body.home div.footer {
	background-color: #c8c10d;
	margin: 0;
	max-width: none;
	padding: 0;
	width: 100%;
}
#body.home div.footer div {
	margin: 0 auto;
	max-width: 960px;
	padding: 0;
}
#body.home div.footer div ul {
	display: inline-block;
	list-style: none outside none;
	margin: 0;
	padding: 36px 0 32px;
	width: 100%;
}
#body.home div.footer div ul li {
	float: left;
	margin: 0 10px;
	padding: 0;
	width: 220px;
}
#body.home div.footer div ul li a {
	background: url(../images/icons.png) no-repeat;
	display: block;
	height: 44px;
	margin: 0 auto 22px;
	padding: 0;
	width: 80px;
}
#body.home div.footer div ul li a.product {
	background-position: 0 -372px;
}
#body.home div.footer div ul li a.about {
	background-position: 0 -418px;
}
#body.home div.footer div ul li a.flavor {
	background-position: 0 -280px;
}
#body.home div.footer div ul li a.contact {
	float: none;
	background-position: 0 -326px;
}
#body.home div.footer div ul li h1 {
	color: #ffffff;
	font-family: lato-regular-webfont;
	font-size: 20px;
	font-weight: normal;
	line-height: 20px;
	margin: 0;
	padding: 0;
	text-align: center;
	text-transform: uppercase;
}
/*----------------------------------------body-styles---------------------------------------*/
#body {
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: relative;
	width: 100%;
}
#body div.header {
	background-color: #c8c10d;
	margin: 0 auto;
	max-width: none;
	overflow: hidden;
	padding: 0;
}
#body div.header div {
	margin: 0 auto;
	max-width: 960px;
	padding: 0;
}
#body div.header div h1 {
	color: #FFFFFF;
	font-family: lato-regular-webfont;
	font-size: 30px;
	font-weight: normal;
	line-height: 30px;
	margin: 0;
	padding: 28px 0 23px;
	text-align: center;
	text-transform: uppercase;
}
#body div.body {
	background-color: #ebebed;
	margin: 0;
	max-width: none;
	min-height: 249px;
	overflow: hidden;
	padding: 0;
	width: 100%;
}
#body div.body img {
	display: block;
	left: 50%;
	margin: 0 auto 0 -507px;
	padding: 0;
	position: absolute;
	width: 1014px;
}
#body div.footer {
	margin: 0 auto;
	max-width: 960px;
	overflow: hidden;
	padding: 40px 0 110px;
}
#body div.footer div.sidebar {
	background-color: #EFEDEE;
	float: left;
	margin: 0 10px 0 40px;
	padding: 36px 0 34px;
	width: 280px;
}
#body div.footer div.article {
	float: left;
	margin: 0;
	padding: 0 0 0 30px;
	width: 560px;
}
#body div.footer div.sidebar h1 {
	display: block;
	line-height: 48px;
	margin: 0 auto;
	padding: 0 0 50px;
	text-align: center;
	width: 193px;
}
#body div.footer div.sidebar p {
	display: block;
	line-height: 48px;
	margin: 0 auto;
	text-align: center;
	width: 169px;
}
#body div.footer div h1 {
	color: #CB3362;
	font-family: lato-regular-webfont;
	font-size: 24px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0 0 27px;
	text-align: left;
	text-transform: uppercase;
}
#body div.footer div p, #body div.footer div span {
	color: #7A6666;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0 0 24px;
	text-align: left;
}
#body div.footer div span {
	display: block;
	margin: 0;
	padding: 0;
}
#body div.footer div p a {
	color: #7a6666;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0;
	text-decoration: underline;
}
#body div.footer div p a:hover, #body div ul li p a:hover, #body div.blog .featured ul li div p a:hover, #body div.blog .sidebar p a:hover, #body div.blog .featured p a:hover, #body.contact div.body div div p a:hover {
	color: #c8c10d;
}
#body div {
	margin: 0 auto;
	max-width: 960px;
	padding: 7px 0 57px;
}
#body div ul {
	display: inline-block;
	list-style: none outside none;
	margin: 0;
	overflow: hidden;
	padding: 0 0 22px;
	width: 100%;
}
#body div ul li {
	float: left;
	margin: 0 10px;
	padding: 0;
	width: 220px;
}
#body div ul li h1 {
	color: #E32A62;
	font-family: magra-bold-webfont;
	font-size: 28px;
	font-weight: normal;
	line-height: 28px;
	margin: 0;
	padding: 87px 0 27px 30px;
	text-align: left;
	text-transform: capitalize;
}
#body div ul li p {
	color: #7A6666;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0 0 0 30px;
	text-align: left;
	width: 190px;
}
#body div ul li p a {
	color: #7a6666;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0;
	text-decoration: underline;
}
#body div ul li img {
	display: block;
	margin: 0 auto 15px;
	padding: 0;
	width: auto;
}
#body div ul li h2 {
	color: #e32a62;
	font-family: lato-regular-webfont;
	font-size: 20px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0;
	text-align: center;
	text-transform: uppercase;
}
#body div.blog {
	margin: 0 auto;
	max-width: 960px;
	overflow: hidden;
	padding: 98px 0 146px;
}
#body div.blog .featured {
	float: left;
	margin: 0 10px;
	padding: 0;
	width: 620px;
}
#body div.singlepost .featured {
	float: left;
	margin: 0 10px;
	padding: 0;
	width: 620px;
}
#body div.blog .featured ul {
	display: inline-block;
	list-style: none;
	margin: 0;
	overflow: hidden;
	padding: 0;
	width: 100%;
}
#body div.blog .featured ul li:first-child {
	margin: 0 0 50px 0;
}
#body div.blog .featured ul li {
	background: url(../images/bg-border.gif) no-repeat bottom center;
	float: none;
	margin: 0 0 39px;
	overflow: hidden;
	padding: 0;
	width: auto;
}
#body div.blog .featured ul li img {
	float: left;
	margin: 2px 0 0;
	padding: 0 30px;
	width: auto;
}
#body div.blog .featured ul li div {
	float: left;
	margin: 0;
	padding: 0 0 36px 10px;
	width: 370px;
}
#body div.blog .featured ul li div h1 {
	color: #CB3362;
	font-family: lato-regular-webfont;
	font-size: 24px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0 0 3px;
	text-align: left;
	text-transform: uppercase;
}
#body div.blog .featured ul li div span {
	color: #7A6666;
	display: block;
	font-family: roboto-regular-webfont;
	font-size: 12px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0 0 24px;
	text-align: left;
	text-transform: none;
}
#body div.blog .featured ul li div p {
	color: #7a6666;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0 0 39px 0;
	text-align: left;
	width: 100%;
}
#body div.blog .featured ul li div p a {
	color: #7a6666;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0;
	text-decoration: underline;
}
#body div.blog .featured ul li div a.more {
	border: 2px solid #cbb5bc;
	color: #a5838e;
	display: block;
	font-family: lato-bold-webfont;
	font-size: 16px;
	font-weight: normal;
	height: 36px;
	line-height: 36px;
	margin: 0;
	padding: 0;
	text-align: center;
	text-transform: uppercase;
	width: 156px;
}
#body div.blog .featured ul li div a.more:hover {
	background-color: #c8c10d;
	border: none;
	color: #ffffff;
	height: 40px;
	line-height: 40px;
	width: 160px;
}
#body div.blog .featured a.load {
	border: 2px solid #cbb5bc;
	color: #a5838e;
	display: block;
	font-family: lato-bold-webfont;
	font-size: 16px;
	font-weight: normal;
	height: 36px;
	line-height: 36px;
	margin: 0 auto;
	padding: 0;
	text-align: center;
	text-transform: uppercase;
	width: 156px;
}
#body div.blog .featured a.load:hover {
	background-color: #cb3362;
	border: none;
	color: #ffffff;
	height: 40px;
	line-height: 40px;
	width: 160px;
}
#body div.blog .sidebar {
	background-color: #EFEDEE;
	float: left;
	margin: 0;
	padding: 0 0 71px;
	width: 280px;
}
#body div.blog .sidebar h1 {
	color: #CB3362;
	font-family: magra-bold-webfont;
	font-size: 30px;
	font-weight: normal;
	line-height: 30px;
	margin: 0;
	padding: 42px 0 29px;
	text-align: center;
	text-transform: capitalize;
}
#body div.blog .sidebar img {
	display: block;
	margin: 0 auto;
	padding: 0;
	width: auto;
}
#body div.blog .sidebar h2 {
	color: #CB3362;
	font-family: lato-regular-webfont;
	font-size: 24px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 34px 0 3px;
	text-align: center;
	text-transform: uppercase;
}
#body div.blog .sidebar span {
	color: #7A6666;
	display: block;
	font-family: roboto-regular-webfont;
	font-size: 12px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0 0 24px;
	text-align: center;
	text-transform: none;
}
#body div.blog .sidebar p {
	color: #7A6666;
	display: block;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0 auto;
	padding: 0 0 64px;
	text-align: center;
	text-transform: none;
	width: 200px;
}
#body div.blog .sidebar p a {
	color: #7a6666;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0;
	padding: 0;
	text-decoration: underline;
}
#body div.blog .sidebar a.more {
	border: 2px solid #d3c2c7;
	color: #a5838e;
	display: block;
	font-family: lato-bold-webfont;
	font-size: 16px;
	font-weight: normal;
	height: 36px;
	line-height: 36px;
	margin: 0 auto;
	padding: 0;
	text-align: center;
	text-transform: uppercase;
	width: 156px;
}
#body div.blog .sidebar a.more:hover {
	background-color: #c8c10d;
	border: none;
	color: #ffffff;
	height: 40px;
	line-height: 40px;
	width: 160px;
}
#body div.footer .section {
	background-color: #EFEDEE;
	float: left;
	margin: 0;
	max-width: none;
	padding: 0 0 35px;
	width: 280px;
}
#body div.footer .section h1 {
	color: #CB3362;
	display: block;
	font-family: lato-regular-webfont;
	font-size: 24px;
	font-weight: normal;
	line-height: 24px;
	margin: 0 auto;
	padding: 24px 0 27px;
	text-align: center;
	text-transform: uppercase;
	width: 202px;
}
#body div.footer .section p {
	color: #7A6666;
	display: block;
	font-family: roboto-regular-webfont;
	font-size: 14px;
	font-weight: normal;
	line-height: 24px;
	margin: 0 auto;
	padding: 0;
	text-align: center;
	width: 202px;
}
/*----------------------------------------footer-styles---------------------------------------*/
#footer {
	background-color: #cb3362;
	margin: 0;
	padding: 0;
	width: 100%;
}
#footer div {
	margin: 0 auto;
	max-width: 960px;
	overflow: hidden;
	padding: 59px 0 13px;
}
#footer div p {
	color: #FFFFFF;
	display: block;
	font-family: roboto-regular-webfont;
	font-size: 12px;
	font-weight: normal;
	line-height: 15px;
	margin: 0;
	padding: 33px 0 50px;
	text-align: center;
	text-transform: none;
}
#footer div .connect {
	display: block;
	height: 30px;
	margin: 0 auto;
	max-width: none;
	overflow: hidden;
	padding: 0;
	width: 240px;
}
#footer div .connect a {
	background: url(../images/icons.png) no-repeat;
	display: block;
	float: left;
	height: 30px;
	margin: 0 15px;
	padding: 0;
	text-indent: -999999px;
	width: 30px;
}
#footer div .connect a.facebook {
	background-position: 0 0px;
}
#footer div .connect a.twitter {
	background-position: 0 -96px;
}
#footer div .connect a.googleplus {
	background-position: 0 -32px;
}
</style>

</html>

    `);
})

server.listen(3001);
console.log(`Server running at 3001`);