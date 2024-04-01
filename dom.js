//let button = document.querySelector('#button');
//console.log(button);

//339
//let elem1 = document.querySelector('#elem1');
//console.log(elem1);
//let elem2 = document.querySelector('#elem2');
//console.log(elem2);
//let elem3 = document.querySelector('#elem3');
//console.log(elem3);

//340
//let elem = document.querySelector('#parent input');
//console.log(elem);
//let block = document.querySelector('.block p');
//console.log(block); // здесь будет первый 

//341
//let button1 = document.querySelector('#button1');
//let button2 = document.querySelector('#button2');
//let button3 = document.querySelector('#button3');
/*button1.addEventListener('click', function() {
	console.log('1');
});
button2.addEventListener('click', function() {
	console.log('2');
});
button3.addEventListener('click', function() {
	console.log('3');
});

//342


let button4 = document.querySelector('#button4');
button4.addEventListener('click', func1);

let button5 = document.querySelector('#button5');
button5.addEventListener('click', func2);

function func1() {
	console.log(1);
}
function func2() {
	console.log(2);
}


//343

/*let el1 = document.querySelector('#elem1')
let el2 = document.querySelector('#elem2')
let el3 = document.querySelector('#elem3')
let el4 = document.querySelector('#elem4')
let el5 = document.querySelector('#elem5')
el1.addEventListener('click', func);
el2.addEventListener('click', func);
el3.addEventListener('click', func);
el4.addEventListener('click', func);
el5.addEventListener('click', func);
function func() {
	console.log('message');
}
  //344
let el = document.querySelector('#elem')
function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}
el.addEventListener('click', func1);
el.addEventListener('click', func2);
el.addEventListener('click', func3);
*/

//345
/*button.addEventListener('dblclick', function() {
	console.log('ярик  работает');
});
button.addEventListener('mouseover', function() {
	console.log('пьет энергетики');
});
button.addEventListener('mouseout', function() {
	console.log('он нефор');
});
//346
let button = document.querySelector('#button');
let el = document.querySelector('#elem');
button.addEventListener('dblclick', function() {
	console.log(elem.textContent);
});

let button = document.querySelector('#button');
let el = document.querySelector('#elem');
button.addEventListener('click', function() {
	console.log(elem.textContent);
	elem.textContent = '!!!';

});

let button = document.querySelector('#button');
let el = document.querySelector('#elem1');
let el2 = document.querySelector('#elem2');
button.addEventListener('click', function() {
	let numbers = Number(el.textContent) + Number(el2.textContent);
	console.log(numbers)
});*/

/*let button = document.querySelector('#button');
let el = document.querySelector('#elem1');
let el2 = document.querySelector('#elem2');
let el3 = document.querySelector('#elem3');
let di = document.querySelector('#di');
button.addEventListener('click', function() {
	let numbers = Number(el.textContent) + Number(el2.textContent) + Number(el3.textContent);
	console.log(numbers)
});

//347
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', fun);
function fun(){
    console.log(elem.innerHTML);
}

//348
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', fun);
function fun(){
    console.log(elem.type);
}

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
let s = document.querySelector("#s");
button.addEventListener('click', fun);
function fun(){
    console.log(s.href);
}

//349
let dee=document.querySelector("#dee");
let de = document.querySelector('#de');
dee.addEventListener('click', deee);
function deee() {
    de.value = 'new text';
    console.log(de.value)
}

let du=document.querySelector("#du");
let duu = document.querySelector('#duu');
let duuu = document.querySelector('#duuu');
duuu.addEventListener('click', dudu);
function dudu() {
    duu.textContent = du.value;
    console.log(duu)
}

let dv=document.querySelector("#dv");
let dvv = document.querySelector('#dvv');
let dvvv = document.querySelector('#dvvv');
dvvv.addEventListener('click', dvdv);
function dvdv() {
    dvv.value = dv.value**2;
    console.log(dvv);
}

let dr=document.querySelector("#dr");
let drr = document.querySelector('#drr');
let drrr = document.querySelector('#drrr');
drrr.addEventListener('click', drdr);
function drdr() {
    let h;
    h =  drr.value;
    drr.value = dr.value;
    dr.value = h;
    console.log(drr);
}

let dfgg=document.querySelector("#dfgg");
let dfg=document.querySelector("#dfg");
let df = document.querySelector('#df');
let dff = document.querySelector('#dff');
let dfff = document.querySelector('#dfff');
let dffff = document.querySelector('#dffff');
let dfffff = document.querySelector('#dfffff');
let hf=0;
dfg.addEventListener('click', dfdf);
function dfdf() {
    hf=(Number(dfffff.value)+Number(dfff.value)+Number(dff.value)+Number(df.value)+Number(dffff.value))/5;
    dfgg.textContent = hf;
    console.log(dfgg);
}
//350
let dq=document.querySelector("#dq");
dq.addEventListener('focus', function() {
    dq.value = 1;   
	console.log(dq.value);
});
dq.addEventListener('blur', function() {
    dq.value = 2;
    console.log(dq.value);
});

let dqe=document.querySelector("#dqe");
dqe.addEventListener('blur', function() {
    dqe.value = dqe.value**2;
    console.log(dqe.value);
});

let dx=document.querySelector("#dx");
dx.addEventListener('focus', function() {
    dx.value = "";   
	console.log(dx.value);
});

///351
let we=document.querySelector("#we");
let wee=document.querySelector("#wee");
let te=document.querySelector("#te");
wee.addEventListener('click', function() {   
    te.textContent=we.className;
	console.log(te);
});

let saq=document.querySelector("#saq");
let saaq=document.querySelector("#saaq");
saaq.addEventListener('click', function() {   
    saq.className="hfdhgfd";
	console.log(saq);
});

let saqe=document.querySelector("#saqe");
let saaqee=document.querySelector("#saaqee");
saaqee.addEventListener('click', function() {   
    let rew=saqe.className.split(' ');;
	console.log(rew);
});

///352
console.log(document.querySelector('#image').src);

//353
let image1=document.querySelector("#image1");
console.log(image1.src);
console.log(image1.width);
console.log(image1.height);

///354
let dqr=document.querySelector("#dqr");
dqr.addEventListener('focus', func11);
dqr.addEventListener('blur', func12);
function func11(){
    this.value = 1; 
	console.log(this.value);
};
function func12(){
    this.value = 2; 
	console.log(this.value);
};


let zas=document.querySelector("#zas");
zas.addEventListener('click', func122);
function func122(){
    this.value = Number(this.value)+1; 
	console.log(this.value);
};

///355
let as=document.querySelector("#as");
let aas=document.querySelector("#aas");
let aaas = document.querySelector('#aaas');
let aaaas = document.querySelector('#aaaas');
let aaaaas = document.querySelector('#aaaaas');
as.addEventListener('click', asas);
aas.addEventListener('click', asas);
aaas.addEventListener('click', asas);
aaaas.addEventListener('click', asas);
aaaaas.addEventListener('click', asas);
function asas() {
    this.textContent=this.textContent+"!"
    console.log(this.textContent);
}*/


/*let bu1 = document.querySelector('#bu1');
let bu2 = document.querySelector('#bu2');
let bu3 = document.querySelector('#bu3');
bu1.addEventListener('blur', fuunc6);
bu2.addEventListener('blur', fuunc6);
bu3.addEventListener('blur', fuunc6);

function fuunc6() {
    this.value=Number(this.value)**2;
	console.log(this.value);
}

//356
let elems = document.querySelectorAll('.www');
let wew = document.querySelector('#wew');
wew.addEventListener('click', function() {
    for (let elem of elems) {
        elem.textContent = 'text';
}})


///357
let ew = document.querySelectorAll('.ew');
for (let s of ew){
    s.addEventListener('blur', func45)}
function func45() {
	this.value = Number(this.value) + 1;
}


let rat=document.querySelectorAll("#rat");
for (let you of rat){
    you.addEventListener("click", lay)}
function lay() {
    this.textContent=Number(this.textContent)**2;
}

//358
let divs = document.querySelectorAll('div');
for (let div of divs) {
    div.addEventListener('click', function(){ 
        this.textContent++;}
    );
}

//358
let zx=document.querySelector("#zx");
let zxx=document.querySelector("#zxx");
let zzz=document.querySelector("#zzz");
zxx.addEventListener('click', zzzx);
function zzzx(){
    console.log('('+zzz.href+')');
    this.removeEventListener('click', zzzx);
}

//360
let red= document.querySelectorAll('.red');
for (let re of red) {
	re.addEventListener('click', func12);
}
function func12() {
	console.log(this.textContent+"!");
	this.removeEventListener('click', func12); 
}

//361
let li = document.querySelectorAll('li');
for (let sd of li) {
    sd.addEventListener('click', function(){ 
        this.textContent++;}
    );
}

let li1 = document.querySelectorAll('li');
for (let jo of li1) {
    jo.addEventListener('click', function jojo(){ 
        this.textContent++;
        jo.removeEventListener('click', jojo);}
    );
}

//363
let elemse = document.querySelectorAll('.po');
for (ele of elemse){
    ele.textContent += '!';}

let elems5 = document.querySelectorAll('.pu');
for (let elem of elems5) {
    elem.addEventListener('click', function() {
        this.textContent=Number(this.textContent) + 1;
    });
}   
//практика
let tu = document.querySelectorAll('.tu');
let typ = document.querySelector('#typ');
tu.forEach(item => {
  item.addEventListener('click', function() {
    let sum = 0;
    typ.forEach(elemh => {
      sum += Number(elemh.textContent);
    });
    console.log(sum);
  });
});



let elemss = document.querySelectorAll('.typ2');
for (let elemd of elemss) {
	elemd.addEventListener('click', () => {
		elemd.textContent =elemd.textContent+ '!';
	});
}


let tuo = document.querySelector('#tuo');
let eleme  = document.querySelectorAll('.typ4');
let sum3 = 0;
tuo.addEventListener('click', function() {
    for (let eleml of eleme) {
    sum3 = Number(eleml.textContent) +sum3;}
    console.log(sum3);
});


//1
let dqri = document.querySelector('#dqri');
let iii = document.querySelector('#iii');
dqri.addEventListener('blur', function() {
    iii.textContent = iii.textContent + dqri.value;
})

//2

let yu=0;
let m= document.querySelector('#m');
let mm= document.querySelector('#mm');
let mmm = document.querySelector('#mmm');
let mmmm=document.querySelector("#mmmm")
let mmmmm=document.querySelector("#mmmmm")
m.addEventListener('click', j);
function j(){
    mmmm.textContent=Number(mm.value)+Number(mmm.value);
    console.log(mmmm.textContent);
}

//3
let ji = document.querySelector('#ji');
let ft=document.querySelector("#ft");
ji.addEventListener('blur', function() {
    let ij = ji.value;
    let h1 = 0;
    for (let i = 0; i < ij.length; i++) {
        h1 += Number(ij[i]);
    }
    ft.textContent=h1;
    console.log(ft.value);
})

//4
let elem56=document.querySelector("#elem56");
let ki=document.querySelector("#ki");
elem56.addEventListener('blur', function() {
    let e = elem56.value;
        let numbers = e.split(',').map(Number);
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        let average = sum / numbers.length;
        ki.textContent=average;
        console.log(ki.value);
})

//5
let ww = document.querySelector('#ww');
let www = document.querySelector('#www');
let wwww = document.querySelector('#wwww');
let wwwww = document.querySelector('#wwwww');
ww.addEventListener('blur', function() {
    let fio = ww.value;
    let ot = fio.split(' ');
    www.value = ot[0];
    wwww.value = ot[1];
    wwwww.value = ot.slice(2).join(' ');
})
//6
let wwo = document.querySelector('#wwo');
wwo.addEventListener('blur', function(){
    let fio2 = wwo.value;
    let ot2 = fio2.split(' ');
    wwo.value = toUpperCase(ot2[0])+ toUpperCase(ot2[1])+toUpperCase(ot2.slice(2).join(' '));

})

//7
let pop = document.querySelector('#pop');
let ty = document.querySelector('#ty');
pop.addEventListener('blur', function() {
    let text = pop.value;
    let words = text.split(' ').filter(word => word.trim() !== ''); 
    let count = words.length;
    ty.textContent=count;
    console.log(ty);
})

//8
let per = document.querySelector('#per');
    per.addEventListener('blur', function() {
    let yper=per.value;
    let syper = yper.split('.');
    let res = syper[2] + '-' + syper[1] + '-' + syper[0];
    per.value=res;
    console.log(per.value);
    })

//9
let kol = document.querySelector('#kol');
let kkol = document.querySelector('#kkol');

kkol.addEventListener('click', function() {
    let tyu= kol.value;
    let reversed=tyu.split('').reverse().join('');
    if (tyu==reversed){
        console.log("yes");
    }
    else
        console.log("no");
})

//10
let kole = document.querySelector('#kole');
let ii=0;
kole.addEventListener('blur', function() {
    let tyu2= kole.value;
    for (let ii = 0; ii < tyu2.length; ii++) {
    if (ii == 3) {
        console.log('true');
        }
}
})

//11
let kok1 = document.querySelectorAll('p');
let kkokk = document.querySelector('#kkokk');
let q = 0;
kkokk.addEventListener('click', function() {
    for (let jo of kok1) {
        q++;
        jo.textContent = jo.textContent + ' ' + q;
    }
});*/
/*
//12
let a1 = document.querySelectorAll('.a1');
for (let elem of a1) {
    elem.textContent = elem.textContent + ' (' + elem.href + ')'; 
}

//13
let a2 = document.querySelectorAll('.a2');
    if (href.startsWith('http://')) {
        elem1.textContent = textContent + ' ->';
    }

//14
let pi1=document.querySelectorAll('.pi1')
pi1.forEach(function(lppo){
    lppo.addEventListener('click', function(){
        let mjn=Number(this.textContent);
        this.textContent=mjn**2;
    });
});

//15
let elem15 = document.querySelector('#elem15');
let pof = document.querySelector('#pof');
elem15.addEventListener('blur', function() {
    let days = ['пн','вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    let [day, month, year]=input.value.split('.')
    let date= new Date(year, month, day, 0, 0, 0)
    pof.textContent=days[date.getDay()]
});


//16
let input = document.querySelector('#input');
let l2 = document.querySelector('#l2');
let l3 = document.querySelector('#l3');

l2.addEventListener('click', function(){
    input.value=Number(input.value)+1;
    console.log(input.value);
})
l3.addEventListener('click', function(){
    if (input.value>0){
    input.value=Number(input.value)-1;
    console.log(input.value);}
})

//17
let iu = document.querySelector('#iu');
let pi11 = document.querySelectorAll('.pi11');
let c=0;
pi11.forEach(function(t){
    t.addEventListener('click', function(){
        c++;
        iu.value=c;})
})

//19
let inputik = document.querySelector('#inputik');
let lik = document.querySelector('#lik');
let gho='';
let io=0;
lik.addEventListener('click', function(){
    while (io<8){
        gho+=String(Math.round(Math.random()));
        io++;
    }
    inputik.value=gho;
    console.log(inputik.value);
})

//20
let tr = document.getElementById('tr');
let ran = document.getElementById('ran');

ran.addEventListener('click', function() {
  let text = tr.value;
  let mix = text.split('').sort(() => Math.random() - 0.5).join('');
  tr.value = mix;
});

//21

let far = document.getElementById('far');
let bt = document.getElementById('bt');
let res = document.getElementById('res');

bt.addEventListener('click', function() {
  let fare = parseFloat(far.value);
  let cels = (fare - 32) * 5/9;
  res.textContent = cels.toFixed(2);
});

//22
let nom = document.getElementById('nom');
let fact = document.getElementById('fact');
let factr = document.getElementById('factr');

fact.addEventListener('click', function() {
  let number = parseInt(nom.value);
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  factr.textContent = factorial;
});*/






