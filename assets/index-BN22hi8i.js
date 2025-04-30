(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const nl="172",is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$u=0,Fl=1,Ju=2,Fh=1,Qu=2,Oi=3,nn=0,Wt=1,Bi=2,en=0,ns=1,Ol=2,Bl=3,zl=4,ed=5,vn=100,td=101,id=102,nd=103,sd=104,rd=200,ad=201,od=202,ld=203,po=204,fo=205,cd=206,hd=207,ud=208,dd=209,pd=210,fd=211,md=212,gd=213,_d=214,mo=0,go=1,_o=2,as=3,vo=4,xo=5,yo=6,Mo=7,ra=0,vd=1,xd=2,tn=0,yd=1,Md=2,bd=3,Sd=4,Ed=5,wd=6,Td=7,Vl="attached",Ad="detached",Oh=300,os=301,ls=302,Jr=303,bo=304,aa=306,Hs=1e3,zi=1001,So=1002,Zt=1003,Rd=1004,lr=1005,bi=1006,ya=1007,Mn=1008,Hi=1009,Bh=1010,zh=1011,Gs=1012,sl=1013,Sn=1014,Si=1015,Js=1016,rl=1017,al=1018,cs=1020,Vh=35902,kh=1021,Hh=1022,ii=1023,Gh=1024,Wh=1025,ss=1026,hs=1027,jh=1028,ol=1029,qh=1030,ll=1031,cl=1033,Wr=33776,jr=33777,qr=33778,Xr=33779,Eo=35840,wo=35841,To=35842,Ao=35843,Ro=36196,Co=37492,Po=37496,Lo=37808,Io=37809,Do=37810,No=37811,Uo=37812,Fo=37813,Oo=37814,Bo=37815,zo=37816,Vo=37817,ko=37818,Ho=37819,Go=37820,Wo=37821,Yr=36492,jo=36494,qo=36495,Xh=36283,Xo=36284,Yo=36285,Zo=36286,Qr=2300,Ko=2301,Ma=2302,kl=2400,Hl=2401,Gl=2402,Cd=2500,Pd=3200,Ld=3201,oa=0,Id=1,Ji="",ht="srgb",us="srgb-linear",ea="linear",it="srgb",Ln=7680,Wl=519,Dd=512,Nd=513,Ud=514,Yh=515,Fd=516,Od=517,Bd=518,zd=519,jl=35044,ql="300 es",Vi=2e3,ta=2001;class An{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,r=i.length;n<r;n++)i[n].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const Fs=Math.PI/180,ds=180/Math.PI;function rn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function hl(s,e){return(s%e+e)%e}function Vd(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function kd(s,e,t){return s!==e?(t-s)/(e-s):0}function Os(s,e,t){return(1-t)*s+t*e}function Hd(s,e,t,i){return Os(s,e,1-Math.exp(-t*i))}function Gd(s,e=1){return e-Math.abs(hl(s,e*2)-e)}function Wd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function jd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function qd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Xd(s,e){return s+Math.random()*(e-s)}function Yd(s){return s*(.5-Math.random())}function Zd(s){s!==void 0&&(Xl=s);let e=Xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kd(s){return s*Fs}function $d(s){return s*ds}function Jd(s){return(s&s-1)===0&&s!==0}function Qd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ep(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tp(s,e,t,i,n){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const At={DEG2RAD:Fs,RAD2DEG:ds,generateUUID:rn,clamp:Ve,euclideanModulo:hl,mapLinear:Vd,inverseLerp:kd,lerp:Os,damp:Hd,pingpong:Gd,smoothstep:Wd,smootherstep:jd,randInt:qd,randFloat:Xd,randFloatSpread:Yd,seededRandom:Zd,degToRad:Kd,radToDeg:$d,isPowerOfTwo:Jd,ceilPowerOfTwo:Qd,floorPowerOfTwo:ep,setQuaternionFromProperEuler:tp,normalize:Ot,denormalize:Zn};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,i,n,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],v=n[1],M=n[4],x=n[7],R=n[2],T=n[5],A=n[8];return r[0]=a*_+o*v+l*R,r[3]=a*m+o*M+l*T,r[6]=a*f+o*x+l*A,r[1]=c*_+h*v+u*R,r[4]=c*m+h*M+u*T,r[7]=c*f+h*x+u*A,r[2]=d*_+p*v+g*R,r[5]=d*m+p*M+g*T,r[8]=d*f+p*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*a)*_,e[3]=d*_,e[4]=(h*t-n*l)*_,e[5]=(n*r-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new Ue;function Zh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ip(){const s=Ws("canvas");return s.style.display="block",s}const Yl={};function Kn(s){s in Yl||(Yl[s]=!0,console.warn(s))}function np(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function sp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ap(){const s={enabled:!0,workingColorSpace:us,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(n.r=ki(n.r),n.g=ki(n.g),n.b=ki(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(n.r=rs(n.r),n.g=rs(n.g),n.b=rs(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?ea:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[us]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:Zl,fromXYZ:Kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Zl,fromXYZ:Kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),s}const ze=ap();function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let In;class op{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{In===void 0&&(In=Ws("canvas")),In.width=e.width,In.height=e.height;const i=In.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=In}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lp=0;class Kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Sa(n[a].image)):r.push(Sa(n[a]))}else r=Sa(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function Sa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?op.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cp=0;class Lt extends An{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=zi,n=zi,r=bi,a=Mn,o=ii,l=Hi,c=Lt.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=rn(),this.name="",this.source=new Kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Oh;Lt.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,t=0,i=0,n=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const a=e.elements,o=a[0],l=a[4],c=a[8],h=a[1],u=a[5],d=a[9],p=a[2],g=a[6],_=a[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,v=(u+1)/2,M=(_+1)/2,x=(l+h)/4,R=(c+p)/4,T=(d+g)/4;return f>v&&f>M?f<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(f),n=x/i,r=R/i):v>M?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=x/n,r=T/n):M<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(M),i=R/r,n=T/r),this.set(i,n,r,t),this}let m=Math.sqrt((g-d)*(g-d)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(c-p)/m,this.z=(h-l)/m,this.w=Math.acos((o+u+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends An{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Lt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Kh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends hp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $h extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Rt=class{constructor(s=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=s,this._y=e,this._z=t,this._w=i}static slerpFlat(s,e,t,i,n,r,a){let o=t[i+0],l=t[i+1],c=t[i+2],h=t[i+3];const u=n[r+0],d=n[r+1],p=n[r+2],g=n[r+3];if(a===0){s[e+0]=o,s[e+1]=l,s[e+2]=c,s[e+3]=h;return}if(a===1){s[e+0]=u,s[e+1]=d,s[e+2]=p,s[e+3]=g;return}if(h!==g||o!==u||l!==d||c!==p){let _=1-a;const m=o*u+l*d+c*p+h*g,f=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const x=Math.sqrt(v),R=Math.atan2(x,m*f);_=Math.sin(_*R)/x,a=Math.sin(a*R)/x}const M=a*f;if(o=o*_+u*M,l=l*_+d*M,c=c*_+p*M,h=h*_+g*M,_===1-a){const x=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=x,l*=x,c*=x,h*=x}}s[e]=o,s[e+1]=l,s[e+2]=c,s[e+3]=h}static multiplyQuaternionsFlat(s,e,t,i,n,r){const a=t[i],o=t[i+1],l=t[i+2],c=t[i+3],h=n[r],u=n[r+1],d=n[r+2],p=n[r+3];return s[e]=a*p+c*h+o*d-l*u,s[e+1]=o*p+c*u+l*h-a*d,s[e+2]=l*p+c*d+a*u-o*h,s[e+3]=c*p-a*h-o*u-l*d,s}get x(){return this._x}set x(s){this._x=s,this._onChangeCallback()}get y(){return this._y}set y(s){this._y=s,this._onChangeCallback()}get z(){return this._z}set z(s){this._z=s,this._onChangeCallback()}get w(){return this._w}set w(s){this._w=s,this._onChangeCallback()}set(s,e,t,i){return this._x=s,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(s){return this._x=s.x,this._y=s.y,this._z=s.z,this._w=s.w,this._onChangeCallback(),this}setFromEuler(s,e=!0){const t=s._x,i=s._y,n=s._z,r=s._order,a=Math.cos,o=Math.sin,l=a(t/2),c=a(i/2),h=a(n/2),u=o(t/2),d=o(i/2),p=o(n/2);switch(r){case"XYZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"YXZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"ZXY":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"ZYX":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"YZX":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p;break;case"XZY":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(s,e){const t=e/2,i=Math.sin(t);return this._x=s.x*i,this._y=s.y*i,this._z=s.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(s){const e=s.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=t+a+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-o)*d,this._y=(n-l)*d,this._z=(r-i)*d}else if(t>a&&t>h){const d=2*Math.sqrt(1+t-a-h);this._w=(c-o)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(n+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-t-h);this._w=(n-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+h-t-a);this._w=(r-i)/d,this._x=(n+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(s,e){let t=s.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(s.x)>Math.abs(s.z)?(this._x=-s.y,this._y=s.x,this._z=0,this._w=t):(this._x=0,this._y=-s.z,this._z=s.y,this._w=t)):(this._x=s.y*e.z-s.z*e.y,this._y=s.z*e.x-s.x*e.z,this._z=s.x*e.y-s.y*e.x,this._w=t),this.normalize()}angleTo(s){return 2*Math.acos(Math.abs(Ve(this.dot(s),-1,1)))}rotateTowards(s,e){const t=this.angleTo(s);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(s,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(s){return this._x*s._x+this._y*s._y+this._z*s._z+this._w*s._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let s=this.length();return s===0?(this._x=0,this._y=0,this._z=0,this._w=1):(s=1/s,this._x=this._x*s,this._y=this._y*s,this._z=this._z*s,this._w=this._w*s),this._onChangeCallback(),this}multiply(s){return this.multiplyQuaternions(this,s)}premultiply(s){return this.multiplyQuaternions(s,this)}multiplyQuaternions(s,e){const t=s._x,i=s._y,n=s._z,r=s._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+r*a+i*l-n*o,this._y=i*c+r*o+n*a-t*l,this._z=n*c+r*l+t*o-i*a,this._w=r*c-t*a-i*o-n*l,this._onChangeCallback(),this}slerp(s,e){if(e===0)return this;if(e===1)return this.copy(s);const t=this._x,i=this._y,n=this._z,r=this._w;let a=r*s._w+t*s._x+i*s._y+n*s._z;if(a<0?(this._w=-s._w,this._x=-s._x,this._y=-s._y,this._z=-s._z,a=-a):this.copy(s),a>=1)return this._w=r,this._x=t,this._y=i,this._z=n,this;const o=1-a*a;if(o<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*t+e*this._x,this._y=d*i+e*this._y,this._z=d*n+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=r*h+this._w*u,this._x=t*h+this._x*u,this._y=i*h+this._y*u,this._z=n*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(s,e,t){return this.copy(s).slerp(e,t)}random(){const s=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),t=Math.random(),i=Math.sqrt(1-t),n=Math.sqrt(t);return this.set(i*Math.sin(s),i*Math.cos(s),n*Math.sin(e),n*Math.cos(e))}equals(s){return s._x===this._x&&s._y===this._y&&s._z===this._z&&s._w===this._w}fromArray(s,e=0){return this._x=s[e],this._y=s[e+1],this._z=s[e+2],this._w=s[e+3],this._onChangeCallback(),this}toArray(s=[],e=0){return s[e]=this._x,s[e+1]=this._y,s[e+2]=this._z,s[e+3]=this._w,s}fromBufferAttribute(s,e){return this._x=s.getX(e),this._y=s.getY(e),this._z=s.getZ(e),this._w=s.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(s){return this._onChangeCallback=s,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new U,$l=new Rt;class ms{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cr.copy(i.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),hr.subVectors(this.max,Es),Dn.subVectors(e.a,Es),Nn.subVectors(e.b,Es),Un.subVectors(e.c,Es),Gi.subVectors(Nn,Dn),Wi.subVectors(Un,Nn),hn.subVectors(Dn,Un);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-hn.z,hn.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,hn.z,0,-hn.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-hn.y,hn.x,0];return!wa(t,Dn,Nn,Un,hr)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,Dn,Nn,Un,hr))?!1:(ur.crossVectors(Gi,Wi),t=[ur.x,ur.y,ur.z],wa(t,Dn,Nn,Un,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new U,new U,new U,new U,new U,new U,new U,new U],ai=new U,cr=new ms,Dn=new U,Nn=new U,Un=new U,Gi=new U,Wi=new U,hn=new U,Es=new U,hr=new U,ur=new U,un=new U;function wa(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){un.fromArray(s,r);const o=n.x*Math.abs(un.x)+n.y*Math.abs(un.y)+n.z*Math.abs(un.z),l=e.dot(un),c=t.dot(un),h=i.dot(un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const dp=new ms,ws=new U,Ta=new U;class gs{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dp.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ws,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Ta)),this.expandByPoint(ws.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new U,Aa=new U,dr=new U,ji=new U,Ra=new U,pr=new U,Ca=new U;let la=class{constructor(s=new U,e=new U(0,0,-1)){this.origin=s,this.direction=e}set(s,e){return this.origin.copy(s),this.direction.copy(e),this}copy(s){return this.origin.copy(s.origin),this.direction.copy(s.direction),this}at(s,e){return e.copy(this.origin).addScaledVector(this.direction,s)}lookAt(s){return this.direction.copy(s).sub(this.origin).normalize(),this}recast(s){return this.origin.copy(this.at(s,Ri)),this}closestPointToPoint(s,e){e.subVectors(s,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(s){return Math.sqrt(this.distanceSqToPoint(s))}distanceSqToPoint(s){const e=Ri.subVectors(s,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(s):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(s))}distanceSqToSegment(s,e,t,i){Aa.copy(s).add(e).multiplyScalar(.5),dr.copy(e).sub(s).normalize(),ji.copy(this.origin).sub(Aa);const n=s.distanceTo(e)*.5,r=-this.direction.dot(dr),a=ji.dot(this.direction),o=-ji.dot(dr),l=ji.lengthSq(),c=Math.abs(1-r*r);let h,u,d,p;if(c>0)if(h=r*o-a,u=r*a-o,p=n*c,h>=0)if(u>=-p)if(u<=p){const g=1/c;h*=g,u*=g,d=h*(h+r*u+2*a)+u*(r*h+u+2*o)+l}else u=n,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else u=-n,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-p?(h=Math.max(0,-(-r*n+a)),u=h>0?-n:Math.min(Math.max(-n,-o),n),d=-h*h+u*(u+2*o)+l):u<=p?(h=0,u=Math.min(Math.max(-n,-o),n),d=u*(u+2*o)+l):(h=Math.max(0,-(r*n+a)),u=h>0?n:Math.min(Math.max(-n,-o),n),d=-h*h+u*(u+2*o)+l);else u=r>0?-n:n,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Aa).addScaledVector(dr,u),d}intersectSphere(s,e){Ri.subVectors(s.center,this.origin);const t=Ri.dot(this.direction),i=Ri.dot(Ri)-t*t,n=s.radius*s.radius;if(i>n)return null;const r=Math.sqrt(n-i),a=t-r,o=t+r;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(s){return this.distanceSqToPoint(s.center)<=s.radius*s.radius}distanceToPlane(s){const e=s.normal.dot(this.direction);if(e===0)return s.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(s.normal)+s.constant)/e;return t>=0?t:null}intersectPlane(s,e){const t=this.distanceToPlane(s);return t===null?null:this.at(t,e)}intersectsPlane(s){const e=s.distanceToPoint(this.origin);return e===0||s.normal.dot(this.direction)*e<0}intersectBox(s,e){let t,i,n,r,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(t=(s.min.x-u.x)*l,i=(s.max.x-u.x)*l):(t=(s.max.x-u.x)*l,i=(s.min.x-u.x)*l),c>=0?(n=(s.min.y-u.y)*c,r=(s.max.y-u.y)*c):(n=(s.max.y-u.y)*c,r=(s.min.y-u.y)*c),t>r||n>i||((n>t||isNaN(t))&&(t=n),(r<i||isNaN(i))&&(i=r),h>=0?(a=(s.min.z-u.z)*h,o=(s.max.z-u.z)*h):(a=(s.max.z-u.z)*h,o=(s.min.z-u.z)*h),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(s){return this.intersectBox(s,Ri)!==null}intersectTriangle(s,e,t,i,n){Ra.subVectors(e,s),pr.subVectors(t,s),Ca.crossVectors(Ra,pr);let r=this.direction.dot(Ca),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ji.subVectors(this.origin,s);const o=a*this.direction.dot(pr.crossVectors(ji,pr));if(o<0)return null;const l=a*this.direction.dot(Ra.cross(ji));if(l<0||o+l>r)return null;const c=-a*ji.dot(Ca);return c<0?null:this.at(c/r,n)}applyMatrix4(s){return this.origin.applyMatrix4(s),this.direction.transformDirection(s),this}equals(s){return s.origin.equals(this.origin)&&s.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class be{constructor(e,t,i,n,r,a,o,l,c,h,u,d,p,g,_,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,d,p,g,_,m)}set(e,t,i,n,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Fn.setFromMatrixColumn(e,0).length(),r=1/Fn.setFromMatrixColumn(e,1).length(),a=1/Fn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,fp)}lookAt(e,t,i){const n=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),qi.crossVectors(i,qt),qi.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),qi.crossVectors(i,qt)),qi.normalize(),fr.crossVectors(qt,qi),n[0]=qi.x,n[4]=fr.x,n[8]=qt.x,n[1]=qi.y,n[5]=fr.y,n[9]=qt.y,n[2]=qi.z,n[6]=fr.z,n[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],M=i[7],x=i[11],R=i[15],T=n[0],A=n[4],L=n[8],w=n[12],b=n[1],P=n[5],N=n[9],I=n[13],F=n[2],k=n[6],B=n[10],q=n[14],H=n[3],Y=n[7],re=n[11],ye=n[15];return r[0]=a*T+o*b+l*F+c*H,r[4]=a*A+o*P+l*k+c*Y,r[8]=a*L+o*N+l*B+c*re,r[12]=a*w+o*I+l*q+c*ye,r[1]=h*T+u*b+d*F+p*H,r[5]=h*A+u*P+d*k+p*Y,r[9]=h*L+u*N+d*B+p*re,r[13]=h*w+u*I+d*q+p*ye,r[2]=g*T+_*b+m*F+f*H,r[6]=g*A+_*P+m*k+f*Y,r[10]=g*L+_*N+m*B+f*re,r[14]=g*w+_*I+m*q+f*ye,r[3]=v*T+M*b+x*F+R*H,r[7]=v*A+M*P+x*k+R*Y,r[11]=v*L+M*N+x*B+R*re,r[15]=v*w+M*I+x*q+R*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-n*c*u-r*o*d+i*c*d+n*o*p-i*l*p)+_*(+t*l*p-t*c*d+r*a*d-n*a*p+n*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,M=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,x=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,R=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=t*v+i*M+n*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(_*d*r-u*m*r-_*n*p+i*m*p+u*n*f-i*d*f)*A,e[2]=(o*m*r-_*l*r+_*n*c-i*m*c-o*n*f+i*l*f)*A,e[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*p-i*l*p)*A,e[4]=M*A,e[5]=(h*m*r-g*d*r+g*n*p-t*m*p-h*n*f+t*d*f)*A,e[6]=(g*l*r-a*m*r-g*n*c+t*m*c+a*n*f-t*l*f)*A,e[7]=(a*d*r-h*l*r+h*n*c-t*d*c-a*n*p+t*l*p)*A,e[8]=x*A,e[9]=(g*u*r-h*_*r-g*i*p+t*_*p+h*i*f-t*u*f)*A,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*f+t*o*f)*A,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*p-t*o*p)*A,e[12]=R*A,e[13]=(h*_*n-g*u*n+g*i*d-t*_*d-h*i*m+t*u*m)*A,e[14]=(g*o*n-a*_*n-g*i*l+t*_*l+a*i*m-t*o*m)*A,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,v=l*c,M=l*h,x=l*u,R=i.x,T=i.y,A=i.z;return n[0]=(1-(_+f))*R,n[1]=(p+x)*R,n[2]=(g-M)*R,n[3]=0,n[4]=(p-x)*T,n[5]=(1-(d+f))*T,n[6]=(m+v)*T,n[7]=0,n[8]=(g+M)*A,n[9]=(m-v)*A,n[10]=(1-(d+_))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Fn.set(n[0],n[1],n[2]).length();const a=Fn.set(n[4],n[5],n[6]).length(),o=Fn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],oi.copy(this);const l=1/r,c=1/a,h=1/o;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=c,oi.elements[5]*=c,oi.elements[6]*=c,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,t.setFromRotationMatrix(oi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=Vi){const l=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let p,g;if(o===Vi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ta)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Vi){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-r),d=(t+e)*c,p=(i+n)*h;let g,_;if(o===Vi)g=(a+r)*u,_=-2*u;else if(o===ta)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fn=new U,oi=new be,pp=new U(0,0,0),fp=new U(1,1,1),qi=new U,fr=new U,qt=new U,Jl=new be,Ql=new Rt;class St{constructor(e=0,t=0,i=0,n=St.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}St.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mp=0;const ec=new U,On=new Rt,Ci=new be,mr=new U,Ts=new U,gp=new U,_p=new Rt,tc=new U(1,0,0),ic=new U(0,1,0),nc=new U(0,0,1),sc={type:"added"},vp={type:"removed"},Bn={type:"childadded",child:null},Pa={type:"childremoved",child:null};class st extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new U,t=new St,i=new Rt,n=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new be},normalMatrix:{value:new Ue}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.multiply(On),this}rotateOnWorldAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.premultiply(On),this}rotateX(e){return this.rotateOnAxis(tc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return ec.copy(e).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mr.copy(e):mr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Ts,mr,this.up):Ci.lookAt(mr,Ts,this.up),this.quaternion.setFromRotationMatrix(Ci),n&&(Ci.extractRotation(n.matrixWorld),On.setFromRotationMatrix(Ci),this.quaternion.premultiply(On.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}st.DEFAULT_UP=new U(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new U,Pi=new U,La=new U,Li=new U,zn=new U,Vn=new U,rc=new U,Ia=new U,Da=new U,Na=new U,Ua=new We,Fa=new We,Oa=new We;class di{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),li.subVectors(e,t),n.cross(li);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){li.subVectors(n,t),Pi.subVectors(i,t),La.subVectors(e,t);const a=li.dot(li),o=li.dot(Pi),l=li.dot(La),c=Pi.dot(Pi),h=Pi.dot(La),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Ua.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Ua.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,i),Oa.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Ua,r.x),a.addScaledVector(Fa,r.y),a.addScaledVector(Oa,r.z),a}static isFrontFacing(e,t,i,n){return li.subVectors(i,t),Pi.subVectors(e,t),li.cross(Pi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),li.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return di.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;zn.subVectors(n,i),Vn.subVectors(r,i),Ia.subVectors(e,i);const l=zn.dot(Ia),c=Vn.dot(Ia);if(l<=0&&c<=0)return t.copy(i);Da.subVectors(e,n);const h=zn.dot(Da),u=Vn.dot(Da);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(zn,a);Na.subVectors(e,r);const p=zn.dot(Na),g=Vn.dot(Na);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Vn,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return rc.subVectors(r,n),o=(u-h)/(u-h+(p-g)),t.copy(n).addScaledVector(rc,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(i).addScaledVector(zn,a).addScaledVector(Vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Ba(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,ze.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=ze.workingColorSpace){if(e=hl(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ba(a,r,e+1/3),this.g=Ba(a,r,e),this.b=Ba(a,r,e-1/3)}return ze.toWorkingColorSpace(this,n),this}setStyle(e,t=ht){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const i=Qh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return ze.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Ve(Nt.r*255,0,255))*65536+Math.round(Ve(Nt.g*255,0,255))*256+Math.round(Ve(Nt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,n=Nt.g,r=Nt.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=ht){ze.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,n=Nt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(gr);const i=Os(Xi.h,gr.h,t),n=Os(Xi.s,gr.s,t),r=Os(Xi.l,gr.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Re;Re.NAMES=Qh;let xp=0,an=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=ns,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=fo,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ln,this.stencilZFail=Ln,this.stencilZPass=Ln,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(s){this._alphaTest>0!=s>0&&this.version++,this._alphaTest=s}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(s){if(s!==void 0)for(const e in s){const t=s[e];if(t===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(s){const e=s===void 0||typeof s=="string";e&&(s={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(s).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(s).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(s).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(s).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(s).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(s).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(s).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(s).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(s).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(s).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(s).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(s).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(s).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(t.blending=this.blending),this.side!==nn&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==po&&(t.blendSrc=this.blendSrc),this.blendDst!==fo&&(t.blendDst=this.blendDst),this.blendEquation!==vn&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ln&&(t.stencilFail=this.stencilFail),this.stencilZFail!==Ln&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==Ln&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(n){const r=[];for(const a in n){const o=n[a];delete o.metadata,r.push(o)}return r}if(e){const n=i(s.textures),r=i(s.images);n.length>0&&(t.textures=n),r.length>0&&(t.images=r)}return t}clone(){return new this.constructor().copy(this)}copy(s){this.name=s.name,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.blendColor.copy(s.blendColor),this.blendAlpha=s.blendAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;const e=s.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let n=0;n!==i;++n)t[n]=e[n].clone()}return this.clippingPlanes=t,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaHash=s.alphaHash,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.forceSinglePass=s.forceSinglePass,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(s){s===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class ca extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new U,_r=new Ce;class Ei{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jl,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),e}}class ul extends Ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class eu extends Ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends Ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yp=0;const ei=new be,za=new st,kn=new U,Xt=new ms,As=new ms,Tt=new U;class fi extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?eu:ul)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ue().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Xt.min,As.min),Xt.expandByPoint(Tt),Tt.addVectors(Xt.max,As.max),Xt.expandByPoint(Tt)):(Xt.expandByPoint(As.min),Xt.expandByPoint(As.max))}Xt.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(kn.fromBufferAttribute(e,c),Tt.add(kn)),n=Math.max(n,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new U,l[L]=new U;const c=new U,h=new U,u=new U,d=new Ce,p=new Ce,g=new Ce,_=new U,m=new U;function f(L,w,b){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(_),o[w].add(_),o[b].add(_),l[L].add(m),l[w].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,w=v.length;L<w;++L){const b=v[L],P=b.start,N=b.count;for(let I=P,F=P+N;I<F;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new U,x=new U,R=new U,T=new U;function A(L){R.fromBufferAttribute(n,L),T.copy(R);const w=o[L];M.copy(w),M.sub(R.multiplyScalar(R.dot(w))).normalize(),x.crossVectors(T,w);const b=x.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,b)}for(let L=0,w=v.length;L<w;++L){const b=v[L],P=b.start,N=b.count;for(let I=P,F=P+N;I<F;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ei(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new be,dn=new la,vr=new gs,oc=new U,xr=new U,yr=new U,Mr=new U,Va=new U,br=new U,lc=new U,Sr=new U;class Yt extends st{constructor(e=new fi,t=new ca){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Va.fromBufferAttribute(u,e),a?br.addScaledVector(Va,h):br.addScaledVector(Va.sub(t),h))}t.add(br)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),dn.copy(e.ray).recast(e.near),!(vr.containsPoint(dn.origin)===!1&&(dn.intersectSphere(vr,oc)===null||dn.origin.distanceToSquared(oc)>(e.far-e.near)**2))&&(ac.copy(r).invert(),dn.copy(e.ray).applyMatrix4(ac),!(i.boundingBox!==null&&dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,dn)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=M;x<R;x+=3){const T=o.getX(x),A=o.getX(x+1),L=o.getX(x+2);n=Er(this,f,e,i,c,h,u,T,A,L),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);n=Er(this,a,e,i,c,h,u,v,M,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=M;x<R;x+=3){const T=x,A=x+1,L=x+2;n=Er(this,f,e,i,c,h,u,T,A,L),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,M=m+1,x=m+2;n=Er(this,a,e,i,c,h,u,v,M,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Mp(s,e,t,i,n,r,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===nn,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:s}}function Er(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,xr),s.getVertexPosition(l,yr),s.getVertexPosition(c,Mr);const h=Mp(s,e,t,i,xr,yr,Mr,lc);if(h){const u=new U;di.getBarycoord(lc,xr,yr,Mr,u),n&&(h.uv=di.getInterpolatedAttribute(n,o,l,c,u,new Ce)),r&&(h.uv1=di.getInterpolatedAttribute(r,o,l,c,u,new Ce)),a&&(h.normal=di.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};di.getNormal(xr,yr,Mr,d.normal),h.face=d,h.barycoord=u}return h}class Rn extends fi{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function g(_,m,f,v,M,x,R,T,A,L,w){const b=x/A,P=R/L,N=x/2,I=R/2,F=T/2,k=A+1,B=L+1;let q=0,H=0;const Y=new U;for(let re=0;re<B;re++){const ye=re*P-I;for(let ie=0;ie<k;ie++){const Fe=ie*b-N;Y[_]=Fe*v,Y[m]=ye*M,Y[f]=F,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ie/A),u.push(1-re/L),q+=1}}for(let re=0;re<L;re++)for(let ye=0;ye<A;ye++){const ie=d+ye+k*re,Fe=d+ye+k*(re+1),Z=d+(ye+1)+k*(re+1),te=d+(ye+1)+k*re;l.push(ie,Fe,te),l.push(Fe,Z,te),H+=6}o.addGroup(p,H,w),p+=H,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Bt(s){const e={};for(let t=0;t<s.length;t++){const i=ps(s[t]);for(const n in i)e[n]=i[n]}return e}function bp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Sp={clone:ps,merge:Bt};var Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class iu extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new U,cc=new Ce,hc=new Ce;class Vt extends iu{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,cc,hc),t.subVectors(hc,cc)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hn=-90,Gn=1;class Tp extends st{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Vt(Hn,Gn,e,t);n.layers=this.layers,this.add(n);const r=new Vt(Hn,Gn,e,t);r.layers=this.layers,this.add(r);const a=new Vt(Hn,Gn,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Hn,Gn,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Hn,Gn,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Hn,Gn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nu extends Lt{constructor(e,t,i,n,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ap extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new nu(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Rn(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:en});r.uniforms.tEquirect.value=t;const a=new Yt(n,r),o=t.minFilter;return t.minFilter===Mn&&(t.minFilter=bi),new Tp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}class Rp extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new St,this.environmentIntensity=1,this.environmentRotation=new St,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const uc=new U,dc=new We,pc=new We,Cp=new U,fc=new be,wr=new U,ka=new gs,mc=new be,Ha=new la;class Pp extends Yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vl,this.bindMatrix=new be,this.bindMatrixInverse=new be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ms),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wr),this.boundingBox.expandByPoint(wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wr),this.boundingSphere.expandByPoint(wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(n),e.ray.intersectsSphere(ka)!==!1&&(mc.copy(n).invert(),Ha.copy(e.ray).applyMatrix4(mc),!(this.boundingBox!==null&&Ha.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ha)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ad?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;dc.fromBufferAttribute(n.attributes.skinIndex,e),pc.fromBufferAttribute(n.attributes.skinWeight,e),uc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=pc.getComponent(r);if(a!==0){const o=dc.getComponent(r);fc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Cp.copy(uc).applyMatrix4(fc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $o extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Lp extends Lt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Zt,h=Zt,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gc=new be,Ip=new be;class dl{constructor(e=[],t=[]){this.uuid=rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ip;gc.multiplyMatrices(o,t[r]),gc.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new dl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Lp(t,e,e,ii,Si);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new $o),this.bones.push(a),this.boneInverses.push(new be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}const Ga=new U,Dp=new U,Np=new Ue;class $i{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Ga.subVectors(i,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ga),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Np.getNormalMatrix(e),n=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pn=new gs,Tr=new U;class pl{constructor(e=new $i,t=new $i,i=new $i,n=new $i,r=new $i,a=new $i){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){const i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],v=n[13],M=n[14],x=n[15];if(i[0].setComponents(l-r,d-c,m-p,x-f).normalize(),i[1].setComponents(l+r,d+c,m+p,x+f).normalize(),i[2].setComponents(l+a,d+h,m+g,x+v).normalize(),i[3].setComponents(l-a,d-h,m-g,x-v).normalize(),i[4].setComponents(l-o,d-u,m-_,x-M).normalize(),t===Vi)i[5].setComponents(l+o,d+u,m+_,x+M).normalize();else if(t===ta)i[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pn)}intersectsSprite(e){return pn.center.set(0,0,0),pn.radius=.7071067811865476,pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(pn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Tr.x=n.normal.x>0?e.max.x:e.min.x,Tr.y=n.normal.y>0?e.max.y:e.min.y,Tr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class su extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ia=new U,na=new U,_c=new be,Rs=new la,Ar=new gs,Wa=new U,vc=new U;class Up extends st{constructor(e=new fi,t=new su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)ia.fromBufferAttribute(t,n-1),na.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ia.distanceTo(na);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(n),Ar.radius+=r,e.ray.intersectsSphere(Ar)===!1)return;_c.copy(n).invert(),Rs.copy(e.ray).applyMatrix4(_c);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p-1;g<_;g+=c){const m=h.getX(g),f=h.getX(g+1),v=Rr(this,e,Rs,l,m,f);v&&t.push(v)}if(this.isLineLoop){const g=h.getX(p-1),_=h.getX(d),m=Rr(this,e,Rs,l,g,_);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p-1;g<_;g+=c){const m=Rr(this,e,Rs,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=Rr(this,e,Rs,l,p-1,d);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Rr(s,e,t,i,n,r){const a=s.geometry.attributes.position;if(ia.fromBufferAttribute(a,n),na.fromBufferAttribute(a,r),t.distanceSqToSegment(ia,na,Wa,vc)>i)return;Wa.applyMatrix4(s.matrixWorld);const o=e.ray.origin.distanceTo(Wa);if(!(o<e.near||o>e.far))return{distance:o,point:vc.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}class Jn extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ru extends Lt{constructor(e,t,i,n,r,a,o,l,c,h=ss){if(h!==ss&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ss&&(i=Sn),i===void 0&&h===hs&&(i=cs),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fp{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],u=i[n+1]-h,d=(a-h)/u;return(n+d)/(r-1)}getTangent(e,t){let i=e-1e-4,n=e+1e-4;i<0&&(i=0),n>1&&(n=1);const r=this.getPoint(i),a=this.getPoint(n),o=t||(r.isVector2?new Ce:new U);return o.copy(a).sub(r).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new U,n=[],r=[],a=[],o=new U,l=new be;for(let p=0;p<=e;p++){const g=p/e;n[p]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ve(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(n[p],r[p])}if(t===!0){let p=Math.acos(Ve(r[0].dot(r[e]),-1,1));p/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}const Op={triangulate:function(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=au(s,0,n,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(i&&(r=Hp(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<n;g+=t)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return js(r,a,t,o,l,p,0),a}};function au(s,e,t,i,n){let r,a;if(n===Qp(s,e,t,i)>0)for(r=e;r<t;r+=i)a=xc(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=xc(r,s[r],s[r+1],a);return a&&ha(a,a.next)&&(Xs(a),a=a.next),a}function wn(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(ha(t,t.next)||ft(t.prev,t,t.next)===0)){if(Xs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function js(s,e,t,i,n,r,a){if(!s)return;!a&&r&&Xp(s,i,n,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?zp(s,i,n,r):Bp(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Xs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Vp(wn(s),e,t),js(s,e,t,i,n,r,2)):a===2&&kp(s,e,t,i,n,r):js(wn(s),e,t,i,n,r,1);break}}}function Bp(s){const e=s.prev,t=s,i=s.next;if(ft(e,t,i)>=0)return!1;const n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<r?n<a?n:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=n>r?n>a?n:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Qn(n,o,r,l,a,c,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zp(s,e,t,i){const n=s.prev,r=s,a=s.next;if(ft(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Jo(p,g,e,t,i),v=Jo(_,m,e,t,i);let M=s.prevZ,x=s.nextZ;for(;M&&M.z>=f&&x&&x.z<=v;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&Qn(o,h,l,u,c,d,M.x,M.y)&&ft(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&Qn(o,h,l,u,c,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&Qn(o,h,l,u,c,d,M.x,M.y)&&ft(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&Qn(o,h,l,u,c,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Vp(s,e,t){let i=s;do{const n=i.prev,r=i.next.next;!ha(n,r)&&ou(n,i,i.next,r)&&qs(n,r)&&qs(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Xs(i),Xs(i.next),i=s=r),i=i.next}while(i!==s);return wn(i)}function kp(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kp(a,o)){let l=lu(a,o);a=wn(a,a.next),l=wn(l,l.next),js(a,e,t,i,n,r,0),js(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function Hp(s,e,t,i){const n=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=au(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Zp(c));for(n.sort(Gp),r=0;r<n.length;r++)t=Wp(n[r],t);return t}function Gp(s,e){return s.x-e.x}function Wp(s,e){const t=jp(s,e);if(!t)return e;const i=lu(t,s);return wn(i,i.next),wn(t,t.next)}function jp(s,e){let t=e,i=-1/0,n;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,n=t.x<t.next.x?t:t.next,d===r))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let h=1/0,u;t=n;do r>=t.x&&t.x>=l&&r!==t.x&&Qn(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),qs(t,s)&&(u<h||u===h&&(t.x>n.x||t.x===n.x&&qp(n,t)))&&(n=t,h=u)),t=t.next;while(t!==o);return n}function qp(s,e){return ft(s.prev,s,e.prev)<0&&ft(e.next,s,s.next)<0}function Xp(s,e,t,i){let n=s;do n.z===0&&(n.z=Jo(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Yp(n)}function Yp(s){let e,t,i,n,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(a>1);return s}function Jo(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Zp(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Qn(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function Kp(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!$p(s,e)&&(qs(s,e)&&qs(e,s)&&Jp(s,e)&&(ft(s.prev,s,e.prev)||ft(s,e.prev,e))||ha(s,e)&&ft(s.prev,s,s.next)>0&&ft(e.prev,e,e.next)>0)}function ft(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ha(s,e){return s.x===e.x&&s.y===e.y}function ou(s,e,t,i){const n=Pr(ft(s,e,t)),r=Pr(ft(s,e,i)),a=Pr(ft(t,i,s)),o=Pr(ft(t,i,e));return!!(n!==r&&a!==o||n===0&&Cr(s,t,e)||r===0&&Cr(s,i,e)||a===0&&Cr(t,s,i)||o===0&&Cr(t,e,i))}function Cr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Pr(s){return s>0?1:s<0?-1:0}function $p(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ou(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function qs(s,e){return ft(s.prev,s,s.next)<0?ft(s,e,s.next)>=0&&ft(s,s.prev,e)>=0:ft(s,e,s.prev)<0||ft(s,s.next,e)<0}function Jp(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function lu(s,e){const t=new Qo(s.i,s.x,s.y),i=new Qo(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function xc(s,e,t,i){const n=new Qo(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Xs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Qo(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qp(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class fl{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return fl.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];yc(e),Mc(i,e);let a=e.length;t.forEach(yc);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Mc(i,t[l]);const o=Op.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function yc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Mc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ua extends fi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*d-a;for(let M=0;M<c;M++){const x=M*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const M=v+c*f,x=v+c*(f+1),R=v+1+c*(f+1),T=v+1+c*f;p.push(M,x,T),p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.widthSegments,e.heightSegments)}}class cu extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ja extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ef extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tf extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nf extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Lr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function sf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function rf(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function bc(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function hu(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}class da{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class af extends da{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kl,endingEnd:kl}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hl:r=e,o=2*t-i;break;case Gl:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hl:a=e,l=2*i-t;break;case Gl:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+v*a[c+R]+M*a[l+R]+x*a[u+R];return r}}class of extends da{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class lf extends da{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class wi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lr(t,this.TimeBufferType),this.values=Lr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Lr(e.times,Array),values:Lr(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new of(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new af(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case Ko:t=this.InterpolantFactoryMethodLinear;break;case Ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&sf(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ma,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=Ko;class _s extends wi{constructor(e,t,i){super(e,t,i)}}_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Qr;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class uu extends wi{}uu.prototype.ValueTypeName="color";class Ys extends wi{}Ys.prototype.ValueTypeName="number";class cf extends da{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Rt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class fs extends wi{InterpolantFactoryMethodLinear(e){return new cf(this.times,this.values,this.getValueSize(),e)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends wi{constructor(e,t,i){super(e,t,i)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Qr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends wi{}Zs.prototype.ValueTypeName="vector";class hf{constructor(e="",t=-1,i=[],n=Cd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(df(i[a]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(wi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=rf(l);l=bc(l,1,h),c=bc(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ys(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,p,g){if(d.length!==0){const _=[],m=[];hu(d,_,m,p),_.length!==0&&g.push(new h(u,_,m))}},n=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let g=0;g<u[p].morphTargets.length;g++)d[u[p].morphTargets[g]]=-1;for(const g in d){const _=[],m=[];for(let f=0;f!==u[p].morphTargets.length;++f){const v=u[p];_.push(v.time),m.push(v.morphTarget===g?1:0)}n.push(new Ys(".morphTargetInfluence["+g+"]",_,m))}l=d.length*a}else{const d=".bones["+t[h].name+"]";i(Zs,d+".position",u,"pos",n),i(fs,d+".quaternion",u,"rot",n),i(Zs,d+".scale",u,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function uf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return Zs;case"color":return uu;case"quaternion":return fs;case"bool":case"boolean":return _s;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function df(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=uf(s.type);if(s.times===void 0){const t=[],i=[];hu(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const sa={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class pf{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const ff=new pf;class Tn{constructor(e){this.manager=e!==void 0?e:ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Tn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class mf extends Error{constructor(e,t){super(e),this.response=t}}class gf extends Tn{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=sa.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:i,onError:n});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ii[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){v();function v(){u.read().then(({done:M,value:x})=>{if(M)f.close();else{_+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,A=h.length;T<A;T++){const L=h[T];L.onProgress&&L.onProgress(R)}f.enqueue(x),v()}},M=>{f.error(M)})}}});return new Response(m)}else throw new mf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{sa.add(e,c);const h=Ii[e];delete Ii[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Ii[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _f extends Tn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=sa.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ws("img");function l(){h(),sa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ml extends Tn{constructor(e){super(e)}load(e,t,i,n){const r=new Lt,a=new _f(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class pa extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const qa=new be,Sc=new U,Ec=new U;class gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sc),Ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ec),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vf extends gl{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ds*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xf extends pa{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wc=new be,Cs=new U,Xa=new U;class yf extends gl{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cs),Xa.copy(i.position),Xa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xa),i.updateMatrixWorld(),n.makeTranslation(-Cs.x,-Cs.y,-Cs.z),wc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class Tc extends pa{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new yf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class du extends iu{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mf extends gl{constructor(){super(new du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pu extends pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new Mf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fu extends pa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bf{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Sf extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ef{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ac(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ac();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ac(){return performance.now()}const _l="\\[\\]\\.:\\/",wf=new RegExp("["+_l+"]","g"),vl="[^"+_l+"]",Tf="[^"+_l.replace("\\.","")+"]",Af=/((?:WC+[\/:])*)/.source.replace("WC",vl),Rf=/(WCOD+)?/.source.replace("WCOD",Tf),Cf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),Pf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),Lf=new RegExp("^"+Af+Rf+Cf+Pf+"$"),If=["material","materials","bones","map"];class Df{constructor(e,t,i){const n=i||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Je{constructor(e,t,i){this.path=t,this.parsedPath=i||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,i):new Je(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wf,"")}static parseTrackName(e){const t=Lf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);If.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=Df;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Rc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nf extends An{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Cc(s,e,t,i){const n=Uf(i);switch(t){case kh:return s*e;case Gh:return s*e;case Wh:return s*e*2;case jh:return s*e/n.components*n.byteLength;case ol:return s*e/n.components*n.byteLength;case qh:return s*e*2/n.components*n.byteLength;case ll:return s*e*2/n.components*n.byteLength;case Hh:return s*e*3/n.components*n.byteLength;case ii:return s*e*4/n.components*n.byteLength;case cl:return s*e*4/n.components*n.byteLength;case Wr:case jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qr:case Xr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wo:case Ao:return Math.max(s,16)*Math.max(e,8)/4;case Eo:case To:return Math.max(s,8)*Math.max(e,8)/2;case Ro:case Co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yr:case jo:case qo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xh:case Xo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yo:case Zo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Uf(s){switch(s){case Hi:case Bh:return{byteLength:1,components:1};case Gs:case zh:case Js:return{byteLength:2,components:1};case rl:case al:return{byteLength:2,components:4};case Sn:case sl:case Si:return{byteLength:4,components:1};case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/function mu(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ff(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,am=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,om=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Um=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Of,alphahash_pars_fragment:Bf,alphamap_fragment:zf,alphamap_pars_fragment:Vf,alphatest_fragment:kf,alphatest_pars_fragment:Hf,aomap_fragment:Gf,aomap_pars_fragment:Wf,batching_pars_vertex:jf,batching_vertex:qf,begin_vertex:Xf,beginnormal_vertex:Yf,bsdfs:Zf,iridescence_fragment:Kf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:em,clipping_planes_vertex:tm,color_fragment:im,color_pars_fragment:nm,color_pars_vertex:sm,color_vertex:rm,common:am,cube_uv_reflection_fragment:om,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:dm,colorspace_fragment:pm,colorspace_pars_fragment:fm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:_m,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Cm,envmap_vertex:xm,fog_vertex:ym,fog_pars_vertex:Mm,fog_fragment:bm,fog_pars_fragment:Sm,gradientmap_pars_fragment:Em,lightmap_pars_fragment:wm,lights_lambert_fragment:Tm,lights_lambert_pars_fragment:Am,lights_pars_begin:Rm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Lm,lights_phong_fragment:Im,lights_phong_pars_fragment:Dm,lights_physical_fragment:Nm,lights_physical_pars_fragment:Um,lights_fragment_begin:Fm,lights_fragment_maps:Om,lights_fragment_end:Bm,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:Vm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Hm,map_fragment:Gm,map_pars_fragment:Wm,map_particle_fragment:jm,map_particle_pars_fragment:qm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:Ym,morphinstance_vertex:Zm,morphcolor_vertex:Km,morphnormal_vertex:$m,morphtarget_pars_vertex:Jm,morphtarget_vertex:Qm,normal_fragment_begin:eg,normal_fragment_maps:tg,normal_pars_fragment:ig,normal_pars_vertex:ng,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:lg,iridescence_pars_fragment:cg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:pg,dithering_fragment:fg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:xg,shadowmap_vertex:yg,shadowmask_pars_fragment:Mg,skinbase_vertex:bg,skinning_pars_vertex:Sg,skinning_vertex:Eg,skinnormal_vertex:wg,specularmap_fragment:Tg,specularmap_pars_fragment:Ag,tonemapping_fragment:Rg,tonemapping_pars_fragment:Cg,transmission_fragment:Pg,transmission_pars_fragment:Lg,uv_pars_fragment:Ig,uv_pars_vertex:Dg,uv_vertex:Ng,worldpos_vertex:Ug,background_vert:Fg,background_frag:Og,backgroundCube_vert:Bg,backgroundCube_frag:zg,cube_vert:Vg,cube_frag:kg,depth_vert:Hg,depth_frag:Gg,distanceRGBA_vert:Wg,distanceRGBA_frag:jg,equirect_vert:qg,equirect_frag:Xg,linedashed_vert:Yg,linedashed_frag:Zg,meshbasic_vert:Kg,meshbasic_frag:$g,meshlambert_vert:Jg,meshlambert_frag:Qg,meshmatcap_vert:e_,meshmatcap_frag:t_,meshnormal_vert:i_,meshnormal_frag:n_,meshphong_vert:s_,meshphong_frag:r_,meshphysical_vert:a_,meshphysical_frag:o_,meshtoon_vert:l_,meshtoon_frag:c_,points_vert:h_,points_frag:u_,shadow_vert:d_,shadow_frag:p_,sprite_vert:f_,sprite_frag:m_},oe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},yi={basic:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Bt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Bt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Bt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Bt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Bt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Bt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Bt([oe.common,oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Bt([oe.lights,oe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};yi.physical={uniforms:Bt([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ir={r:0,b:0,g:0},fn=new St,g_=new be;function __(s,e,t,i,n,r,a){const o=new Re(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const R=g(M);R===null?f(o,l):R&&R.isColor&&(f(R,1),x=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===aa)?(h===void 0&&(h=new Yt(new Rn(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ps(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),fn.copy(x.backgroundRotation),fn.x*=-1,fn.y*=-1,fn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(fn.y*=-1,fn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(fn)),h.material.toneMapped=ze.getTransfer(R.colorSpace)!==it,(u!==R||d!==R.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Yt(new ua(2,2),new sn({name:"BackgroundMaterial",uniforms:ps(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ze.getTransfer(R.colorSpace)!==it,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,x){M.getRGB(Ir,tu(s)),i.buffers.color.setClear(Ir.r,Ir.g,Ir.b,x,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:_,addToRenderList:m,dispose:v}}function v_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,a=!1;function o(b,P,N,I,F){let k=!1;const B=u(I,N,P);r!==B&&(r=B,c(r.object)),k=p(b,I,N,F),k&&g(b,I,N,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,x(b,P,N,I),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,P,N){const I=N.wireframe===!0;let F=i[b.id];F===void 0&&(F={},i[b.id]=F);let k=F[P.id];k===void 0&&(k={},F[P.id]=k);let B=k[I];return B===void 0&&(B=d(l()),k[I]=B),B}function d(b){const P=[],N=[],I=[];for(let F=0;F<t;F++)P[F]=0,N[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:I,object:b,attributes:{},index:null}}function p(b,P,N,I){const F=r.attributes,k=P.attributes;let B=0;const q=N.getAttributes();for(const H in q)if(q[H].location>=0){const Y=F[H];let re=k[H];if(re===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),Y===void 0||Y.attribute!==re||re&&Y.data!==re.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function g(b,P,N,I){const F={},k=P.attributes;let B=0;const q=N.getAttributes();for(const H in q)if(q[H].location>=0){let Y=k[H];Y===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor));const re={};re.attribute=Y,Y&&Y.data&&(re.data=Y.data),F[H]=re,B++}r.attributes=F,r.attributesNum=B,r.index=I}function _(){const b=r.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function m(b){f(b,0)}function f(b,P){const N=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;N[b]=1,I[b]===0&&(s.enableVertexAttribArray(b),I[b]=1),F[b]!==P&&(s.vertexAttribDivisor(b,P),F[b]=P)}function v(){const b=r.newAttributes,P=r.enabledAttributes;for(let N=0,I=P.length;N<I;N++)P[N]!==b[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function M(b,P,N,I,F,k,B){B===!0?s.vertexAttribIPointer(b,P,N,F,k):s.vertexAttribPointer(b,P,N,I,F,k)}function x(b,P,N,I){_();const F=I.attributes,k=N.getAttributes(),B=P.defaultAttributeValues;for(const q in k){const H=k[q];if(H.location>=0){let Y=F[q];if(Y===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor)),Y!==void 0){const re=Y.normalized,ye=Y.itemSize,ie=e.get(Y);if(ie===void 0)continue;const Fe=ie.buffer,Z=ie.type,te=ie.bytesPerElement,fe=Z===s.INT||Z===s.UNSIGNED_INT||Y.gpuType===sl;if(Y.isInterleavedBufferAttribute){const se=Y.data,Te=se.stride,Pe=Y.offset;if(se.isInstancedInterleavedBuffer){for(let ke=0;ke<H.locationSize;ke++)f(H.location+ke,se.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ke=0;ke<H.locationSize;ke++)m(H.location+ke);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let ke=0;ke<H.locationSize;ke++)M(H.location+ke,ye/H.locationSize,Z,re,Te*te,(Pe+ye/H.locationSize*ke)*te,fe)}else{if(Y.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)f(H.location+se,Y.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let se=0;se<H.locationSize;se++)M(H.location+se,ye/H.locationSize,Z,re,ye*te,ye/H.locationSize*se*te,fe)}}else if(B!==void 0){const re=B[q];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(H.location,re);break;case 3:s.vertexAttrib3fv(H.location,re);break;case 4:s.vertexAttrib4fv(H.location,re);break;default:s.vertexAttrib1fv(H.location,re)}}}}v()}function R(){L();for(const b in i){const P=i[b];for(const N in P){const I=P[N];for(const F in I)h(I[F].object),delete I[F];delete P[N]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const N in P){const I=P[N];for(const F in I)h(I[F].object),delete I[F];delete P[N]}delete i[b.id]}function A(b){for(const P in i){const N=i[P];if(N[b.id]===void 0)continue;const I=N[b.id];for(const F in I)h(I[F].object),delete I[F];delete N[b.id]}}function L(){w(),a=!0,r!==n&&(r=n,c(r.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function x_(s,e,t){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function y_(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==ii&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Si&&!L)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function M_(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new $i,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:i,M=v*4;let x=f.clippingState||null;l.value=x,x=h(g,d,M,p);for(let R=0;R!==M;++R)x[R]=t[R];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,x=p;M!==_;++M,x+=4)a.copy(u[M]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function b_(s){let e=new WeakMap;function t(a,o){return o===Jr?a.mapping=os:o===bo&&(a.mapping=ls),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jr||o===bo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ap(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const es=4,Pc=[.125,.215,.35,.446,.526,.582],xn=20,Ya=new du,Lc=new Re;let Za=null,Ka=0,$a=0,Ja=!1;const _n=(1+Math.sqrt(5))/2,Wn=1/_n,Ic=[new U(-_n,Wn,0),new U(_n,Wn,0),new U(-Wn,0,_n),new U(Wn,0,_n),new U(0,_n,-Wn),new U(0,_n,Wn),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Za=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,Ka,$a),this._renderer.xr.enabled=Ja,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Js,format:ii,colorSpace:us,depthBuffer:!1},n=Nc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S_(r)),this._blurMaterial=E_(r,e,t)}return n}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,i,n){const r=new Vt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Lc),l.toneMapping=tn,l.autoClear=!1;const u=new ca({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),d=new Yt(new Rn,u);let p=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(Lc),p=!0);for(let _=0;_<6;_++){const m=_%3;m===0?(r.up.set(0,a[_],0),r.lookAt(o[_],0,0)):m===1?(r.up.set(0,0,a[_]),r.lookAt(0,o[_],0)):(r.up.set(0,a[_],0),r.lookAt(0,0,o[_]));const f=this._cubeSize;Dr(n,m*f,_>2?f:0,f,f),l.setRenderTarget(n),p&&l.render(d,r),l.render(e,r)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===os||e.mapping===ls;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new Yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ic[(n-r-1)%Ic.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Yt(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*xn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):xn;m>xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xn}`);const f=[];let v=0;for(let A=0;A<xn;++A){const L=A/_,w=Math.exp(-L*L/2);f.push(w),A===0?v+=w:A<m&&(v+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const x=this._sizeLods[n],R=3*x*(n>M-es?n-M+es:0),T=4*(this._cubeSize-x);Dr(t,R,T,3*x,2*x),l.setRenderTarget(t),l.render(u,Ya)}}function S_(s){const e=[],t=[],i=[];let n=s;const r=s-es+1+Pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-es?l=Pc[a-s+es-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),M=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,L=T>2?0:-1,w=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];v.set(w,_*g*T),M.set(d,m*g*T);const b=[T,T,T,T,T,T];x.set(b,f*g*T)}const R=new fi;R.setAttribute("position",new Ei(v,_)),R.setAttribute("uv",new Ei(M,m)),R.setAttribute("faceIndex",new Ei(x,f)),e.push(R),n>es&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nc(s,e,t){const i=new En(s,e,t);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function E_(s,e,t){const i=new Float32Array(xn),n=new U(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Uc(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Fc(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function w_(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jr||l===bo,h=l===os||l===ls;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Dc(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(t===null&&(t=new Dc(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function T_(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Kn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function A_(s,e,t,i){const n={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let M=0,x=v.length;M<x;M+=3){const R=v[M+0],T=v[M+1],A=v[M+2];d.push(R,T,T,A,A,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const R=M+0,T=M+1,A=M+2;d.push(R,T,T,A,A,R)}}else return;const m=new(Zh(d)?eu:ul)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function R_(s,e,t){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(i,p,r,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(i,p,r,d*a,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];t.update(_,i,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];t.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function C_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function P_(s,e,t){const i=new WeakMap,n=new We;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let p=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*T*4*u),L=new $h(A,R,T,u);L.type=Si,L.needsUpdate=!0;const w=x*4;for(let b=0;b<u;b++){const P=f[b],N=v[b],I=M[b],F=R*T*4*b;for(let k=0;k<P.count;k++){const B=k*w;g===!0&&(n.fromBufferAttribute(P,k),A[F+B+0]=n.x,A[F+B+1]=n.y,A[F+B+2]=n.z,A[F+B+3]=0),_===!0&&(n.fromBufferAttribute(N,k),A[F+B+4]=n.x,A[F+B+5]=n.y,A[F+B+6]=n.z,A[F+B+7]=0),m===!0&&(n.fromBufferAttribute(I,k),A[F+B+8]=n.x,A[F+B+9]=n.y,A[F+B+10]=n.z,A[F+B+11]=I.itemSize===4?n.w:1)}}d={count:u,texture:L,size:new Ce(R,T)},i.set(o,d),o.addEventListener("dispose",p)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function L_(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const gu=new Lt,Oc=new ru(1,1),_u=new $h,vu=new up,xu=new nu,Bc=[],zc=[],Vc=new Float32Array(16),kc=new Float32Array(9),Hc=new Float32Array(4);function xs(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Bc[n];if(r===void 0&&(r=new Float32Array(n),Bc[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function fa(s,e){let t=zc[e];t===void 0&&(t=new Int32Array(e),zc[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function I_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function D_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function N_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function U_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function F_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Hc.set(i),s.uniformMatrix2fv(this.addr,!1,Hc),wt(t,i)}}function O_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;kc.set(i),s.uniformMatrix3fv(this.addr,!1,kc),wt(t,i)}}function B_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Vc.set(i),s.uniformMatrix4fv(this.addr,!1,Vc),wt(t,i)}}function z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function k_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function H_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function G_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function W_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function j_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function X_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Oc.compareFunction=Yh,r=Oc):r=gu,t.setTexture2D(e||r,n)}function Y_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||vu,n)}function Z_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||xu,n)}function K_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||_u,n)}function $_(s){switch(s){case 5126:return I_;case 35664:return D_;case 35665:return N_;case 35666:return U_;case 35674:return F_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return V_;case 35668:case 35672:return k_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return W_;case 36295:return j_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return K_}}function J_(s,e){s.uniform1fv(this.addr,e)}function Q_(s,e){const t=xs(e,this.size,2);s.uniform2fv(this.addr,t)}function ev(s,e){const t=xs(e,this.size,3);s.uniform3fv(this.addr,t)}function tv(s,e){const t=xs(e,this.size,4);s.uniform4fv(this.addr,t)}function iv(s,e){const t=xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function nv(s,e){const t=xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sv(s,e){const t=xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rv(s,e){s.uniform1iv(this.addr,e)}function av(s,e){s.uniform2iv(this.addr,e)}function ov(s,e){s.uniform3iv(this.addr,e)}function lv(s,e){s.uniform4iv(this.addr,e)}function cv(s,e){s.uniform1uiv(this.addr,e)}function hv(s,e){s.uniform2uiv(this.addr,e)}function uv(s,e){s.uniform3uiv(this.addr,e)}function dv(s,e){s.uniform4uiv(this.addr,e)}function pv(s,e,t){const i=this.cache,n=e.length,r=fa(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||gu,r[a])}function fv(s,e,t){const i=this.cache,n=e.length,r=fa(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||vu,r[a])}function mv(s,e,t){const i=this.cache,n=e.length,r=fa(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||xu,r[a])}function gv(s,e,t){const i=this.cache,n=e.length,r=fa(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||_u,r[a])}function _v(s){switch(s){case 5126:return J_;case 35664:return Q_;case 35665:return ev;case 35666:return tv;case 35674:return iv;case 35675:return nv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return uv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}class vv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$_(t.type)}}class xv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_v(t.type)}}class yv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Gc(s,e){s.seq.push(e),s.map[e.id]=e}function Mv(s,e,t){const i=s.name,n=i.length;for(Qa.lastIndex=0;;){const r=Qa.exec(i),a=Qa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Gc(t,c===void 0?new vv(o,s,e):new xv(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new yv(o),Gc(t,h)),t=h}}}class Zr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);Mv(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Wc(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const bv=37297;let Sv=0;function Ev(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const jc=new Ue;function wv(s){ze._getMatrix(jc,ze.workingColorSpace,s);const e=`mat3( ${jc.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(s)){case ea:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qc(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+Ev(s.getShaderSource(e),a)}else return n}function Tv(s,e){const t=wv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Av(s,e){let t;switch(e){case yd:t="Linear";break;case Md:t="Reinhard";break;case bd:t="Cineon";break;case Sd:t="ACESFilmic";break;case wd:t="AgX";break;case Td:t="Neutral";break;case Ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nr=new U;function Rv(){ze.getLuminanceCoefficients(Nr);const s=Nr.x.toFixed(4),e=Nr.y.toFixed(4),t=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Pv(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Lv(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ns(s){return s!==""}function Xc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(s){return s.replace(Iv,Nv)}const Dv=new Map;function Nv(s,e){let t=Be[e];if(t===void 0){const i=Dv.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const Uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(s){return s.replace(Uv,Fv)}function Fv(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Kc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ov(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Bv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case os:case ls:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Vv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ra:e="ENVMAP_BLENDING_MULTIPLY";break;case vd:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function kv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Hv(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ov(t),c=Bv(t),h=zv(t),u=Vv(t),d=kv(t),p=Cv(t),g=Pv(r),_=n.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),f.length>0&&(f+=`
`)):(m=[Kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),f=[Kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tn?"#define TONE_MAPPING":"",t.toneMapping!==tn?Be.tonemapping_pars_fragment:"",t.toneMapping!==tn?Av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Tv("linearToOutputTexel",t.outputColorSpace),Rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),a=el(a),a=Xc(a,t),a=Yc(a,t),o=el(o),o=Xc(o,t),o=Yc(o,t),a=Zc(a),o=Zc(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+m+a,x=v+f+o,R=Wc(n,n.VERTEX_SHADER,M),T=Wc(n,n.FRAGMENT_SHADER,x);n.attachShader(_,R),n.attachShader(_,T),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function A(P){if(s.debug.checkShaderErrors){const N=n.getProgramInfoLog(_).trim(),I=n.getShaderInfoLog(R).trim(),F=n.getShaderInfoLog(T).trim();let k=!0,B=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,R,T);else{const q=qc(n,R,"vertex"),H=qc(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+q+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(I===""||F==="")&&(B=!1);B&&(P.diagnostics={runnable:k,programLog:N,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:f}})}n.deleteShader(R),n.deleteShader(T),L=new Zr(n,_),w=Lv(n,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(_,bv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Gv=0;class Wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jv(e),t.set(e,i)),i}}class jv{constructor(e){this.id=Gv++,this.code=e,this.usedTimes=0}}function qv(s,e,t,i,n,r,a){const o=new Jh,l=new Wv,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,P,N,I){const F=N.fog,k=I.geometry,B=w.isMeshStandardMaterial?N.environment:null,q=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),H=q&&q.mapping===aa?q.image.height:null,Y=g[w.type];w.precision!==null&&(p=n.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ye=re!==void 0?re.length:0;let ie=0;k.morphAttributes.position!==void 0&&(ie=1),k.morphAttributes.normal!==void 0&&(ie=2),k.morphAttributes.color!==void 0&&(ie=3);let Fe,Z,te,fe;if(Y){const Qe=yi[Y];Fe=Qe.vertexShader,Z=Qe.fragmentShader}else Fe=w.vertexShader,Z=w.fragmentShader,l.update(w),te=l.getVertexShaderID(w),fe=l.getFragmentShaderID(w);const se=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Pe=I.isInstancedMesh===!0,ke=I.isBatchedMesh===!0,rt=!!w.map,Ge=!!w.matcap,dt=!!q,D=!!w.aoMap,$t=!!w.lightMap,je=!!w.bumpMap,qe=!!w.normalMap,Ee=!!w.displacementMap,lt=!!w.emissiveMap,Se=!!w.metalnessMap,C=!!w.roughnessMap,S=w.anisotropy>0,G=w.clearcoat>0,$=w.dispersion>0,ee=w.iridescence>0,K=w.sheen>0,Me=w.transmission>0,ce=S&&!!w.anisotropyMap,_e=G&&!!w.clearcoatMap,Ze=G&&!!w.clearcoatNormalMap,ne=G&&!!w.clearcoatRoughnessMap,me=ee&&!!w.iridescenceMap,Ae=ee&&!!w.iridescenceThicknessMap,Le=K&&!!w.sheenColorMap,ge=K&&!!w.sheenRoughnessMap,Xe=!!w.specularMap,Oe=!!w.specularColorMap,at=!!w.specularIntensityMap,O=Me&&!!w.transmissionMap,le=Me&&!!w.thicknessMap,X=!!w.gradientMap,J=!!w.alphaMap,he=w.alphaTest>0,ae=!!w.alphaHash,Ye=!!w.extensions;let mt=tn;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(mt=s.toneMapping);const It={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:Fe,fragmentShader:Z,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ke,batchingColor:ke&&I._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&I.instanceColor!==null,instancingMorph:Pe&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:us,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:Ge,envMap:dt,envMapMode:dt&&q.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:$t,bumpMap:je,normalMap:qe,displacementMap:d&&Ee,emissiveMap:lt,normalMapObjectSpace:qe&&w.normalMapType===Id,normalMapTangentSpace:qe&&w.normalMapType===oa,metalnessMap:Se,roughnessMap:C,anisotropy:S,anisotropyMap:ce,clearcoat:G,clearcoatMap:_e,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ne,dispersion:$,iridescence:ee,iridescenceMap:me,iridescenceThicknessMap:Ae,sheen:K,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:Xe,specularColorMap:Oe,specularIntensityMap:at,transmission:Me,transmissionMap:O,thicknessMap:le,gradientMap:X,opaque:w.transparent===!1&&w.blending===ns&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:ae,combine:w.combine,mapUv:rt&&_(w.map.channel),aoMapUv:D&&_(w.aoMap.channel),lightMapUv:$t&&_(w.lightMap.channel),bumpMapUv:je&&_(w.bumpMap.channel),normalMapUv:qe&&_(w.normalMap.channel),displacementMapUv:Ee&&_(w.displacementMap.channel),emissiveMapUv:lt&&_(w.emissiveMap.channel),metalnessMapUv:Se&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:ce&&_(w.anisotropyMap.channel),clearcoatMapUv:_e&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(w.sheenRoughnessMap.channel),specularMapUv:Xe&&_(w.specularMap.channel),specularColorMapUv:Oe&&_(w.specularColorMap.channel),specularIntensityMapUv:at&&_(w.specularIntensityMap.channel),transmissionMapUv:O&&_(w.transmissionMap.channel),thicknessMapUv:le&&_(w.thicknessMap.channel),alphaMapUv:J&&_(w.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(qe||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(rt||J),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Te,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:mt,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&ze.getTransfer(w.map.colorSpace)===it,decodeVideoTextureEmissive:lt&&w.emissiveMap.isVideoTexture===!0&&ze.getTransfer(w.emissiveMap.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Bi,flipSided:w.side===Wt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ye&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&w.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function f(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(b,w),M(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function M(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){const b=g[w.type];let P;if(b){const N=yi[b];P=Sp.clone(N.uniforms)}else P=w.uniforms;return P}function R(w,b){let P;for(let N=0,I=h.length;N<I;N++){const F=h[N];if(F.cacheKey===b){P=F,++P.usedTimes;break}}return P===void 0&&(P=new Hv(s,b,w,r),h.push(P)),P}function T(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:L}}function Xv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Yv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $c(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jc(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Yv),i.length>1&&i.sort(d||$c),n.length>1&&n.sort(d||$c)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Zv(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new Jc,s.set(i,[a])):n>=r.length?(a=new Jc,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Kv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Re};break;case"SpotLight":t={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function $v(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Jv=0;function Qv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ex(s){const e=new Kv,t=$v(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const n=new U,r=new be,a=new be;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,M=0,x=0,R=0,T=0,A=0;c.sort(Qv);for(let w=0,b=c.length;w<b;w++){const P=c[w],N=P.color,I=P.intensity,F=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*I,u+=N.g*I,d+=N.b*I;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],I);A++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=B,p++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(N).multiplyScalar(I),B.distance=F,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[_]=B;const q=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=q.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=k,x++}_++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(N).multiplyScalar(I),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const q=P.shadow,H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=B,g++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(I),B.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[f]=B,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==x||L.numSpotMaps!==R||L.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=x,L.numSpotMaps=R,L.numLightProbes=A,i.version=Jv++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const M=c[f];if(M.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Qc(s){const e=new ex(s),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function tx(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let o;return a===void 0?(o=new Qc(s),e.set(n,[o])):r>=a.length?(o=new Qc(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sx(s,e,t){let i=new pl;const n=new Ce,r=new Ce,a=new We,o=new tf({depthPacking:Ld}),l=new nf,c={},h=t.maxTextureSize,u={[nn]:Wt,[Wt]:nn,[Bi]:Bi},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:ix,fragmentShader:nx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new fi;g.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let f=this.type;this.render=function(T,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(en),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const I=f!==Oi&&this.type===Oi,F=f===Oi&&this.type!==Oi;for(let k=0,B=T.length;k<B;k++){const q=T[k],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const Y=H.getFrameExtents();if(n.multiply(Y),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Y.x),n.x=r.x*Y.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Y.y),n.y=r.y*Y.y,H.mapSize.y=r.y)),H.map===null||I===!0||F===!0){const ye=this.type!==Oi?{minFilter:Zt,magFilter:Zt}:{};H.map!==null&&H.map.dispose(),H.map=new En(n.x,n.y,ye),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const re=H.getViewportCount();for(let ye=0;ye<re;ye++){const ie=H.getViewport(ye);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),N.viewport(a),H.updateMatrices(q,ye),i=H.getFrustum(),x(A,L,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Oi&&v(H,L),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(w,b,P)};function v(T,A){const L=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new En(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,L,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,L,p,_,null)}function M(T,A,L,w){let b=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=L.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=b.uuid,I=A.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let k=F[I];k===void 0&&(k=b.clone(),F[I]=k,A.addEventListener("dispose",R)),b=k}if(b.visible=A.visible,b.wireframe=A.wireframe,w===Oi?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=s.properties.get(b);N.light=L}return b}function x(T,A,L,w,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Oi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const N=e.update(T),I=T.material;if(Array.isArray(I)){const F=N.groups;for(let k=0,B=F.length;k<B;k++){const q=F[k],H=I[q.materialIndex];if(H&&H.visible){const Y=M(T,H,w,b);T.onBeforeShadow(s,T,A,L,N,Y,q),s.renderBufferDirect(L,null,N,Y,T,q),T.onAfterShadow(s,T,A,L,N,Y,q)}}}else if(I.visible){const F=M(T,I,w,b);T.onBeforeShadow(s,T,A,L,N,F,null),s.renderBufferDirect(L,null,N,F,T,null),T.onAfterShadow(s,T,A,L,N,F,null)}}const P=T.children;for(let N=0,I=P.length;N<I;N++)x(P[N],A,L,w,b)}function R(T){T.target.removeEventListener("dispose",R);for(const A in c){const L=c[A],w=T.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}const rx={[mo]:go,[_o]:yo,[vo]:Mo,[as]:xo,[go]:mo,[yo]:_o,[Mo]:vo,[xo]:as};function ax(s,e){function t(){let O=!1;const le=new We;let X=null;const J=new We(0,0,0,0);return{setMask:function(he){X!==he&&!O&&(s.colorMask(he,he,he,he),X=he)},setLocked:function(he){O=he},setClear:function(he,ae,Ye,mt,It){It===!0&&(he*=mt,ae*=mt,Ye*=mt),le.set(he,ae,Ye,mt),J.equals(le)===!1&&(s.clearColor(he,ae,Ye,mt),J.copy(le))},reset:function(){O=!1,X=null,J.set(-1,0,0,0)}}}function i(){let O=!1,le=!1,X=null,J=null,he=null;return{setReversed:function(ae){if(le!==ae){const Ye=e.get("EXT_clip_control");le?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const mt=he;he=null,this.setClear(mt)}le=ae},getReversed:function(){return le},setTest:function(ae){ae?se(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(ae){X!==ae&&!O&&(s.depthMask(ae),X=ae)},setFunc:function(ae){if(le&&(ae=rx[ae]),J!==ae){switch(ae){case mo:s.depthFunc(s.NEVER);break;case go:s.depthFunc(s.ALWAYS);break;case _o:s.depthFunc(s.LESS);break;case as:s.depthFunc(s.LEQUAL);break;case vo:s.depthFunc(s.EQUAL);break;case xo:s.depthFunc(s.GEQUAL);break;case yo:s.depthFunc(s.GREATER);break;case Mo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ae}},setLocked:function(ae){O=ae},setClear:function(ae){he!==ae&&(le&&(ae=1-ae),s.clearDepth(ae),he=ae)},reset:function(){O=!1,X=null,J=null,he=null,le=!1}}}function n(){let O=!1,le=null,X=null,J=null,he=null,ae=null,Ye=null,mt=null,It=null;return{setTest:function(Qe){O||(Qe?se(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Qe){le!==Qe&&!O&&(s.stencilMask(Qe),le=Qe)},setFunc:function(Qe,ni,Ti){(X!==Qe||J!==ni||he!==Ti)&&(s.stencilFunc(Qe,ni,Ti),X=Qe,J=ni,he=Ti)},setOp:function(Qe,ni,Ti){(ae!==Qe||Ye!==ni||mt!==Ti)&&(s.stencilOp(Qe,ni,Ti),ae=Qe,Ye=ni,mt=Ti)},setLocked:function(Qe){O=Qe},setClear:function(Qe){It!==Qe&&(s.clearStencil(Qe),It=Qe)},reset:function(){O=!1,le=null,X=null,J=null,he=null,ae=null,Ye=null,mt=null,It=null}}}const r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,M=null,x=null,R=null,T=null,A=new Re(0,0,0),L=0,w=!1,b=null,P=null,N=null,I=null,F=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,q=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=q>=2);let Y=null,re={};const ye=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Fe=new We().fromArray(ye),Z=new We().fromArray(ie);function te(O,le,X,J){const he=new Uint8Array(4),ae=s.createTexture();s.bindTexture(O,ae),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<X;Ye++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(le+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return ae}const fe={};fe[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(s.DEPTH_TEST),a.setFunc(as),je(!1),qe(Fl),se(s.CULL_FACE),D(en);function se(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Te(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Pe(O,le){return u[O]!==le?(s.bindFramebuffer(O,le),u[O]=le,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=le),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=le),!0):!1}function ke(O,le){let X=p,J=!1;if(O){X=d.get(le),X===void 0&&(X=[],d.set(le,X));const he=O.textures;if(X.length!==he.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,Ye=he.length;ae<Ye;ae++)X[ae]=s.COLOR_ATTACHMENT0+ae;X.length=he.length,J=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,J=!0);J&&s.drawBuffers(X)}function rt(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Ge={[vn]:s.FUNC_ADD,[td]:s.FUNC_SUBTRACT,[id]:s.FUNC_REVERSE_SUBTRACT};Ge[nd]=s.MIN,Ge[sd]=s.MAX;const dt={[rd]:s.ZERO,[ad]:s.ONE,[od]:s.SRC_COLOR,[po]:s.SRC_ALPHA,[pd]:s.SRC_ALPHA_SATURATE,[ud]:s.DST_COLOR,[cd]:s.DST_ALPHA,[ld]:s.ONE_MINUS_SRC_COLOR,[fo]:s.ONE_MINUS_SRC_ALPHA,[dd]:s.ONE_MINUS_DST_COLOR,[hd]:s.ONE_MINUS_DST_ALPHA,[fd]:s.CONSTANT_COLOR,[md]:s.ONE_MINUS_CONSTANT_COLOR,[gd]:s.CONSTANT_ALPHA,[_d]:s.ONE_MINUS_CONSTANT_ALPHA};function D(O,le,X,J,he,ae,Ye,mt,It,Qe){if(O===en){_===!0&&(Te(s.BLEND),_=!1);return}if(_===!1&&(se(s.BLEND),_=!0),O!==ed){if(O!==m||Qe!==w){if((f!==vn||x!==vn)&&(s.blendEquation(s.FUNC_ADD),f=vn,x=vn),Qe)switch(O){case ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ol:s.blendFunc(s.ONE,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ol:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,M=null,R=null,T=null,A.set(0,0,0),L=0,m=O,w=Qe}return}he=he||le,ae=ae||X,Ye=Ye||J,(le!==f||he!==x)&&(s.blendEquationSeparate(Ge[le],Ge[he]),f=le,x=he),(X!==v||J!==M||ae!==R||Ye!==T)&&(s.blendFuncSeparate(dt[X],dt[J],dt[ae],dt[Ye]),v=X,M=J,R=ae,T=Ye),(mt.equals(A)===!1||It!==L)&&(s.blendColor(mt.r,mt.g,mt.b,It),A.copy(mt),L=It),m=O,w=!1}function $t(O,le){O.side===Bi?Te(s.CULL_FACE):se(s.CULL_FACE);let X=O.side===Wt;le&&(X=!X),je(X),O.blending===ns&&O.transparent===!1?D(en):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const J=O.stencilWrite;o.setTest(J),J&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),lt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){b!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),b=O)}function qe(O){O!==$u?(se(s.CULL_FACE),O!==P&&(O===Fl?s.cullFace(s.BACK):O===Ju?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),P=O}function Ee(O){O!==N&&(B&&s.lineWidth(O),N=O)}function lt(O,le,X){O?(se(s.POLYGON_OFFSET_FILL),(I!==le||F!==X)&&(s.polygonOffset(le,X),I=le,F=X)):Te(s.POLYGON_OFFSET_FILL)}function Se(O){O?se(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function C(O){O===void 0&&(O=s.TEXTURE0+k-1),Y!==O&&(s.activeTexture(O),Y=O)}function S(O,le,X){X===void 0&&(Y===null?X=s.TEXTURE0+k-1:X=Y);let J=re[X];J===void 0&&(J={type:void 0,texture:void 0},re[X]=J),(J.type!==O||J.texture!==le)&&(Y!==X&&(s.activeTexture(X),Y=X),s.bindTexture(O,le||fe[O]),J.type=O,J.texture=le)}function G(){const O=re[Y];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(O){Fe.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Fe.copy(O))}function ge(O){Z.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Z.copy(O))}function Xe(O,le){let X=c.get(le);X===void 0&&(X=new WeakMap,c.set(le,X));let J=X.get(O);J===void 0&&(J=s.getUniformBlockIndex(le,O.name),X.set(O,J))}function Oe(O,le){const X=c.get(le).get(O);l.get(le)!==X&&(s.uniformBlockBinding(le,X,O.__bindingPointIndex),l.set(le,X))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Y=null,re={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,M=null,x=null,R=null,T=null,A=new Re(0,0,0),L=0,w=!1,b=null,P=null,N=null,I=null,F=null,Fe.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Te,bindFramebuffer:Pe,drawBuffers:ke,useProgram:rt,setBlending:D,setMaterial:$t,setFlipSided:je,setCullFace:qe,setLineWidth:Ee,setPolygonOffset:lt,setScissorTest:Se,activeTexture:C,bindTexture:S,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:me,texImage3D:Ae,updateUBOMapping:Xe,uniformBlockBinding:Oe,texStorage2D:Ze,texStorage3D:ne,texSubImage2D:K,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:_e,scissor:Le,viewport:ge,reset:at}}function ox(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):Ws("canvas")}function _(C,S,G){let $=1;const ee=Se(C);if((ee.width>G||ee.height>G)&&($=G/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor($*ee.width),Me=Math.floor($*ee.height);u===void 0&&(u=g(K,Me));const ce=S?g(K,Me):u;return ce.width=K,ce.height=Me,ce.getContext("2d").drawImage(C,0,0,K,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Me+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,S,G,$,ee=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===s.RED&&(G===s.FLOAT&&(K=s.R32F),G===s.HALF_FLOAT&&(K=s.R16F),G===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.R8UI),G===s.UNSIGNED_SHORT&&(K=s.R16UI),G===s.UNSIGNED_INT&&(K=s.R32UI),G===s.BYTE&&(K=s.R8I),G===s.SHORT&&(K=s.R16I),G===s.INT&&(K=s.R32I)),S===s.RG&&(G===s.FLOAT&&(K=s.RG32F),G===s.HALF_FLOAT&&(K=s.RG16F),G===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RG8UI),G===s.UNSIGNED_SHORT&&(K=s.RG16UI),G===s.UNSIGNED_INT&&(K=s.RG32UI),G===s.BYTE&&(K=s.RG8I),G===s.SHORT&&(K=s.RG16I),G===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGB8UI),G===s.UNSIGNED_SHORT&&(K=s.RGB16UI),G===s.UNSIGNED_INT&&(K=s.RGB32UI),G===s.BYTE&&(K=s.RGB8I),G===s.SHORT&&(K=s.RGB16I),G===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),G===s.UNSIGNED_INT&&(K=s.RGBA32UI),G===s.BYTE&&(K=s.RGBA8I),G===s.SHORT&&(K=s.RGBA16I),G===s.INT&&(K=s.RGBA32I)),S===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){const Me=ee?ea:ze.getTransfer($);G===s.FLOAT&&(K=s.RGBA32F),G===s.HALF_FLOAT&&(K=s.RGBA16F),G===s.UNSIGNED_BYTE&&(K=Me===it?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(C,S){let G;return C?S===null||S===Sn||S===cs?G=s.DEPTH24_STENCIL8:S===Si?G=s.DEPTH32F_STENCIL8:S===Gs&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Sn||S===cs?G=s.DEPTH_COMPONENT24:S===Si?G=s.DEPTH_COMPONENT32F:S===Gs&&(G=s.DEPTH_COMPONENT16),G}function R(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==bi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&h.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),b(S)}function L(C){const S=i.get(C);if(S.__webglInit===void 0)return;const G=C.source,$=d.get(G);if($){const ee=$[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(C),Object.keys($).length===0&&d.delete(G)}i.remove(C)}function w(C){const S=i.get(C);s.deleteTexture(S.__webglTexture);const G=C.source,$=d.get(G);delete $[S.__cacheKey],a.memory.textures--}function b(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ee=0;ee<S.__webglFramebuffer[$].length;ee++)s.deleteFramebuffer(S.__webglFramebuffer[$][ee]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=C.textures;for(let $=0,ee=G.length;$<ee;$++){const K=i.get(G[$]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(G[$])}i.remove(C)}let P=0;function N(){P=0}function I(){const C=P;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),P+=1,C}function F(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function k(C,S){const G=i.get(C);if(C.isVideoTexture&&Ee(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,C,S);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function B(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Z(G,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function q(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Z(G,C,S);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function H(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){te(G,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}const Y={[Hs]:s.REPEAT,[zi]:s.CLAMP_TO_EDGE,[So]:s.MIRRORED_REPEAT},re={[Zt]:s.NEAREST,[Rd]:s.NEAREST_MIPMAP_NEAREST,[lr]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[ya]:s.LINEAR_MIPMAP_NEAREST,[Mn]:s.LINEAR_MIPMAP_LINEAR},ye={[Dd]:s.NEVER,[zd]:s.ALWAYS,[Nd]:s.LESS,[Yh]:s.LEQUAL,[Ud]:s.EQUAL,[Bd]:s.GEQUAL,[Fd]:s.GREATER,[Od]:s.NOTEQUAL};function ie(C,S){if(S.type===Si&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===bi||S.magFilter===ya||S.magFilter===lr||S.magFilter===Mn||S.minFilter===bi||S.minFilter===ya||S.minFilter===lr||S.minFilter===Mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Y[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Y[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Y[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,re[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zt||S.minFilter!==lr&&S.minFilter!==Mn||S.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Fe(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const $=S.source;let ee=d.get($);ee===void 0&&(ee={},d.set($,ee));const K=F(S);if(K!==C.__cacheKey){ee[K]===void 0&&(ee[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[K].usedTimes++;const Me=ee[C.__cacheKey];Me!==void 0&&(ee[C.__cacheKey].usedTimes--,Me.usedTimes===0&&w(S)),C.__cacheKey=K,C.__webglTexture=ee[K].texture}return G}function Z(C,S,G){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);const ee=Fe(C,S),K=S.source;t.bindTexture($,C.__webglTexture,s.TEXTURE0+G);const Me=i.get(K);if(K.version!==Me.__version||ee===!0){t.activeTexture(s.TEXTURE0+G);const ce=ze.getPrimaries(ze.workingColorSpace),_e=S.colorSpace===Ji?null:ze.getPrimaries(S.colorSpace),Ze=S.colorSpace===Ji||ce===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ne=_(S.image,!1,n.maxTextureSize);ne=lt(S,ne);const me=r.convert(S.format,S.colorSpace),Ae=r.convert(S.type);let Le=M(S.internalFormat,me,Ae,S.colorSpace,S.isVideoTexture);ie($,S);let ge;const Xe=S.mipmaps,Oe=S.isVideoTexture!==!0,at=Me.__version===void 0||ee===!0,O=K.dataReady,le=R(S,ne);if(S.isDepthTexture)Le=x(S.format===hs,S.type),at&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Le,ne.width,ne.height,0,me,Ae,null));else if(S.isDataTexture)if(Xe.length>0){Oe&&at&&t.texStorage2D(s.TEXTURE_2D,le,Le,Xe[0].width,Xe[0].height);for(let X=0,J=Xe.length;X<J;X++)ge=Xe[X],Oe?O&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,ge.width,ge.height,me,Ae,ge.data):t.texImage2D(s.TEXTURE_2D,X,Le,ge.width,ge.height,0,me,Ae,ge.data);S.generateMipmaps=!1}else Oe?(at&&t.texStorage2D(s.TEXTURE_2D,le,Le,ne.width,ne.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,me,Ae,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Le,ne.width,ne.height,0,me,Ae,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Le,Xe[0].width,Xe[0].height,ne.depth);for(let X=0,J=Xe.length;X<J;X++)if(ge=Xe[X],S.format!==ii)if(me!==null)if(Oe){if(O)if(S.layerUpdates.size>0){const he=Cc(ge.width,ge.height,S.format,S.type);for(const ae of S.layerUpdates){const Ye=ge.data.subarray(ae*he/ge.data.BYTES_PER_ELEMENT,(ae+1)*he/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,ae,ge.width,ge.height,1,me,Ye)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Le,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ne.depth,me,Ae,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,Le,ge.width,ge.height,ne.depth,0,me,Ae,ge.data)}else{Oe&&at&&t.texStorage2D(s.TEXTURE_2D,le,Le,Xe[0].width,Xe[0].height);for(let X=0,J=Xe.length;X<J;X++)ge=Xe[X],S.format!==ii?me!==null?Oe?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,X,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?O&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,ge.width,ge.height,me,Ae,ge.data):t.texImage2D(s.TEXTURE_2D,X,Le,ge.width,ge.height,0,me,Ae,ge.data)}else if(S.isDataArrayTexture)if(Oe){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Le,ne.width,ne.height,ne.depth),O)if(S.layerUpdates.size>0){const X=Cc(ne.width,ne.height,S.format,S.type);for(const J of S.layerUpdates){const he=ne.data.subarray(J*X/ne.data.BYTES_PER_ELEMENT,(J+1)*X/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,me,Ae,he)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Ae,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,me,Ae,ne.data);else if(S.isData3DTexture)Oe?(at&&t.texStorage3D(s.TEXTURE_3D,le,Le,ne.width,ne.height,ne.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Ae,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,me,Ae,ne.data);else if(S.isFramebufferTexture){if(at)if(Oe)t.texStorage2D(s.TEXTURE_2D,le,Le,ne.width,ne.height);else{let X=ne.width,J=ne.height;for(let he=0;he<le;he++)t.texImage2D(s.TEXTURE_2D,he,Le,X,J,0,me,Ae,null),X>>=1,J>>=1}}else if(Xe.length>0){if(Oe&&at){const X=Se(Xe[0]);t.texStorage2D(s.TEXTURE_2D,le,Le,X.width,X.height)}for(let X=0,J=Xe.length;X<J;X++)ge=Xe[X],Oe?O&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,me,Ae,ge):t.texImage2D(s.TEXTURE_2D,X,Le,me,Ae,ge);S.generateMipmaps=!1}else if(Oe){if(at){const X=Se(ne);t.texStorage2D(s.TEXTURE_2D,le,Le,X.width,X.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Ae,ne)}else t.texImage2D(s.TEXTURE_2D,0,Le,me,Ae,ne);m(S)&&f($),Me.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,G){if(S.image.length!==6)return;const $=Fe(C,S),ee=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);const K=i.get(ee);if(ee.version!==K.__version||$===!0){t.activeTexture(s.TEXTURE0+G);const Me=ze.getPrimaries(ze.workingColorSpace),ce=S.colorSpace===Ji?null:ze.getPrimaries(S.colorSpace),_e=S.colorSpace===Ji||Me===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ze=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!Ze&&!ne?me[J]=_(S.image[J],!0,n.maxCubemapSize):me[J]=ne?S.image[J].image:S.image[J],me[J]=lt(S,me[J]);const Ae=me[0],Le=r.convert(S.format,S.colorSpace),ge=r.convert(S.type),Xe=M(S.internalFormat,Le,ge,S.colorSpace),Oe=S.isVideoTexture!==!0,at=K.__version===void 0||$===!0,O=ee.dataReady;let le=R(S,Ae);ie(s.TEXTURE_CUBE_MAP,S);let X;if(Ze){Oe&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Xe,Ae.width,Ae.height);for(let J=0;J<6;J++){X=me[J].mipmaps;for(let he=0;he<X.length;he++){const ae=X[he];S.format!==ii?Le!==null?Oe?O&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,ae.width,ae.height,Le,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Xe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,ae.width,ae.height,Le,ge,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Xe,ae.width,ae.height,0,Le,ge,ae.data)}}}else{if(X=S.mipmaps,Oe&&at){X.length>0&&le++;const J=Se(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Xe,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Oe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,Le,ge,me[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,me[J].width,me[J].height,0,Le,ge,me[J].data);for(let he=0;he<X.length;he++){const ae=X[he].image[J].image;Oe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,ae.width,ae.height,Le,ge,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Xe,ae.width,ae.height,0,Le,ge,ae.data)}}else{Oe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,ge,me[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,Le,ge,me[J]);for(let he=0;he<X.length;he++){const ae=X[he];Oe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Le,ge,ae.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Xe,Le,ge,ae.image[J])}}}m(S)&&f(s.TEXTURE_CUBE_MAP),K.__version=ee.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function fe(C,S,G,$,ee,K){const Me=r.convert(G.format,G.colorSpace),ce=r.convert(G.type),_e=M(G.internalFormat,Me,ce,G.colorSpace),Ze=i.get(S),ne=i.get(G);if(ne.__renderTarget=S,!Ze.__hasExternalTextures){const me=Math.max(1,S.width>>K),Ae=Math.max(1,S.height>>K);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,_e,me,Ae,S.depth,0,Me,ce,null):t.texImage2D(ee,K,_e,me,Ae,0,Me,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),qe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,ee,ne.__webglTexture,0,je(S)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,ee,ne.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(C,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const $=S.depthTexture,ee=$&&$.isDepthTexture?$.type:null,K=x(S.stencilBuffer,ee),Me=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=je(S);qe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,K,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,C)}else{const $=S.textures;for(let ee=0;ee<$.length;ee++){const K=$[ee],Me=r.convert(K.format,K.colorSpace),ce=r.convert(K.type),_e=M(K.internalFormat,Me,ce,K.colorSpace),Ze=je(S);G&&qe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,_e,S.width,S.height):qe(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,_e,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_e,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(S.depthTexture);G.__renderTarget=S,(!G.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const $=G.__webglTexture,ee=je(S);if(S.depthTexture.format===ss)qe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(S.depthTexture.format===hs)qe(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pe(C){const S=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=$}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),se(S.__webglDepthbuffer[$],C,!1);else{const ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),se(S.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(C,S,G){const $=i.get(C);S!==void 0&&fe($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Pe(C)}function rt(C){const S=C.texture,G=i.get(C),$=i.get(S);C.addEventListener("dispose",A);const ee=C.textures,K=C.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,a.memory.textures++),K){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let _e=0;_e<S.mipmaps.length;_e++)G.__webglFramebuffer[ce][_e]=s.createFramebuffer()}else G.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)G.__webglFramebuffer[ce]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Me)for(let ce=0,_e=ee.length;ce<_e;ce++){const Ze=i.get(ee[ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&qe(C)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const _e=ee[ce];G.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const Ze=r.convert(_e.format,_e.colorSpace),ne=r.convert(_e.type),me=M(_e.internalFormat,Ze,ne,_e.colorSpace,C.isXRRenderTarget===!0),Ae=je(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,me,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),se(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),ie(s.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)fe(G.__webglFramebuffer[ce][_e],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else fe(G.__webglFramebuffer[ce],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,_e=ee.length;ce<_e;ce++){const Ze=ee[ce],ne=i.get(Ze);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),ie(s.TEXTURE_2D,Ze),fe(G.__webglFramebuffer,C,Ze,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),m(Ze)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,$.__webglTexture),ie(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)fe(G.__webglFramebuffer[_e],C,S,s.COLOR_ATTACHMENT0,ce,_e);else fe(G.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ce,0);m(S)&&f(ce),t.unbindTexture()}C.depthBuffer&&Pe(C)}function Ge(C){const S=C.textures;for(let G=0,$=S.length;G<$;G++){const ee=S[G];if(m(ee)){const K=v(C),Me=i.get(ee).__webglTexture;t.bindTexture(K,Me),f(K),t.unbindTexture()}}}const dt=[],D=[];function $t(C){if(C.samples>0){if(qe(C)===!1){const S=C.textures,G=C.width,$=C.height;let ee=s.COLOR_BUFFER_BIT;const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=i.get(C),ce=S.length>1;if(ce)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const Ze=i.get(S[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,ee,s.NEAREST),l===!0&&(dt.length=0,D.length=0,dt.push(s.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(dt.push(K),D.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const Ze=i.get(S[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function je(C){return Math.min(n.maxSamples,C.samples)}function qe(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ee(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function lt(C,S){const G=C.colorSpace,$=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==us&&G!==Ji&&(ze.getTransfer(G)===it?($!==ii||ee!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=ke,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=qe}function lx(s,e){function t(i,n=Ji){let r;const a=ze.getTransfer(n);if(i===Hi)return s.UNSIGNED_BYTE;if(i===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===al)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Vh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return s.BYTE;if(i===zh)return s.SHORT;if(i===Gs)return s.UNSIGNED_SHORT;if(i===sl)return s.INT;if(i===Sn)return s.UNSIGNED_INT;if(i===Si)return s.FLOAT;if(i===Js)return s.HALF_FLOAT;if(i===kh)return s.ALPHA;if(i===Hh)return s.RGB;if(i===ii)return s.RGBA;if(i===Gh)return s.LUMINANCE;if(i===Wh)return s.LUMINANCE_ALPHA;if(i===ss)return s.DEPTH_COMPONENT;if(i===hs)return s.DEPTH_STENCIL;if(i===jh)return s.RED;if(i===ol)return s.RED_INTEGER;if(i===qh)return s.RG;if(i===ll)return s.RG_INTEGER;if(i===cl)return s.RGBA_INTEGER;if(i===Wr||i===jr||i===qr||i===Xr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eo||i===wo||i===To||i===Ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Co||i===Po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ro||i===Co)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Po)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lo||i===Io||i===Do||i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===zo||i===Vo||i===ko||i===Ho||i===Go||i===Wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Lo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Do)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===No)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ko)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ho)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Go)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yr||i===jo||i===qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yr)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xh||i===Xo||i===Yo||i===Zo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const cx={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cx)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Lt,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new sn({vertexShader:hx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class px extends An{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new dx,m=t.getContextAttributes();let f=null,v=null;const M=[],x=[],R=new Ce;let T=null;const A=new Vt;A.viewport=new We;const L=new Vt;L.viewport=new We;const w=[A,L],b=new Sf;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=M[Z];return te===void 0&&(te=new eo,M[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=M[Z];return te===void 0&&(te=new eo,M[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=M[Z];return te===void 0&&(te=new eo,M[Z]=te),te.getHandSpace()};function I(Z){const te=x.indexOf(Z.inputSource);if(te===-1)return;const fe=M[te];fe!==void 0&&(fe.update(Z.inputSource,Z.frame,c||a),fe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){n.removeEventListener("select",I),n.removeEventListener("selectstart",I),n.removeEventListener("selectend",I),n.removeEventListener("squeeze",I),n.removeEventListener("squeezestart",I),n.removeEventListener("squeezeend",I),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",k);for(let Z=0;Z<M.length;Z++){const te=x[Z];te!==null&&(x[Z]=null,M[Z].disconnect(te))}P=null,N=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,n=null,v=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",I),n.addEventListener("selectstart",I),n.addEventListener("selectend",I),n.addEventListener("squeeze",I),n.addEventListener("squeezestart",I),n.addEventListener("squeezeend",I),n.addEventListener("end",F),n.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),n.enabledFeatures!==void 0&&n.enabledFeatures.includes("layers")){let te=null,fe=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?hs:ss,fe=m.stencil?cs:Sn);const Te={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(Te),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new En(d.textureWidth,d.textureHeight,{format:ii,type:Hi,depthTexture:new ru(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,te),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new En(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Fe.setContext(n),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(Z){for(let te=0;te<Z.removed.length;te++){const fe=Z.removed[te],se=x.indexOf(fe);se>=0&&(x[se]=null,M[se].disconnect(fe))}for(let te=0;te<Z.added.length;te++){const fe=Z.added[te];let se=x.indexOf(fe);if(se===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=x.length){x.push(fe),se=Pe;break}else if(x[Pe]===null){x[Pe]=fe,se=Pe;break}if(se===-1)break}const Te=M[se];Te&&Te.connect(fe)}}const B=new U,q=new U;function H(Z,te,fe){B.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);const se=B.distanceTo(q),Te=te.projectionMatrix.elements,Pe=fe.projectionMatrix.elements,ke=Te[14]/(Te[10]-1),rt=Te[14]/(Te[10]+1),Ge=(Te[9]+1)/Te[5],dt=(Te[9]-1)/Te[5],D=(Te[8]-1)/Te[0],$t=(Pe[8]+1)/Pe[0],je=ke*D,qe=ke*$t,Ee=se/(-D+$t),lt=Ee*-D;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(lt),Z.translateZ(Ee),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Se=ke+Ee,C=rt+Ee,S=je-lt,G=qe+(se-lt),$=Ge*rt/C*Se,ee=dt*rt/C*Se;Z.projectionMatrix.makePerspective(S,G,$,ee,Se,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Y(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let te=Z.near,fe=Z.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),b.near=L.near=A.near=te,b.far=L.far=A.far=fe,(P!==b.near||N!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,N=b.far),A.layers.mask=Z.layers.mask|2,L.layers.mask=Z.layers.mask|4,b.layers.mask=A.layers.mask|L.layers.mask;const se=Z.parent,Te=b.cameras;Y(b,se);for(let Pe=0;Pe<Te.length;Pe++)Y(Te[Pe],se);Te.length===2?H(b,A,L):b.projectionMatrix.copy(A.projectionMatrix),re(Z,b,se)};function re(Z,te,fe){fe===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(fe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ds*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ye=null;function ie(Z,te){if(h=te.getViewerPose(c||a),g=te,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let se=!1;fe.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let Pe=0;Pe<fe.length;Pe++){const ke=fe[Pe];let rt=null;if(p!==null)rt=p.getViewport(ke);else{const dt=u.getViewSubImage(d,ke);rt=dt.viewport,Pe===0&&(e.setRenderTargetTextures(v,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(v))}let Ge=w[Pe];Ge===void 0&&(Ge=new Vt,Ge.layers.enable(Pe),Ge.viewport=new We,w[Pe]=Ge),Ge.matrix.fromArray(ke.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(ke.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(rt.x,rt.y,rt.width,rt.height),Pe===0&&(b.matrix.copy(Ge.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(Ge)}const Te=n.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Pe=u.getDepthInformation(fe[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,n.renderState)}}for(let fe=0;fe<M.length;fe++){const se=x[fe],Te=M[fe];se!==null&&Te!==void 0&&Te.update(se,te,c||a)}ye&&ye(Z,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Fe=new mu;Fe.setAnimationLoop(ie),this.setAnimationLoop=function(Z){ye=Z},this.dispose=function(){}}}const mn=new St,fx=new be;function mx(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,tu(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,v,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,mn.copy(x),mn.x*=-1,mn.y*=-1,mn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mn.y*=-1,mn.z*=-1),m.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(mn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function gx(s,e,t,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;i.uniformBlockBinding(v,x)}function c(v,M){let x=n[v.id];x===void 0&&(g(v),x=h(v),n[v.id]=x,v.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(v,R);const T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){const M=u();v.__bindingPointIndex=M;const x=s.createBuffer(),R=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=n[v.id],x=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let T=0,A=x.length;T<A;T++){const L=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,b=L.length;w<b;w++){const P=L[w];if(p(P,T,w,R)===!0){const N=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let k=0;k<I.length;k++){const B=I[k],q=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,N+F,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,F),F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,M,x,R){const T=v.value,A=M+"_"+x;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const L=R[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return R[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(v){const M=v.uniforms;let x=0;const R=16;for(let A=0,L=M.length;A<L;A++){const w=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,P=w.length;b<P;b++){const N=w[b],I=Array.isArray(N.value)?N.value:[N.value];for(let F=0,k=I.length;F<k;F++){const B=I[F],q=_(B),H=x%R,Y=H%q.boundary,re=H+Y;x+=Y,re!==0&&R-re<q.storage&&(x+=R-re),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=q.storage}}}const T=x%R;return T>0&&(x+=R-T),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function f(){for(const v in n)s.deleteBuffer(n[v]);a=[],n={},r={}}return{bind:l,update:c,dispose:f}}class _x{constructor(e={}){const{canvas:t=ip(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this.toneMapping=tn,this.toneMappingExposure=1;const x=this;let R=!1,T=0,A=0,L=null,w=-1,b=null;const P=new We,N=new We;let I=null;const F=new Re(0);let k=0,B=t.width,q=t.height,H=1,Y=null,re=null;const ye=new We(0,0,B,q),ie=new We(0,0,B,q);let Fe=!1;const Z=new pl;let te=!1,fe=!1;this.transmissionResolutionScale=1;const se=new be,Te=new be,Pe=new U,ke=new We,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function dt(){return L===null?H:1}let D=i;function $t(E,V){return t.getContext(E,V)}try{const E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const V="webgl2";if(D=$t(V,E),D===null)throw $t(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let je,qe,Ee,lt,Se,C,S,G,$,ee,K,Me,ce,_e,Ze,ne,me,Ae,Le,ge,Xe,Oe,at,O;function le(){je=new T_(D),je.init(),Oe=new lx(D,je),qe=new y_(D,je,e,Oe),Ee=new ax(D,je),qe.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),lt=new C_(D),Se=new Xv,C=new ox(D,je,Ee,Se,qe,Oe,lt),S=new b_(x),G=new w_(x),$=new Ff(D),at=new v_(D,$),ee=new A_(D,$,lt,at),K=new L_(D,ee,$,lt),Le=new P_(D,qe,C),ne=new M_(Se),Me=new qv(x,S,G,je,qe,at,ne),ce=new mx(x,Se),_e=new Zv,Ze=new tx(je),Ae=new __(x,S,G,Ee,K,p,l),me=new sx(x,K,qe),O=new gx(D,lt,qe,Ee),ge=new x_(D,je,lt),Xe=new R_(D,je,lt),lt.programs=Me.programs,x.capabilities=qe,x.extensions=je,x.properties=Se,x.renderLists=_e,x.shadowMap=me,x.state=Ee,x.info=lt}le();const X=new px(x,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(B,q,!1))},this.getSize=function(E){return E.set(B,q)},this.setSize=function(E,V,W=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,q=V,t.width=Math.floor(E*H),t.height=Math.floor(V*H),W===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(B*H,q*H).floor()},this.setDrawingBufferSize=function(E,V,W){B=E,q=V,H=W,t.width=Math.floor(E*W),t.height=Math.floor(V*W),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,V,W,j){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,V,W,j),Ee.viewport(P.copy(ye).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,V,W,j){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,V,W,j),Ee.scissor(N.copy(ie).multiplyScalar(H).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(E){Ee.setScissorTest(Fe=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(E=!0,V=!0,W=!0){let j=0;if(E){let z=!1;if(L!==null){const Q=L.texture.format;z=Q===cl||Q===ll||Q===ol}if(z){const Q=L.texture.type,ue=Q===Hi||Q===Sn||Q===Gs||Q===cs||Q===rl||Q===al,de=Ae.getClearColor(),xe=Ae.getClearAlpha(),De=de.r,Ie=de.g,Ne=de.b;ue?(g[0]=De,g[1]=Ie,g[2]=Ne,g[3]=xe,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=De,_[1]=Ie,_[2]=Ne,_[3]=xe,D.clearBufferiv(D.COLOR,0,_))}else j|=D.COLOR_BUFFER_BIT}V&&(j|=D.DEPTH_BUFFER_BIT),W&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ae.dispose(),_e.dispose(),Ze.dispose(),Se.dispose(),S.dispose(),G.dispose(),K.dispose(),at.dispose(),O.dispose(),Me.dispose(),X.dispose(),X.removeEventListener("sessionstart",Cl),X.removeEventListener("sessionend",Pl),on.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=lt.autoReset,V=me.enabled,W=me.autoUpdate,j=me.needsUpdate,z=me.type;le(),lt.autoReset=E,me.enabled=V,me.autoUpdate=W,me.needsUpdate=j,me.type=z}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ye(E){const V=E.target;V.removeEventListener("dispose",Ye),mt(V)}function mt(E){It(E),Se.remove(E)}function It(E){const V=Se.get(E).programs;V!==void 0&&(V.forEach(function(W){Me.releaseProgram(W)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,W,j,z,Q){V===null&&(V=rt);const ue=z.isMesh&&z.matrixWorld.determinant()<0,de=ju(E,V,W,j,z);Ee.setMaterial(j,ue);let xe=W.index,De=1;if(j.wireframe===!0){if(xe=ee.getWireframeAttribute(W),xe===void 0)return;De=2}const Ie=W.drawRange,Ne=W.attributes.position;let Ke=Ie.start*De,et=(Ie.start+Ie.count)*De;Q!==null&&(Ke=Math.max(Ke,Q.start*De),et=Math.min(et,(Q.start+Q.count)*De)),xe!==null?(Ke=Math.max(Ke,0),et=Math.min(et,xe.count)):Ne!=null&&(Ke=Math.max(Ke,0),et=Math.min(et,Ne.count));const yt=et-Ke;if(yt<0||yt===1/0)return;at.setup(z,j,de,W,xe);let tt,ot=ge;if(xe!==null&&(tt=$.get(xe),ot=Xe,ot.setIndex(tt)),z.isMesh)j.wireframe===!0?(Ee.setLineWidth(j.wireframeLinewidth*dt()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(z.isLine){let we=j.linewidth;we===void 0&&(we=1),Ee.setLineWidth(we*dt()),z.isLineSegments?ot.setMode(D.LINES):z.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else z.isPoints?ot.setMode(D.POINTS):z.isSprite&&ot.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ot.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const we=z._multiDrawStarts,Ft=z._multiDrawCounts,ln=z._multiDrawCount,si=xe?$.get(xe).bytesPerElement:1,Pn=Se.get(j).currentProgram.getUniforms();for(let jt=0;jt<ln;jt++)Pn.setValue(D,"_gl_DrawID",jt),ot.render(we[jt]/si,Ft[jt])}else if(z.isInstancedMesh)ot.renderInstances(Ke,yt,z.count);else if(W.isInstancedBufferGeometry){const we=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ft=Math.min(W.instanceCount,we);ot.renderInstances(Ke,yt,Ft)}else ot.render(Ke,yt)};function Qe(E,V,W){E.transparent===!0&&E.side===Bi&&E.forceSinglePass===!1?(E.side=Wt,E.needsUpdate=!0,or(E,V,W),E.side=nn,E.needsUpdate=!0,or(E,V,W),E.side=Bi):or(E,V,W)}this.compile=function(E,V,W=null){W===null&&(W=E),f=Ze.get(W),f.init(V),M.push(f),W.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const j=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const Q=z.material;if(Q)if(Array.isArray(Q))for(let ue=0;ue<Q.length;ue++){const de=Q[ue];Qe(de,W,z),j.add(de)}else Qe(Q,W,z),j.add(Q)}),M.pop(),f=null,j},this.compileAsync=function(E,V,W=null){const j=this.compile(E,V,W);return new Promise(z=>{function Q(){if(j.forEach(function(ue){Se.get(ue).currentProgram.isReady()&&j.delete(ue)}),j.size===0){z(E);return}setTimeout(Q,10)}je.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ni=null;function Ti(E){ni&&ni(E)}function Cl(){on.stop()}function Pl(){on.start()}const on=new mu;on.setAnimationLoop(Ti),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(E){ni=E,X.setAnimationLoop(E),E===null?on.stop():on.start()},X.addEventListener("sessionstart",Cl),X.addEventListener("sessionend",Pl),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(V),V=X.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,V,L),f=Ze.get(E,M.length),f.init(V),M.push(f),Te.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix(Te),fe=this.localClippingEnabled,te=ne.init(this.clippingPlanes,fe),m=_e.get(E,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&va(Q,V,-1/0,x.sortObjects)}va(E,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,re),Ge=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ge&&Ae.addToRenderList(m,E),this.info.render.frame++,te===!0&&ne.beginShadows();const W=f.state.shadowsArray;me.render(W,E,V),te===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,z=m.transmissive;if(f.setupLights(),V.isArrayCamera){const Q=V.cameras;if(z.length>0)for(let ue=0,de=Q.length;ue<de;ue++){const xe=Q[ue];Il(j,z,E,xe)}Ge&&Ae.render(E);for(let ue=0,de=Q.length;ue<de;ue++){const xe=Q[ue];Ll(m,E,xe,xe.viewport)}}else z.length>0&&Il(j,z,E,V),Ge&&Ae.render(E),Ll(m,E,V);L!==null&&A===0&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(x,E,V),at.resetDefaultState(),w=-1,b=null,M.pop(),M.length>0?(f=M[M.length-1],te===!0&&ne.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function va(E,V,W,j){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){j&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Te);const Q=K.update(E),ue=E.material;ue.visible&&m.push(E,Q,ue,W,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){const Q=K.update(E),ue=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),ke.copy(Q.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(Te)),Array.isArray(ue)){const de=Q.groups;for(let xe=0,De=de.length;xe<De;xe++){const Ie=de[xe],Ne=ue[Ie.materialIndex];Ne&&Ne.visible&&m.push(E,Q,Ne,W,ke.z,Ie)}}else ue.visible&&m.push(E,Q,ue,W,ke.z,null)}}const z=E.children;for(let Q=0,ue=z.length;Q<ue;Q++)va(z[Q],V,W,j)}function Ll(E,V,W,j){const z=E.opaque,Q=E.transmissive,ue=E.transparent;f.setupLightsView(W),te===!0&&ne.setGlobalState(x.clippingPlanes,W),j&&Ee.viewport(P.copy(j)),z.length>0&&ar(z,V,W),Q.length>0&&ar(Q,V,W),ue.length>0&&ar(ue,V,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Il(E,V,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[j.id]===void 0&&(f.state.transmissionRenderTarget[j.id]=new En(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Js:Hi,minFilter:Mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const z=f.state.transmissionRenderTarget[j.id],Q=j.viewport||P;z.setSize(Q.z*x.transmissionResolutionScale,Q.w*x.transmissionResolutionScale);const ue=x.getRenderTarget();x.setRenderTarget(z),x.getClearColor(F),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&Ae.render(W);const de=x.toneMapping;x.toneMapping=tn;const xe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),f.setupLightsView(j),te===!0&&ne.setGlobalState(x.clippingPlanes,j),ar(E,W,j),C.updateMultisampleRenderTarget(z),C.updateRenderTargetMipmap(z),je.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ie=0,Ne=V.length;Ie<Ne;Ie++){const Ke=V[Ie],et=Ke.object,yt=Ke.geometry,tt=Ke.material,ot=Ke.group;if(tt.side===Bi&&et.layers.test(j.layers)){const we=tt.side;tt.side=Wt,tt.needsUpdate=!0,Dl(et,W,j,yt,tt,ot),tt.side=we,tt.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(z),C.updateRenderTargetMipmap(z))}x.setRenderTarget(ue),x.setClearColor(F,k),xe!==void 0&&(j.viewport=xe),x.toneMapping=de}function ar(E,V,W){const j=V.isScene===!0?V.overrideMaterial:null;for(let z=0,Q=E.length;z<Q;z++){const ue=E[z],de=ue.object,xe=ue.geometry,De=j===null?ue.material:j,Ie=ue.group;de.layers.test(W.layers)&&Dl(de,V,W,xe,De,Ie)}}function Dl(E,V,W,j,z,Q){E.onBeforeRender(x,V,W,j,z,Q),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,V,W,j,E,Q),z.transparent===!0&&z.side===Bi&&z.forceSinglePass===!1?(z.side=Wt,z.needsUpdate=!0,x.renderBufferDirect(W,V,j,z,E,Q),z.side=nn,z.needsUpdate=!0,x.renderBufferDirect(W,V,j,z,E,Q),z.side=Bi):x.renderBufferDirect(W,V,j,z,E,Q),E.onAfterRender(x,V,W,j,z,Q)}function or(E,V,W){V.isScene!==!0&&(V=rt);const j=Se.get(E),z=f.state.lights,Q=f.state.shadowsArray,ue=z.state.version,de=Me.getParameters(E,z.state,Q,V,W),xe=Me.getProgramCacheKey(de);let De=j.programs;j.environment=E.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(E.isMeshStandardMaterial?G:S).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Ye),De=new Map,j.programs=De);let Ie=De.get(xe);if(Ie!==void 0){if(j.currentProgram===Ie&&j.lightsStateVersion===ue)return Ul(E,de),Ie}else de.uniforms=Me.getUniforms(E),E.onBeforeCompile(de,x),Ie=Me.acquireProgram(de,xe),De.set(xe,Ie),j.uniforms=de.uniforms;const Ne=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=ne.uniform),Ul(E,de),j.needsLights=Xu(E),j.lightsStateVersion=ue,j.needsLights&&(Ne.ambientLightColor.value=z.state.ambient,Ne.lightProbe.value=z.state.probe,Ne.directionalLights.value=z.state.directional,Ne.directionalLightShadows.value=z.state.directionalShadow,Ne.spotLights.value=z.state.spot,Ne.spotLightShadows.value=z.state.spotShadow,Ne.rectAreaLights.value=z.state.rectArea,Ne.ltc_1.value=z.state.rectAreaLTC1,Ne.ltc_2.value=z.state.rectAreaLTC2,Ne.pointLights.value=z.state.point,Ne.pointLightShadows.value=z.state.pointShadow,Ne.hemisphereLights.value=z.state.hemi,Ne.directionalShadowMap.value=z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ne.spotShadowMap.value=z.state.spotShadowMap,Ne.spotLightMatrix.value=z.state.spotLightMatrix,Ne.spotLightMap.value=z.state.spotLightMap,Ne.pointShadowMap.value=z.state.pointShadowMap,Ne.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=Ie,j.uniformsList=null,Ie}function Nl(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=Zr.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Ul(E,V){const W=Se.get(E);W.outputColorSpace=V.outputColorSpace,W.batching=V.batching,W.batchingColor=V.batchingColor,W.instancing=V.instancing,W.instancingColor=V.instancingColor,W.instancingMorph=V.instancingMorph,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function ju(E,V,W,j,z){V.isScene!==!0&&(V=rt),C.resetTextureUnits();const Q=V.fog,ue=j.isMeshStandardMaterial?V.environment:null,de=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:us,xe=(j.isMeshStandardMaterial?G:S).get(j.envMap||ue),De=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ne=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,et=!!W.morphAttributes.color;let yt=tn;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(yt=x.toneMapping);const tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ot=tt!==void 0?tt.length:0,we=Se.get(j),Ft=f.state.lights;if(te===!0&&(fe===!0||E!==b)){const Ct=E===b&&j.id===w;ne.setState(j,E,Ct)}let ln=!1;j.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ft.state.version||we.outputColorSpace!==de||z.isBatchedMesh&&we.batching===!1||!z.isBatchedMesh&&we.batching===!0||z.isBatchedMesh&&we.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&we.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&we.instancing===!1||!z.isInstancedMesh&&we.instancing===!0||z.isSkinnedMesh&&we.skinning===!1||!z.isSkinnedMesh&&we.skinning===!0||z.isInstancedMesh&&we.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&we.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&we.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&we.instancingMorph===!1&&z.morphTexture!==null||we.envMap!==xe||j.fog===!0&&we.fog!==Q||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ne.numPlanes||we.numIntersection!==ne.numIntersection)||we.vertexAlphas!==De||we.vertexTangents!==Ie||we.morphTargets!==Ne||we.morphNormals!==Ke||we.morphColors!==et||we.toneMapping!==yt||we.morphTargetsCount!==ot)&&(ln=!0):(ln=!0,we.__version=j.version);let si=we.currentProgram;ln===!0&&(si=or(j,V,z));let Pn=!1,jt=!1,Ss=!1;const pt=si.getUniforms(),Jt=we.uniforms;if(Ee.useProgram(si.program)&&(Pn=!0,jt=!0,Ss=!0),j.id!==w&&(w=j.id,jt=!0),Pn||b!==E){Ee.buffers.depth.getReversed()?(se.copy(E.projectionMatrix),sp(se),rp(se),pt.setValue(D,"projectionMatrix",se)):pt.setValue(D,"projectionMatrix",E.projectionMatrix),pt.setValue(D,"viewMatrix",E.matrixWorldInverse);const Ct=pt.map.cameraPosition;Ct!==void 0&&Ct.setValue(D,Pe.setFromMatrixPosition(E.matrixWorld)),qe.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&pt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,jt=!0,Ss=!0)}if(z.isSkinnedMesh){pt.setOptional(D,z,"bindMatrix"),pt.setOptional(D,z,"bindMatrixInverse");const Ct=z.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),pt.setValue(D,"boneTexture",Ct.boneTexture,C))}z.isBatchedMesh&&(pt.setOptional(D,z,"batchingTexture"),pt.setValue(D,"batchingTexture",z._matricesTexture,C),pt.setOptional(D,z,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",z._indirectTexture,C),pt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",z._colorsTexture,C));const Qt=W.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Le.update(z,W,si),(jt||we.receiveShadow!==z.receiveShadow)&&(we.receiveShadow=z.receiveShadow,pt.setValue(D,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Jt.envMap.value=xe,Jt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Jt.envMapIntensity.value=V.environmentIntensity),jt&&(pt.setValue(D,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&qu(Jt,Ss),Q&&j.fog===!0&&ce.refreshFogUniforms(Jt,Q),ce.refreshMaterialUniforms(Jt,j,H,q,f.state.transmissionRenderTarget[E.id]),Zr.upload(D,Nl(we),Jt,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Zr.upload(D,Nl(we),Jt,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&pt.setValue(D,"center",z.center),pt.setValue(D,"modelViewMatrix",z.modelViewMatrix),pt.setValue(D,"normalMatrix",z.normalMatrix),pt.setValue(D,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ct=j.uniformsGroups;for(let ri=0,xa=Ct.length;ri<xa;ri++){const cn=Ct[ri];O.update(cn,si),O.bind(cn,si)}}return si}function qu(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Xu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,V,W){Se.get(E.texture).__webglTexture=V,Se.get(E.depthTexture).__webglTexture=W;const j=Se.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,V){const W=Se.get(E);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0};const Yu=D.createFramebuffer();this.setRenderTarget=function(E,V=0,W=0){L=E,T=V,A=W;let j=!0,z=null,Q=!1,ue=!1;if(E){const de=Se.get(E);if(de.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(de.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(de.__hasExternalTextures)C.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ie=E.depthTexture;if(de.__boundDepthTexture!==Ie){if(Ie!==null&&Se.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);const De=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[V])?z=De[V][W]:z=De[V],Q=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?z=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?z=De[W]:z=De,P.copy(E.viewport),N.copy(E.scissor),I=E.scissorTest}else P.copy(ye).multiplyScalar(H).floor(),N.copy(ie).multiplyScalar(H).floor(),I=Fe;if(W!==0&&(z=Yu),Ee.bindFramebuffer(D.FRAMEBUFFER,z)&&j&&Ee.drawBuffers(E,z),Ee.viewport(P),Ee.scissor(N),Ee.setScissorTest(I),Q){const de=Se.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,de.__webglTexture,W)}else if(ue){const de=Se.get(E.texture),xe=V;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,de.__webglTexture,W,xe)}else if(E!==null&&W!==0){const de=Se.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,W)}w=-1},this.readRenderTargetPixels=function(E,V,W,j,z,Q,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(de=de[ue]),de){Ee.bindFramebuffer(D.FRAMEBUFFER,de);try{const xe=E.texture,De=xe.format,Ie=xe.type;if(!qe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-j&&W>=0&&W<=E.height-z&&D.readPixels(V,W,j,z,Oe.convert(De),Oe.convert(Ie),Q)}finally{const xe=L!==null?Se.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(E,V,W,j,z,Q,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(de=de[ue]),de){const xe=E.texture,De=xe.format,Ie=xe.type;if(!qe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=E.width-j&&W>=0&&W<=E.height-z){Ee.bindFramebuffer(D.FRAMEBUFFER,de);const Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(V,W,j,z,Oe.convert(De),Oe.convert(Ie),0);const Ke=L!==null?Se.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Ke);const et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await np(D,et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(Ne),D.deleteSync(et),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,V=null,W=0){E.isTexture!==!0&&(Kn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-W),z=Math.floor(E.image.width*j),Q=Math.floor(E.image.height*j),ue=V!==null?V.x:0,de=V!==null?V.y:0;C.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ue,de,z,Q),Ee.unbindTexture()};const Zu=D.createFramebuffer(),Ku=D.createFramebuffer();this.copyTextureToTexture=function(E,V,W=null,j=null,z=0,Q=null){E.isTexture!==!0&&(Kn("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],V=arguments[2],Q=arguments[3]||0,W=null),Q===null&&(z!==0?(Kn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=z,z=0):Q=0);let ue,de,xe,De,Ie,Ne,Ke,et,yt;const tt=E.isCompressedTexture?E.mipmaps[Q]:E.image;if(W!==null)ue=W.max.x-W.min.x,de=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,De=W.min.x,Ie=W.min.y,Ne=W.isBox3?W.min.z:0;else{const Qt=Math.pow(2,-z);ue=Math.floor(tt.width*Qt),de=Math.floor(tt.height*Qt),E.isDataArrayTexture?xe=tt.depth:E.isData3DTexture?xe=Math.floor(tt.depth*Qt):xe=1,De=0,Ie=0,Ne=0}j!==null?(Ke=j.x,et=j.y,yt=j.z):(Ke=0,et=0,yt=0);const ot=Oe.convert(V.format),we=Oe.convert(V.type);let Ft;V.isData3DTexture?(C.setTexture3D(V,0),Ft=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(C.setTexture2DArray(V,0),Ft=D.TEXTURE_2D_ARRAY):(C.setTexture2D(V,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const ln=D.getParameter(D.UNPACK_ROW_LENGTH),si=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Pn=D.getParameter(D.UNPACK_SKIP_PIXELS),jt=D.getParameter(D.UNPACK_SKIP_ROWS),Ss=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,De),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne);const pt=E.isDataArrayTexture||E.isData3DTexture,Jt=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const Qt=Se.get(E),Ct=Se.get(V),ri=Se.get(Qt.__renderTarget),xa=Se.get(Ct.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,ri.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,xa.__webglFramebuffer);for(let cn=0;cn<xe;cn++)pt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,z,Ne+cn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(V).__webglTexture,Q,yt+cn)),D.blitFramebuffer(De,Ie,ue,de,Ke,et,ue,de,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Se.has(E)){const Qt=Se.get(E),Ct=Se.get(V);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Zu),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ku);for(let ri=0;ri<xe;ri++)pt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qt.__webglTexture,z,Ne+ri):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qt.__webglTexture,z),Jt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.__webglTexture,Q,yt+ri):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ct.__webglTexture,Q),z!==0?D.blitFramebuffer(De,Ie,ue,de,Ke,et,ue,de,D.COLOR_BUFFER_BIT,D.NEAREST):Jt?D.copyTexSubImage3D(Ft,Q,Ke,et,yt+ri,De,Ie,ue,de):D.copyTexSubImage2D(Ft,Q,Ke,et,De,Ie,ue,de);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Jt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ft,Q,Ke,et,yt,ue,de,xe,ot,we,tt.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,Q,Ke,et,yt,ue,de,xe,ot,tt.data):D.texSubImage3D(Ft,Q,Ke,et,yt,ue,de,xe,ot,we,tt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,Ke,et,ue,de,ot,we,tt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,Ke,et,tt.width,tt.height,ot,tt.data):D.texSubImage2D(D.TEXTURE_2D,Q,Ke,et,ue,de,ot,we,tt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ln),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,si),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pn),D.pixelStorei(D.UNPACK_SKIP_ROWS,jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ss),Q===0&&V.generateMipmaps&&D.generateMipmap(Ft),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,V,W=null,j=null,z=0){return E.isTexture!==!0&&(Kn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,E=arguments[2],V=arguments[3],z=arguments[4]||0),Kn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,V,W,j,z)},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){T=0,A=0,L=null,Ee.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}class pi{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new y);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new y);const i=this.elements,n=e.x,r=e.y,a=e.z;return t.x=i[0]*n+i[1]*r+i[2]*a,t.y=i[3]*n+i[4]*r+i[5]*a,t.z=i[6]*n+i[7]*r+i[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new pi);const i=this.elements,n=e.elements,r=t.elements,a=i[0],o=i[1],l=i[2],c=i[3],h=i[4],u=i[5],d=i[6],p=i[7],g=i[8],_=n[0],m=n[1],f=n[2],v=n[3],M=n[4],x=n[5],R=n[6],T=n[7],A=n[8];return r[0]=a*_+o*v+l*R,r[1]=a*m+o*M+l*T,r[2]=a*f+o*x+l*A,r[3]=c*_+h*v+u*R,r[4]=c*m+h*M+u*T,r[5]=c*f+h*x+u*A,r[6]=d*_+p*v+g*R,r[7]=d*m+p*M+g*T,r[8]=d*f+p*x+g*A,t}scale(e,t){t===void 0&&(t=new pi);const i=this.elements,n=t.elements;for(let r=0;r!==3;r++)n[3*r+0]=e.x*i[3*r+0],n[3*r+1]=e.y*i[3*r+1],n[3*r+2]=e.z*i[3*r+2];return t}solve(e,t){t===void 0&&(t=new y);const i=3,n=4,r=[];let a,o;for(a=0;a<i*n;a++)r.push(0);for(a=0;a<3;a++)for(o=0;o<3;o++)r[a+n*o]=this.elements[a+3*o];r[3+4*0]=e.x,r[3+4*1]=e.y,r[3+4*2]=e.z;let l=3;const c=l;let h;const u=4;let d;do{if(a=c-l,r[a+n*a]===0){for(o=a+1;o<c;o++)if(r[a+n*o]!==0){h=u;do d=u-h,r[d+n*a]+=r[d+n*o];while(--h);break}}if(r[a+n*a]!==0)for(o=a+1;o<c;o++){const p=r[a+n*o]/r[a+n*a];h=u;do d=u-h,r[d+n*o]=d<=a?0:r[d+n*o]-r[d+n*a]*p;while(--h)}}while(--l);if(t.z=r[2*n+3]/r[2*n+2],t.y=(r[1*n+3]-r[1*n+2]*t.z)/r[1*n+1],t.x=(r[0*n+3]-r[0*n+2]*t.z-r[0*n+1]*t.y)/r[0*n+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new pi);const t=3,i=6,n=vx;let r,a;for(r=0;r<3;r++)for(a=0;a<3;a++)n[r+i*a]=this.elements[r+3*a];n[3+6*0]=1,n[3+6*1]=0,n[3+6*2]=0,n[4+6*0]=0,n[4+6*1]=1,n[4+6*2]=0,n[5+6*0]=0,n[5+6*1]=0,n[5+6*2]=1;let o=3;const l=o;let c;const h=i;let u;do{if(r=l-o,n[r+i*r]===0){for(a=r+1;a<l;a++)if(n[r+i*a]!==0){c=h;do u=h-c,n[u+i*r]+=n[u+i*a];while(--c);break}}if(n[r+i*r]!==0)for(a=r+1;a<l;a++){const d=n[r+i*a]/n[r+i*r];c=h;do u=h-c,n[u+i*a]=u<=r?0:n[u+i*a]-n[u+i*r]*d;while(--c)}}while(--o);r=2;do{a=r-1;do{const d=n[r+i*a]/n[r+i*r];c=i;do u=i-c,n[u+i*a]=n[u+i*a]-n[u+i*r]*d;while(--c)}while(a--)}while(--r);r=2;do{const d=1/n[r+i*r];c=i;do u=i-c,n[u+i*r]=n[u+i*r]*d;while(--c)}while(r--);r=2;do{a=2;do{if(u=n[t+a+i*r],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,a,u)}while(a--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,n=e.z,r=e.w,a=t+t,o=i+i,l=n+n,c=t*a,h=t*o,u=t*l,d=i*o,p=i*l,g=n*l,_=r*a,m=r*o,f=r*l,v=this.elements;return v[3*0+0]=1-(d+g),v[3*0+1]=h-f,v[3*0+2]=u+m,v[3*1+0]=h+f,v[3*1+1]=1-(c+g),v[3*1+2]=p-_,v[3*2+0]=u-m,v[3*2+1]=p+_,v[3*2+2]=1-(c+d),this}transpose(e){e===void 0&&(e=new pi);const t=this.elements,i=e.elements;let n;return i[0]=t[0],i[4]=t[4],i[8]=t[8],n=t[1],i[1]=t[3],i[3]=n,n=t[2],i[2]=t[6],i[6]=n,n=t[5],i[5]=t[7],i[7]=n,e}}const vx=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new y);const i=e.x,n=e.y,r=e.z,a=this.x,o=this.y,l=this.z;return t.x=o*r-l*n,t.y=l*i-a*r,t.z=a*n-o*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new y(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new y(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new pi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,n=Math.sqrt(e*e+t*t+i*i);if(n>0){const r=1/n;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return n}unit(e){e===void 0&&(e=new y);const t=this.x,i=this.y,n=this.z;let r=Math.sqrt(t*t+i*i+n*n);return r>0?(r=1/r,e.x=t*r,e.y=i*r,e.z=n*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z;return Math.sqrt((r-t)*(r-t)+(a-i)*(a-i)+(o-n)*(o-n))}distanceSquared(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z;return(r-t)*(r-t)+(a-i)*(a-i)+(o-n)*(o-n)}scale(e,t){t===void 0&&(t=new y);const i=this.x,n=this.y,r=this.z;return t.x=e*i,t.y=e*n,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new y),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new y),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new y),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const n=xx,r=1/i;n.set(this.x*r,this.y*r,this.z*r);const a=yx;Math.abs(n.x)<.9?(a.set(1,0,0),n.cross(a,e)):(a.set(0,1,0),n.cross(a,e)),n.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const n=this.x,r=this.y,a=this.z;i.x=n+(e.x-n)*t,i.y=r+(e.y-r)*t,i.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(eh),eh.almostEquals(e,t)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const xx=new y,yx=new y,eh=new y;class Kt{constructor(e){e===void 0&&(e={}),this.lowerBound=new y,this.upperBound=new y,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,n){const r=this.lowerBound,a=this.upperBound,o=i;r.copy(e[0]),o&&o.vmult(r,r),a.copy(r);for(let l=1;l<e.length;l++){let c=e[l];o&&(o.vmult(c,th),c=th),c.x>a.x&&(a.x=c.x),c.x<r.x&&(r.x=c.x),c.y>a.y&&(a.y=c.y),c.y<r.y&&(r.y=c.y),c.z>a.z&&(a.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(a,a)),n&&(r.x-=n,r.y-=n,r.z-=n,a.x+=n,a.y+=n,a.z+=n),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Kt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,n=e.lowerBound,r=e.upperBound,a=n.x<=i.x&&i.x<=r.x||t.x<=r.x&&r.x<=i.x,o=n.y<=i.y&&i.y<=r.y||t.y<=r.y&&r.y<=i.y,l=n.z<=i.z&&i.z<=r.z||t.z<=r.z&&r.z<=i.z;return a&&o&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,n=e.lowerBound,r=e.upperBound;return t.x<=n.x&&i.x>=r.x&&t.y<=n.y&&i.y>=r.y&&t.z<=n.z&&i.z>=r.z}getCorners(e,t,i,n,r,a,o,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),i.set(h.x,h.y,c.z),n.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),a.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const i=ih,n=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7];this.getCorners(n,r,a,o,l,c,h,u);for(let d=0;d!==8;d++){const p=i[d];e.pointToLocal(p,p)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=ih,n=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7];this.getCorners(n,r,a,o,l,c,h,u);for(let d=0;d!==8;d++){const p=i[d];e.pointToWorld(p,p)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,n=1/t.x,r=1/t.y,a=1/t.z,o=(this.lowerBound.x-i.x)*n,l=(this.upperBound.x-i.x)*n,c=(this.lowerBound.y-i.y)*r,h=(this.upperBound.y-i.y)*r,u=(this.lowerBound.z-i.z)*a,d=(this.upperBound.z-i.z)*a,p=Math.max(Math.max(Math.min(o,l),Math.min(c,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,h)),Math.max(u,d));return!(g<0||p>g)}}const th=new y,ih=[new y,new y,new y,new y,new y,new y,new y,new y];class nh{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:n}=t;if(n>i){const r=n;n=i,i=r}return this.matrix[(i*(i+1)>>1)+n-1]}set(e,t,i){let{index:n}=e,{index:r}=t;if(r>n){const a=r;r=n,n=a}this.matrix[(n*(n+1)>>1)+r-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class yu{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const n=i[e].indexOf(t);return n!==-1&&i[e].splice(n,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let i=0,n=t.length;i<n;i++)t[i].call(this,e)}return this}}class gt{constructor(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),this.x=e,this.y=t,this.z=i,this.w=n}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new y),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=Mx,n=bx;e.tangents(i,n),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new gt);const i=this.x,n=this.y,r=this.z,a=this.w,o=e.x,l=e.y,c=e.z,h=e.w;return t.x=i*h+a*o+n*c-r*l,t.y=n*h+a*l+r*o-i*c,t.z=r*h+a*c+i*l-n*o,t.w=a*h-i*o-n*l-r*c,t}inverse(e){e===void 0&&(e=new gt);const t=this.x,i=this.y,n=this.z,r=this.w;this.conjugate(e);const a=1/(t*t+i*i+n*n+r*r);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new gt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new y);const i=e.x,n=e.y,r=e.z,a=this.x,o=this.y,l=this.z,c=this.w,h=c*i+o*r-l*n,u=c*n+l*i-a*r,d=c*r+a*n-o*i,p=-a*i-o*n-l*r;return t.x=h*c+p*-a+u*-l-d*-o,t.y=u*c+p*-o+d*-a-h*-l,t.z=d*c+p*-l+h*-o-u*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,n,r;const a=this.x,o=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=a*o+l*c;if(h>.499&&(i=2*Math.atan2(a,c),n=Math.PI/2,r=0),h<-.499&&(i=-2*Math.atan2(a,c),n=-Math.PI/2,r=0),i===void 0){const u=a*a,d=o*o,p=l*l;i=Math.atan2(2*o*c-2*a*l,1-2*d-2*p),n=Math.asin(2*h),r=Math.atan2(2*a*c-2*o*l,1-2*u-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=n,e.x=r}setFromEuler(e,t,i,n){n===void 0&&(n="XYZ");const r=Math.cos(e/2),a=Math.cos(t/2),o=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(i/2);return n==="XYZ"?(this.x=l*a*o+r*c*h,this.y=r*c*o-l*a*h,this.z=r*a*h+l*c*o,this.w=r*a*o-l*c*h):n==="YXZ"?(this.x=l*a*o+r*c*h,this.y=r*c*o-l*a*h,this.z=r*a*h-l*c*o,this.w=r*a*o+l*c*h):n==="ZXY"?(this.x=l*a*o-r*c*h,this.y=r*c*o+l*a*h,this.z=r*a*h+l*c*o,this.w=r*a*o-l*c*h):n==="ZYX"?(this.x=l*a*o-r*c*h,this.y=r*c*o+l*a*h,this.z=r*a*h-l*c*o,this.w=r*a*o+l*c*h):n==="YZX"?(this.x=l*a*o+r*c*h,this.y=r*c*o+l*a*h,this.z=r*a*h-l*c*o,this.w=r*a*o-l*c*h):n==="XZY"&&(this.x=l*a*o-r*c*h,this.y=r*c*o-l*a*h,this.z=r*a*h+l*c*o,this.w=r*a*o+l*c*h),this}clone(){return new gt(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new gt);const n=this.x,r=this.y,a=this.z,o=this.w;let l=e.x,c=e.y,h=e.z,u=e.w,d,p,g,_,m;return p=n*l+r*c+a*h+o*u,p<0&&(p=-p,l=-l,c=-c,h=-h,u=-u),1-p>1e-6?(d=Math.acos(p),g=Math.sin(d),_=Math.sin((1-t)*d)/g,m=Math.sin(t*d)/g):(_=1-t,m=t),i.x=_*n+m*l,i.y=_*r+m*c,i.z=_*a+m*h,i.w=_*o+m*u,i}integrate(e,t,i,n){n===void 0&&(n=new gt);const r=e.x*i.x,a=e.y*i.y,o=e.z*i.z,l=this.x,c=this.y,h=this.z,u=this.w,d=t*.5;return n.x+=d*(r*u+a*h-o*c),n.y+=d*(a*u+o*l-r*h),n.z+=d*(o*u+r*c-a*l),n.w+=d*(-r*l-a*c-o*h),n}}const Mx=new y,bx=new y,Sx={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ve{constructor(e){e===void 0&&(e={}),this.id=ve.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,n){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ve.idCounter=0;ve.types=Sx;class $e{constructor(e){e===void 0&&(e={}),this.position=new y,this.quaternion=new gt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return $e.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return $e.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,n){return n===void 0&&(n=new y),i.vsub(e,n),t.conjugate(sh),sh.vmult(n,n),n}static pointToWorldFrame(e,t,i,n){return n===void 0&&(n=new y),t.vmult(i,n),n.vadd(e,n),n}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new y),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,n){return n===void 0&&(n=new y),t.w*=-1,t.vmult(i,n),t.w*=-1,n}}const sh=new gt;class Bs extends ve{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:n=[],axes:r,boundingSphereRadius:a}=e;super({type:ve.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=n,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const n=new y;for(let r=0;r!==e.length;r++){const a=e[r],o=a.length;for(let l=0;l!==o;l++){const c=(l+1)%o;t[a[l]].vsub(t[a[c]],n),n.normalize();let h=!1;for(let u=0;u!==i.length;u++)if(i[u].almostEquals(n)||i[u].almostEquals(n)){h=!0;break}h||i.push(n.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let n=0;n<this.faces[e].length;n++)if(!this.vertices[this.faces[e][n]])throw new Error(`Vertex ${this.faces[e][n]} not found!`);const t=this.faceNormals[e]||new y;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let n=0;n<this.faces[e].length;n++)console.warn(`.vertices[${this.faces[e][n]}] = Vec3(${this.vertices[this.faces[e][n]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],n=this.vertices[i[0]],r=this.vertices[i[1]],a=this.vertices[i[2]];Bs.computeNormal(n,r,a,t)}static computeNormal(e,t,i,n){const r=new y,a=new y;t.vsub(e,a),i.vsub(t,r),r.cross(a,n),n.isZero()||n.normalize()}clipAgainstHull(e,t,i,n,r,a,o,l,c){const h=new y;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){h.copy(i.faceNormals[g]),r.vmult(h,h);const _=h.dot(a);_>d&&(d=_,u=g)}const p=[];for(let g=0;g<i.faces[u].length;g++){const _=i.vertices[i.faces[u][g]],m=new y;m.copy(_),r.vmult(m,m),n.vadd(m,m),p.push(m)}u>=0&&this.clipFaceAgainstHull(a,e,t,p,o,l,c)}findSeparatingAxis(e,t,i,n,r,a,o,l){const c=new y,h=new y,u=new y,d=new y,p=new y,g=new y;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){i.vmult(m.uniqueAxes[f],c);const v=m.testSepAxis(c,e,t,i,n,r);if(v===!1)return!1;v<_&&(_=v,a.copy(c))}else{const f=o?o.length:m.faces.length;for(let v=0;v<f;v++){const M=o?o[v]:v;c.copy(m.faceNormals[M]),i.vmult(c,c);const x=m.testSepAxis(c,e,t,i,n,r);if(x===!1)return!1;x<_&&(_=x,a.copy(c))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){r.vmult(e.uniqueAxes[f],h);const v=m.testSepAxis(h,e,t,i,n,r);if(v===!1)return!1;v<_&&(_=v,a.copy(h))}else{const f=l?l.length:e.faces.length;for(let v=0;v<f;v++){const M=l?l[v]:v;h.copy(e.faceNormals[M]),r.vmult(h,h);const x=m.testSepAxis(h,e,t,i,n,r);if(x===!1)return!1;x<_&&(_=x,a.copy(h))}}for(let f=0;f!==m.uniqueEdges.length;f++){i.vmult(m.uniqueEdges[f],d);for(let v=0;v!==e.uniqueEdges.length;v++)if(r.vmult(e.uniqueEdges[v],p),d.cross(p,g),!g.almostZero()){g.normalize();const M=m.testSepAxis(g,e,t,i,n,r);if(M===!1)return!1;M<_&&(_=M,a.copy(g))}}return n.vsub(t,u),u.dot(a)>0&&a.negate(a),!0}testSepAxis(e,t,i,n,r,a){const o=this;Bs.project(o,e,i,n,to),Bs.project(t,e,r,a,io);const l=to[0],c=to[1],h=io[0],u=io[1];if(l<u||h<c)return!1;const d=l-u,p=h-c;return d<p?d:p}calculateLocalInertia(e,t){const i=new y,n=new y;this.computeLocalAABB(n,i);const r=i.x-n.x,a=i.y-n.y,o=i.z-n.z;t.x=1/12*e*(2*a*2*a+2*o*2*o),t.y=1/12*e*(2*r*2*r+2*o*2*o),t.z=1/12*e*(2*a*2*a+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],n=this.vertices[t[0]];return-i.dot(n)}clipFaceAgainstHull(e,t,i,n,r,a,o){const l=new y,c=new y,h=new y,u=new y,d=new y,p=new y,g=new y,_=new y,m=this,f=[],v=n,M=f;let x=-1,R=Number.MAX_VALUE;for(let b=0;b<m.faces.length;b++){l.copy(m.faceNormals[b]),i.vmult(l,l);const P=l.dot(e);P<R&&(R=P,x=b)}if(x<0)return;const T=m.faces[x];T.connectedFaces=[];for(let b=0;b<m.faces.length;b++)for(let P=0;P<m.faces[b].length;P++)T.indexOf(m.faces[b][P])!==-1&&b!==x&&T.connectedFaces.indexOf(b)===-1&&T.connectedFaces.push(b);const A=T.length;for(let b=0;b<A;b++){const P=m.vertices[T[b]],N=m.vertices[T[(b+1)%A]];P.vsub(N,c),h.copy(c),i.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[x]),i.vmult(u,u),t.vadd(u,u),h.cross(u,d),d.negate(d),p.copy(P),i.vmult(p,p),t.vadd(p,p);const I=T.connectedFaces[b];g.copy(this.faceNormals[I]);const F=this.getPlaneConstantOfFace(I);_.copy(g),i.vmult(_,_);const k=F-_.dot(t);for(this.clipFaceAgainstPlane(v,M,_,k);v.length;)v.shift();for(;M.length;)v.push(M.shift())}g.copy(this.faceNormals[x]);const L=this.getPlaneConstantOfFace(x);_.copy(g),i.vmult(_,_);const w=L-_.dot(t);for(let b=0;b<v.length;b++){let P=_.dot(v[b])+w;if(P<=r&&(console.log(`clamped: depth=${P} to minDist=${r}`),P=r),P<=a){const N=v[b];if(P<=1e-6){const I={point:N,normal:_,depth:P};o.push(I)}}}}clipFaceAgainstPlane(e,t,i,n){let r,a;const o=e.length;if(o<2)return t;let l=e[e.length-1],c=e[0];r=i.dot(l)+n;for(let h=0;h<o;h++){if(c=e[h],a=i.dot(c)+n,r<0)if(a<0){const u=new y;u.copy(c),t.push(u)}else{const u=new y;l.lerp(c,r/(r-a),u),t.push(u)}else if(a<0){const u=new y;l.lerp(c,r/(r-a),u),t.push(u),t.push(c)}l=c,r=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const i=this.vertices,n=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(i[r],n[r]),e.vadd(n[r],n[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let n=0;n<this.vertices.length;n++){const r=i[n];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new y);const i=this.faceNormals,n=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(i[r],n[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const n=t[i].lengthSquared();n>e&&(e=n)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,n){const r=this.vertices;let a,o,l,c,h,u,d=new y;for(let p=0;p<r.length;p++){d.copy(r[p]),t.vmult(d,d),e.vadd(d,d);const g=d;(a===void 0||g.x<a)&&(a=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}i.set(a,o,l),n.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new y);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,n=this.vertices;if(t){for(let r=0;r<i;r++){const a=n[r];t.vmult(a,a)}for(let r=0;r<this.faceNormals.length;r++){const a=this.faceNormals[r];t.vmult(a,a)}}if(e)for(let r=0;r<i;r++){const a=n[r];a.vadd(e,a)}}pointIsInside(e){const t=this.vertices,i=this.faces,n=this.faceNormals,r=null,a=new y;this.getAveragePointLocal(a);for(let o=0;o<this.faces.length;o++){let l=n[o];const c=t[i[o][0]],h=new y;e.vsub(c,h);const u=l.dot(h),d=new y;a.vsub(c,d);const p=l.dot(d);if(u<0&&p>0||u>0&&p<0)return!1}return r?1:-1}static project(e,t,i,n,r){const a=e.vertices.length,o=Ex;let l=0,c=0;const h=wx,u=e.vertices;h.setZero(),$e.vectorToLocalFrame(i,n,t,o),$e.pointToLocalFrame(i,n,h,h);const d=h.dot(o);c=l=u[0].dot(o);for(let p=1;p<a;p++){const g=u[p].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const p=c;c=l,l=p}r[0]=l,r[1]=c}}const to=[],io=[];new y;const Ex=new y,wx=new y;class Cn extends ve{constructor(e){super({type:ve.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,n=y,r=[new n(-e,-t,-i),new n(e,-t,-i),new n(e,t,-i),new n(-e,t,-i),new n(-e,-t,i),new n(e,-t,i),new n(e,t,i),new n(-e,t,i)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new n(0,0,1),new n(0,1,0),new n(1,0,0)],l=new Bs({vertices:r,faces:a,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new y),Cn.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const n=e;i.x=1/12*t*(2*n.y*2*n.y+2*n.z*2*n.z),i.y=1/12*t*(2*n.x*2*n.x+2*n.z*2*n.z),i.z=1/12*t*(2*n.y*2*n.y+2*n.x*2*n.x)}getSideNormals(e,t){const i=e,n=this.halfExtents;if(i[0].set(n.x,0,0),i[1].set(0,n.y,0),i[2].set(0,0,n.z),i[3].set(-n.x,0,0),i[4].set(0,-n.y,0),i[5].set(0,0,-n.z),t!==void 0)for(let r=0;r!==i.length;r++)t.vmult(i[r],i[r]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const n=this.halfExtents,r=[[n.x,n.y,n.z],[-n.x,n.y,n.z],[-n.x,-n.y,n.z],[-n.x,-n.y,-n.z],[n.x,-n.y,-n.z],[n.x,n.y,-n.z],[-n.x,n.y,-n.z],[n.x,-n.y,n.z]];for(let a=0;a<r.length;a++)Zi.set(r[a][0],r[a][1],r[a][2]),t.vmult(Zi,Zi),e.vadd(Zi,Zi),i(Zi.x,Zi.y,Zi.z)}calculateWorldAABB(e,t,i,n){const r=this.halfExtents;gi[0].set(r.x,r.y,r.z),gi[1].set(-r.x,r.y,r.z),gi[2].set(-r.x,-r.y,r.z),gi[3].set(-r.x,-r.y,-r.z),gi[4].set(r.x,-r.y,-r.z),gi[5].set(r.x,r.y,-r.z),gi[6].set(-r.x,r.y,-r.z),gi[7].set(r.x,-r.y,r.z);const a=gi[0];t.vmult(a,a),e.vadd(a,a),n.copy(a),i.copy(a);for(let o=1;o<8;o++){const l=gi[o];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>n.x&&(n.x=c),h>n.y&&(n.y=h),u>n.z&&(n.z=u),c<i.x&&(i.x=c),h<i.y&&(i.y=h),u<i.z&&(i.z=u)}}}const Zi=new y,gi=[new y,new y,new y,new y,new y,new y,new y,new y],yl={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ml={AWAKE:0,SLEEPY:1,SLEEPING:2};class pe extends yu{constructor(e){e===void 0&&(e={}),super(),this.id=pe.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new y,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new y,this.force=new y;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?pe.STATIC:pe.DYNAMIC,typeof e.type==typeof pe.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=pe.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new gt,this.initQuaternion=new gt,this.previousQuaternion=new gt,this.interpolatedQuaternion=new gt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new y,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new pi,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new pi,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new y(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new y(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Kt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=pe.AWAKE,this.wakeUpAfterNarrowphase=!1,e===pe.SLEEPING&&this.dispatchEvent(pe.wakeupEvent)}sleep(){this.sleepState=pe.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),n=this.sleepSpeedLimit**2;t===pe.AWAKE&&i<n?(this.sleepState=pe.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(pe.sleepyEvent)):t===pe.SLEEPY&&i>n?this.wakeUp():t===pe.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pe.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pe.SLEEPING||this.type===pe.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new y),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new y),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}addShape(e,t,i){const n=new y,r=new gt;return t&&n.copy(t),i&&r.copy(i),this.shapes.push(e),this.shapeOffsets.push(n),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let n=0;for(let r=0;r!==i;r++){const a=e[r];a.updateBoundingSphereRadius();const o=t[r].length(),l=a.boundingSphereRadius;o+l>n&&(n=o+l)}this.boundingRadius=n}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,n=e.length,r=Tx,a=Ax,o=this.quaternion,l=this.aabb,c=Rx;for(let h=0;h!==n;h++){const u=e[h];o.vmult(t[h],r),r.vadd(this.position,r),o.mult(i[h],a),u.calculateWorldAABB(r,a,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=Cx,n=Px;i.setRotationFromQuaternion(this.quaternion),i.transpose(n),i.scale(t,i),i.mmult(n,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const i=Lx;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;const i=Ix,n=Dx;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,n),this.applyForce(i,n)}applyTorque(e){this.type===pe.DYNAMIC&&(this.sleepState===pe.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const i=t,n=Nx;n.copy(e),n.scale(this.invMass,n),this.velocity.vadd(n,this.velocity);const r=Ux;i.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new y),this.type!==pe.DYNAMIC)return;const i=Fx,n=Ox;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,n),this.applyImpulse(i,n)}updateMassProperties(){const e=Bx;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Cn.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new y;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pe.DYNAMIC||this.type===pe.KINEMATIC)||this.sleepState===pe.SLEEPING)return;const n=this.velocity,r=this.angularVelocity,a=this.position,o=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,p=h*e;n.x+=o.x*p*d.x,n.y+=o.y*p*d.y,n.z+=o.z*p*d.z;const g=u.elements,_=this.angularFactor,m=l.x*_.x,f=l.y*_.y,v=l.z*_.z;r.x+=e*(g[0]*m+g[1]*f+g[2]*v),r.y+=e*(g[3]*m+g[4]*f+g[5]*v),r.z+=e*(g[6]*m+g[7]*f+g[8]*v),a.x+=n.x*e,a.y+=n.y*e,a.z+=n.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pe.idCounter=0;pe.COLLIDE_EVENT_NAME="collide";pe.DYNAMIC=yl.DYNAMIC;pe.STATIC=yl.STATIC;pe.KINEMATIC=yl.KINEMATIC;pe.AWAKE=Ml.AWAKE;pe.SLEEPY=Ml.SLEEPY;pe.SLEEPING=Ml.SLEEPING;pe.wakeupEvent={type:"wakeup"};pe.sleepyEvent={type:"sleepy"};pe.sleepEvent={type:"sleep"};const Tx=new y,Ax=new gt,Rx=new Kt,Cx=new pi,Px=new pi;new pi;const Lx=new y,Ix=new y,Dx=new y,Nx=new y,Ux=new y,Fx=new y,Ox=new y,Bx=new y;class zx{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&pe.STATIC||e.sleepState===pe.SLEEPING)&&(t.type&pe.STATIC||t.sleepState===pe.SLEEPING))}intersectionTest(e,t,i,n){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,n):this.doBoundingSphereBroadphase(e,t,i,n)}doBoundingSphereBroadphase(e,t,i,n){const r=Vx;t.position.vsub(e.position,r);const a=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<a&&(i.push(e),n.push(t))}doBoundingBoxBroadphase(e,t,i,n){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),n.push(t))}makePairsUnique(e,t){const i=kx,n=Hx,r=Gx,a=e.length;for(let o=0;o!==a;o++)n[o]=e[o],r[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==a;o++){const l=n[o].id,c=r[o].id,h=l<c?`${l},${c}`:`${c},${l}`;i[h]=o,i.keys.push(h)}for(let o=0;o!==i.keys.length;o++){const l=i.keys.pop(),c=i[l];e.push(n[c]),t.push(r[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new y;e.position.vsub(t.position,i);const n=e.shapes[0],r=t.shapes[0];return Math.pow(n.boundingSphereRadius+r.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Vx=new y;new y;new gt;new y;const kx={keys:[]},Hx=[],Gx=[];new y;new y;new y;class Wx extends zx{constructor(){super()}collisionPairs(e,t,i){const n=e.bodies,r=n.length;let a,o;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)a=n[l],o=n[c],this.needBroadphaseCollision(a,o)&&this.intersectionTest(a,o,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let n=0;n<e.bodies.length;n++){const r=e.bodies[n];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&i.push(r)}return i}}class Ks{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,n,r,a,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(n),this.shape=r,this.body=a,this.distance=o}}let Mu,bu,Su,Eu,wu,Tu,Au;const bl={CLOSEST:1,ANY:2,ALL:4};Mu=ve.types.SPHERE;bu=ve.types.PLANE;Su=ve.types.BOX;Eu=ve.types.CYLINDER;wu=ve.types.CONVEXPOLYHEDRON;Tu=ve.types.HEIGHTFIELD;Au=ve.types.TRIMESH;class xt{get[Mu](){return this._intersectSphere}get[bu](){return this._intersectPlane}get[Su](){return this._intersectBox}get[Eu](){return this._intersectConvex}get[wu](){return this._intersectConvex}get[Tu](){return this._intersectHeightfield}get[Au](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new y),t===void 0&&(t=new y),this.from=e.clone(),this.to=t.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=xt.ANY,this.result=new Ks,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||xt.ANY,this.result=t.result||new Ks,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(rh),no.length=0,e.broadphase.aabbQuery(e,rh,no),this.intersectBodies(no),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const n=jx,r=qx;for(let a=0,o=e.shapes.length;a<o;a++){const l=e.shapes[a];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],r),e.quaternion.vmult(e.shapeOffsets[a],n),n.vadd(e.position,n),this.intersectShape(l,r,n,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,n=e.length;!this.result.shouldStop&&i<n;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,n){const r=this.from;if(ay(r,this.direction,i)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,i,n,e)}_intersectBox(e,t,i,n,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,n,r)}_intersectPlane(e,t,i,n,r){const a=this.from,o=this.to,l=this.direction,c=new y(0,0,1);t.vmult(c,c);const h=new y;a.vsub(i,h);const u=h.dot(c);o.vsub(i,h);const d=h.dot(c);if(u*d>0||a.distanceTo(o)<u)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new y,_=new y,m=new y;a.vsub(i,g);const f=-c.dot(g)/p;l.scale(f,_),a.vadd(_,m),this.reportIntersection(c,m,r,n,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,n=this.to,r=this.from;t.x=Math.min(n.x,r.x),t.y=Math.min(n.y,r.y),t.z=Math.min(n.z,r.z),i.x=Math.max(n.x,r.x),i.y=Math.max(n.y,r.y),i.z=Math.max(n.z,r.z)}_intersectHeightfield(e,t,i,n,r){e.data,e.elementSize;const a=Xx;a.from.copy(this.from),a.to.copy(this.to),$e.pointToLocalFrame(i,t,a.from,a.from),$e.pointToLocalFrame(i,t,a.to,a.to),a.updateDirection();const o=Yx;let l,c,h,u;l=c=0,h=u=e.data.length-1;const d=new Kt;a.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,o,!0),h=Math.min(h,o[0]+1),u=Math.min(u,o[1]+1);for(let p=l;p<h;p++)for(let g=c;g<u;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,d),!!d.overlapsRay(a)){if(e.getConvexTrianglePillar(p,g,!1),$e.pointToWorldFrame(i,t,e.pillarOffset,Ur),this._intersectConvex(e.pillarConvex,t,Ur,n,r,ah),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),$e.pointToWorldFrame(i,t,e.pillarOffset,Ur),this._intersectConvex(e.pillarConvex,t,Ur,n,r,ah)}}}_intersectSphere(e,t,i,n,r){const a=this.from,o=this.to,l=e.radius,c=(o.x-a.x)**2+(o.y-a.y)**2+(o.z-a.z)**2,h=2*((o.x-a.x)*(a.x-i.x)+(o.y-a.y)*(a.y-i.y)+(o.z-a.z)*(a.z-i.z)),u=(a.x-i.x)**2+(a.y-i.y)**2+(a.z-i.z)**2-l**2,d=h**2-4*c*u,p=Zx,g=Kx;if(!(d<0))if(d===0)a.lerp(o,d,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,n,-1);else{const _=(-h-Math.sqrt(d))/(2*c),m=(-h+Math.sqrt(d))/(2*c);if(_>=0&&_<=1&&(a.lerp(o,_,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,n,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(a.lerp(o,m,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,n,-1))}}_intersectConvex(e,t,i,n,r,a){const o=$x,l=oh,c=a&&a.faceList||null,h=e.faces,u=e.vertices,d=e.faceNormals,p=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),f=c?c.length:h.length,v=this.result;for(let M=0;!v.shouldStop&&M<f;M++){const x=c?c[M]:M,R=h[x],T=d[x],A=t,L=i;l.copy(u[R[0]]),A.vmult(l,l),l.vadd(L,l),l.vsub(g,l),A.vmult(T,o);const w=p.dot(o);if(Math.abs(w)<this.precision)continue;const b=o.dot(l)/w;if(!(b<0)){p.scale(b,kt),kt.vadd(g,kt),ci.copy(u[R[0]]),A.vmult(ci,ci),L.vadd(ci,ci);for(let P=1;!v.shouldStop&&P<R.length-1;P++){_i.copy(u[R[P]]),vi.copy(u[R[P+1]]),A.vmult(_i,_i),A.vmult(vi,vi),L.vadd(_i,_i),L.vadd(vi,vi);const N=kt.distanceTo(g);!(xt.pointInTriangle(kt,ci,_i,vi)||xt.pointInTriangle(kt,_i,ci,vi))||N>m||this.reportIntersection(o,kt,r,n,x)}}}}_intersectTrimesh(e,t,i,n,r,a){const o=Jx,l=sy,c=ry,h=oh,u=Qx,d=ey,p=ty,g=ny,_=iy,m=e.indices;e.vertices;const f=this.from,v=this.to,M=this.direction;c.position.copy(i),c.quaternion.copy(t),$e.vectorToLocalFrame(i,t,M,u),$e.pointToLocalFrame(i,t,f,d),$e.pointToLocalFrame(i,t,v,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,p.vsub(d,u),u.normalize();const x=d.distanceSquared(p);e.tree.rayQuery(this,c,l);for(let R=0,T=l.length;!this.result.shouldStop&&R!==T;R++){const A=l[R];e.getNormal(A,o),e.getVertex(m[A*3],ci),ci.vsub(d,h);const L=u.dot(o),w=o.dot(h)/L;if(w<0)continue;u.scale(w,kt),kt.vadd(d,kt),e.getVertex(m[A*3+1],_i),e.getVertex(m[A*3+2],vi);const b=kt.distanceSquared(d);!(xt.pointInTriangle(kt,_i,ci,vi)||xt.pointInTriangle(kt,ci,_i,vi))||b>x||($e.vectorToWorldFrame(t,o,_),$e.pointToWorldFrame(i,t,kt,g),this.reportIntersection(_,g,r,n,A))}l.length=0}reportIntersection(e,t,i,n,r){const a=this.from,o=this.to,l=a.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case xt.ALL:this.hasHit=!0,c.set(a,o,e,t,i,n,l),c.hasHit=!0,this.callback(c);break;case xt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(a,o,e,t,i,n,l));break;case xt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(a,o,e,t,i,n,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,n){n.vsub(t,yn),i.vsub(t,Ps),e.vsub(t,so);const r=yn.dot(yn),a=yn.dot(Ps),o=yn.dot(so),l=Ps.dot(Ps),c=Ps.dot(so);let h,u;return(h=l*o-a*c)>=0&&(u=r*c-a*o)>=0&&h+u<r*l-a*a}}xt.CLOSEST=bl.CLOSEST;xt.ANY=bl.ANY;xt.ALL=bl.ALL;const rh=new Kt,no=[],Ps=new y,so=new y,jx=new y,qx=new gt,kt=new y,ci=new y,_i=new y,vi=new y;new y;new Ks;const ah={faceList:[0]},Ur=new y,Xx=new xt,Yx=[],Zx=new y,Kx=new y,$x=new y;new y;new y;const oh=new y,Jx=new y,Qx=new y,ey=new y,ty=new y,iy=new y,ny=new y;new Kt;const sy=[],ry=new $e,yn=new y,Fr=new y;function ay(s,e,t){t.vsub(s,yn);const i=yn.dot(e);return e.scale(i,Fr),Fr.vadd(s,Fr),t.distanceTo(Fr)}class Ru{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class lh{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Qs{constructor(e,t,i,n){i===void 0&&(i=-1e6),n===void 0&&(n=1e6),this.id=Qs.idCounter++,this.minForce=i,this.maxForce=n,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new lh,this.jacobianElementB=new lh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const n=t,r=e,a=i;this.a=4/(a*(1+4*n)),this.b=4*n/(1+4*n),this.eps=4/(a*a*r*(1+4*n))}computeB(e,t,i){const n=this.computeGW(),r=this.computeGq(),a=this.computeGiMf();return-r*e-n*t-a*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.position,a=n.position;return e.spatial.dot(r)+t.spatial.dot(a)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.velocity,a=n.velocity,o=i.angularVelocity,l=n.angularVelocity;return e.multiplyVectors(r,o)+t.multiplyVectors(a,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.vlambda,a=n.vlambda,o=i.wlambda,l=n.wlambda;return e.multiplyVectors(r,o)+t.multiplyVectors(a,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.force,a=i.torque,o=n.force,l=n.torque,c=i.invMassSolve,h=n.invMassSolve;return r.scale(c,ch),o.scale(h,hh),i.invInertiaWorldSolve.vmult(a,uh),n.invInertiaWorldSolve.vmult(l,dh),e.multiplyVectors(ch,uh)+t.multiplyVectors(hh,dh)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,r=i.invMassSolve,a=n.invMassSolve,o=i.invInertiaWorldSolve,l=n.invInertiaWorldSolve;let c=r+a;return o.vmult(e.rotational,Or),c+=Or.dot(e.rotational),l.vmult(t.rotational,Or),c+=Or.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,n=this.bi,r=this.bj,a=oy;n.vlambda.addScaledVector(n.invMassSolve*e,t.spatial,n.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,i.spatial,r.vlambda),n.invInertiaWorldSolve.vmult(t.rotational,a),n.wlambda.addScaledVector(e,a,n.wlambda),r.invInertiaWorldSolve.vmult(i.rotational,a),r.wlambda.addScaledVector(e,a,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Qs.idCounter=0;const ch=new y,hh=new y,uh=new y,dh=new y,Or=new y,oy=new y;class ly extends Qs{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(e){const t=this.a,i=this.b,n=this.bi,r=this.bj,a=this.ri,o=this.rj,l=cy,c=hy,h=n.velocity,u=n.angularVelocity;n.force,n.torque;const d=r.velocity,p=r.angularVelocity;r.force,r.torque;const g=uy,_=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;a.cross(f,l),o.cross(f,c),f.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(f),m.rotational.copy(c),g.copy(r.position),g.vadd(o,g),g.vsub(n.position,g),g.vsub(a,g);const v=f.dot(g),M=this.restitution+1,x=M*d.dot(f)-M*h.dot(f)+p.dot(c)-u.dot(l),R=this.computeGiMf();return-v*t-x*i-e*R}getImpactVelocityAlongNormal(){const e=dy,t=py,i=fy,n=my,r=gy;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,n),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(n,t),e.vsub(t,r),this.ni.dot(r)}}const cy=new y,hy=new y,uy=new y,dy=new y,py=new y,fy=new y,my=new y,gy=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class ph extends Qs{constructor(e,t,i){super(e,t,-i,i),this.ri=new y,this.rj=new y,this.t=new y}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,n=this.rj,r=_y,a=vy,o=this.t;i.cross(o,r),n.cross(o,a);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(a);const h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}}const _y=new y,vy=new y;class ma{constructor(e,t,i){i=Ru.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ma.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}ma.idCounter=0;class ys{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ys.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ys.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class xy{constructor(e){e===void 0&&(e={}),e=Ru.defaults(e,{chassisConnectionPointLocal:new y,chassisConnectionPointWorld:new y,directionLocal:new y,directionWorld:new y,axleLocal:new y,axleWorld:new y,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:10.5,forwardAcceleration:1,sideAcceleration:1,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,slipInfo:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=e.maxSuspensionTravel,this.customSlidingRotationalSpeed=e.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=e.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=e.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=e.chassisConnectionPointWorld.clone(),this.directionLocal=e.directionLocal.clone(),this.directionWorld=e.directionWorld.clone(),this.axleLocal=e.axleLocal.clone(),this.axleWorld=e.axleWorld.clone(),this.suspensionRestLength=e.suspensionRestLength,this.suspensionMaxLength=e.suspensionMaxLength,this.radius=e.radius,this.suspensionStiffness=e.suspensionStiffness,this.dampingCompression=e.dampingCompression,this.dampingRelaxation=e.dampingRelaxation,this.frictionSlip=e.frictionSlip,this.forwardAcceleration=e.forwardAcceleration,this.sideAcceleration=e.sideAcceleration,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=e.rollInfluence,this.maxSuspensionForce=e.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=e.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.slipInfo=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new Ks,this.worldTransform=new $e,this.isInContact=!1}updateWheel(e){const t=this.raycastResult;if(this.isInContact){const i=t.hitNormalWorld.dot(t.directionWorld);t.hitPointWorld.vsub(e.position,mh),e.getVelocityAtWorldPoint(mh,fh);const n=t.hitNormalWorld.dot(fh);if(i>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{const r=-1/i;this.suspensionRelativeVelocity=n*r,this.clippedInvContactDotSuspension=r}}else t.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,t.directionWorld.scale(-1,t.hitNormalWorld),this.clippedInvContactDotSuspension=1}}const fh=new y,mh=new y;class yy{constructor(e){this.chassisBody=e.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof e.indexRightAxis<"u"?e.indexRightAxis:2,this.indexForwardAxis=typeof e.indexForwardAxis<"u"?e.indexForwardAxis:0,this.indexUpAxis=typeof e.indexUpAxis<"u"?e.indexUpAxis:1,this.constraints=[],this.preStepCallback=()=>{},this.currentVehicleSpeedKmHour=0,this.numWheelsOnGround=0}addWheel(e){e===void 0&&(e={});const t=new xy(e),i=this.wheelInfos.length;return this.wheelInfos.push(t),i}setSteeringValue(e,t){const i=this.wheelInfos[t];i.steering=e}applyEngineForce(e,t){this.wheelInfos[t].engineForce=e}setBrake(e,t){this.wheelInfos[t].brake=e}addToWorld(e){e.addBody(this.chassisBody);const t=this;this.preStepCallback=()=>{t.updateVehicle(e.dt)},e.addEventListener("preStep",this.preStepCallback),this.world=e}getVehicleAxisWorld(e,t){t.set(e===0?1:0,e===1?1:0,e===2?1:0),this.chassisBody.vectorToWorldFrame(t,t)}updateVehicle(e){const t=this.wheelInfos,i=t.length,n=this.chassisBody;for(let u=0;u<i;u++)this.updateWheelTransform(u);this.currentVehicleSpeedKmHour=3.6*n.velocity.length();const r=new y;this.getVehicleAxisWorld(this.indexForwardAxis,r),r.dot(n.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(let u=0;u<i;u++)this.castRay(t[u]);this.updateSuspension(e);const a=new y,o=new y;for(let u=0;u<i;u++){const d=t[u];let p=d.suspensionForce;p>d.maxSuspensionForce&&(p=d.maxSuspensionForce),d.raycastResult.hitNormalWorld.scale(p*e,a),d.raycastResult.hitPointWorld.vsub(n.position,o),n.applyImpulse(a,o)}this.updateFriction(e);const l=new y,c=new y,h=new y;for(let u=0;u<i;u++){const d=t[u];n.getVelocityAtWorldPoint(d.chassisConnectionPointWorld,h);let p=1;switch(this.indexUpAxis){case 1:p=-1;break}if(d.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,c);const g=c.dot(d.raycastResult.hitNormalWorld);d.raycastResult.hitNormalWorld.scale(g,l),c.vsub(l,c);const _=c.dot(h);d.deltaRotation=p*_*e/d.radius}(d.sliding||!d.isInContact)&&d.engineForce!==0&&d.useCustomSlidingRotationalSpeed&&(d.deltaRotation=(d.engineForce>0?1:-1)*d.customSlidingRotationalSpeed*e),Math.abs(d.brake)>Math.abs(d.engineForce)&&(d.deltaRotation=0),d.rotation+=d.deltaRotation,d.deltaRotation*=.99}}updateSuspension(e){const t=this.chassisBody.mass,i=this.wheelInfos,n=i.length;for(let r=0;r<n;r++){const a=i[r];if(a.isInContact){let o;const l=a.suspensionRestLength,c=a.suspensionLength,h=l-c;o=a.suspensionStiffness*h*a.clippedInvContactDotSuspension;const u=a.suspensionRelativeVelocity;let d;u<0?d=a.dampingCompression:d=a.dampingRelaxation,o-=d*u,a.suspensionForce=o*t,a.suspensionForce<0&&(a.suspensionForce=0)}else a.suspensionForce=0}}removeFromWorld(e){this.constraints,e.removeBody(this.chassisBody),e.removeEventListener("preStep",this.preStepCallback),this.world=null}castRay(e){const t=Ey,i=wy;this.updateWheelTransformWorld(e);const n=this.chassisBody;let r=-1;const a=e.suspensionRestLength+e.radius;e.directionWorld.scale(a,t);const o=e.chassisConnectionPointWorld;o.vadd(t,i);const l=e.raycastResult;l.reset();const c=n.collisionResponse;n.collisionResponse=!1,this.world.rayTest(o,i,l),n.collisionResponse=c;const h=l.body;if(e.raycastResult.groundObject=0,h){r=l.distance,e.raycastResult.hitNormalWorld=l.hitNormalWorld,e.isInContact=!0;const u=l.distance;e.suspensionLength=u-e.radius;const d=e.suspensionRestLength-e.maxSuspensionTravel,p=e.suspensionRestLength+e.maxSuspensionTravel;e.suspensionLength<d&&(e.suspensionLength=d),e.suspensionLength>p&&(e.suspensionLength=p,e.raycastResult.reset());const g=e.raycastResult.hitNormalWorld.dot(e.directionWorld),_=new y;n.getVelocityAtWorldPoint(e.raycastResult.hitPointWorld,_);const m=e.raycastResult.hitNormalWorld.dot(_);if(g>=-.1)e.suspensionRelativeVelocity=0,e.clippedInvContactDotSuspension=1/.1;else{const f=-1/g;e.suspensionRelativeVelocity=m*f,e.clippedInvContactDotSuspension=f}}else e.suspensionLength=e.suspensionRestLength+0*e.maxSuspensionTravel,e.suspensionRelativeVelocity=0,e.directionWorld.scale(-1,e.raycastResult.hitNormalWorld),e.clippedInvContactDotSuspension=1;return r}updateWheelTransformWorld(e){e.isInContact=!1;const t=this.chassisBody;t.pointToWorldFrame(e.chassisConnectionPointLocal,e.chassisConnectionPointWorld),t.vectorToWorldFrame(e.directionLocal,e.directionWorld),t.vectorToWorldFrame(e.axleLocal,e.axleWorld)}updateWheelTransform(e){const t=My,i=by,n=Sy,r=this.wheelInfos[e];this.updateWheelTransformWorld(r),r.directionLocal.scale(-1,t),i.copy(r.axleLocal),t.cross(i,n),n.normalize(),i.normalize();const a=r.steering,o=new gt;o.setFromAxisAngle(t,a);const l=new gt;l.setFromAxisAngle(i,r.rotation);const c=r.worldTransform.quaternion;this.chassisBody.quaternion.mult(o,c),c.mult(l,c),c.normalize();const h=r.worldTransform.position;h.copy(r.directionWorld),h.scale(r.suspensionLength,h),h.vadd(r.chassisConnectionPointWorld,h)}getWheelTransformWorld(e){return this.wheelInfos[e].worldTransform}updateFriction(e){const t=Ay,i=this.wheelInfos,n=i.length,r=this.chassisBody,a=Cy,o=Ry;this.numWheelsOnGround=0;for(let h=0;h<n;h++){const u=i[h];u.raycastResult.body&&this.numWheelsOnGround++,u.sideImpulse=0,u.forwardImpulse=0,a[h]||(a[h]=new y),o[h]||(o[h]=new y)}for(let h=0;h<n;h++){const u=i[h],d=u.raycastResult.body;if(d){const p=o[h];this.getWheelTransformWorld(h).vectorToWorldFrame(Ty[this.indexRightAxis],p);const g=u.raycastResult.hitNormalWorld,_=p.dot(g);g.scale(_,t),p.vsub(t,p),p.normalize(),g.cross(p,a[h]),a[h].normalize(),u.sideImpulse=Hy(r,u.raycastResult.hitPointWorld,d,u.raycastResult.hitPointWorld,p),u.sideImpulse*=Py}}const l=1,c=.5;this.sliding=!1;for(let h=0;h<n;h++){const u=i[h],d=u.raycastResult.body;let p=0;if(u.slipInfo=1,d){const g=u.brake?u.brake:0;p=Ny(r,d,u.raycastResult.hitPointWorld,a[h],g),p+=u.engineForce*e;const _=g/p;u.slipInfo*=_}if(u.forwardImpulse=0,u.skidInfo=1,d){u.skidInfo=1;const g=u.suspensionForce*e*u.frictionSlip,_=g*g;u.forwardImpulse=p;const m=u.forwardImpulse*c/u.forwardAcceleration,f=u.sideImpulse*l/u.sideAcceleration,v=m*m+f*f;if(u.sliding=!1,v>_){this.sliding=!0,u.sliding=!0;const M=g/Math.sqrt(v);u.skidInfo*=M}}}if(this.sliding)for(let h=0;h<n;h++){const u=i[h];u.sideImpulse!==0&&u.skidInfo<1&&(u.forwardImpulse*=u.skidInfo,u.sideImpulse*=u.skidInfo)}for(let h=0;h<n;h++){const u=i[h],d=new y;if(u.raycastResult.hitPointWorld.vsub(r.position,d),u.forwardImpulse!==0){const p=new y;a[h].scale(u.forwardImpulse,p),r.applyImpulse(p,d)}if(u.sideImpulse!==0){const p=u.raycastResult.body,g=new y;u.raycastResult.hitPointWorld.vsub(p.position,g);const _=new y;o[h].scale(u.sideImpulse,_),r.vectorToLocalFrame(d,d),d["xyz"[this.indexUpAxis]]*=u.rollInfluence,r.vectorToWorldFrame(d,d),r.applyImpulse(_,d),_.scale(-1,_),p.applyImpulse(_,g)}}}}new y;new y;new y;const My=new y,by=new y,Sy=new y;new xt;new y;const Ey=new y,wy=new y,Ty=[new y(1,0,0),new y(0,1,0),new y(0,0,1)],Ay=new y,Ry=[],Cy=[],Py=1,Ly=new y,Iy=new y,Dy=new y;function Ny(s,e,t,i,n){let r=0;const a=t,o=Ly,l=Iy,c=Dy;s.getVelocityAtWorldPoint(a,o),e.getVelocityAtWorldPoint(a,l),o.vsub(l,c);const h=i.dot(c),u=gh(s,t,i),d=gh(e,t,i),p=1/(u+d);return r=-h*p,n<r&&(r=n),r<-n&&(r=-n),r}const Uy=new y,Fy=new y,Oy=new y,By=new y;function gh(s,e,t){const i=Uy,n=Fy,r=Oy,a=By;return e.vsub(s.position,i),i.cross(t,n),s.invInertiaWorld.vmult(n,a),a.cross(i,r),s.invMass+t.dot(r)}const zy=new y,Vy=new y,ky=new y;function Hy(s,e,t,i,n){if(n.lengthSquared()>1.1)return 0;const r=zy,a=Vy,o=ky;s.getVelocityAtWorldPoint(e,r),t.getVelocityAtWorldPoint(i,a),r.vsub(a,o);const l=n.dot(o),c=1/(s.invMass+t.invMass);return-.2*l*c}new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Kt;new y;new Kt;new y;new y;new y;new y;new y;new y;new y;new Kt;new y;new $e;new Kt;class Gy{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class Wy extends Gy{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const n=this.iterations,r=this.tolerance*this.tolerance,a=this.equations,o=a.length,l=t.bodies,c=l.length,h=e;let u,d,p,g,_,m;if(o!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const f=qy,v=Xy,M=jy;f.length=o,v.length=o,M.length=o;for(let x=0;x!==o;x++){const R=a[x];M[x]=0,v[x]=R.computeB(h),f[x]=1/R.computeC()}if(o!==0){for(let T=0;T!==c;T++){const A=l[T],L=A.vlambda,w=A.wlambda;L.set(0,0,0),w.set(0,0,0)}for(i=0;i!==n;i++){g=0;for(let T=0;T!==o;T++){const A=a[T];u=v[T],d=f[T],m=M[T],_=A.computeGWlambda(),p=d*(u-_-A.eps*m),m+p<A.minForce?p=A.minForce-m:m+p>A.maxForce&&(p=A.maxForce-m),M[T]+=p,g+=p>0?p:-p,A.addToWlambda(p)}if(g*g<r)break}for(let T=0;T!==c;T++){const A=l[T],L=A.velocity,w=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),L.vadd(A.vlambda,L),A.wlambda.vmul(A.angularFactor,A.wlambda),w.vadd(A.wlambda,w)}let x=a.length;const R=1/h;for(;x--;)a[x].multiplier=M[x]*R}return i}}const jy=[],qy=[],Xy=[];pe.STATIC;class Yy{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Zy extends Yy{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const ct={sphereSphere:ve.types.SPHERE,spherePlane:ve.types.SPHERE|ve.types.PLANE,boxBox:ve.types.BOX|ve.types.BOX,sphereBox:ve.types.SPHERE|ve.types.BOX,planeBox:ve.types.PLANE|ve.types.BOX,convexConvex:ve.types.CONVEXPOLYHEDRON,sphereConvex:ve.types.SPHERE|ve.types.CONVEXPOLYHEDRON,planeConvex:ve.types.PLANE|ve.types.CONVEXPOLYHEDRON,boxConvex:ve.types.BOX|ve.types.CONVEXPOLYHEDRON,sphereHeightfield:ve.types.SPHERE|ve.types.HEIGHTFIELD,boxHeightfield:ve.types.BOX|ve.types.HEIGHTFIELD,convexHeightfield:ve.types.CONVEXPOLYHEDRON|ve.types.HEIGHTFIELD,sphereParticle:ve.types.PARTICLE|ve.types.SPHERE,planeParticle:ve.types.PLANE|ve.types.PARTICLE,boxParticle:ve.types.BOX|ve.types.PARTICLE,convexParticle:ve.types.PARTICLE|ve.types.CONVEXPOLYHEDRON,cylinderCylinder:ve.types.CYLINDER,sphereCylinder:ve.types.SPHERE|ve.types.CYLINDER,planeCylinder:ve.types.PLANE|ve.types.CYLINDER,boxCylinder:ve.types.BOX|ve.types.CYLINDER,convexCylinder:ve.types.CONVEXPOLYHEDRON|ve.types.CYLINDER,heightfieldCylinder:ve.types.HEIGHTFIELD|ve.types.CYLINDER,particleCylinder:ve.types.PARTICLE|ve.types.CYLINDER,sphereTrimesh:ve.types.SPHERE|ve.types.TRIMESH,planeTrimesh:ve.types.PLANE|ve.types.TRIMESH};class Ky{get[ct.sphereSphere](){return this.sphereSphere}get[ct.spherePlane](){return this.spherePlane}get[ct.boxBox](){return this.boxBox}get[ct.sphereBox](){return this.sphereBox}get[ct.planeBox](){return this.planeBox}get[ct.convexConvex](){return this.convexConvex}get[ct.sphereConvex](){return this.sphereConvex}get[ct.planeConvex](){return this.planeConvex}get[ct.boxConvex](){return this.boxConvex}get[ct.sphereHeightfield](){return this.sphereHeightfield}get[ct.boxHeightfield](){return this.boxHeightfield}get[ct.convexHeightfield](){return this.convexHeightfield}get[ct.sphereParticle](){return this.sphereParticle}get[ct.planeParticle](){return this.planeParticle}get[ct.boxParticle](){return this.boxParticle}get[ct.convexParticle](){return this.convexParticle}get[ct.cylinderCylinder](){return this.convexConvex}get[ct.sphereCylinder](){return this.sphereConvex}get[ct.planeCylinder](){return this.planeConvex}get[ct.boxCylinder](){return this.boxConvex}get[ct.convexCylinder](){return this.convexConvex}get[ct.heightfieldCylinder](){return this.heightfieldCylinder}get[ct.particleCylinder](){return this.particleCylinder}get[ct.sphereTrimesh](){return this.sphereTrimesh}get[ct.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Zy,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,n,r,a){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new ly(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&n.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,h=n.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=r||i,o.sj=a||n,o}createFrictionEquationsFromContact(e,t){const i=e.bi,n=e.bj,r=e.si,a=e.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||i.material,u=a.material||n.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(o.frictionGravity||o.gravity).length();let p=i.invMass+n.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,_=g.length?g.pop():new ph(i,n,d*p),m=g.length?g.pop():new ph(i,n,d*p);return _.bi=m.bi=i,_.bj=m.bj=n,_.minForce=m.minForce=-d*p,_.maxForce=m.maxForce=d*p,_.ri.copy(e.ri),_.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),_.enabled=m.enabled=e.enabled,t.push(_,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],n=this.frictionResult[this.frictionResult.length-1];gn.setZero(),jn.setZero(),qn.setZero();const r=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==r?(gn.vadd(t.ni,gn),jn.vadd(t.ri,jn),qn.vadd(t.rj,qn)):(gn.vsub(t.ni,gn),jn.vadd(t.rj,jn),qn.vadd(t.ri,qn));const a=1/e;jn.scale(a,i.ri),qn.scale(a,i.rj),n.ri.copy(i.ri),n.rj.copy(i.rj),gn.normalize(),gn.tangents(i.t,n.t)}getContacts(e,t,i,n,r,a,o){this.contactPointPool=r,this.frictionEquationPool=o,this.result=n,this.frictionResult=a;const l=Qy,c=e0,h=$y,u=Jy;for(let d=0,p=e.length;d!==p;d++){const g=e[d],_=t[d];let m=null;g.material&&_.material&&(m=i.getContactMaterial(g.material,_.material)||null);const f=g.type&pe.KINEMATIC&&_.type&pe.STATIC||g.type&pe.STATIC&&_.type&pe.KINEMATIC||g.type&pe.KINEMATIC&&_.type&pe.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const M=g.shapes[v];for(let x=0;x<_.shapes.length;x++){_.quaternion.mult(_.shapeOrientations[x],c),_.quaternion.vmult(_.shapeOffsets[x],u),u.vadd(_.position,u);const R=_.shapes[x];if(!(M.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&M.collisionFilterGroup)||h.distanceTo(u)>M.boundingSphereRadius+R.boundingSphereRadius)continue;let T=null;M.material&&R.material&&(T=i.getContactMaterial(M.material,R.material)||null),this.currentContactMaterial=T||m||i.defaultContactMaterial;const A=M.type|R.type,L=this[A];if(L){let w=!1;M.type<R.type?w=L.call(this,M,R,h,u,l,c,g,_,M,R,f):w=L.call(this,R,M,u,h,c,l,_,g,M,R,f),w&&f&&(i.shapeOverlapKeeper.set(M.id,R.id),i.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,i,n,r,a,o,l,c,h,u){if(u)return i.distanceSquared(n)<(e.radius+t.radius)**2;const d=this.createContactEquation(o,l,e,t,c,h);n.vsub(i,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(i,d.ri),d.ri.vsub(o.position,d.ri),d.rj.vadd(n,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,i,n,r,a,o,l,c,h,u){const d=this.createContactEquation(o,l,e,t,c,h);if(d.ni.set(0,0,1),a.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),i.vsub(n,Br),d.ni.scale(d.ni.dot(Br),_h),Br.vsub(_h,d.rj),-Br.dot(d.ni)<=e.radius){if(u)return!0;const p=d.ri,g=d.rj;p.vadd(i,p),p.vsub(o.position,p),g.vadd(n,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,i,n,r,a,o,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,n,r,a,o,l,e,t,u)}sphereBox(e,t,i,n,r,a,o,l,c,h,u){const d=this.v3pool,p=T0;i.vsub(n,zr),t.getSideNormals(p,a);const g=e.radius;let _=!1;const m=R0,f=C0,v=P0;let M=null,x=0,R=0,T=0,A=null;for(let B=0,q=p.length;B!==q&&_===!1;B++){const H=S0;H.copy(p[B]);const Y=H.length();H.normalize();const re=zr.dot(H);if(re<Y+g&&re>0){const ye=E0,ie=w0;ye.copy(p[(B+1)%3]),ie.copy(p[(B+2)%3]);const Fe=ye.length(),Z=ie.length();ye.normalize(),ie.normalize();const te=zr.dot(ye),fe=zr.dot(ie);if(te<Fe&&te>-Fe&&fe<Z&&fe>-Z){const se=Math.abs(re-Y-g);if((A===null||se<A)&&(A=se,R=te,T=fe,M=Y,m.copy(H),f.copy(ye),v.copy(ie),x++,u))return!0}}}if(x){_=!0;const B=this.createContactEquation(o,l,e,t,c,h);m.scale(-g,B.ri),B.ni.copy(m),B.ni.negate(B.ni),m.scale(M,m),f.scale(R,f),m.vadd(f,m),v.scale(T,v),m.vadd(v,B.rj),B.ri.vadd(i,B.ri),B.ri.vsub(o.position,B.ri),B.rj.vadd(n,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let L=d.get();const w=A0;for(let B=0;B!==2&&!_;B++)for(let q=0;q!==2&&!_;q++)for(let H=0;H!==2&&!_;H++)if(L.set(0,0,0),B?L.vadd(p[0],L):L.vsub(p[0],L),q?L.vadd(p[1],L):L.vsub(p[1],L),H?L.vadd(p[2],L):L.vsub(p[2],L),n.vadd(L,w),w.vsub(i,w),w.lengthSquared()<g*g){if(u)return!0;_=!0;const Y=this.createContactEquation(o,l,e,t,c,h);Y.ri.copy(w),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(g,Y.ri),Y.rj.copy(L),Y.ri.vadd(i,Y.ri),Y.ri.vsub(o.position,Y.ri),Y.rj.vadd(n,Y.rj),Y.rj.vsub(l.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}d.release(L),L=null;const b=d.get(),P=d.get(),N=d.get(),I=d.get(),F=d.get(),k=p.length;for(let B=0;B!==k&&!_;B++)for(let q=0;q!==k&&!_;q++)if(B%3!==q%3){p[q].cross(p[B],b),b.normalize(),p[B].vadd(p[q],P),N.copy(i),N.vsub(P,N),N.vsub(n,N);const H=N.dot(b);b.scale(H,I);let Y=0;for(;Y===B%3||Y===q%3;)Y++;F.copy(i),F.vsub(I,F),F.vsub(P,F),F.vsub(n,F);const re=Math.abs(H),ye=F.length();if(re<p[Y].length()&&ye<g){if(u)return!0;_=!0;const ie=this.createContactEquation(o,l,e,t,c,h);P.vadd(I,ie.rj),ie.rj.copy(ie.rj),F.negate(ie.ni),ie.ni.normalize(),ie.ri.copy(ie.rj),ie.ri.vadd(n,ie.ri),ie.ri.vsub(i,ie.ri),ie.ri.normalize(),ie.ri.scale(g,ie.ri),ie.ri.vadd(i,ie.ri),ie.ri.vsub(o.position,ie.ri),ie.rj.vadd(n,ie.rj),ie.rj.vsub(l.position,ie.rj),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult)}}d.release(b,P,N,I,F)}planeBox(e,t,i,n,r,a,o,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,n,r,a,o,l,e,t,u)}convexConvex(e,t,i,n,r,a,o,l,c,h,u,d,p){const g=j0;if(!(i.distanceTo(n)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,r,n,a,g,d,p)){const _=[],m=q0;e.clipAgainstHull(i,r,t,n,a,g,-100,100,_);let f=0;for(let v=0;v!==_.length;v++){if(u)return!0;const M=this.createContactEquation(o,l,e,t,c,h),x=M.ri,R=M.rj;g.negate(M.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,x),R.copy(_[v].point),x.vsub(i,x),R.vsub(n,R),x.vadd(i,x),x.vsub(o.position,x),R.vadd(n,R),R.vsub(l.position,R),this.result.push(M),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,t,i,n,r,a,o,l,c,h,u){const d=this.v3pool;i.vsub(n,L0);const p=t.faceNormals,g=t.faces,_=t.vertices,m=e.radius;let f=!1;for(let v=0;v!==_.length;v++){const M=_[v],x=U0;a.vmult(M,x),n.vadd(x,x);const R=N0;if(x.vsub(i,R),R.lengthSquared()<m*m){if(u)return!0;f=!0;const T=this.createContactEquation(o,l,e,t,c,h);T.ri.copy(R),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),x.vsub(n,T.rj),T.ri.vadd(i,T.ri),T.ri.vsub(o.position,T.ri),T.rj.vadd(n,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let v=0,M=g.length;v!==M&&f===!1;v++){const x=p[v],R=g[v],T=F0;a.vmult(x,T);const A=O0;a.vmult(_[R[0]],A),A.vadd(n,A);const L=B0;T.scale(-m,L),i.vadd(L,L);const w=z0;L.vsub(A,w);const b=w.dot(T),P=V0;if(i.vsub(A,P),b<0&&P.dot(T)>0){const N=[];for(let I=0,F=R.length;I!==F;I++){const k=d.get();a.vmult(_[R[I]],k),n.vadd(k,k),N.push(k)}if(b0(N,T,i)){if(u)return!0;f=!0;const I=this.createContactEquation(o,l,e,t,c,h);T.scale(-m,I.ri),T.negate(I.ni);const F=d.get();T.scale(-b,F);const k=d.get();T.scale(-m,k),i.vsub(n,I.rj),I.rj.vadd(k,I.rj),I.rj.vadd(F,I.rj),I.rj.vadd(n,I.rj),I.rj.vsub(l.position,I.rj),I.ri.vadd(i,I.ri),I.ri.vsub(o.position,I.ri),d.release(F),d.release(k),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let B=0,q=N.length;B!==q;B++)d.release(N[B]);return}else for(let I=0;I!==R.length;I++){const F=d.get(),k=d.get();a.vmult(_[R[(I+1)%R.length]],F),a.vmult(_[R[(I+2)%R.length]],k),n.vadd(F,F),n.vadd(k,k);const B=I0;k.vsub(F,B);const q=D0;B.unit(q);const H=d.get(),Y=d.get();i.vsub(F,Y);const re=Y.dot(q);q.scale(re,H),H.vadd(F,H);const ye=d.get();if(H.vsub(i,ye),re>0&&re*re<B.lengthSquared()&&ye.lengthSquared()<m*m){if(u)return!0;const ie=this.createContactEquation(o,l,e,t,c,h);H.vsub(n,ie.rj),H.vsub(i,ie.ni),ie.ni.normalize(),ie.ni.scale(m,ie.ri),ie.rj.vadd(n,ie.rj),ie.rj.vsub(l.position,ie.rj),ie.ri.vadd(i,ie.ri),ie.ri.vsub(o.position,ie.ri),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult);for(let Fe=0,Z=N.length;Fe!==Z;Fe++)d.release(N[Fe]);d.release(F),d.release(k),d.release(H),d.release(ye),d.release(Y);return}d.release(F),d.release(k),d.release(H),d.release(ye),d.release(Y)}for(let I=0,F=N.length;I!==F;I++)d.release(N[I])}}}planeConvex(e,t,i,n,r,a,o,l,c,h,u){const d=k0,p=H0;p.set(0,0,1),r.vmult(p,p);let g=0;const _=G0;for(let m=0;m!==t.vertices.length;m++)if(d.copy(t.vertices[m]),a.vmult(d,d),n.vadd(d,d),d.vsub(i,_),p.dot(_)<=0){if(u)return!0;const f=this.createContactEquation(o,l,e,t,c,h),v=W0;p.scale(p.dot(_),v),d.vsub(v,v),v.vsub(i,f.ri),f.ni.copy(p),d.vsub(n,f.rj),f.ri.vadd(i,f.ri),f.ri.vsub(o.position,f.ri),f.rj.vadd(n,f.rj),f.rj.vsub(l.position,f.rj),this.result.push(f),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(f,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,i,n,r,a,o,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,n,r,a,o,l,e,t,u)}sphereHeightfield(e,t,i,n,r,a,o,l,c,h,u){const d=t.data,p=e.radius,g=t.elementSize,_=sM,m=nM;$e.pointToLocalFrame(n,a,i,m);let f=Math.floor((m.x-p)/g)-1,v=Math.ceil((m.x+p)/g)+1,M=Math.floor((m.y-p)/g)-1,x=Math.ceil((m.y+p)/g)+1;if(v<0||x<0||f>d.length||M>d[0].length)return;f<0&&(f=0),v<0&&(v=0),M<0&&(M=0),x<0&&(x=0),f>=d.length&&(f=d.length-1),v>=d.length&&(v=d.length-1),x>=d[0].length&&(x=d[0].length-1),M>=d[0].length&&(M=d[0].length-1);const R=[];t.getRectMinMax(f,M,v,x,R);const T=R[0],A=R[1];if(m.z-p>A||m.z+p<T)return;const L=this.result;for(let w=f;w<v;w++)for(let b=M;b<x;b++){const P=L.length;let N=!1;if(t.getConvexTrianglePillar(w,b,!1),$e.pointToWorldFrame(n,a,t.pillarOffset,_),i.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.sphereConvex(e,t.pillarConvex,i,_,r,a,o,l,e,t,u)),u&&N||(t.getConvexTrianglePillar(w,b,!0),$e.pointToWorldFrame(n,a,t.pillarOffset,_),i.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.sphereConvex(e,t.pillarConvex,i,_,r,a,o,l,e,t,u)),u&&N))return!0;if(L.length-P>2)return}}boxHeightfield(e,t,i,n,r,a,o,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,n,r,a,o,l,e,t,u)}convexHeightfield(e,t,i,n,r,a,o,l,c,h,u){const d=t.data,p=t.elementSize,g=e.boundingSphereRadius,_=tM,m=iM,f=eM;$e.pointToLocalFrame(n,a,i,f);let v=Math.floor((f.x-g)/p)-1,M=Math.ceil((f.x+g)/p)+1,x=Math.floor((f.y-g)/p)-1,R=Math.ceil((f.y+g)/p)+1;if(M<0||R<0||v>d.length||x>d[0].length)return;v<0&&(v=0),M<0&&(M=0),x<0&&(x=0),R<0&&(R=0),v>=d.length&&(v=d.length-1),M>=d.length&&(M=d.length-1),R>=d[0].length&&(R=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const T=[];t.getRectMinMax(v,x,M,R,T);const A=T[0],L=T[1];if(!(f.z-g>L||f.z+g<A))for(let w=v;w<M;w++)for(let b=x;b<R;b++){let P=!1;if(t.getConvexTrianglePillar(w,b,!1),$e.pointToWorldFrame(n,a,t.pillarOffset,_),i.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(P=this.convexConvex(e,t.pillarConvex,i,_,r,a,o,l,null,null,u,m,null)),u&&P||(t.getConvexTrianglePillar(w,b,!0),$e.pointToWorldFrame(n,a,t.pillarOffset,_),i.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(P=this.convexConvex(e,t.pillarConvex,i,_,r,a,o,l,null,null,u,m,null)),u&&P))return!0}}sphereParticle(e,t,i,n,r,a,o,l,c,h,u){const d=K0;if(d.set(0,0,1),n.vsub(i,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;const p=this.createContactEquation(l,o,t,e,c,h);d.normalize(),p.rj.copy(d),p.rj.scale(e.radius,p.rj),p.ni.copy(d),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,i,n,r,a,o,l,c,h,u){const d=X0;d.set(0,0,1),o.quaternion.vmult(d,d);const p=Y0;if(n.vsub(o.position,p),d.dot(p)<=0){if(u)return!0;const g=this.createContactEquation(l,o,t,e,c,h);g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0);const _=Z0;d.scale(d.dot(n),_),n.vsub(_,_),g.rj.copy(_),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,i,n,r,a,o,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,n,r,a,o,l,e,t,u)}convexParticle(e,t,i,n,r,a,o,l,c,h,u){let d=-1;const p=J0,g=Q0;let _=null;const m=$0;if(m.copy(n),m.vsub(i,m),r.conjugate(vh),vh.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let f=0,v=e.faces.length;f!==v;f++){const M=[e.worldVertices[e.faces[f][0]]],x=e.worldFaceNormals[f];n.vsub(M[0],xh);const R=-x.dot(xh);if(_===null||Math.abs(R)<Math.abs(_)){if(u)return!0;_=R,d=f,p.copy(x)}}if(d!==-1){const f=this.createContactEquation(l,o,t,e,c,h);p.scale(_,g),g.vadd(n,g),g.vsub(i,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,M=f.rj;v.vadd(n,v),v.vsub(l.position,v),M.vadd(i,M),M.vsub(o.position,M),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,n,r,a,o,l,c,h,u){return this.convexHeightfield(t,e,n,i,a,r,l,o,c,h,u)}particleCylinder(e,t,i,n,r,a,o,l,c,h,u){return this.convexParticle(t,e,n,i,a,r,l,o,c,h,u)}sphereTrimesh(e,t,i,n,r,a,o,l,c,h,u){const d=l0,p=c0,g=h0,_=u0,m=d0,f=p0,v=_0,M=o0,x=r0,R=v0;$e.pointToLocalFrame(n,a,i,m);const T=e.radius;v.lowerBound.set(m.x-T,m.y-T,m.z-T),v.upperBound.set(m.x+T,m.y+T,m.z+T),t.getTrianglesInAABB(v,R);const A=a0,L=e.radius*e.radius;for(let I=0;I<R.length;I++)for(let F=0;F<3;F++)if(t.getVertex(t.indices[R[I]*3+F],A),A.vsub(m,x),x.lengthSquared()<=L){if(M.copy(A),$e.pointToWorldFrame(n,a,M,A),A.vsub(i,x),u)return!0;let k=this.createContactEquation(o,l,e,t,c,h);k.ni.copy(x),k.ni.normalize(),k.ri.copy(k.ni),k.ri.scale(e.radius,k.ri),k.ri.vadd(i,k.ri),k.ri.vsub(o.position,k.ri),k.rj.copy(A),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}for(let I=0;I<R.length;I++)for(let F=0;F<3;F++){t.getVertex(t.indices[R[I]*3+F],d),t.getVertex(t.indices[R[I]*3+(F+1)%3],p),p.vsub(d,g),m.vsub(p,f);const k=f.dot(g);m.vsub(d,f);let B=f.dot(g);if(B>0&&k<0&&(m.vsub(d,f),_.copy(g),_.normalize(),B=f.dot(_),_.scale(B,f),f.vadd(d,f),f.distanceTo(m)<e.radius)){if(u)return!0;const q=this.createContactEquation(o,l,e,t,c,h);f.vsub(m,q.ni),q.ni.normalize(),q.ni.scale(e.radius,q.ri),q.ri.vadd(i,q.ri),q.ri.vsub(o.position,q.ri),$e.pointToWorldFrame(n,a,f,f),f.vsub(l.position,q.rj),$e.vectorToWorldFrame(a,q.ni,q.ni),$e.vectorToWorldFrame(a,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}const w=f0,b=m0,P=g0,N=s0;for(let I=0,F=R.length;I!==F;I++){t.getTriangleVertices(R[I],w,b,P),t.getNormal(R[I],N),m.vsub(w,f);let k=f.dot(N);if(N.scale(k,f),m.vsub(f,f),k=f.distanceTo(m),xt.pointInTriangle(f,w,b,P)&&k<e.radius){if(u)return!0;let B=this.createContactEquation(o,l,e,t,c,h);f.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(e.radius,B.ri),B.ri.vadd(i,B.ri),B.ri.vsub(o.position,B.ri),$e.pointToWorldFrame(n,a,f,f),f.vsub(l.position,B.rj),$e.vectorToWorldFrame(a,B.ni,B.ni),$e.vectorToWorldFrame(a,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}R.length=0}planeTrimesh(e,t,i,n,r,a,o,l,c,h,u){const d=new y,p=t0;p.set(0,0,1),r.vmult(p,p);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,d);const _=new y;_.copy(d),$e.pointToWorldFrame(n,a,_,d);const m=i0;if(d.vsub(i,m),p.dot(m)<=0){if(u)return!0;const f=this.createContactEquation(o,l,e,t,c,h);f.ni.copy(p);const v=n0;p.scale(m.dot(p),v),d.vsub(v,v),f.ri.copy(v),f.ri.vsub(o.position,f.ri),f.rj.copy(d),f.rj.vsub(l.position,f.rj),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}}}const gn=new y,jn=new y,qn=new y,$y=new y,Jy=new y,Qy=new gt,e0=new gt,t0=new y,i0=new y,n0=new y,s0=new y,r0=new y;new y;const a0=new y,o0=new y,l0=new y,c0=new y,h0=new y,u0=new y,d0=new y,p0=new y,f0=new y,m0=new y,g0=new y,_0=new Kt,v0=[],Br=new y,_h=new y,x0=new y,y0=new y,M0=new y;function b0(s,e,t){let i=null;const n=s.length;for(let r=0;r!==n;r++){const a=s[r],o=x0;s[(r+1)%n].vsub(a,o);const l=y0;o.cross(e,l);const c=M0;t.vsub(a,c);const h=l.dot(c);if(i===null||h>0&&i===!0||h<=0&&i===!1){i===null&&(i=h>0);continue}else return!1}return!0}const zr=new y,S0=new y,E0=new y,w0=new y,T0=[new y,new y,new y,new y,new y,new y],A0=new y,R0=new y,C0=new y,P0=new y,L0=new y,I0=new y,D0=new y,N0=new y,U0=new y,F0=new y,O0=new y,B0=new y,z0=new y,V0=new y;new y;new y;const k0=new y,H0=new y,G0=new y,W0=new y,j0=new y,q0=new y,X0=new y,Y0=new y,Z0=new y,K0=new y,vh=new gt,$0=new y;new y;const J0=new y,xh=new y,Q0=new y,eM=new y,tM=new y,iM=[0],nM=new y,sM=new y;class yh{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),n=this.current;let r=0;for(;i>n[r];)r++;if(i!==n[r]){for(let a=n.length-1;a>=r;a--)n[a+1]=n[a];n[r]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,n=this.previous,r=i.length,a=n.length;let o=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[o];)o++;c=h===n[o],c||Mh(e,h)}o=0;for(let l=0;l<a;l++){let c=!1;const h=n[l];for(;h>i[o];)o++;c=i[o]===h,c||Mh(t,h)}}}function Mh(s,e){s.push((e&4294901760)>>16,e&65535)}const ro=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class rM{constructor(){this.data={keys:[]}}get(e,t){const i=ro(e,t);return this.data[i]}set(e,t,i){const n=ro(e,t);this.get(e,t)||this.data.keys.push(n),this.data[n]=i}delete(e,t){const i=ro(e,t),n=this.data.keys.indexOf(i);n!==-1&&this.data.keys.splice(n,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class aM extends yu{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Wx,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Wy,this.constraints=[],this.narrowphase=new Ky(this),this.collisionMatrix=new nh,this.collisionMatrixPrevious=new nh,this.bodyOverlapKeeper=new yh,this.shapeOverlapKeeper=new yh,this.contactmaterials=[],this.contactMaterialTable=new rM,this.defaultMaterial=new ys("default"),this.defaultContactMaterial=new ma(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof Ks?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,n){return i===void 0&&(i={}),i.mode=xt.ALL,i.from=e,i.to=t,i.callback=n,ao.intersectWorld(this,i)}raycastAny(e,t,i,n){return i===void 0&&(i={}),i.mode=xt.ANY,i.from=e,i.to=t,i.result=n,ao.intersectWorld(this,i)}raycastClosest(e,t,i,n){return i===void 0&&(i={}),i.mode=xt.CLOSEST,i.from=e,i.to=t,i.result=n,ao.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof pe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,n=i.indexOf(e);if(n!==-1){i.splice(n,1);for(let r=0;r!==i.length;r++)i[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const n=t[i].shapes;for(let r=0;r<n.length;r++){const a=n[r];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=bt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const n=i-this.lastCallTime;this.step(e,n,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const n=bt.now();let r=0;for(;this.accumulator>=e&&r<i&&(this.internalStep(e),this.accumulator-=e,r++,!(bt.now()-n>e*1e3)););this.accumulator=this.accumulator%e;const a=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=uM,n=dM,r=this.bodies.length,a=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=pe.DYNAMIC;let d=-1/0;const p=this.constraints,g=hM;l.length();const _=l.x,m=l.y,f=l.z;let v=0;for(c&&(d=bt.now()),v=0;v!==r;v++){const N=a[v];if(N.type===u){const I=N.force,F=N.mass;I.x+=F*_,I.y+=F*m,I.z+=F*f}}for(let N=0,I=this.subsystems.length;N!==I;N++)this.subsystems[N].update();c&&(d=bt.now()),i.length=0,n.length=0,this.broadphase.collisionPairs(this,i,n),c&&(h.broadphase=bt.now()-d);let M=p.length;for(v=0;v!==M;v++){const N=p[v];if(!N.collideConnected)for(let I=i.length-1;I>=0;I-=1)(N.bodyA===i[I]&&N.bodyB===n[I]||N.bodyB===i[I]&&N.bodyA===n[I])&&(i.splice(I,1),n.splice(I,1))}this.collisionMatrixTick(),c&&(d=bt.now());const x=cM,R=t.length;for(v=0;v!==R;v++)x.push(t[v]);t.length=0;const T=this.frictionEquations.length;for(v=0;v!==T;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,n,this,t,x,this.frictionEquations,g),c&&(h.narrowphase=bt.now()-d),c&&(d=bt.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const A=t.length;for(let N=0;N!==A;N++){const I=t[N],F=I.bi,k=I.bj,B=I.si,q=I.sj;let H;if(F.material&&k.material?H=this.getContactMaterial(F.material,k.material)||this.defaultContactMaterial:H=this.defaultContactMaterial,H.friction,F.material&&k.material&&(F.material.friction>=0&&k.material.friction>=0&&F.material.friction*k.material.friction,F.material.restitution>=0&&k.material.restitution>=0&&(I.restitution=F.material.restitution*k.material.restitution)),o.addEquation(I),F.allowSleep&&F.type===pe.DYNAMIC&&F.sleepState===pe.SLEEPING&&k.sleepState===pe.AWAKE&&k.type!==pe.STATIC){const Y=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),re=k.sleepSpeedLimit**2;Y>=re*2&&(F.wakeUpAfterNarrowphase=!0)}if(k.allowSleep&&k.type===pe.DYNAMIC&&k.sleepState===pe.SLEEPING&&F.sleepState===pe.AWAKE&&F.type!==pe.STATIC){const Y=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),re=F.sleepSpeedLimit**2;Y>=re*2&&(k.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,k,!0),this.collisionMatrixPrevious.get(F,k)||(Ls.body=k,Ls.contact=I,F.dispatchEvent(Ls),Ls.body=F,k.dispatchEvent(Ls)),this.bodyOverlapKeeper.set(F.id,k.id),this.shapeOverlapKeeper.set(B.id,q.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=bt.now()-d,d=bt.now()),v=0;v!==r;v++){const N=a[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(M=p.length,v=0;v!==M;v++){const N=p[v];N.update();for(let I=0,F=N.equations.length;I!==F;I++){const k=N.equations[I];o.addEquation(k)}}o.solve(e,this),c&&(h.solve=bt.now()-d),o.removeAllEquations();const L=Math.pow;for(v=0;v!==r;v++){const N=a[v];if(N.type&u){const I=L(1-N.linearDamping,e),F=N.velocity;F.scale(I,F);const k=N.angularVelocity;if(k){const B=L(1-N.angularDamping,e);k.scale(B,k)}}}this.dispatchEvent(lM),c&&(d=bt.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,b=this.quatNormalizeFast;for(v=0;v!==r;v++)a[v].integrate(e,w,b);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=bt.now()-d),this.stepnumber+=1,this.dispatchEvent(oM);let P=!0;if(this.allowSleep)for(P=!1,v=0;v!==r;v++){const N=a[v];N.sleepTick(this.time),N.sleepState!==pe.SLEEPING&&(P=!0)}this.hasActiveBodies=P}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Di,Ni),e){for(let r=0,a=Di.length;r<a;r+=2)Is.bodyA=this.getBodyById(Di[r]),Is.bodyB=this.getBodyById(Di[r+1]),this.dispatchEvent(Is);Is.bodyA=Is.bodyB=null}if(t){for(let r=0,a=Ni.length;r<a;r+=2)Ds.bodyA=this.getBodyById(Ni[r]),Ds.bodyB=this.getBodyById(Ni[r+1]),this.dispatchEvent(Ds);Ds.bodyA=Ds.bodyB=null}Di.length=Ni.length=0;const i=this.hasAnyEventListener("beginShapeContact"),n=this.hasAnyEventListener("endShapeContact");if((i||n)&&this.shapeOverlapKeeper.getDiff(Di,Ni),i){for(let r=0,a=Di.length;r<a;r+=2){const o=this.getShapeById(Di[r]),l=this.getShapeById(Di[r+1]);Ui.shapeA=o,Ui.shapeB=l,o&&(Ui.bodyA=o.body),l&&(Ui.bodyB=l.body),this.dispatchEvent(Ui)}Ui.bodyA=Ui.bodyB=Ui.shapeA=Ui.shapeB=null}if(n){for(let r=0,a=Ni.length;r<a;r+=2){const o=this.getShapeById(Ni[r]),l=this.getShapeById(Ni[r+1]);Fi.shapeA=o,Fi.shapeB=l,o&&(Fi.bodyA=o.body),l&&(Fi.bodyB=l.body),this.dispatchEvent(Fi)}Fi.bodyA=Fi.bodyB=Fi.shapeA=Fi.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const n=e[i];n.force,n.torque,n.force.set(0,0,0),n.torque.set(0,0,0)}}}new Kt;const ao=new xt,bt=globalThis.performance||{};if(!bt.now){let s=Date.now();bt.timing&&bt.timing.navigationStart&&(s=bt.timing.navigationStart),bt.now=()=>Date.now()-s}new y;const oM={type:"postStep"},lM={type:"preStep"},Ls={type:pe.COLLIDE_EVENT_NAME,body:null,contact:null},cM=[],hM=[],uM=[],dM=[],Di=[],Ni=[],Is={type:"beginContact",bodyA:null,bodyB:null},Ds={type:"endContact",bodyA:null,bodyB:null},Ui={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Fi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ti=Uint8Array,zs=Uint16Array,pM=Int32Array,Cu=new ti([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Pu=new ti([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fM=new ti([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Lu=function(s,e){for(var t=new zs(31),i=0;i<31;++i)t[i]=e+=1<<s[i-1];for(var n=new pM(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)n[r]=r-t[i]<<5|i;return{b:t,r:n}},Iu=Lu(Cu,2),Du=Iu.b,mM=Iu.r;Du[28]=258,mM[258]=28;var gM=Lu(Pu,0),_M=gM.b,Nu=new zs(32768);for(var ut=0;ut<32768;++ut){var Ki=(ut&43690)>>1|(ut&21845)<<1;Ki=(Ki&52428)>>2|(Ki&13107)<<2,Ki=(Ki&61680)>>4|(Ki&3855)<<4,Nu[ut]=((Ki&65280)>>8|(Ki&255)<<8)>>1}var Vs=function(s,e,t){for(var i=s.length,n=0,r=new zs(e);n<i;++n)s[n]&&++r[s[n]-1];var a=new zs(e);for(n=1;n<e;++n)a[n]=a[n-1]+r[n-1]<<1;var o;{o=new zs(1<<e);var l=15-e;for(n=0;n<i;++n)if(s[n])for(var c=n<<4|s[n],h=e-s[n],u=a[s[n]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[Nu[u]>>l]=c}return o},er=new ti(288);for(var ut=0;ut<144;++ut)er[ut]=8;for(var ut=144;ut<256;++ut)er[ut]=9;for(var ut=256;ut<280;++ut)er[ut]=7;for(var ut=280;ut<288;++ut)er[ut]=8;var Uu=new ti(32);for(var ut=0;ut<32;++ut)Uu[ut]=5;var vM=Vs(er,9),xM=Vs(Uu,5),oo=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},hi=function(s,e,t){var i=e/8|0;return(s[i]|s[i+1]<<8)>>(e&7)&t},lo=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},yM=function(s){return(s+7)/8|0},MM=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new ti(s.subarray(e,t))},bM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ui=function(s,e,t){var i=new Error(e||bM[s]);if(i.code=s,Error.captureStackTrace&&Error.captureStackTrace(i,ui),!t)throw i;return i},SM=function(s,e,t,i){var n=s.length,r=0;if(!n||e.f&&!e.l)return t||new ti(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new ti(n*3));var c=function(rt){var Ge=t.length;if(rt>Ge){var dt=new ti(Math.max(Ge*2,rt));dt.set(t),t=dt}},h=e.f||0,u=e.p||0,d=e.b||0,p=e.l,g=e.d,_=e.m,m=e.n,f=n*8;do{if(!p){h=hi(s,u,1);var v=hi(s,u+1,3);if(u+=3,v)if(v==1)p=vM,g=xM,_=9,m=5;else if(v==2){var M=hi(s,u,31)+257,x=hi(s,u+10,15)+4,R=M+hi(s,u+5,31)+1;u+=14;for(var T=new ti(R),A=new ti(19),L=0;L<x;++L)A[fM[L]]=hi(s,u+L*3,7);u+=x*3;for(var w=oo(A),b=(1<<w)-1,P=Vs(A,w),L=0;L<R;){var N=P[hi(s,u,b)];u+=N&15;var I=N>>4;if(I<16)T[L++]=I;else{var F=0,k=0;for(I==16?(k=3+hi(s,u,3),u+=2,F=T[L-1]):I==17?(k=3+hi(s,u,7),u+=3):I==18&&(k=11+hi(s,u,127),u+=7);k--;)T[L++]=F}}var B=T.subarray(0,M),q=T.subarray(M);_=oo(B),m=oo(q),p=Vs(B,_),g=Vs(q,m)}else ui(1);else{var I=yM(u)+4,H=s[I-4]|s[I-3]<<8,Y=I+H;if(Y>n){l&&ui(0);break}o&&c(d+H),t.set(s.subarray(I,Y),d),e.b=d+=H,e.p=u=Y*8,e.f=h;continue}if(u>f){l&&ui(0);break}}o&&c(d+131072);for(var re=(1<<_)-1,ye=(1<<m)-1,ie=u;;ie=u){var F=p[lo(s,u)&re],Fe=F>>4;if(u+=F&15,u>f){l&&ui(0);break}if(F||ui(2),Fe<256)t[d++]=Fe;else if(Fe==256){ie=u,p=null;break}else{var Z=Fe-254;if(Fe>264){var L=Fe-257,te=Cu[L];Z=hi(s,u,(1<<te)-1)+Du[L],u+=te}var fe=g[lo(s,u)&ye],se=fe>>4;fe||ui(3),u+=fe&15;var q=_M[se];if(se>3){var te=Pu[se];q+=lo(s,u)&(1<<te)-1,u+=te}if(u>f){l&&ui(0);break}o&&c(d+131072);var Te=d+Z;if(d<q){var Pe=r-q,ke=Math.min(q,Te);for(Pe+d<0&&ui(3);d<ke;++d)t[d]=i[Pe+d]}for(;d<Te;++d)t[d]=t[d-q]}}e.l=p,e.p=ie,e.b=d,e.f=h,p&&(h=1,e.m=_,e.d=g,e.n=m)}while(!h);return d!=t.length&&a?MM(t,0,d):t.subarray(0,d)},EM=new ti(0),wM=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&ui(6,"invalid zlib data"),(s[1]>>5&1)==1&&ui(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function TM(s,e){return SM(s.subarray(wM(s),-4),{i:2},e,e)}var AM=typeof TextDecoder<"u"&&new TextDecoder,RM=0;try{AM.decode(EM,{stream:!0}),RM=1}catch{}function Fu(s,e,t){const i=t.length-s-1;if(e>=t[i])return i-1;if(e<=t[s])return s;let n=s,r=i,a=Math.floor((n+r)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?r=a:n=a,a=Math.floor((n+r)/2);return a}function CM(s,e,t,i){const n=[],r=[],a=[];n[0]=1;for(let o=1;o<=t;++o){r[o]=e-i[s+1-o],a[o]=i[s+o]-e;let l=0;for(let c=0;c<o;++c){const h=a[c+1],u=r[o-c],d=n[c]/(h+u);n[c]=l+h*d,l=u*d}n[o]=l}return n}function PM(s,e,t,i){const n=Fu(s,i,e),r=CM(n,i,s,e),a=new We(0,0,0,0);for(let o=0;o<=s;++o){const l=t[n-s+o],c=r[o],h=l.w*c;a.x+=l.x*h,a.y+=l.y*h,a.z+=l.z*h,a.w+=l.w*c}return a}function LM(s,e,t,i,n){const r=[];for(let u=0;u<=t;++u)r[u]=0;const a=[];for(let u=0;u<=i;++u)a[u]=r.slice(0);const o=[];for(let u=0;u<=t;++u)o[u]=r.slice(0);o[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let u=1;u<=t;++u){l[u]=e-n[s+1-u],c[u]=n[s+u]-e;let d=0;for(let p=0;p<u;++p){const g=c[p+1],_=l[u-p];o[u][p]=g+_;const m=o[p][u-1]/o[u][p];o[p][u]=d+g*m,d=_*m}o[u][u]=d}for(let u=0;u<=t;++u)a[0][u]=o[u][t];for(let u=0;u<=t;++u){let d=0,p=1;const g=[];for(let _=0;_<=t;++_)g[_]=r.slice(0);g[0][0]=1;for(let _=1;_<=i;++_){let m=0;const f=u-_,v=t-_;u>=_&&(g[p][0]=g[d][0]/o[v+1][f],m=g[p][0]*o[f][v]);const M=f>=-1?1:-f,x=u-1<=v?_-1:t-u;for(let T=M;T<=x;++T)g[p][T]=(g[d][T]-g[d][T-1])/o[v+1][f+T],m+=g[p][T]*o[f+T][v];u<=v&&(g[p][_]=-g[d][_-1]/o[v+1][u],m+=g[p][_]*o[u][v]),a[_][u]=m;const R=d;d=p,p=R}}let h=t;for(let u=1;u<=i;++u){for(let d=0;d<=t;++d)a[u][d]*=h;h*=t-u}return a}function IM(s,e,t,i,n){const r=n<s?n:s,a=[],o=Fu(s,i,e),l=LM(o,i,s,r,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),d=u.w;u.x*=d,u.y*=d,u.z*=d,c[h]=u}for(let h=0;h<=r;++h){const u=c[o-s].clone().multiplyScalar(l[h][0]);for(let d=1;d<=s;++d)u.add(c[o-s+d].clone().multiplyScalar(l[h][d]));a[h]=u}for(let h=r+1;h<=n+1;++h)a[h]=new We(0,0,0);return a}function DM(s,e){let t=1;for(let n=2;n<=s;++n)t*=n;let i=1;for(let n=2;n<=e;++n)i*=n;for(let n=2;n<=s-e;++n)i*=n;return t/i}function NM(s){const e=s.length,t=[],i=[];for(let r=0;r<e;++r){const a=s[r];t[r]=new U(a.x,a.y,a.z),i[r]=a.w}const n=[];for(let r=0;r<e;++r){const a=t[r].clone();for(let o=1;o<=r;++o)a.sub(n[r-o].clone().multiplyScalar(DM(r,o)*i[o]));n[r]=a.divideScalar(i[0])}return n}function UM(s,e,t,i,n){const r=IM(s,e,t,i,n);return NM(r)}class FM extends Fp{constructor(e,t,i,n,r){super();const a=t?t.length-1:0,o=i?i.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=n||0,this.endKnot=r||a;for(let l=0;l<o;++l){const c=i[l];this.controlPoints[l]=new We(c.x,c.y,c.z,c.w)}}getPoint(e,t=new U){const i=t,n=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=PM(this.degree,this.knots,this.controlPoints,n);return r.w!==1&&r.divideScalar(r.w),i.set(r.x,r.y,r.z)}getTangent(e,t=new U){const i=t,n=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=UM(this.degree,this.knots,this.controlPoints,n,1);return i.copy(r[1]).normalize(),i}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new We(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let He,_t,zt;class Ms extends Tn{constructor(e){super(e)}load(e,t,i,n){const r=this,a=r.path===""?bf.extractUrlBase(e):r.path,o=new gf(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){n?n(c):console.error(c),r.manager.itemError(e)}},i,n)}parse(e,t){if(HM(e))He=new kM().parse(e);else{const n=zu(e);if(!GM(n))throw new Error("THREE.FBXLoader: Unknown format.");if(Sh(n)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Sh(n));He=new VM().parse(n)}const i=new ml(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new OM(i,this.manager).parse(He)}}class OM{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){_t=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),n=this.parseDeformers(),r=new BM().parse(n);return this.parseScene(n,r,i),zt}parseConnections(){const e=new Map;return"Connections"in He&&He.Connections.connections.forEach(function(t){const i=t[0],n=t[1],r=t[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:n,relationship:r};e.get(i).parents.push(a),e.has(n)||e.set(n,{parents:[],children:[]});const o={ID:i,relationship:r};e.get(n).children.push(o)}),e}parseImages(){const e={},t={};if("Video"in He.Objects){const i=He.Objects.Video;for(const n in i){const r=i[n],a=parseInt(n);if(e[a]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const c=this.parseImage(i[n]);t[r.RelativeFilename||r.Filename]=c}}}}for(const i in e){const n=e[i];t[n]!==void 0?e[i]=t[n]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,n=i.slice(i.lastIndexOf(".")+1).toLowerCase();let r;switch(n){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+n+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in He.Objects){const i=He.Objects.Texture;for(const n in i){const r=this.parseTexture(i[n],e);t.set(parseInt(n),r)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const n=e.WrapModeU,r=e.WrapModeV,a=n!==void 0?n.value:0,o=r!==void 0?r.value:0;if(i.wrapS=a===0?Hs:zi,i.wrapT=o===0?Hs:zi,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){const i=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),n=e.FileName.split(".").pop().toLowerCase(),r=i.has(n)?this.manager.getHandler(`.${n}`):this.textureLoader;if(!r)return console.warn(`FBXLoader: ${n.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Lt;const a=r.path;a||r.setPath(this.textureLoader.path);const o=_t.get(e.id).children;let l;o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(l=t[o[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&r.setPath(void 0));const c=r.load(l);return r.setPath(a),c}parseMaterials(e){const t=new Map;if("Material"in He.Objects){const i=He.Objects.Material;for(const n in i){const r=this.parseMaterial(i[n],e);r!==null&&t.set(parseInt(n),r)}}return t}parseMaterial(e,t){const i=e.id,n=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!_t.has(i))return null;const a=this.parseParameters(e,t,i);let o;switch(r.toLowerCase()){case"phong":o=new ja;break;case"lambert":o=new ef;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new ja;break}return o.setValues(a),o.name=n,o}parseParameters(e,t,i){const n={};e.BumpFactor&&(n.bumpScale=e.BumpFactor.value),e.Diffuse?n.color=ze.toWorkingColorSpace(new Re().fromArray(e.Diffuse.value),ht):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(n.color=ze.toWorkingColorSpace(new Re().fromArray(e.DiffuseColor.value),ht)),e.DisplacementFactor&&(n.displacementScale=e.DisplacementFactor.value),e.Emissive?n.emissive=ze.toWorkingColorSpace(new Re().fromArray(e.Emissive.value),ht):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(n.emissive=ze.toWorkingColorSpace(new Re().fromArray(e.EmissiveColor.value),ht)),e.EmissiveFactor&&(n.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),n.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(n.opacity===1||n.opacity===0)&&(n.opacity=e.Opacity?parseFloat(e.Opacity.value):null,n.opacity===null&&(n.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),n.opacity<1&&(n.transparent=!0),e.ReflectionFactor&&(n.reflectivity=e.ReflectionFactor.value),e.Shininess&&(n.shininess=e.Shininess.value),e.Specular?n.specular=ze.toWorkingColorSpace(new Re().fromArray(e.Specular.value),ht):e.SpecularColor&&e.SpecularColor.type==="Color"&&(n.specular=ze.toWorkingColorSpace(new Re().fromArray(e.SpecularColor.value),ht));const r=this;return _t.get(i).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":n.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":n.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":n.map=r.getTexture(t,a.ID),n.map!==void 0&&(n.map.colorSpace=ht);break;case"DisplacementColor":n.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":n.emissiveMap=r.getTexture(t,a.ID),n.emissiveMap!==void 0&&(n.emissiveMap.colorSpace=ht);break;case"NormalMap":case"Maya|TEX_normal_map":n.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":n.envMap=r.getTexture(t,a.ID),n.envMap!==void 0&&(n.envMap.mapping=Jr,n.envMap.colorSpace=ht);break;case"SpecularColor":n.specularMap=r.getTexture(t,a.ID),n.specularMap!==void 0&&(n.specularMap.colorSpace=ht);break;case"TransparentColor":case"TransparencyFactor":n.alphaMap=r.getTexture(t,a.ID),n.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),n}getTexture(e,t){return"LayeredTexture"in He.Objects&&t in He.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=_t.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in He.Objects){const i=He.Objects.Deformer;for(const n in i){const r=i[n],a=_t.get(parseInt(n));if(r.attrType==="Skin"){const o=this.parseSkeleton(a,i);o.ID=n,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[n]=o}else if(r.attrType==="BlendShape"){const o={id:n};o.rawTargets=this.parseMorphTargets(a,i),o.id=n,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[n]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(n){const r=t[n.ID];if(r.attrType!=="Cluster")return;const a={ID:n.ID,indices:[],weights:[],transformLink:new be().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),i.push(a)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let n=0;n<e.children.length;n++){const r=e.children[n],a=t[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=_t.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(o)}return i}parseScene(e,t,i){zt=new Jn;const n=this.parseModels(e.skeletons,t,i),r=He.Objects.Model,a=this;n.forEach(function(l){const c=r[l.ID];a.setLookAtProperties(l,c),_t.get(l.ID).parents.forEach(function(h){const u=n.get(h.ID);u!==void 0&&u.add(l)}),l.parent===null&&zt.add(l)}),this.bindSkeleton(e.skeletons,t,n),this.addGlobalSceneSettings(),zt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Bu(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new zM().parse();zt.children.length===1&&zt.children[0].isGroup&&(zt.children[0].animations=o,zt=zt.children[0]),zt.animations=o}parseModels(e,t,i){const n=new Map,r=He.Objects.Model;for(const a in r){const o=parseInt(a),l=r[a],c=_t.get(o);let h=this.buildSkeleton(c,e,o,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,i);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new $o;break;case"Null":default:h=new Jn;break}h.name=l.attrName?Je.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=o}this.getTransformData(h,l),n.set(o,h)}return n}buildSkeleton(e,t,i,n){let r=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,h){if(c.ID===a.ID){const u=r;r=new $o,r.matrixWorld.copy(c.transformLink),r.name=n?Je.sanitizeNodeName(n):"",r.userData.originalName=n,r.ID=i,l.bones[h]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,i;if(e.children.forEach(function(n){const r=He.Objects.NodeAttribute[n.ID];r!==void 0&&(i=r)}),i===void 0)t=new st;else{let n=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(n=1);let r=1;i.NearPlane!==void 0&&(r=i.NearPlane.value/1e3);let a=1e3;i.FarPlane!==void 0&&(a=i.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(o=i.AspectWidth.value,l=i.AspectHeight.value);const c=o/l;let h=45;i.FieldOfView!==void 0&&(h=i.FieldOfView.value);const u=i.FocalLength?i.FocalLength.value:null;switch(n){case 0:t=new Vt(h,c,r,a),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new st;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+n+"."),t=new st;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(n){const r=He.Objects.NodeAttribute[n.ID];r!==void 0&&(i=r)}),i===void 0)t=new st;else{let n;i.LightType===void 0?n=0:n=i.LightType.value;let r=16777215;i.Color!==void 0&&(r=ze.toWorkingColorSpace(new Re().fromArray(i.Color.value),ht));let a=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(a=0);let o=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?o=0:o=i.FarAttenuationEnd.value);const l=1;switch(n){case 0:t=new Tc(r,a,o,l);break;case 1:t=new pu(r,a);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=At.degToRad(i.InnerAngle.value));let h=0;i.OuterAngle!==void 0&&(h=At.degToRad(i.OuterAngle.value),h=Math.max(h,1)),t=new xf(r,a,o,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new Tc(r,a);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let n,r=null,a=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),i.has(l.ID)&&o.push(i.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new ja({name:Tn.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(n=new Pp(r,a),n.normalizeSkinWeights()):n=new Yt(r,a),n}createCurve(e,t){const i=e.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),n=new su({name:Tn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Up(i,n)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=$s(t.RotationOrder.value):i.eulerOrder=$s(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&_t.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const n=He.Objects.Model[i.ID];if("Lcl_Translation"in n){const r=n.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(r),zt.add(e.target)):e.lookAt(new U().fromArray(r))}}})}bindSkeleton(e,t,i){const n=this.parsePoseNodes();for(const r in e){const a=e[r];_t.get(parseInt(a.ID)).parents.forEach(function(o){if(t.has(o.ID)){const l=o.ID;_t.get(l).parents.forEach(function(c){i.has(c.ID)&&i.get(c.ID).bind(new dl(a.bones),n[c.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in He.Objects){const t=He.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const n=t[i].PoseNode;Array.isArray(n)?n.forEach(function(r){e[r.Node]=new be().fromArray(r.Matrix.a)}):e[n.Node]=new be().fromArray(n.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in He){if("AmbientColor"in He.GlobalSettings){const e=He.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],n=e[2];if(t!==0||i!==0||n!==0){const r=new Re().setRGB(t,i,n,ht);zt.add(new fu(r,1))}}"UnitScaleFactor"in He.GlobalSettings&&(zt.userData.unitScaleFactor=He.GlobalSettings.UnitScaleFactor.value)}}}class BM{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in He.Objects){const i=He.Objects.Geometry;for(const n in i){const r=_t.get(parseInt(n)),a=this.parseGeometry(r,i[n],e);t.set(parseInt(n),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const n=i.skeletons,r=[],a=e.parents.map(function(u){return He.Objects.Model[u.ID]});if(a.length===0)return;const o=e.children.reduce(function(u,d){return n[d.ID]!==void 0&&(u=n[d.ID]),u},null);e.children.forEach(function(u){i.morphTargets[u.ID]!==void 0&&r.push(i.morphTargets[u.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=$s(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Bu(c);return this.genGeometry(t,o,r,h)}genGeometry(e,t,i,n){const r=new fi;e.attrName&&(r.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new Gt(o.vertex,3);if(l.applyMatrix4(n),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new Gt(o.colors,3)),t&&(r.setAttribute("skinIndex",new ul(o.weightsIndices,4)),r.setAttribute("skinWeight",new Gt(o.vertexWeights,4)),r.FBX_Deformer=t),o.normal.length>0){const c=new Ue().getNormalMatrix(n),h=new Gt(o.normal,3);h.applyNormalMatrix(c),r.setAttribute("normal",h)}if(o.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;r.setAttribute(u,new Gt(o.uvs[h],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],h=0;if(o.materialIndex.forEach(function(u,d){u!==c&&(r.addGroup(h,d-h,c),c=u,h=d)}),r.groups.length>0){const u=r.groups[r.groups.length-1],d=u.start+u.count;d!==o.materialIndex.length&&r.addGroup(d,o.materialIndex.length-d,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,e,i,n),r}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let n=0;for(;e.LayerElementUV[n];)e.LayerElementUV[n].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[n])),n++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(n,r){n.indices.forEach(function(a,o){i.weightTable[a]===void 0&&(i.weightTable[a]=[]),i.weightTable[a].push({id:r,weight:n.weights[o]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,n=0,r=!1,a=[],o=[],l=[],c=[],h=[],u=[];const d=this;return e.vertexIndices.forEach(function(p,g){let _,m=!1;p<0&&(p=p^-1,m=!0);let f=[],v=[];if(a.push(p*3,p*3+1,p*3+2),e.color){const M=Vr(g,i,p,e.color);l.push(M[0],M[1],M[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(M){v.push(M.weight),f.push(M.id)}),v.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const M=[0,0,0,0],x=[0,0,0,0];v.forEach(function(R,T){let A=R,L=f[T];x.forEach(function(w,b,P){if(A>w){P[b]=A,A=w;const N=M[b];M[b]=L,L=N}})}),f=M,v=x}for(;v.length<4;)v.push(0),f.push(0);for(let M=0;M<4;++M)h.push(v[M]),u.push(f[M])}if(e.normal){const M=Vr(g,i,p,e.normal);o.push(M[0],M[1],M[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=Vr(g,i,p,e.material)[0],_<0&&(d.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(M,x){const R=Vr(g,i,p,M);c[x]===void 0&&(c[x]=[]),c[x].push(R[0]),c[x].push(R[1])}),n++,m&&(d.genFace(t,e,a,_,o,l,c,h,u,n),i++,n=0,a=[],o=[],l=[],c=[],h=[],u=[])}),t}getNormalNewell(e){const t=new U(0,0,0);for(let i=0;i<e.length;i++){const n=e[i],r=e[(i+1)%e.length];t.x+=(n.y-r.y)*(n.z+r.z),t.y+=(n.z-r.z)*(n.x+r.x),t.z+=(n.x-r.x)*(n.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new U(0,1,0):new U(0,0,1)).cross(t).normalize(),n=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:n}}flattenVertex(e,t,i){return new Ce(e.dot(t),e.dot(i))}genFace(e,t,i,n,r,a,o,l,c,h){let u;if(h>3){const d=[],p=t.baseVertexPositions||t.vertexPositions;for(let f=0;f<i.length;f+=3)d.push(new U(p[i[f]],p[i[f+1]],p[i[f+2]]));const{tangent:g,bitangent:_}=this.getNormalTangentAndBitangent(d),m=[];for(const f of d)m.push(this.flattenVertex(f,g,_));u=fl.triangulateShape(m,[])}else u=[[0,1,2]];for(const[d,p,g]of u)e.vertex.push(t.vertexPositions[i[d*3]]),e.vertex.push(t.vertexPositions[i[d*3+1]]),e.vertex.push(t.vertexPositions[i[d*3+2]]),e.vertex.push(t.vertexPositions[i[p*3]]),e.vertex.push(t.vertexPositions[i[p*3+1]]),e.vertex.push(t.vertexPositions[i[p*3+2]]),e.vertex.push(t.vertexPositions[i[g*3]]),e.vertex.push(t.vertexPositions[i[g*3+1]]),e.vertex.push(t.vertexPositions[i[g*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.vertexWeights.push(l[g*4]),e.vertexWeights.push(l[g*4+1]),e.vertexWeights.push(l[g*4+2]),e.vertexWeights.push(l[g*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3]),e.weightsIndices.push(c[g*4]),e.weightsIndices.push(c[g*4+1]),e.weightsIndices.push(c[g*4+2]),e.weightsIndices.push(c[g*4+3])),t.color&&(e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[p*3]),e.colors.push(a[p*3+1]),e.colors.push(a[p*3+2]),e.colors.push(a[g*3]),e.colors.push(a[g*3+1]),e.colors.push(a[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(n),e.materialIndex.push(n),e.materialIndex.push(n)),t.normal&&(e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[p*3]),e.normal.push(r[p*3+1]),e.normal.push(r[p*3+2]),e.normal.push(r[g*3]),e.normal.push(r[g*3+1]),e.normal.push(r[g*3+2])),t.uv&&t.uv.forEach(function(_,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(o[m][d*2]),e.uvs[m].push(o[m][d*2+1]),e.uvs[m].push(o[m][p*2]),e.uvs[m].push(o[m][p*2+1]),e.uvs[m].push(o[m][g*2]),e.uvs[m].push(o[m][g*2+1])})}addMorphTargets(e,t,i,n){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;i.forEach(function(a){a.rawTargets.forEach(function(o){const l=He.Objects.Geometry[o.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,n,o.name)})})}genMorphGeometry(e,t,i,n,r){const a=t.Vertices!==void 0?t.Vertices.a:[],o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=i.Vertices!==void 0?i.Vertices.a:[],c=i.Indexes!==void 0?i.Indexes.a:[],h=e.attributes.position.count*3,u=new Float32Array(h);for(let _=0;_<c.length;_++){const m=c[_]*3;u[m]=l[_*3],u[m+1]=l[_*3+1],u[m+2]=l[_*3+2]}const d={vertexIndices:o,vertexPositions:u,baseVertexPositions:a},p=this.genBuffers(d),g=new Gt(p.vertex,3);g.name=r||i.attrName,g.applyMatrix4(n),e.morphAttributes.position.push(g)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.Normals.a;let r=[];return i==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:n,indices:r,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.UV.a;let r=[];return i==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:n,indices:r,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.Colors.a;let r=[];i==="IndexToDirect"&&(r=e.ColorIndex.a);for(let a=0,o=new Re;a<n.length;a+=4)o.fromArray(n,a),ze.toWorkingColorSpace(o,ht),o.toArray(n,a);return{dataSize:4,buffer:n,indices:r,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const n=e.Materials.a,r=[];for(let a=0;a<n.length;++a)r.push(a);return{dataSize:1,buffer:n,indices:r,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new fi;const i=t-1,n=e.KnotVector.a,r=[],a=e.Points.a;for(let h=0,u=a.length;h<u;h+=4)r.push(new We().fromArray(a,h));let o,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){o=i,l=n.length-1-o;for(let h=0;h<i;++h)r.push(r[h])}const c=new FM(i,n,r,o,l).getPoints(r.length*12);return new fi().setFromPoints(c)}}class zM{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const n=t[i],r=this.addClip(n);e.push(r)}return e}parseClips(){if(He.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=He.Objects.AnimationCurveNode,t=new Map;for(const i in e){const n=e[i];if(n.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:n.id,attr:n.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=He.Objects.AnimationCurve;for(const i in t){const n={id:t[i].id,times:t[i].KeyTime.a.map(WM),values:t[i].KeyValueFloat.a},r=_t.get(n.id);if(r!==void 0){const a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=n:o.match(/Y/)?e.get(a).curves.y=n:o.match(/Z/)?e.get(a).curves.z=n:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=n)}}}parseAnimationLayers(e){const t=He.Objects.AnimationLayer,i=new Map;for(const n in t){const r=[],a=_t.get(parseInt(n));a!==void 0&&(a.children.forEach(function(o,l){if(e.has(o.ID)){const c=e.get(o.ID);if(c.curves.x!==void 0||c.curves.y!==void 0||c.curves.z!==void 0){if(r[l]===void 0){const h=_t.get(o.ID).parents.filter(function(u){return u.relationship!==void 0})[0].ID;if(h!==void 0){const u=He.Objects.Model[h.toString()];if(u===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",o);return}const d={modelName:u.attrName?Je.sanitizeNodeName(u.attrName):"",ID:u.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};zt.traverse(function(p){p.ID===u.id&&(d.transform=p.matrix,p.userData.transformData&&(d.eulerOrder=p.userData.transformData.eulerOrder))}),d.transform||(d.transform=new be),"PreRotation"in u&&(d.preRotation=u.PreRotation.value),"PostRotation"in u&&(d.postRotation=u.PostRotation.value),r[l]=d}}r[l]&&(r[l][c.attr]=c)}else if(c.curves.morph!==void 0){if(r[l]===void 0){const h=_t.get(o.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,u=_t.get(h).parents[0].ID,d=_t.get(u).parents[0].ID,p=_t.get(d).parents[0].ID,g=He.Objects.Model[p],_={modelName:g.attrName?Je.sanitizeNodeName(g.attrName):"",morphName:He.Objects.Deformer[h].attrName};r[l]=_}r[l][c.attr]=c}}}),i.set(parseInt(n),r))}return i}parseAnimStacks(e){const t=He.Objects.AnimationStack,i={};for(const n in t){const r=_t.get(parseInt(n)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(r[0].ID);i[n]={name:t[n].attrName,layer:a}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(n){t=t.concat(i.generateTracks(n))}),new hf(e.name,-1,t)}generateTracks(e){const t=[];let i=new U,n=new U;if(e.transform&&e.transform.decompose(i,new Rt,n),i=i.toArray(),n=n.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,n,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,i,n){const r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,i);return new Zs(e+"."+n,r,a)}generateRotationTrack(e,t,i,n,r){let a,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const d=this.interpolateRotations(t.x,t.y,t.z,r);a=d[0],o=d[1]}const l=$s(0);i!==void 0&&(i=i.map(At.degToRad),i.push(l),i=new St().fromArray(i),i=new Rt().setFromEuler(i)),n!==void 0&&(n=n.map(At.degToRad),n.push(l),n=new St().fromArray(n),n=new Rt().setFromEuler(n).invert());const c=new Rt,h=new St,u=[];if(!o||!a)return new fs(e+".quaternion",[0],[0]);for(let d=0;d<o.length;d+=3)h.set(o[d],o[d+1],o[d+2],r),c.setFromEuler(h),i!==void 0&&c.premultiply(i),n!==void 0&&c.multiply(n),d>2&&new Rt().fromArray(u,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,d/3*4);return new fs(e+".quaternion",a,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(r){return r/100}),n=zt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ys(e.modelName+".morphTargetInfluences["+n+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,n){return i-n}),t.length>1){let i=1,n=t[0];for(let r=1;r<t.length;r++){const a=t[r];a!==n&&(t[i]=a,n=a,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const n=i,r=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const h=t.x.values[a];r.push(h),n[0]=h}else r.push(n[0]);if(o!==-1){const h=t.y.values[o];r.push(h),n[1]=h}else r.push(n[1]);if(l!==-1){const h=t.z.values[l];r.push(h),n[2]=h}else r.push(n[2])}),r}interpolateRotations(e,t,i,n){const r=[],a=[];r.push(e.times[0]),a.push(At.degToRad(e.values[0])),a.push(At.degToRad(t.values[0])),a.push(At.degToRad(i.values[0]));for(let o=1;o<e.values.length;o++){const l=[e.values[o-1],t.values[o-1],i.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(At.degToRad),h=[e.values[o],t.values[o],i.values[o]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const u=h.map(At.degToRad),d=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],p=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(p[0]>=180||p[1]>=180||p[2]>=180){const g=Math.max(...p)/180,_=new St(...c,n),m=new St(...u,n),f=new Rt().setFromEuler(_),v=new Rt().setFromEuler(m);f.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const M=e.times[o-1],x=e.times[o]-M,R=new Rt,T=new St;for(let A=0;A<1;A+=1/g)R.copy(f.clone().slerp(v.clone(),A)),r.push(M+A*x),T.setFromQuaternion(R,n),a.push(T.x),a.push(T.y),a.push(T.z)}else r.push(e.times[o]),a.push(At.degToRad(e.values[o])),a.push(At.degToRad(t.values[o])),a.push(At.degToRad(i.values[o]))}return[r,a]}}class VM{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Ou,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(n,r){const a=n.match(/^[\s\t]*;/),o=n.match(/^[\s\t]*$/);if(a||o)return;const l=n.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=n.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=n.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(n,l):c?t.parseNodeProperty(n,c,i[++r]):h?t.popStack():n.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(n)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),n=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:i},a=this.parseNodeAttr(n),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,r):i in o?(i==="PoseNode"?o.PoseNode.push(r):o[i].id!==void 0&&(o[i]={},o[i][o[i].id]=o[i]),a.id!==""&&(o[i][a.id]=r)):typeof a.id=="number"?(o[i]={},o[i][a.id]=r):i!=="Properties70"&&(i==="PoseNode"?o[i]=[r]:o[i]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",n="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),n=e[2]),{id:t,name:i,type:n}}parseNodeProperty(e,t,i){let n=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();n==="Content"&&r===","&&(r=i.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,n,r);return}if(n==="C"){const o=r.split(",").slice(1),l=parseInt(o[0]),c=parseInt(o[1]);let h=r.split(",").slice(3);h=h.map(function(u){return u.trim().replace(/^"/,"")}),n="connections",r=[l,c],qM(r,h),a[n]===void 0&&(a[n]=[])}n==="Node"&&(a.id=r),n in a&&Array.isArray(a[n])?a[n].push(r):n!=="a"?a[n]=r:a.a=r,this.setCurrentProp(a,n),n==="a"&&r.slice(-1)!==","&&(a.a=ho(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=ho(t.a))}parseNodeSpecialProperty(e,t,i){const n=i.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=n[0],a=n[1],o=n[2],l=n[3];let c=n[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=ho(c);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class kM{parse(e){const t=new bh(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const n=new Ou;for(;!this.endOfContent(t);){const r=this.parseNode(t,i);r!==null&&n.add(r.name,r)}return n}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},n=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(n===0)return null;const l=[];for(let d=0;d<r;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(i.singleProperty=r===1&&e.getOffset()===n;n>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(o,i,d)}return i.propertyList=l,typeof c=="number"&&(i.id=c),h!==""&&(i.attrName=h),u!==""&&(i.attrType=u),o!==""&&(i.name=o),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const n=i.propertyList[0];Array.isArray(n)?(t[i.name]=i,i.a=n):t[i.name]=n}else if(e==="Connections"&&i.name==="C"){const n=[];i.propertyList.forEach(function(r,a){a!==0&&n.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(n)}else if(i.name==="Properties70")Object.keys(i).forEach(function(n){t[n]=i[n]});else if(e==="Properties70"&&i.name==="P"){let n=i.propertyList[0],r=i.propertyList[1];const a=i.propertyList[2],o=i.propertyList[3];let l;n.indexOf("Lcl ")===0&&(n=n.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[n]={type:r,type2:a,flag:o,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const n=e.getUint32(),r=e.getUint32(),a=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(n);case"d":return e.getFloat64Array(n);case"f":return e.getFloat32Array(n);case"i":return e.getInt32Array(n);case"l":return e.getInt64Array(n)}const o=TM(new Uint8Array(e.getArrayBuffer(a))),l=new bh(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(n);case"d":return l.getFloat64Array(n);case"f":return l.getFloat32Array(n);case"i":return l.getInt32Array(n);case"l":return l.getInt64Array(n)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class bh{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const n=i.indexOf(0);return n>=0&&(i=new Uint8Array(this.dv.buffer,t,n)),this._textDecoder.decode(i)}}class Ou{add(e,t){this[e]=t}}function HM(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===zu(s,0,e.length)}function GM(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(n){const r=s[n-1];return s=s.slice(t+n),t++,r}for(let n=0;n<e.length;++n)if(i(1)===e[n])return!1;return!0}function Sh(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function WM(s){return s/46186158e3}const jM=[];function Vr(s,e,t,i){let n;switch(i.mappingType){case"ByPolygonVertex":n=s;break;case"ByPolygon":n=e;break;case"ByVertice":n=t;break;case"AllSame":n=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(n=i.indices[n]);const r=n*i.dataSize,a=r+i.dataSize;return XM(jM,i.buffer,r,a)}const co=new St,Xn=new U;function Bu(s){const e=new be,t=new be,i=new be,n=new be,r=new be,a=new be,o=new be,l=new be,c=new be,h=new be,u=new be,d=new be,p=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(Xn.fromArray(s.translation));const g=$s(0);if(s.preRotation){const P=s.preRotation.map(At.degToRad);P.push(g),t.makeRotationFromEuler(co.fromArray(P))}if(s.rotation){const P=s.rotation.map(At.degToRad);P.push(s.eulerOrder||g),i.makeRotationFromEuler(co.fromArray(P))}if(s.postRotation){const P=s.postRotation.map(At.degToRad);P.push(g),n.makeRotationFromEuler(co.fromArray(P)),n.invert()}s.scale&&r.scale(Xn.fromArray(s.scale)),s.scalingOffset&&o.setPosition(Xn.fromArray(s.scalingOffset)),s.scalingPivot&&a.setPosition(Xn.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Xn.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Xn.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),h.copy(s.parentMatrixWorld));const _=t.clone().multiply(i).multiply(n),m=new be;m.extractRotation(h);const f=new be;f.copyPosition(h);const v=f.clone().invert().multiply(h),M=m.clone().invert().multiply(v),x=r,R=new be;if(p===0)R.copy(m).multiply(_).multiply(M).multiply(x);else if(p===1)R.copy(m).multiply(M).multiply(_).multiply(x);else{const P=new be().scale(new U().setFromMatrixScale(u)).clone().invert(),N=M.clone().multiply(P);R.copy(m).multiply(_).multiply(N).multiply(x)}const T=c.clone().invert(),A=a.clone().invert();let L=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(n).multiply(T).multiply(o).multiply(a).multiply(r).multiply(A);const w=new be().copyPosition(L),b=h.clone().multiply(w);return d.copyPosition(b),L=d.clone().multiply(R),L.premultiply(h.invert()),L}function $s(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function ho(s){return s.split(",").map(function(e){return parseFloat(e)})}function zu(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function qM(s,e){for(let t=0,i=s.length,n=e.length;t<n;t++,i++)s[i]=e[t]}function XM(s,e,t,i){for(let n=t,r=0;n<i;n++,r++)s[r]=e[n];return s}const Eh={type:"change"},Sl={type:"start"},Vu={type:"end"},kr=new la,wh=new $i,YM=Math.cos(70*At.DEG2RAD),Mt=new U,Ht=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uo=1e-6;class ZM extends Nf{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:$n.ROTATE,TWO:$n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Rt,this._lastTargetPosition=new U,this._quat=new Rt().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rc,this._sphericalDelta=new Rc,this._scale=1,this._panOffset=new U,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new U,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$M.bind(this),this._onPointerDown=KM.bind(this),this._onPointerUp=JM.bind(this),this._onContextMenu=rb.bind(this),this._onMouseWheel=tb.bind(this),this._onKeyDown=ib.bind(this),this._onTouchStart=nb.bind(this),this._onTouchMove=sb.bind(this),this._onMouseDown=QM.bind(this),this._onMouseMove=eb.bind(this),this._interceptControlDown=ab.bind(this),this._interceptControlUp=ob.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Eh),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Ht:i>Math.PI&&(i-=Ht),n<-Math.PI?n+=Ht:n>Math.PI&&(n-=Ht),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Mt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(kr.origin.copy(this.object.position),kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kr.direction))<YM?this.object.lookAt(this.target):(wh.setFromNormalAndCoplanarPoint(this.object.up,this.target),kr.intersectPlane(wh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>uo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uo||this._lastTargetPosition.distanceToSquared(this.target)>uo?(this.dispatchEvent(Eh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ht/60*this.autoRotateSpeed*e:Ht/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Mt.copy(n).sub(this.target);let r=Mt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function KM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function $M(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function JM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vu),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function QM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=nt.DOLLY;break;case is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=nt.ROTATE}break;case is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Sl)}function eb(s){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function tb(s){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(s.preventDefault(),this.dispatchEvent(Sl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Vu))}function ib(s){this.enabled!==!1&&this._handleKeyDown(s)}function nb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case $n.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=nt.TOUCH_ROTATE;break;case $n.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case $n.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=nt.TOUCH_DOLLY_PAN;break;case $n.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Sl)}function sb(s){switch(this._trackPointer(s),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=nt.NONE}}function rb(s){this.enabled!==!1&&s.preventDefault()}function ab(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ob(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const mi=new Rp;mi.background=new Re(12571109);const tr=new _x({antialias:!0});tr.setSize(window.innerWidth,window.innerHeight);tr.shadowMap.enabled=!0;document.body.appendChild(tr.domElement);let Th=new U,Hr=new U;const ks=new Vt(75,window.innerWidth/window.innerHeight,.1,1e3);ks.position.set(8,5,-20);const ga=new ZM(ks,tr.domElement);ga.enableDamping=!0;ga.target.set(0,2,-30);const lb=new fu(4210752,10);mi.add(lb);const ku=new pu(16777215,8);ku.position.set(10,30,0);mi.add(ku);const bs=new aM({gravity:new y(0,-9.82,0)}),Ah=5e3,cb=new Cn(new y(Ah/2,.5,Ah/2)),El=new pe({mass:0});El.addShape(cb);El.position.set(0,-.5,0);bs.addBody(El);const hb=new ml,ub=hb.load("assets/Garage_01.png",s=>{console.log("Texture loaded successfully"),s.encoding=void 0},void 0,s=>{console.error("Error loading texture:",s)}),db=new Ms;db.load("assets/Garage_01.fbx",s=>{s.traverse(function(t){t.isMesh&&(t.material=new cu({map:ub,metalness:.5,roughness:.5}),t.material.needsUpdate=!0)}),mi.add(s);let e=.03;s.scale.set(e,e,e)},s=>{},s=>{console.log(s)});const pb=new ml,fb=pb.load("assets/Garage_01_Floor.png",s=>{console.log("Texture loaded successfully"),s.encoding=void 0},void 0,s=>{console.error("Error loading texture:",s)}),mb=new Ms;mb.load("assets/Garage_01_Floor.fbx",s=>{s.traverse(function(t){t.isMesh&&(t.material=new cu({map:fb,metalness:.5,roughness:.5}),t.material.needsUpdate=!0)}),mi.add(s);let e=.03;s.scale.set(e,e,e)},s=>{},s=>{console.log(s)});const gb=new Cn(new y(1,.5,2)),Pt=new pe({mass:150});Pt.addShape(gb);Pt.position.set(0,1.5,-30);Pt.linearDamping=.15;Pt.allowSleep=!0;Pt.sleepSpeedLimit=.1;Pt.sleepTimeLimit=1;bs.addBody(Pt);var Mi=new st;mi.add(Mi);const _b=new Ms;_b.load("assets/SUV.fbx",s=>{Mi.add(s);let e=.015;s.scale.set(e,e,e),s.position.y=-1,s.position.z=-.45,Rb.style.display="none"},s=>{s.loaded/s.total*100},s=>{console.log(s)});const Ut=new yy({chassisBody:Pt,indexRightAxis:0,indexUpAxis:1,indexForwardAxis:2}),Rh={radius:.625,directionLocal:new y(0,-1,0),suspensionStiffness:30,suspensionRestLength:.5,frictionSlip:9,dampingRelaxation:2.3,dampingCompression:4.4,maxSuspensionForce:1e5,rollInfluence:.125,axleLocal:new y(-1,0,0),maxSuspensionTravel:.3,customSlidingRotationalSpeed:-30,useCustomSlidingRotationalSpeed:!0},Ch=1.35,Ph=2.05;[new y(-1.35,0,Ph),new y(Ch,0,Ph),new y(-1.35,0,-2.05),new y(Ch,0,-2.05)].forEach(s=>{Rh.chassisConnectionPointLocal=s.clone(),Ut.addWheel(Rh)});Ut.addToWorld(bs);function vb(s){var e=new st;return new Ms().load("assets/Wheel-R.fbx",t=>{e.add(t),mi.add(e);let i=.015;t.scale.set(i,i,i),s%2!=0&&(t.rotation.y=Math.PI)},t=>{t.loaded/t.total*100},t=>{console.log(t)}),e}const Lh=Ut.wheelInfos.map((s,e)=>{const t=vb(e);return mi.add(t),t}),ts={w:!1,s:!1,a:!1,d:!1};window.addEventListener("keydown",s=>ts[s.key.toLowerCase()]=!0);window.addEventListener("keyup",s=>ts[s.key.toLowerCase()]=!1);const xb=new Ef;let Gr=0,wl=!1,Tl=!1,Al=!1,Rl=!1;function Ih(s){const e=new y(0,1,0),t=s.quaternion.vmult(e).y<0,i=s.velocity.length()<.1;return t&&i}function Hu(){requestAnimationFrame(Hu);const s=xb.getDelta();bs.step(1/60,s,5);const e=800,t=.45,i=5;let n=ts.w||wl,r=ts.s||Tl,a=ts.a||Al,o=ts.d||Rl,l=n||r||a||o;if(Qi){n?(Ut.applyEngineForce(-800,2),Ut.applyEngineForce(-800,3)):r?(Ut.applyEngineForce(e,2),Ut.applyEngineForce(e,3)):(Ut.applyEngineForce(0,2),Ut.applyEngineForce(0,3));let c=0;a?c=t:o&&(c=-.45),Gr=At.lerp(Gr,c,s*i)}Ut.setSteeringValue(Gr,0),Ut.setSteeringValue(Gr,1),Mi.position.copy(Pt.position),Mi.quaternion.copy(Pt.quaternion);for(let c=0;c<Ut.wheelInfos.length;c++){Ut.updateWheelTransform(c);const h=Ut.wheelInfos[c].worldTransform;Lh[c].position.copy(h.position),Lh[c].quaternion.copy(h.quaternion)}if(Pt.velocity.length()<.5&&!l){for(let c=0;c<4;c++)Ut.applyEngineForce(0,c),Ut.setSteeringValue(0,c);Pt.velocity.set(0,0,0),Pt.angularVelocity.set(0,0,0)}if(Ih(Pt)&&(_a(),console.log("Car is upside down!")),ga.update(),bb(),Sb(),Qi){let c=6;const h=new U(0,c,-12);h.applyQuaternion(Mi.quaternion),Th.copy(Mi.position).add(h),ks.position.lerp(Th,.025),Hr.copy(Mi.position),Ih(Pt)?Hr.y-=2:Hr.y+=2,ks.lookAt(Hr)}tr.render(mi,ks)}var Kr=[],tl=[];const xi=[{w:1,h:100,d:10,posX:45,posY:3,posZ:0},{w:1,h:100,d:10,posX:-45,posY:3,posZ:0},{w:100,h:1,d:10,posX:0,posY:3,posZ:48},{w:100,h:1,d:10,posX:0,posY:3,posZ:-48}];for(let s=0;s<xi.length;s++){const e=new pe({mass:0,material:new ys,shape:new Cn(new y(xi[s].w/2,xi[s].h/2,xi[s].d/2)),position:new y(xi[s].posX,xi[s].posY,xi[s].posZ)});e.quaternion.setFromEuler(-Math.PI/2,0,0),bs.addBody(e),Kr.push(e),e.addEventListener("collide",function(i){i.body==Pt&&_a()});const t=new Yt(new Rn(xi[s].w,xi[s].h,xi[s].d),new ca({color:255}));tl.push(t)}function yb(){for(let s=0;s<Kr.length;s++)tl[s].position.copy(Kr[s].position),tl[s].quaternion.copy(Kr[s].quaternion)}yb();var bn=new st;bn.position.set(35,0,35);mi.add(bn);const Mb=new Ms;Mb.load("assets/ParkingSpot.fbx",s=>{let e=.03;s.scale.set(e,e,e),bn.add(s)},s=>{console.log(s.loaded/s.total*100+"% loaded")},s=>{console.log(s)});function bb(){if(bn){var s=0,e=2,t=1.5;if(Mi.position.distanceTo(bn.position)<5){const i=new Rt().setFromEuler(Mi.rotation),n=new Rt().setFromEuler(bn.rotation),r=i.angleTo(n);s=At.radToDeg(r),s<e&&Mi.position.distanceTo(bn.position)<t&&_a(!0),Wu.style.display="flex",Cb.textContent=Math.floor(100-Math.abs(s-e))+"%"}}}var Us=[],il=[],$r=[];let Dh=3,Nh=5,Uh=10;const Yn=[{posX:-15,posY:3,posZ:-40},{posX:-15,posY:3,posZ:-30},{posX:-15,posY:3,posZ:-20},{posX:-15,posY:3,posZ:-10},{posX:-11.5,posY:3,posZ:0,rot:Math.PI/2},{posX:-8,posY:3,posZ:10},{posX:-8,posY:3,posZ:20},{posX:10,posY:3,posZ:0},{posX:10,posY:3,posZ:-10},{posX:13.5,posY:3,posZ:-20,rot:Math.PI/2}];for(let s=0;s<Yn.length;s++){let e=new pe({mass:50,material:new ys,shape:new Cn(new y(Dh/2,Nh/2,Uh/2)),position:new y(Yn[s].posX,Yn[s].posY,Yn[s].posZ)});e.quaternion.setFromEuler(0,Yn[s].rot?Yn[s].rot:0,0),bs.addBody(e),Us.push(e),e.addEventListener("collide",function(i){i.body==Pt&&_a()});const t=new Yt(new Rn(Dh,Nh,Uh),new ca({color:255}));il.push(t),t.position.copy(e.position),t.quaternion.copy(e.quaternion),new Ms().load("assets/Obstacle01.fbx",i=>{let n=.02;i.scale.set(n,n,n);var r=new st;r.position.set(0,-2.5,0),r.add(i),mi.add(r),$r.push(i)},i=>{console.log(i.loaded/i.total*100+"% loaded")},i=>{console.log(i)})}function Sb(){for(let s=0;s<$r.length;s++)il[s].position.copy(Us[s].position),il[s].quaternion.copy(Us[s].quaternion),$r[s].position.copy(Us[s].position),$r[s].quaternion.copy(Us[s].quaternion)}Hu();var Qi=!1;const Eb=document.getElementById("controlScreen"),wb=document.getElementById("tutorialStep1"),Gu=document.getElementById("tutorialStep2"),Tb=document.getElementById("endScreen"),Ab=document.getElementById("completeScreen"),Rb=document.getElementById("loadingScreen"),Wu=document.getElementById("completionDisplay");var Cb=Wu.children[1];function Pb(){document.getElementById("img-engine-off").style.display=Qi?"none":"block",document.getElementById("img-engine-on").style.display=Qi?"block":"none"}window.toggleEngine=function(){Qi=!Qi,Pb(),wb.style.display="none",Gu.style.display="block",Qi?(document.getElementById("engineOnSound").play(),document.getElementById("engineOnSound").addEventListener("ended",()=>{document.getElementById("engineLoopSound").play()})):(document.getElementById("engineOffSound").play(),document.getElementById("engineLoopSound").pause()),ga.enabled=!Qi};function _a(s=!1){Eb.style.display="none",s?Ab.style.display="flex":Tb.style.display="flex"}window.toggleGearPos=function(){};window.pressGas=function(){wl=!0,Gu.style.display="none"};window.pressBrake=function(){Tl=!0};window.releasePedal=function(){wl=!1,Tl=!1};window.pressLeft=function(){Al=!0};window.pressRight=function(){Rl=!0};window.releaseArrow=function(){Al=!1,Rl=!1};const ir=document.getElementById("btnAccelerate"),nr=document.getElementById("btnBrake"),sr=document.getElementById("btnLeft"),rr=document.getElementById("btnRight");ir.addEventListener("touchstart",pressGas);ir.addEventListener("mousedown",pressGas);ir.addEventListener("touchend",releasePedal);ir.addEventListener("mouseup",releasePedal);ir.addEventListener("touchcancel",releasePedal);nr.addEventListener("touchstart",pressBrake);nr.addEventListener("mousedown",pressBrake);nr.addEventListener("touchend",releasePedal);nr.addEventListener("mouseup",releasePedal);nr.addEventListener("touchcancel",releasePedal);sr.addEventListener("touchstart",pressLeft);sr.addEventListener("mousedown",pressLeft);sr.addEventListener("touchend",releaseArrow);sr.addEventListener("mouseup",releaseArrow);sr.addEventListener("touchcancel",releaseArrow);rr.addEventListener("touchstart",pressRight);rr.addEventListener("mousedown",pressRight);rr.addEventListener("touchend",releaseArrow);rr.addEventListener("mouseup",releaseArrow);rr.addEventListener("touchcancel",releaseArrow);window.addEventListener("contextmenu",function(s){s.preventDefault()});
