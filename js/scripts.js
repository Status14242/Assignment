
var station = $("#Station-button");
var volume = $("#Volume-button");
var volume2 = $("#Volume-button2");
var power = $("#on-an-off");
var dial = $("#dial");
var dialPosition = 0; // Initial dial position
var clickCount = 0; // Click counter
var maxVolume = 1; // Maximum volume level
var minVolume = 0; // Minimum volume level
var volumeIncrease = 0.1; // Change this value to control the volume change step;


// Array of audio elements
var audioElements = [
    new Audio("music/whitenoise.mp3"),
    new Audio("music/afro/hibiscus-bloom-mood-tropical-upbeat-112909.mp3"),
    new Audio("music/christmas/carol-of-the-bells-xmas-background-hip-hop-music-for-video-60-second-178242.mp3"),
    new Audio("music/classical rock/snatch-166884.mp3"),
    new Audio("music/disco/retro-disco-old-school-117950.mp3"),
    new Audio("music/Drill/into-the-night-20928.mp3"),
    new Audio("music/Edm/the-late-night-clubbing-21760.mp3"),
    new Audio("music/hip hop/tupac-lives-71.mp3"),
    new Audio("music/jazz/french-jazz-music-142911.mp3"),
    new Audio("music/lofi/once-in-paris-168895.mp3"),
    new Audio("music/pop/upbeat-summer-pop-113447.mp3"),
    new Audio("music/relaxing/relaxing-music-vol1-124477.mp3"),
    new Audio("music/world/energetic-music-dance-background-hip-hop-latin-reggaeton-150280.mp3"),
    new Audio("music/whitenoise.mp3"),
];


// Start all audio elements
for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].volume = maxVolume; // Start at 100% volume
    audioElements[i].loop = true; // Loop audio
}

// Unmute and play the first audio element (dial's starting point)
audioElements[0].volume = 1;
audioElements[0].play();

var firstClick = true;

station.on("click", function () {
    if (firstClick) {
        for (var i = 0; i < audioElements.length; i++) {
            audioElements[i].play(); // Start playing
        }
        firstClick = false;
    }
    // Mute all audio elements
    for (var i = 0; i < audioElements.length; i++) {
        audioElements[i].volume = 0;
    }
    // Unmute the current audio element
    audioElements[clickCount].volume = 1;
    // Calculate dial position based on click count
    dialPosition = clickCount * 91.8;
    dial.css('transform', "translateX(" + dialPosition + 'px)'); // Apply dial movement
    clickCount++; // Increase click counter
    if (clickCount >= 14) {
        clickCount = 0; // Reset click counter
        dialPosition = 0; // Reset dial position
        // Mute all audio elements
        for (var i = 0; i < audioElements.length; i++) {
            audioElements[i].volume = 0;
        }
        // Unmute the first audio element
        audioElements[0].volume = 1;
    }
});

var power = $("#on-an-off");
var isSoundOn = true; // Variable to track whether the sound is on or off

power.on("click", function () {
    power.toggleClass("down"); // Add or remove the 'down' class
    isSoundOn = !isSoundOn; // Toggle the sound state
    // Mute or unmute all audio elements
    for (var i = 0; i < audioElements.length; i++) {
        audioElements[i].muted = !isSoundOn;
    }
});






/*backup code*/
// var station = $("#Station-button");
// var volume = $("#Volume-button");
// var volume2 = $("#Volume-button2");
// var power = $("#on-an-off");
// var dial = $("#dial");
// var dialPosition = 0; // Initial dial position
// var clickCount = 0; // Click counter


// // Array of audio elements
// var audioElements = [
//     new Audio("music/whitenoise.mp3"),
//     new Audio("music/afro/hibiscus-bloom-mood-tropical-upbeat-112909.mp3", "music/afro/midnite-mas-production-music-moody-afrobeat-21286.mp3"),
//     new Audio("music/christmas/carol-of-the-bells-xmas-background-hip-hop-music-for-video-60-second-178242.mp3"),
//     new Audio("music/classical rock/snatch-166884.mp3"),
//     new Audio("music/disco/retro-disco-old-school-117950.mp3"),
//     new Audio("music/Drill/into-the-night-20928.mp3"),
//     new Audio("music/Edm/dont-stop-me-abstract-future-bass-162753.mp3", "music/Edm/the-late-night-clubbing-21760.mp3"),
//     new Audio("music/hip hop/tupac-lives-71.mp3"),
//     new Audio("music/jazz/a-walk-in-paris-126173.mp3", "music/jazz/big-band-tv-show-logo-164230.mp3", "music/jazz/french-jazz-music-142911.mp3"),
//     new Audio("music/lofi/chill-lo-fi-hip-hop-8308.mp3", "music/lofi/futuristic-beat-146661.mp3", "music/lofi/once-in-paris-168895.mp3"),
//     new Audio("music/pop/upbeat-summer-pop-113447.mp3", "music/pop/whistle-vibes-172471.mp3"),
//     new Audio("music/relaxing/relaxing-music-vol1-124477.mp3"),
//     new Audio("music/world/energetic-music-dance-background-hip-hop-latin-reggaeton-150280.mp3", "music/world/latin-fun-dance-music-mexican-background-hip-hop-larga-noche-140546.mp3"),
//     new Audio("music/tv-white-noise-152056.mp3"),
//     new Audio("music/whitenoise.mp3"),
// ];

// var maxVolume = 1; // Maximum volume level
// var minVolume = 0; // Minimum volume level
// var volumeIncrease = 0.1; // Change this value to control the volume change step


// volume.on("click", function() {
//     console.log("clicked");
//     // Increase the volume of all audio elements
//     for (var i = 0; i < audioElements.length; i++) {
//         if (audioElements[i].volume <= maxVolume - volumeIncrease) {
//             audioElements[i].volume += volumeIncrease;
//         }
//     }
// });

// volume2.on("click", function() {
//     // Decrease the volume of all audio elements
//     for (var i = 0; i < audioElements.length; i++) {
//         if (audioElements[i].volume >= minVolume + volumeIncrease) {
//             audioElements[i].volume -= volumeIncrease;
//         }
//     }
// });

// // Start all audio elements
// for (var i = 0; i < audioElements.length; i++) {
//     audioElements[i].volume = maxVolume; // Start at 100% volume
//     audioElements[i].loop = true; // Loop audio
// }

// // Unmute and play the first audio element (dial's starting point)
// audioElements[0].volume = 1;
// audioElements[0].play();

// var firstClick = true;

// station.on("click", function () {
//     if (firstClick) {
//         for (var i = 0; i < audioElements.length; i++) {
//             audioElements[i].play(); // Start playing
//         }
//         firstClick = false;
//     }
//     // Mute all audio elements
//     for (var i = 0; i < audioElements.length; i++) {
//         audioElements[i].volume = 0;
//     }
//     // Unmute the current audio element
//     audioElements[clickCount].volume = 1;
//     // Calculate dial position based on click count
//     dialPosition = clickCount * 91.8;
//     dial.css('transform', "translateX(" + dialPosition + 'px)'); // Apply dial movement
//     clickCount++; // Increase click counter
//     if (clickCount >= 14) {
//         clickCount = 0; // Reset click counter
//         dialPosition = 0; // Reset dial position
//         // Mute all audio elements
//         for (var i = 0; i < audioElements.length; i++) {
//             audioElements[i].volume = 0;
//         }
//         // Unmute the first audio element
//         audioElements[0].volume = 1;
//     }
// });

// var power = $("#on-an-off");
// var isSoundOn = true; // Variable to track whether the sound is on or off

// power.on("click", function () {
//     power.toggleClass("down"); // Add or remove the 'down' class
//     isSoundOn = !isSoundOn; // Toggle the sound state
//     // Mute or unmute all audio elements
//     for (var i = 0; i < audioElements.length; i++) {
//         audioElements[i].muted = !isSoundOn;
//     }
// });