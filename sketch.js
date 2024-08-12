/* 
if you're reading this, thank you for being here <3
  -BurntSoup
*/

let hh, slen, len, num, step, div, img, size, colorr, shp, elevation, dirr;
let seed;
let A = [];

function randV(v){
	return random() * v; 
}

function getShape(){
	let v = randV(1);
    if (v < 0.166){
      shp = "square";
    } else if (v < 0.332) {
      shp = "triangle";
    } else if (v < 0.498) {
      shp = "pentagon";
    } else if (v < 0.664) {
      shp = "hexagon";
    } else if (v < 0.83) {
      shp = "octagon";
    } else {
      shp = "circle";
    }
	return shp;
}


function getElevation(){
  let v = randV(1);
  if (v<0.8){
    elevation = false;
  } else {
    elevation = true;
  }
  return elevation;
}

function getDirr(layerr){
  if(layerr==6)
      dirr = -400;
  if(layerr==5)
      dirr = -200;
  if(layerr==4)
      dirr = -50;
  if(layerr==3)
      dirr = 100;
  if(layerr==2)
      dirr = 250;
  if(layerr==1)
      dirr = 400;
  return dirr;
}

function randRangee(minn,maxx){
	return randV(maxx-minn)+minn;
}

function distance(minn, maxx){
    return sqrt(pow(minn.x-maxx.x,2) + pow(minn.y-maxx.y,2));
}

function angle6(){  
  aa6 = [PI/10,(PI/10)*2,(PI/10)*3,(PI/10)*4,(PI/10)*5,(PI/10)*6,(PI/10)*7,(PI/10)*8,(PI/10)*9,(PI/10)*10,(PI/10)*11,(PI/10)*12,(PI/10)*13,(PI/10)*14,(PI/10)*15,(PI/10)*16,(PI/10)*17,(PI/10)*18,(PI/10)*19]
  aa = aa6[Math.floor(randV(aa6.length))]
  return aa;
}
function angle5(){  
  bb5 = [PI/10,(PI/10)*2,(PI/10)*3,(PI/10)*4,(PI/10)*5,(PI/10)*6,(PI/10)*7,(PI/10)*8,(PI/10)*9,(PI/10)*10,(PI/10)*11,(PI/10)*12,(PI/10)*13,(PI/10)*14,(PI/10)*15,(PI/10)*16,(PI/10)*17,(PI/10)*18,(PI/10)*19]
  bb = bb5[Math.floor(randV(bb5.length))]
  return bb;
}
function angle4(){  
  cc4 = [PI/10,(PI/10)*2,(PI/10)*3,(PI/10)*4,(PI/10)*5,(PI/10)*6,(PI/10)*7,(PI/10)*8,(PI/10)*9,(PI/10)*10,(PI/10)*11,(PI/10)*12,(PI/10)*13,(PI/10)*14,(PI/10)*15,(PI/10)*16,(PI/10)*17,(PI/10)*18,(PI/10)*19]
  cc = cc4[Math.floor(randV(cc4.length))]
  return cc;
}
function angle3(){  
  dd3 = [PI/10,(PI/10)*2,(PI/10)*3,(PI/10)*4,(PI/10)*5,(PI/10)*6,(PI/10)*7,(PI/10)*8,(PI/10)*9,(PI/10)*10,(PI/10)*11,(PI/10)*12,(PI/10)*13,(PI/10)*14,(PI/10)*15,(PI/10)*16,(PI/10)*17,(PI/10)*18,(PI/10)*19]
  dd = dd3[Math.floor(randV(dd3.length))]
  return dd;
}
function angle2(){  
  ee2 = [PI/10,(PI/10)*2,(PI/10)*3,(PI/10)*4,(PI/10)*5,(PI/10)*6,(PI/10)*7,(PI/10)*8,(PI/10)*9,(PI/10)*10,(PI/10)*11,(PI/10)*12,(PI/10)*13,(PI/10)*14,(PI/10)*15,(PI/10)*16,(PI/10)*17,(PI/10)*18,(PI/10)*19]
  ee = ee2[Math.floor(randV(ee2.length))]
  return ee;
}
function angle1(){  
  ff1 = [PI/10,(PI/10)*2,(PI/10)*3,(PI/10)*4,(PI/10)*5,(PI/10)*6,(PI/10)*7,(PI/10)*8,(PI/10)*9,(PI/10)*10,(PI/10)*11,(PI/10)*12,(PI/10)*13,(PI/10)*14,(PI/10)*15,(PI/10)*16,(PI/10)*17,(PI/10)*18,(PI/10)*19]
  ff = ff1[Math.floor(randV(ff1.length))]
  return ff;
}


function gridd() {
      for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 49; j++) {
            A.push(
              createVector(
                len+d1*0.25*(j-24),
                len+d1*0.25*(i-12)
              )
            );
          }
      }
}


function setup() 
{
	seed = int(random()*9999999999);
	startt();

    
}

function startt()
{
    
    randomSeed(seed);
    //console.log(seed);
  
  createCanvas(windowWidth,windowWidth);
  if (height > windowHeight) {
   resizeCanvas(windowHeight,windowHeight);
  }
  
    angleMode(RADIANS);
	frameRate(60);
	colorMode(RGB);
  
    size = 4000;

    img = createGraphics(size, size)
    
	let rainn = ({
		"shape": getShape(),
        "elevation": getElevation(),
        "sun": sunPosition(),
        "sun2": sunPosition2(),
        "sun3": sunPosition3(),
        "sun4": sunPosition4(),
        "sun5": sunPosition5(),
        "aa": angle6(),
        "bb": angle5(),
        "cc": angle4(),
        "dd": angle3(),
        "ee": angle2(),
        "ff": angle1()
        
	});
      
  
  
    backgroundd = ["#181818", "#d2caab"]
    dark = ["#52006A", "#224B0C", "#3C2A21", "#630606", "#890F0D", "#E83A14", "#000000", "#3E065F", "#700B97", "#2B2E4A", "#E84545", "#903749", "#53354A", "#212121", "#323232", "#0D7377", "#393E46", "#000000", "#150050", "#3F0071", "#FB2576"] 
    light = ["#0079FF", "#00DFA2", "#F6FA70", "#00B8A9", "#F8F3D4", "#F6416C", "#CD113B", "#FF7600", "#F94C66", "#53BF9D", "#BD4291", "#FFC54D", "#EB5353", "#F9D923", "#36AE7C", "#187498", "#D61355", "#F94A29", "#FCE22A", "#30E3DF", "#F38181", "#FCE38A", "#EAFFD0", "#95E1D3", "#A8D8EA", "#AA96DA", "#FCBAD3", "#FFFFD2", "#FFB6B9", "#ECB390", "#DF7861", "#F38BA0", "#8E3200", "#A64B2A", "#9C3D54", "#9EA1D4", "#CABBE9", "#F67280", "#C06C84", "#F9ED69", "#F08A5D", "#B83B5E", "#F67280", "#EA5455", "#14FFEC", "#FFFFFF", "#FFFFFF"]
    
  
    bbb = Math.floor(randV(backgroundd.length))
    backk = backgroundd[bbb]
      
    canvas = [dark, light]
    palette = (bbb==0?canvas[1]:canvas[0])
    
    colorr = palette[Math.floor(randV(palette.length))]
  
    
    
    if (backk=="#d2caab"){
      blendd = BLEND
    } else if (backk=="#181818") {
      blendd = (randV(1)<0.5?BLEND:ADD)
    }   
  
    img.blendMode(blendd);
  
	img.background(backk);
  
  
          
    slen = size*0.01;
	len = size/2;
	num = 0;
    	      
	


	img.strokeWeight(slen*0.2);
	for (let i = 0; i < 100000; i++){
		let c = color("#D3D3D3");
		c.setAlpha(5);
		img.stroke(c);
		img.point(randV(size),randV(size));
	}
  
  
  
	img.noStroke();
}


function randRange(start, jump, cond1, cond2) {
  let R = [];
  for(let i=0; i<cond2; i++) {
    for(let j=0; j<cond1; j++) {
      R.push(start+j);
    }
    start = start + jump;
  }
  return R;
}

function larp(firstVector, secondVector, shade, opening){
  let n = p5.Vector.lerp(firstVector, secondVector, randV(opening));
  let sz = randV(slen * shade);
  img.square(n.x, n.y, sz);
}

/*
--------------------------------
SQUARE
--------------------------------
*/

function sunn(value) {
  if(value === "BL") {
    locationn = {
      s12: ((A[s2].x - A[s1].x) <= (d1*3)?-0.11:((A[s2].x - A[s1].x) >= (d1*5)?-0.05:-0.1)),
      s23: ((A[s2].x - A[s3].x) <= (d1*3)?0:((A[s2].x - A[s3].x) >= (d1*5)?0.03:0.01)),
      s34: ((A[s3].x - A[s4].x) <= (d1*3)?0.1:((A[s3].x - A[s4].x) >= (d1*5)?0.3:0.2)),
      s41: ((A[s1].x - A[s4].x) <= (d1*3)?0.01:((A[s1].x - A[s4].x) >= (d1*5)?0.04:0.03))
    }
  } else if (value === "BR") {
      locationn = {
        s12: ((A[s2].x - A[s1].x) <= (d1*3)?0.02:((A[s2].x - A[s1].x) >= (d1*5)?0.06:0.04)),
        s23: ((A[s2].x - A[s3].x) <= (d1*3)?0.1:((A[s2].x - A[s3].x) >= (d1*5)?0.3:0.2)),
        s34: ((A[s3].x - A[s4].x) <= (d1*3)?0.02:((A[s3].x - A[s4].x) >= (d1*5)?0.08:0.03)),
        s41: ((A[s1].x - A[s4].x) <= (d1*3)?-0.11:((A[s1].x - A[s4].x) >= (d1*5)?-0.05:-0.1))
    } 
  } else if (value === "TL") {
      locationn = {
        s12: ((A[s2].x - A[s1].x) <= (d1*3)?0.01:((A[s2].x - A[s1].x) >= (d1*5)?0.04:0.03)),
        s23: ((A[s2].x - A[s3].x) <= (d1*3)?-0.11:((A[s2].x - A[s3].x) >= (d1*5)?-0.05:-0.1)),
        s34: ((A[s3].x - A[s4].x) <= (d1*3)?0:((A[s3].x - A[s4].x) >= (d1*5)?0.03:0.01)),
        s41: ((A[s1].x - A[s4].x) <= (d1*3)?0.1:((A[s1].x - A[s4].x) >= (d1*5)?0.3:0.2))
    }
  } else if (value === "TR") {
      locationn = {
        s12: ((A[s2].x - A[s1].x) <= (d1*3)?0.1:((A[s2].x - A[s1].x) >= (d1*5)?0.3:0.2)),
        s23: ((A[s2].x - A[s3].x) <= (d1*3)?0.01:((A[s2].x - A[s3].x) >= (d1*5)?0.04:0.03)),
        s34: ((A[s3].x - A[s4].x) <= (d1*3)?-0.11:((A[s3].x - A[s4].x) >= (d1*5)?-0.05:-0.1)),
        s41: ((A[s1].x - A[s4].x) <= (d1*3)?-0.01:((A[s1].x - A[s4].x) >= (d1*5)?0.02:0))
    }
  }
  return locationn;
}

function sunPosition(){
	let v = randV(1);
    if (v < 0.25){
      sun = "TR";
    } else if (v < 0.5) {
      sun = "TL";
    } else if (v < 0.75) {
      sun = "BR";
    } else {
      sun = "BL";
    }
	return sun;
}

function squ(s1, s2, s3, s4, top, right, bottom, left, shade1, shade) {
   img.push()
     larp(A[s1+top],A[s2+right],((A[s2].x-A[s1].x<=(d1*1.5))?shade/2:(sun==="TR"?shade1:shade)+locationn.s12),1);
     larp(A[s2+right],A[s3+bottom],((A[s2].x-A[s3].x<=(d1*1.5))?shade/2:(sun==="BR"?shade1:shade)+locationn.s23),1); 
     larp(A[s3+bottom],A[s4+left],((A[s3].x-A[s4].x<=(d1*1.5))?shade/2:(sun==="BL"?shade1:shade)+locationn.s34),1);
     larp(A[s4+left],A[s1+top],((A[s1].x-A[s4].x<=(d1*1.5))?shade/2:(sun==="TL"?shade1:shade)+locationn.s41),1);
   img.pop()
}

function test1(ss) {
  if (A[ss].x <= (len-d1*2) && A[ss].y <= len) {
    return 1;
  } else if (A[ss].x >= (len+d1*2) && A[ss].y <= len) {
    return -1;
  } else if (A[ss].x <= (len-d1*2) && A[ss].y >= len) {
    return 1;
  } else if (A[ss].x >= (len+d1*2) && A[ss].y >= len) {
    return -1;
  } else {
    return 0;
  }
}

function test2(ss) {
  if (A[ss].y < len-d1) {
    return 49;
  } else if (A[ss].y > len+d1) {
    return -49;
  } else {
    return 0;
  }
}


function walls(s1, s2, s3, s4, top, right, bottom, left) {
  let pain = 1;
  for (let i=0; i<5; i++) {
    if (
      pain > 4 &&
      (
        A[s1+top].y > A[s2+right].y ||
        A[s1+top].y > A[s4+left].y ||
        A[s2+right].y > A[s3+bottom].y ||
        A[s4+left].y > A[s3+bottom].y
      )
    ) {
      pain = pain + 0;
    } else {
      if (
        distance(A[s1+top], A[s2+right]) > d1/2 &&
        distance(A[s2+right], A[s3+bottom]) > d1/2 &&
        distance(A[s3+bottom], A[s4+left]) > d1/2 &&
        distance(A[s4+left], A[s1+top]) > d1/2 
      ) {
        pain = pain + 1;
      } else {
        pain = pain + 0;
      }
    }
    
  top = top + 98 + test1(s1);
  right = right + ((A[s2].y-A[s1].y)<=(d1+d1/2) || (A[s3].y-A[s2].y)<=(d1+d1/2)?test2(s2):0) - 3;
  bottom = bottom - 98 + test1(s3);
  left = left + ((A[s4].y-A[s1].y)<=(d1+d1/2) || (A[s3].y-A[s4].y)<=(d1+d1/2)?test2(s4):0) + 3;
  }
  return pain;
}

/*
--------------------------------
TRIANGLE
--------------------------------
*/

function tri(t1, t2, t3, left, right, bottom, shade1, shade) {
   img.push()
     larp(A[t1+left],A[t2+right],(sun2==="T"?shade1:shade)+locationn.t12,1);
     larp(A[t2+right],A[t3+bottom],(abs(A[t2].x-A[t3].x<=d1)?shade/2:(sun2==="R"?shade1:shade)+locationn.t23),1); 
     larp(A[t3+bottom],A[t1+left],(abs(A[t3].x-A[t1].x<=d1)?shade/2:(sun2==="L"?shade1:shade)+locationn.t31),1);
   img.pop()
}

function sunn2(value) {
  if(value === "T") {
    locationn = {
      t12: distance(A[t2],A[t1])>=d1*10?0.25:distance(A[t2],A[t1])>=d1*6?0.2:distance(A[t2],A[t1])>=d1*4?0.1:0.05,
      t23: A[t1].y<A[t2].y?randV(8)*-0.01:randRangee(8,10)*-0.01,
      t31: A[t1].y<A[t2].y?randRangee(8,10)*-0.01:randV(8)*-0.01
    }
  } else if (value === "R") {
      locationn = {
        t12: A[t1].y<A[t2].y?randV(4)*-0.01:randRangee(4,6)*-0.01,
        t23: distance(A[t2],A[t3])>=d1*6?0.2:distance(A[t2],A[t3])>=d1*5?0.15:0.15,
        t31: A[t1].y<A[t2].y?randRangee(4,6)*-0.01:randV(4)*-0.01
    } 
  } else if (value === "L") {
      locationn = {
        t12: A[t1].y<A[t2].y?randRangee(4,6)*-0.01:randV(4)*-0.01,
        t23: A[t1].y<A[t2].y?randV(4)*-0.01:randRangee(4,6)*-0.01,
        t31: distance(A[t1],A[t3])>=d1*6?0.2:distance(A[t1],A[t3])>=d1*5?0.15:0.15
    }
  }
  return locationn;
}
function sunPosition2(){
	let v = randV(1);
    if (v < 0.33){
      sun2 = "T";
    } else if (v < 0.66) {
      sun2 = "R";
    } else {
      sun2 = "L";
    }
	return sun2;
}


function test4(t3,bottom) {
  if (A[t3].x <= (len-d1*1.75)) {
    return 1;
  } else if (A[t3].x >= (len+d1*1.75)) {
    return -1;
  } else if (A[t3+bottom].y <= (len+d1*1.5) && A[t3+bottom].x <= (len-d1/2)) {
    return 1;
  } else if (A[t3+bottom].y <= (len+d1*1.5) && A[t3+bottom].x >= (len+d1/2)) {
    return -1;
  } else {
    return 0;
  }
}

function walls2(t1, t2, t3, left, right, bottom) {
  let pain = 1;
  for (let i=0; i<5; i++) {
    if (
      pain > 3 &&
      (
        A[t2+right].y > A[t3+bottom].y ||
        A[t1+left].y > A[t3+bottom].y ||
        abs(A[t3+bottom].x-A[t1+left].x) < d1/2 ||
        abs(A[t2+right].x-A[t3+bottom].x) < d1/2 ||
        abs(A[t2+right].x-A[t1+left].x) < d1/2 ||
        abs(A[t3+bottom].y-A[t1+left].y) < d1/2 ||
        abs(A[t3+bottom].y-A[t2+right].y) < d1/2 ||
        distance(A[t1+left],A[t2+right])<d1/3 ||
        distance(A[t2+right],A[t3+bottom])<d1/3 ||
        distance(A[t3+bottom],A[t1+left])<d1/3
      )
    ) {
      pain = pain + 0;
    } else {
      if (
        distance(A[t1+left],A[t2+right])>d1/2 &&
        distance(A[t2+right],A[t3+bottom])>d1/2 &&
        distance(A[t3+bottom],A[t1+left])>d1/2 &&
        A[t2+right].x-A[t1+left].x>0
      ) {
        pain = pain + 1;
      } else {
        pain = pain + 0;
      }
    }
    
   left = left + 98 + 4;
   right = right + 98 - 4;
   bottom = bottom - 98 + test4(t3,bottom);
  }
  return pain;
}

/*
--------------------------------
PENTAGON
--------------------------------
*/

function pen(p1, p2, p3, p4, pp5, top, right, bottom3, bottom4, left, shade1, shade) {
   img.push()
     larp(A[p1+top],A[p2+right],(sun3==="TR"?shade1:shade)+locationn.p12,1);
     larp(A[p2+right],A[p3+bottom3],(sun3==="BR"?((A[p2].x-A[p3].x)<d1*2?shade1/2:shade1):((A[p2].x-A[p3].x)<d1*2?shade/2:shade))+locationn.p23,1);
     larp(A[p3+bottom3],A[p4+bottom4],(sun3==="B"?((A[p3].x-A[p4].x)<d1*3?shade1/2:shade1):((A[p3].x-A[p4].x)<d1*3?shade/2:shade))+locationn.p34,1);
     larp(A[p4+bottom4],A[pp5+left],(sun3==="BL"?((A[p4].x-A[pp5].x)<d1*2?shade1/2:shade1):((A[p4].x-A[pp5].x)<d1*2?shade/2:shade))+locationn.p45,1);
     larp(A[pp5+left],A[p1+top],(sun3==="TL"?shade1:shade)+locationn.p51,1);     
   img.pop()
}

function sunn3(value) {
  if(value === "TR") {
    locationn = {
      p12: (distance(A[p2],A[p1])>=d1*6?0.4:distance(A[p2],A[p1])>=d1*5?0.35:distance(A[p2],A[p1])>=d1*4?0.3:0.2),
      p23: (distance(A[p2],A[p3])>=d1*4?0.2:distance(A[p2],A[p3])>=d1*3?0.1:distance(A[p2],A[p3])>=d1*2?0.05:0.0125),
      p34: (distance(A[p3],A[p4])>=d1*6?0.1:distance(A[p3],A[p4])>=d1*5?0.05:distance(A[p3],A[p4])>=d1*4?0.025:distance(A[p3],A[p4])>=d1*3?0.0125:0.00625),
      p45: (distance(A[p4],A[pp5])>=d1*4?0.05:distance(A[p4],A[pp5])>=d1*3?0.025:distance(A[p4],A[pp5])>=d1*2?0.0125:0.00625),
      p51: (distance(A[p1],A[pp5])>=d1*6?0.2:distance(A[p1],A[pp5])>=d1*5?0.1:distance(A[p1],A[pp5])>=d1*4?0.05:0.0125)
    }
  } else if (value === "TL") {
      locationn = {
        p12: (distance(A[p2],A[p1])>=d1*6?0.2:distance(A[p2],A[p1])>=d1*5?0.1:distance(A[p2],A[p1])>=d1*4?0.05:0.0125),
        p23: (distance(A[p2],A[p3])>=d1*4?0.05:distance(A[p2],A[p3])>=d1*3?0.025:distance(A[p2],A[p3])>=d1*2?0.0125:0.00625),
        p34: (distance(A[p3],A[p4])>=d1*6?0.1:distance(A[p3],A[p4])>=d1*5?0.05:distance(A[p3],A[p4])>=d1*4?0.025:distance(A[p3],A[p4])>=d1*3?0.0125:0.00625),
        p45: (distance(A[p4],A[pp5])>=d1*4?0.2:distance(A[p4],A[pp5])>=d1*3?0.1:distance(A[p4],A[pp5])>=d1*2?0.05:0.0125),
        p51: (distance(A[p1],A[pp5])>=d1*6?0.4:distance(A[p1],A[pp5])>=d1*5?0.35:distance(A[p1],A[pp5])>=d1*4?0.3:0.2)
    } 
  } else if (value === "BR") {
      locationn = {
        p12: (distance(A[p2],A[p1])>=d1*6?0.25:distance(A[p2],A[p1])>=d1*5?0.15:distance(A[p2],A[p1])>=d1*4?0.1:0.05),
        p23: (distance(A[p2],A[p3])>=d1*4?0.35:distance(A[p2],A[p3])>=d1*3?0.3:distance(A[p2],A[p3])>=d1*2?0.25:0.2),
        p34: (distance(A[p3],A[p4])>=d1*6?0.25:distance(A[p3],A[p4])>=d1*5?0.15:distance(A[p3],A[p4])>=d1*4?0.1:0.05),
        p45: (distance(A[p4],A[pp5])>=d1*4?0.01:distance(A[p4],A[pp5])>=d1*3?0.05:distance(A[p4],A[pp5])>=d1*2?0.025:0.0125),
        p51: (distance(A[p1],A[pp5])>=d1*6?0.05:distance(A[p1],A[pp5])>=d1*5?0.025:distance(A[p1],A[pp5])>=d1*4?0.0125:0.00625)
    }
  } else if (value === "BL") {
      locationn = {
        p12: (distance(A[p2],A[p1])>=d1*6?0.05:distance(A[p2],A[p1])>=d1*5?0.025:distance(A[p2],A[p1])>=d1*4?0.0125:0.00625),
        p23: (distance(A[p2],A[p3])>=d1*4?0.01:distance(A[p2],A[p3])>=d1*3?0.05:distance(A[p2],A[p3])>=d1*2?0.025:0.0125),
        p34: (distance(A[p3],A[p4])>=d1*6?0.25:distance(A[p3],A[p4])>=d1*5?0.15:distance(A[p3],A[p4])>=d1*4?0.1:0.05),
        p45: (distance(A[p4],A[pp5])>=d1*4?0.35:distance(A[p4],A[pp5])>=d1*3?0.3:distance(A[p4],A[pp5])>=d1*2?0.25:0.2),
        p51: (distance(A[p1],A[pp5])>=d1*6?0.25:distance(A[p1],A[pp5])>=d1*5?0.15:distance(A[p1],A[pp5])>=d1*4?0.1:0.05)
    }
  } else if (value === "B") {
      locationn = {
        p12: (distance(A[p2],A[p1])>=d1*6?randV(1)*0.15:distance(A[p2],A[p1])>=d1*5?randV(1)*0.1:distance(A[p2],A[p1])>=d1*4?randV(1)*0.05:0.025),
        p23: (distance(A[p2],A[p3])>=d1*4?0.25:distance(A[p2],A[p3])>=d1*3?0.15:distance(A[p2],A[p3])>=d1*2?0.05:0.025),
        p34: (distance(A[p3],A[p4])>=d1*6?0.4:distance(A[p3],A[p4])>=d1*5?0.35:distance(A[p3],A[p4])>=d1*4?0.3:0.25),
        p45: (distance(A[p4],A[pp5])>=d1*4?0.25:distance(A[p4],A[pp5])>=d1*3?0.15:distance(A[p4],A[pp5])>=d1*2?0.05:0.025),
        p51: (distance(A[p1],A[pp5])>=d1*6?randV(1)*0.15:distance(A[p1],A[pp5])>=d1*5?randV(1)*0.1:distance(A[p1],A[pp5])>=d1*4?randV(1)*0.05:0.025)
    }
  }  
  return locationn;
  
}

function sunPosition3(){
	let v = randV(1);
    if (v < 0.2){
      sun3 = "TR";
    } else if (v < 0.4) {
      sun3 = "TL";
    } else if (v < 0.6) {
      sun3 = "BR";
    } else if (v < 0.8) {
      sun3 = "BL";
    } else {
      sun3 = "B";
    }
	return sun3;
}

function walls3(p1, p2, p3, p4, pp5, top, right, bottom3, bottom4, left) {
  let pain = 1;
  for (let i=0; i<5; i++) {
    if (
      pain > 4 &&
      (
        A[p1+top].y > A[p2+right].y ||
        A[p1+top].y > A[pp5+left].y ||
        A[p2+right].y > A[p3+bottom3].y ||
        A[pp5+left].y > A[p4+bottom4].y
      )
    ) {
      pain = pain + 0;
    } else {
      if (
        distance(A[p2+right], A[p3+bottom3]) > d1/2 &&
        distance(A[p4+bottom4], A[p3+bottom3]) > d1/2 &&
        distance(A[p4+bottom4], A[pp5+left]) > d1/2 &&
        distance(A[pp5+left], A[p1+top]) > d1/2 &&
        distance(A[p1+top], A[p2+right]) > d1/2 &&
        A[p3+bottom3].x-A[p4+bottom4].x>0
      ) {
        pain = pain + 1;
      } else {
        pain = pain + 0;
      }
    }
    
   top = top + 98 + testp1(p1);
   right = right - 4 + testpp(p2);
   left = left + 4 + testpp(pp5);
   bottom3 = bottom3 - 98 - 2;
   bottom4 = bottom4 - 98 + 2;
  }
  return pain;
}


function testpp(pp) {
  if (A[pp].x >= len && A[pp].y < len) {
    return 49;
  } else if (A[pp].x >= len && A[pp].y > len) {
    return -49;
  } else if (A[pp].x <= len && A[pp].y < len) {
    return 49;
  } else if (A[pp].x <= len && A[pp].y > len) {
    return -49;
  } else {
    return 0;
  }
}

function testp1(p1) {
  if (A[p1].x <= (len-d1*2) && A[p1].y <= len) {
    return 1;
  } else if (A[p1].x >= (len+d1*2) && A[p1].y <= len) {
    return -1;
  } else {
    return 0;
  }
}


/*
--------------------------------
HEXAGON
--------------------------------
*/

function hexx(h1,h2,h3,h4,h5,h6,topL,topR,right,botR,botL,left,shade1,shade) {
   img.push()
     larp(A[h1+topL],A[h2+topR],(sun4==="T"?shade1:distance(A[h2+topR],A[h1+topL])<=d1?shade/2:shade)+locationn.h12,1);
     larp(A[h2+topR],A[h3+right],(sun4==="TR"?shade1:distance(A[h2+topR],A[h3+right])<=d1?shade/2:shade)+locationn.h23,1);
     larp(A[h3+right],A[h4+botR],(sun4==="BR"?shade1:distance(A[h3+right],A[h4+botR])<=d1?shade/2:shade)+locationn.h34,1);
     larp(A[h4+botR],A[h5+botL],(sun4==="B"?shade1:distance(A[h4+botR],A[h5+botL])<=d1?shade/2:shade)+locationn.h45,1);
     larp(A[h5+botL],A[h6+left],(sun4==="BL"?shade1:distance(A[h5+botL],A[h6+left])<=d1?shade/2:shade)+locationn.h56,1);
     larp(A[h6+left],A[h1+topL],(sun4==="TL"?shade1:distance(A[h6+left],A[h1+topL])<=d1?shade/2:shade)+locationn.h61,1);
   img.pop()
}

function sunn4(value) {
  if(value === "TR") {
    locationn = {
      h12: distance(A[h2],A[h1])>=d1*6?0.25:distance(A[h2],A[h1])>=d1*5?0.2:distance(A[h2],A[h1])>=d1*4?0.15:distance(A[h2],A[h1])>=d1*3?0.1:0.05,
      h23: distance(A[h2],A[h3])>=d1*4?0.3:distance(A[h2],A[h3])>=d1*3?0.25:distance(A[h2],A[h3])>=d1*2?0.2:0.15,
      h34: distance(A[h3],A[h4])>=d1*4?0.2:distance(A[h3],A[h4])>=d1*3?0.15:distance(A[h3],A[h4])>=d1*2?0.1:0.05,
      h45: distance(A[h4],A[h5])>=d1*6?0.15:distance(A[h4],A[h5])>=d1*5?0.1:distance(A[h4],A[h5])>=d1*4?0.05:distance(A[h4],A[h5])>=d1*3?0.025:0.0125,
      h56: distance(A[h5],A[h6])>=d1*4?0.02:distance(A[h5],A[h6])>=d1*3?0.012:distance(A[h5],A[h6])>=d1*2?0.0062:0.0062,
      h61: distance(A[h6],A[h1])>=d1*4?0.05:distance(A[h6],A[h1])>=d1*3?0.025:distance(A[h6],A[h1])>=d1*2?0.0125:0.00625
    }
  } else if (value === "TL") {
    locationn = {
      h12: distance(A[h2],A[h1])>=d1*6?0.25:distance(A[h2],A[h1])>=d1*5?0.2:distance(A[h2],A[h1])>=d1*4?0.15:distance(A[h2],A[h1])>=d1*3?0.1:0.05,
      h23:  distance(A[h2],A[h3])>=d1*4?0.05:distance(A[h2],A[h3])>=d1*3?0.025:distance(A[h2],A[h3])>=d1*2?0.0125:0.00625,
      h34: distance(A[h3],A[h4])>=d1*4?0.02:distance(A[h3],A[h4])>=d1*3?0.012:distance(A[h3],A[h4])>=d1*2?0.0062:0.0062,
      h45: distance(A[h4],A[h5])>=d1*6?0.15:distance(A[h4],A[h5])>=d1*5?0.1:distance(A[h4],A[h5])>=d1*4?0.05:distance(A[h4],A[h5])>=d1*3?0.025:0.0125,
      h56: distance(A[h5],A[h6])>=d1*4?0.2:distance(A[h5],A[h6])>=d1*3?0.15:distance(A[h5],A[h6])>=d1*2?0.1:0.05,
      h61: distance(A[h1],A[h6])>=d1*4?0.3:distance(A[h1],A[h6])>=d1*3?0.25:distance(A[h1],A[h6])>=d1*2?0.2:0.15
    }
  } else if (value === "BL") {
    locationn = {
      h12: distance(A[h1],A[h2])>=d1*6?0.15:distance(A[h1],A[h2])>=d1*5?0.1:distance(A[h1],A[h2])>=d1*4?0.05:distance(A[h1],A[h2])>=d1*3?0.025:0.0125,
      h23: distance(A[h3],A[h2])>=d1*4?0.02:distance(A[h3],A[h2])>=d1*3?0.012:distance(A[h3],A[h2])>=d1*2?0.0062:0.0062,
      h34: distance(A[h4],A[h3])>=d1*4?0.05:distance(A[h4],A[h3])>=d1*3?0.025:distance(A[h4],A[h3])>=d1*2?0.0125:0.00625,
      h45: distance(A[h4],A[h5])>=d1*6?0.25:distance(A[h4],A[h5])>=d1*5?0.2:distance(A[h4],A[h5])>=d1*4?0.15:distance(A[h4],A[h5])>=d1*3?0.1:0.05,
      h56: distance(A[h5],A[h6])>=d1*4?0.3:distance(A[h5],A[h6])>=d1*3?0.25:distance(A[h5],A[h6])>=d1*2?0.2:0.15,
      h61: distance(A[h1],A[h6])>=d1*4?0.2:distance(A[h1],A[h6])>=d1*3?0.15:distance(A[h1],A[h6])>=d1*2?0.1:0.05
    }
  } else if (value === "BR") {
    locationn = {
      h12: distance(A[h1],A[h2])>=d1*6?0.15:distance(A[h1],A[h2])>=d1*5?0.1:distance(A[h1],A[h2])>=d1*4?0.05:distance(A[h1],A[h2])>=d1*3?0.025:0.0125,
      h23: distance(A[h2],A[h3])>=d1*4?0.2:distance(A[h2],A[h3])>=d1*3?0.15:distance(A[h2],A[h3])>=d1*2?0.1:0.05,
      h34: distance(A[h3],A[h4])>=d1*4?0.3:distance(A[h3],A[h4])>=d1*3?0.25:distance(A[h3],A[h4])>=d1*2?0.2:0.15,
      h45: distance(A[h4],A[h5])>=d1*6?0.25:distance(A[h4],A[h5])>=d1*5?0.2:distance(A[h4],A[h5])>=d1*4?0.15:distance(A[h4],A[h5])>=d1*3?0.1:0.05,
      h56: distance(A[h5],A[h6])>=d1*4?0.05:distance(A[h5],A[h6])>=d1*3?0.025:distance(A[h5],A[h6])>=d1*2?0.0125:0.00625,
      h61: distance(A[h6],A[h1])>=d1*4?0.02:distance(A[h6],A[h1])>=d1*3?0.012:distance(A[h6],A[h1])>=d1*2?0.0062:0.0062
    }
  } else if (value === "T") {
    locationn = {
      h12: distance(A[h1],A[h2])>=d1*6?0.4:distance(A[h1],A[h2])>=d1*5?0.35:distance(A[h1],A[h2])>=d1*4?0.3:distance(A[h1],A[h2])>=d1*3?0.25:0.2,
      h23: distance(A[h2],A[h3])>=d1*4?0.2:distance(A[h2],A[h3])>=d1*3?0.15:distance(A[h2],A[h3])>=d1*2?0.1:0.05,
      h34: distance(A[h3],A[h4])>=d1*4?0.05:distance(A[h3],A[h4])>=d1*3?0.025:distance(A[h3],A[h4])>=d1*2?0.0125:0.00625,
      h45: distance(A[h4],A[h5])>=d1*6?0.1:distance(A[h4],A[h5])>=d1*5?0.05:distance(A[h4],A[h5])>=d1*4?0.025:distance(A[h4],A[h5])>=d1*3?0.0125:0.00625,
      h56: distance(A[h5],A[h6])>=d1*4?0.05:distance(A[h5],A[h6])>=d1*3?0.025:distance(A[h5],A[h6])>=d1*2?0.0125:0.00625,
      h61: distance(A[h1],A[h6])>=d1*4?0.2:distance(A[h1],A[h6])>=d1*3?0.15:distance(A[h1],A[h6])>=d1*2?0.1:0.05
    }
  } else if (value === "B") {
    locationn = {
      h12: distance(A[h1],A[h2])>=d1*6?0.1:distance(A[h1],A[h2])>=d1*5?0.05:distance(A[h1],A[h2])>=d1*4?0.025:distance(A[h1],A[h2])>=d1*3?0.0125:0.00625,
      h23: distance(A[h3],A[h2])>=d1*4?0.05:distance(A[h3],A[h2])>=d1*3?0.025:distance(A[h3],A[h2])>=d1*2?0.0125:0.00625,
      h34: distance(A[h3],A[h4])>=d1*4?0.2:distance(A[h3],A[h4])>=d1*3?0.15:distance(A[h3],A[h4])>=d1*2?0.1:0.05,
      h45: distance(A[h4],A[h5])>=d1*6?0.4:distance(A[h4],A[h5])>=d1*5?0.35:distance(A[h4],A[h5])>=d1*4?0.3:distance(A[h4],A[h5])>=d1*3?0.25:0.2,
      h56: distance(A[h5],A[h6])>=d1*4?0.2:distance(A[h5],A[h6])>=d1*3?0.15:distance(A[h5],A[h6])>=d1*2?0.1:0.05,
      h61: distance(A[h6],A[h1])>=d1*4?0.05:distance(A[h6],A[h1])>=d1*3?0.025:distance(A[h6],A[h1])>=d1*2?0.0125:0.00625
    }
  }
  return locationn;
  
}

function sunPosition4(){
	let v = randV(1);
    if (v < 0.16){
      sun4 = "T";
    } else if (v < 0.32) {
      sun4 = "B";
    } else if (v < 0.48) {
      sun4 = "BR";
    } else if (v < 0.64) {
      sun4 = "BL";
    } else if (v < 0.8) {
      sun4 = "TL";
    } else {
      sun4 = "TR";
    }
	return sun4;
}

function walls4(h1,h2,h3,h4,h5,h6,topL,topR,right,botR,botL,left) {
  let pain = 1;
  for (let i=0; i<5; i++) {
    if (
      pain > 4 &&
      (        
        A[h2+topR].y>A[h3+right].y ||
        A[h3+right].y>A[h4+botR].y ||
        A[h6+left].y>A[h5+botL].y ||
        A[h1+topL].y>A[h6+left].y
      )
    ) {
      pain = pain + 0;
    } else {
      if (
        distance(A[h1+topL],A[h2+topR])>d1/2 &&
        distance(A[h2+topR],A[h3+right])>d1/2 &&
        distance(A[h3+right],A[h4+botR])>d1/2 &&
        distance(A[h4+botR],A[h5+botL])>d1/2 &&
        distance(A[h5+botL],A[h6+left])>d1/2 &&
        distance(A[h6+left],A[h1+topL])>d1/2 &&
        A[h4+botR].x-A[h5+botL].x>0 &&
        A[h2+topR].x-A[h1+topL].x>0
      ) {
        pain = pain + 1;
      } else {
        pain = pain + 0;
      }
    }
    topL = topL + 98 + 2
    topR = topR + 98 - 2
    right = right - 4 + testh(h3)
    left = left - 4 + testh(h6)
    botR = botR - 98 - 2
    botL = botL - 98 + 2
  }
  return pain;
}

function testh(hh) {
  if (A[hh].x > len && A[hh].y < len) {
    return 49;
  } else if (A[hh].x > len && A[hh].y > len) {
    return -49;
  } else if (A[hh].x < len && A[hh].y < len) {
    return 49;
  } else if (A[hh].x < len && A[hh].y > len) {
    return -49;
  } else {
    return 0;
  }
}


/*
--------------------------------
OCTAGON
--------------------------------
*/

function octt(o1,o2,o3,o4,o5,o6,o7,o8,topL,topR,rightT,rightB,botR,botL,leftB,leftT,shade1,shade) {
   img.push()
     larp(A[o1+topL],A[o2+topR],(sun5==="T"?shade1:distance(A[o1+topL],A[o2+topR])<=d1?shade/2:shade)+locationn.o12,1);
     larp(A[o2+topR],A[o3+rightT],(sun5==="TR"?shade1:(distance(A[o2+topR],A[o3+rightT])<=d1||abs(A[o2+topR].x-A[o3+rightT].x)<=d1)?shade/2:shade)+locationn.o23,1);
     larp(A[o3+rightT],A[o4+rightB],(sun5==="R"?shade1:shade/2)+locationn.o34,1);
     larp(A[o4+rightB],A[o5+botR],(sun5==="BR"?shade1:(distance(A[o4+rightB],A[o5+botR])<=d1||abs(A[o4+rightB].x-A[o5+botR].x)<=d1)?shade/2:shade)+locationn.o45,1);
     larp(A[o5+botR],A[o6+botL],(sun5==="B"?shade1:distance(A[o5+botR],A[o6+botL])<=d1?shade/2:shade)+locationn.o56,1);
     larp(A[o6+botL],A[o7+leftB],(sun5==="BL"?shade1:(distance(A[o6+botL],A[o7+leftB])<=d1||abs(A[o6+botL].x-A[o7+leftB].x)<=d1)?shade/2:shade)+locationn.o67,1);
     larp(A[o7+leftB],A[o8+leftT],(sun5==="L"?shade1:shade/2)+locationn.o78,1);
     larp(A[o8+leftT],A[o1+topL],(sun5==="TL"?shade1:(distance(A[o8+leftT],A[o1+topL])<=d1||abs(A[o8+leftT].x-A[o1+topL].x)<=d1)?shade/2:shade)+locationn.o81,1);
   img.pop()
}

function sunn5(value) {
  if(value === "TR") {
    locationn = {
      o12: distance(A[o1],A[o2])>=d1*6?0.3:distance(A[o1],A[o2])>=d1*5?0.25:distance(A[o1],A[o2])>=d1*4?0.2:distance(A[o1],A[o2])>=d1*3?0.15:0.1,
      o23: distance(A[o2],A[o3])>=d1*4?0.3:distance(A[o2],A[o3])>=d1*3?0.25:distance(A[o2],A[o3])>=d1*2?0.2:0.15,
      o34: 0.1,
      o45: distance(A[o4],A[o5])>=d1*4?0.15:distance(A[o4],A[o5])>=d1*3?0.1:distance(A[o4],A[o5])>=d1*2?0.05:0.025,
      o56: distance(A[o5],A[o6])>=d1*6?0.2:distance(A[o5],A[o6])>=d1*5?0.15:distance(A[o5],A[o6])>=d1*4?0.1:distance(A[o5],A[o6])>=d1*3?0.05:0.025,
      o67: distance(A[o6],A[o7])>=d1*4?0.00625:distance(A[o6],A[o7])>=d1*3?0.003125:distance(A[o6],A[o7])>=d1*2?0.00156:0.00156,
      o78: 0.001,
      o81: distance(A[o8],A[o1])>=d1*4?0.15:distance(A[o8],A[o1])>=d1*3?0.1:distance(A[o8],A[o1])>=d1*2?0.05:0.025
    }
  } else if (value === "TL") {
    locationn = {
      o12: distance(A[o1],A[o2])>=d1*6?0.3:distance(A[o1],A[o2])>=d1*5?0.25:distance(A[o1],A[o2])>=d1*4?0.2:distance(A[o1],A[o2])>=d1*3?0.15:0.1,
      o23: distance(A[o2],A[o3])>=d1*4?0.15:distance(A[o2],A[o3])>=d1*3?0.1:distance(A[o2],A[o3])>=d1*2?0.05:0.025,
      o34: 0.001,
      o45: distance(A[o4],A[o5])>=d1*4?0.00625:distance(A[o4],A[o5])>=d1*3?0.003125:distance(A[o4],A[o5])>=d1*2?0.00156:0.00156,
      o56: distance(A[o5],A[o6])>=d1*6?0.2:distance(A[o5],A[o6])>=d1*5?0.15:distance(A[o5],A[o6])>=d1*4?0.1:distance(A[o5],A[o6])>=d1*3?0.05:0.025,
      o67: distance(A[o6],A[o7])>=d1*4?0.15:distance(A[o6],A[o7])>=d1*3?0.1:distance(A[o6],A[o7])>=d1*2?0.05:0.025,
      o78: 0.1,
      o81: distance(A[o8],A[o1])>=d1*4?0.3:distance(A[o8],A[o1])>=d1*3?0.25:distance(A[o8],A[o1])>=d1*2?0.2:0.15
    }
  } else if (value === "BL") {
    locationn = {
      o12: distance(A[o1],A[o2])>=d1*6?0.2:distance(A[o1],A[o2])>=d1*5?0.15:distance(A[o1],A[o2])>=d1*4?0.1:distance(A[o1],A[o2])>=d1*3?0.05:0.025,
      o23: distance(A[o2],A[o3])>=d1*4?0.00625:distance(A[o2],A[o3])>=d1*3?0.003125:distance(A[o2],A[o3])>=d1*2?0.00156:0.00156,
      o34: 0.001,
      o45: distance(A[o4],A[o5])>=d1*4?0.15:distance(A[o4],A[o5])>=d1*3?0.1:distance(A[o4],A[o5])>=d1*2?0.05:0.025,
      o56: distance(A[o5],A[o6])>=d1*6?0.3:distance(A[o5],A[o6])>=d1*5?0.25:distance(A[o5],A[o6])>=d1*4?0.2:distance(A[o5],A[o6])>=d1*3?0.15:0.1,
      o67: distance(A[o6],A[o7])>=d1*4?0.3:distance(A[o6],A[o7])>=d1*3?0.25:distance(A[o6],A[o7])>=d1*2?0.2:0.15,
      o78: 0.1,
      o81: distance(A[o8],A[o1])>=d1*4?0.15:distance(A[o8],A[o1])>=d1*3?0.1:distance(A[o8],A[o1])>=d1*2?0.05:0.025
    }
  } else if (value === "BR") {
    locationn = {
      o12: distance(A[o1],A[o2])>=d1*6?0.2:distance(A[o1],A[o2])>=d1*5?0.15:distance(A[o1],A[o2])>=d1*4?0.1:distance(A[o1],A[o2])>=d1*3?0.05:0.025,
      o23: distance(A[o2],A[o3])>=d1*4?0.15:distance(A[o2],A[o3])>=d1*3?0.1:distance(A[o2],A[o3])>=d1*2?0.05:0.025,
      o34: 0.1,
      o45: distance(A[o4],A[o5])>=d1*4?0.3:distance(A[o4],A[o5])>=d1*3?0.25:distance(A[o4],A[o5])>=d1*2?0.2:0.15,
      o56: distance(A[o5],A[o6])>=d1*6?0.3:distance(A[o5],A[o6])>=d1*5?0.25:distance(A[o5],A[o6])>=d1*4?0.2:distance(A[o5],A[o6])>=d1*3?0.15:0.1,
      o67: distance(A[o6],A[o7])>=d1*4?0.15:distance(A[o6],A[o7])>=d1*3?0.1:distance(A[o6],A[o7])>=d1*2?0.05:0.025,
      o78: 0.001,
      o81: distance(A[o8],A[o1])>=d1*4?0.00625:distance(A[o8],A[o1])>=d1*3?0.003125:distance(A[o8],A[o1])>=d1*2?0.00156:0.00156
    }
  } else if (value === "T") {
    locationn = {
      o12: distance(A[o1],A[o2])>=d1*6?0.4:distance(A[o1],A[o2])>=d1*5?0.35:distance(A[o1],A[o2])>=d1*4?0.3:distance(A[o1],A[o2])>=d1*3?0.25:0.2,
      o23: distance(A[o2],A[o3])>=d1*4?0.2:distance(A[o2],A[o3])>=d1*3?0.15:distance(A[o2],A[o3])>=d1*2?0.1:0.05,
      o34: 0.06,
      o45: distance(A[o4],A[o5])>=d1*4?0.05:distance(A[o4],A[o5])>=d1*3?0.025:distance(A[o4],A[o5])>=d1*2?0.0125:0.006,
      o56: distance(A[o5],A[o6])>=d1*6?0.025:distance(A[o5],A[o6])>=d1*5?0.0125:distance(A[o5],A[o6])>=d1*4?0.00625:distance(A[o5],A[o6])>=d1*3?0.003125:0.00156,
      o67: distance(A[o6],A[o7])>=d1*4?0.05:distance(A[o6],A[o7])>=d1*3?0.025:distance(A[o6],A[o7])>=d1*2?0.0125:0.006,
      o78: 0.06,
      o81: distance(A[o8],A[o1])>=d1*4?0.2:distance(A[o8],A[o1])>=d1*3?0.15:distance(A[o8],A[o1])>=d1*2?0.1:0.05
    }
  } else if (value === "B") {
    locationn = {
      o12: distance(A[o1],A[o2])>=d1*6?0.025:distance(A[o1],A[o2])>=d1*5?0.0125:distance(A[o1],A[o2])>=d1*4?0.00625:distance(A[o1],A[o2])>=d1*3?0.003125:0.00156,
      o23: distance(A[o2],A[o3])>=d1*4?0.05:distance(A[o2],A[o3])>=d1*3?0.025:distance(A[o2],A[o3])>=d1*2?0.0125:0.006,
      o34: 0.06,
      o45: distance(A[o4],A[o5])>=d1*4?0.2:distance(A[o4],A[o5])>=d1*3?0.15:distance(A[o4],A[o5])>=d1*2?0.1:0.05,
      o56: distance(A[o5],A[o6])>=d1*6?0.4:distance(A[o5],A[o6])>=d1*5?0.35:distance(A[o5],A[o6])>=d1*4?0.3:distance(A[o5],A[o6])>=d1*3?0.25:0.2,
      o67: distance(A[o6],A[o7])>=d1*4?0.2:distance(A[o6],A[o7])>=d1*3?0.15:distance(A[o6],A[o7])>=d1*2?0.1:0.05,
      o78: 0.06,
      o81: distance(A[o8],A[o1])>=d1*4?0.05:distance(A[o8],A[o1])>=d1*3?0.025:distance(A[o8],A[o1])>=d1*2?0.0125:0.006
    }
  } else if (value === "R") {
    locationn = {
      o12: distance(A[o1],A[o2])>=d1*6?0.25:distance(A[o1],A[o2])>=d1*5?0.2:distance(A[o1],A[o2])>=d1*4?0.15:distance(A[o1],A[o2])>=d1*3?0.1:0.05,
      o23: distance(A[o2],A[o3])>=d1*4?0.2:distance(A[o2],A[o3])>=d1*3?0.15:distance(A[o2],A[o3])>=d1*2?0.1:0.05,
      o34: 0.1,
      o45: distance(A[o4],A[o5])>=d1*4?0.2:distance(A[o4],A[o5])>=d1*3?0.15:distance(A[o4],A[o5])>=d1*2?0.1:0.05,
      o56: distance(A[o5],A[o6])>=d1*6?0.25:distance(A[o5],A[o6])>=d1*5?0.2:distance(A[o5],A[o6])>=d1*4?0.15:distance(A[o5],A[o6])>=d1*3?0.1:0.05,
      o67: distance(A[o6],A[o7])>=d1*4?0.05:distance(A[o6],A[o7])>=d1*3?0.025:distance(A[o6],A[o7])>=d1*2?0.0125:0.006,
      o78: 0,
      o81: distance(A[o8],A[o1])>=d1*4?0.05:distance(A[o8],A[o1])>=d1*3?0.025:distance(A[o8],A[o1])>=d1*2?0.0125:0.006
    }
  } else if (value === "L") {
    locationn = {
      o12: distance(A[o1],A[o2])>=d1*6?0.25:distance(A[o1],A[o2])>=d1*5?0.2:distance(A[o1],A[o2])>=d1*4?0.15:distance(A[o1],A[o2])>=d1*3?0.1:0.05,
      o23: distance(A[o2],A[o3])>=d1*4?0.05:distance(A[o2],A[o3])>=d1*3?0.025:distance(A[o2],A[o3])>=d1*2?0.0125:0.006,
      o34: 0,
      o45: distance(A[o4],A[o5])>=d1*4?0.05:distance(A[o4],A[o5])>=d1*3?0.025:distance(A[o4],A[o5])>=d1*2?0.0125:0.006,
      o56: distance(A[o5],A[o6])>=d1*6?0.25:distance(A[o5],A[o6])>=d1*5?0.2:distance(A[o5],A[o6])>=d1*4?0.15:distance(A[o5],A[o6])>=d1*3?0.1:0.05,
      o67: distance(A[o6],A[o7])>=d1*4?0.2:distance(A[o6],A[o7])>=d1*3?0.15:distance(A[o6],A[o7])>=d1*2?0.1:0.05,
      o78: 0.1,
      o81: distance(A[o8],A[o1])>=d1*4?0.2:distance(A[o8],A[o1])>=d1*3?0.15:distance(A[o8],A[o1])>=d1*2?0.1:0.05
    }
  }
  return locationn;
  
}

function sunPosition5(){
	let v = randV(1);
    if (v < 0.125){
      sun5 = "TR";
    } else if (v < 0.25) {
      sun5 = "TL";
    } else if (v < 0.375) {
      sun5 = "BL";
    } else if (v < 0.5) {
      sun5 = "BR";
    } else if (v < 0.625) {
      sun5 = "T";
    } else if (v < 0.75) {
      sun5 = "B";
    } else if (v < 0.875) {
      sun5 = "R";
    } else {
      sun5 = "L";
    }
	return sun5;
}

function walls5(o1,o2,o3,o4,o5,o6,o7,o8,topL,topR,rightT,rightB,botR,botL,leftB,leftT) {
  let pain = 1;
  for (let i=0; i<5; i++) {
    if (
      pain > 3 &&
      (        
        A[o2+topR].y>A[o3+rightT].y ||
        A[o4+rightB].y>A[o5+botR].y ||
        A[o7+leftB].y>A[o6+botL].y ||
        A[o1+topL].y>A[o8+leftT].y ||
        A[o8+leftT].y>A[o7+leftB].y ||
        A[o3+rightT].y>A[o4+rightB].y ||
        A[o6+botL].x-A[o7+leftB].x>-d1 ||
        A[o4+rightB].x-A[o5+botR].x>-d1 ||
        A[o1+topL].x-A[o8+leftT].x>-d1 ||
        A[o3+rightT].x-A[o2+topR].x>-d1
      )
    ) {
      pain = pain + 0;
    } else {
      if (
        distance(A[o1+topL],A[o2+topR])>d1/2 &&
        distance(A[o2+topR],A[o3+rightT])>d1/2 &&
        distance(A[o3+rightT],A[o4+rightB])>d1/2 && 
        distance(A[o4+rightB],A[o5+botR])>d1/2 &&
        distance(A[o5+botR],A[o6+botL])>d1/2 &&
        distance(A[o6+botL],A[o7+leftB])>d1/2 &&
        distance(A[o7+leftB],A[o8+leftT])>d1/2 &&
        distance(A[o8+leftT],A[o1+topL])>d1/2 &&
        A[o5+botR].x-A[o6+botL].x>0 &&
        A[o2+topR].x-A[o1+topL].x>0
      ) {
        pain = pain + 1;
      } else {
        pain = pain + 0;
      }
    }
    topL = topL + 98 + 1;
    topR = topR + 98 - 1;
    botR = botR - 98 - 1;
    botL = botL - 98 + 1;
    rightT = rightT - 4 + 49;
    rightB = rightB - 4 - 49;
    leftB = leftB + 4 - 49;
    leftT = leftT + 4 + 49;
  }
  return pain;
}




function draw() 
{	
    
	if (num == 0 || num%div == 0)
	{
        
        d1 = randRangee(len/10, len/8)
      
        ww6 = randV(1);
        ww5 = randV(1);
        ww4 = randV(1);
        ww3 = randV(1);
        ww2 = randV(1);
        ww1 = randV(1);
        
        let c = color(colorr);
        
        c.setAlpha(20);
       
        img.fill(c);
      
        div = 10;
        
        step = 0;
      
        gridd();
      
        
        
        //SQUARE
          s1a = randRange(8, 49, 33, 5);
            s1 = s1a[round(randV(1)*(s1a.length-1))];
              if(s1 === undefined) {
                s1=24;
              }
          s2a = randRange(338, 49, 5, 13);
            s2 = s2a[round(randV(1)*(s2a.length-1))];
              if(s2 === undefined) {
                s2=636;
              }
          s3a = randRange(988, 49, 33, 5);
            s3 = s3a[round(randV(1)*(s3a.length-1))];
              if(s3 === undefined) {
                s3=1200;
              }   
          s4a = randRange(294, 49, 5, 13);
            s4 = s4a[round(randV(1)*(s4a.length-1))];
              if(s4 === undefined) {
                s4=588;
              }
      
        //TRIANGLE
          t1a = randRange(0, 49, 17, 5);
            t1 = t1a[round(randV(1)*(t1a.length-1))];
              if(t1 === undefined) {
                t1=0;
              }
          t2a = randRange(32, 49, 17, 5);
            t2 = t2a[round(randV(1)*(t2a.length-1))];
              if(t2 === undefined) {
                t2=48;
              }
          t3a = randRange(996, 49, 17, 5);
            t3 = t3a[round(randV(1)*(t3a.length-1))];
              if(t3 === undefined) {
                t3=1200;
              }  
        
         
       //PENTAGON
          p1a = randRange(12, 49, 25, 5);
            p1 = p1a[round(randV(1)*(p1a.length-1))];
              if(p1 === undefined) {
                p1=24;
              }
          p2a = randRange(289, 49, 5, 15);
            p2 = p2a[round(randV(1)*(p2a.length-1))];
              if(p2 === undefined) {
                p2=538;
              }  
          p3a = randRange(1006, 49, 17, 5);
            p3 = p3a[round(randV(1)*(p3a.length-1))];
              if(p3 === undefined) {
                p3=1212;
              }  
          p4a = randRange(986, 49, 17, 5);
            p4 = p4a[round(randV(1)*(p4a.length-1))];
              if(p4 === undefined) {
                p4=1188;
              }
          pp5a = randRange(245, 49, 5, 15);
            pp5 = pp5a[round(randV(1)*(pp5a.length-1))];
              if(pp5 === undefined) {
                pp5=490;
              }
        
      
      // HEXAGON
          h1a = randRange(8, 49, 13, 5);
            h1 = h1a[round(randV(1)*(h1a.length-1))];
              if(h1 === undefined) {
                h1=12;
              }
          h2a = randRange(28, 49, 13, 5);
            h2 = h2a[round(randV(1)*(h2a.length-1))];
              if(h2 === undefined) {
                h2=36;
              }
          h3a = randRange(338, 49, 5, 13);
            h3 = h3a[round(randV(1)*(h3a.length-1))];
              if(h3 === undefined) {
                h3=636;
              }
          h4a = randRange(1008, 49, 13, 5);
            h4 = h4a[round(randV(1)*(h4a.length-1))];
              if(h4 === undefined) {
                h4=1212;
              }
          h5a = randRange(988, 49, 13, 5);
            h5 = h5a[round(randV(1)*(h5a.length-1))];
              if(h5 === undefined) {
                h5=1188;
              }
          h6a = randRange(294, 49, 5, 13);
            h6 = h6a[round(randV(1)*(h6a.length-1))];
              if(h6 === undefined) {
                h6=588;
              }
    
        
      // OCTAGON
          o1a = randRange(8, 49, 13, 5);
            o1 = o1a[round(randV(1)*(o1a.length-1))];
              if(o1 === undefined) {
                o1=16;
              }
          o2a = randRange(28, 49, 13, 5);
            o2 = o2a[round(randV(1)*(o2a.length-1))];
              if(o2 === undefined) {
                o2=32;
              }
          o3a = randRange(240, 49, 5, 7);
            o3 = o3a[round(randV(1)*(o3a.length-1))];
              if(o3 === undefined) {
                o3=440;
              }
          o4a = randRange(730, 49, 5, 7);
            o4 = o4a[round(randV(1)*(o4a.length-1))];
              if(o4 === undefined) {
                o4=832;
              }
          o5a = randRange(1008, 49, 13, 5);
            o5 = o5a[round(randV(1)*(o5a.length-1))];
              if(o5 === undefined) {
                o5=1208;
              }
          o6a = randRange(988, 49, 13, 5);
            o6 = o6a[round(randV(1)*(o6a.length-1))];
              if(o6 === undefined) {
                o6=1192;
              }
          o7a = randRange(686, 49, 5, 7);
            o7 = o7a[round(randV(1)*(o7a.length-1))];
              if(o7 === undefined) {
                o7=784;
              }
          o8a = randRange(196, 49, 5, 7);
            o8 = o8a[round(randV(1)*(o8a.length-1))];
              if(o8 === undefined) {
                o8=392;
              }
      
	}
    // console.log("div= " + div)
  
      
      {     
		img.push();       
        img.translate(0,(step++)*slen/3); 
        // console.log("step= " + step);
      
      
        
        
        let lenn = 1000
        
        
        
		if (shp == "square") {
    
             let top = 0;
             let right = 0;
             let bottom = 0;
             let left = 0;
             let shade1 = 0.2;
             let shade = 0.2;
             sunn(sun);
             let numWalls = walls(s1,s2,s3,s4,top, right,bottom,left);
            for (let i=0; i<numWalls-1; i++) {
               img.push()
               img.translate(0,elevation?(-i*100):0)
               for (let i=0; i<lenn; i++) {
                  
                  squ(s1,s2,s3,s4,top, right,bottom,left,shade1,shade);
                  
               }
               img.pop() 
              
               
               top = top + 98 + test1(s1);
               right = right + ((A[s2].y-A[s1].y)<=(d1+d1/2) || (A[s3].y-A[s2].y)<=(d1+d1/2)?test2(s2):0) - 3;
               bottom = bottom - 98 + test1(s3);
               left = left + ((A[s4].y-A[s1].y)<=(d1+d1/2) || (A[s3].y-A[s4].y)<=(d1+d1/2)?test2(s4):0) + 3;
               if(i>0) {shade1 = shade1 - 0.06}
               if(i>0) {shade = shade - 0.01}
            }
          
        } else if (shp == "triangle") {
            
            let left = 0;
            let right = 0;
            let bottom = 0;
            let shade1 = 0.2;
            let shade = 0.2;
            sunn2(sun2);
            let numWalls = walls2(t1,t2,t3,left,right, bottom);
            for (let i=0; i<numWalls-1; i++) {
               img.push()
               img.translate(0,elevation?(-i*100):0)
               for (let i=0; i<lenn; i++) {
                  tri(t1,t2,t3,left,right,bottom,shade1, shade);
               }
               img.pop()
                              
               left = left + 98 + 4;
               right = right + 98 - 4;
               bottom = bottom - 98 + test4(t3,bottom);
              
               if(i>0) {shade1 = shade1 - 0.08}
               if(sun2 == "T" && distance(A[t2+right],A[t1+left])<=d1*1.5) {shade1=shade1-0.06}
               if(sun2 == "R" && distance(A[t2+right],A[t3+bottom])<=d1*1.5) {shade1=shade1-0.06}
               if(sun2 == "L" && distance(A[t1+left],A[t3+bottom])<=d1*1.5) {shade1=shade1-0.06}
               if(i>0) {shade = shade - 0.02}
              
            }
  
        } else if (shp == "pentagon") {
            
            let top = 0;
            let right = 0;
            let bottom3 = 0;
            let bottom4 = 0;
            let left = 0;
            let shade1 = 0.2;
            let shade = 0.2;
            sunn3(sun3);
            let numWalls = walls3(p1, p2, p3, p4, pp5, top, right, bottom3, bottom4, left);
            for (let i=0; i<numWalls-1; i++) {
               img.push()
               img.translate(0,elevation?(-i*100):0)
               for (let i=0; i<lenn; i++) {
                  pen(p1, p2, p3, p4, pp5, top, right, bottom3, bottom4, left, shade1, shade);
               }
               img.pop()
                              
               top = top + 98 + testp1(p1);
               right = right - 4 + testpp(p2);
               left = left + 4 + testpp(pp5);
               bottom3 = bottom3 - 98 - 2;
               bottom4 = bottom4 - 98 + 2;
               if(i>0) {shade1 = shade1 - 0.06}
               if(i>0) {shade = shade - 0.04}
            }
                        
        
      } else if (shp == "hexagon") {
            let topL = 0;
            let topR = 0;
            let right = 0;
            let botR = 0;
            let botL = 0;
            let left = 0;
            let shade1 = 0.2;
            let shade = 0.2;
            sunn4(sun4);
            let numWalls = walls4(h1,h2,h3,h4,h5,h6,topL,topR,right,botR,botL,left);
            for (let i=0; i<numWalls-1; i++) {
               img.push()
               img.translate(0,elevation?(-i*100):0)
               for (let i=0; i<lenn; i++) {                      hexx(h1,h2,h3,h4,h5,h6,topL,topR,right,botR,botL,left,shade1,shade);
               }     
               img.pop()
              topL = topL + 98 + 2;
              topR = topR + 98 - 2;
              right = right - 4 + testh(h3);
              left = left + 4 + testh(h6);
              botR = botR - 98 - 2;
              botL = botL - 98 + 2;
              if(i>0) {shade1 = shade1 - 0.06}
              if(i>0) {shade = shade - 0.04}
            }
        
      } else if (shp == "octagon") {
            let topL = 0;
            let topR = 0;
            let rightT = 0;
            let rightB = 0;
            let botR = 0;
            let botL = 0;
            let leftB = 0;
            let leftT = 0;
            let shade1 = 0.2;
            let shade = 0.2;
            sunn5(sun5);
            let numWalls = walls5(o1,o2,o3,o4,o5,o6,o7,o8,topL,topR,rightT,rightB,botR,botL,leftB,leftT);
            for (let i=0; i<numWalls-1; i++) {
               img.push()
               img.translate(0,elevation?(-i*100):0)
               for (let i=0; i<lenn; i++) {                      octt(o1,o2,o3,o4,o5,o6,o7,o8,topL,topR,rightT,rightB,botR,botL,leftB,leftT,shade1,shade);
               }    
               img.pop()
              
              topL = topL + 98 + 1;
              topR = topR + 98 - 1;
              botR = botR - 98 - 1;
              botL = botL - 98 + 1;
              rightT = rightT - 4 + 49;
              rightB = rightB - 4 - 49;
              leftB = leftB + 4 - 49;
              leftT = leftT + 4 + 49;
                            
              if(i>0) {shade1 = shade1 - 0.06}
              if(i>0) {shade = shade - 0.04}
            }
        
      } else {
           for (let i = 0; i < lenn * 5; i++){
             
             let sz = randV(slen * 0.15);
             
             
             // LAYER 6
             if (ww6 < 0.6) {
             img.push()
             img.translate(0,(elevation?getDirr(6):0))
             let ang61 = lerp(0, aa, randV(1));
             let a61 = d1 * cos(ang61);
             let b61 = (d1/2) * sin(ang61);
             img.square(len+a61, len+b61, (aa<(PI/10)*6?sz*0.4:sz));
             
             let ang62 = lerp(TWO_PI, (aa + PI/10), randV(1));
             let a62 = d1 * cos(ang62);
             let b62 = (d1/2) * sin(ang62);
             img.square(len+a62, len+b62, (aa>(PI/10)*13?sz*0.3:sz));
             img.pop()
             }
            
             
             // LAYER 5
             if (ww5 < 0.6) {
             img.push()
             img.translate(0,(elevation?getDirr(5):0))
             let ang51 = lerp(0, bb, randV(1));
             let a51 = d1*2 * cos(ang51);
             let b51 = d1 * sin(ang51);
             img.square(len+a51, len+b51, (bb<(PI/10)*6?sz:sz*1.6));
             
             let ang52 = lerp(TWO_PI, (bb + PI/10), randV(1));
             let a52 = d1*2 * cos(ang52);
             let b52 = d1 * sin(ang52);
             img.square(len+a52, len+b52, (bb>(PI/10)*13?sz*0.4:sz*1.6));
             img.pop()
             }
             
             // LAYER 4
             if (ww4 < 0.6) {
             img.push()
             img.translate(0,(elevation?getDirr(4):0))
             let ang41 = lerp(0, cc, randV(1));
             let a41 = d1*3 * cos(ang41);
             let b41 = d1*1.5 * sin(ang41);
             img.square(len+a41, len+b41, (cc<(PI/10)*6?sz*0.4:sz*1.6));
             
             let ang42 = lerp(TWO_PI, (cc + PI/10), randV(1));
             let a42 = d1*3 * cos(ang42);
             let b42 = d1*1.5 * sin(ang42);
             img.square(len+a42, len+b42, (cc>(PI/10)*13?sz*0.4:sz*1.6));
             img.pop()
             }
             
             // LAYER 3
             if (ww3 < 0.9) {
             img.push()
             img.translate(0,(elevation?getDirr(3):0))
             let ang31 = lerp(0, dd, randV(1));
             let a31 = d1*4 * cos(ang31);
             let b31 = d1*2 * sin(ang31);
             img.square(len+a31, len+b31, (dd<(PI/10)*6?sz*0.8:sz*2));
             
             let ang32 = lerp(TWO_PI, (dd + PI/10), randV(1));
             let a32 = d1*4 * cos(ang32);
             let b32 = d1*2 * sin(ang32);
             img.square(len+a32, len+b32, (dd>(PI/10)*13?sz*0.6:sz*2));
             img.pop()
             }
             
             // LAYER 2
             if (ww2 < 0.6) {
             img.push()
             img.translate(0,(elevation?getDirr(2):0))
             let ang21 = lerp(0, ee, randV(1));
             let a21 = d1*5 * cos(ang21);
             let b21 = d1*2.5 * sin(ang21);
             img.square(len+a21, len+b21, (ee<(PI/10)*6?sz*0.8:sz*2));
             
             let ang22 = lerp(TWO_PI, (ee + PI/10), randV(1));
             let a22 = d1*5 * cos(ang22);
             let b22 = d1*2.5 * sin(ang22);
             img.square(len+a22, len+b22, (ee>(PI/10)*13?sz*0.6:sz*2));
             img.pop()
             }
             
             // LAYER 1
             if (ww1 < 0.6) {
             img.push()
             img.translate(0,(elevation?getDirr(1):0))
             let ang11 = lerp(0, ff, randV(1));
             let a11 = d1*6 * cos(ang11);
             let b11 = d1*3 * sin(ang11);
             img.square(len+a11, len+b11, (ff<(PI/10)*6?sz*0.8:sz*2));
             
             let ang12 = lerp(TWO_PI, (ff + PI/10), randV(1));
             let a12 = d1*6 * cos(ang12);
             let b12 = d1*3 * sin(ang12);
             img.square(len+a12, len+b12, (ff>(PI/10)*13?sz*0.6:sz*2));
             img.pop()
             }
           }
        }
			
              img.pop();
            
		}
		
	
	num++;
    // console.log("num= " + num)
	
	image(img,0,0,width,height);
	
	if (num == 10) 
	{
        //$fx.preview();
		noLoop();
	}
  
	
}

function windowResized() {
  
  resizeCanvas(windowWidth,windowWidth,true);
  if (height > windowHeight) {
   resizeCanvas(windowHeight,windowHeight,true);
  }
  image(img,0,0,width,height);
}

