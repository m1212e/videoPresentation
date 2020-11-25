import videos from './slides/*.mp4';
import images from './slides/*.jpg';


const container = document.getElementById('container');

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
        container.innerHTML = composeHTMLTags(content[++contentIndex]);
    }
}

function previousSlide() {
    if (contentIndex - 1 > -1) {
        container.innerHTML = composeHTMLTags(content[--contentIndex]);
    }
}

function composeHTMLTags(path: string) {
    let ret = 'invalid';
    if (path.match('.mp4')) {
        ret = '<video autoplay> <source src="' + path + '" type="video/mp4"></video>'
    } else if (path.match('jpg')) {
        ret = '<img src="' + path + '">'
    }
    return ret;
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

nextSlide();