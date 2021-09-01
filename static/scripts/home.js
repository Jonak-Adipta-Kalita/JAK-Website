const stringsArray = [
	"I'm a Coder",
	"I'm a Student",
	"I'm an Assamese",
	"I'm a Designer",
	"I'm a Gamer",
	"I'm a Sushi Lover",
];

window.onload = () => {
    let typed = new Typed("#typed", {
        strings: stringsArray,
        backSpeed: 30,
        smartBackspace: true,
        backDelay: 1500,
        startDelay: 1000,
        typeSpeed: 25,
        loop: true,
    });
};
