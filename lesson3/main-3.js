///- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

    for (let i = 0; i < 1; i++) {
        document.write(
            '<div>Lorem ipsum dolor sit amet.</div>',
            '<div>Lorem ipsum dolor sit amet.</div>',
            '<div>Lorem ipsum dolor sit amet.</div>',
            '<div>Lorem ipsum dolor sit amet.</div>',
            '<div>Lorem ipsum dolor sit amet.</div>',
            '<div>Lorem ipsum dolor sit amet.</div>',
            '<div>Lorem ipsum dolor sit amet.</div>',
            '<div>Lorem ipsum dolor sit amet.</div>',
            '<div>Lorem ipsum dolor sit amet.</div>',
            '<div>Lorem ipsum dolor sit amet.</div>'
        )

    }

///- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

    for (let i = 1; i < 10; i++) {
        document.write(
            `<div>Lorem ipsum dolor sit amet. + ${i++} </div>`,
            `<div>Lorem ipsum dolor sit amet. + ${i++} </div>`,
            `<div>Lorem ipsum dolor sit amet. + ${i++} </div>`,
            `<div>Lorem ipsum dolor sit amet. + ${i++} </div>`,
            `<div>Lorem ipsum dolor sit amet. + ${i++} </div>`,
            `<div>Lorem ipsum dolor sit amet. + ${i++} </div>`,
            `<div>Lorem ipsum dolor sit amet. + ${i++} </div>`,
            `<div>Lorem ipsum dolor sit amet. + ${i++} </div>`,
            `<div>Lorem ipsum dolor sit amet. + ${i++} </div>`,
            `<div>Lorem ipsum dolor sit amet. + ${i++} </div>`,
        )
    }

///- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
    let i = 0;
    while (i < 10){
        document.write(
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
            '<h1>JavaScript</h1>',
        )
    }




