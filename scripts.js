
// options Animation

	


toDo.addEventListener('click', function(e){
	let target = e.target;


	while(target != this){
		if(target.className == 'button'){
			let options = target.parentNode,
					// arrow = options.getElementsByClassName('arrow')[0],
					arrow = options.getElementsByTagName('img')[0];
			console.log(arrow);

			arrow.classList.remove('rotateY');
			arrow.classList.add('rotate_Y');

			if(options.classList.contains('closed')){
				options.classList.remove('close');
				options.classList.remove('closed');
				options.classList.add('open');
				options.classList.add('opened');

				arrow.classList.remove('rotate_Y');
				arrow.classList.add('rotateY');
			}else if(options.classList.contains('opened')){
				options.classList.remove('open');
				options.classList.remove('opened');
				options.classList.add('close');
				options.classList.add('closed');

				arrow.classList.remove('rotateY');
				arrow.classList.add('rotate_Y');
			};
		};

		target = target.parentNode
	}

}, false)

done.addEventListener('click', function(e){
	let target = e.target;

	while(target != this){
		if(target.className == 'button'){
			let options = target.parentNode,
					// arrow = options.getElementsByClassName('arrow')[0],
					arrow = options.getElementsByTagName('img')[0];
			console.log(arrow);

			arrow.classList.remove('rotateY');
			arrow.classList.add('rotate_Y');

			if(options.classList.contains('closed')){
				options.classList.remove('close');
				options.classList.remove('closed');
				options.classList.add('open');
				options.classList.add('opened');

				arrow.classList.remove('rotate_Y');
				arrow.classList.add('rotateY');
			}else if(options.classList.contains('opened')){
				options.classList.remove('open');
				options.classList.remove('opened');
				options.classList.add('close');
				options.classList.add('closed');

				arrow.classList.remove('rotateY');
				arrow.classList.add('rotate_Y');
			};
		};

		target = target.parentNode
	}

}, false)


// add button


class ToDoList {
	constructor(value){
		this.value = value;
	}

};

addBtn.addEventListener('click', function(e){
	let value = addInput.value;

	let li = new ToDoList(value);

}, false)



