// JavaScript Document
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var speed = 1;

// Jump sound
var jumpSound = new Audio("jump.wav");

function jump() {
	if (character.classList == "animate") { return; }

	// Play sound
	jumpSound.currentTime = 0;
	jumpSound.play();

	character.classList.add("animate");

	setTimeout(function () {
		character.classList.remove("animate");
	}, 300);
}

var checkDead = setInterval(function () {

	let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

	// Collision
	if (blockLeft < 20 && blockLeft > -20 && characterTop > 130) {
		block.style.animation = "none";
		alert("Game Over. Score: " + Math.floor(counter / 100));

		counter = 0;
		speed = 1;

		block.style.animation = "block 1s infinite linear";
	}

	else {
		counter++;

		// Increase speed every 500 points
		if (counter % 500 == 0) {
			speed += 0.1;

			let newSpeed = 1 / speed;
			block.style.animation = "none";
			block.offsetHeight;
			block.style.animation = "block " + newSpeed + "s infinite linear";
		}

		document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
	}

}, 10);