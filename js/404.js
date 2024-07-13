
for (let i = 1; i <= 2; i++) { 
    for (let j = 1; j <= 10; j++) { 
        const node = document.createElement("img");
        node["src"] = 'images/404/beef/' + j + '.jpg';
        document.getElementById("beef").appendChild(node);
    }
}

for (let i = 1; i <= 2; i++) { 
    for (let j = 10; j > 0; j--) { 
        const node = document.createElement("img");
        node["src"] = 'images/404/chicken/' + j + '.jpg';
        document.getElementById("chicken").appendChild(node);
    }
}


// var mySequence = [
// 	{ e: $('.slide').eq(0), p: { opacity: [0, 1] }, o: { esding: "easeInCubic", duration: 5000 } },
// 	{ e: $('.slide').eq(1), p: { opacity: [1, 0] }, o: { easing: "easeInOutCubic", delay: 2000, duration: 2000, sequenceQueue: false } },
// 	{ e: $('.slide').eq(1), p: { opacity: [0, 1] }, o: { esding: "easeInCubic", delay: 2500, duration: 5000, sequenceQueue: false } },
// 	{ e: $('.slide').eq(2), p: { opacity: [1, 0] }, o: { easing: "easeInOutCubic", delay: 3000, duration: 2000, sequenceQueue: false } },
// 	{ e: $('.slide').eq(2), p: { opacity: [0, 1] }, o: { esding: "easeInCubic", delay: 3500, duration: 6000, sequenceQueue: false } },
// 	{ e: $('.slide').eq(3), p: { opacity: [1, 0] }, o: { easing: "easeInOutCubic", delay: 4000, duration: 2000, sequenceQueue: false } }
// ];

// $.Velocity.RunSequence(mySequence);

// $(".end-credits")
// 	.velocity({ translateY: "-100%" }, { duration: 50000, easing: "linear", display: "none" });