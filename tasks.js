//15 минут
function cityString(arr) {
	return arr.join(",") + ".";
}

//5 минут
function roundNumber(num) {
	return Math.round(num/5)*5;
}

//2.5 часа
function checkEnd(int) {
	
	let arr = String(int).split('').map((item) => {
		return parseInt(item);
	});

	let endElem = arr[arr.length - 1];
	let penulElem = arr[arr.length - 2];

	if (endElem >= 2 && endElem <= 4 && penulElem !== 1) {
		console.log(`${int} компьютера`);
	}

	if (endElem === 1 && penulElem !== 1) {
		console.log(`${int} компьютер`);
	}

	if ((endElem >= 5 && endElem <= 9) || (endElem === 0) || (penulElem === 1 && endElem === 1)
		|| (endElem >= 2 && endElem <= 4 && penulElem === 1)) {
		console.log(`${int} компьютеров`);
	}

}	

//15-20 минут
function checkNumber(num) {

	if (num === 1 || num === 2) {
		return true;
	}

	for (let i = 2; i < num; i++) {

		if (num % i === 0) {

			return false;
		} 
	}

	return true;
				
}

//2.5 часа
function sameNumber(arr1,arr2) {

	let arr3 = [], arr4 = [], arr5 = [];
	for (let i = 0; i < arr1.length-1; i++) {
		
		for (let j = i + 1; j < arr1.length; j++) {
			if (arr1[i] === arr1[j]) {
				if (arr3.every((item) => item!==arr1[i])) {
					
				arr3.push(arr1[i]);
				}
				
			}
		}
	}
	for (let i = 0; i < arr2.length-1; i++) {
		
		for (let j = i + 1; j < arr2.length; j++) {
			if (arr2[i] === arr2[j]) {
				if (arr4.every((item) => item!==arr2[i])) {
					
				    arr4.push(arr2[i]);
				}
				
			}
		}
	}
	arr3.forEach((item1,idx1,arr1) => {
		arr4.forEach((item2,idx2,arr2) => {
			if(item1 === item2) {
				if (arr5.every((item) => item!==item1)) {
					
				    arr5.push(item1);
				}    
			}
		});
	});
	
	let arr = arr5.sort();
	return arr;
}
