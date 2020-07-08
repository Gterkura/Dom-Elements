let textBox;
let button;
let images = [];


function setup() {
    noCanvas();
    for (i = 0; i < 15; i++) {
        let paragraph = createP('');
        let a = createA('#', 'MYSITE');
        a.mousePressed(addImage);
        a.parent(paragraph);
    }
    button = createButton('clearImages')
    button.mousePressed(removeImages);
    textBox = createInput('Your name');
}

function removeImages() {

    for (i = 0; i < images.length; i++) {
        images[i].remove();
    }
    images = [];
}

function addImage() {

    img = createImg('ceo.jpg');
    images.push(img);
    img.size(100, 100);
    pa = this.parent();
    img.parent(pa)

}