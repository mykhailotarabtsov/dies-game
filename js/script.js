(function () {
	document.getElementById('submit1').onclick = function () {
		var diesVal = Math.floor((Math.random() * 6) + 1);
		document.getElementById('dies').textContent = diesVal;
		console.log(diesVal);

		if(diesVal === 1) {
			document.getElementById('one_way').style.display = 'flex';
		} else{ 
			document.getElementById('one_way').style.display = 'none';
		}
		if(diesVal === 2) {
			document.getElementById('two_way').style.display = 'flex';
		} else{ 
			document.getElementById('two_way').style.display = 'none';
		}
		if(diesVal === 3) {
			document.getElementById('tree_way').style.display = 'flex';
		} else{ 
			document.getElementById('tree_way').style.display = 'none';
		}
		if(diesVal === 4) {
			document.getElementById('four_way').style.display = 'flex';
		} else{ 
			document.getElementById('four_way').style.display = 'none';
		}
		if(diesVal === 5) {
			document.getElementById('five_way').style.display = 'flex';
		} else{ 
			document.getElementById('five_way').style.display = 'none';
		}
		if(diesVal === 6) {
			document.getElementById('six_way').style.display = 'flex';
		} else{ 
			document.getElementById('six_way').style.display = 'none';
		}

		// diesVal === 1 ? document.getElementById('one_way').style.display = 'block' : document.getElementById('one_way').style.display = 'none';
		// diesVal === 2 ? document.getElementById('two_way').style.display = 'block' : document.getElementById('two_way').style.display = 'none';
		// diesVal === 3 ? document.getElementById('tree_way').style.display = 'block' : document.getElementById('tree_way').style.display = 'none';
		// diesVal === 4 ? document.getElementById('four_way').style.display = 'block' : document.getElementById('four_way').style.display = 'none';
		// diesVal === 5 ? document.getElementById('five_way').style.display = 'block' : document.getElementById('five_way').style.display = 'none';
		// diesVal === 6 ? document.getElementById('six_way').style.display = 'block' : document.getElementById('six_way').style.display = 'none';
	};
})();
