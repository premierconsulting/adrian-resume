import '../css/work.scss';

const samples = [
    {
        "title": "ByteBros",
        "body": "ByteBros is a online learning place for web development, electronics, audio engineering, and more."
    },
    {
        "title": "Music Book",
        "body": "MusicBook allows you to discover new classical music, as well as keep track of your all time listening history. You can also use it to find upcoming concerts near you."
    },
    {
        "title": "LabDaw",
        "body": "LabDaw is a collaborative online Digital Audio Workstation. Create beats with anyone around the world. Share your sound library with friends."
    },
    {
        "title": "Memvoir",
        "body": "Memvoir is a application that allows to you keep track of locations you've been, and the memories you made there."
    },
    {
        "title": "Onyx",
        "body": "Onyx is a online directory of black-owned businesses, allowing users to find businesses nearby they can support."
    },
    {
        "title": "Frenchie's",
        "body": "Frenchie’s is a French bulldog breeder site. It showcases available puppies, parents of future breeds, and information about raising bulldogs. This site is built using a Vue static site generator, Gridsome, and is powered by a Strapi CMS. This allows the breeder cheap costs, but the ability to update breeds without the need for development."
    },
]

const prevButton = document.querySelector('.buttons > a:first-child');
const nextButton = document.querySelector('.buttons > a:nth-child(2)');
const body = document.querySelector('.sample-body');

let position = 0;
let info = false;

function updateSample() {
    position;
    if (0 > position || position >= samples.length) {
        position = 0;
    }
    const currentSample = samples[position];
    const header = document.querySelector('.sample-header');
    let newBody = '';
    if (info) {
        newBody = `<p>${currentSample.body}</p>`;
    } else {
        newBody = `<p>${currentSample.title}</p>`;
    }

    header.innerHTML = `<h2>${currentSample.title}</h2>`;
    body.innerHTML = newBody;
    
    if (position == 0) {
        prevButton.style.visibility = 'hidden';
        nextButton.style.visibility = 'visible';
    } else if (position == samples.length - 1) {
        prevButton.style.visibility = 'visible';
        nextButton.style.visibility = 'hidden';
    } else {
        prevButton.style.visibility = 'visible';
        nextButton.style.visibility = 'visible';
    }
}

body.onclick = function(e) {
 info = !info;
 updateSample(position);
}

prevButton.onclick = function(e) {
    position -= 1;
    updateSample(position);
}
nextButton.onclick = function(e) {
    position += 1;
    updateSample(position);
}

updateSample(position);

console.log('hello world');