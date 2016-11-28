var sendMachine = (function(){
	var textarea = 'livereplymessage',
		submitButton = 'livereplysubmit';
	function interval(){
		//randomize();
		//console.log(num);
		var num = Math.ceil(Math.random()* 12),
			TimeInterval = num * 300;
		switch(num){
			case 1:
				setTimeout(function(){
					document.getElementById(textarea).value='赵客缦胡缨，吴钩霜雪明。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 2:
				setTimeout(function(){
					document.getElementById(textarea).value='银鞍照白马，飒沓如流星。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 3:
				setTimeout(function(){
					document.getElementById(textarea).value='十步杀一人，千里不留行。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 4:
				setTimeout(function(){
					document.getElementById(textarea).value='事了拂衣去，深藏身与名。 ';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 5:
				setTimeout(function(){
					document.getElementById(textarea).value='闲过信陵饮，脱剑膝前横。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 6:
				setTimeout(function(){
					document.getElementById(textarea).value='将炙啖朱亥，持觞劝侯嬴。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 7:
				setTimeout(function(){
					document.getElementById(textarea).value='三杯吐然诺，五岳倒为轻。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 8:
				setTimeout(function(){
					document.getElementById(textarea).value='眼花耳热后，意气素霓生。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 9:
				setTimeout(function(){
					document.getElementById(textarea).value='救赵挥金槌，邯郸先震惊。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 10:
				setTimeout(function(){
					document.getElementById(textarea).value='千秋二壮士，烜赫大梁城。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 11:
				setTimeout(function(){
					document.getElementById(textarea).value='纵死侠骨香，不惭世上英。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
			case 12:
				setTimeout(function(){
					document.getElementById(textarea).value='谁能书阁下，白首太玄经。';
					document.getElementById(submitButton).click();
				}, TimeInterval);
				break;
		}
	}

	return {
		init: function(){
			setInterval(function(){
				document.getElementById(textarea).style.color='black';
				interval();
			}, 4800);
		}
	}
})();

sendMachine.init();
