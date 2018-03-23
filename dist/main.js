!function(t){var e={};function s(i){if(e[i])return e[i].exports;var h=e[i]={i:i,l:!1,exports:{}};return t[i].call(h.exports,h,h.exports,s),h.l=!0,h.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e,s){t.exports=function(){"use strict";class t{constructor(t,e,s,i){this.RoughSegmentRelationConst={LEFT:0,RIGHT:1,INTERSECTS:2,AHEAD:3,BEHIND:4,SEPARATE:5,UNDEFINED:6},this.px1=t,this.py1=e,this.px2=s,this.py2=i,this.xi=Number.MAX_VALUE,this.yi=Number.MAX_VALUE,this.a=i-e,this.b=t-s,this.c=s*e-t*i,this._undefined=0==this.a&&0==this.b&&0==this.c}isUndefined(){return this._undefined}compare(t){if(this.isUndefined()||t.isUndefined())return this.RoughSegmentRelationConst.UNDEFINED;var e=Number.MAX_VALUE,s=Number.MAX_VALUE,i=0,h=0,a=this.a,n=this.b,r=this.c;return Math.abs(n)>1e-5&&(e=-a/n,i=-r/n),Math.abs(t.b)>1e-5&&(s=-t.a/t.b,h=-t.c/t.b),e==Number.MAX_VALUE?s==Number.MAX_VALUE?-r/a!=-t.c/t.a?this.RoughSegmentRelationConst.SEPARATE:this.py1>=Math.min(t.py1,t.py2)&&this.py1<=Math.max(t.py1,t.py2)?(this.xi=this.px1,this.yi=this.py1,this.RoughSegmentRelationConst.INTERSECTS):this.py2>=Math.min(t.py1,t.py2)&&this.py2<=Math.max(t.py1,t.py2)?(this.xi=this.px2,this.yi=this.py2,this.RoughSegmentRelationConst.INTERSECTS):this.RoughSegmentRelationConst.SEPARATE:(this.xi=this.px1,this.yi=s*this.xi+h,(this.py1-this.yi)*(this.yi-this.py2)<-1e-5||(t.py1-this.yi)*(this.yi-t.py2)<-1e-5?this.RoughSegmentRelationConst.SEPARATE:Math.abs(t.a)<1e-5&&(t.px1-this.xi)*(this.xi-t.px2)<-1e-5?this.RoughSegmentRelationConst.SEPARATE:this.RoughSegmentRelationConst.INTERSECTS):s==Number.MAX_VALUE?(this.xi=t.px1,this.yi=e*this.xi+i,(t.py1-this.yi)*(this.yi-t.py2)<-1e-5||(this.py1-this.yi)*(this.yi-this.py2)<-1e-5?this.RoughSegmentRelationConst.SEPARATE:Math.abs(a)<1e-5&&(this.px1-this.xi)*(this.xi-this.px2)<-1e-5?this.RoughSegmentRelationConst.SEPARATE:this.RoughSegmentRelationConst.INTERSECTS):e==s?i!=h?this.RoughSegmentRelationConst.SEPARATE:this.px1>=Math.min(t.px1,t.px2)&&this.px1<=Math.max(t.py1,t.py2)?(this.xi=this.px1,this.yi=this.py1,this.RoughSegmentRelationConst.INTERSECTS):this.px2>=Math.min(t.px1,t.px2)&&this.px2<=Math.max(t.px1,t.px2)?(this.xi=this.px2,this.yi=this.py2,this.RoughSegmentRelationConst.INTERSECTS):this.RoughSegmentRelationConst.SEPARATE:(this.xi=(h-i)/(e-s),this.yi=e*this.xi+i,(this.px1-this.xi)*(this.xi-this.px2)<-1e-5||(t.px1-this.xi)*(this.xi-t.px2)<-1e-5?this.RoughSegmentRelationConst.SEPARATE:this.RoughSegmentRelationConst.INTERSECTS)}getLength(){return this._getLength(this.px1,this.py1,this.px2,this.py2)}_getLength(t,e,s,i){var h=s-t,a=i-e;return Math.sqrt(h*h+a*a)}}class e{constructor(e,s,i,h,a,n,r,l){this.top=e,this.bottom=s,this.left=i,this.right=h,this.gap=a,this.sinAngle=n,this.tanAngle=l,Math.abs(n)<1e-4?this.pos=i+a:Math.abs(n)>.9999?this.pos=e+a:(this.deltaX=(s-e)*Math.abs(l),this.pos=i-Math.abs(this.deltaX),this.hGap=Math.abs(a/r),this.sLeft=new t(i,s,i,e),this.sRight=new t(h,s,h,e))}getNextLine(){if(Math.abs(this.sinAngle)<1e-4){if(this.pos<this.right){let t=[this.pos,this.top,this.pos,this.bottom];return this.pos+=this.gap,t}}else if(Math.abs(this.sinAngle)>.9999){if(this.pos<this.bottom){let t=[this.left,this.pos,this.right,this.pos];return this.pos+=this.gap,t}}else{let e=this.pos-this.deltaX/2,s=this.pos+this.deltaX/2,i=this.bottom,h=this.top;if(this.pos<this.right+this.deltaX){for(;e<this.left&&s<this.left||e>this.right&&s>this.right;)if(this.pos+=this.hGap,e=this.pos-this.deltaX/2,s=this.pos+this.deltaX/2,this.pos>this.right+this.deltaX)return null;let a=new t(e,i,s,h);2==a.compare(this.sLeft)&&(e=a.xi,i=a.yi),2==a.compare(this.sRight)&&(s=a.xi,h=a.yi),this.tanAngle>0&&(e=this.right-(e-this.left),s=this.right-(s-this.left));let n=[e,i,s,h];return this.pos+=this.hGap,n}}return null}}class s{constructor(t,e){this.type=t,this.text=e}isType(t){return this.type===t}}class i{constructor(t){this.PARAMS={A:["rx","ry","x-axis-rotation","large-arc-flag","sweep-flag","x","y"],a:["rx","ry","x-axis-rotation","large-arc-flag","sweep-flag","x","y"],C:["x1","y1","x2","y2","x","y"],c:["x1","y1","x2","y2","x","y"],H:["x"],h:["x"],L:["x","y"],l:["x","y"],M:["x","y"],m:["x","y"],Q:["x1","y1","x","y"],q:["x1","y1","x","y"],S:["x2","y2","x","y"],s:["x2","y2","x","y"],T:["x","y"],t:["x","y"],V:["y"],v:["y"],Z:[],z:[]},this.COMMAND=0,this.NUMBER=1,this.EOD=2,this.segments=[],this.d=t||"",this.parseData(t),this.processPoints()}loadFromSegments(t){this.segments=t,this.processPoints()}processPoints(){let t=null,e=[0,0];for(let s=0;s<this.segments.length;s++){let i=this.segments[s];switch(i.key){case"M":case"L":case"T":i.point=[i.data[0],i.data[1]];break;case"m":case"l":case"t":i.point=[i.data[0]+e[0],i.data[1]+e[1]];break;case"H":i.point=[i.data[0],e[1]];break;case"h":i.point=[i.data[0]+e[0],e[1]];break;case"V":i.point=[e[0],i.data[0]];break;case"v":i.point=[e[0],i.data[0]+e[1]];break;case"z":case"Z":t&&(i.point=[t[0],t[1]]);break;case"C":i.point=[i.data[4],i.data[5]];break;case"c":i.point=[i.data[4]+e[0],i.data[5]+e[1]];break;case"S":i.point=[i.data[2],i.data[3]];break;case"s":i.point=[i.data[2]+e[0],i.data[3]+e[1]];break;case"Q":i.point=[i.data[2],i.data[3]];break;case"q":i.point=[i.data[2]+e[0],i.data[3]+e[1]];break;case"A":i.point=[i.data[5],i.data[6]];break;case"a":i.point=[i.data[5]+e[0],i.data[6]+e[1]]}"m"!==i.key&&"M"!==i.key||(t=null),i.point&&(e=i.point,t||(t=i.point)),"z"!==i.key&&"Z"!==i.key||(t=null)}}get closed(){if(void 0===this._closed){this._closed=!1;for(let t of this.segments)"z"===t.key.toLowerCase()&&(this._closed=!0)}return this._closed}parseData(t){var e=this.tokenize(t),s=0,i=e[s],h="BOD";for(this.segments=new Array;!i.isType(this.EOD);){var a,n=new Array;if("BOD"==h){if("M"!=i.text&&"m"!=i.text)return this.parseData("M0,0"+t);s++,a=this.PARAMS[i.text].length,h=i.text}else i.isType(this.NUMBER)?a=this.PARAMS[h].length:(s++,a=this.PARAMS[i.text].length,h=i.text);if(s+a<e.length){for(var r=s;r<s+a;r++){var l=e[r];if(!l.isType(this.NUMBER))return void console.error("Parameter type is not a number: "+h+","+l.text);n[n.length]=l.text}var o;if(!this.PARAMS[h])return void console.error("Unsupported segment type: "+h);o={key:h,data:n},this.segments.push(o),i=e[s+=a],"M"==h&&(h="L"),"m"==h&&(h="l")}else console.error("Path data ended before all parameters were found")}}tokenize(t){for(var e=new Array;""!=t;)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]=new s(this.COMMAND,RegExp.$1),t=t.substr(RegExp.$1.length);else{if(!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return console.error("Unrecognized segment command: "+t),null;e[e.length]=new s(this.NUMBER,parseFloat(RegExp.$1)),t=t.substr(RegExp.$1.length)}return e[e.length]=new s(this.EOD,null),e}}class h{constructor(t){this.d=t,this.parsed=new i(t),this._position=[0,0],this.bezierReflectionPoint=null,this.quadReflectionPoint=null,this._first=null}get segments(){return this.parsed.segments}get closed(){return this.parsed.closed}get linearPoints(){if(!this._linearPoints){const t=[];let e=[];for(let s of this.parsed.segments){let i=s.key.toLowerCase();("m"!==i&&"z"!==i||(e.length&&(t.push(e),e=[]),"z"!==i))&&s.point&&e.push(s.point)}e.length&&(t.push(e),e=[]),this._linearPoints=t}return this._linearPoints}get first(){return this._first}set first(t){this._first=t}setPosition(t,e){this._position=[t,e],this._first||(this._first=[t,e])}get position(){return this._position}get x(){return this._position[0]}get y(){return this._position[1]}}class a{constructor(t,e,s,i,h,a){const n=Math.PI/180;if(this._segIndex=0,this._numSegs=0,t[0]==e[0]&&t[1]==e[1])return;this._rx=Math.abs(s[0]),this._ry=Math.abs(s[1]),this._sinPhi=Math.sin(i*n),this._cosPhi=Math.cos(i*n);var r,l=this._cosPhi*(t[0]-e[0])/2+this._sinPhi*(t[1]-e[1])/2,o=-this._sinPhi*(t[0]-e[0])/2+this._cosPhi*(t[1]-e[1])/2,c=this._rx*this._rx*this._ry*this._ry-this._rx*this._rx*o*o-this._ry*this._ry*l*l;if(c<0){let t=Math.sqrt(1-c/(this._rx*this._rx*this._ry*this._ry));this._rx=t,this._ry=t,r=0}else r=(h==a?-1:1)*Math.sqrt(c/(this._rx*this._rx*o*o+this._ry*this._ry*l*l));let f=r*this._rx*o/this._ry,p=-r*this._ry*l/this._rx;this._C=[0,0],this._C[0]=this._cosPhi*f-this._sinPhi*p+(t[0]+e[0])/2,this._C[1]=this._sinPhi*f+this._cosPhi*p+(t[1]+e[1])/2,this._theta=this.calculateVectorAngle(1,0,(l-f)/this._rx,(o-p)/this._ry);let u=this.calculateVectorAngle((l-f)/this._rx,(o-p)/this._ry,(-l-f)/this._rx,(-o-p)/this._ry);!a&&u>0?u-=2*Math.PI:a&&u<0&&(u+=2*Math.PI),this._numSegs=Math.ceil(Math.abs(u/(Math.PI/2))),this._delta=u/this._numSegs,this._T=8/3*Math.sin(this._delta/4)*Math.sin(this._delta/4)/Math.sin(this._delta/2),this._from=t}getNextSegment(){var t,e,s;if(this._segIndex==this._numSegs)return null;let i=Math.cos(this._theta),h=Math.sin(this._theta),a=this._theta+this._delta,n=Math.cos(a),r=Math.sin(a);return s=[this._cosPhi*this._rx*n-this._sinPhi*this._ry*r+this._C[0],this._sinPhi*this._rx*n+this._cosPhi*this._ry*r+this._C[1]],t=[this._from[0]+this._T*(-this._cosPhi*this._rx*h-this._sinPhi*this._ry*i),this._from[1]+this._T*(-this._sinPhi*this._rx*h+this._cosPhi*this._ry*i)],e=[s[0]+this._T*(this._cosPhi*this._rx*r+this._sinPhi*this._ry*n),s[1]+this._T*(this._sinPhi*this._rx*r-this._cosPhi*this._ry*n)],this._theta=a,this._from=[s[0],s[1]],this._segIndex++,{cp1:t,cp2:e,to:s}}calculateVectorAngle(t,e,s,i){let h=Math.atan2(e,t),a=Math.atan2(i,s);return a>=h?a-h:2*Math.PI-(h-a)}}class n{constructor(t,e){this.sets=t,this.closed=e}fit(t){let e=[];for(const s of this.sets){let i=s.length,h=Math.floor(t*i);if(h<5){if(i<=5)continue;h=5}e.push(this.reduce(s,h))}let s="";for(const t of e){for(let e=0;e<t.length;e++){let i=t[e];s+=0===e?"M"+i[0]+","+i[1]:"L"+i[0]+","+i[1]}this.closed&&(s+="z ")}return s}distance(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}reduce(t,e){if(t.length<=e)return t;let s=t.slice(0);for(;s.length>e;){let t=-1,e=-1;for(let i=1;i<s.length-1;i++){let h=this.distance(s[i-1],s[i]),a=this.distance(s[i],s[i+1]),n=this.distance(s[i-1],s[i+1]),r=(h+a+n)/2,l=Math.sqrt(r*(r-h)*(r-a)*(r-n));(t<0||l<t)&&(t=l,e=i)}if(!(e>0))break;s.splice(e,1)}return s}}class r{line(t,e,s,i,h){let a=this._doubleLine(t,e,s,i,h);return{type:"path",ops:a}}linearPath(t,e,s){const i=(t||[]).length;if(i>2){let h=[];for(let e=0;e<i-1;e++)h=h.concat(this._doubleLine(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&&(h=h.concat(this._doubleLine(t[i-1][0],t[i-1][1],t[0][0],t[0][1],s))),{type:"path",ops:h}}if(2===i)return this.line(t[0][0],t[0][1],t[1][0],t[1][1],s)}polygon(t,e){return this.linearPath(t,!0,e)}rectangle(t,e,s,i,h){let a=[[t,e],[t+s,e],[t+s,e+i],[t,e+i]];return this.polygon(a,h)}curve(t,e){let s=this._curveWithOffset(t,1*(1+.2*e.roughness),e),i=this._curveWithOffset(t,1.5*(1+.22*e.roughness),e);return{type:"path",ops:s.concat(i)}}ellipse(t,e,s,i,h){const a=2*Math.PI/h.curveStepCount;let n=Math.abs(s/2),r=Math.abs(i/2);n+=this._getOffset(.05*-n,.05*n,h),r+=this._getOffset(.05*-r,.05*r,h);let l=this._ellipse(a,t,e,n,r,1,a*this._getOffset(.1,this._getOffset(.4,1,h),h),h),o=this._ellipse(a,t,e,n,r,1.5,0,h);return{type:"path",ops:l.concat(o)}}arc(t,e,s,i,h,a,n,r,l){let o=t,c=e,f=Math.abs(s/2),p=Math.abs(i/2);f+=this._getOffset(.01*-f,.01*f,l),p+=this._getOffset(.01*-p,.01*p,l);let u=h,g=a;for(;u<0;)u+=2*Math.PI,g+=2*Math.PI;g-u>2*Math.PI&&(u=0,g=2*Math.PI);let _=2*Math.PI/l.curveStepCount,d=Math.min(_/2,(g-u)/2),y=this._arc(d,o,c,f,p,u,g,1,l),x=this._arc(d,o,c,f,p,u,g,1.5,l),b=y.concat(x);return n&&(r?b=(b=b.concat(this._doubleLine(o,c,o+f*Math.cos(u),c+p*Math.sin(u),l))).concat(this._doubleLine(o,c,o+f*Math.cos(g),c+p*Math.sin(g),l)):(b.push({op:"lineTo",data:[o,c]}),b.push({op:"lineTo",data:[o+f*Math.cos(u),c+p*Math.sin(u)]}))),{type:"path",ops:b}}hachureFillArc(t,e,s,i,h,a,n){let r=t,l=e,o=Math.abs(s/2),c=Math.abs(i/2);o+=this._getOffset(.01*-o,.01*o,n),c+=this._getOffset(.01*-c,.01*c,n);let f=h,p=a;for(;f<0;)f+=2*Math.PI,p+=2*Math.PI;p-f>2*Math.PI&&(f=0,p=2*Math.PI);let u=(p-f)/n.curveStepCount,g=[],_=[];for(let t=f;t<=p;t+=u)g.push(r+o*Math.cos(t)),_.push(l+c*Math.sin(t));return g.push(r+o*Math.cos(p)),_.push(l+c*Math.sin(p)),g.push(r),_.push(l),this.hachureFillShape(g,_,n)}solidFillShape(t,e,s){let i=[];if(t&&e&&t.length&&e.length&&t.length===e.length){let a=s.maxRandomnessOffset||0;const n=t.length;if(n>2){i.push({op:"move",data:[t[0]+this._getOffset(-a,a,s),e[0]+this._getOffset(-a,a,s)]});for(var h=1;h<n;h++)i.push({op:"lineTo",data:[t[h]+this._getOffset(-a,a,s),e[h]+this._getOffset(-a,a,s)]})}}return{type:"fillPath",ops:i}}hachureFillShape(t,s,i){let h=[];if(t&&s&&t.length&&s.length){let a=t[0],n=t[0],r=s[0],l=s[0];for(let e=1;e<t.length;e++)a=Math.min(a,t[e]),n=Math.max(n,t[e]),r=Math.min(r,s[e]),l=Math.max(l,s[e]);const o=i.hachureAngle;let c=i.hachureGap;c<0&&(c=4*i.strokeWidth),c=Math.max(c,.1);const f=Math.PI/180,p=o%180*f,u=Math.cos(p),g=Math.sin(p),_=Math.tan(p),d=new e(r-1,l+1,a-1,n+1,c,g,u,_);let y;for(;null!=(y=d.getNextLine());){let e=this._getIntersectingLines(y,t,s);for(let t=0;t<e.length;t++)if(t<e.length-1){let s=e[t],a=e[t+1];h=h.concat(this._doubleLine(s[0],s[1],a[0],a[1],i))}}}return{type:"fillSketch",ops:h}}hachureFillEllipse(t,e,s,i,h){let a=[],n=Math.abs(s/2),r=Math.abs(i/2);n+=this._getOffset(.05*-n,.05*n,h),r+=this._getOffset(.05*-r,.05*r,h);let l=h.hachureAngle,o=h.hachureGap;o<=0&&(o=4*h.strokeWidth);let c=h.fillWeight;c<0&&(c=h.strokeWidth/2);const f=Math.PI/180;let p=l%180*f,u=Math.tan(p),g=r/n,_=Math.sqrt(g*u*g*u+1),d=g*u/_,y=1/_,x=o/(n*r/Math.sqrt(r*y*(r*y)+n*d*(n*d))/n),b=Math.sqrt(n*n-(t-n+x)*(t-n+x));for(var m=t-n+x;m<t+n;m+=x){b=Math.sqrt(n*n-(t-m)*(t-m));let s=this._affine(m,e-b,t,e,d,y,g),i=this._affine(m,e+b,t,e,d,y,g);a=a.concat(this._doubleLine(s[0],s[1],i[0],i[1],h))}return{type:"fillSketch",ops:a}}svgPath(t,e){t=(t||"").replace(/\n/g," ").replace(/(-)/g," -").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");let s=new h(t);if(e.simplification){let t=new n(s.linearPoints,s.closed),i=t.fit(e.simplification);s=new h(i)}let i=[],a=s.segments||[];for(let t=0;t<a.length;t++){let h=a[t],n=t>0?a[t-1]:null,r=this._processSegment(s,h,n,e);r&&r.length&&(i=i.concat(r))}return{type:"path",ops:i}}_bezierTo(t,e,s,i,h,a,n,r){let l=[],o=[r.maxRandomnessOffset||1,(r.maxRandomnessOffset||1)+.5],c=null;for(let f=0;f<2;f++)0===f?l.push({op:"move",data:[n.x,n.y]}):l.push({op:"move",data:[n.x+this._getOffset(-o[0],o[0],r),n.y+this._getOffset(-o[0],o[0],r)]}),c=[h+this._getOffset(-o[f],o[f],r),a+this._getOffset(-o[f],o[f],r)],l.push({op:"bcurveTo",data:[t+this._getOffset(-o[f],o[f],r),e+this._getOffset(-o[f],o[f],r),s+this._getOffset(-o[f],o[f],r),i+this._getOffset(-o[f],o[f],r),c[0],c[1]]});return n.setPosition(c[0],c[1]),l}_processSegment(t,e,s,i){let h=[];switch(e.key){case"M":case"m":{let s="m"===e.key;if(e.data.length>=2){let a=+e.data[0],n=+e.data[1];s&&(a+=t.x,n+=t.y);let r=1*(i.maxRandomnessOffset||0);a+=this._getOffset(-r,r,i),n+=this._getOffset(-r,r,i),t.setPosition(a,n),h.push({op:"move",data:[a,n]})}break}case"L":case"l":{let s="l"===e.key;if(e.data.length>=2){let a=+e.data[0],n=+e.data[1];s&&(a+=t.x,n+=t.y),h=h.concat(this._doubleLine(t.x,t.y,a,n,i)),t.setPosition(a,n)}break}case"H":case"h":{const s="h"===e.key;if(e.data.length){let a=+e.data[0];s&&(a+=t.x),h=h.concat(this._doubleLine(t.x,t.y,a,t.y,i)),t.setPosition(a,t.y)}break}case"V":case"v":{const s="v"===e.key;if(e.data.length){let a=+e.data[0];s&&(a+=t.y),h=h.concat(this._doubleLine(t.x,t.y,t.x,a,i)),t.setPosition(t.x,a)}break}case"Z":case"z":t.first&&(h=h.concat(this._doubleLine(t.x,t.y,t.first[0],t.first[1],i)),t.setPosition(t.first[0],t.first[1]),t.first=null);break;case"C":case"c":{const s="c"===e.key;if(e.data.length>=6){let a=+e.data[0],n=+e.data[1],r=+e.data[2],l=+e.data[3],o=+e.data[4],c=+e.data[5];s&&(a+=t.x,r+=t.x,o+=t.x,n+=t.y,l+=t.y,c+=t.y);let f=this._bezierTo(a,n,r,l,o,c,t,i);h=h.concat(f),t.bezierReflectionPoint=[o+(o-r),c+(c-l)]}break}case"S":case"s":{const a="s"===e.key;if(e.data.length>=4){let r=+e.data[0],l=+e.data[1],o=+e.data[2],c=+e.data[3];a&&(r+=t.x,o+=t.x,l+=t.y,c+=t.y);let f=r,p=l,u=s?s.key:"";var n=null;"c"!=u&&"C"!=u&&"s"!=u&&"S"!=u||(n=t.bezierReflectionPoint),n&&(f=n[0],p=n[1]);let g=this._bezierTo(f,p,r,l,o,c,t,i);h=h.concat(g),t.bezierReflectionPoint=[o+(o-r),c+(c-l)]}break}case"Q":case"q":{const s="q"===e.key;if(e.data.length>=4){let a=+e.data[0],n=+e.data[1],r=+e.data[2],l=+e.data[3];s&&(a+=t.x,r+=t.x,n+=t.y,l+=t.y);let o=1*(1+.2*i.roughness),c=1.5*(1+.22*i.roughness);h.push({op:"move",data:[t.x+this._getOffset(-o,o,i),t.y+this._getOffset(-o,o,i)]});let f=[r+this._getOffset(-o,o,i),l+this._getOffset(-o,o,i)];h.push({op:"qcurveTo",data:[a+this._getOffset(-o,o,i),n+this._getOffset(-o,o,i),f[0],f[1]]}),h.push({op:"move",data:[t.x+this._getOffset(-c,c,i),t.y+this._getOffset(-c,c,i)]}),f=[r+this._getOffset(-c,c,i),l+this._getOffset(-c,c,i)],h.push({op:"qcurveTo",data:[a+this._getOffset(-c,c,i),n+this._getOffset(-c,c,i),f[0],f[1]]}),t.setPosition(f[0],f[1]),t.quadReflectionPoint=[r+(r-a),l+(l-n)]}break}case"T":case"t":{const a="t"===e.key;if(e.data.length>=2){let r=+e.data[0],l=+e.data[1];a&&(r+=t.x,l+=t.y);let o=r,c=l,f=s?s.key:"";var n=null;"q"!=f&&"Q"!=f&&"t"!=f&&"T"!=f||(n=t.quadReflectionPoint),n&&(o=n[0],c=n[1]);let p=1*(1+.2*i.roughness),u=1.5*(1+.22*i.roughness);h.push({op:"move",data:[t.x+this._getOffset(-p,p,i),t.y+this._getOffset(-p,p,i)]});let g=[r+this._getOffset(-p,p,i),l+this._getOffset(-p,p,i)];h.push({op:"qcurveTo",data:[o+this._getOffset(-p,p,i),c+this._getOffset(-p,p,i),g[0],g[1]]}),h.push({op:"move",data:[t.x+this._getOffset(-u,u,i),t.y+this._getOffset(-u,u,i)]}),g=[r+this._getOffset(-u,u,i),l+this._getOffset(-u,u,i)],h.push({op:"qcurveTo",data:[o+this._getOffset(-u,u,i),c+this._getOffset(-u,u,i),g[0],g[1]]}),t.setPosition(g[0],g[1]),t.quadReflectionPoint=[r+(r-o),l+(l-c)]}break}case"A":case"a":{const s="a"===e.key;if(e.data.length>=7){let n=+e.data[0],r=+e.data[1],l=+e.data[2],o=+e.data[3],c=+e.data[4],f=+e.data[5],p=+e.data[6];if(s&&(f+=t.x,p+=t.y),f==t.x&&p==t.y)break;if(0==n||0==r)h=h.concat(this._doubleLine(t.x,t.y,f,p,i)),t.setPosition(f,p);else{i.maxRandomnessOffset;for(let e=0;e<1;e++){let e=new a([t.x,t.y],[f,p],[n,r],l,!!o,!!c),s=e.getNextSegment();for(;s;){let a=this._bezierTo(s.cp1[0],s.cp1[1],s.cp2[0],s.cp2[1],s.to[0],s.to[1],t,i);h=h.concat(a),s=e.getNextSegment()}}}}break}}return h}_getOffset(t,e,s){return s.roughness*(Math.random()*(e-t)+t)}_affine(t,e,s,i,h,a,n){var r=-s*a-i*h+s,l=n*(s*h-i*a)+i,o=a,c=h,f=-n*h,p=n*a;return[r+o*t+c*e,l+f*t+p*e]}_doubleLine(t,e,s,i,h){const a=this._line(t,e,s,i,h,!0,!1),n=this._line(t,e,s,i,h,!0,!0);return a.concat(n)}_line(t,e,s,i,h,a,n){const r=Math.pow(t-s,2)+Math.pow(e-i,2);let l=h.maxRandomnessOffset||0;l*l*100>r&&(l=Math.sqrt(r)/10);const o=l/2,c=.2+.2*Math.random();let f=h.bowing*h.maxRandomnessOffset*(i-e)/200,p=h.bowing*h.maxRandomnessOffset*(t-s)/200;f=this._getOffset(-f,f,h),p=this._getOffset(-p,p,h);let u=[];return a&&(n?u.push({op:"move",data:[t+this._getOffset(-o,o,h),e+this._getOffset(-o,o,h)]}):u.push({op:"move",data:[t+this._getOffset(-l,l,h),e+this._getOffset(-l,l,h)]})),n?u.push({op:"bcurveTo",data:[f+t+(s-t)*c+this._getOffset(-o,o,h),p+e+(i-e)*c+this._getOffset(-o,o,h),f+t+2*(s-t)*c+this._getOffset(-o,o,h),p+e+2*(i-e)*c+this._getOffset(-o,o,h),s+this._getOffset(-o,o,h),i+this._getOffset(-o,o,h)]}):u.push({op:"bcurveTo",data:[f+t+(s-t)*c+this._getOffset(-l,l,h),p+e+(i-e)*c+this._getOffset(-l,l,h),f+t+2*(s-t)*c+this._getOffset(-l,l,h),p+e+2*(i-e)*c+this._getOffset(-l,l,h),s+this._getOffset(-l,l,h),i+this._getOffset(-l,l,h)]}),u}_curve(t,e,s){const i=t.length;let h=[];if(i>3){const a=[],n=1-s.curveTightness;h.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<i;e++){const s=t[e];a[0]=[s[0],s[1]],a[1]=[s[0]+(n*t[e+1][0]-n*t[e-1][0])/6,s[1]+(n*t[e+1][1]-n*t[e-1][1])/6],a[2]=[t[e+1][0]+(n*t[e][0]-n*t[e+2][0])/6,t[e+1][1]+(n*t[e][1]-n*t[e+2][1])/6],a[3]=[t[e+1][0],t[e+1][1]],h.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}if(e&&2===e.length){let t=s.maxRandomnessOffset;h.push({ops:"lineTo",data:[e[0]+this._getOffset(-t,t,s),e[1]+ +this._getOffset(-t,t,s)]})}}else 3===i?(h.push({op:"move",data:[t[1][0],t[1][1]]}),h.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===i&&(h=h.concat(this._doubleLine(t[0][0],t[0][1],t[1][0],t[1][1],s)));return h}_ellipse(t,e,s,i,h,a,n,r){const l=this._getOffset(-.5,.5,r)-Math.PI/2,o=[];o.push([this._getOffset(-a,a,r)+e+.9*i*Math.cos(l-t),this._getOffset(-a,a,r)+s+.9*h*Math.sin(l-t)]);for(let n=l;n<2*Math.PI+l-.01;n+=t)o.push([this._getOffset(-a,a,r)+e+i*Math.cos(n),this._getOffset(-a,a,r)+s+h*Math.sin(n)]);return o.push([this._getOffset(-a,a,r)+e+i*Math.cos(l+2*Math.PI+.5*n),this._getOffset(-a,a,r)+s+h*Math.sin(l+2*Math.PI+.5*n)]),o.push([this._getOffset(-a,a,r)+e+.98*i*Math.cos(l+n),this._getOffset(-a,a,r)+s+.98*h*Math.sin(l+n)]),o.push([this._getOffset(-a,a,r)+e+.9*i*Math.cos(l+.5*n),this._getOffset(-a,a,r)+s+.9*h*Math.sin(l+.5*n)]),this._curve(o,null,r)}_curveWithOffset(t,e,s){const i=[];i.push([t[0][0]+this._getOffset(-e,e,s),t[0][1]+this._getOffset(-e,e,s)]),i.push([t[0][0]+this._getOffset(-e,e,s),t[0][1]+this._getOffset(-e,e,s)]);for(let h=1;h<t.length;h++)i.push([t[h][0]+this._getOffset(-e,e,s),t[h][1]+this._getOffset(-e,e,s)]),h===t.length-1&&i.push([t[h][0]+this._getOffset(-e,e,s),t[h][1]+this._getOffset(-e,e,s)]);return this._curve(i,null,s)}_arc(t,e,s,i,h,a,n,r,l){const o=a+this._getOffset(-.1,.1,l),c=[];c.push([this._getOffset(-r,r,l)+e+.9*i*Math.cos(o-t),this._getOffset(-r,r,l)+s+.9*h*Math.sin(o-t)]);for(let a=o;a<=n;a+=t)c.push([this._getOffset(-r,r,l)+e+i*Math.cos(a),this._getOffset(-r,r,l)+s+h*Math.sin(a)]);return c.push([e+i*Math.cos(n),s+h*Math.sin(n)]),c.push([e+i*Math.cos(n),s+h*Math.sin(n)]),this._curve(c,null,l)}_getIntersectingLines(e,s,i){let h=[];for(var a=new t(e[0],e[1],e[2],e[3]),n=0;n<s.length;n++){let e=new t(s[n],i[n],s[(n+1)%s.length],i[(n+1)%s.length]);2==a.compare(e)&&h.push([a.xi,a.yi])}return h}}self._roughScript=self.document&&self.document.currentScript&&self.document.currentScript.src;class l{constructor(t,e){this.config=t||{},this.canvas=e,this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveStepCount:9,fill:null,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1},this.config.options&&(this.defaultOptions=this._options(this.config.options))}_options(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_drawable(t,e,s){return{shape:t,sets:e||[],options:s||this.defaultOptions}}get lib(){if(!this._renderer)if(self&&self.workly&&this.config.async&&!this.config.noWorker){Function.prototype.toString;const t=this.config.worklyURL||"https://cdn.jsdelivr.net/gh/pshihn/workly/dist/workly.min.js",e=this.config.roughURL||self._roughScript;if(e&&t){let s=`importScripts('${t}', '${e}');\nworkly.expose(self.rough.createRenderer());`,i=URL.createObjectURL(new Blob([s]));this._renderer=workly.proxy(i)}else this._renderer=new r}else this._renderer=new r;return this._renderer}line(t,e,s,i,h){const a=this._options(h);return this._drawable("line",[this.lib.line(t,e,s,i,a)],a)}rectangle(t,e,s,i,h){const a=this._options(h),n=[];if(a.fill){const h=[t,t+s,t+s,t],r=[e,e,e+i,e+i];"solid"===a.fillStyle?n.push(this.lib.solidFillShape(h,r,a)):n.push(this.lib.hachureFillShape(h,r,a))}return n.push(this.lib.rectangle(t,e,s,i,a)),this._drawable("rectangle",n,a)}ellipse(t,e,s,i,h){const a=this._options(h),n=[];if(a.fill)if("solid"===a.fillStyle){const h=this.lib.ellipse(t,e,s,i,a);h.type="fillPath",n.push(h)}else n.push(this.lib.hachureFillEllipse(t,e,s,i,a));return n.push(this.lib.ellipse(t,e,s,i,a)),this._drawable("ellipse",n,a)}circle(t,e,s,i){let h=this.ellipse(t,e,s,s,i);return h.shape="circle",h}linearPath(t,e){const s=this._options(e);return this._drawable("linearPath",[this.lib.linearPath(t,!1,s)],s)}polygon(t,e){const s=this._options(e),i=[];if(s.fill){let e=[],h=[];for(let s of t)e.push(s[0]),h.push(s[1]);"solid"===s.fillStyle?i.push(this.lib.solidFillShape(e,h,s)):i.push(this.lib.hachureFillShape(e,h,s))}return i.push(this.lib.linearPath(t,!0,s)),this._drawable("polygon",i,s)}arc(t,e,s,i,h,a,n,r){const l=this._options(r),o=[];if(n&&l.fill)if("solid"===l.fillStyle){let n=this.lib.arc(t,e,s,i,h,a,!0,!1,l);n.type="fillPath",o.push(n)}else o.push(this.lib.hachureFillArc(t,e,s,i,h,a,l));return o.push(this.lib.arc(t,e,s,i,h,a,n,!0,l)),this._drawable("arc",o,l)}curve(t,e){const s=this._options(e);return this._drawable("curve",[this.lib.curve(t,s)],s)}path(t,e){const s=this._options(e),i=[];if(!t)return this._drawable("path",i,s);if(s.fill)if("solid"===s.fillStyle){let e={type:"path2Dfill",path:t};i.push(e)}else{const e=this._computePathSize(t);let h=[0,e[0],e[0],0],a=[0,0,e[1],e[1]],n=this.lib.hachureFillShape(h,a,s);n.type="path2Dpattern",n.size=e,n.path=t,i.push(n)}return i.push(this.lib.svgPath(t,s)),this._drawable("path",i,s)}_computePathSize(t){let e=[0,0];if(self.document)try{const s="http://www.w3.org/2000/svg";let i=self.document.createElementNS(s,"svg");i.setAttribute("width","0"),i.setAttribute("height","0");let h=self.document.createElementNS(s,"path");h.setAttribute("d",t),i.appendChild(h),self.document.body.appendChild(i);let a=h.getBBox();a&&(e[0]=a.width||0,e[1]=a.height||0),self.document.body.removeChild(i)}catch(t){}return e[0]*e[1]||(e=[this.canvas.width||100,this.canvas.height||100]),e[0]=Math.min(4*e[0],this.canvas.width),e[1]=Math.min(4*e[1],this.canvas.height),e}}class o extends l{async line(t,e,s,i,h){const a=this._options(h);return this._drawable("line",[await this.lib.line(t,e,s,i,a)],a)}async rectangle(t,e,s,i,h){const a=this._options(h),n=[];if(a.fill){const h=[t,t+s,t+s,t],r=[e,e,e+i,e+i];"solid"===a.fillStyle?n.push(await this.lib.solidFillShape(h,r,a)):n.push(await this.lib.hachureFillShape(h,r,a))}return n.push(await this.lib.rectangle(t,e,s,i,a)),this._drawable("rectangle",n,a)}async ellipse(t,e,s,i,h){const a=this._options(h),n=[];if(a.fill)if("solid"===a.fillStyle){const h=await this.lib.ellipse(t,e,s,i,a);h.type="fillPath",n.push(h)}else n.push(await this.lib.hachureFillEllipse(t,e,s,i,a));return n.push(await this.lib.ellipse(t,e,s,i,a)),this._drawable("ellipse",n,a)}async circle(t,e,s,i){let h=await this.ellipse(t,e,s,s,i);return h.shape="circle",h}async linearPath(t,e){const s=this._options(e);return this._drawable("linearPath",[await this.lib.linearPath(t,!1,s)],s)}async polygon(t,e){const s=this._options(e),i=[];if(s.fill){let e=[],h=[];for(let s of t)e.push(s[0]),h.push(s[1]);"solid"===s.fillStyle?i.push(await this.lib.solidFillShape(e,h,s)):i.push(await this.lib.hachureFillShape(e,h,s))}return i.push(await this.lib.linearPath(t,!0,s)),this._drawable("polygon",i,s)}async arc(t,e,s,i,h,a,n,r){const l=this._options(r),o=[];if(n&&l.fill)if("solid"===l.fillStyle){let n=await this.lib.arc(t,e,s,i,h,a,!0,!1,l);n.type="fillPath",o.push(n)}else o.push(await this.lib.hachureFillArc(t,e,s,i,h,a,l));return o.push(await this.lib.arc(t,e,s,i,h,a,n,!0,l)),this._drawable("arc",o,l)}async curve(t,e){const s=this._options(e);return this._drawable("curve",[await this.lib.curve(t,s)],s)}async path(t,e){const s=this._options(e),i=[];if(!t)return this._drawable("path",i,s);if(s.fill)if("solid"===s.fillStyle){let e={type:"path2Dfill",path:t};i.push(e)}else{const e=this._computePathSize(t);let h=[0,e[0],e[0],0],a=[0,0,e[1],e[1]],n=await this.lib.hachureFillShape(h,a,s);n.type="path2Dpattern",n.size=e,n.path=t,i.push(n)}return i.push(await this.lib.svgPath(t,s)),this._drawable("path",i,s)}}class c{constructor(t,e){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this._init(e)}_init(t){this.gen=new l(t,this.canvas)}get generator(){return this.gen}static createRenderer(){return new r}line(t,e,s,i,h){let a=this.gen.line(t,e,s,i,h);return this.draw(a),a}rectangle(t,e,s,i,h){let a=this.gen.rectangle(t,e,s,i,h);return this.draw(a),a}ellipse(t,e,s,i,h){let a=this.gen.ellipse(t,e,s,i,h);return this.draw(a),a}circle(t,e,s,i){let h=this.gen.circle(t,e,s,i);return this.draw(h),h}linearPath(t,e){let s=this.gen.linearPath(t,e);return this.draw(s),s}polygon(t,e){let s=this.gen.polygon(t,e);return this.draw(s),s}arc(t,e,s,i,h,a,n,r){let l=this.gen.arc(t,e,s,i,h,a,n,r);return this.draw(l),l}curve(t,e){let s=this.gen.curve(t,e);return this.draw(s),s}path(t,e){let s=this.gen.path(t,e);return this.draw(s),s}draw(t){let e=t.sets||[],s=t.options||this.gen.defaultOptions,i=this.ctx;for(let t of e)switch(t.type){case"path":i.save(),i.strokeStyle=s.stroke,i.lineWidth=s.strokeWidth,this._drawToContext(i,t),i.restore();break;case"fillPath":i.save(),i.fillStyle=s.fill,this._drawToContext(i,t,s),i.restore();break;case"fillSketch":this._fillSketch(i,t,s);break;case"path2Dfill":{this.ctx.save(),this.ctx.fillStyle=s.fill;let e=new Path2D(t.path);this.ctx.fill(e),this.ctx.restore();break}case"path2Dpattern":{let e=t.size,i=document.createElement("canvas");i.width=e[0],i.height=e[1],this._fillSketch(i.getContext("2d"),t,s),this.ctx.save(),this.ctx.fillStyle=this.ctx.createPattern(i,"repeat");let h=new Path2D(t.path);this.ctx.fill(h),this.ctx.restore();break}}}_fillSketch(t,e,s){let i=s.fillWeight;i<0&&(i=s.strokeWidth/2),t.save(),t.strokeStyle=s.fill,t.lineWidth=i,this._drawToContext(t,e),t.restore()}_drawToContext(t,e){t.beginPath();for(let s of e.ops){const e=s.data;switch(s.op){case"move":t.moveTo(e[0],e[1]);break;case"bcurveTo":t.bezierCurveTo(e[0],e[1],e[2],e[3],e[4],e[5]);break;case"qcurveTo":t.quadraticCurveTo(e[0],e[1],e[2],e[3]);break;case"lineTo":t.lineTo(e[0],e[1])}}"fillPath"===e.type?t.fill():t.stroke()}}return{canvas:(t,e)=>e&&e.async?new class extends c{_init(t){this.gen=new o(t,this.canvas)}async line(t,e,s,i,h){let a=await this.gen.line(t,e,s,i,h);return this.draw(a),a}async rectangle(t,e,s,i,h){let a=await this.gen.rectangle(t,e,s,i,h);return this.draw(a),a}async ellipse(t,e,s,i,h){let a=await this.gen.ellipse(t,e,s,i,h);return this.draw(a),a}async circle(t,e,s,i){let h=await this.gen.circle(t,e,s,i);return this.draw(h),h}async linearPath(t,e){let s=await this.gen.linearPath(t,e);return this.draw(s),s}async polygon(t,e){let s=await this.gen.polygon(t,e);return this.draw(s),s}async arc(t,e,s,i,h,a,n,r){let l=await this.gen.arc(t,e,s,i,h,a,n,r);return this.draw(l),l}async curve(t,e){let s=await this.gen.curve(t,e);return this.draw(s),s}async path(t,e){let s=await this.gen.path(t,e);return this.draw(s),s}}(t,e):new c(t,e),createRenderer:()=>c.createRenderer(),generator:(t,e)=>t&&t.async?new o(t,e):new l(t,e)}}()},function(t,e,s){"use strict";s.r(e);var i=s(0),h=s.n(i);const a=document.getElementById("canvas");var n;n=a,h.a.canvas(n).rectangle(10,10,200,200)}]);