function clearMe() {
    magFac.graphs = [];
    phaseAng.graphs = [];
}

function runPage2() {
    background(255);
    image(bg, 0, 0);

    stroke(0);
    fill(0);

    textSize(32);
    text('ROTATING UNBALANCE', 255, 50);

    textSize(12);
    text('wn = ' + spring1.wn, 310, 520);
    text('η = ' + (_w.inp / spring1.wn), 310, 535);
    text('z = ' + z.inp, 310, 550);

    magFac.draw();
    phaseAng.draw();

    button3.draw()

    k.draw();
    m.draw();
    z.draw();
    _w.draw();
    y.draw();

    clear.mousePressed(clearMe)
}
