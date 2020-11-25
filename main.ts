import videos from './slides/*.mp4';
import images from './slides/*.jpg';


const container = document.getElementById('container');
const video = document.getElementById('vid') as HTMLVideoElement;
const src = document.getElementById('src');
const img = document.getElementById('img');

const content = convertImports(videos).concat(convertImports(images))
    //untersuche nummer
    .map((path: string) => {
        let index = -1;
        //existieren . im pfad?
        if ((path.match(/[.]/g) || []).length > 0) {
            //setze den index auf die nummer im pfad
            index = +(path.split('.')[0].replace(/[^0-9]/g, ''));
        }
        return {index, path}
    })
    //sortiere nach indizes
    .sort((a, b) => a.index - b.index)
    //verwerfe indizes  
    .map(o => o.path);
//content enthält jetzt die pfade zu den dateien in sortierter reihenfolge

let contentIndex = -1;



function nextSlide() {
    if (contentIndex + 1 < content.length) {
        updateElement(content[++contentIndex]);
    }
}

function previousSlide() {
    if (contentIndex - 1 > -1) {
        updateElement(content[--contentIndex]);
    }
}

function updateElement(path: string) {
    if (path.match('.mp4')) {
        img.hidden = true;
        video.hidden = false;
        src.setAttribute('src', path);
        video.load();
        video.play();
    } else if (path.match('jpg')) {
        img.hidden = false;
        video.hidden = true;
        img.setAttribute('src', path);
    }
}

function convertImports(imp: any) {
    return Object.keys(imp)
        .map(o => imp[o])
        //verwerfe dateien die keine nummer im namen haben
        .filter(str => str.length > 0);
}

document.getElementById('body').onclick = (event) => {
    event.preventDefault();
    nextSlide();
}

document.getElementById('body').oncontextmenu = (event) => {
    event.preventDefault();
    previousSlide();
}


// const request = new XMLHttpRequest();
// request.onload = function() {
//     myVid.src = URL.createObjectURL(r.response);
//     myVid.play();
// };
// if (myVid.canPlayType('video/mp4;codecs="avc1.42E01E, mp4a.40.2"')) {
//     r.open("GET", "slide.mp4");
// }
// else {
//     r.open("GET", "slide.webm");
// }

// r.responseType = "blob";
// r.send();

nextSlide();