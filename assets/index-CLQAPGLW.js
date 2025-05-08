(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sl="172",ss={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$u=0,Ol=1,Ju=2,Oh=1,Qu=2,zn=3,ri=0,qe=1,kn=2,ii=0,rs=1,Bl=2,zl=3,kl=4,td=5,xi=100,ed=101,nd=102,id=103,sd=104,rd=200,od=201,ad=202,ld=203,fa=204,pa=205,cd=206,hd=207,ud=208,dd=209,fd=210,pd=211,md=212,gd=213,_d=214,ma=0,ga=1,_a=2,ls=3,va=4,xa=5,ya=6,Ma=7,oo=0,vd=1,xd=2,si=0,yd=1,Md=2,Sd=3,Ed=4,wd=5,Td=6,bd=7,Vl="attached",Ad="detached",Bh=300,cs=301,hs=302,Qr=303,Sa=304,ao=306,Gs=1e3,Vn=1001,Ea=1002,$e=1003,Rd=1004,cr=1005,wn=1006,Mo=1007,Si=1008,Wn=1009,zh=1010,kh=1011,Ws=1012,rl=1013,wi=1014,Tn=1015,Qs=1016,ol=1017,al=1018,us=1020,Vh=35902,Hh=1021,Gh=1022,rn=1023,Wh=1024,Xh=1025,os=1026,ds=1027,qh=1028,ll=1029,Yh=1030,cl=1031,hl=1033,Xr=33776,qr=33777,Yr=33778,jr=33779,wa=35840,Ta=35841,ba=35842,Aa=35843,Ra=36196,Ca=37492,Pa=37496,Ia=37808,La=37809,Da=37810,Fa=37811,Na=37812,Ua=37813,Oa=37814,Ba=37815,za=37816,ka=37817,Va=37818,Ha=37819,Ga=37820,Wa=37821,Zr=36492,Xa=36494,qa=36495,jh=36283,Ya=36284,ja=36285,Za=36286,to=2300,Ka=2301,So=2302,Hl=2400,Gl=2401,Wl=2402,Cd=2500,Pd=3200,Id=3201,lo=0,Ld=1,ei="",he="srgb",fs="srgb-linear",eo="linear",ie="srgb",Li=7680,Xl=519,Dd=512,Fd=513,Nd=514,Zh=515,Ud=516,Od=517,Bd=518,zd=519,ql=35044,Yl="300 es",Hn=2e3,no=2001;class Ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jl=1234567;const Bs=Math.PI/180,ps=180/Math.PI;function ai(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[r&255]+Ne[r>>8&255]+Ne[r>>16&255]+Ne[r>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Vt(r,t,e){return Math.max(t,Math.min(e,r))}function ul(r,t){return(r%t+t)%t}function kd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Vd(r,t,e){return r!==t?(e-r)/(t-r):0}function zs(r,t,e){return(1-e)*r+e*t}function Hd(r,t,e,n){return zs(r,t,1-Math.exp(-e*n))}function Gd(r,t=1){return t-Math.abs(ul(r,t*2)-t)}function Wd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Xd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function qd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Yd(r,t){return r+Math.random()*(t-r)}function jd(r){return r*(.5-Math.random())}function Zd(r){r!==void 0&&(jl=r);let t=jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kd(r){return r*Bs}function $d(r){return r*ps}function Jd(r){return(r&r-1)===0&&r!==0}function Qd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function tf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ef(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ki(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Be(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Pe={DEG2RAD:Bs,RAD2DEG:ps,generateUUID:ai,clamp:Vt,euclideanModulo:ul,mapLinear:kd,inverseLerp:Vd,lerp:zs,damp:Hd,pingpong:Gd,smoothstep:Wd,smootherstep:Xd,randInt:qd,randFloat:Yd,randFloatSpread:jd,seededRandom:Zd,degToRad:Kd,radToDeg:$d,isPowerOfTwo:Jd,ceilPowerOfTwo:Qd,floorPowerOfTwo:tf,setQuaternionFromProperEuler:ef,normalize:Be,denormalize:Ki};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,s,o,a,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],x=i[4],y=i[7],A=i[2],b=i[5],R=i[8];return s[0]=o*_+a*v+l*A,s[3]=o*g+a*x+l*b,s[6]=o*p+a*y+l*R,s[1]=c*_+h*v+d*A,s[4]=c*g+h*x+d*b,s[7]=c*p+h*y+d*R,s[2]=u*_+f*v+m*A,s[5]=u*g+f*x+m*b,s[8]=u*p+f*y+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Eo.makeScale(t,e)),this}rotate(t){return this.premultiply(Eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Eo=new Nt;function Kh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Xs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nf(){const r=Xs("canvas");return r.style.display="block",r}const Zl={};function $i(r){r in Zl||(Zl[r]=!0,console.warn(r))}function sf(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function rf(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function of(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kl=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function af(){const r={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ie&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?eo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[fs]:{primaries:t,whitePoint:n,transfer:eo,toXYZ:Kl,fromXYZ:$l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:he},outputColorSpaceConfig:{drawingBufferColorSpace:he}},[he]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Kl,fromXYZ:$l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:he}}}),r}const kt=af();function Gn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function as(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Di;class lf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Xs("canvas")),Di.width=t.width,Di.height=t.height;const n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cf=0;class $h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(wo(i[o].image)):s.push(wo(i[o]))}else s=wo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function wo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hf=0;class De extends Ri{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Vn,i=Vn,s=wn,o=Si,a=rn,l=Wn,c=De.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=ai(),this.name="",this.source=new $h(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Bh;De.DEFAULT_ANISOTROPY=1;class Xt{constructor(t=0,e=0,n=0,i=1){Xt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(f+1)/2,A=(p+1)/2,b=(h+u)/4,R=(d+_)/4,I=(m+g)/4;return x>y&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=R/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=I/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=R/s,i=I/s),this.set(n,i,s,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uf extends Ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Xt(0,0,t,e),this.scissorTest=!1,this.viewport=new Xt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new $h(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jh extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class df extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ie=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==m){let g=1-a;const p=l*u+c*f+h*m+d*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),b=Math.atan2(A,p*v);g=Math.sin(g*b)/A,a=Math.sin(a*b)/A}const y=a*v;if(l=l*g+u*y,c=c*g+f*y,h=h*g+m*y,d=d*g+_*y,g===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new N,Jl=new Ie;class _s{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),ur.subVectors(this.max,bs),Fi.subVectors(t.a,bs),Ni.subVectors(t.b,bs),Ui.subVectors(t.c,bs),qn.subVectors(Ni,Fi),Yn.subVectors(Ui,Ni),ui.subVectors(Fi,Ui);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ui.z,ui.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ui.z,0,-ui.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ui.y,ui.x,0];return!bo(e,Fi,Ni,Ui,ur)||(e=[1,0,0,0,1,0,0,0,1],!bo(e,Fi,Ni,Ui,ur))?!1:(dr.crossVectors(qn,Yn),e=[dr.x,dr.y,dr.z],bo(e,Fi,Ni,Ui,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new N,new N,new N,new N,new N,new N,new N,new N],ln=new N,hr=new _s,Fi=new N,Ni=new N,Ui=new N,qn=new N,Yn=new N,ui=new N,bs=new N,ur=new N,dr=new N,di=new N;function bo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){di.fromArray(r,s);const a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ff=new _s,As=new N,Ao=new N;class vs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ff.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Ao)),this.expandByPoint(As.copy(t.center).sub(Ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new N,Ro=new N,fr=new N,jn=new N,Co=new N,pr=new N,Po=new N;let co=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ro.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Ro);const s=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=jn.dot(this.direction),l=-jn.dot(fr),c=jn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=s*h,d>=0)if(u>=-m)if(u<=m){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ro).addScaledVector(fr,u),f}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,s){Co.subVectors(e,t),pr.subVectors(n,t),Po.crossVectors(Co,pr);let o=this.direction.dot(Po),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const l=a*this.direction.dot(pr.crossVectors(jn,pr));if(l<0)return null;const c=a*this.direction.dot(Co.cross(jn));if(c<0||l+c>o)return null;const h=-a*jn.dot(Po);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class St{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,g){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,g)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Oi.setFromMatrixColumn(t,0).length(),s=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pf,t,mf)}lookAt(t,e,n){const i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Zn.crossVectors(n,je),Zn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Zn.crossVectors(n,je)),Zn.normalize(),mr.crossVectors(je,Zn),i[0]=Zn.x,i[4]=mr.x,i[8]=je.x,i[1]=Zn.y,i[5]=mr.y,i[9]=je.y,i[2]=Zn.z,i[6]=mr.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],x=n[7],y=n[11],A=n[15],b=i[0],R=i[4],I=i[8],T=i[12],S=i[1],P=i[5],H=i[9],L=i[13],z=i[2],B=i[6],D=i[10],Y=i[14],V=i[3],Z=i[7],st=i[11],at=i[15];return s[0]=o*b+a*S+l*z+c*V,s[4]=o*R+a*P+l*B+c*Z,s[8]=o*I+a*H+l*D+c*st,s[12]=o*T+a*L+l*Y+c*at,s[1]=h*b+d*S+u*z+f*V,s[5]=h*R+d*P+u*B+f*Z,s[9]=h*I+d*H+u*D+f*st,s[13]=h*T+d*L+u*Y+f*at,s[2]=m*b+_*S+g*z+p*V,s[6]=m*R+_*P+g*B+p*Z,s[10]=m*I+_*H+g*D+p*st,s[14]=m*T+_*L+g*Y+p*at,s[3]=v*b+x*S+y*z+A*V,s[7]=v*R+x*P+y*B+A*Z,s[11]=v*I+x*H+y*D+A*st,s[15]=v*T+x*L+y*Y+A*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+_*(+e*l*f-e*c*u+s*o*u-i*o*f+i*c*h-s*l*h)+g*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=d*g*c-_*u*c+_*l*f-a*g*f-d*l*p+a*u*p,x=m*u*c-h*g*c-m*l*f+o*g*f+h*l*p-o*u*p,y=h*_*c-m*d*c+m*a*f-o*_*f-h*a*p+o*d*p,A=m*d*l-h*_*l-m*a*u+o*_*u+h*a*g-o*d*g,b=e*v+n*x+i*y+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=v*R,t[1]=(_*u*s-d*g*s-_*i*f+n*g*f+d*i*p-n*u*p)*R,t[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*R,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*R,t[4]=x*R,t[5]=(h*g*s-m*u*s+m*i*f-e*g*f-h*i*p+e*u*p)*R,t[6]=(m*l*s-o*g*s-m*i*c+e*g*c+o*i*p-e*l*p)*R,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*f+e*l*f)*R,t[8]=y*R,t[9]=(m*d*s-h*_*s-m*n*f+e*_*f+h*n*p-e*d*p)*R,t[10]=(o*_*s-m*a*s+m*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*f-e*a*f)*R,t[12]=A*R,t[13]=(h*_*i-m*d*i+m*n*u-e*_*u-h*n*g+e*d*g)*R,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*R,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,m=s*d,_=o*h,g=o*d,p=a*d,v=l*c,x=l*h,y=l*d,A=n.x,b=n.y,R=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+y)*A,i[2]=(m-x)*A,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+p))*b,i[6]=(g+v)*b,i[7]=0,i[8]=(m+x)*R,i[9]=(g-v)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Oi.set(i[0],i[1],i[2]).length();const o=Oi.set(i[4],i[5],i[6]).length(),a=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);const c=1/s,h=1/o,d=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Hn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,m;if(a===Hn)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===no)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Hn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*c,f=(n+i)*h;let m,_;if(a===Hn)m=(o+s)*d,_=-2*d;else if(a===no)m=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new N,cn=new St,pf=new N(0,0,0),mf=new N(1,1,1),Zn=new N,mr=new N,je=new N,Ql=new St,tc=new Ie;class Te{constructor(t=0,e=0,n=0,i=Te.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Te.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gf=0;const ec=new N,Bi=new Ie,In=new St,gr=new N,Rs=new N,_f=new N,vf=new Ie,nc=new N(1,0,0),ic=new N(0,1,0),sc=new N(0,0,1),rc={type:"added"},xf={type:"removed"},zi={type:"childadded",child:null},Io={type:"childremoved",child:null};class re extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=re.DEFAULT_UP.clone();const t=new N,e=new Te,n=new Ie,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new Nt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Rs,gr,this.up):In.lookAt(gr,Rs,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(In),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xf),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}re.DEFAULT_UP=new N(0,1,0);re.DEFAULT_MATRIX_AUTO_UPDATE=!0;re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new N,Ln=new N,Lo=new N,Dn=new N,ki=new N,Vi=new N,oc=new N,Do=new N,Fo=new N,No=new N,Uo=new Xt,Oo=new Xt,Bo=new Xt;class mn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){hn.subVectors(i,e),Ln.subVectors(n,e),Lo.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Ln),l=hn.dot(Lo),c=Ln.dot(Ln),h=Ln.dot(Lo),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Uo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Uo.fromBufferAttribute(t,e),Oo.fromBufferAttribute(t,n),Bo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Uo,s.x),o.addScaledVector(Oo,s.y),o.addScaledVector(Bo,s.z),o}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),Ln.subVectors(t,e),hn.cross(Ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ki.subVectors(i,n),Vi.subVectors(s,n),Do.subVectors(t,n);const l=ki.dot(Do),c=Vi.dot(Do);if(l<=0&&c<=0)return e.copy(n);Fo.subVectors(t,i);const h=ki.dot(Fo),d=Vi.dot(Fo);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ki,o);No.subVectors(t,s);const f=ki.dot(No),m=Vi.dot(No);if(m>=0&&f<=m)return e.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Vi,a);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return oc.subVectors(s,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(oc,a);const p=1/(g+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(ki,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function zo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=he){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=kt.workingColorSpace){if(t=ul(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=zo(o,s,t+1/3),this.g=zo(o,s,t),this.b=zo(o,s,t-1/3)}return kt.toWorkingColorSpace(this,i),this}setStyle(t,e=he){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=he){const n=tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=he){return kt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Vt(Ue.r*255,0,255))*65536+Math.round(Vt(Ue.g*255,0,255))*256+Math.round(Vt(Ue.b*255,0,255))}getHexString(t=he){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,s=Ue.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=he){kt.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==he?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(_r);const n=zs(Kn.h,_r.h,e),i=zs(Kn.s,_r.s,e),s=zs(Kn.l,_r.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Pt;Pt.NAMES=tu;let yf=0,li=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=rs,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class ho extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Te,this.combine=oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new N,vr=new It;class bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}}class dl extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eu extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xe extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mf=0;const nn=new St,ko=new re,Hi=new N,Ze=new _s,Cs=new _s,Re=new N;class _n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?eu:dl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ko.lookAt(t),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Ze.min,Cs.min),Ze.expandByPoint(Re),Re.addVectors(Ze.max,Cs.max),Ze.expandByPoint(Re)):(Ze.expandByPoint(Cs.min),Ze.expandByPoint(Cs.max))}Ze.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Re.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(t,c),Re.add(Hi)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new N,l[I]=new N;const c=new N,h=new N,d=new N,u=new It,f=new It,m=new It,_=new N,g=new N;function p(I,T,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,S),u.fromBufferAttribute(s,I),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[I].add(_),a[T].add(_),a[S].add(_),l[I].add(g),l[T].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,T=v.length;I<T;++I){const S=v[I],P=S.start,H=S.count;for(let L=P,z=P+H;L<z;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const x=new N,y=new N,A=new N,b=new N;function R(I){A.fromBufferAttribute(i,I),b.copy(A);const T=a[I];x.copy(T),x.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(b,T);const P=y.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,T=v.length;I<T;++I){const S=v[I],P=S.start,H=S.count;for(let L=P,z=P+H;L<z;L+=3)R(t.getX(L+0)),R(t.getX(L+1)),R(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new bn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new St,fi=new co,xr=new vs,lc=new N,yr=new N,Mr=new N,Sr=new N,Vo=new N,Er=new N,cc=new N,wr=new N;class Ke extends re{constructor(t=new _n,e=new ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Vo.fromBufferAttribute(d,t),o?Er.addScaledVector(Vo,h):Er.addScaledVector(Vo.sub(e),h))}e.add(Er)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),fi.copy(t.ray).recast(t.near),!(xr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(xr,lc)===null||fi.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(ac.copy(s).invert(),fi.copy(t.ray).applyMatrix4(ac),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,A=x;y<A;y+=3){const b=a.getX(y),R=a.getX(y+1),I=a.getX(y+2);i=Tr(this,p,t,n,c,h,d,b,R,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);i=Tr(this,o,t,n,c,h,d,v,x,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,A=x;y<A;y+=3){const b=y,R=y+1,I=y+2;i=Tr(this,p,t,n,c,h,d,b,R,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,x=g+1,y=g+2;i=Tr(this,o,t,n,c,h,d,v,x,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Sf(r,t,e,n,i,s,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ri,a),l===null)return null;wr.copy(a),wr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(wr);return c<e.near||c>e.far?null:{distance:c,point:wr.clone(),object:r}}function Tr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,yr),r.getVertexPosition(l,Mr),r.getVertexPosition(c,Sr);const h=Sf(r,t,e,n,yr,Mr,Sr,cc);if(h){const d=new N;mn.getBarycoord(cc,yr,Mr,Sr,d),i&&(h.uv=mn.getInterpolatedAttribute(i,a,l,c,d,new It)),s&&(h.uv1=mn.getInterpolatedAttribute(s,a,l,c,d,new It)),o&&(h.normal=mn.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};mn.getNormal(yr,Mr,Sr,u.normal),h.face=u,h.barycoord=d}return h}class Ci extends _n{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2));function m(_,g,p,v,x,y,A,b,R,I,T){const S=y/R,P=A/I,H=y/2,L=A/2,z=b/2,B=R+1,D=I+1;let Y=0,V=0;const Z=new N;for(let st=0;st<D;st++){const at=st*P-L;for(let nt=0;nt<B;nt++){const Ut=nt*S-H;Z[_]=Ut*v,Z[g]=at*x,Z[p]=z,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[p]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(nt/R),d.push(1-st/I),Y+=1}}for(let st=0;st<I;st++)for(let at=0;at<R;at++){const nt=u+at+B*st,Ut=u+at+B*(st+1),j=u+(at+1)+B*(st+1),et=u+(at+1)+B*st;l.push(nt,Ut,et),l.push(Ut,j,et),V+=6}a.addGroup(f,V,T),f+=V,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(r){const t={};for(let e=0;e<r.length;e++){const n=ms(r[e]);for(const i in n)t[i]=n[i]}return t}function Ef(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function nu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const wf={clone:ms,merge:ze};var Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class iu extends re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new N,hc=new It,uc=new It;class Ve extends iu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gi=-90,Wi=1;class Af extends re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(Gi,Wi,t,e);i.layers=this.layers,this.add(i);const s=new Ve(Gi,Wi,t,e);s.layers=this.layers,this.add(s);const o=new Ve(Gi,Wi,t,e);o.layers=this.layers,this.add(o);const a=new Ve(Gi,Wi,t,e);a.layers=this.layers,this.add(a);const l=new Ve(Gi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(Gi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class su extends De{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rf extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new su(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ci(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ii});s.uniforms.tEquirect.value=e;const o=new Ke(i,s),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=wn),new Af(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class Cf extends re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Te,this.environmentIntensity=1,this.environmentRotation=new Te,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const dc=new N,fc=new Xt,pc=new Xt,Pf=new N,mc=new St,br=new N,Ho=new vs,gc=new St,Go=new co;class If extends Ke{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vl,this.bindMatrix=new St,this.bindMatrixInverse=new St,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new _s),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,br),this.boundingBox.expandByPoint(br)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,br),this.boundingSphere.expandByPoint(br)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(i),t.ray.intersectsSphere(Ho)!==!1&&(gc.copy(i).invert(),Go.copy(t.ray).applyMatrix4(gc),!(this.boundingBox!==null&&Go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Go)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Xt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ad?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;fc.fromBufferAttribute(i.attributes.skinIndex,t),pc.fromBufferAttribute(i.attributes.skinWeight,t),dc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=pc.getComponent(s);if(o!==0){const a=fc.getComponent(s);mc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Pf.copy(dc).applyMatrix4(mc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class $a extends re{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Lf extends De{constructor(t=null,e=1,n=1,i,s,o,a,l,c=$e,h=$e,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _c=new St,Df=new St;class fl{constructor(t=[],e=[]){this.uuid=ai(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new St)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new St;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:Df;_c.multiplyMatrices(a,e[s]),_c.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Lf(e,t,t,rn,Tn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new $a),this.bones.push(o),this.boneInverses.push(new St().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}const Wo=new N,Ff=new N,Nf=new Nt;class ti{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Wo.subVectors(n,e).cross(Ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nf.getNormalMatrix(t),i=this.coplanarPoint(Wo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new vs,Ar=new N;class pl{constructor(t=new ti,e=new ti,n=new ti,i=new ti,s=new ti,o=new ti){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,u-c,g-f,y-p).normalize(),n[1].setComponents(l+s,u+c,g+f,y+p).normalize(),n[2].setComponents(l+o,u+h,g+m,y+v).normalize(),n[3].setComponents(l-o,u-h,g-m,y-v).normalize(),n[4].setComponents(l-a,u-d,g-_,y-x).normalize(),e===Hn)n[5].setComponents(l+a,u+d,g+_,y+x).normalize();else if(e===no)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ar.x=i.normal.x>0?t.max.x:t.min.x,Ar.y=i.normal.y>0?t.max.y:t.min.y,Ar.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ru extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const io=new N,so=new N,vc=new St,Ps=new co,Rr=new vs,Xo=new N,xc=new N;class Uf extends re{constructor(t=new _n,e=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)io.fromBufferAttribute(e,i-1),so.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=io.distanceTo(so);t.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=s,t.ray.intersectsSphere(Rr)===!1)return;vc.copy(i).invert(),Ps.copy(t.ray).applyMatrix4(vc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),v=h.getX(_+1),x=Cr(this,t,Ps,l,p,v);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Cr(this,t,Ps,l,_,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=Cr(this,t,Ps,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Cr(this,t,Ps,l,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cr(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(io.fromBufferAttribute(o,i),so.fromBufferAttribute(o,s),e.distanceSqToSegment(io,so,Xo,xc)>n)return;Xo.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Xo);if(!(l<t.near||l>t.far))return{distance:l,point:xc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}class Qi extends re{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ou extends De{constructor(t,e,n,i,s,o,a,l,c,h=os){if(h!==os&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=wi),n===void 0&&h===ds&&(n=us),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Of{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new It:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],s=[],o=[],a=new N,l=new St;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Vt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Vt(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}const Bf={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=au(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,d,u,f;if(n&&(s=Gf(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let m=e;m<i;m+=e)d=r[m],u=r[m+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return qs(s,o,e,a,l,f,0),o}};function au(r,t,e,n,i){let s,o;if(i===tp(r,t,e,n)>0)for(s=t;s<e;s+=n)o=yc(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=yc(s,r[s],r[s+1],o);return o&&uo(o,o.next)&&(js(o),o=o.next),o}function bi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(uo(e,e.next)||pe(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(r,t,e,n,i,s,o){if(!r)return;!o&&s&&jf(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?kf(r,n,i,s):zf(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),js(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Vf(bi(r),t,e),qs(r,t,e,n,i,s,2)):o===2&&Hf(r,t,e,n,i,s):qs(bi(r),t,e,n,i,s,1);break}}}function zf(r){const t=r.prev,e=r,n=r.next;if(pe(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,u=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&ts(i,a,s,l,o,c,m.x,m.y)&&pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function kf(r,t,e,n){const i=r.prev,s=r,o=r.next;if(pe(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,d=s.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,_=a>l?a>c?a:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,p=Ja(f,m,t,e,n),v=Ja(_,g,t,e,n);let x=r.prevZ,y=r.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&ts(a,h,l,d,c,u,x.x,x.y)&&pe(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ts(a,h,l,d,c,u,y.x,y.y)&&pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&ts(a,h,l,d,c,u,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ts(a,h,l,d,c,u,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vf(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!uo(i,s)&&lu(i,n,n.next,s)&&Ys(i,s)&&Ys(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),js(n),js(n.next),n=r=s),n=n.next}while(n!==r);return bi(n)}function Hf(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$f(o,a)){let l=cu(o,a);o=bi(o,o.next),l=bi(l,l.next),qs(o,t,e,n,i,s,0),qs(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Gf(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=au(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Kf(c));for(i.sort(Wf),s=0;s<i.length;s++)e=Xf(i[s],e);return e}function Wf(r,t){return r.x-t.x}function Xf(r,t){const e=qf(r,t);if(!e)return t;const n=cu(e,r);return bi(n,n.next),bi(e,e.next)}function qf(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&ts(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),Ys(e,r)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&Yf(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function Yf(r,t){return pe(r.prev,r,t.prev)<0&&pe(t.next,r,r.next)<0}function jf(r,t,e,n){let i=r;do i.z===0&&(i.z=Ja(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Zf(i)}function Zf(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Ja(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Kf(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ts(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function $f(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Jf(r,t)&&(Ys(r,t)&&Ys(t,r)&&Qf(r,t)&&(pe(r.prev,r,t.prev)||pe(r,t.prev,t))||uo(r,t)&&pe(r.prev,r,r.next)>0&&pe(t.prev,t,t.next)>0)}function pe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function uo(r,t){return r.x===t.x&&r.y===t.y}function lu(r,t,e,n){const i=Ir(pe(r,t,e)),s=Ir(pe(r,t,n)),o=Ir(pe(e,n,r)),a=Ir(pe(e,n,t));return!!(i!==s&&o!==a||i===0&&Pr(r,e,t)||s===0&&Pr(r,n,t)||o===0&&Pr(e,r,n)||a===0&&Pr(e,t,n))}function Pr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ir(r){return r>0?1:r<0?-1:0}function Jf(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&lu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Ys(r,t){return pe(r.prev,r,r.next)<0?pe(r,t,r.next)>=0&&pe(r,r.prev,t)>=0:pe(r,t,r.prev)<0||pe(r,r.next,t)<0}function Qf(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function cu(r,t){const e=new Qa(r.i,r.x,r.y),n=new Qa(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function yc(r,t,e,n){const i=new Qa(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function js(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Qa(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tp(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class ml{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return ml.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Mc(t),Sc(n,t);let o=t.length;e.forEach(Mc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Sc(n,e[l]);const a=Bf.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Mc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Sc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class fo extends _n{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*u-o;for(let x=0;x<c;x++){const y=x*d-s;m.push(y,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,y=v+c*(p+1),A=v+1+c*(p+1),b=v+1+c*p;f.push(x,y,b),f.push(y,A,b)}this.setIndex(f),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.width,t.height,t.widthSegments,t.heightSegments)}}class hu extends li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Te,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qo extends li{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Te,this.combine=oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ep extends li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Te,this.combine=oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class np extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ip extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Lr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function sp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function rp(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Ec(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function uu(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class po{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class op extends po{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gl:s=t,a=2*e-n;break;case Wl:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gl:o=t,l=2*n-e;break;case Wl:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,v=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,x=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let A=0;A!==a;++A)s[A]=p*o[h+A]+v*o[c+A]+x*o[l+A]+y*o[d+A];return s}}class ap extends po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}}class lp extends po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class An{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lr(e,this.TimeBufferType),this.values=Lr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Lr(t.times,Array),values:Lr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new lp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ap(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new op(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case Ka:e=this.InterpolantFactoryMethodLinear;break;case So:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&sp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===So,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Ka;class xs extends An{constructor(t,e,n){super(t,e,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=to;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class du extends An{}du.prototype.ValueTypeName="color";class Zs extends An{}Zs.prototype.ValueTypeName="number";class cp extends po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Ie.slerpFlat(s,0,o,c-a,o,c,l);return s}}class gs extends An{InterpolantFactoryMethodLinear(t){return new cp(this.times,this.values,this.getValueSize(),t)}}gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends An{constructor(t,e,n){super(t,e,n)}}ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=to;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends An{}Ks.prototype.ValueTypeName="vector";class hp{constructor(t="",e=-1,n=[],i=Cd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(dp(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(An.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=rp(l);l=Ec(l,1,h),c=Ec(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Zs(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,m,_){if(f.length!==0){const g=[],p=[];uu(f,g,p,m),g.length!==0&&_.push(new d(u,g,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)f[u[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==u[m].morphTargets.length;++v){const x=u[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Zs(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{const f=".bones["+e[d].name+"]";n(Ks,f+".position",u,"pos",i),n(gs,f+".quaternion",u,"rot",i),n(Ks,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function up(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zs;case"vector":case"vector2":case"vector3":case"vector4":return Ks;case"color":return du;case"quaternion":return gs;case"bool":case"boolean":return xs;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function dp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=up(r.type);if(r.times===void 0){const e=[],n=[];uu(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const ro={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class fp{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const pp=new fp;class Ai{constructor(t){this.manager=t!==void 0?t:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class mp extends Error{constructor(t,e){super(t),this.response=e}}class gp extends Ai{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ro.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Fn[t]!==void 0){Fn[t].push({onLoad:e,onProgress:n,onError:i});return}Fn[t]=[],Fn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Fn[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){d.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let b=0,R=h.length;b<R;b++){const I=h[b];I.onProgress&&I.onProgress(A)}p.enqueue(y),v()}},x=>{p.error(x)})}}});return new Response(g)}else throw new mp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ro.add(t,c);const h=Fn[t];delete Fn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Fn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Fn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class _p extends Ai{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ro.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Xs("img");function l(){h(),ro.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class gl extends Ai{constructor(t){super(t)}load(t,e,n,i){const s=new De,o=new _p(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class mo extends re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Yo=new St,wc=new N,Tc=new N;class _l{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(wc),Tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tc),e.updateMatrixWorld(),Yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vp extends _l{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ps*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class xp extends mo{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new vp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const bc=new St,Is=new N,jo=new N;class yp extends _l{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Is.setFromMatrixPosition(t.matrixWorld),n.position.copy(Is),jo.copy(n.position),jo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(jo),n.updateMatrixWorld(),i.makeTranslation(-Is.x,-Is.y,-Is.z),bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc)}}class Ac extends mo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fu extends iu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mp extends _l{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pu extends mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.shadow=new Mp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mu extends mo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sp{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Ep extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Rc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Rc(){return performance.now()}const vl="\\[\\]\\.:\\/",Tp=new RegExp("["+vl+"]","g"),xl="[^"+vl+"]",bp="[^"+vl.replace("\\.","")+"]",Ap=/((?:WC+[\/:])*)/.source.replace("WC",xl),Rp=/(WCOD+)?/.source.replace("WCOD",bp),Cp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),Pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Ip=new RegExp("^"+Ap+Rp+Cp+Pp+"$"),Lp=["material","materials","bones","map"];class Dp{constructor(t,e,n){const i=n||Qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Qt{constructor(t,e,n){this.path=e,this.parsedPath=n||Qt.parseTrackName(e),this.node=Qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Qt.Composite(t,e,n):new Qt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tp,"")}static parseTrackName(t){const e=Ip.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Lp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Qt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qt.Composite=Dp;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fp extends Ri{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Pc(r,t,e,n){const i=Np(n);switch(e){case Hh:return r*t;case Wh:return r*t;case Xh:return r*t*2;case qh:return r*t/i.components*i.byteLength;case ll:return r*t/i.components*i.byteLength;case Yh:return r*t*2/i.components*i.byteLength;case cl:return r*t*2/i.components*i.byteLength;case Gh:return r*t*3/i.components*i.byteLength;case rn:return r*t*4/i.components*i.byteLength;case hl:return r*t*4/i.components*i.byteLength;case Xr:case qr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yr:case jr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Aa:return Math.max(r,16)*Math.max(t,8)/4;case wa:case ba:return Math.max(r,8)*Math.max(t,8)/2;case Ra:case Ca:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Zr:case Xa:case qa:return Math.ceil(r/4)*Math.ceil(t/4)*16;case jh:case Ya:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ja:case Za:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Np(r){switch(r){case Wn:case zh:return{byteLength:1,components:1};case Ws:case kh:case Qs:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case wi:case rl:case Tn:return{byteLength:4,components:1};case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Up(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
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
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
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
#endif`,Wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp=`#ifdef USE_BATCHING
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
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,$p=`#ifdef USE_BUMPMAP
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
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
#endif`,om=`#define PI 3.141592653589793
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
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
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
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
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
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lm=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
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
#endif`,Nm=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,km=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
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
#endif`,Xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
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
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
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
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
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
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ug=`varying vec2 vUv;
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform samplerCube tCube;
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
}`,Xg=`#define DISTANCE
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
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
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
}`,t_=`#define MATCAP
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
}`,e_=`#define MATCAP
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
}`,n_=`#define NORMAL
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
}`,i_=`#define NORMAL
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
}`,o_=`#define STANDARD
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
}`,a_=`#define STANDARD
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
}`,f_=`uniform vec3 color;
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
}`,p_=`uniform float rotation;
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
}`,zt={alphahash_fragment:Op,alphahash_pars_fragment:Bp,alphamap_fragment:zp,alphamap_pars_fragment:kp,alphatest_fragment:Vp,alphatest_pars_fragment:Hp,aomap_fragment:Gp,aomap_pars_fragment:Wp,batching_pars_vertex:Xp,batching_vertex:qp,begin_vertex:Yp,beginnormal_vertex:jp,bsdfs:Zp,iridescence_fragment:Kp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:Qp,clipping_planes_pars_vertex:tm,clipping_planes_vertex:em,color_fragment:nm,color_pars_fragment:im,color_pars_vertex:sm,color_vertex:rm,common:om,cube_uv_reflection_fragment:am,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:dm,colorspace_fragment:fm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:_m,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Cm,envmap_vertex:xm,fog_vertex:ym,fog_pars_vertex:Mm,fog_fragment:Sm,fog_pars_fragment:Em,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Tm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Am,lights_pars_begin:Rm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Im,lights_phong_fragment:Lm,lights_phong_pars_fragment:Dm,lights_physical_fragment:Fm,lights_physical_pars_fragment:Nm,lights_fragment_begin:Um,lights_fragment_maps:Om,lights_fragment_end:Bm,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Hm,map_fragment:Gm,map_pars_fragment:Wm,map_particle_fragment:Xm,map_particle_pars_fragment:qm,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:jm,morphinstance_vertex:Zm,morphcolor_vertex:Km,morphnormal_vertex:$m,morphtarget_pars_vertex:Jm,morphtarget_vertex:Qm,normal_fragment_begin:tg,normal_fragment_maps:eg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:lg,iridescence_pars_fragment:cg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:xg,shadowmap_vertex:yg,shadowmask_pars_fragment:Mg,skinbase_vertex:Sg,skinning_pars_vertex:Eg,skinning_vertex:wg,skinnormal_vertex:Tg,specularmap_fragment:bg,specularmap_pars_fragment:Ag,tonemapping_fragment:Rg,tonemapping_pars_fragment:Cg,transmission_fragment:Pg,transmission_pars_fragment:Ig,uv_pars_fragment:Lg,uv_pars_vertex:Dg,uv_vertex:Fg,worldpos_vertex:Ng,background_vert:Ug,background_frag:Og,backgroundCube_vert:Bg,backgroundCube_frag:zg,cube_vert:kg,cube_frag:Vg,depth_vert:Hg,depth_frag:Gg,distanceRGBA_vert:Wg,distanceRGBA_frag:Xg,equirect_vert:qg,equirect_frag:Yg,linedashed_vert:jg,linedashed_frag:Zg,meshbasic_vert:Kg,meshbasic_frag:$g,meshlambert_vert:Jg,meshlambert_frag:Qg,meshmatcap_vert:t_,meshmatcap_frag:e_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:s_,meshphong_frag:r_,meshphysical_vert:o_,meshphysical_frag:a_,meshtoon_vert:l_,meshtoon_frag:c_,points_vert:h_,points_frag:u_,shadow_vert:d_,shadow_frag:f_,sprite_vert:p_,sprite_frag:m_},ot={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},En={basic:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ze([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ze([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ze([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ze([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ze([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ze([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ze([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ze([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ze([ot.common,ot.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ze([ot.lights,ot.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};En.physical={uniforms:ze([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Dr={r:0,b:0,g:0},mi=new Te,g_=new St;function __(r,t,e,n,i,s,o){const a=new Pt(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const A=m(x);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,y){const A=m(y);A&&(A.isCubeTexture||A.mapping===ao)?(h===void 0&&(h=new Ke(new Ci(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:ms(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),mi.copy(y.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(mi)),h.material.toneMapped=kt.getTransfer(A.colorSpace)!==ie,(d!==A||u!==A.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ke(new fo(2,2),new oi({name:"BackgroundMaterial",uniforms:ms(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=kt.getTransfer(A.colorSpace)!==ie,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=A,u=A.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Dr,nu(r)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:g,dispose:v}}function v_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(S,P,H,L,z){let B=!1;const D=d(L,H,P);s!==D&&(s=D,c(s.object)),B=f(S,L,H,z),B&&m(S,L,H,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(S,P,H,L),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function d(S,P,H){const L=H.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let B=z[P.id];B===void 0&&(B={},z[P.id]=B);let D=B[L];return D===void 0&&(D=u(l()),B[L]=D),D}function u(S){const P=[],H=[],L=[];for(let z=0;z<e;z++)P[z]=0,H[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:L,object:S,attributes:{},index:null}}function f(S,P,H,L){const z=s.attributes,B=P.attributes;let D=0;const Y=H.getAttributes();for(const V in Y)if(Y[V].location>=0){const st=z[V];let at=B[V];if(at===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),st===void 0||st.attribute!==at||at&&st.data!==at.data)return!0;D++}return s.attributesNum!==D||s.index!==L}function m(S,P,H,L){const z={},B=P.attributes;let D=0;const Y=H.getAttributes();for(const V in Y)if(Y[V].location>=0){let st=B[V];st===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(st=S.instanceColor));const at={};at.attribute=st,st&&st.data&&(at.data=st.data),z[V]=at,D++}s.attributes=z,s.attributesNum=D,s.index=L}function _(){const S=s.newAttributes;for(let P=0,H=S.length;P<H;P++)S[P]=0}function g(S){p(S,0)}function p(S,P){const H=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;H[S]=1,L[S]===0&&(r.enableVertexAttribArray(S),L[S]=1),z[S]!==P&&(r.vertexAttribDivisor(S,P),z[S]=P)}function v(){const S=s.newAttributes,P=s.enabledAttributes;for(let H=0,L=P.length;H<L;H++)P[H]!==S[H]&&(r.disableVertexAttribArray(H),P[H]=0)}function x(S,P,H,L,z,B,D){D===!0?r.vertexAttribIPointer(S,P,H,z,B):r.vertexAttribPointer(S,P,H,L,z,B)}function y(S,P,H,L){_();const z=L.attributes,B=H.getAttributes(),D=P.defaultAttributeValues;for(const Y in B){const V=B[Y];if(V.location>=0){let Z=z[Y];if(Z===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){const st=Z.normalized,at=Z.itemSize,nt=t.get(Z);if(nt===void 0)continue;const Ut=nt.buffer,j=nt.type,et=nt.bytesPerElement,ft=j===r.INT||j===r.UNSIGNED_INT||Z.gpuType===rl;if(Z.isInterleavedBufferAttribute){const rt=Z.data,bt=rt.stride,Ct=Z.offset;if(rt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<V.locationSize;Ht++)p(V.location+Ht,rt.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ht=0;Ht<V.locationSize;Ht++)g(V.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let Ht=0;Ht<V.locationSize;Ht++)x(V.location+Ht,at/V.locationSize,j,st,bt*et,(Ct+at/V.locationSize*Ht)*et,ft)}else{if(Z.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt,Z.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let rt=0;rt<V.locationSize;rt++)g(V.location+rt);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let rt=0;rt<V.locationSize;rt++)x(V.location+rt,at/V.locationSize,j,st,at*et,at/V.locationSize*rt*et,ft)}}else if(D!==void 0){const st=D[Y];if(st!==void 0)switch(st.length){case 2:r.vertexAttrib2fv(V.location,st);break;case 3:r.vertexAttrib3fv(V.location,st);break;case 4:r.vertexAttrib4fv(V.location,st);break;default:r.vertexAttrib1fv(V.location,st)}}}}v()}function A(){I();for(const S in n){const P=n[S];for(const H in P){const L=P[H];for(const z in L)h(L[z].object),delete L[z];delete P[H]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const H in P){const L=P[H];for(const z in L)h(L[z].object),delete L[z];delete P[H]}delete n[S.id]}function R(S){for(const P in n){const H=n[P];if(H[S.id]===void 0)continue;const L=H[S.id];for(const z in L)h(L[z].object),delete L[z];delete H[S.id]}}function I(){T(),o=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function x_(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*u[_];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==rn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Wn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Tn&&!I)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:b}}function M_(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ti,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=r.get(d);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const v=s?0:n,x=v*4;let y=p.clippingState||null;l.value=y,y=h(m,u,x,f);for(let A=0;A!==x;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function S_(r){let t=new WeakMap;function e(o,a){return a===Qr?o.mapping=cs:a===Sa&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qr||a===Sa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rf(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const es=4,Ic=[.125,.215,.35,.446,.526,.582],yi=20,Zo=new fu,Lc=new Pt;let Ko=null,$o=0,Jo=0,Qo=!1;const vi=(1+Math.sqrt(5))/2,Xi=1/vi,Dc=[new N(-vi,Xi,0),new N(vi,Xi,0),new N(-Xi,0,vi),new N(Xi,0,vi),new N(0,vi,-Xi),new N(0,vi,Xi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ko=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ko,$o,Jo),this._renderer.xr.enabled=Qo,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ko=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Qs,format:rn,colorSpace:fs,depthBuffer:!1},i=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E_(s)),this._blurMaterial=w_(s,t,e)}return i}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,i){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Lc),h.toneMapping=si,h.autoClear=!1;const f=new ho({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),m=new Ke(new Ci,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Lc),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Fr(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===cs||t.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Zo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dc[(i-s-1)%Dc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ke(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yi-1),_=s/m,g=isFinite(s)?1+Math.floor(h*_):yi;g>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);const p=[];let v=0;for(let R=0;R<yi;++R){const I=R/_,T=Math.exp(-I*I/2);p.push(T),R===0?v+=T:R<g&&(v+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=m,u.mipInt.value=x-n;const y=this._sizeLods[i],A=3*y*(i>x-es?i-x+es:0),b=4*(this._cubeSize-y);Fr(e,A,b,3*y,2*y),l.setRenderTarget(e),l.render(d,Zo)}}function E_(r){const t=[],e=[],n=[];let i=r;const s=r-es+1+Ic.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-es?l=Ic[o-r+es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),x=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,I=b>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(T,_*m*b),x.set(u,g*m*b);const S=[b,b,b,b,b,b];y.set(S,p*m*b)}const A=new _n;A.setAttribute("position",new bn(v,_)),A.setAttribute("uv",new bn(x,g)),A.setAttribute("faceIndex",new bn(y,p)),t.push(A),i>es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(r,t,e){const n=new Ti(r,t,e);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function w_(r,t,e){const n=new Float32Array(yi),i=new N(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Uc(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Oc(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function T_(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qr||l===Sa,h=l===cs||l===hs;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Fc(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Fc(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function b_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&$i("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function A_(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,m=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const A=v[x+0],b=v[x+1],R=v[x+2];u.push(A,b,b,R,R,A)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const A=x+0,b=x+1,R=x+2;u.push(A,b,b,R,R,A)}}else return;const g=new(Kh(u)?eu:dl)(u,1);g.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function R_(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,u*o,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function C_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function P_(r,t,e){const n=new WeakMap,i=new Xt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let A=a.attributes.position.count*y,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*b*4*d),I=new Jh(R,A,b,d);I.type=Tn,I.needsUpdate=!0;const T=y*4;for(let P=0;P<d;P++){const H=p[P],L=v[P],z=x[P],B=A*b*4*P;for(let D=0;D<H.count;D++){const Y=D*T;m===!0&&(i.fromBufferAttribute(H,D),R[B+Y+0]=i.x,R[B+Y+1]=i.y,R[B+Y+2]=i.z,R[B+Y+3]=0),_===!0&&(i.fromBufferAttribute(L,D),R[B+Y+4]=i.x,R[B+Y+5]=i.y,R[B+Y+6]=i.z,R[B+Y+7]=0),g===!0&&(i.fromBufferAttribute(z,D),R[B+Y+8]=i.x,R[B+Y+9]=i.y,R[B+Y+10]=i.z,R[B+Y+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:I,size:new It(A,b)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function I_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const _u=new De,Bc=new ou(1,1),vu=new Jh,xu=new df,yu=new su,zc=[],kc=[],Vc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function Ms(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=zc[i];if(s===void 0&&(s=new Float32Array(i),zc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function be(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ae(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function go(r,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function L_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function D_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2fv(this.addr,t),Ae(e,t)}}function F_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;r.uniform3fv(this.addr,t),Ae(e,t)}}function N_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4fv(this.addr,t),Ae(e,t)}}function U_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;Gc.set(n),r.uniformMatrix2fv(this.addr,!1,Gc),Ae(e,n)}}function O_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;Hc.set(n),r.uniformMatrix3fv(this.addr,!1,Hc),Ae(e,n)}}function B_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;Vc.set(n),r.uniformMatrix4fv(this.addr,!1,Vc),Ae(e,n)}}function z_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function k_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2iv(this.addr,t),Ae(e,t)}}function V_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;r.uniform3iv(this.addr,t),Ae(e,t)}}function H_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4iv(this.addr,t),Ae(e,t)}}function G_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function W_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2uiv(this.addr,t),Ae(e,t)}}function X_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;r.uniform3uiv(this.addr,t),Ae(e,t)}}function q_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4uiv(this.addr,t),Ae(e,t)}}function Y_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Bc.compareFunction=Zh,s=Bc):s=_u,e.setTexture2D(t||s,i)}function j_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xu,i)}function Z_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yu,i)}function K_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vu,i)}function $_(r){switch(r){case 5126:return L_;case 35664:return D_;case 35665:return F_;case 35666:return N_;case 35674:return U_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return k_;case 35668:case 35672:return V_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return K_}}function J_(r,t){r.uniform1fv(this.addr,t)}function Q_(r,t){const e=Ms(t,this.size,2);r.uniform2fv(this.addr,e)}function t0(r,t){const e=Ms(t,this.size,3);r.uniform3fv(this.addr,e)}function e0(r,t){const e=Ms(t,this.size,4);r.uniform4fv(this.addr,e)}function n0(r,t){const e=Ms(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function i0(r,t){const e=Ms(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function s0(r,t){const e=Ms(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function r0(r,t){r.uniform1iv(this.addr,t)}function o0(r,t){r.uniform2iv(this.addr,t)}function a0(r,t){r.uniform3iv(this.addr,t)}function l0(r,t){r.uniform4iv(this.addr,t)}function c0(r,t){r.uniform1uiv(this.addr,t)}function h0(r,t){r.uniform2uiv(this.addr,t)}function u0(r,t){r.uniform3uiv(this.addr,t)}function d0(r,t){r.uniform4uiv(this.addr,t)}function f0(r,t,e){const n=this.cache,i=t.length,s=go(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||_u,s[o])}function p0(r,t,e){const n=this.cache,i=t.length,s=go(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||xu,s[o])}function m0(r,t,e){const n=this.cache,i=t.length,s=go(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||yu,s[o])}function g0(r,t,e){const n=this.cache,i=t.length,s=go(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||vu,s[o])}function _0(r){switch(r){case 5126:return J_;case 35664:return Q_;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}class v0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$_(e.type)}}class x0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_0(e.type)}}class y0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Wc(r,t){r.seq.push(t),r.map[t.id]=t}function M0(r,t,e){const n=r.name,i=n.length;for(ta.lastIndex=0;;){const s=ta.exec(n),o=ta.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wc(e,c===void 0?new v0(a,r,t):new x0(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new y0(a),Wc(e,d)),e=d}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);M0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Xc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const S0=37297;let E0=0;function w0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qc=new Nt;function T0(r){kt._getMatrix(qc,kt.workingColorSpace,r);const t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(r)){case eo:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Yc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+w0(r.getShaderSource(t),o)}else return i}function b0(r,t){const e=T0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function A0(r,t){let e;switch(t){case yd:e="Linear";break;case Md:e="Reinhard";break;case Sd:e="Cineon";break;case Ed:e="ACESFilmic";break;case Td:e="AgX";break;case bd:e="Neutral";break;case wd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new N;function R0(){kt.getLuminanceCoefficients(Nr);const r=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function P0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Us(r){return r!==""}function jc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L0=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(r){return r.replace(L0,F0)}const D0=new Map;function F0(r,t){let e=zt[t];if(e===void 0){const n=D0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tl(e)}const N0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(r){return r.replace(N0,U0)}function U0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $c(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function O0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function B0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function z0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function k0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case oo:t="ENVMAP_BLENDING_MULTIPLY";break;case vd:t="ENVMAP_BLENDING_MIX";break;case xd:t="ENVMAP_BLENDING_ADD";break}return t}function V0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function H0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=O0(e),c=B0(e),h=z0(e),d=k0(e),u=V0(e),f=C0(e),m=P0(s),_=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Us).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(g=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?zt.tonemapping_pars_fragment:"",e.toneMapping!==si?A0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),R0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),o=tl(o),o=jc(o,e),o=Zc(o,e),a=tl(a),a=jc(a,e),a=Zc(a,e),o=Kc(o),a=Kc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+g+o,y=v+p+a,A=Xc(i,i.VERTEX_SHADER,x),b=Xc(i,i.FRAGMENT_SHADER,y);i.attachShader(_,A),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(P){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),L=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(b).trim();let B=!0,D=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,b);else{const Y=Yc(i,A,"vertex"),V=Yc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Y+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(L===""||z==="")&&(D=!1);D&&(P.diagnostics={runnable:B,programLog:H,vertexShader:{log:L,prefix:g},fragmentShader:{log:z,prefix:p}})}i.deleteShader(A),i.deleteShader(b),I=new Kr(i,_),T=I0(i,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,S0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let G0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new X0(t),e.set(t,n)),n}}class X0{constructor(t){this.id=G0++,this.code=t,this.usedTimes=0}}function q0(r,t,e,n,i,s,o){const a=new Qh,l=new W0,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,S,P,H,L){const z=H.fog,B=L.geometry,D=T.isMeshStandardMaterial?H.environment:null,Y=(T.isMeshStandardMaterial?e:t).get(T.envMap||D),V=Y&&Y.mapping===ao?Y.image.height:null,Z=m[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const st=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,at=st!==void 0?st.length:0;let nt=0;B.morphAttributes.position!==void 0&&(nt=1),B.morphAttributes.normal!==void 0&&(nt=2),B.morphAttributes.color!==void 0&&(nt=3);let Ut,j,et,ft;if(Z){const ne=En[Z];Ut=ne.vertexShader,j=ne.fragmentShader}else Ut=T.vertexShader,j=T.fragmentShader,l.update(T),et=l.getVertexShaderID(T),ft=l.getFragmentShaderID(T);const rt=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Ct=L.isInstancedMesh===!0,Ht=L.isBatchedMesh===!0,oe=!!T.map,Wt=!!T.matcap,de=!!Y,F=!!T.aoMap,Qe=!!T.lightMap,qt=!!T.bumpMap,Yt=!!T.normalMap,wt=!!T.displacementMap,le=!!T.emissiveMap,Et=!!T.metalnessMap,C=!!T.roughnessMap,E=T.anisotropy>0,G=T.clearcoat>0,$=T.dispersion>0,Q=T.iridescence>0,K=T.sheen>0,Mt=T.transmission>0,ht=E&&!!T.anisotropyMap,gt=G&&!!T.clearcoatMap,Zt=G&&!!T.clearcoatNormalMap,it=G&&!!T.clearcoatRoughnessMap,_t=Q&&!!T.iridescenceMap,Rt=Q&&!!T.iridescenceThicknessMap,Lt=K&&!!T.sheenColorMap,vt=K&&!!T.sheenRoughnessMap,jt=!!T.specularMap,Bt=!!T.specularColorMap,ae=!!T.specularIntensityMap,U=Mt&&!!T.transmissionMap,lt=Mt&&!!T.thicknessMap,q=!!T.gradientMap,J=!!T.alphaMap,dt=T.alphaTest>0,ut=!!T.alphaHash,Ot=!!T.extensions;let me=si;T.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(me=r.toneMapping);const Fe={shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:Ut,fragmentShader:j,defines:T.defines,customVertexShaderID:et,customFragmentShaderID:ft,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Ht,batchingColor:Ht&&L._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&L.instanceColor!==null,instancingMorph:Ct&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:fs,alphaToCoverage:!!T.alphaToCoverage,map:oe,matcap:Wt,envMap:de,envMapMode:de&&Y.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:Qe,bumpMap:qt,normalMap:Yt,displacementMap:u&&wt,emissiveMap:le,normalMapObjectSpace:Yt&&T.normalMapType===Ld,normalMapTangentSpace:Yt&&T.normalMapType===lo,metalnessMap:Et,roughnessMap:C,anisotropy:E,anisotropyMap:ht,clearcoat:G,clearcoatMap:gt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:it,dispersion:$,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:Rt,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:jt,specularColorMap:Bt,specularIntensityMap:ae,transmission:Mt,transmissionMap:U,thicknessMap:lt,gradientMap:q,opaque:T.transparent===!1&&T.blending===rs&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:dt,alphaHash:ut,combine:T.combine,mapUv:oe&&_(T.map.channel),aoMapUv:F&&_(T.aoMap.channel),lightMapUv:Qe&&_(T.lightMap.channel),bumpMapUv:qt&&_(T.bumpMap.channel),normalMapUv:Yt&&_(T.normalMap.channel),displacementMapUv:wt&&_(T.displacementMap.channel),emissiveMapUv:le&&_(T.emissiveMap.channel),metalnessMapUv:Et&&_(T.metalnessMap.channel),roughnessMapUv:C&&_(T.roughnessMap.channel),anisotropyMapUv:ht&&_(T.anisotropyMap.channel),clearcoatMapUv:gt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(T.sheenRoughnessMap.channel),specularMapUv:jt&&_(T.specularMap.channel),specularColorMapUv:Bt&&_(T.specularColorMap.channel),specularIntensityMapUv:ae&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:lt&&_(T.thicknessMap.channel),alphaMapUv:J&&_(T.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Yt||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(oe||J),fog:!!z,useFog:T.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:bt,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,decodeVideoTexture:oe&&T.map.isVideoTexture===!0&&kt.getTransfer(T.map.colorSpace)===ie,decodeVideoTextureEmissive:le&&T.emissiveMap.isVideoTexture===!0&&kt.getTransfer(T.emissiveMap.colorSpace)===ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===kn,flipSided:T.side===qe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ot&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&T.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(v(S,T),x(S,T),S.push(r.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function x(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const S=m[T.type];let P;if(S){const H=En[S];P=wf.clone(H.uniforms)}else P=T.uniforms;return P}function A(T,S){let P;for(let H=0,L=h.length;H<L;H++){const z=h[H];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new H0(r,S,T,s),h.push(P)),P}function b(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function R(T){l.remove(T)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:I}}function Y0(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function j0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Jc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Qc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,m,_,g){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),t++,p}function a(d,u,f,m,_,g){const p=o(d,u,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,m,_,g){const p=o(d,u,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||j0),n.length>1&&n.sort(u||Jc),i.length>1&&i.sort(u||Jc)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Z0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Qc,r.set(n,[o])):i>=s.length?(o=new Qc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function K0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Pt};break;case"SpotLight":e={position:new N,direction:new N,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function $0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let J0=0;function Q0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function tv(r){const t=new K0,e=$0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new St,o=new St;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,x=0,y=0,A=0,b=0,R=0;c.sort(Q0);for(let T=0,S=c.length;T<S;T++){const P=c[T],H=P.color,L=P.intensity,z=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*L,d+=H.g*L,u+=H.b*L;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],L);R++}else if(P.isDirectionalLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=D,f++}else if(P.isSpotLight){const D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(H).multiplyScalar(L),D.distance=z,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[_]=D;const Y=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=B,y++}_++}else if(P.isRectAreaLight){const D=t.get(P);D.color.copy(H).multiplyScalar(L),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=D,g++}else if(P.isPointLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const Y=P.shadow,V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=P.shadow.matrix,x++}n.point[m]=D,m++}else if(P.isHemisphereLight){const D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(L),D.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[p]=D,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==A||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=A,I.numLightProbes=R,n.version=J0++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function th(r){const t=new tv(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ev(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new th(r),t.set(i,[a])):s>=o.length?(a=new th(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
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
}`;function sv(r,t,e){let n=new pl;const i=new It,s=new It,o=new Xt,a=new np({depthPacking:Id}),l=new ip,c={},h=e.maxTextureSize,d={[ri]:qe,[qe]:ri,[kn]:kn},u=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:nv,fragmentShader:iv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new _n;m.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ke(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh;let p=this.type;this.render=function(b,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const T=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),H=r.state;H.setBlending(ii),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const L=p!==zn&&this.type===zn,z=p===zn&&this.type!==zn;for(let B=0,D=b.length;B<D;B++){const Y=b[B],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Z=V.getFrameExtents();if(i.multiply(Z),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,V.mapSize.y=s.y)),V.map===null||L===!0||z===!0){const at=this.type!==zn?{minFilter:$e,magFilter:$e}:{};V.map!==null&&V.map.dispose(),V.map=new Ti(i.x,i.y,at),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const st=V.getViewportCount();for(let at=0;at<st;at++){const nt=V.getViewport(at);o.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),H.viewport(o),V.updateMatrices(Y,at),n=V.getFrustum(),y(R,I,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===zn&&v(V,I),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(T,S,P)};function v(b,R){const I=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ti(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(R,null,I,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(R,null,I,f,_,null)}function x(b,R,I,T){let S=null;const P=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)S=P;else if(S=I.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=S.uuid,L=R.uuid;let z=c[H];z===void 0&&(z={},c[H]=z);let B=z[L];B===void 0&&(B=S.clone(),z[L]=B,R.addEventListener("dispose",A)),S=B}if(S.visible=R.visible,S.wireframe=R.wireframe,T===zn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=r.properties.get(S);H.light=I}return S}function y(b,R,I,T,S){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===zn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const L=t.update(b),z=b.material;if(Array.isArray(z)){const B=L.groups;for(let D=0,Y=B.length;D<Y;D++){const V=B[D],Z=z[V.materialIndex];if(Z&&Z.visible){const st=x(b,Z,T,S);b.onBeforeShadow(r,b,R,I,L,st,V),r.renderBufferDirect(I,null,L,st,b,V),b.onAfterShadow(r,b,R,I,L,st,V)}}}else if(z.visible){const B=x(b,z,T,S);b.onBeforeShadow(r,b,R,I,L,B,null),r.renderBufferDirect(I,null,L,B,b,null),b.onAfterShadow(r,b,R,I,L,B,null)}}const H=b.children;for(let L=0,z=H.length;L<z;L++)y(H[L],R,I,T,S)}function A(b){b.target.removeEventListener("dispose",A);for(const I in c){const T=c[I],S=b.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const rv={[ma]:ga,[_a]:ya,[va]:Ma,[ls]:xa,[ga]:ma,[ya]:_a,[Ma]:va,[xa]:ls};function ov(r,t){function e(){let U=!1;const lt=new Xt;let q=null;const J=new Xt(0,0,0,0);return{setMask:function(dt){q!==dt&&!U&&(r.colorMask(dt,dt,dt,dt),q=dt)},setLocked:function(dt){U=dt},setClear:function(dt,ut,Ot,me,Fe){Fe===!0&&(dt*=me,ut*=me,Ot*=me),lt.set(dt,ut,Ot,me),J.equals(lt)===!1&&(r.clearColor(dt,ut,Ot,me),J.copy(lt))},reset:function(){U=!1,q=null,J.set(-1,0,0,0)}}}function n(){let U=!1,lt=!1,q=null,J=null,dt=null;return{setReversed:function(ut){if(lt!==ut){const Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const me=dt;dt=null,this.setClear(me)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?rt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(ut){q!==ut&&!U&&(r.depthMask(ut),q=ut)},setFunc:function(ut){if(lt&&(ut=rv[ut]),J!==ut){switch(ut){case ma:r.depthFunc(r.NEVER);break;case ga:r.depthFunc(r.ALWAYS);break;case _a:r.depthFunc(r.LESS);break;case ls:r.depthFunc(r.LEQUAL);break;case va:r.depthFunc(r.EQUAL);break;case xa:r.depthFunc(r.GEQUAL);break;case ya:r.depthFunc(r.GREATER);break;case Ma:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ut}},setLocked:function(ut){U=ut},setClear:function(ut){dt!==ut&&(lt&&(ut=1-ut),r.clearDepth(ut),dt=ut)},reset:function(){U=!1,q=null,J=null,dt=null,lt=!1}}}function i(){let U=!1,lt=null,q=null,J=null,dt=null,ut=null,Ot=null,me=null,Fe=null;return{setTest:function(ne){U||(ne?rt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(ne){lt!==ne&&!U&&(r.stencilMask(ne),lt=ne)},setFunc:function(ne,on,Rn){(q!==ne||J!==on||dt!==Rn)&&(r.stencilFunc(ne,on,Rn),q=ne,J=on,dt=Rn)},setOp:function(ne,on,Rn){(ut!==ne||Ot!==on||me!==Rn)&&(r.stencilOp(ne,on,Rn),ut=ne,Ot=on,me=Rn)},setLocked:function(ne){U=ne},setClear:function(ne){Fe!==ne&&(r.clearStencil(ne),Fe=ne)},reset:function(){U=!1,lt=null,q=null,J=null,dt=null,ut=null,Ot=null,me=null,Fe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,x=null,y=null,A=null,b=null,R=new Pt(0,0,0),I=0,T=!1,S=null,P=null,H=null,L=null,z=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,Y=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),D=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),D=Y>=2);let Z=null,st={};const at=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),Ut=new Xt().fromArray(at),j=new Xt().fromArray(nt);function et(U,lt,q,J){const dt=new Uint8Array(4),ut=r.createTexture();r.bindTexture(U,ut),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<q;Ot++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(lt,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(lt+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return ut}const ft={};ft[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),ft[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ft[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(r.DEPTH_TEST),o.setFunc(ls),qt(!1),Yt(Ol),rt(r.CULL_FACE),F(ii);function rt(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function bt(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Ct(U,lt){return d[U]!==lt?(r.bindFramebuffer(U,lt),d[U]=lt,U===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=lt),U===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=lt),!0):!1}function Ht(U,lt){let q=f,J=!1;if(U){q=u.get(lt),q===void 0&&(q=[],u.set(lt,q));const dt=U.textures;if(q.length!==dt.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Ot=dt.length;ut<Ot;ut++)q[ut]=r.COLOR_ATTACHMENT0+ut;q.length=dt.length,J=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,J=!0);J&&r.drawBuffers(q)}function oe(U){return m!==U?(r.useProgram(U),m=U,!0):!1}const Wt={[xi]:r.FUNC_ADD,[ed]:r.FUNC_SUBTRACT,[nd]:r.FUNC_REVERSE_SUBTRACT};Wt[id]=r.MIN,Wt[sd]=r.MAX;const de={[rd]:r.ZERO,[od]:r.ONE,[ad]:r.SRC_COLOR,[fa]:r.SRC_ALPHA,[fd]:r.SRC_ALPHA_SATURATE,[ud]:r.DST_COLOR,[cd]:r.DST_ALPHA,[ld]:r.ONE_MINUS_SRC_COLOR,[pa]:r.ONE_MINUS_SRC_ALPHA,[dd]:r.ONE_MINUS_DST_COLOR,[hd]:r.ONE_MINUS_DST_ALPHA,[pd]:r.CONSTANT_COLOR,[md]:r.ONE_MINUS_CONSTANT_COLOR,[gd]:r.CONSTANT_ALPHA,[_d]:r.ONE_MINUS_CONSTANT_ALPHA};function F(U,lt,q,J,dt,ut,Ot,me,Fe,ne){if(U===ii){_===!0&&(bt(r.BLEND),_=!1);return}if(_===!1&&(rt(r.BLEND),_=!0),U!==td){if(U!==g||ne!==T){if((p!==xi||y!==xi)&&(r.blendEquation(r.FUNC_ADD),p=xi,y=xi),ne)switch(U){case rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bl:r.blendFunc(r.ONE,r.ONE);break;case zl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case zl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,x=null,A=null,b=null,R.set(0,0,0),I=0,g=U,T=ne}return}dt=dt||lt,ut=ut||q,Ot=Ot||J,(lt!==p||dt!==y)&&(r.blendEquationSeparate(Wt[lt],Wt[dt]),p=lt,y=dt),(q!==v||J!==x||ut!==A||Ot!==b)&&(r.blendFuncSeparate(de[q],de[J],de[ut],de[Ot]),v=q,x=J,A=ut,b=Ot),(me.equals(R)===!1||Fe!==I)&&(r.blendColor(me.r,me.g,me.b,Fe),R.copy(me),I=Fe),g=U,T=!1}function Qe(U,lt){U.side===kn?bt(r.CULL_FACE):rt(r.CULL_FACE);let q=U.side===qe;lt&&(q=!q),qt(q),U.blending===rs&&U.transparent===!1?F(ii):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function qt(U){S!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),S=U)}function Yt(U){U!==$u?(rt(r.CULL_FACE),U!==P&&(U===Ol?r.cullFace(r.BACK):U===Ju?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),P=U}function wt(U){U!==H&&(D&&r.lineWidth(U),H=U)}function le(U,lt,q){U?(rt(r.POLYGON_OFFSET_FILL),(L!==lt||z!==q)&&(r.polygonOffset(lt,q),L=lt,z=q)):bt(r.POLYGON_OFFSET_FILL)}function Et(U){U?rt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function C(U){U===void 0&&(U=r.TEXTURE0+B-1),Z!==U&&(r.activeTexture(U),Z=U)}function E(U,lt,q){q===void 0&&(Z===null?q=r.TEXTURE0+B-1:q=Z);let J=st[q];J===void 0&&(J={type:void 0,texture:void 0},st[q]=J),(J.type!==U||J.texture!==lt)&&(Z!==q&&(r.activeTexture(q),Z=q),r.bindTexture(U,lt||ft[U]),J.type=U,J.texture=lt)}function G(){const U=st[Z];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Zt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(U){Ut.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Ut.copy(U))}function vt(U){j.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function jt(U,lt){let q=c.get(lt);q===void 0&&(q=new WeakMap,c.set(lt,q));let J=q.get(U);J===void 0&&(J=r.getUniformBlockIndex(lt,U.name),q.set(U,J))}function Bt(U,lt){const J=c.get(lt).get(U);l.get(lt)!==J&&(r.uniformBlockBinding(lt,J,U.__bindingPointIndex),l.set(lt,J))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Z=null,st={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,x=null,y=null,A=null,b=null,R=new Pt(0,0,0),I=0,T=!1,S=null,P=null,H=null,L=null,z=null,Ut.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:rt,disable:bt,bindFramebuffer:Ct,drawBuffers:Ht,useProgram:oe,setBlending:F,setMaterial:Qe,setFlipSided:qt,setCullFace:Yt,setLineWidth:wt,setPolygonOffset:le,setScissorTest:Et,activeTexture:C,bindTexture:E,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:_t,texImage3D:Rt,updateUBOMapping:jt,uniformBlockBinding:Bt,texStorage2D:Zt,texStorage3D:it,texSubImage2D:K,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Lt,viewport:vt,reset:ae}}function av(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,E){return f?new OffscreenCanvas(C,E):Xs("canvas")}function _(C,E,G){let $=1;const Q=Et(C);if((Q.width>G||Q.height>G)&&($=G/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor($*Q.width),Mt=Math.floor($*Q.height);d===void 0&&(d=m(K,Mt));const ht=E?m(K,Mt):d;return ht.width=K,ht.height=Mt,ht.getContext("2d").drawImage(C,0,0,K,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Mt+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(C,E,G,$,Q=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=E;if(E===r.RED&&(G===r.FLOAT&&(K=r.R32F),G===r.HALF_FLOAT&&(K=r.R16F),G===r.UNSIGNED_BYTE&&(K=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.R8UI),G===r.UNSIGNED_SHORT&&(K=r.R16UI),G===r.UNSIGNED_INT&&(K=r.R32UI),G===r.BYTE&&(K=r.R8I),G===r.SHORT&&(K=r.R16I),G===r.INT&&(K=r.R32I)),E===r.RG&&(G===r.FLOAT&&(K=r.RG32F),G===r.HALF_FLOAT&&(K=r.RG16F),G===r.UNSIGNED_BYTE&&(K=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RG8UI),G===r.UNSIGNED_SHORT&&(K=r.RG16UI),G===r.UNSIGNED_INT&&(K=r.RG32UI),G===r.BYTE&&(K=r.RG8I),G===r.SHORT&&(K=r.RG16I),G===r.INT&&(K=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGB8UI),G===r.UNSIGNED_SHORT&&(K=r.RGB16UI),G===r.UNSIGNED_INT&&(K=r.RGB32UI),G===r.BYTE&&(K=r.RGB8I),G===r.SHORT&&(K=r.RGB16I),G===r.INT&&(K=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),G===r.UNSIGNED_INT&&(K=r.RGBA32UI),G===r.BYTE&&(K=r.RGBA8I),G===r.SHORT&&(K=r.RGBA16I),G===r.INT&&(K=r.RGBA32I)),E===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),E===r.RGBA){const Mt=Q?eo:kt.getTransfer($);G===r.FLOAT&&(K=r.RGBA32F),G===r.HALF_FLOAT&&(K=r.RGBA16F),G===r.UNSIGNED_BYTE&&(K=Mt===ie?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(C,E){let G;return C?E===null||E===wi||E===us?G=r.DEPTH24_STENCIL8:E===Tn?G=r.DEPTH32F_STENCIL8:E===Ws&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wi||E===us?G=r.DEPTH_COMPONENT24:E===Tn?G=r.DEPTH_COMPONENT32F:E===Ws&&(G=r.DEPTH_COMPONENT16),G}function A(C,E){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==$e&&C.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function b(C){const E=C.target;E.removeEventListener("dispose",b),I(E),E.isVideoTexture&&h.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),S(E)}function I(C){const E=n.get(C);if(E.__webglInit===void 0)return;const G=C.source,$=u.get(G);if($){const Q=$[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(C),Object.keys($).length===0&&u.delete(G)}n.remove(C)}function T(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const G=C.source,$=u.get(G);delete $[E.__cacheKey],o.memory.textures--}function S(C){const E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let Q=0;Q<E.__webglFramebuffer[$].length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[$][Q]);else r.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)r.deleteFramebuffer(E.__webglFramebuffer[$]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=C.textures;for(let $=0,Q=G.length;$<Q;$++){const K=n.get(G[$]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[$])}n.remove(C)}let P=0;function H(){P=0}function L(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function z(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function B(C,E){const G=n.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,C,E);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function D(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function Y(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,E);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function V(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){et(G,C,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}const Z={[Gs]:r.REPEAT,[Vn]:r.CLAMP_TO_EDGE,[Ea]:r.MIRRORED_REPEAT},st={[$e]:r.NEAREST,[Rd]:r.NEAREST_MIPMAP_NEAREST,[cr]:r.NEAREST_MIPMAP_LINEAR,[wn]:r.LINEAR,[Mo]:r.LINEAR_MIPMAP_NEAREST,[Si]:r.LINEAR_MIPMAP_LINEAR},at={[Dd]:r.NEVER,[zd]:r.ALWAYS,[Fd]:r.LESS,[Zh]:r.LEQUAL,[Nd]:r.EQUAL,[Bd]:r.GEQUAL,[Ud]:r.GREATER,[Od]:r.NOTEQUAL};function nt(C,E){if(E.type===Tn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===Mo||E.magFilter===cr||E.magFilter===Si||E.minFilter===wn||E.minFilter===Mo||E.minFilter===cr||E.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Z[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Z[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Z[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,st[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,st[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$e||E.minFilter!==cr&&E.minFilter!==Si||E.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ut(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",b));const $=E.source;let Q=u.get($);Q===void 0&&(Q={},u.set($,Q));const K=z(E);if(K!==C.__cacheKey){Q[K]===void 0&&(Q[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[K].usedTimes++;const Mt=Q[C.__cacheKey];Mt!==void 0&&(Q[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(E)),C.__cacheKey=K,C.__webglTexture=Q[K].texture}return G}function j(C,E,G){let $=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=r.TEXTURE_3D);const Q=Ut(C,E),K=E.source;e.bindTexture($,C.__webglTexture,r.TEXTURE0+G);const Mt=n.get(K);if(K.version!==Mt.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);const ht=kt.getPrimaries(kt.workingColorSpace),gt=E.colorSpace===ei?null:kt.getPrimaries(E.colorSpace),Zt=E.colorSpace===ei||ht===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let it=_(E.image,!1,i.maxTextureSize);it=le(E,it);const _t=s.convert(E.format,E.colorSpace),Rt=s.convert(E.type);let Lt=x(E.internalFormat,_t,Rt,E.colorSpace,E.isVideoTexture);nt($,E);let vt;const jt=E.mipmaps,Bt=E.isVideoTexture!==!0,ae=Mt.__version===void 0||Q===!0,U=K.dataReady,lt=A(E,it);if(E.isDepthTexture)Lt=y(E.format===ds,E.type),ae&&(Bt?e.texStorage2D(r.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Lt,it.width,it.height,0,_t,Rt,null));else if(E.isDataTexture)if(jt.length>0){Bt&&ae&&e.texStorage2D(r.TEXTURE_2D,lt,Lt,jt[0].width,jt[0].height);for(let q=0,J=jt.length;q<J;q++)vt=jt[q],Bt?U&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,vt.width,vt.height,_t,Rt,vt.data):e.texImage2D(r.TEXTURE_2D,q,Lt,vt.width,vt.height,0,_t,Rt,vt.data);E.generateMipmaps=!1}else Bt?(ae&&e.texStorage2D(r.TEXTURE_2D,lt,Lt,it.width,it.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,_t,Rt,it.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,it.width,it.height,0,_t,Rt,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Bt&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,Lt,jt[0].width,jt[0].height,it.depth);for(let q=0,J=jt.length;q<J;q++)if(vt=jt[q],E.format!==rn)if(_t!==null)if(Bt){if(U)if(E.layerUpdates.size>0){const dt=Pc(vt.width,vt.height,E.format,E.type);for(const ut of E.layerUpdates){const Ot=vt.data.subarray(ut*dt/vt.data.BYTES_PER_ELEMENT,(ut+1)*dt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ut,vt.width,vt.height,1,_t,Ot)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,it.depth,_t,vt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Lt,vt.width,vt.height,it.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,it.depth,_t,Rt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Lt,vt.width,vt.height,it.depth,0,_t,Rt,vt.data)}else{Bt&&ae&&e.texStorage2D(r.TEXTURE_2D,lt,Lt,jt[0].width,jt[0].height);for(let q=0,J=jt.length;q<J;q++)vt=jt[q],E.format!==rn?_t!==null?Bt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?U&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,vt.width,vt.height,_t,Rt,vt.data):e.texImage2D(r.TEXTURE_2D,q,Lt,vt.width,vt.height,0,_t,Rt,vt.data)}else if(E.isDataArrayTexture)if(Bt){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,Lt,it.width,it.height,it.depth),U)if(E.layerUpdates.size>0){const q=Pc(it.width,it.height,E.format,E.type);for(const J of E.layerUpdates){const dt=it.data.subarray(J*q/it.data.BYTES_PER_ELEMENT,(J+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,_t,Rt,dt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Rt,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,_t,Rt,it.data);else if(E.isData3DTexture)Bt?(ae&&e.texStorage3D(r.TEXTURE_3D,lt,Lt,it.width,it.height,it.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Rt,it.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,_t,Rt,it.data);else if(E.isFramebufferTexture){if(ae)if(Bt)e.texStorage2D(r.TEXTURE_2D,lt,Lt,it.width,it.height);else{let q=it.width,J=it.height;for(let dt=0;dt<lt;dt++)e.texImage2D(r.TEXTURE_2D,dt,Lt,q,J,0,_t,Rt,null),q>>=1,J>>=1}}else if(jt.length>0){if(Bt&&ae){const q=Et(jt[0]);e.texStorage2D(r.TEXTURE_2D,lt,Lt,q.width,q.height)}for(let q=0,J=jt.length;q<J;q++)vt=jt[q],Bt?U&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,_t,Rt,vt):e.texImage2D(r.TEXTURE_2D,q,Lt,_t,Rt,vt);E.generateMipmaps=!1}else if(Bt){if(ae){const q=Et(it);e.texStorage2D(r.TEXTURE_2D,lt,Lt,q.width,q.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,Rt,it)}else e.texImage2D(r.TEXTURE_2D,0,Lt,_t,Rt,it);g(E)&&p($),Mt.__version=K.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function et(C,E,G){if(E.image.length!==6)return;const $=Ut(C,E),Q=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const K=n.get(Q);if(Q.version!==K.__version||$===!0){e.activeTexture(r.TEXTURE0+G);const Mt=kt.getPrimaries(kt.workingColorSpace),ht=E.colorSpace===ei?null:kt.getPrimaries(E.colorSpace),gt=E.colorSpace===ei||Mt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Zt=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,_t=[];for(let J=0;J<6;J++)!Zt&&!it?_t[J]=_(E.image[J],!0,i.maxCubemapSize):_t[J]=it?E.image[J].image:E.image[J],_t[J]=le(E,_t[J]);const Rt=_t[0],Lt=s.convert(E.format,E.colorSpace),vt=s.convert(E.type),jt=x(E.internalFormat,Lt,vt,E.colorSpace),Bt=E.isVideoTexture!==!0,ae=K.__version===void 0||$===!0,U=Q.dataReady;let lt=A(E,Rt);nt(r.TEXTURE_CUBE_MAP,E);let q;if(Zt){Bt&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,lt,jt,Rt.width,Rt.height);for(let J=0;J<6;J++){q=_t[J].mipmaps;for(let dt=0;dt<q.length;dt++){const ut=q[dt];E.format!==rn?Lt!==null?Bt?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,ut.width,ut.height,Lt,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,jt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,ut.width,ut.height,Lt,vt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,jt,ut.width,ut.height,0,Lt,vt,ut.data)}}}else{if(q=E.mipmaps,Bt&&ae){q.length>0&&lt++;const J=Et(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,lt,jt,J.width,J.height)}for(let J=0;J<6;J++)if(it){Bt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_t[J].width,_t[J].height,Lt,vt,_t[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,_t[J].width,_t[J].height,0,Lt,vt,_t[J].data);for(let dt=0;dt<q.length;dt++){const Ot=q[dt].image[J].image;Bt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Ot.width,Ot.height,Lt,vt,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,jt,Ot.width,Ot.height,0,Lt,vt,Ot.data)}}else{Bt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,vt,_t[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,Lt,vt,_t[J]);for(let dt=0;dt<q.length;dt++){const ut=q[dt];Bt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Lt,vt,ut.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,jt,Lt,vt,ut.image[J])}}}g(E)&&p(r.TEXTURE_CUBE_MAP),K.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ft(C,E,G,$,Q,K){const Mt=s.convert(G.format,G.colorSpace),ht=s.convert(G.type),gt=x(G.internalFormat,Mt,ht,G.colorSpace),Zt=n.get(E),it=n.get(G);if(it.__renderTarget=E,!Zt.__hasExternalTextures){const _t=Math.max(1,E.width>>K),Rt=Math.max(1,E.height>>K);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,gt,_t,Rt,E.depth,0,Mt,ht,null):e.texImage2D(Q,K,gt,_t,Rt,0,Mt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Yt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,Q,it.__webglTexture,0,qt(E)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,Q,it.__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(C,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){const $=E.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=y(E.stencilBuffer,Q),Mt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=qt(E);Yt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,K,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,K,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,K,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,C)}else{const $=E.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],Mt=s.convert(K.format,K.colorSpace),ht=s.convert(K.type),gt=x(K.internalFormat,Mt,ht,K.colorSpace),Zt=qt(E);G&&Yt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,gt,E.width,E.height):Yt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,gt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,gt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const Q=$.__webglTexture,K=qt(E);if(E.depthTexture.format===os)Yt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(E.depthTexture.format===ds)Yt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ct(C){const E=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=$}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");bt(E.__webglFramebuffer,C)}else if(G){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=r.createRenderbuffer(),rt(E.__webglDepthbuffer[$],C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),rt(E.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(C,E,G){const $=n.get(C);E!==void 0&&ft($.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Ct(C)}function oe(C){const E=C.texture,G=n.get(C),$=n.get(E);C.addEventListener("dispose",R);const Q=C.textures,K=C.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=E.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ht]=[];for(let gt=0;gt<E.mipmaps.length;gt++)G.__webglFramebuffer[ht][gt]=r.createFramebuffer()}else G.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)G.__webglFramebuffer[ht]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let ht=0,gt=Q.length;ht<gt;ht++){const Zt=n.get(Q[ht]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Yt(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){const gt=Q[ht];G.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ht]);const Zt=s.convert(gt.format,gt.colorSpace),it=s.convert(gt.type),_t=x(gt.internalFormat,Zt,it,gt.colorSpace,C.isXRRenderTarget===!0),Rt=qt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,_t,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,G.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),nt(r.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)ft(G.__webglFramebuffer[ht][gt],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else ft(G.__webglFramebuffer[ht],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(E)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,gt=Q.length;ht<gt;ht++){const Zt=Q[ht],it=n.get(Zt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),nt(r.TEXTURE_2D,Zt),ft(G.__webglFramebuffer,C,Zt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),g(Zt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,$.__webglTexture),nt(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)ft(G.__webglFramebuffer[gt],C,E,r.COLOR_ATTACHMENT0,ht,gt);else ft(G.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,ht,0);g(E)&&p(ht),e.unbindTexture()}C.depthBuffer&&Ct(C)}function Wt(C){const E=C.textures;for(let G=0,$=E.length;G<$;G++){const Q=E[G];if(g(Q)){const K=v(C),Mt=n.get(Q).__webglTexture;e.bindTexture(K,Mt),p(K),e.unbindTexture()}}}const de=[],F=[];function Qe(C){if(C.samples>0){if(Yt(C)===!1){const E=C.textures,G=C.width,$=C.height;let Q=r.COLOR_BUFFER_BIT;const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(C),ht=E.length>1;if(ht)for(let gt=0;gt<E.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let gt=0;gt<E.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[gt]);const Zt=n.get(E[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Zt,0)}r.blitFramebuffer(0,0,G,$,0,0,G,$,Q,r.NEAREST),l===!0&&(de.length=0,F.length=0,de.push(r.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(de.push(K),F.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<E.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[gt]);const Zt=n.get(E[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,Zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function qt(C){return Math.min(i.maxSamples,C.samples)}function Yt(C){const E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(C){const E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function le(C,E){const G=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==fs&&G!==ei&&(kt.getTransfer(G)===ie?($!==rn||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.setTexture2D=B,this.setTexture2DArray=D,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ht,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Yt}function lv(r,t){function e(n,i=ei){let s;const o=kt.getTransfer(i);if(n===Wn)return r.UNSIGNED_BYTE;if(n===ol)return r.UNSIGNED_SHORT_4_4_4_4;if(n===al)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return r.BYTE;if(n===kh)return r.SHORT;if(n===Ws)return r.UNSIGNED_SHORT;if(n===rl)return r.INT;if(n===wi)return r.UNSIGNED_INT;if(n===Tn)return r.FLOAT;if(n===Qs)return r.HALF_FLOAT;if(n===Hh)return r.ALPHA;if(n===Gh)return r.RGB;if(n===rn)return r.RGBA;if(n===Wh)return r.LUMINANCE;if(n===Xh)return r.LUMINANCE_ALPHA;if(n===os)return r.DEPTH_COMPONENT;if(n===ds)return r.DEPTH_STENCIL;if(n===qh)return r.RED;if(n===ll)return r.RED_INTEGER;if(n===Yh)return r.RG;if(n===cl)return r.RG_INTEGER;if(n===hl)return r.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===jr)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ta||n===ba||n===Aa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ca||n===Pa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ra||n===Ca)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===La||n===Da||n===Fa||n===Na||n===Ua||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ha||n===Ga||n===Wa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ia)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr||n===Xa||n===qa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Zr)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jh||n===Ya||n===ja||n===Za)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const cv={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uv=`
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

}`;class dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new De,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new oi({vertexShader:hv,fragmentShader:uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new fo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fv extends Ri{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const _=new dv,g=e.getContextAttributes();let p=null,v=null;const x=[],y=[],A=new It;let b=null;const R=new Ve;R.viewport=new Xt;const I=new Ve;I.viewport=new Xt;const T=[R,I],S=new Ep;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=x[j];return et===void 0&&(et=new ea,x[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=x[j];return et===void 0&&(et=new ea,x[j]=et),et.getGripSpace()},this.getHand=function(j){let et=x[j];return et===void 0&&(et=new ea,x[j]=et),et.getHandSpace()};function L(j){const et=y.indexOf(j.inputSource);if(et===-1)return;const ft=x[et];ft!==void 0&&(ft.update(j.inputSource,j.frame,c||o),ft.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",B);for(let j=0;j<x.length;j++){const et=y[j];et!==null&&(y[j]=null,x[j].disconnect(et))}P=null,H=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,v=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",z),i.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ft=null,rt=null,bt=null;g.depth&&(bt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=g.stencil?ds:os,rt=g.stencil?us:wi);const Ct={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Ct),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Ti(u.textureWidth,u.textureHeight,{format:rn,type:Wn,depthTexture:new ou(u.textureWidth,u.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const ft={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ft),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ti(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(j){for(let et=0;et<j.removed.length;et++){const ft=j.removed[et],rt=y.indexOf(ft);rt>=0&&(y[rt]=null,x[rt].disconnect(ft))}for(let et=0;et<j.added.length;et++){const ft=j.added[et];let rt=y.indexOf(ft);if(rt===-1){for(let Ct=0;Ct<x.length;Ct++)if(Ct>=y.length){y.push(ft),rt=Ct;break}else if(y[Ct]===null){y[Ct]=ft,rt=Ct;break}if(rt===-1)break}const bt=x[rt];bt&&bt.connect(ft)}}const D=new N,Y=new N;function V(j,et,ft){D.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(ft.matrixWorld);const rt=D.distanceTo(Y),bt=et.projectionMatrix.elements,Ct=ft.projectionMatrix.elements,Ht=bt[14]/(bt[10]-1),oe=bt[14]/(bt[10]+1),Wt=(bt[9]+1)/bt[5],de=(bt[9]-1)/bt[5],F=(bt[8]-1)/bt[0],Qe=(Ct[8]+1)/Ct[0],qt=Ht*F,Yt=Ht*Qe,wt=rt/(-F+Qe),le=wt*-F;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(le),j.translateZ(wt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),bt[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=Ht+wt,C=oe+wt,E=qt-le,G=Yt+(rt-le),$=Wt*oe/C*Et,Q=de*oe/C*Et;j.projectionMatrix.makePerspective(E,G,$,Q,Et,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Z(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let et=j.near,ft=j.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),S.near=I.near=R.near=et,S.far=I.far=R.far=ft,(P!==S.near||H!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,H=S.far),R.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,S.layers.mask=R.layers.mask|I.layers.mask;const rt=j.parent,bt=S.cameras;Z(S,rt);for(let Ct=0;Ct<bt.length;Ct++)Z(bt[Ct],rt);bt.length===2?V(S,R,I):S.projectionMatrix.copy(R.projectionMatrix),st(j,S,rt)};function st(j,et,ft){ft===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(ft.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ps*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let at=null;function nt(j,et){if(h=et.getViewerPose(c||o),m=et,h!==null){const ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let rt=!1;ft.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let Ct=0;Ct<ft.length;Ct++){const Ht=ft[Ct];let oe=null;if(f!==null)oe=f.getViewport(Ht);else{const de=d.getViewSubImage(u,Ht);oe=de.viewport,Ct===0&&(t.setRenderTargetTextures(v,de.colorTexture,u.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(v))}let Wt=T[Ct];Wt===void 0&&(Wt=new Ve,Wt.layers.enable(Ct),Wt.viewport=new Xt,T[Ct]=Wt),Wt.matrix.fromArray(Ht.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ht.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(oe.x,oe.y,oe.width,oe.height),Ct===0&&(S.matrix.copy(Wt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(Wt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Ct=d.getDepthInformation(ft[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,i.renderState)}}for(let ft=0;ft<x.length;ft++){const rt=y[ft],bt=x[ft];rt!==null&&bt!==void 0&&bt.update(rt,et,c||o)}at&&at(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}const Ut=new gu;Ut.setAnimationLoop(nt),this.setAnimationLoop=function(j){at=j},this.dispose=function(){}}}const gi=new Te,pv=new St;function mv(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,nu(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,gi.copy(y),gi.x*=-1,gi.y*=-1,gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),g.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(gi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gv(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(m(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",g));const A=x.program;n.updateUBOMapping(v,A);const b=t.render.frame;s[v.id]!==b&&(u(v),s[v.id]=b)}function h(v){const x=d();v.__bindingPointIndex=x;const y=r.createBuffer(),A=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],y=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,R=y.length;b<R;b++){const I=Array.isArray(y[b])?y[b]:[y[b]];for(let T=0,S=I.length;T<S;T++){const P=I[T];if(f(P,b,T,A)===!0){const H=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let B=0;B<L.length;B++){const D=L[B],Y=_(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,H+z,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,x,y,A){const b=v.value,R=x+"_"+y;if(A[R]===void 0)return typeof b=="number"||typeof b=="boolean"?A[R]=b:A[R]=b.clone(),!0;{const I=A[R];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return A[R]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function m(v){const x=v.uniforms;let y=0;const A=16;for(let R=0,I=x.length;R<I;R++){const T=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,P=T.length;S<P;S++){const H=T[S],L=Array.isArray(H.value)?H.value:[H.value];for(let z=0,B=L.length;z<B;z++){const D=L[z],Y=_(D),V=y%A,Z=V%Y.boundary,st=V+Z;y+=Z,st!==0&&A-st<Y.storage&&(y+=A-st),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=Y.storage}}}const b=y%A;return b>0&&(y+=A-b),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class _v{constructor(t={}){const{canvas:e=nf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=he,this.toneMapping=si,this.toneMappingExposure=1;const y=this;let A=!1,b=0,R=0,I=null,T=-1,S=null;const P=new Xt,H=new Xt;let L=null;const z=new Pt(0);let B=0,D=e.width,Y=e.height,V=1,Z=null,st=null;const at=new Xt(0,0,D,Y),nt=new Xt(0,0,D,Y);let Ut=!1;const j=new pl;let et=!1,ft=!1;this.transmissionResolutionScale=1;const rt=new St,bt=new St,Ct=new N,Ht=new Xt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function de(){return I===null?V:1}let F=n;function Qe(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){const O="webgl2";if(F=Qe(O,w),F===null)throw Qe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let qt,Yt,wt,le,Et,C,E,G,$,Q,K,Mt,ht,gt,Zt,it,_t,Rt,Lt,vt,jt,Bt,ae,U;function lt(){qt=new b_(F),qt.init(),Bt=new lv(F,qt),Yt=new y_(F,qt,t,Bt),wt=new ov(F,qt),Yt.reverseDepthBuffer&&u&&wt.buffers.depth.setReversed(!0),le=new C_(F),Et=new Y0,C=new av(F,qt,wt,Et,Yt,Bt,le),E=new S_(y),G=new T_(y),$=new Up(F),ae=new v_(F,$),Q=new A_(F,$,le,ae),K=new I_(F,Q,$,le),Lt=new P_(F,Yt,C),it=new M_(Et),Mt=new q0(y,E,G,qt,Yt,ae,it),ht=new mv(y,Et),gt=new Z0,Zt=new ev(qt),Rt=new __(y,E,G,wt,K,f,l),_t=new sv(y,K,Yt),U=new gv(F,le,Yt,wt),vt=new x_(F,qt,le),jt=new R_(F,qt,le),le.programs=Mt.programs,y.capabilities=Yt,y.extensions=qt,y.properties=Et,y.renderLists=gt,y.shadowMap=_t,y.state=wt,y.info=le}lt();const q=new fv(y,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=qt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=qt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(D,Y,!1))},this.getSize=function(w){return w.set(D,Y)},this.setSize=function(w,O,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,Y=O,e.width=Math.floor(w*V),e.height=Math.floor(O*V),W===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(D*V,Y*V).floor()},this.setDrawingBufferSize=function(w,O,W){D=w,Y=O,V=W,e.width=Math.floor(w*W),e.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,O,W,X){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,O,W,X),wt.viewport(P.copy(at).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(nt)},this.setScissor=function(w,O,W,X){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,O,W,X),wt.scissor(H.copy(nt).multiplyScalar(V).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(w){wt.setScissorTest(Ut=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(w=!0,O=!0,W=!0){let X=0;if(w){let k=!1;if(I!==null){const tt=I.texture.format;k=tt===hl||tt===cl||tt===ll}if(k){const tt=I.texture.type,ct=tt===Wn||tt===wi||tt===Ws||tt===us||tt===ol||tt===al,mt=Rt.getClearColor(),xt=Rt.getClearAlpha(),Dt=mt.r,Ft=mt.g,Tt=mt.b;ct?(m[0]=Dt,m[1]=Ft,m[2]=Tt,m[3]=xt,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Dt,_[1]=Ft,_[2]=Tt,_[3]=xt,F.clearBufferiv(F.COLOR,0,_))}else X|=F.COLOR_BUFFER_BIT}O&&(X|=F.DEPTH_BUFFER_BIT),W&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Rt.dispose(),gt.dispose(),Zt.dispose(),Et.dispose(),E.dispose(),G.dispose(),K.dispose(),ae.dispose(),U.dispose(),Mt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Pl),q.removeEventListener("sessionend",Il),ci.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=le.autoReset,O=_t.enabled,W=_t.autoUpdate,X=_t.needsUpdate,k=_t.type;lt(),le.autoReset=w,_t.enabled=O,_t.autoUpdate=W,_t.needsUpdate=X,_t.type=k}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ot(w){const O=w.target;O.removeEventListener("dispose",Ot),me(O)}function me(w){Fe(w),Et.remove(w)}function Fe(w){const O=Et.get(w).programs;O!==void 0&&(O.forEach(function(W){Mt.releaseProgram(W)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,X,k,tt){O===null&&(O=oe);const ct=k.isMesh&&k.matrixWorld.determinant()<0,mt=Xu(w,O,W,X,k);wt.setMaterial(X,ct);let xt=W.index,Dt=1;if(X.wireframe===!0){if(xt=Q.getWireframeAttribute(W),xt===void 0)return;Dt=2}const Ft=W.drawRange,Tt=W.attributes.position;let Kt=Ft.start*Dt,te=(Ft.start+Ft.count)*Dt;tt!==null&&(Kt=Math.max(Kt,tt.start*Dt),te=Math.min(te,(tt.start+tt.count)*Dt)),xt!==null?(Kt=Math.max(Kt,0),te=Math.min(te,xt.count)):Tt!=null&&(Kt=Math.max(Kt,0),te=Math.min(te,Tt.count));const xe=te-Kt;if(xe<0||xe===1/0)return;ae.setup(k,X,mt,W,xt);let ge,$t=vt;if(xt!==null&&(ge=$.get(xt),$t=jt,$t.setIndex(ge)),k.isMesh)X.wireframe===!0?(wt.setLineWidth(X.wireframeLinewidth*de()),$t.setMode(F.LINES)):$t.setMode(F.TRIANGLES);else if(k.isLine){let At=X.linewidth;At===void 0&&(At=1),wt.setLineWidth(At*de()),k.isLineSegments?$t.setMode(F.LINES):k.isLineLoop?$t.setMode(F.LINE_LOOP):$t.setMode(F.LINE_STRIP)}else k.isPoints?$t.setMode(F.POINTS):k.isSprite&&$t.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)$t.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))$t.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const At=k._multiDrawStarts,Le=k._multiDrawCounts,ee=k._multiDrawCount,an=xt?$.get(xt).bytesPerElement:1,Ii=Et.get(X).currentProgram.getUniforms();for(let Ye=0;Ye<ee;Ye++)Ii.setValue(F,"_gl_DrawID",Ye),$t.render(At[Ye]/an,Le[Ye])}else if(k.isInstancedMesh)$t.renderInstances(Kt,xe,k.count);else if(W.isInstancedBufferGeometry){const At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Le=Math.min(W.instanceCount,At);$t.renderInstances(Kt,xe,Le)}else $t.render(Kt,xe)};function ne(w,O,W){w.transparent===!0&&w.side===kn&&w.forceSinglePass===!1?(w.side=qe,w.needsUpdate=!0,lr(w,O,W),w.side=ri,w.needsUpdate=!0,lr(w,O,W),w.side=kn):lr(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),p=Zt.get(W),p.init(O),x.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==W&&w.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const tt=k.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const mt=tt[ct];ne(mt,W,k),X.add(mt)}else ne(tt,W,k),X.add(tt)}),x.pop(),p=null,X},this.compileAsync=function(w,O,W=null){const X=this.compile(w,O,W);return new Promise(k=>{function tt(){if(X.forEach(function(ct){Et.get(ct).currentProgram.isReady()&&X.delete(ct)}),X.size===0){k(w);return}setTimeout(tt,10)}qt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let on=null;function Rn(w){on&&on(w)}function Pl(){ci.stop()}function Il(){ci.start()}const ci=new gu;ci.setAnimationLoop(Rn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(w){on=w,q.setAnimationLoop(w),w===null?ci.stop():ci.start()},q.addEventListener("sessionstart",Pl),q.addEventListener("sessionend",Il),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,I),p=Zt.get(w,x.length),p.init(O),x.push(p),bt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(bt),ft=this.localClippingEnabled,et=it.init(this.clippingPlanes,ft),g=gt.get(w,v.length),g.init(),v.push(g),q.enabled===!0&&q.isPresenting===!0){const tt=y.xr.getDepthSensingMesh();tt!==null&&xo(tt,O,-1/0,y.sortObjects)}xo(w,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Z,st),Wt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Wt&&Rt.addToRenderList(g,w),this.info.render.frame++,et===!0&&it.beginShadows();const W=p.state.shadowsArray;_t.render(W,w,O),et===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,k=g.transmissive;if(p.setupLights(),O.isArrayCamera){const tt=O.cameras;if(k.length>0)for(let ct=0,mt=tt.length;ct<mt;ct++){const xt=tt[ct];Dl(X,k,w,xt)}Wt&&Rt.render(w);for(let ct=0,mt=tt.length;ct<mt;ct++){const xt=tt[ct];Ll(g,w,xt,xt.viewport)}}else k.length>0&&Dl(X,k,w,O),Wt&&Rt.render(w),Ll(g,w,O);I!==null&&R===0&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(y,w,O),ae.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],et===!0&&it.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function xo(w,O,W,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){X&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);const ct=K.update(w),mt=w.material;mt.visible&&g.push(w,ct,mt,W,Ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const ct=K.update(w),mt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ht.copy(ct.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(mt)){const xt=ct.groups;for(let Dt=0,Ft=xt.length;Dt<Ft;Dt++){const Tt=xt[Dt],Kt=mt[Tt.materialIndex];Kt&&Kt.visible&&g.push(w,ct,Kt,W,Ht.z,Tt)}}else mt.visible&&g.push(w,ct,mt,W,Ht.z,null)}}const tt=w.children;for(let ct=0,mt=tt.length;ct<mt;ct++)xo(tt[ct],O,W,X)}function Ll(w,O,W,X){const k=w.opaque,tt=w.transmissive,ct=w.transparent;p.setupLightsView(W),et===!0&&it.setGlobalState(y.clippingPlanes,W),X&&wt.viewport(P.copy(X)),k.length>0&&ar(k,O,W),tt.length>0&&ar(tt,O,W),ct.length>0&&ar(ct,O,W),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Dl(w,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ti(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Qs:Wn,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[X.id],ct=X.viewport||P;tt.setSize(ct.z*y.transmissionResolutionScale,ct.w*y.transmissionResolutionScale);const mt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(z),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),Wt&&Rt.render(W);const xt=y.toneMapping;y.toneMapping=si;const Dt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),et===!0&&it.setGlobalState(y.clippingPlanes,X),ar(w,W,X),C.updateMultisampleRenderTarget(tt),C.updateRenderTargetMipmap(tt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Tt=0,Kt=O.length;Tt<Kt;Tt++){const te=O[Tt],xe=te.object,ge=te.geometry,$t=te.material,At=te.group;if($t.side===kn&&xe.layers.test(X.layers)){const Le=$t.side;$t.side=qe,$t.needsUpdate=!0,Fl(xe,W,X,ge,$t,At),$t.side=Le,$t.needsUpdate=!0,Ft=!0}}Ft===!0&&(C.updateMultisampleRenderTarget(tt),C.updateRenderTargetMipmap(tt))}y.setRenderTarget(mt),y.setClearColor(z,B),Dt!==void 0&&(X.viewport=Dt),y.toneMapping=xt}function ar(w,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let k=0,tt=w.length;k<tt;k++){const ct=w[k],mt=ct.object,xt=ct.geometry,Dt=X===null?ct.material:X,Ft=ct.group;mt.layers.test(W.layers)&&Fl(mt,O,W,xt,Dt,Ft)}}function Fl(w,O,W,X,k,tt){w.onBeforeRender(y,O,W,X,k,tt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(y,O,W,X,w,tt),k.transparent===!0&&k.side===kn&&k.forceSinglePass===!1?(k.side=qe,k.needsUpdate=!0,y.renderBufferDirect(W,O,X,k,w,tt),k.side=ri,k.needsUpdate=!0,y.renderBufferDirect(W,O,X,k,w,tt),k.side=kn):y.renderBufferDirect(W,O,X,k,w,tt),w.onAfterRender(y,O,W,X,k,tt)}function lr(w,O,W){O.isScene!==!0&&(O=oe);const X=Et.get(w),k=p.state.lights,tt=p.state.shadowsArray,ct=k.state.version,mt=Mt.getParameters(w,k.state,tt,O,W),xt=Mt.getProgramCacheKey(mt);let Dt=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",Ot),Dt=new Map,X.programs=Dt);let Ft=Dt.get(xt);if(Ft!==void 0){if(X.currentProgram===Ft&&X.lightsStateVersion===ct)return Ul(w,mt),Ft}else mt.uniforms=Mt.getUniforms(w),w.onBeforeCompile(mt,y),Ft=Mt.acquireProgram(mt,xt),Dt.set(xt,Ft),X.uniforms=mt.uniforms;const Tt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=it.uniform),Ul(w,mt),X.needsLights=Yu(w),X.lightsStateVersion=ct,X.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.directionalShadowMap.value=k.state.directionalShadowMap,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotShadowMap.value=k.state.spotShadowMap,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMap.value=k.state.pointShadowMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ft,X.uniformsList=null,Ft}function Nl(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Kr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Ul(w,O){const W=Et.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Xu(w,O,W,X,k){O.isScene!==!0&&(O=oe),C.resetTextureUnits();const tt=O.fog,ct=X.isMeshStandardMaterial?O.environment:null,mt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fs,xt=(X.isMeshStandardMaterial?G:E).get(X.envMap||ct),Dt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ft=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Tt=!!W.morphAttributes.position,Kt=!!W.morphAttributes.normal,te=!!W.morphAttributes.color;let xe=si;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xe=y.toneMapping);const ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$t=ge!==void 0?ge.length:0,At=Et.get(X),Le=p.state.lights;if(et===!0&&(ft===!0||w!==S)){const Oe=w===S&&X.id===T;it.setState(X,w,Oe)}let ee=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Le.state.version||At.outputColorSpace!==mt||k.isBatchedMesh&&At.batching===!1||!k.isBatchedMesh&&At.batching===!0||k.isBatchedMesh&&At.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&At.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&At.instancing===!1||!k.isInstancedMesh&&At.instancing===!0||k.isSkinnedMesh&&At.skinning===!1||!k.isSkinnedMesh&&At.skinning===!0||k.isInstancedMesh&&At.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&At.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&At.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&At.instancingMorph===!1&&k.morphTexture!==null||At.envMap!==xt||X.fog===!0&&At.fog!==tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==it.numPlanes||At.numIntersection!==it.numIntersection)||At.vertexAlphas!==Dt||At.vertexTangents!==Ft||At.morphTargets!==Tt||At.morphNormals!==Kt||At.morphColors!==te||At.toneMapping!==xe||At.morphTargetsCount!==$t)&&(ee=!0):(ee=!0,At.__version=X.version);let an=At.currentProgram;ee===!0&&(an=lr(X,O,k));let Ii=!1,Ye=!1,Ts=!1;const fe=an.getUniforms(),tn=At.uniforms;if(wt.useProgram(an.program)&&(Ii=!0,Ye=!0,Ts=!0),X.id!==T&&(T=X.id,Ye=!0),Ii||S!==w){wt.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),rf(rt),of(rt),fe.setValue(F,"projectionMatrix",rt)):fe.setValue(F,"projectionMatrix",w.projectionMatrix),fe.setValue(F,"viewMatrix",w.matrixWorldInverse);const He=fe.map.cameraPosition;He!==void 0&&He.setValue(F,Ct.setFromMatrixPosition(w.matrixWorld)),Yt.logarithmicDepthBuffer&&fe.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&fe.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Ye=!0,Ts=!0)}if(k.isSkinnedMesh){fe.setOptional(F,k,"bindMatrix"),fe.setOptional(F,k,"bindMatrixInverse");const Oe=k.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),fe.setValue(F,"boneTexture",Oe.boneTexture,C))}k.isBatchedMesh&&(fe.setOptional(F,k,"batchingTexture"),fe.setValue(F,"batchingTexture",k._matricesTexture,C),fe.setOptional(F,k,"batchingIdTexture"),fe.setValue(F,"batchingIdTexture",k._indirectTexture,C),fe.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&fe.setValue(F,"batchingColorTexture",k._colorsTexture,C));const en=W.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Lt.update(k,W,an),(Ye||At.receiveShadow!==k.receiveShadow)&&(At.receiveShadow=k.receiveShadow,fe.setValue(F,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(tn.envMap.value=xt,tn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(tn.envMapIntensity.value=O.environmentIntensity),Ye&&(fe.setValue(F,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&qu(tn,Ts),tt&&X.fog===!0&&ht.refreshFogUniforms(tn,tt),ht.refreshMaterialUniforms(tn,X,V,Y,p.state.transmissionRenderTarget[w.id]),Kr.upload(F,Nl(At),tn,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Kr.upload(F,Nl(At),tn,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&fe.setValue(F,"center",k.center),fe.setValue(F,"modelViewMatrix",k.modelViewMatrix),fe.setValue(F,"normalMatrix",k.normalMatrix),fe.setValue(F,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Oe=X.uniformsGroups;for(let He=0,yo=Oe.length;He<yo;He++){const hi=Oe[He];U.update(hi,an),U.bind(hi,an)}}return an}function qu(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Yu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,O,W){Et.get(w.texture).__webglTexture=O,Et.get(w.depthTexture).__webglTexture=W;const X=Et.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const W=Et.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const ju=F.createFramebuffer();this.setRenderTarget=function(w,O=0,W=0){I=w,b=O,R=W;let X=!0,k=null,tt=!1,ct=!1;if(w){const xt=Et.get(w);if(xt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(xt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(xt.__hasExternalTextures)C.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Tt=w.depthTexture;if(xt.__boundDepthTexture!==Tt){if(Tt!==null&&Et.has(Tt)&&(w.width!==Tt.image.width||w.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ct=!0);const Ft=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?k=Ft[O][W]:k=Ft[O],tt=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?k=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[W]:k=Ft,P.copy(w.viewport),H.copy(w.scissor),L=w.scissorTest}else P.copy(at).multiplyScalar(V).floor(),H.copy(nt).multiplyScalar(V).floor(),L=Ut;if(W!==0&&(k=ju),wt.bindFramebuffer(F.FRAMEBUFFER,k)&&X&&wt.drawBuffers(w,k),wt.viewport(P),wt.scissor(H),wt.setScissorTest(L),tt){const xt=Et.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,W)}else if(ct){const xt=Et.get(w.texture),Dt=O;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,xt.__webglTexture,W,Dt)}else if(w!==null&&W!==0){const xt=Et.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xt.__webglTexture,W)}T=-1},this.readRenderTargetPixels=function(w,O,W,X,k,tt,ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){wt.bindFramebuffer(F.FRAMEBUFFER,mt);try{const xt=w.texture,Dt=xt.format,Ft=xt.type;if(!Yt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&W>=0&&W<=w.height-k&&F.readPixels(O,W,X,k,Bt.convert(Dt),Bt.convert(Ft),tt)}finally{const xt=I!==null?Et.get(I).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,X,k,tt,ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){const xt=w.texture,Dt=xt.format,Ft=xt.type;if(!Yt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-X&&W>=0&&W<=w.height-k){wt.bindFramebuffer(F.FRAMEBUFFER,mt);const Tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.bufferData(F.PIXEL_PACK_BUFFER,tt.byteLength,F.STREAM_READ),F.readPixels(O,W,X,k,Bt.convert(Dt),Bt.convert(Ft),0);const Kt=I!==null?Et.get(I).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,Kt);const te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await sf(F,te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,tt),F.deleteBuffer(Tt),F.deleteSync(te),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,W=0){w.isTexture!==!0&&($i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),k=Math.floor(w.image.width*X),tt=Math.floor(w.image.height*X),ct=O!==null?O.x:0,mt=O!==null?O.y:0;C.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,ct,mt,k,tt),wt.unbindTexture()};const Zu=F.createFramebuffer(),Ku=F.createFramebuffer();this.copyTextureToTexture=function(w,O,W=null,X=null,k=0,tt=null){w.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],O=arguments[2],tt=arguments[3]||0,W=null),tt===null&&(k!==0?($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=k,k=0):tt=0);let ct,mt,xt,Dt,Ft,Tt,Kt,te,xe;const ge=w.isCompressedTexture?w.mipmaps[tt]:w.image;if(W!==null)ct=W.max.x-W.min.x,mt=W.max.y-W.min.y,xt=W.isBox3?W.max.z-W.min.z:1,Dt=W.min.x,Ft=W.min.y,Tt=W.isBox3?W.min.z:0;else{const en=Math.pow(2,-k);ct=Math.floor(ge.width*en),mt=Math.floor(ge.height*en),w.isDataArrayTexture?xt=ge.depth:w.isData3DTexture?xt=Math.floor(ge.depth*en):xt=1,Dt=0,Ft=0,Tt=0}X!==null?(Kt=X.x,te=X.y,xe=X.z):(Kt=0,te=0,xe=0);const $t=Bt.convert(O.format),At=Bt.convert(O.type);let Le;O.isData3DTexture?(C.setTexture3D(O,0),Le=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Le=F.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Le=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const ee=F.getParameter(F.UNPACK_ROW_LENGTH),an=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ii=F.getParameter(F.UNPACK_SKIP_PIXELS),Ye=F.getParameter(F.UNPACK_SKIP_ROWS),Ts=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Dt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ft),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Tt);const fe=w.isDataArrayTexture||w.isData3DTexture,tn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const en=Et.get(w),Oe=Et.get(O),He=Et.get(en.__renderTarget),yo=Et.get(Oe.__renderTarget);wt.bindFramebuffer(F.READ_FRAMEBUFFER,He.__webglFramebuffer),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,yo.__webglFramebuffer);for(let hi=0;hi<xt;hi++)fe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,k,Tt+hi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(O).__webglTexture,tt,xe+hi)),F.blitFramebuffer(Dt,Ft,ct,mt,Kt,te,ct,mt,F.DEPTH_BUFFER_BIT,F.NEAREST);wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||Et.has(w)){const en=Et.get(w),Oe=Et.get(O);wt.bindFramebuffer(F.READ_FRAMEBUFFER,Zu),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ku);for(let He=0;He<xt;He++)fe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,k,Tt+He):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,k),tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.__webglTexture,tt,xe+He):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,tt),k!==0?F.blitFramebuffer(Dt,Ft,ct,mt,Kt,te,ct,mt,F.COLOR_BUFFER_BIT,F.NEAREST):tn?F.copyTexSubImage3D(Le,tt,Kt,te,xe+He,Dt,Ft,ct,mt):F.copyTexSubImage2D(Le,tt,Kt,te,Dt,Ft,ct,mt);wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Le,tt,Kt,te,xe,ct,mt,xt,$t,At,ge.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Le,tt,Kt,te,xe,ct,mt,xt,$t,ge.data):F.texSubImage3D(Le,tt,Kt,te,xe,ct,mt,xt,$t,At,ge):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,tt,Kt,te,ct,mt,$t,At,ge.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,tt,Kt,te,ge.width,ge.height,$t,ge.data):F.texSubImage2D(F.TEXTURE_2D,tt,Kt,te,ct,mt,$t,At,ge);F.pixelStorei(F.UNPACK_ROW_LENGTH,ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,an),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ii),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ts),tt===0&&O.generateMipmaps&&F.generateMipmap(Le),wt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,W=null,X=null,k=0){return w.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],O=arguments[3],k=arguments[4]||0),$i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,W,X,k)},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),wt.unbindTexture()},this.resetState=function(){b=0,R=0,I=null,wt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}class gn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new gn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],m=n[8],_=i[0],g=i[1],p=i[2],v=i[3],x=i[4],y=i[5],A=i[6],b=i[7],R=i[8];return s[0]=o*_+a*v+l*A,s[1]=o*g+a*x+l*b,s[2]=o*p+a*y+l*R,s[3]=c*_+h*v+d*A,s[4]=c*g+h*x+d*b,s[5]=c*p+h*y+d*R,s[6]=u*_+f*v+m*A,s[7]=u*g+f*x+m*b,s[8]=u*p+f*y+m*R,e}scale(t,e){e===void 0&&(e=new gn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new gn);const e=3,n=6,i=vv;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,m=i*l,_=s*o,g=s*a,p=s*l,v=this.elements;return v[3*0+0]=1-(u+m),v[3*0+1]=h-p,v[3*0+2]=d+g,v[3*1+0]=h+p,v[3*1+1]=1-(c+m),v[3*1+2]=f-_,v[3*2+0]=d-g,v[3*2+1]=f+_,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new gn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const vv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new gn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=xv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=yv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(eh),eh.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const xv=new M,yv=new M,eh=new M;class Je{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,nh),c=nh),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Je().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=ih,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=ih,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(m<0||f>m)}}const nh=new M,ih=[new M,new M,new M,new M,new M,new M,new M,new M];class sh{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Mu{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class _e{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Mv,i=Sv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new _e);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new _e);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new _e),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new _e(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new _e);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,m,_,g;return f=i*l+s*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),m=Math.sin(u),_=Math.sin((1-e)*u)/m,g=Math.sin(e*u)/m):(_=1-e,g=e),n.x=_*i+g*l,n.y=_*s+g*c,n.z=_*o+g*h,n.w=_*a+g*d,n}integrate(t,e,n,i){i===void 0&&(i=new _e);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*c),i.y+=u*(o*d+a*l-s*h),i.z+=u*(a*d+s*c-o*l),i.w+=u*(-s*l-o*c-a*h),i}}const Mv=new M,Sv=new M,Ev={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class yt{constructor(t){t===void 0&&(t={}),this.id=yt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}yt.idCounter=0;yt.types=Ev;class Jt{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new _e,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Jt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Jt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(rh),rh.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const rh=new _e;class ks extends yt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:yt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];ks.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new M,o=new M;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=m)}const f=[];for(let m=0;m<n.faces[d].length;m++){const _=n.vertices[n.faces[d][m]],g=new M;g.copy(_),s.vmult(g,g),i.vadd(g,g),f.push(g)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new M,h=new M,d=new M,u=new M,f=new M,m=new M;let _=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],c);const v=g.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const p=a?a.length:g.faces.length;for(let v=0;v<p;v++){const x=a?a[v]:v;c.copy(g.faceNormals[x]),n.vmult(c,c);const y=g.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<_&&(_=y,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const v=g.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}else{const p=l?l.length:t.faces.length;for(let v=0;v<p;v++){const x=l?l[v]:v;h.copy(t.faceNormals[x]),s.vmult(h,h);const y=g.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<_&&(_=y,o.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],f),u.cross(f,m),!m.almostZero()){m.normalize();const x=g.testSepAxis(m,t,e,n,i,s);if(x===!1)return!1;x<_&&(_=x,o.copy(m))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;ks.project(a,t,n,i,na),ks.project(e,t,s,o,ia);const l=na[0],c=na[1],h=ia[0],d=ia[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new M,c=new M,h=new M,d=new M,u=new M,f=new M,m=new M,_=new M,g=this,p=[],v=i,x=p;let y=-1,A=Number.MAX_VALUE;for(let S=0;S<g.faces.length;S++){l.copy(g.faceNormals[S]),n.vmult(l,l);const P=l.dot(t);P<A&&(A=P,y=S)}if(y<0)return;const b=g.faces[y];b.connectedFaces=[];for(let S=0;S<g.faces.length;S++)for(let P=0;P<g.faces[S].length;P++)b.indexOf(g.faces[S][P])!==-1&&S!==y&&b.connectedFaces.indexOf(S)===-1&&b.connectedFaces.push(S);const R=b.length;for(let S=0;S<R;S++){const P=g.vertices[b[S]],H=g.vertices[b[(S+1)%R]];P.vsub(H,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(P),n.vmult(f,f),e.vadd(f,f);const L=b.connectedFaces[S];m.copy(this.faceNormals[L]);const z=this.getPlaneConstantOfFace(L);_.copy(m),n.vmult(_,_);const B=z-_.dot(e);for(this.clipFaceAgainstPlane(v,x,_,B);v.length;)v.shift();for(;x.length;)v.push(x.shift())}m.copy(this.faceNormals[y]);const I=this.getPlaneConstantOfFace(y);_.copy(m),n.vmult(_,_);const T=I-_.dot(e);for(let S=0;S<v.length;S++){let P=_.dot(v[S])+T;if(P<=s&&(console.log(`clamped: depth=${P} to minDist=${s}`),P=s),P<=o){const H=v[S];if(P<=1e-6){const L={point:H,normal:_,depth:P};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const d=new M;d.copy(c),e.push(d)}else{const d=new M;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new M;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,d,u=new M;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const m=u;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=e[n[a][0]],h=new M;t.vsub(c,h);const d=l.dot(h),u=new M;o.vsub(c,u);const f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return s?1:-1}static project(t,e,n,i,s){const o=t.vertices.length,a=wv;let l=0,c=0;const h=Tv,d=t.vertices;h.setZero(),Jt.vectorToLocalFrame(n,i,e,a),Jt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const m=d[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const na=[],ia=[];new M;const wv=new M,Tv=new M;class Pi extends yt{constructor(t){super({type:yt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new ks({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),Pi.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Jn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Jn,Jn),t.vadd(Jn,Jn),n(Jn.x,Jn.y,Jn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;xn[0].set(s.x,s.y,s.z),xn[1].set(-s.x,s.y,s.z),xn[2].set(-s.x,-s.y,s.z),xn[3].set(-s.x,-s.y,-s.z),xn[4].set(s.x,-s.y,-s.z),xn[5].set(s.x,s.y,-s.z),xn[6].set(-s.x,s.y,-s.z),xn[7].set(s.x,-s.y,s.z);const o=xn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=xn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Jn=new M,xn=[new M,new M,new M,new M,new M,new M,new M,new M],Ml={DYNAMIC:1,STATIC:2,KINEMATIC:4},Sl={AWAKE:0,SLEEPY:1,SLEEPING:2};class pt extends Mu{constructor(t){t===void 0&&(t={}),super(),this.id=pt.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?pt.STATIC:pt.DYNAMIC,typeof t.type==typeof pt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=pt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new _e,this.initQuaternion=new _e,this.previousQuaternion=new _e,this.interpolatedQuaternion=new _e,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new gn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new gn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Je,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=pt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===pt.SLEEPING&&this.dispatchEvent(pt.wakeupEvent)}sleep(){this.sleepState=pt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===pt.AWAKE&&n<i?(this.sleepState=pt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(pt.sleepyEvent)):e===pt.SLEEPY&&n>i?this.wakeUp():e===pt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pt.SLEEPING||this.type===pt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new _e;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=bv,o=Av,a=this.quaternion,l=this.aabb,c=Rv;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Cv,i=Pv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=Lv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==pt.DYNAMIC)return;const n=Dv,i=Fv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===pt.DYNAMIC&&(this.sleepState===pt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=e,i=Nv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Uv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==pt.DYNAMIC)return;const n=Ov,i=Bv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=zv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Pi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pt.DYNAMIC||this.type===pt.KINEMATIC)||this.sleepState===pt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const m=d.elements,_=this.angularFactor,g=l.x*_.x,p=l.y*_.y,v=l.z*_.z;s.x+=t*(m[0]*g+m[1]*p+m[2]*v),s.y+=t*(m[3]*g+m[4]*p+m[5]*v),s.z+=t*(m[6]*g+m[7]*p+m[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pt.idCounter=0;pt.COLLIDE_EVENT_NAME="collide";pt.DYNAMIC=Ml.DYNAMIC;pt.STATIC=Ml.STATIC;pt.KINEMATIC=Ml.KINEMATIC;pt.AWAKE=Sl.AWAKE;pt.SLEEPY=Sl.SLEEPY;pt.SLEEPING=Sl.SLEEPING;pt.wakeupEvent={type:"wakeup"};pt.sleepyEvent={type:"sleepy"};pt.sleepEvent={type:"sleep"};const bv=new M,Av=new _e,Rv=new Je,Cv=new gn,Pv=new gn,Iv=new gn,Lv=new M,Dv=new M,Fv=new M,Nv=new M,Uv=new M,Ov=new M,Bv=new M,zv=new M;class kv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&pt.STATIC||t.sleepState===pt.SLEEPING)&&(e.type&pt.STATIC||e.sleepState===pt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Vv;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Hv,i=Gv,s=Wv,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Vv=new M;new M;new _e;new M;const Hv={keys:[]},Gv=[],Wv=[];new M;new M;new M;class Xv extends kv{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class $s{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Su,Eu,wu,Tu,bu,Au,Ru;const El={CLOSEST:1,ANY:2,ALL:4};Su=yt.types.SPHERE;Eu=yt.types.PLANE;wu=yt.types.BOX;Tu=yt.types.CYLINDER;bu=yt.types.CONVEXPOLYHEDRON;Au=yt.types.HEIGHTFIELD;Ru=yt.types.TRIMESH;class Me{get[Su](){return this._intersectSphere}get[Eu](){return this._intersectPlane}get[wu](){return this._intersectBox}get[Tu](){return this._intersectConvex}get[bu](){return this._intersectConvex}get[Au](){return this._intersectHeightfield}get[Ru](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Me.ANY,this.result=new $s,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Me.ANY,this.result=e.result||new $s,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(oh),sa.length=0,t.broadphase.aabbQuery(t,oh,sa),this.intersectBodies(sa),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=qv,s=Yv;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(ax(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new M,_=new M,g=new M;o.vsub(n,m);const p=-c.dot(m)/f;l.scale(p,_),o.vadd(_,g),this.reportIntersection(c,g,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=jv;o.from.copy(this.from),o.to.copy(this.to),Jt.pointToLocalFrame(n,e,o.from,o.from),Jt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Zv;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Je;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,m,!1),Jt.pointToWorldFrame(n,e,t.pillarOffset,Ur),this._intersectConvex(t.pillarConvex,e,Ur,i,s,ah),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),Jt.pointToWorldFrame(n,e,t.pillarOffset,Ur),this._intersectConvex(t.pillarConvex,e,Ur,i,s,ah)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=Kv,m=$v;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const _=(-h-Math.sqrt(u))/(2*c),g=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Jv,l=lh,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,m=this.from,_=this.to,g=m.distanceTo(_),p=c?c.length:h.length,v=this.result;for(let x=0;!v.shouldStop&&x<p;x++){const y=c?c[x]:x,A=h[y],b=u[y],R=e,I=n;l.copy(d[A[0]]),R.vmult(l,l),l.vadd(I,l),l.vsub(m,l),R.vmult(b,a);const T=f.dot(a);if(Math.abs(T)<this.precision)continue;const S=a.dot(l)/T;if(!(S<0)){f.scale(S,Ge),Ge.vadd(m,Ge),un.copy(d[A[0]]),R.vmult(un,un),I.vadd(un,un);for(let P=1;!v.shouldStop&&P<A.length-1;P++){yn.copy(d[A[P]]),Mn.copy(d[A[P+1]]),R.vmult(yn,yn),R.vmult(Mn,Mn),I.vadd(yn,yn),I.vadd(Mn,Mn);const H=Ge.distanceTo(m);!(Me.pointInTriangle(Ge,un,yn,Mn)||Me.pointInTriangle(Ge,yn,un,Mn))||H>g||this.reportIntersection(a,Ge,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Qv,l=rx,c=ox,h=lh,d=tx,u=ex,f=nx,m=sx,_=ix,g=t.indices;t.vertices;const p=this.from,v=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(e),Jt.vectorToLocalFrame(n,e,x,d),Jt.pointToLocalFrame(n,e,p,u),Jt.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const y=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let A=0,b=l.length;!this.result.shouldStop&&A!==b;A++){const R=l[A];t.getNormal(R,a),t.getVertex(g[R*3],un),un.vsub(u,h);const I=d.dot(a),T=a.dot(h)/I;if(T<0)continue;d.scale(T,Ge),Ge.vadd(u,Ge),t.getVertex(g[R*3+1],yn),t.getVertex(g[R*3+2],Mn);const S=Ge.distanceSquared(u);!(Me.pointInTriangle(Ge,yn,un,Mn)||Me.pointInTriangle(Ge,un,yn,Mn))||S>y||(Jt.vectorToWorldFrame(e,a,_),Jt.pointToWorldFrame(n,e,Ge,m),this.reportIntersection(_,m,s,i,R))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Me.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Me.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case Me.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Mi),n.vsub(e,Ls),t.vsub(e,ra);const s=Mi.dot(Mi),o=Mi.dot(Ls),a=Mi.dot(ra),l=Ls.dot(Ls),c=Ls.dot(ra);let h,d;return(h=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&h+d<s*l-o*o}}Me.CLOSEST=El.CLOSEST;Me.ANY=El.ANY;Me.ALL=El.ALL;const oh=new Je,sa=[],Ls=new M,ra=new M,qv=new M,Yv=new _e,Ge=new M,un=new M,yn=new M,Mn=new M;new M;new $s;const ah={faceList:[0]},Ur=new M,jv=new Me,Zv=[],Kv=new M,$v=new M,Jv=new M;new M;new M;const lh=new M,Qv=new M,tx=new M,ex=new M,nx=new M,ix=new M,sx=new M;new Je;const rx=[],ox=new Jt,Mi=new M,Or=new M;function ax(r,t,e){e.vsub(r,Mi);const n=Mi.dot(t);return t.scale(n,Or),Or.vadd(r,Or),e.distanceTo(Or)}class Cu{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class ch{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class tr{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=tr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ch,this.jacobianElementB=new ch,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,hh),a.scale(h,uh),n.invInertiaWorldSolve.vmult(o,dh),i.invInertiaWorldSolve.vmult(l,fh),t.multiplyVectors(hh,dh)+e.multiplyVectors(uh,fh)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,Br),c+=Br.dot(t.rotational),l.vmult(e.rotational,Br),c+=Br.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=lx;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}tr.idCounter=0;const hh=new M,uh=new M,dh=new M,fh=new M,Br=new M,lx=new M;class cx extends tr{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=hx,c=ux,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=dx,_=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),g.spatial.copy(p),g.rotational.copy(c),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const v=p.dot(m),x=this.restitution+1,y=x*u.dot(p)-x*h.dot(p)+f.dot(c)-d.dot(l),A=this.computeGiMf();return-v*e-y*n-t*A}getImpactVelocityAlongNormal(){const t=fx,e=px,n=mx,i=gx,s=_x;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const hx=new M,ux=new M,dx=new M,fx=new M,px=new M,mx=new M,gx=new M,_x=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class ph extends tr{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=vx,o=xx,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const vx=new M,xx=new M;class _o{constructor(t,e,n){n=Cu.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=_o.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}_o.idCounter=0;class Ss{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Ss.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Ss.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class yx{constructor(t){t===void 0&&(t={}),t=Cu.defaults(t,{chassisConnectionPointLocal:new M,chassisConnectionPointWorld:new M,directionLocal:new M,directionWorld:new M,axleLocal:new M,axleWorld:new M,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:10.5,forwardAcceleration:1,sideAcceleration:1,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,slipInfo:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=t.maxSuspensionTravel,this.customSlidingRotationalSpeed=t.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=t.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=t.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=t.chassisConnectionPointWorld.clone(),this.directionLocal=t.directionLocal.clone(),this.directionWorld=t.directionWorld.clone(),this.axleLocal=t.axleLocal.clone(),this.axleWorld=t.axleWorld.clone(),this.suspensionRestLength=t.suspensionRestLength,this.suspensionMaxLength=t.suspensionMaxLength,this.radius=t.radius,this.suspensionStiffness=t.suspensionStiffness,this.dampingCompression=t.dampingCompression,this.dampingRelaxation=t.dampingRelaxation,this.frictionSlip=t.frictionSlip,this.forwardAcceleration=t.forwardAcceleration,this.sideAcceleration=t.sideAcceleration,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=t.rollInfluence,this.maxSuspensionForce=t.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=t.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.slipInfo=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new $s,this.worldTransform=new Jt,this.isInContact=!1}updateWheel(t){const e=this.raycastResult;if(this.isInContact){const n=e.hitNormalWorld.dot(e.directionWorld);e.hitPointWorld.vsub(t.position,gh),t.getVelocityAtWorldPoint(gh,mh);const i=e.hitNormalWorld.dot(mh);if(n>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{const s=-1/n;this.suspensionRelativeVelocity=i*s,this.clippedInvContactDotSuspension=s}}else e.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,e.directionWorld.scale(-1,e.hitNormalWorld),this.clippedInvContactDotSuspension=1}}const mh=new M,gh=new M;class Mx{constructor(t){this.chassisBody=t.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof t.indexRightAxis<"u"?t.indexRightAxis:2,this.indexForwardAxis=typeof t.indexForwardAxis<"u"?t.indexForwardAxis:0,this.indexUpAxis=typeof t.indexUpAxis<"u"?t.indexUpAxis:1,this.constraints=[],this.preStepCallback=()=>{},this.currentVehicleSpeedKmHour=0,this.numWheelsOnGround=0}addWheel(t){t===void 0&&(t={});const e=new yx(t),n=this.wheelInfos.length;return this.wheelInfos.push(e),n}setSteeringValue(t,e){const n=this.wheelInfos[e];n.steering=t}applyEngineForce(t,e){this.wheelInfos[e].engineForce=t}setBrake(t,e){this.wheelInfos[e].brake=t}addToWorld(t){t.addBody(this.chassisBody);const e=this;this.preStepCallback=()=>{e.updateVehicle(t.dt)},t.addEventListener("preStep",this.preStepCallback),this.world=t}getVehicleAxisWorld(t,e){e.set(t===0?1:0,t===1?1:0,t===2?1:0),this.chassisBody.vectorToWorldFrame(e,e)}updateVehicle(t){const e=this.wheelInfos,n=e.length,i=this.chassisBody;for(let d=0;d<n;d++)this.updateWheelTransform(d);this.currentVehicleSpeedKmHour=3.6*i.velocity.length();const s=new M;this.getVehicleAxisWorld(this.indexForwardAxis,s),s.dot(i.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(let d=0;d<n;d++)this.castRay(e[d]);this.updateSuspension(t);const o=new M,a=new M;for(let d=0;d<n;d++){const u=e[d];let f=u.suspensionForce;f>u.maxSuspensionForce&&(f=u.maxSuspensionForce),u.raycastResult.hitNormalWorld.scale(f*t,o),u.raycastResult.hitPointWorld.vsub(i.position,a),i.applyImpulse(o,a)}this.updateFriction(t);const l=new M,c=new M,h=new M;for(let d=0;d<n;d++){const u=e[d];i.getVelocityAtWorldPoint(u.chassisConnectionPointWorld,h);let f=1;switch(this.indexUpAxis){case 1:f=-1;break}if(u.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,c);const m=c.dot(u.raycastResult.hitNormalWorld);u.raycastResult.hitNormalWorld.scale(m,l),c.vsub(l,c);const _=c.dot(h);u.deltaRotation=f*_*t/u.radius}(u.sliding||!u.isInContact)&&u.engineForce!==0&&u.useCustomSlidingRotationalSpeed&&(u.deltaRotation=(u.engineForce>0?1:-1)*u.customSlidingRotationalSpeed*t),Math.abs(u.brake)>Math.abs(u.engineForce)&&(u.deltaRotation=0),u.rotation+=u.deltaRotation,u.deltaRotation*=.99}}updateSuspension(t){const n=this.chassisBody.mass,i=this.wheelInfos,s=i.length;for(let o=0;o<s;o++){const a=i[o];if(a.isInContact){let l;const c=a.suspensionRestLength,h=a.suspensionLength,d=c-h;l=a.suspensionStiffness*d*a.clippedInvContactDotSuspension;const u=a.suspensionRelativeVelocity;let f;u<0?f=a.dampingCompression:f=a.dampingRelaxation,l-=f*u,a.suspensionForce=l*n,a.suspensionForce<0&&(a.suspensionForce=0)}else a.suspensionForce=0}}removeFromWorld(t){this.constraints,t.removeBody(this.chassisBody),t.removeEventListener("preStep",this.preStepCallback),this.world=null}castRay(t){const e=Tx,n=bx;this.updateWheelTransformWorld(t);const i=this.chassisBody;let s=-1;const o=t.suspensionRestLength+t.radius;t.directionWorld.scale(o,e);const a=t.chassisConnectionPointWorld;a.vadd(e,n);const l=t.raycastResult;l.reset();const c=i.collisionResponse;i.collisionResponse=!1,this.world.rayTest(a,n,l),i.collisionResponse=c;const h=l.body;if(t.raycastResult.groundObject=0,h){s=l.distance,t.raycastResult.hitNormalWorld=l.hitNormalWorld,t.isInContact=!0;const d=l.distance;t.suspensionLength=d-t.radius;const u=t.suspensionRestLength-t.maxSuspensionTravel,f=t.suspensionRestLength+t.maxSuspensionTravel;t.suspensionLength<u&&(t.suspensionLength=u),t.suspensionLength>f&&(t.suspensionLength=f,t.raycastResult.reset());const m=t.raycastResult.hitNormalWorld.dot(t.directionWorld),_=new M;i.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld,_);const g=t.raycastResult.hitNormalWorld.dot(_);if(m>=-.1)t.suspensionRelativeVelocity=0,t.clippedInvContactDotSuspension=1/.1;else{const p=-1/m;t.suspensionRelativeVelocity=g*p,t.clippedInvContactDotSuspension=p}}else t.suspensionLength=t.suspensionRestLength+0*t.maxSuspensionTravel,t.suspensionRelativeVelocity=0,t.directionWorld.scale(-1,t.raycastResult.hitNormalWorld),t.clippedInvContactDotSuspension=1;return s}updateWheelTransformWorld(t){t.isInContact=!1;const e=this.chassisBody;e.pointToWorldFrame(t.chassisConnectionPointLocal,t.chassisConnectionPointWorld),e.vectorToWorldFrame(t.directionLocal,t.directionWorld),e.vectorToWorldFrame(t.axleLocal,t.axleWorld)}updateWheelTransform(t){const e=Sx,n=Ex,i=wx,s=this.wheelInfos[t];this.updateWheelTransformWorld(s),s.directionLocal.scale(-1,e),n.copy(s.axleLocal),e.cross(n,i),i.normalize(),n.normalize();const o=s.steering,a=new _e;a.setFromAxisAngle(e,o);const l=new _e;l.setFromAxisAngle(n,s.rotation);const c=s.worldTransform.quaternion;this.chassisBody.quaternion.mult(a,c),c.mult(l,c),c.normalize();const h=s.worldTransform.position;h.copy(s.directionWorld),h.scale(s.suspensionLength,h),h.vadd(s.chassisConnectionPointWorld,h)}getWheelTransformWorld(t){return this.wheelInfos[t].worldTransform}updateFriction(t){const e=Rx,n=this.wheelInfos,i=n.length,s=this.chassisBody,o=Px,a=Cx;this.numWheelsOnGround=0;for(let h=0;h<i;h++){const d=n[h];d.raycastResult.body&&this.numWheelsOnGround++,d.sideImpulse=0,d.forwardImpulse=0,o[h]||(o[h]=new M),a[h]||(a[h]=new M)}for(let h=0;h<i;h++){const d=n[h],u=d.raycastResult.body;if(u){const f=a[h];this.getWheelTransformWorld(h).vectorToWorldFrame(Ax[this.indexRightAxis],f);const _=d.raycastResult.hitNormalWorld,g=f.dot(_);_.scale(g,e),f.vsub(e,f),f.normalize(),_.cross(f,o[h]),o[h].normalize(),d.sideImpulse=Gx(s,d.raycastResult.hitPointWorld,u,d.raycastResult.hitPointWorld,f),d.sideImpulse*=Ix}}const l=1,c=.5;this.sliding=!1;for(let h=0;h<i;h++){const d=n[h],u=d.raycastResult.body;let f=0;if(d.slipInfo=1,u){const _=d.brake?d.brake:0;f=Nx(s,u,d.raycastResult.hitPointWorld,o[h],_),f+=d.engineForce*t;const g=_/f;d.slipInfo*=g}if(d.forwardImpulse=0,d.skidInfo=1,u){d.skidInfo=1;const m=d.suspensionForce*t*d.frictionSlip,g=m*m;d.forwardImpulse=f;const p=d.forwardImpulse*c/d.forwardAcceleration,v=d.sideImpulse*l/d.sideAcceleration,x=p*p+v*v;if(d.sliding=!1,x>g){this.sliding=!0,d.sliding=!0;const y=m/Math.sqrt(x);d.skidInfo*=y}}}if(this.sliding)for(let h=0;h<i;h++){const d=n[h];d.sideImpulse!==0&&d.skidInfo<1&&(d.forwardImpulse*=d.skidInfo,d.sideImpulse*=d.skidInfo)}for(let h=0;h<i;h++){const d=n[h],u=new M;if(d.raycastResult.hitPointWorld.vsub(s.position,u),d.forwardImpulse!==0){const f=new M;o[h].scale(d.forwardImpulse,f),s.applyImpulse(f,u)}if(d.sideImpulse!==0){const f=d.raycastResult.body,m=new M;d.raycastResult.hitPointWorld.vsub(f.position,m);const _=new M;a[h].scale(d.sideImpulse,_),s.vectorToLocalFrame(u,u),u["xyz"[this.indexUpAxis]]*=d.rollInfluence,s.vectorToWorldFrame(u,u),s.applyImpulse(_,u),_.scale(-1,_),f.applyImpulse(_,m)}}}}new M;new M;new M;const Sx=new M,Ex=new M,wx=new M;new Me;new M;const Tx=new M,bx=new M,Ax=[new M(1,0,0),new M(0,1,0),new M(0,0,1)],Rx=new M,Cx=[],Px=[],Ix=1,Lx=new M,Dx=new M,Fx=new M;function Nx(r,t,e,n,i){let s=0;const o=e,a=Lx,l=Dx,c=Fx;r.getVelocityAtWorldPoint(o,a),t.getVelocityAtWorldPoint(o,l),a.vsub(l,c);const h=n.dot(c),d=_h(r,e,n),u=_h(t,e,n),m=1/(d+u);return s=-h*m,i<s&&(s=i),s<-i&&(s=-i),s}const Ux=new M,Ox=new M,Bx=new M,zx=new M;function _h(r,t,e){const n=Ux,i=Ox,s=Bx,o=zx;return t.vsub(r.position,n),n.cross(e,i),r.invInertiaWorld.vmult(i,o),o.cross(n,s),r.invMass+e.dot(s)}const kx=new M,Vx=new M,Hx=new M;function Gx(r,t,e,n,i){if(i.lengthSquared()>1.1)return 0;const o=kx,a=Vx,l=Hx;r.getVelocityAtWorldPoint(t,o),e.getVelocityAtWorldPoint(n,a),o.vsub(a,l);const c=i.dot(l),h=1/(r.invMass+e.invMass);return-.2*c*h}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Je;new M;new Je;new M;new M;new M;new M;new M;new M;new M;new Je;new M;new Jt;new Je;class Wx{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Xx extends Wx{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,f,m,_,g;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const p=Yx,v=jx,x=qx;p.length=a,v.length=a,x.length=a;for(let y=0;y!==a;y++){const A=o[y];x[y]=0,v[y]=A.computeB(h),p[y]=1/A.computeC()}if(a!==0){for(let b=0;b!==c;b++){const R=l[b],I=R.vlambda,T=R.wlambda;I.set(0,0,0),T.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let b=0;b!==a;b++){const R=o[b];d=v[b],u=p[b],g=x[b],_=R.computeGWlambda(),f=u*(d-_-R.eps*g),g+f<R.minForce?f=R.minForce-g:g+f>R.maxForce&&(f=R.maxForce-g),x[b]+=f,m+=f>0?f:-f,R.addToWlambda(f)}if(m*m<s)break}for(let b=0;b!==c;b++){const R=l[b],I=R.velocity,T=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),I.vadd(R.vlambda,I),R.wlambda.vmul(R.angularFactor,R.wlambda),T.vadd(R.wlambda,T)}let y=o.length;const A=1/h;for(;y--;)o[y].multiplier=x[y]*A}return n}}const qx=[],Yx=[],jx=[];pt.STATIC;class Zx{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Kx extends Zx{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const ce={sphereSphere:yt.types.SPHERE,spherePlane:yt.types.SPHERE|yt.types.PLANE,boxBox:yt.types.BOX|yt.types.BOX,sphereBox:yt.types.SPHERE|yt.types.BOX,planeBox:yt.types.PLANE|yt.types.BOX,convexConvex:yt.types.CONVEXPOLYHEDRON,sphereConvex:yt.types.SPHERE|yt.types.CONVEXPOLYHEDRON,planeConvex:yt.types.PLANE|yt.types.CONVEXPOLYHEDRON,boxConvex:yt.types.BOX|yt.types.CONVEXPOLYHEDRON,sphereHeightfield:yt.types.SPHERE|yt.types.HEIGHTFIELD,boxHeightfield:yt.types.BOX|yt.types.HEIGHTFIELD,convexHeightfield:yt.types.CONVEXPOLYHEDRON|yt.types.HEIGHTFIELD,sphereParticle:yt.types.PARTICLE|yt.types.SPHERE,planeParticle:yt.types.PLANE|yt.types.PARTICLE,boxParticle:yt.types.BOX|yt.types.PARTICLE,convexParticle:yt.types.PARTICLE|yt.types.CONVEXPOLYHEDRON,cylinderCylinder:yt.types.CYLINDER,sphereCylinder:yt.types.SPHERE|yt.types.CYLINDER,planeCylinder:yt.types.PLANE|yt.types.CYLINDER,boxCylinder:yt.types.BOX|yt.types.CYLINDER,convexCylinder:yt.types.CONVEXPOLYHEDRON|yt.types.CYLINDER,heightfieldCylinder:yt.types.HEIGHTFIELD|yt.types.CYLINDER,particleCylinder:yt.types.PARTICLE|yt.types.CYLINDER,sphereTrimesh:yt.types.SPHERE|yt.types.TRIMESH,planeTrimesh:yt.types.PLANE|yt.types.TRIMESH};class $x{get[ce.sphereSphere](){return this.sphereSphere}get[ce.spherePlane](){return this.spherePlane}get[ce.boxBox](){return this.boxBox}get[ce.sphereBox](){return this.sphereBox}get[ce.planeBox](){return this.planeBox}get[ce.convexConvex](){return this.convexConvex}get[ce.sphereConvex](){return this.sphereConvex}get[ce.planeConvex](){return this.planeConvex}get[ce.boxConvex](){return this.boxConvex}get[ce.sphereHeightfield](){return this.sphereHeightfield}get[ce.boxHeightfield](){return this.boxHeightfield}get[ce.convexHeightfield](){return this.convexHeightfield}get[ce.sphereParticle](){return this.sphereParticle}get[ce.planeParticle](){return this.planeParticle}get[ce.boxParticle](){return this.boxParticle}get[ce.convexParticle](){return this.convexParticle}get[ce.cylinderCylinder](){return this.convexConvex}get[ce.sphereCylinder](){return this.sphereConvex}get[ce.planeCylinder](){return this.planeConvex}get[ce.boxCylinder](){return this.boxConvex}get[ce.convexCylinder](){return this.convexConvex}get[ce.heightfieldCylinder](){return this.heightfieldCylinder}get[ce.particleCylinder](){return this.particleCylinder}get[ce.sphereTrimesh](){return this.sphereTrimesh}get[ce.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Kx,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new cx(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,_=m.length?m.pop():new ph(n,i,u*f),g=m.length?m.pop():new ph(n,i,u*f);return _.bi=g.bi=n,_.bj=g.bj=i,_.minForce=g.minForce=-u*f,_.maxForce=g.maxForce=u*f,_.ri.copy(t.ri),_.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(_.t,g.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=g.enabled=t.enabled,e.push(_,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];_i.setZero(),qi.setZero(),Yi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(_i.vadd(e.ni,_i),qi.vadd(e.ri,qi),Yi.vadd(e.rj,Yi)):(_i.vsub(e.ni,_i),qi.vadd(e.rj,qi),Yi.vadd(e.ri,Yi));const o=1/t;qi.scale(o,n.ri),Yi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),_i.normalize(),_i.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=ty,c=ey,h=Jx,d=Qx;for(let u=0,f=t.length;u!==f;u++){const m=t[u],_=e[u];let g=null;m.material&&_.material&&(g=n.getContactMaterial(m.material,_.material)||null);const p=m.type&pt.KINEMATIC&&_.type&pt.STATIC||m.type&pt.STATIC&&_.type&pt.KINEMATIC||m.type&pt.KINEMATIC&&_.type&pt.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],l),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);const x=m.shapes[v];for(let y=0;y<_.shapes.length;y++){_.quaternion.mult(_.shapeOrientations[y],c),_.quaternion.vmult(_.shapeOffsets[y],d),d.vadd(_.position,d);const A=_.shapes[y];if(!(x.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+A.boundingSphereRadius)continue;let b=null;x.material&&A.material&&(b=n.getContactMaterial(x.material,A.material)||null),this.currentContactMaterial=b||g||n.defaultContactMaterial;const R=x.type|A.type,I=this[R];if(I){let T=!1;x.type<A.type?T=I.call(this,x,A,h,d,l,c,m,_,x,A,p):T=I.call(this,A,x,d,h,c,l,_,m,x,A,p),T&&p&&(n.shapeOverlapKeeper.set(x.id,A.id),n.bodyOverlapKeeper.set(m.id,_.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,zr),u.ni.scale(u.ni.dot(zr),vh),zr.vsub(vh,u.rj),-zr.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,m=u.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool,f=Ay;n.vsub(i,kr),e.getSideNormals(f,o);const m=t.radius;let _=!1;const g=Cy,p=Py,v=Iy;let x=null,y=0,A=0,b=0,R=null;for(let D=0,Y=f.length;D!==Y&&_===!1;D++){const V=wy;V.copy(f[D]);const Z=V.length();V.normalize();const st=kr.dot(V);if(st<Z+m&&st>0){const at=Ty,nt=by;at.copy(f[(D+1)%3]),nt.copy(f[(D+2)%3]);const Ut=at.length(),j=nt.length();at.normalize(),nt.normalize();const et=kr.dot(at),ft=kr.dot(nt);if(et<Ut&&et>-Ut&&ft<j&&ft>-j){const rt=Math.abs(st-Z-m);if((R===null||rt<R)&&(R=rt,A=et,b=ft,x=Z,g.copy(V),p.copy(at),v.copy(nt),y++,d))return!0}}}if(y){_=!0;const D=this.createContactEquation(a,l,t,e,c,h);g.scale(-m,D.ri),D.ni.copy(g),D.ni.negate(D.ni),g.scale(x,g),p.scale(A,p),g.vadd(p,g),v.scale(b,v),g.vadd(v,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let I=u.get();const T=Ry;for(let D=0;D!==2&&!_;D++)for(let Y=0;Y!==2&&!_;Y++)for(let V=0;V!==2&&!_;V++)if(I.set(0,0,0),D?I.vadd(f[0],I):I.vsub(f[0],I),Y?I.vadd(f[1],I):I.vsub(f[1],I),V?I.vadd(f[2],I):I.vsub(f[2],I),i.vadd(I,T),T.vsub(n,T),T.lengthSquared()<m*m){if(d)return!0;_=!0;const Z=this.createContactEquation(a,l,t,e,c,h);Z.ri.copy(T),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(m,Z.ri),Z.rj.copy(I),Z.ri.vadd(n,Z.ri),Z.ri.vsub(a.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(l.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}u.release(I),I=null;const S=u.get(),P=u.get(),H=u.get(),L=u.get(),z=u.get(),B=f.length;for(let D=0;D!==B&&!_;D++)for(let Y=0;Y!==B&&!_;Y++)if(D%3!==Y%3){f[Y].cross(f[D],S),S.normalize(),f[D].vadd(f[Y],P),H.copy(n),H.vsub(P,H),H.vsub(i,H);const V=H.dot(S);S.scale(V,L);let Z=0;for(;Z===D%3||Z===Y%3;)Z++;z.copy(n),z.vsub(L,z),z.vsub(P,z),z.vsub(i,z);const st=Math.abs(V),at=z.length();if(st<f[Z].length()&&at<m){if(d)return!0;_=!0;const nt=this.createContactEquation(a,l,t,e,c,h);P.vadd(L,nt.rj),nt.rj.copy(nt.rj),z.negate(nt.ni),nt.ni.normalize(),nt.ri.copy(nt.rj),nt.ri.vadd(i,nt.ri),nt.ri.vsub(n,nt.ri),nt.ri.normalize(),nt.ri.scale(m,nt.ri),nt.ri.vadd(n,nt.ri),nt.ri.vsub(a.position,nt.ri),nt.rj.vadd(i,nt.rj),nt.rj.vsub(l.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}}u.release(S,P,H,L,z)}planeBox(t,e,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,h,d,u,f){const m=qy;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,m,u,f)){const _=[],g=Yy;t.clipAgainstHull(n,s,e,i,o,m,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h),y=x.ri,A=x.rj;m.negate(x.ni),_[v].normal.negate(g),g.scale(_[v].depth,g),_[v].point.vadd(g,y),A.copy(_[v].point),y.vsub(n,y),A.vsub(i,A),y.vadd(n,y),y.vsub(a.position,y),A.vadd(i,A),A.vsub(l.position,A),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,Ly);const f=e.faceNormals,m=e.faces,_=e.vertices,g=t.radius;let p=!1;for(let v=0;v!==_.length;v++){const x=_[v],y=Uy;o.vmult(x,y),i.vadd(y,y);const A=Ny;if(y.vsub(n,A),A.lengthSquared()<g*g){if(d)return!0;p=!0;const b=this.createContactEquation(a,l,t,e,c,h);b.ri.copy(A),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(g,b.ri),y.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,x=m.length;v!==x&&p===!1;v++){const y=f[v],A=m[v],b=Oy;o.vmult(y,b);const R=By;o.vmult(_[A[0]],R),R.vadd(i,R);const I=zy;b.scale(-g,I),n.vadd(I,I);const T=ky;I.vsub(R,T);const S=T.dot(b),P=Vy;if(n.vsub(R,P),S<0&&P.dot(b)>0){const H=[];for(let L=0,z=A.length;L!==z;L++){const B=u.get();o.vmult(_[A[L]],B),i.vadd(B,B),H.push(B)}if(Ey(H,b,n)){if(d)return!0;p=!0;const L=this.createContactEquation(a,l,t,e,c,h);b.scale(-g,L.ri),b.negate(L.ni);const z=u.get();b.scale(-S,z);const B=u.get();b.scale(-g,B),n.vsub(i,L.rj),L.rj.vadd(B,L.rj),L.rj.vadd(z,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),u.release(z),u.release(B),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let D=0,Y=H.length;D!==Y;D++)u.release(H[D]);return}else for(let L=0;L!==A.length;L++){const z=u.get(),B=u.get();o.vmult(_[A[(L+1)%A.length]],z),o.vmult(_[A[(L+2)%A.length]],B),i.vadd(z,z),i.vadd(B,B);const D=Dy;B.vsub(z,D);const Y=Fy;D.unit(Y);const V=u.get(),Z=u.get();n.vsub(z,Z);const st=Z.dot(Y);Y.scale(st,V),V.vadd(z,V);const at=u.get();if(V.vsub(n,at),st>0&&st*st<D.lengthSquared()&&at.lengthSquared()<g*g){if(d)return!0;const nt=this.createContactEquation(a,l,t,e,c,h);V.vsub(i,nt.rj),V.vsub(n,nt.ni),nt.ni.normalize(),nt.ni.scale(g,nt.ri),nt.rj.vadd(i,nt.rj),nt.rj.vsub(l.position,nt.rj),nt.ri.vadd(n,nt.ri),nt.ri.vsub(a.position,nt.ri),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult);for(let Ut=0,j=H.length;Ut!==j;Ut++)u.release(H[Ut]);u.release(z),u.release(B),u.release(V),u.release(at),u.release(Z);return}u.release(z),u.release(B),u.release(V),u.release(at),u.release(Z)}for(let L=0,z=H.length;L!==z;L++)u.release(H[L])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,d){const u=Hy,f=Gy;f.set(0,0,1),s.vmult(f,f);let m=0;const _=Wy;for(let g=0;g!==e.vertices.length;g++)if(u.copy(e.vertices[g]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,_),f.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h),x=Xy;f.scale(f.dot(_),x),u.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(f),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,f=t.radius,m=e.elementSize,_=rM,g=sM;Jt.pointToLocalFrame(i,o,n,g);let p=Math.floor((g.x-f)/m)-1,v=Math.ceil((g.x+f)/m)+1,x=Math.floor((g.y-f)/m)-1,y=Math.ceil((g.y+f)/m)+1;if(v<0||y<0||p>u.length||x>u[0].length)return;p<0&&(p=0),v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),y>=u[0].length&&(y=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const A=[];e.getRectMinMax(p,x,v,y,A);const b=A[0],R=A[1];if(g.z-f>R||g.z+f<b)return;const I=this.result;for(let T=p;T<v;T++)for(let S=x;S<y;S++){const P=I.length;let H=!1;if(e.getConvexTrianglePillar(T,S,!1),Jt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,l,t,e,d)),d&&H||(e.getConvexTrianglePillar(T,S,!0),Jt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,l,t,e,d)),d&&H))return!0;if(I.length-P>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,f=e.elementSize,m=t.boundingSphereRadius,_=nM,g=iM,p=eM;Jt.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-m)/f)-1,x=Math.ceil((p.x+m)/f)+1,y=Math.floor((p.y-m)/f)-1,A=Math.ceil((p.y+m)/f)+1;if(x<0||A<0||v>u.length||y>u[0].length)return;v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),A<0&&(A=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),A>=u[0].length&&(A=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const b=[];e.getRectMinMax(v,y,x,A,b);const R=b[0],I=b[1];if(!(p.z-m>I||p.z+m<R))for(let T=v;T<x;T++)for(let S=y;S<A;S++){let P=!1;if(e.getConvexTrianglePillar(T,S,!1),Jt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,l,null,null,d,g,null)),d&&P||(e.getConvexTrianglePillar(T,S,!0),Jt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,l,null,null,d,g,null)),d&&P))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,d){const u=$y;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const m=this.createContactEquation(l,a,e,t,c,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,d){const u=jy;u.set(0,0,1),a.quaternion.vmult(u,u);const f=Zy;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const g=Ky;u.scale(u.dot(i),g),i.vsub(g,g),_.rj.copy(g),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,h,d){let u=-1;const f=Qy,m=tM;let _=null;const g=Jy;if(g.copy(i),g.vsub(n,g),s.conjugate(xh),xh.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,v=t.faces.length;p!==v;p++){const x=[t.worldVertices[t.faces[p][0]]],y=t.worldFaceNormals[p];i.vsub(x[0],yh);const A=-y.dot(yh);if(_===null||Math.abs(A)<Math.abs(_)){if(d)return!0;_=A,u=p,f.copy(y)}}if(u!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(_,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,x=p.rj;v.vadd(i,v),v.vsub(l.position,v),x.vadd(n,x),x.vsub(a.position,x),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,d)}particleCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=cy,f=hy,m=uy,_=dy,g=fy,p=py,v=vy,x=ly,y=oy,A=xy;Jt.pointToLocalFrame(i,o,n,g);const b=t.radius;v.lowerBound.set(g.x-b,g.y-b,g.z-b),v.upperBound.set(g.x+b,g.y+b,g.z+b),e.getTrianglesInAABB(v,A);const R=ay,I=t.radius*t.radius;for(let L=0;L<A.length;L++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[A[L]*3+z],R),R.vsub(g,y),y.lengthSquared()<=I){if(x.copy(R),Jt.pointToWorldFrame(i,o,x,R),R.vsub(n,y),d)return!0;let B=this.createContactEquation(a,l,t,e,c,h);B.ni.copy(y),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(R),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let L=0;L<A.length;L++)for(let z=0;z<3;z++){e.getVertex(e.indices[A[L]*3+z],u),e.getVertex(e.indices[A[L]*3+(z+1)%3],f),f.vsub(u,m),g.vsub(f,p);const B=p.dot(m);g.vsub(u,p);let D=p.dot(m);if(D>0&&B<0&&(g.vsub(u,p),_.copy(m),_.normalize(),D=p.dot(_),_.scale(D,p),p.vadd(u,p),p.distanceTo(g)<t.radius)){if(d)return!0;const V=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),Jt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,V.rj),Jt.vectorToWorldFrame(o,V.ni,V.ni),Jt.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const T=my,S=gy,P=_y,H=ry;for(let L=0,z=A.length;L!==z;L++){e.getTriangleVertices(A[L],T,S,P),e.getNormal(A[L],H),g.vsub(T,p);let B=p.dot(H);if(H.scale(B,p),g.vsub(p,p),B=p.distanceTo(g),Me.pointInTriangle(p,T,S,P)&&B<t.radius){if(d)return!0;let D=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),Jt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,D.rj),Jt.vectorToWorldFrame(o,D.ni,D.ni),Jt.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}A.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=new M,f=ny;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);const _=new M;_.copy(u),Jt.pointToWorldFrame(i,o,_,u);const g=iy;if(u.vsub(n,g),f.dot(g)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h);v.ni.copy(f);const x=sy;f.scale(g.dot(f),x),u.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const _i=new M,qi=new M,Yi=new M,Jx=new M,Qx=new M,ty=new _e,ey=new _e,ny=new M,iy=new M,sy=new M,ry=new M,oy=new M;new M;const ay=new M,ly=new M,cy=new M,hy=new M,uy=new M,dy=new M,fy=new M,py=new M,my=new M,gy=new M,_y=new M,vy=new Je,xy=[],zr=new M,vh=new M,yy=new M,My=new M,Sy=new M;function Ey(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=yy;r[(s+1)%i].vsub(o,a);const l=My;a.cross(t,l);const c=Sy;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const kr=new M,wy=new M,Ty=new M,by=new M,Ay=[new M,new M,new M,new M,new M,new M],Ry=new M,Cy=new M,Py=new M,Iy=new M,Ly=new M,Dy=new M,Fy=new M,Ny=new M,Uy=new M,Oy=new M,By=new M,zy=new M,ky=new M,Vy=new M;new M;new M;const Hy=new M,Gy=new M,Wy=new M,Xy=new M,qy=new M,Yy=new M,jy=new M,Zy=new M,Ky=new M,$y=new M,xh=new _e,Jy=new M;new M;const Qy=new M,yh=new M,tM=new M,eM=new M,nM=new M,iM=[0],sM=new M,rM=new M;class Mh{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Sh(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Sh(e,h)}}}function Sh(r,t){r.push((t&4294901760)>>16,t&65535)}const oa=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class oM{constructor(){this.data={keys:[]}}get(t,e){const n=oa(t,e);return this.data[n]}set(t,e,n){const i=oa(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=oa(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class aM extends Mu{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Xv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Xx,this.constraints=[],this.narrowphase=new $x(this),this.collisionMatrix=new sh,this.collisionMatrixPrevious=new sh,this.bodyOverlapKeeper=new Mh,this.shapeOverlapKeeper=new Mh,this.contactmaterials=[],this.contactMaterialTable=new oM,this.defaultMaterial=new Ss("default"),this.defaultContactMaterial=new _o(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof $s?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Me.ALL,n.from=t,n.to=e,n.callback=i,aa.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Me.ANY,n.from=t,n.to=e,n.result=i,aa.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Me.CLOSEST,n.from=t,n.to=e,n.result=i,aa.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ee.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ee.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ee.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=dM,i=fM,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=pt.DYNAMIC;let u=-1/0;const f=this.constraints,m=uM;l.length();const _=l.x,g=l.y,p=l.z;let v=0;for(c&&(u=Ee.now()),v=0;v!==s;v++){const L=o[v];if(L.type===d){const z=L.force,B=L.mass;z.x+=B*_,z.y+=B*g,z.z+=B*p}}for(let L=0,z=this.subsystems.length;L!==z;L++)this.subsystems[L].update();c&&(u=Ee.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Ee.now()-u);let x=f.length;for(v=0;v!==x;v++){const L=f[v];if(!L.collideConnected)for(let z=n.length-1;z>=0;z-=1)(L.bodyA===n[z]&&L.bodyB===i[z]||L.bodyB===n[z]&&L.bodyA===i[z])&&(n.splice(z,1),i.splice(z,1))}this.collisionMatrixTick(),c&&(u=Ee.now());const y=hM,A=e.length;for(v=0;v!==A;v++)y.push(e[v]);e.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,m),c&&(h.narrowphase=Ee.now()-u),c&&(u=Ee.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const R=e.length;for(let L=0;L!==R;L++){const z=e[L],B=z.bi,D=z.bj,Y=z.si,V=z.sj;let Z;if(B.material&&D.material?Z=this.getContactMaterial(B.material,D.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,B.material&&D.material&&(B.material.friction>=0&&D.material.friction>=0&&B.material.friction*D.material.friction,B.material.restitution>=0&&D.material.restitution>=0&&(z.restitution=B.material.restitution*D.material.restitution)),a.addEquation(z),B.allowSleep&&B.type===pt.DYNAMIC&&B.sleepState===pt.SLEEPING&&D.sleepState===pt.AWAKE&&D.type!==pt.STATIC){const st=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),at=D.sleepSpeedLimit**2;st>=at*2&&(B.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===pt.DYNAMIC&&D.sleepState===pt.SLEEPING&&B.sleepState===pt.AWAKE&&B.type!==pt.STATIC){const st=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),at=B.sleepSpeedLimit**2;st>=at*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,D,!0),this.collisionMatrixPrevious.get(B,D)||(Ds.body=D,Ds.contact=z,B.dispatchEvent(Ds),Ds.body=B,D.dispatchEvent(Ds)),this.bodyOverlapKeeper.set(B.id,D.id),this.shapeOverlapKeeper.set(Y.id,V.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Ee.now()-u,u=Ee.now()),v=0;v!==s;v++){const L=o[v];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(x=f.length,v=0;v!==x;v++){const L=f[v];L.update();for(let z=0,B=L.equations.length;z!==B;z++){const D=L.equations[z];a.addEquation(D)}}a.solve(t,this),c&&(h.solve=Ee.now()-u),a.removeAllEquations();const I=Math.pow;for(v=0;v!==s;v++){const L=o[v];if(L.type&d){const z=I(1-L.linearDamping,t),B=L.velocity;B.scale(z,B);const D=L.angularVelocity;if(D){const Y=I(1-L.angularDamping,t);D.scale(Y,D)}}}this.dispatchEvent(cM),c&&(u=Ee.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,S,P);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Ee.now()-u),this.stepnumber+=1,this.dispatchEvent(lM);let H=!0;if(this.allowSleep)for(H=!1,v=0;v!==s;v++){const L=o[v];L.sleepTick(this.time),L.sleepState!==pt.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Nn,Un),t){for(let s=0,o=Nn.length;s<o;s+=2)Fs.bodyA=this.getBodyById(Nn[s]),Fs.bodyB=this.getBodyById(Nn[s+1]),this.dispatchEvent(Fs);Fs.bodyA=Fs.bodyB=null}if(e){for(let s=0,o=Un.length;s<o;s+=2)Ns.bodyA=this.getBodyById(Un[s]),Ns.bodyB=this.getBodyById(Un[s+1]),this.dispatchEvent(Ns);Ns.bodyA=Ns.bodyB=null}Nn.length=Un.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Nn,Un),n){for(let s=0,o=Nn.length;s<o;s+=2){const a=this.getShapeById(Nn[s]),l=this.getShapeById(Nn[s+1]);On.shapeA=a,On.shapeB=l,a&&(On.bodyA=a.body),l&&(On.bodyB=l.body),this.dispatchEvent(On)}On.bodyA=On.bodyB=On.shapeA=On.shapeB=null}if(i){for(let s=0,o=Un.length;s<o;s+=2){const a=this.getShapeById(Un[s]),l=this.getShapeById(Un[s+1]);Bn.shapeA=a,Bn.shapeB=l,a&&(Bn.bodyA=a.body),l&&(Bn.bodyB=l.body),this.dispatchEvent(Bn)}Bn.bodyA=Bn.bodyB=Bn.shapeA=Bn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Je;const aa=new Me,Ee=globalThis.performance||{};if(!Ee.now){let r=Date.now();Ee.timing&&Ee.timing.navigationStart&&(r=Ee.timing.navigationStart),Ee.now=()=>Date.now()-r}new M;const lM={type:"postStep"},cM={type:"preStep"},Ds={type:pt.COLLIDE_EVENT_NAME,body:null,contact:null},hM=[],uM=[],dM=[],fM=[],Nn=[],Un=[],Fs={type:"beginContact",bodyA:null,bodyB:null},Ns={type:"endContact",bodyA:null,bodyB:null},On={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Bn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var sn=Uint8Array,ns=Uint16Array,pM=Int32Array,Pu=new sn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Iu=new sn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),mM=new sn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Lu=function(r,t){for(var e=new ns(31),n=0;n<31;++n)e[n]=t+=1<<r[n-1];for(var i=new pM(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)i[s]=s-e[n]<<5|n;return{b:e,r:i}},Du=Lu(Pu,2),Fu=Du.b,gM=Du.r;Fu[28]=258,gM[258]=28;var _M=Lu(Iu,0),vM=_M.b,el=new ns(32768);for(var ue=0;ue<32768;++ue){var Qn=(ue&43690)>>1|(ue&21845)<<1;Qn=(Qn&52428)>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>4|(Qn&3855)<<4,el[ue]=((Qn&65280)>>8|(Qn&255)<<8)>>1}var Vs=function(r,t,e){for(var n=r.length,i=0,s=new ns(t);i<n;++i)r[i]&&++s[r[i]-1];var o=new ns(t);for(i=1;i<t;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(e){a=new ns(1<<t);var l=15-t;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=t-r[i],d=o[r[i]-1]++<<h,u=d|(1<<h)-1;d<=u;++d)a[el[d]>>l]=c}else for(a=new ns(n),i=0;i<n;++i)r[i]&&(a[i]=el[o[r[i]-1]++]>>15-r[i]);return a},er=new sn(288);for(var ue=0;ue<144;++ue)er[ue]=8;for(var ue=144;ue<256;++ue)er[ue]=9;for(var ue=256;ue<280;++ue)er[ue]=7;for(var ue=280;ue<288;++ue)er[ue]=8;var Nu=new sn(32);for(var ue=0;ue<32;++ue)Nu[ue]=5;var xM=Vs(er,9,1),yM=Vs(Nu,5,1),la=function(r){for(var t=r[0],e=1;e<r.length;++e)r[e]>t&&(t=r[e]);return t},dn=function(r,t,e){var n=t/8|0;return(r[n]|r[n+1]<<8)>>(t&7)&e},ca=function(r,t){var e=t/8|0;return(r[e]|r[e+1]<<8|r[e+2]<<16)>>(t&7)},MM=function(r){return(r+7)/8|0},SM=function(r,t,e){return(e==null||e>r.length)&&(e=r.length),new sn(r.subarray(t,e))},EM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fn=function(r,t,e){var n=new Error(t||EM[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,fn),!e)throw n;return n},wM=function(r,t,e,n){var i=r.length,s=0;if(!i||t.f&&!t.l)return e||new sn(0);var o=!e,a=o||t.i!=2,l=t.i;o&&(e=new sn(i*3));var c=function(oe){var Wt=e.length;if(oe>Wt){var de=new sn(Math.max(Wt*2,oe));de.set(e),e=de}},h=t.f||0,d=t.p||0,u=t.b||0,f=t.l,m=t.d,_=t.m,g=t.n,p=i*8;do{if(!f){h=dn(r,d,1);var v=dn(r,d+1,3);if(d+=3,v)if(v==1)f=xM,m=yM,_=9,g=5;else if(v==2){var b=dn(r,d,31)+257,R=dn(r,d+10,15)+4,I=b+dn(r,d+5,31)+1;d+=14;for(var T=new sn(I),S=new sn(19),P=0;P<R;++P)S[mM[P]]=dn(r,d+P*3,7);d+=R*3;for(var H=la(S),L=(1<<H)-1,z=Vs(S,H,1),P=0;P<I;){var B=z[dn(r,d,L)];d+=B&15;var x=B>>4;if(x<16)T[P++]=x;else{var D=0,Y=0;for(x==16?(Y=3+dn(r,d,3),d+=2,D=T[P-1]):x==17?(Y=3+dn(r,d,7),d+=3):x==18&&(Y=11+dn(r,d,127),d+=7);Y--;)T[P++]=D}}var V=T.subarray(0,b),Z=T.subarray(b);_=la(V),g=la(Z),f=Vs(V,_,1),m=Vs(Z,g,1)}else fn(1);else{var x=MM(d)+4,y=r[x-4]|r[x-3]<<8,A=x+y;if(A>i){l&&fn(0);break}a&&c(u+y),e.set(r.subarray(x,A),u),t.b=u+=y,t.p=d=A*8,t.f=h;continue}if(d>p){l&&fn(0);break}}a&&c(u+131072);for(var st=(1<<_)-1,at=(1<<g)-1,nt=d;;nt=d){var D=f[ca(r,d)&st],Ut=D>>4;if(d+=D&15,d>p){l&&fn(0);break}if(D||fn(2),Ut<256)e[u++]=Ut;else if(Ut==256){nt=d,f=null;break}else{var j=Ut-254;if(Ut>264){var P=Ut-257,et=Pu[P];j=dn(r,d,(1<<et)-1)+Fu[P],d+=et}var ft=m[ca(r,d)&at],rt=ft>>4;ft||fn(3),d+=ft&15;var Z=vM[rt];if(rt>3){var et=Iu[rt];Z+=ca(r,d)&(1<<et)-1,d+=et}if(d>p){l&&fn(0);break}a&&c(u+131072);var bt=u+j;if(u<Z){var Ct=s-Z,Ht=Math.min(Z,bt);for(Ct+u<0&&fn(3);u<Ht;++u)e[u]=n[Ct+u]}for(;u<bt;++u)e[u]=e[u-Z]}}t.l=f,t.p=nt,t.b=u,t.f=h,f&&(h=1,t.m=_,t.d=m,t.n=g)}while(!h);return u!=e.length&&o?SM(e,0,u):e.subarray(0,u)},TM=new sn(0),bM=function(r,t){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&fn(6,"invalid zlib data"),(r[1]>>5&1)==1&&fn(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function AM(r,t){return wM(r.subarray(bM(r),-4),{i:2},t,t)}var RM=typeof TextDecoder<"u"&&new TextDecoder,CM=0;try{RM.decode(TM,{stream:!0}),CM=1}catch{}function Uu(r,t,e){const n=e.length-r-1;if(t>=e[n])return n-1;if(t<=e[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;t<e[o]||t>=e[o+1];)t<e[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function PM(r,t,e,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=e;++a){s[a]=t-n[r+1-a],o[a]=n[r+a]-t;let l=0;for(let c=0;c<a;++c){const h=o[c+1],d=s[a-c],u=i[c]/(h+d);i[c]=l+h*u,l=d*u}i[a]=l}return i}function IM(r,t,e,n){const i=Uu(r,n,t),s=PM(i,n,r,t),o=new Xt(0,0,0,0);for(let a=0;a<=r;++a){const l=e[i-r+a],c=s[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function LM(r,t,e,n,i){const s=[];for(let d=0;d<=e;++d)s[d]=0;const o=[];for(let d=0;d<=n;++d)o[d]=s.slice(0);const a=[];for(let d=0;d<=e;++d)a[d]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let d=1;d<=e;++d){l[d]=t-i[r+1-d],c[d]=i[r+d]-t;let u=0;for(let f=0;f<d;++f){const m=c[f+1],_=l[d-f];a[d][f]=m+_;const g=a[f][d-1]/a[d][f];a[f][d]=u+m*g,u=_*g}a[d][d]=u}for(let d=0;d<=e;++d)o[0][d]=a[d][e];for(let d=0;d<=e;++d){let u=0,f=1;const m=[];for(let _=0;_<=e;++_)m[_]=s.slice(0);m[0][0]=1;for(let _=1;_<=n;++_){let g=0;const p=d-_,v=e-_;d>=_&&(m[f][0]=m[u][0]/a[v+1][p],g=m[f][0]*a[p][v]);const x=p>=-1?1:-p,y=d-1<=v?_-1:e-d;for(let b=x;b<=y;++b)m[f][b]=(m[u][b]-m[u][b-1])/a[v+1][p+b],g+=m[f][b]*a[p+b][v];d<=v&&(m[f][_]=-m[u][_-1]/a[v+1][d],g+=m[f][_]*a[d][v]),o[_][d]=g;const A=u;u=f,f=A}}let h=e;for(let d=1;d<=n;++d){for(let u=0;u<=e;++u)o[d][u]*=h;h*=e-d}return o}function DM(r,t,e,n,i){const s=i<r?i:r,o=[],a=Uu(r,n,t),l=LM(a,n,r,s,t),c=[];for(let h=0;h<e.length;++h){const d=e[h].clone(),u=d.w;d.x*=u,d.y*=u,d.z*=u,c[h]=d}for(let h=0;h<=s;++h){const d=c[a-r].clone().multiplyScalar(l[h][0]);for(let u=1;u<=r;++u)d.add(c[a-r+u].clone().multiplyScalar(l[h][u]));o[h]=d}for(let h=s+1;h<=i+1;++h)o[h]=new Xt(0,0,0);return o}function FM(r,t){let e=1;for(let i=2;i<=r;++i)e*=i;let n=1;for(let i=2;i<=t;++i)n*=i;for(let i=2;i<=r-t;++i)n*=i;return e/n}function NM(r){const t=r.length,e=[],n=[];for(let s=0;s<t;++s){const o=r[s];e[s]=new N(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<t;++s){const o=e[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(FM(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function UM(r,t,e,n,i){const s=DM(r,t,e,n,i);return NM(s)}class OM extends Of{constructor(t,e,n,i,s){super();const o=e?e.length-1:0,a=n?n.length:0;this.degree=t,this.knots=e,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new Xt(c.x,c.y,c.z,c.w)}}getPoint(t,e=new N){const n=e,i=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=IM(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(t,e=new N){const n=e,i=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),s=UM(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}toJSON(){const t=super.toJSON();return t.degree=this.degree,t.knots=[...this.knots],t.controlPoints=this.controlPoints.map(e=>e.toArray()),t.startKnot=this.startKnot,t.endKnot=this.endKnot,t}fromJSON(t){return super.fromJSON(t),this.degree=t.degree,this.knots=[...t.knots],this.controlPoints=t.controlPoints.map(e=>new Xt(e[0],e[1],e[2],e[3])),this.startKnot=t.startKnot,this.endKnot=t.endKnot,this}}let Gt,ve,ke;class Es extends Ai{constructor(t){super(t)}load(t,e,n,i){const s=this,o=s.path===""?Sp.extractUrlBase(t):s.path,a=new gp(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(l){try{e(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}parse(t,e){if(GM(t))Gt=new HM().parse(t);else{const i=zu(t);if(!WM(i))throw new Error("THREE.FBXLoader: Unknown format.");if(wh(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+wh(i));Gt=new VM().parse(i)}const n=new gl(this.manager).setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);return new BM(n,this.manager).parse(Gt)}}class BM{constructor(t,e){this.textureLoader=t,this.manager=e}parse(){ve=this.parseConnections();const t=this.parseImages(),e=this.parseTextures(t),n=this.parseMaterials(e),i=this.parseDeformers(),s=new zM().parse(i);return this.parseScene(i,s,n),ke}parseConnections(){const t=new Map;return"Connections"in Gt&&Gt.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];t.has(i)||t.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};t.get(i).parents.push(a),t.has(s)||t.set(s,{parents:[],children:[]});const l={ID:i,relationship:o};t.get(s).children.push(l)}),t}parseImages(){const t={},e={};if("Video"in Gt.Objects){const n=Gt.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(t[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[i]);e[s.RelativeFilename||s.Filename]=c}}}}for(const n in t){const i=t[n];e[i]!==void 0?t[n]=e[i]:t[n]=t[n].split("\\").pop()}return t}parseImage(t){const e=t.Content,n=t.RelativeFilename||t.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof e=="string")return"data:"+s+";base64,"+e;{const o=new Uint8Array(e);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(t){const e=new Map;if("Texture"in Gt.Objects){const n=Gt.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],t);e.set(parseInt(i),s)}}return e}parseTexture(t,e){const n=this.loadTexture(t,e);n.ID=t.id,n.name=t.attrName;const i=t.WrapModeU,s=t.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?Gs:Vn,n.wrapT=a===0?Gs:Vn,"Scaling"in t){const l=t.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in t){const l=t.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(t,e){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=t.FileName.split(".").pop().toLowerCase(),s=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!s)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,t.RelativeFilename),new De;const o=s.path;o||s.setPath(this.textureLoader.path);const a=ve.get(t.id).children;let l;a!==void 0&&a.length>0&&e[a[0].ID]!==void 0&&(l=e[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&s.setPath(void 0));const c=s.load(l);return s.setPath(o),c}parseMaterials(t){const e=new Map;if("Material"in Gt.Objects){const n=Gt.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],t);s!==null&&e.set(parseInt(i),s)}}return e}parseMaterial(t,e){const n=t.id,i=t.attrName;let s=t.ShadingModel;if(typeof s=="object"&&(s=s.value),!ve.has(n))return null;const o=this.parseParameters(t,e,n);let a;switch(s.toLowerCase()){case"phong":a=new qo;break;case"lambert":a=new ep;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new qo;break}return a.setValues(o),a.name=i,a}parseParameters(t,e,n){const i={};t.BumpFactor&&(i.bumpScale=t.BumpFactor.value),t.Diffuse?i.color=kt.toWorkingColorSpace(new Pt().fromArray(t.Diffuse.value),he):t.DiffuseColor&&(t.DiffuseColor.type==="Color"||t.DiffuseColor.type==="ColorRGB")&&(i.color=kt.toWorkingColorSpace(new Pt().fromArray(t.DiffuseColor.value),he)),t.DisplacementFactor&&(i.displacementScale=t.DisplacementFactor.value),t.Emissive?i.emissive=kt.toWorkingColorSpace(new Pt().fromArray(t.Emissive.value),he):t.EmissiveColor&&(t.EmissiveColor.type==="Color"||t.EmissiveColor.type==="ColorRGB")&&(i.emissive=kt.toWorkingColorSpace(new Pt().fromArray(t.EmissiveColor.value),he)),t.EmissiveFactor&&(i.emissiveIntensity=parseFloat(t.EmissiveFactor.value)),i.opacity=1-(t.TransparencyFactor?parseFloat(t.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=t.Opacity?parseFloat(t.Opacity.value):null,i.opacity===null&&(i.opacity=1-(t.TransparentColor?parseFloat(t.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),t.ReflectionFactor&&(i.reflectivity=t.ReflectionFactor.value),t.Shininess&&(i.shininess=t.Shininess.value),t.Specular?i.specular=kt.toWorkingColorSpace(new Pt().fromArray(t.Specular.value),he):t.SpecularColor&&t.SpecularColor.type==="Color"&&(i.specular=kt.toWorkingColorSpace(new Pt().fromArray(t.SpecularColor.value),he));const s=this;return ve.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(e,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(e,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(e,o.ID),i.map!==void 0&&(i.map.colorSpace=he);break;case"DisplacementColor":i.displacementMap=s.getTexture(e,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(e,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=he);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(e,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(e,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Qr,i.envMap.colorSpace=he);break;case"SpecularColor":i.specularMap=s.getTexture(e,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=he);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(e,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(t,e){return"LayeredTexture"in Gt.Objects&&e in Gt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),e=ve.get(e).children[0].ID),t.get(e)}parseDeformers(){const t={},e={};if("Deformer"in Gt.Objects){const n=Gt.Objects.Deformer;for(const i in n){const s=n[i],o=ve.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,t[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),e[i]=a}}}return{skeletons:t,morphTargets:e}}parseSkeleton(t,e){const n=[];return t.children.forEach(function(i){const s=e[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new St().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(t,e){const n=[];for(let i=0;i<t.children.length;i++){const s=t.children[i],o=e[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=ve.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(t,e,n){ke=new Qi;const i=this.parseModels(t.skeletons,e,n),s=Gt.Objects.Model,o=this;i.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),ve.get(l.ID).parents.forEach(function(d){const u=i.get(d.ID);u!==void 0&&u.add(l)}),l.parent===null&&ke.add(l)}),this.bindSkeleton(t.skeletons,e,i),this.addGlobalSceneSettings(),ke.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Bu(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new kM().parse();ke.children.length===1&&ke.children[0].isGroup&&(ke.children[0].animations=a,ke=ke.children[0]),ke.animations=a}parseModels(t,e,n){const i=new Map,s=Gt.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=ve.get(a);let h=this.buildSkeleton(c,t,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,e,n);break;case"NurbsCurve":h=this.createCurve(c,e);break;case"LimbNode":case"Root":h=new $a;break;case"Null":default:h=new Qi;break}h.name=l.attrName?Qt.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=a}this.getTransformData(h,l),i.set(a,h)}return i}buildSkeleton(t,e,n,i){let s=null;return t.parents.forEach(function(o){for(const a in e){const l=e[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){const d=s;s=new $a,s.matrixWorld.copy(c.transformLink),s.name=i?Qt.sanitizeNodeName(i):"",s.userData.originalName=i,s.ID=n,l.bones[h]=s,d!==null&&s.add(d)}})}}),s}createCamera(t){let e,n;if(t.children.forEach(function(i){const s=Gt.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)e=new re;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const d=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:e=new Ve(h,c,s,o),d!==null&&e.setFocalLength(d);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),e=new re;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),e=new re;break}}return e}createLight(t){let e,n;if(t.children.forEach(function(i){const s=Gt.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)e=new re;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=kt.toWorkingColorSpace(new Pt().fromArray(n.Color.value),he));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:e=new Ac(s,o,a,l);break;case 1:e=new pu(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Pe.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=Pe.degToRad(n.OuterAngle.value),h=Math.max(h,1)),e=new xp(s,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),e=new Ac(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(e.castShadow=!0)}return e}createMesh(t,e,n){let i,s=null,o=null;const a=[];return t.children.forEach(function(l){e.has(l.ID)&&(s=e.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new qo({name:Ai.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(i=new If(s,o),i.normalizeSkinWeights()):i=new Ke(s,o),i}createCurve(t,e){const n=t.children.reduce(function(s,o){return e.has(o.ID)&&(s=e.get(o.ID)),s},null),i=new ru({name:Ai.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Uf(n,i)}getTransformData(t,e){const n={};"InheritType"in e&&(n.inheritType=parseInt(e.InheritType.value)),"RotationOrder"in e?n.eulerOrder=Js(e.RotationOrder.value):n.eulerOrder=Js(0),"Lcl_Translation"in e&&(n.translation=e.Lcl_Translation.value),"PreRotation"in e&&(n.preRotation=e.PreRotation.value),"Lcl_Rotation"in e&&(n.rotation=e.Lcl_Rotation.value),"PostRotation"in e&&(n.postRotation=e.PostRotation.value),"Lcl_Scaling"in e&&(n.scale=e.Lcl_Scaling.value),"ScalingOffset"in e&&(n.scalingOffset=e.ScalingOffset.value),"ScalingPivot"in e&&(n.scalingPivot=e.ScalingPivot.value),"RotationOffset"in e&&(n.rotationOffset=e.RotationOffset.value),"RotationPivot"in e&&(n.rotationPivot=e.RotationPivot.value),t.userData.transformData=n}setLookAtProperties(t,e){"LookAtProperty"in e&&ve.get(t.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Gt.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;t.target!==void 0?(t.target.position.fromArray(o),ke.add(t.target)):t.lookAt(new N().fromArray(o))}}})}bindSkeleton(t,e,n){const i=this.parsePoseNodes();for(const s in t){const o=t[s];ve.get(parseInt(o.ID)).parents.forEach(function(l){if(e.has(l.ID)){const c=l.ID;ve.get(c).parents.forEach(function(d){n.has(d.ID)&&n.get(d.ID).bind(new fl(o.bones),i[d.ID])})}})}}parsePoseNodes(){const t={};if("Pose"in Gt.Objects){const e=Gt.Objects.Pose;for(const n in e)if(e[n].attrType==="BindPose"&&e[n].NbPoseNodes>0){const i=e[n].PoseNode;Array.isArray(i)?i.forEach(function(s){t[s.Node]=new St().fromArray(s.Matrix.a)}):t[i.Node]=new St().fromArray(i.Matrix.a)}}return t}addGlobalSceneSettings(){if("GlobalSettings"in Gt){if("AmbientColor"in Gt.GlobalSettings){const t=Gt.GlobalSettings.AmbientColor.value,e=t[0],n=t[1],i=t[2];if(e!==0||n!==0||i!==0){const s=new Pt().setRGB(e,n,i,he);ke.add(new mu(s,1))}}"UnitScaleFactor"in Gt.GlobalSettings&&(ke.userData.unitScaleFactor=Gt.GlobalSettings.UnitScaleFactor.value)}}}class zM{constructor(){this.negativeMaterialIndices=!1}parse(t){const e=new Map;if("Geometry"in Gt.Objects){const n=Gt.Objects.Geometry;for(const i in n){const s=ve.get(parseInt(i)),o=this.parseGeometry(s,n[i],t);e.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),e}parseGeometry(t,e,n){switch(e.attrType){case"Mesh":return this.parseMeshGeometry(t,e,n);case"NurbsCurve":return this.parseNurbsGeometry(e)}}parseMeshGeometry(t,e,n){const i=n.skeletons,s=[],o=t.parents.map(function(d){return Gt.Objects.Model[d.ID]});if(o.length===0)return;const a=t.children.reduce(function(d,u){return i[u.ID]!==void 0&&(d=i[u.ID]),d},null);t.children.forEach(function(d){n.morphTargets[d.ID]!==void 0&&s.push(n.morphTargets[d.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Js(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Bu(c);return this.genGeometry(e,a,s,h)}genGeometry(t,e,n,i){const s=new _n;t.attrName&&(s.name=t.attrName);const o=this.parseGeoNode(t,e),a=this.genBuffers(o),l=new Xe(a.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Xe(a.colors,3)),e&&(s.setAttribute("skinIndex",new dl(a.weightsIndices,4)),s.setAttribute("skinWeight",new Xe(a.vertexWeights,4)),s.FBX_Deformer=e),a.normal.length>0){const c=new Nt().getNormalMatrix(i),h=new Xe(a.normal,3);h.applyNormalMatrix(c),s.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){const d=h===0?"uv":`uv${h}`;s.setAttribute(d,new Xe(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(d,u){d!==c&&(s.addGroup(h,u-h,c),c=d,h=u)}),s.groups.length>0){const d=s.groups[s.groups.length-1],u=d.start+d.count;u!==a.materialIndex.length&&s.addGroup(u,a.materialIndex.length-u,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,t,n,i),s}parseGeoNode(t,e){const n={};if(n.vertexPositions=t.Vertices!==void 0?t.Vertices.a:[],n.vertexIndices=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],t.LayerElementColor&&(n.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(n.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(n.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){n.uv=[];let i=0;for(;t.LayerElementUV[i];)t.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(t.LayerElementUV[i])),i++}return n.weightTable={},e!==null&&(n.skeleton=e,e.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(t){const e={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],l=[],c=[],h=[],d=[];const u=this;return t.vertexIndices.forEach(function(f,m){let _,g=!1;f<0&&(f=f^-1,g=!0);let p=[],v=[];if(o.push(f*3,f*3+1,f*3+2),t.color){const x=Vr(m,n,f,t.color);l.push(x[0],x[1],x[2])}if(t.skeleton){if(t.weightTable[f]!==void 0&&t.weightTable[f].forEach(function(x){v.push(x.weight),p.push(x.id)}),v.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const x=[0,0,0,0],y=[0,0,0,0];v.forEach(function(A,b){let R=A,I=p[b];y.forEach(function(T,S,P){if(R>T){P[S]=R,R=T;const H=x[S];x[S]=I,I=H}})}),p=x,v=y}for(;v.length<4;)v.push(0),p.push(0);for(let x=0;x<4;++x)h.push(v[x]),d.push(p[x])}if(t.normal){const x=Vr(m,n,f,t.normal);a.push(x[0],x[1],x[2])}t.material&&t.material.mappingType!=="AllSame"&&(_=Vr(m,n,f,t.material)[0],_<0&&(u.negativeMaterialIndices=!0,_=0)),t.uv&&t.uv.forEach(function(x,y){const A=Vr(m,n,f,x);c[y]===void 0&&(c[y]=[]),c[y].push(A[0]),c[y].push(A[1])}),i++,g&&(u.genFace(e,t,o,_,a,l,c,h,d,i),n++,i=0,o=[],a=[],l=[],c=[],h=[],d=[])}),e}getNormalNewell(t){const e=new N(0,0,0);for(let n=0;n<t.length;n++){const i=t[n],s=t[(n+1)%t.length];e.x+=(i.y-s.y)*(i.z+s.z),e.y+=(i.z-s.z)*(i.x+s.x),e.z+=(i.x-s.x)*(i.y+s.y)}return e.normalize(),e}getNormalTangentAndBitangent(t){const e=this.getNormalNewell(t),i=(Math.abs(e.z)>.5?new N(0,1,0):new N(0,0,1)).cross(e).normalize(),s=e.clone().cross(i).normalize();return{normal:e,tangent:i,bitangent:s}}flattenVertex(t,e,n){return new It(t.dot(e),t.dot(n))}genFace(t,e,n,i,s,o,a,l,c,h){let d;if(h>3){const u=[],f=e.baseVertexPositions||e.vertexPositions;for(let p=0;p<n.length;p+=3)u.push(new N(f[n[p]],f[n[p+1]],f[n[p+2]]));const{tangent:m,bitangent:_}=this.getNormalTangentAndBitangent(u),g=[];for(const p of u)g.push(this.flattenVertex(p,m,_));d=ml.triangulateShape(g,[])}else d=[[0,1,2]];for(const[u,f,m]of d)t.vertex.push(e.vertexPositions[n[u*3]]),t.vertex.push(e.vertexPositions[n[u*3+1]]),t.vertex.push(e.vertexPositions[n[u*3+2]]),t.vertex.push(e.vertexPositions[n[f*3]]),t.vertex.push(e.vertexPositions[n[f*3+1]]),t.vertex.push(e.vertexPositions[n[f*3+2]]),t.vertex.push(e.vertexPositions[n[m*3]]),t.vertex.push(e.vertexPositions[n[m*3+1]]),t.vertex.push(e.vertexPositions[n[m*3+2]]),e.skeleton&&(t.vertexWeights.push(l[u*4]),t.vertexWeights.push(l[u*4+1]),t.vertexWeights.push(l[u*4+2]),t.vertexWeights.push(l[u*4+3]),t.vertexWeights.push(l[f*4]),t.vertexWeights.push(l[f*4+1]),t.vertexWeights.push(l[f*4+2]),t.vertexWeights.push(l[f*4+3]),t.vertexWeights.push(l[m*4]),t.vertexWeights.push(l[m*4+1]),t.vertexWeights.push(l[m*4+2]),t.vertexWeights.push(l[m*4+3]),t.weightsIndices.push(c[u*4]),t.weightsIndices.push(c[u*4+1]),t.weightsIndices.push(c[u*4+2]),t.weightsIndices.push(c[u*4+3]),t.weightsIndices.push(c[f*4]),t.weightsIndices.push(c[f*4+1]),t.weightsIndices.push(c[f*4+2]),t.weightsIndices.push(c[f*4+3]),t.weightsIndices.push(c[m*4]),t.weightsIndices.push(c[m*4+1]),t.weightsIndices.push(c[m*4+2]),t.weightsIndices.push(c[m*4+3])),e.color&&(t.colors.push(o[u*3]),t.colors.push(o[u*3+1]),t.colors.push(o[u*3+2]),t.colors.push(o[f*3]),t.colors.push(o[f*3+1]),t.colors.push(o[f*3+2]),t.colors.push(o[m*3]),t.colors.push(o[m*3+1]),t.colors.push(o[m*3+2])),e.material&&e.material.mappingType!=="AllSame"&&(t.materialIndex.push(i),t.materialIndex.push(i),t.materialIndex.push(i)),e.normal&&(t.normal.push(s[u*3]),t.normal.push(s[u*3+1]),t.normal.push(s[u*3+2]),t.normal.push(s[f*3]),t.normal.push(s[f*3+1]),t.normal.push(s[f*3+2]),t.normal.push(s[m*3]),t.normal.push(s[m*3+1]),t.normal.push(s[m*3+2])),e.uv&&e.uv.forEach(function(_,g){t.uvs[g]===void 0&&(t.uvs[g]=[]),t.uvs[g].push(a[g][u*2]),t.uvs[g].push(a[g][u*2+1]),t.uvs[g].push(a[g][f*2]),t.uvs[g].push(a[g][f*2+1]),t.uvs[g].push(a[g][m*2]),t.uvs[g].push(a[g][m*2+1])})}addMorphTargets(t,e,n,i){if(n.length===0)return;t.morphTargetsRelative=!0,t.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Gt.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(t,e,l,i,a.name)})})}genMorphGeometry(t,e,n,i,s){const o=e.Vertices!==void 0?e.Vertices.a:[],a=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],h=t.attributes.position.count*3,d=new Float32Array(h);for(let _=0;_<c.length;_++){const g=c[_]*3;d[g]=l[_*3],d[g+1]=l[_*3+1],d[g+2]=l[_*3+2]}const u={vertexIndices:a,vertexPositions:d,baseVertexPositions:o},f=this.genBuffers(u),m=new Xe(f.vertex,3);m.name=s||n.attrName,m.applyMatrix4(i),t.morphAttributes.position.push(m)}parseNormals(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in t?s=t.NormalIndex.a:"NormalsIndex"in t&&(s=t.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:e,referenceType:n}}parseUVs(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.UV.a;let s=[];return n==="IndexToDirect"&&(s=t.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:e,referenceType:n}}parseVertexColors(t){const e=t.MappingInformationType,n=t.ReferenceInformationType,i=t.Colors.a;let s=[];n==="IndexToDirect"&&(s=t.ColorIndex.a);for(let o=0,a=new Pt;o<i.length;o+=4)a.fromArray(i,o),kt.toWorkingColorSpace(a,he),a.toArray(i,o);return{dataSize:4,buffer:i,indices:s,mappingType:e,referenceType:n}}parseMaterialIndices(t){const e=t.MappingInformationType,n=t.ReferenceInformationType;if(e==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=t.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:e,referenceType:n}}parseNurbsGeometry(t){const e=parseInt(t.Order);if(isNaN(e))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",t.Order,t.id),new _n;const n=e-1,i=t.KnotVector.a,s=[],o=t.Points.a;for(let d=0,u=o.length;d<u;d+=4)s.push(new Xt().fromArray(o,d));let a,l;if(t.Form==="Closed")s.push(s[0]);else if(t.Form==="Periodic"){a=n,l=i.length-1-a;for(let d=0;d<n;++d)s.push(s[d])}const h=new OM(n,i,s,a,l).getPoints(s.length*12);return new _n().setFromPoints(h)}}class kM{parse(){const t=[],e=this.parseClips();if(e!==void 0)for(const n in e){const i=e[n],s=this.addClip(i);t.push(s)}return t}parseClips(){if(Gt.Objects.AnimationCurve===void 0)return;const t=this.parseAnimationCurveNodes();this.parseAnimationCurves(t);const e=this.parseAnimationLayers(t);return this.parseAnimStacks(e)}parseAnimationCurveNodes(){const t=Gt.Objects.AnimationCurveNode,e=new Map;for(const n in t){const i=t[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};e.set(s.id,s)}}return e}parseAnimationCurves(t){const e=Gt.Objects.AnimationCurve;for(const n in e){const i={id:e[n].id,times:e[n].KeyTime.a.map(XM),values:e[n].KeyValueFloat.a},s=ve.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?t.get(o).curves.x=i:a.match(/Y/)?t.get(o).curves.y=i:a.match(/Z/)?t.get(o).curves.z=i:a.match(/DeformPercent/)&&t.has(o)&&(t.get(o).curves.morph=i)}}}parseAnimationLayers(t){const e=Gt.Objects.AnimationLayer,n=new Map;for(const i in e){const s=[],o=ve.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(t.has(l.ID)){const h=t.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[c]===void 0){const d=ve.get(l.ID).parents.filter(function(u){return u.relationship!==void 0})[0].ID;if(d!==void 0){const u=Gt.Objects.Model[d.toString()];if(u===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:u.attrName?Qt.sanitizeNodeName(u.attrName):"",ID:u.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};ke.traverse(function(m){m.ID===u.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new St),"PreRotation"in u&&(f.preRotation=u.PreRotation.value),"PostRotation"in u&&(f.postRotation=u.PostRotation.value),s[c]=f}}s[c]&&(s[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[c]===void 0){const d=ve.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,u=ve.get(d).parents[0].ID,f=ve.get(u).parents[0].ID,m=ve.get(f).parents[0].ID,_=Gt.Objects.Model[m],g={modelName:_.attrName?Qt.sanitizeNodeName(_.attrName):"",morphName:Gt.Objects.Deformer[d].attrName};s[c]=g}s[c][h.attr]=h}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(t){const e=Gt.Objects.AnimationStack,n={};for(const i in e){const s=ve.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=t.get(s[0].ID);n[i]={name:e[i].attrName,layer:o}}return n}addClip(t){let e=[];const n=this;return t.layer.forEach(function(i){e=e.concat(n.generateTracks(i))}),new hp(t.name,-1,e)}generateTracks(t){const e=[];let n=new N,i=new N;if(t.transform&&t.transform.decompose(n,new Ie,i),n=n.toArray(),i=i.toArray(),t.T!==void 0&&Object.keys(t.T.curves).length>0){const s=this.generateVectorTrack(t.modelName,t.T.curves,n,"position");s!==void 0&&e.push(s)}if(t.R!==void 0&&Object.keys(t.R.curves).length>0){const s=this.generateRotationTrack(t.modelName,t.R.curves,t.preRotation,t.postRotation,t.eulerOrder);s!==void 0&&e.push(s)}if(t.S!==void 0&&Object.keys(t.S.curves).length>0){const s=this.generateVectorTrack(t.modelName,t.S.curves,i,"scale");s!==void 0&&e.push(s)}if(t.DeformPercent!==void 0){const s=this.generateMorphTrack(t);s!==void 0&&e.push(s)}return e}generateVectorTrack(t,e,n,i){const s=this.getTimesForAllAxes(e),o=this.getKeyframeTrackValues(s,e,n);return new Ks(t+"."+i,s,o)}generateRotationTrack(t,e,n,i,s){let o,a;if(e.x!==void 0&&e.y!==void 0&&e.z!==void 0){const u=this.interpolateRotations(e.x,e.y,e.z,s);o=u[0],a=u[1]}const l=Js(0);n!==void 0&&(n=n.map(Pe.degToRad),n.push(l),n=new Te().fromArray(n),n=new Ie().setFromEuler(n)),i!==void 0&&(i=i.map(Pe.degToRad),i.push(l),i=new Te().fromArray(i),i=new Ie().setFromEuler(i).invert());const c=new Ie,h=new Te,d=[];if(!a||!o)return new gs(t+".quaternion",[0],[0]);for(let u=0;u<a.length;u+=3)h.set(a[u],a[u+1],a[u+2],s),c.setFromEuler(h),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),u>2&&new Ie().fromArray(d,(u-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(d,u/3*4);return new gs(t+".quaternion",o,d)}generateMorphTrack(t){const e=t.DeformPercent.curves.morph,n=e.values.map(function(s){return s/100}),i=ke.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];return new Zs(t.modelName+".morphTargetInfluences["+i+"]",e.times,n)}getTimesForAllAxes(t){let e=[];if(t.x!==void 0&&(e=e.concat(t.x.times)),t.y!==void 0&&(e=e.concat(t.y.times)),t.z!==void 0&&(e=e.concat(t.z.times)),e=e.sort(function(n,i){return n-i}),e.length>1){let n=1,i=e[0];for(let s=1;s<e.length;s++){const o=e[s];o!==i&&(e[n]=o,i=o,n++)}e=e.slice(0,n)}return e}getKeyframeTrackValues(t,e,n){const i=n,s=[];let o=-1,a=-1,l=-1;return t.forEach(function(c){if(e.x&&(o=e.x.times.indexOf(c)),e.y&&(a=e.y.times.indexOf(c)),e.z&&(l=e.z.times.indexOf(c)),o!==-1){const h=e.x.values[o];s.push(h),i[0]=h}else s.push(i[0]);if(a!==-1){const h=e.y.values[a];s.push(h),i[1]=h}else s.push(i[1]);if(l!==-1){const h=e.z.values[l];s.push(h),i[2]=h}else s.push(i[2])}),s}interpolateRotations(t,e,n,i){const s=[],o=[];s.push(t.times[0]),o.push(Pe.degToRad(t.values[0])),o.push(Pe.degToRad(e.values[0])),o.push(Pe.degToRad(n.values[0]));for(let a=1;a<t.values.length;a++){const l=[t.values[a-1],e.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Pe.degToRad),h=[t.values[a],e.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const d=h.map(Pe.degToRad),u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=[Math.abs(u[0]),Math.abs(u[1]),Math.abs(u[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const _=Math.max(...f)/180,g=new Te(...c,i),p=new Te(...d,i),v=new Ie().setFromEuler(g),x=new Ie().setFromEuler(p);v.dot(x)&&x.set(-x.x,-x.y,-x.z,-x.w);const y=t.times[a-1],A=t.times[a]-y,b=new Ie,R=new Te;for(let I=0;I<1;I+=1/_)b.copy(v.clone().slerp(x.clone(),I)),s.push(y+I*A),R.setFromQuaternion(b,i),o.push(R.x),o.push(R.y),o.push(R.z)}else s.push(t.times[a]),o.push(Pe.degToRad(t.values[a])),o.push(Pe.degToRad(e.values[a])),o.push(Pe.degToRad(n.values[a]))}return[s,o]}}class VM{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(t){this.nodeStack.push(t),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(t,e){this.currentProp=t,this.currentPropName=e}parse(t){this.currentIndent=0,this.allNodes=new Ou,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const e=this,n=t.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+e.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+e.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(e.currentIndent-1)+"}}");l?e.parseNodeBegin(i,l):c?e.parseNodeProperty(i,c,n[++s]):h?e.popStack():i.match(/^[^\s\t}]/)&&e.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(t,e){const n=e[1].trim().replace(/^"/,"").replace(/"$/,""),i=e[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(t){let e=t[0];t[0]!==""&&(e=parseInt(t[0]),isNaN(e)&&(e=t[0]));let n="",i="";return t.length>1&&(n=t[1].replace(/^(\w+)::/,""),i=t[2]),{id:e,name:n,type:i}}parseNodeProperty(t,e,n){let i=e[1].replace(/^"/,"").replace(/"$/,"").trim(),s=e[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(t,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let d=s.split(",").slice(3);d=d.map(function(u){return u.trim().replace(/^"/,"")}),i="connections",s=[c,h],YM(s,d),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=ua(s))}parseNodePropertyContinued(t){const e=this.getCurrentNode();e.a+=t,t.slice(-1)!==","&&(e.a=ua(e.a))}parseNodeSpecialProperty(t,e,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=ua(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class HM{parse(t){const e=new Eh(t);e.skip(23);const n=e.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Ou;for(;!this.endOfContent(e);){const s=this.parseNode(e,n);s!==null&&i.add(s.name,s)}return i}endOfContent(t){return t.size()%16===0?(t.getOffset()+160+16&-16)>=t.size():t.getOffset()+160+16>=t.size()}parseNode(t,e){const n={},i=e>=7500?t.getUint64():t.getUint32(),s=e>=7500?t.getUint64():t.getUint32();e>=7500?t.getUint64():t.getUint32();const o=t.getUint8(),a=t.getString(o);if(i===0)return null;const l=[];for(let u=0;u<s;u++)l.push(this.parseProperty(t));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",d=l.length>2?l[2]:"";for(n.singleProperty=s===1&&t.getOffset()===i;i>t.getOffset();){const u=this.parseNode(t,e);u!==null&&this.parseSubNode(a,n,u)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),d!==""&&(n.attrType=d),a!==""&&(n.name=a),n}parseSubNode(t,e,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(e[n.name]=n,n.a=i):e[n.name]=i}else if(t==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),e.connections===void 0&&(e.connections=[]),e.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){e[s]=n[s]});else if(t==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],e[i]={type:s,type2:o,flag:a,value:l}}else e[n.name]===void 0?typeof n.id=="number"?(e[n.name]={},e[n.name][n.id]=n):e[n.name]=n:n.name==="PoseNode"?(Array.isArray(e[n.name])||(e[n.name]=[e[n.name]]),e[n.name].push(n)):e[n.name][n.id]===void 0&&(e[n.name][n.id]=n)}parseProperty(t){const e=t.getString(1);let n;switch(e){case"C":return t.getBoolean();case"D":return t.getFloat64();case"F":return t.getFloat32();case"I":return t.getInt32();case"L":return t.getInt64();case"R":return n=t.getUint32(),t.getArrayBuffer(n);case"S":return n=t.getUint32(),t.getString(n);case"Y":return t.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=t.getUint32(),s=t.getUint32(),o=t.getUint32();if(s===0)switch(e){case"b":case"c":return t.getBooleanArray(i);case"d":return t.getFloat64Array(i);case"f":return t.getFloat32Array(i);case"i":return t.getInt32Array(i);case"l":return t.getInt64Array(i)}const a=AM(new Uint8Array(t.getArrayBuffer(o))),l=new Eh(a.buffer);switch(e){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+e)}}}class Eh{constructor(t,e){this.dv=new DataView(t),this.offset=0,this.littleEndian=e!==void 0?e:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(t){this.offset+=t}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(t){const e=[];for(let n=0;n<t;n++)e.push(this.getBoolean());return e}getUint8(){const t=this.dv.getUint8(this.offset);return this.offset+=1,t}getInt16(){const t=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}getInt32(){const t=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}getInt32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt32());return e}getUint32(){const t=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}getInt64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e&2147483648?(e=~e&4294967295,t=~t&4294967295,t===4294967295&&(e=e+1&4294967295),t=t+1&4294967295,-(e*4294967296+t)):e*4294967296+t}getInt64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getInt64());return e}getUint64(){let t,e;return this.littleEndian?(t=this.getUint32(),e=this.getUint32()):(e=this.getUint32(),t=this.getUint32()),e*4294967296+t}getFloat32(){const t=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}getFloat32Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat32());return e}getFloat64(){const t=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}getFloat64Array(t){const e=[];for(let n=0;n<t;n++)e.push(this.getFloat64());return e}getArrayBuffer(t){const e=this.dv.buffer.slice(this.offset,this.offset+t);return this.offset+=t,e}getString(t){const e=this.offset;let n=new Uint8Array(this.dv.buffer,e,t);this.skip(t);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,e,i)),this._textDecoder.decode(n)}}class Ou{add(t,e){this[t]=e}}function GM(r){const t="Kaydara FBX Binary  \0";return r.byteLength>=t.length&&t===zu(r,0,t.length)}function WM(r){const t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let e=0;function n(i){const s=r[i-1];return r=r.slice(e+i),e++,s}for(let i=0;i<t.length;++i)if(n(1)===t[i])return!1;return!0}function wh(r){const t=/FBXVersion: (\d+)/,e=r.match(t);if(e)return parseInt(e[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function XM(r){return r/46186158e3}const qM=[];function Vr(r,t,e,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=t;break;case"ByVertice":i=e;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return jM(qM,n.buffer,s,o)}const ha=new Te,ji=new N;function Bu(r){const t=new St,e=new St,n=new St,i=new St,s=new St,o=new St,a=new St,l=new St,c=new St,h=new St,d=new St,u=new St,f=r.inheritType?r.inheritType:0;r.translation&&t.setPosition(ji.fromArray(r.translation));const m=Js(0);if(r.preRotation){const P=r.preRotation.map(Pe.degToRad);P.push(m),e.makeRotationFromEuler(ha.fromArray(P))}if(r.rotation){const P=r.rotation.map(Pe.degToRad);P.push(r.eulerOrder||m),n.makeRotationFromEuler(ha.fromArray(P))}if(r.postRotation){const P=r.postRotation.map(Pe.degToRad);P.push(m),i.makeRotationFromEuler(ha.fromArray(P)),i.invert()}r.scale&&s.scale(ji.fromArray(r.scale)),r.scalingOffset&&a.setPosition(ji.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(ji.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(ji.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(ji.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(d.copy(r.parentMatrix),h.copy(r.parentMatrixWorld));const _=e.clone().multiply(n).multiply(i),g=new St;g.extractRotation(h);const p=new St;p.copyPosition(h);const v=p.clone().invert().multiply(h),x=g.clone().invert().multiply(v),y=s,A=new St;if(f===0)A.copy(g).multiply(_).multiply(x).multiply(y);else if(f===1)A.copy(g).multiply(x).multiply(_).multiply(y);else{const H=new St().scale(new N().setFromMatrixScale(d)).clone().invert(),L=x.clone().multiply(H);A.copy(g).multiply(_).multiply(L).multiply(y)}const b=c.clone().invert(),R=o.clone().invert();let I=t.clone().multiply(l).multiply(c).multiply(e).multiply(n).multiply(i).multiply(b).multiply(a).multiply(o).multiply(s).multiply(R);const T=new St().copyPosition(I),S=h.clone().multiply(T);return u.copyPosition(S),I=u.clone().multiply(A),I.premultiply(h.invert()),I}function Js(r){r=r||0;const t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[r]}function ua(r){return r.split(",").map(function(e){return parseFloat(e)})}function zu(r,t,e){return t===void 0&&(t=0),e===void 0&&(e=r.byteLength),new TextDecoder().decode(new Uint8Array(r,t,e))}function YM(r,t){for(let e=0,n=r.length,i=t.length;e<i;e++,n++)r[n]=t[e]}function jM(r,t,e,n){for(let i=e,s=0;i<n;i++,s++)r[s]=t[i];return r}const Th={type:"change"},wl={type:"start"},ku={type:"end"},Hr=new co,bh=new ti,ZM=Math.cos(70*Pe.DEG2RAD),Se=new N,We=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},da=1e-6;class KM extends Fp{constructor(t,e=null){super(t,e),this.state=se.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ie,this._lastTargetPosition=new N,this._quat=new Ie().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cc,this._sphericalDelta=new Cc,this._scale=1,this._panOffset=new N,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new N,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JM.bind(this),this._onPointerDown=$M.bind(this),this._onPointerUp=QM.bind(this),this._onContextMenu=oS.bind(this),this._onMouseWheel=nS.bind(this),this._onKeyDown=iS.bind(this),this._onTouchStart=sS.bind(this),this._onTouchMove=rS.bind(this),this._onMouseDown=tS.bind(this),this._onMouseMove=eS.bind(this),this._interceptControlDown=aS.bind(this),this._interceptControlUp=lS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),i<-Math.PI?i+=We:i>Math.PI&&(i-=We),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Se.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hr.origin.copy(this.object.position),Hr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hr.direction))<ZM?this.object.lookAt(this.target):(bh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hr.intersectPlane(bh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>da||8*(1-this._lastQuaternion.dot(this.object.quaternion))>da||this._lastTargetPosition.distanceToSquared(this.target)>da?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Se.copy(i).sub(this.target);let s=Se.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $M(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function JM(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function QM(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ku),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function tS(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=se.DOLLY;break;case ss.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=se.ROTATE}break;case ss.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(wl)}function eS(r){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function nS(r){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(r.preventDefault(),this.dispatchEvent(wl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ku))}function iS(r){this.enabled!==!1&&this._handleKeyDown(r)}function sS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=se.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=se.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(wl)}function rS(r){switch(this._trackPointer(r),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=se.NONE}}function oS(r){this.enabled!==!1&&r.preventDefault()}function aS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lS(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const vn=new Cf;vn.background=new Pt(12571109);const nr=new _v({antialias:!0});nr.setSize(window.innerWidth,window.innerHeight);nr.shadowMap.enabled=!0;document.body.appendChild(nr.domElement);let Ah=new N,Gr=new N;const Hs=new Ve(75,window.innerWidth/window.innerHeight,.1,1e3);Hs.position.set(8,5,-20);const Xn=new KM(Hs,nr.domElement);Xn.enableDamping=!0;Xn.target.set(0,2,-30);Xn.minPolarAngle=Math.PI/6;Xn.maxPolarAngle=Math.PI/2.2;Xn.minDistance=8;Xn.maxDistance=20;const cS=new mu(4210752,10);vn.add(cS);const Vu=new pu(16777215,8);Vu.position.set(10,30,0);vn.add(Vu);const ws=new aM({gravity:new M(0,-9.82,0)}),Rh=5e3,hS=new Pi(new M(Rh/2,.5,Rh/2)),Tl=new pt({mass:0});Tl.addShape(hS);Tl.position.set(0,-.5,0);ws.addBody(Tl);const uS=new gl,dS=uS.load("assets/Garage_01.png",r=>{console.log("Texture loaded successfully"),r.encoding=void 0},void 0,r=>{console.error("Error loading texture:",r)}),fS=new Es;fS.load("assets/Garage_01.fbx",r=>{r.traverse(function(e){e.isMesh&&(e.material=new hu({map:dS,metalness:.5,roughness:.5}),e.material.needsUpdate=!0)}),vn.add(r);let t=.03;r.scale.set(t,t,t)},r=>{},r=>{console.log(r)});const pS=new gl,mS=pS.load("assets/Garage_01_Floor.png",r=>{console.log("Texture loaded successfully"),r.encoding=void 0},void 0,r=>{console.error("Error loading texture:",r)}),gS=new Es;gS.load("assets/Garage_01_Floor.fbx",r=>{r.traverse(function(e){e.isMesh&&(e.material=new hu({map:mS,metalness:.5,roughness:.5}),e.material.needsUpdate=!0)}),vn.add(r);let t=.03;r.scale.set(t,t,t)},r=>{},r=>{console.log(r)});const _S=new Pi(new M(1.75,1,4)),we=new pt({mass:150});we.addShape(_S);we.position.set(0,1.5,-30);we.linearDamping=.15;we.allowSleep=!0;we.sleepSpeedLimit=.1;we.sleepTimeLimit=1;ws.addBody(we);var pn=new re;vn.add(pn);const vS=new Es;vS.load("assets/SUV.fbx",r=>{pn.add(r);let t=.02;r.scale.set(t,t,t),r.position.y=-1.5,r.position.z=-.6,CS.style.display="none"},r=>{r.loaded/r.total*100},r=>{console.log(r)});const Ce=new Mx({chassisBody:we,indexRightAxis:0,indexUpAxis:1,indexForwardAxis:2}),Ch={radius:.825,directionLocal:new M(0,-1,0),suspensionStiffness:25,suspensionRestLength:.75,frictionSlip:9,dampingRelaxation:2,dampingCompression:2.4,maxSuspensionForce:1e5,rollInfluence:.125,axleLocal:new M(-1,0,0),maxSuspensionTravel:.3,customSlidingRotationalSpeed:-30,useCustomSlidingRotationalSpeed:!0},Ph=1.75,Ih=2.75;[new M(-1.75,0,Ih),new M(Ph,0,Ih),new M(-1.75,0,-2.75),new M(Ph,0,-2.75)].forEach(r=>{Ch.chassisConnectionPointLocal=r.clone(),Ce.addWheel(Ch)});Ce.addToWorld(ws);function xS(r){var t=new re;return new Es().load("assets/Wheel-R.fbx",n=>{t.add(n),vn.add(t);let i=.02;n.scale.set(i,i,i),r%2!=0&&(n.rotation.y=Math.PI)},n=>{n.loaded/n.total*100},n=>{console.log(n)}),t}const Lh=Ce.wheelInfos.map((r,t)=>{const e=xS(t);return vn.add(e),e}),is={w:!1,s:!1,a:!1,d:!1};window.addEventListener("keydown",r=>is[r.key.toLowerCase()]=!0);window.addEventListener("keyup",r=>is[r.key.toLowerCase()]=!1);const yS=new wp;let Wr=0,bl=!1,Al=!1,Rl=!1,Cl=!1;function Dh(r){const t=new M(0,1,0),n=r.quaternion.vmult(t).y<0,s=r.velocity.length()<.1;return n&&s}function Hu(){requestAnimationFrame(Hu);const r=yS.getDelta();ws.step(1/60,r,5);const t=800,e=.45,n=5;let i=is.w||bl,s=is.s||Al,o=is.a||Rl,a=is.d||Cl,l=i||s||o||a;if(ni){i?(Ce.applyEngineForce(-800,2),Ce.applyEngineForce(-800,3)):s?(Ce.applyEngineForce(t,2),Ce.applyEngineForce(t,3)):(Ce.applyEngineForce(0,2),Ce.applyEngineForce(0,3));let c=0;o?c=e:a&&(c=-.45),Wr=Pe.lerp(Wr,c,r*n)}Ce.setSteeringValue(Wr,0),Ce.setSteeringValue(Wr,1),pn.position.copy(we.position),pn.quaternion.copy(we.quaternion);for(let c=0;c<Ce.wheelInfos.length;c++){Ce.updateWheelTransform(c);const h=Ce.wheelInfos[c].worldTransform;Lh[c].position.copy(h.position),Lh[c].quaternion.copy(h.quaternion)}if(we.velocity.length()<.5&&!l){for(let c=0;c<4;c++)Ce.applyEngineForce(0,c),Ce.setSteeringValue(0,c);we.velocity.set(0,0,0),we.angularVelocity.set(0,0,0)}if(Dh(we)&&(vo(),console.log("Car is upside down!")),Xn.target.copy(pn.position),Xn.update(),ES(),wS(),ni){let c=6;const h=new N(0,c,-12);h.applyQuaternion(pn.quaternion),Ah.copy(pn.position).add(h),Hs.position.lerp(Ah,.025),Gr.copy(pn.position),Dh(we)?Gr.y-=2:Gr.y+=2,Hs.lookAt(Gr)}nr.render(vn,Hs)}var $r=[],nl=[];const Sn=[{w:1,h:100,d:10,posX:45,posY:3,posZ:0},{w:1,h:100,d:10,posX:-45,posY:3,posZ:0},{w:100,h:1,d:10,posX:0,posY:3,posZ:48},{w:100,h:1,d:10,posX:0,posY:3,posZ:-48}];for(let r=0;r<Sn.length;r++){const t=new pt({mass:0,material:new Ss,shape:new Pi(new M(Sn[r].w/2,Sn[r].h/2,Sn[r].d/2)),position:new M(Sn[r].posX,Sn[r].posY,Sn[r].posZ)});t.quaternion.setFromEuler(-Math.PI/2,0,0),ws.addBody(t),$r.push(t),t.addEventListener("collide",function(n){n.body==we&&vo()});const e=new Ke(new Ci(Sn[r].w,Sn[r].h,Sn[r].d),new ho({color:255}));nl.push(e)}function MS(){for(let r=0;r<$r.length;r++)nl[r].position.copy($r[r].position),nl[r].quaternion.copy($r[r].quaternion)}MS();var Ei=new re;Ei.position.set(35,0,35);vn.add(Ei);const SS=new Es;SS.load("assets/ParkingSpot.fbx",r=>{let t=.04;r.scale.set(t,t,t),Ei.add(r)},r=>{console.log(r.loaded/r.total*100+"% loaded")},r=>{console.log(r)});function ES(){if(Ei){var r=0,t=2,e=1.5;if(pn.position.distanceTo(Ei.position)<5){const n=new Ie().setFromEuler(pn.rotation),i=new Ie().setFromEuler(Ei.rotation),s=n.angleTo(i);if(r=Pe.radToDeg(s),r<t&&pn.position.distanceTo(Ei.position)<e){vo(!0),we.velocity.set(0,0,0),we.angularVelocity.set(0,0,0);for(let o=0;o<4;o++)Ce.applyEngineForce(0,o),Ce.setSteeringValue(0,o)}Wu.style.display="flex",PS.textContent=Math.floor(100-Math.abs(r-t))+"%"}}}var Os=[],il=[],Jr=[];let Fh=3,Nh=5,Uh=10;const Zi=[{posX:-15,posY:3,posZ:-40},{posX:-15,posY:3,posZ:-30},{posX:-15,posY:3,posZ:-20},{posX:-15,posY:3,posZ:-10},{posX:-11.5,posY:3,posZ:0,rot:Math.PI/2},{posX:-8,posY:3,posZ:10},{posX:-8,posY:3,posZ:20},{posX:10,posY:3,posZ:0},{posX:10,posY:3,posZ:-10},{posX:13.5,posY:3,posZ:-20,rot:Math.PI/2}];for(let r=0;r<Zi.length;r++){let t=new pt({mass:50,material:new Ss,shape:new Pi(new M(Fh/2,Nh/2,Uh/2)),position:new M(Zi[r].posX,Zi[r].posY,Zi[r].posZ)});t.quaternion.setFromEuler(0,Zi[r].rot?Zi[r].rot:0,0),ws.addBody(t),Os.push(t),t.addEventListener("collide",function(i){i.body==we&&vo()});const e=new Ke(new Ci(Fh,Nh,Uh),new ho({color:255}));il.push(e),e.position.copy(t.position),e.quaternion.copy(t.quaternion),new Es().load("assets/Obstacle01.fbx",i=>{let s=.02;i.scale.set(s,s,s);var o=new re;o.position.set(0,-2.5,0),o.add(i),vn.add(o),Jr.push(i)},i=>{console.log(i.loaded/i.total*100+"% loaded")},i=>{console.log(i)})}function wS(){for(let r=0;r<Jr.length;r++)il[r].position.copy(Os[r].position),il[r].quaternion.copy(Os[r].quaternion),Jr[r].position.copy(Os[r].position),Jr[r].quaternion.copy(Os[r].quaternion)}Hu();var ni=!1;const TS=document.getElementById("controlScreen"),bS=document.getElementById("tutorialStep1"),Gu=document.getElementById("tutorialStep2"),AS=document.getElementById("endScreen"),RS=document.getElementById("completeScreen"),CS=document.getElementById("loadingScreen"),Wu=document.getElementById("completionDisplay");var PS=Wu.children[1];function IS(){document.getElementById("img-engine-off").style.display=ni?"none":"block",document.getElementById("img-engine-on").style.display=ni?"block":"none"}window.toggleEngine=function(){ni=!ni,IS(),bS.style.display="none",Gu.style.display="block",ni?(document.getElementById("engineOnSound").play(),document.getElementById("engineOnSound").addEventListener("ended",()=>{document.getElementById("engineLoopSound").play()})):(document.getElementById("engineOffSound").play(),document.getElementById("engineLoopSound").pause()),Xn.enabled=!ni};function vo(r=!1){TS.style.display="none",r?RS.style.display="flex":AS.style.display="flex"}window.toggleGearPos=function(){};window.pressGas=function(){bl=!0,Gu.style.display="none"};window.pressBrake=function(){Al=!0};window.releasePedal=function(){bl=!1,Al=!1};window.pressLeft=function(){Rl=!0};window.pressRight=function(){Cl=!0};window.releaseArrow=function(){Rl=!1,Cl=!1};const ir=document.getElementById("btnAccelerate"),sr=document.getElementById("btnBrake"),rr=document.getElementById("btnLeft"),or=document.getElementById("btnRight");ir.addEventListener("touchstart",pressGas);ir.addEventListener("mousedown",pressGas);ir.addEventListener("touchend",releasePedal);ir.addEventListener("mouseup",releasePedal);ir.addEventListener("touchcancel",releasePedal);sr.addEventListener("touchstart",pressBrake);sr.addEventListener("mousedown",pressBrake);sr.addEventListener("touchend",releasePedal);sr.addEventListener("mouseup",releasePedal);sr.addEventListener("touchcancel",releasePedal);rr.addEventListener("touchstart",pressLeft);rr.addEventListener("mousedown",pressLeft);rr.addEventListener("touchend",releaseArrow);rr.addEventListener("mouseup",releaseArrow);rr.addEventListener("touchcancel",releaseArrow);or.addEventListener("touchstart",pressRight);or.addEventListener("mousedown",pressRight);or.addEventListener("touchend",releaseArrow);or.addEventListener("mouseup",releaseArrow);or.addEventListener("touchcancel",releaseArrow);window.addEventListener("contextmenu",function(r){r.preventDefault()});
