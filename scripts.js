let data0 = {
    photo: `images/acropolis-g860b9b0d8_1920.jpg`,
    title: `Akropolis`,
    description:`Az ókorból származó épületegyüttes az európai civilizáció és demokrácia jelképe, az emberi alkotógéniusz egyik legnagyobb alkotása.`   
};

let data1 = {
    photo: `images/greece-gc847cc21c_1920.jpg`,
    title: `Navagio-öböl, Zakynthos`,
    description:`Görögország egyik legszebb strandja a Zakynthoson található Navagio-öböl, amit egy partra sodródott hajóroncs tesz vadregényessé.`   
}

let data2 = {
    photo: `images/olive-tree-gf8c0e265e_1920.jpg`,
    title: `Olivafa`,
    description:`Az olívaolaj őshazája Görögország, ahogy Homérosz is megírta, ahol bőséges a napsütés, enyhe az időjárás és kitűnő a táptalaj olíva termesztésre.`   
}

let data3 = {
    photo: `images/santorini-ge22bc2626_1920.jpg`,
    title: `Santorini`,
    description:`A sziget vulkanikus robbanás maradványa.Látványos szépsége és élénk éjszakai élete a szigeteket Európa egyik vonzó turisztikai célponttá tették. `
}  


let currentPhoto = [data0, data1, data2, data3,];

/* jobba-balra nyilakkal való navigálás*/

let i = 0 /* current photo index */
let j = 4/*a thumbnailek száma*/

$(`#right`).click(() =>{
    i++;
    i = i % j;

    console.log(i)

    console.log(currentPhoto[i].photo)

    $('#photo').attr('src',currentPhoto[i].photo);
    $('#photoTitle').text(currentPhoto[i].title);
    $('#photoDescription').text(currentPhoto[i].description);
})

$(`#left`).click(() =>{
    i--;
    i = i % j;
    if (i < 0){
        i = i + j
    }
    console.log(i)

    console.log(currentPhoto[i].photo)

    $('#photo').attr('src',currentPhoto[i].photo);
    $('#photoTitle').text(currentPhoto[i].title);
    $('#photoDescription').text(currentPhoto[i].description);
})







/*thumbnailre való kattintástól fotóváltás */
$(".thumbnail").click(() => {
       /*console.log(event.target.id);*/
       i = event.target.id;
    
       $('#photo').attr('src',currentPhoto[i].photo);
       $('#photoTitle').text(currentPhoto[i].title);
       $('#photoDescription').text(currentPhoto[i].description);
})

