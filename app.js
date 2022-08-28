const btn = document.querySelector(".nav-btn");
const link = document.querySelector(".link");

let flag = false;

btn.addEventListener("click", function () {
	flag = !flag;
	if (flag) {
		link.classList.add("active-link");
	} else {
		link.classList.remove("active-link");
	}
});

// var element = document.getElementById("element");
// element.classList.add("class-1");
// element.classList.add("class-2", "class-3");
// element.classList.remove("class-3");
