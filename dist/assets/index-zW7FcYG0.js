(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="174",pl=0,Ta=1,ml=2,wo=1,_l=2,hn=3,Rn=0,Pe=1,Qe=2,yn=0,di=1,xa=2,Ma=3,ya=4,gl=5,Gn=100,Sl=101,vl=102,El=103,Tl=104,xl=200,Ml=201,yl=202,Al=203,sr=204,rr=205,Rl=206,Cl=207,bl=208,wl=209,Pl=210,Il=211,Ll=212,Dl=213,Ul=214,ar=0,or=1,lr=2,mi=3,cr=4,ur=5,hr=6,dr=7,Qr=0,Nl=1,Ol=2,An=0,Fl=1,Bl=2,kl=3,Gl=4,Hl=5,zl=6,Vl=7,Po=300,_i=301,gi=302,fr=303,pr=304,Ss=306,mr=1e3,zn=1001,_r=1002,Ze=1003,Wl=1004,Gi=1005,Ue=1006,Ms=1007,Vn=1008,mn=1009,Io=1010,Lo=1011,Li=1012,ta=1013,Xn=1014,dn=1015,Di=1016,ea=1017,na=1018,Si=1020,Do=35902,Uo=1021,No=1022,qe=1023,Oo=1024,Fo=1025,fi=1026,vi=1027,Bo=1028,ia=1029,ko=1030,sa=1031,ra=1033,cs=33776,us=33777,hs=33778,ds=33779,gr=35840,Sr=35841,vr=35842,Er=35843,Tr=36196,xr=37492,Mr=37496,yr=37808,Ar=37809,Rr=37810,Cr=37811,br=37812,wr=37813,Pr=37814,Ir=37815,Lr=37816,Dr=37817,Ur=37818,Nr=37819,Or=37820,Fr=37821,fs=36492,Br=36494,kr=36495,Go=36283,Gr=36284,Hr=36285,zr=36286,Xl=3200,Yl=3201,Ho=0,Kl=1,xn="",ke="srgb",Ei="srgb-linear",ms="linear",Qt="srgb",Zn=7680,Aa=519,ql=512,Zl=513,$l=514,zo=515,jl=516,Jl=517,Ql=518,tc=519,Ra=35044,Ca="300 es",fn=2e3,_s=2001;class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ys=Math.PI/180,Vr=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ft(i,t,e){return Math.max(t,Math.min(e,i))}function ec(i,t){return(i%t+t)%t}function As(i,t,e){return(1-e)*i+e*t}function Ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,s,r,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],_=n[8],S=s[0],p=s[3],h=s[6],R=s[1],M=s[4],T=s[7],I=s[2],w=s[5],C=s[8];return r[0]=a*S+o*R+l*I,r[3]=a*p+o*M+l*w,r[6]=a*h+o*T+l*C,r[1]=c*S+u*R+d*I,r[4]=c*p+u*M+d*w,r[7]=c*h+u*T+d*C,r[2]=f*S+m*R+_*I,r[5]=f*p+m*M+_*w,r[8]=f*h+m*T+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*r,m=c*r-a*l,_=e*d+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=d*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=f*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=m*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Rs.makeScale(t,e)),this}rotate(t){return this.premultiply(Rs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rs=new Lt;function Vo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nc(){const i=gs("canvas");return i.style.display="block",i}const ba={};function On(i){i in ba||(ba[i]=!0,console.warn(i))}function ic(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const wa=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pa=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ac(){const i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(s.r=pn(s.r),s.g=pn(s.g),s.b=pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xn?ms:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:t,whitePoint:n,transfer:ms,toXYZ:wa,fromXYZ:Pa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:wa,fromXYZ:Pa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const Kt=ac();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $n;class oc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=gs("canvas")),$n.width=t.width,$n.height=t.height;const n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lc=0;class aa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Cs(s[a].image)):r.push(Cs(s[a]))}else r=Cs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Cs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cc=0;class Ce extends xi{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=zn,s=zn,r=Ue,a=Vn,o=qe,l=mn,c=Ce.DEFAULT_ANISOTROPY,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Ui(),this.name="",this.source=new aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Po;Ce.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],_=l[9],S=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,T=(m+1)/2,I=(h+1)/2,w=(u+f)/4,C=(d+S)/4,U=(_+p)/4;return M>T&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=C/n):T>I?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=w/s,r=U/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=U/r),this.set(n,s,r,e),this}let R=Math.sqrt((p-_)*(p-_)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(p-_)/R,this.y=(d-S)/R,this.z=(f-u)/R,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uc extends xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new aa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wo extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hc extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const f=r[a+0],m=r[a+1],_=r[a+2],S=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=S;return}if(d!==S||l!==f||c!==m||u!==_){let p=1-o;const h=l*f+c*m+u*_+d*S,R=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const I=Math.sqrt(M),w=Math.atan2(I,h*R);p=Math.sin(p*w)/I,o=Math.sin(o*w)/I}const T=o*R;if(l=l*p+f*T,c=c*p+m*T,u=u*p+_*T,d=d*p+S*T,p===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+u*d+l*m-c*f,t[e+1]=l*_+u*f+c*d-o*m,t[e+2]=c*_+u*m+o*f-l*d,t[e+3]=u*_-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"YZX":this._x=f*u*d+c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d-f*m*_;break;case"XZY":this._x=f*u*d-c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bs.copy(this).projectOnVector(t),this.sub(bs)}reflect(t){return this.sub(bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bs=new O,Ia=new Ni;class Oi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ve):Ve.fromBufferAttribute(r,a),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hi.copy(n.boundingBox)),Hi.applyMatrix4(t.matrixWorld),this.union(Hi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ci),zi.subVectors(this.max,Ci),jn.subVectors(t.a,Ci),Jn.subVectors(t.b,Ci),Qn.subVectors(t.c,Ci),_n.subVectors(Jn,jn),gn.subVectors(Qn,Jn),Pn.subVectors(jn,Qn);let e=[0,-_n.z,_n.y,0,-gn.z,gn.y,0,-Pn.z,Pn.y,_n.z,0,-_n.x,gn.z,0,-gn.x,Pn.z,0,-Pn.x,-_n.y,_n.x,0,-gn.y,gn.x,0,-Pn.y,Pn.x,0];return!ws(e,jn,Jn,Qn,zi)||(e=[1,0,0,0,1,0,0,0,1],!ws(e,jn,Jn,Qn,zi))?!1:(Vi.crossVectors(_n,gn),e=[Vi.x,Vi.y,Vi.z],ws(e,jn,Jn,Qn,zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rn=[new O,new O,new O,new O,new O,new O,new O,new O],Ve=new O,Hi=new Oi,jn=new O,Jn=new O,Qn=new O,_n=new O,gn=new O,Pn=new O,Ci=new O,zi=new O,Vi=new O,In=new O;function ws(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){In.fromArray(i,r);const o=s.x*Math.abs(In.x)+s.y*Math.abs(In.y)+s.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),u=n.dot(In);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const dc=new Oi,bi=new O,Ps=new O;class oa{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bi.subVectors(t,this.center);const e=bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ps.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bi.copy(t.center).add(Ps)),this.expandByPoint(bi.copy(t.center).sub(Ps))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new O,Is=new O,Wi=new O,Sn=new O,Ls=new O,Xi=new O,Ds=new O;class fc{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Is.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(Is);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Wi),o=Sn.dot(this.direction),l=-Sn.dot(Wi),c=Sn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,_;if(u>0)if(d=a*l-o,f=a*o-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const S=1/u;d*=S,f*=S,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Is).addScaledVector(Wi,f),m}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),s=an.dot(an)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,s,r){Ls.subVectors(e,t),Xi.subVectors(n,t),Ds.crossVectors(Ls,Xi);let a=this.direction.dot(Ds),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,t);const l=o*this.direction.dot(Xi.crossVectors(Sn,Xi));if(l<0)return null;const c=o*this.direction.dot(Ls.cross(Sn));if(c<0||l+c>a)return null;const u=-o*Sn.dot(Ds);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,a,o,l,c,u,d,f,m,_,S,p){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,f,m,_,S,p)}set(t,e,n,s,r,a,o,l,c,u,d,f,m,_,S,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=_,h[11]=S,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ti.setFromMatrixColumn(t,0).length(),r=1/ti.setFromMatrixColumn(t,1).length(),a=1/ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*d,_=o*u,S=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=f-S*c,e[9]=-o*l,e[2]=S-f*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*d,_=c*u,S=c*d;e[0]=f+S*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=S+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*d,_=c*u,S=c*d;e[0]=f-S*o,e[4]=-a*d,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=S-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*d,_=o*u,S=o*d;e[0]=l*u,e[4]=_*c-m,e[8]=f*c+S,e[1]=l*d,e[5]=S*c+f,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=S-f*d,e[8]=_*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+_,e[10]=f-S*d}else if(t.order==="XZY"){const f=a*l,m=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+S,e[5]=a*u,e[9]=m*d-_,e[2]=_*d-m,e[6]=o*u,e[10]=S*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pc,t,mc)}lookAt(t,e,n){const s=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),vn.crossVectors(n,Le),vn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),vn.crossVectors(n,Le)),vn.normalize(),Yi.crossVectors(Le,vn),s[0]=vn.x,s[4]=Yi.x,s[8]=Le.x,s[1]=vn.y,s[5]=Yi.y,s[9]=Le.y,s[2]=vn.z,s[6]=Yi.z,s[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],_=n[2],S=n[6],p=n[10],h=n[14],R=n[3],M=n[7],T=n[11],I=n[15],w=s[0],C=s[4],U=s[8],x=s[12],E=s[1],P=s[5],H=s[9],G=s[13],X=s[2],$=s[6],W=s[10],J=s[14],V=s[3],rt=s[7],dt=s[11],Tt=s[15];return r[0]=a*w+o*E+l*X+c*V,r[4]=a*C+o*P+l*$+c*rt,r[8]=a*U+o*H+l*W+c*dt,r[12]=a*x+o*G+l*J+c*Tt,r[1]=u*w+d*E+f*X+m*V,r[5]=u*C+d*P+f*$+m*rt,r[9]=u*U+d*H+f*W+m*dt,r[13]=u*x+d*G+f*J+m*Tt,r[2]=_*w+S*E+p*X+h*V,r[6]=_*C+S*P+p*$+h*rt,r[10]=_*U+S*H+p*W+h*dt,r[14]=_*x+S*G+p*J+h*Tt,r[3]=R*w+M*E+T*X+I*V,r[7]=R*C+M*P+T*$+I*rt,r[11]=R*U+M*H+T*W+I*dt,r[15]=R*x+M*G+T*J+I*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],m=t[14],_=t[3],S=t[7],p=t[11],h=t[15];return _*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*m-n*l*m)+S*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+p*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-e*l*d+e*o*f+s*a*d-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],m=t[11],_=t[12],S=t[13],p=t[14],h=t[15],R=d*p*c-S*f*c+S*l*m-o*p*m-d*l*h+o*f*h,M=_*f*c-u*p*c-_*l*m+a*p*m+u*l*h-a*f*h,T=u*S*c-_*d*c+_*o*m-a*S*m-u*o*h+a*d*h,I=_*d*l-u*S*l-_*o*f+a*S*f+u*o*p-a*d*p,w=e*R+n*M+s*T+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=R*C,t[1]=(S*f*r-d*p*r-S*s*m+n*p*m+d*s*h-n*f*h)*C,t[2]=(o*p*r-S*l*r+S*s*c-n*p*c-o*s*h+n*l*h)*C,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*m-n*l*m)*C,t[4]=M*C,t[5]=(u*p*r-_*f*r+_*s*m-e*p*m-u*s*h+e*f*h)*C,t[6]=(_*l*r-a*p*r-_*s*c+e*p*c+a*s*h-e*l*h)*C,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*m+e*l*m)*C,t[8]=T*C,t[9]=(_*d*r-u*S*r-_*n*m+e*S*m+u*n*h-e*d*h)*C,t[10]=(a*S*r-_*o*r+_*n*c-e*S*c-a*n*h+e*o*h)*C,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*m-e*o*m)*C,t[12]=I*C,t[13]=(u*S*s-_*d*s+_*n*f-e*S*f-u*n*p+e*d*p)*C,t[14]=(_*o*s-a*S*s-_*n*l+e*S*l+a*n*p-e*o*p)*C,t[15]=(a*d*s-u*o*s+u*n*l-e*d*l-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,f=r*c,m=r*u,_=r*d,S=a*u,p=a*d,h=o*d,R=l*c,M=l*u,T=l*d,I=n.x,w=n.y,C=n.z;return s[0]=(1-(S+h))*I,s[1]=(m+T)*I,s[2]=(_-M)*I,s[3]=0,s[4]=(m-T)*w,s[5]=(1-(f+h))*w,s[6]=(p+R)*w,s[7]=0,s[8]=(_+M)*C,s[9]=(p-R)*C,s[10]=(1-(f+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ti.set(s[0],s[1],s[2]).length();const a=ti.set(s[4],s[5],s[6]).length(),o=ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);const c=1/r,u=1/a,d=1/o;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=u,We.elements[5]*=u,We.elements[6]*=u,We.elements[8]*=d,We.elements[9]*=d,We.elements[10]*=d,e.setFromRotationMatrix(We),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=fn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let m,_;if(o===fn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===_s)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn){const l=this.elements,c=1/(e-t),u=1/(n-s),d=1/(a-r),f=(e+t)*c,m=(n+s)*u;let _,S;if(o===fn)_=(a+r)*d,S=-2*d;else if(o===_s)_=r*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ti=new O,We=new he,pc=new O(0,0,0),mc=new O(1,1,1),vn=new O,Yi=new O,Le=new O,La=new he,Da=new Ni;class en{constructor(t=0,e=0,n=0,s=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return La.makeRotationFromQuaternion(t),this.setFromRotationMatrix(La,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Da.setFromEuler(this),this.setFromQuaternion(Da,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _c=0;const Ua=new O,ei=new Ni,on=new he,Ki=new O,wi=new O,gc=new O,Sc=new Ni,Na=new O(1,0,0),Oa=new O(0,1,0),Fa=new O(0,0,1),Ba={type:"added"},vc={type:"removed"},ni={type:"childadded",child:null},Us={type:"childremoved",child:null};class Me extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new O,e=new en,n=new Ni,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Lt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(Na,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(Fa,t)}translateOnAxis(t,e){return Ua.copy(t).applyQuaternion(this.quaternion),this.position.add(Ua.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Na,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(Fa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(wi,Ki,this.up):on.lookAt(Ki,wi,this.up),this.quaternion.setFromRotationMatrix(on),s&&(on.extractRotation(s.matrixWorld),ei.setFromRotationMatrix(on),this.quaternion.premultiply(ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ba),ni.child=t,this.dispatchEvent(ni),ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vc),Us.child=t,this.dispatchEvent(Us),Us.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ba),ni.child=t,this.dispatchEvent(ni),ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,gc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Sc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new O(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new O,ln=new O,Ns=new O,cn=new O,ii=new O,si=new O,ka=new O,Os=new O,Fs=new O,Bs=new O,ks=new ue,Gs=new ue,Hs=new ue;class Ke{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),ln.subVectors(n,e),Ns.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(ln),l=Xe.dot(Ns),c=ln.dot(ln),u=ln.dot(Ns),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ks.setScalar(0),Gs.setScalar(0),Hs.setScalar(0),ks.fromBufferAttribute(t,e),Gs.fromBufferAttribute(t,n),Hs.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ks,r.x),a.addScaledVector(Gs,r.y),a.addScaledVector(Hs,r.z),a}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),ln.subVectors(t,e),Xe.cross(ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Xe.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ii.subVectors(s,n),si.subVectors(r,n),Os.subVectors(t,n);const l=ii.dot(Os),c=si.dot(Os);if(l<=0&&c<=0)return e.copy(n);Fs.subVectors(t,s);const u=ii.dot(Fs),d=si.dot(Fs);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ii,a);Bs.subVectors(t,r);const m=ii.dot(Bs),_=si.dot(Bs);if(_>=0&&m<=_)return e.copy(r);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(si,o);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return ka.subVectors(r,s),o=(d-u)/(d-u+(m-_)),e.copy(s).addScaledVector(ka,o);const h=1/(p+S+f);return a=S*h,o=f*h,e.copy(n).addScaledVector(ii,a).addScaledVector(si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},qi={h:0,s:0,l:0};function zs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=ec(t,1),e=Ft(e,0,1),n=Ft(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zs(a,r,t+1/3),this.g=zs(a,r,t),this.b=zs(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Yo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Kt.fromWorkingColorSpace(xe.copy(this),t),Math.round(Ft(xe.r*255,0,255))*65536+Math.round(Ft(xe.g*255,0,255))*256+Math.round(Ft(xe.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(xe.copy(this),e);const n=xe.r,s=xe.g,r=xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=ke){Kt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,s=xe.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(qi);const n=As(En.h,qi.h,e),s=As(En.s,qi.s,e),r=As(En.l,qi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new qt;qt.NAMES=Yo;let Ec=0;class Fi extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=di,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sr,this.blendDst=rr,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sr&&(n.blendSrc=this.blendSrc),this.blendDst!==rr&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ge extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new O,Zi=new Bt;let Tc=0;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zi.fromBufferAttribute(this,e),Zi.applyMatrix3(t),this.setXY(e,Zi.x,Zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ra&&(t.usage=this.usage),t}}class Ko extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qo extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xc=0;const Be=new he,Vs=new Me,ri=new O,De=new Oi,Pi=new Oi,Se=new O;class nn extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vo(t)?qo:Ko)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Vs.lookAt(t),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(De.min,Pi.min),De.expandByPoint(Se),Se.addVectors(De.max,Pi.max),De.expandByPoint(Se)):(De.expandByPoint(Pi.min),De.expandByPoint(Pi.max))}De.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Se.fromBufferAttribute(o,c),l&&(ri.fromBufferAttribute(t,c),Se.add(ri)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new O,l[U]=new O;const c=new O,u=new O,d=new O,f=new Bt,m=new Bt,_=new Bt,S=new O,p=new O;function h(U,x,E){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,x),d.fromBufferAttribute(n,E),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,x),_.fromBufferAttribute(r,E),u.sub(c),d.sub(c),m.sub(f),_.sub(f);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(P),o[U].add(S),o[x].add(S),o[E].add(S),l[U].add(p),l[x].add(p),l[E].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,x=R.length;U<x;++U){const E=R[U],P=E.start,H=E.count;for(let G=P,X=P+H;G<X;G+=3)h(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const M=new O,T=new O,I=new O,w=new O;function C(U){I.fromBufferAttribute(s,U),w.copy(I);const x=o[U];M.copy(x),M.sub(I.multiplyScalar(I.dot(x))).normalize(),T.crossVectors(w,x);const P=T.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,P)}for(let U=0,x=R.length;U<x;++U){const E=R[U],P=E.start,H=E.count;for(let G=P,X=P+H;G<X;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),S=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*u;for(let h=0;h<u;h++)f[_++]=c[m++]}return new tn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new he,Ln=new fc,$i=new oa,Ha=new O,ji=new O,Ji=new O,Qi=new O,Ws=new O,ts=new O,za=new O,es=new O;class ut extends Me{constructor(t=new nn,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Ws.fromBufferAttribute(d,t),a?ts.addScaledVector(Ws,u):ts.addScaledVector(Ws.sub(e),u))}e.add(ts)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!($i.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere($i,Ha)===null||Ln.origin.distanceToSquared(Ha)>(t.far-t.near)**2))&&(Ga.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(Ga),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const p=f[_],h=a[p.materialIndex],R=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=R,I=M;T<I;T+=3){const w=o.getX(T),C=o.getX(T+1),U=o.getX(T+2);s=ns(this,h,t,n,c,u,d,w,C,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=_,h=S;p<h;p+=3){const R=o.getX(p),M=o.getX(p+1),T=o.getX(p+2);s=ns(this,a,t,n,c,u,d,R,M,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const p=f[_],h=a[p.materialIndex],R=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=R,I=M;T<I;T+=3){const w=T,C=T+1,U=T+2;s=ns(this,h,t,n,c,u,d,w,C,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=_,h=S;p<h;p+=3){const R=p,M=p+1,T=p+2;s=ns(this,a,t,n,c,u,d,R,M,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Mc(i,t,e,n,s,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Rn,o),l===null)return null;es.copy(o),es.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(es);return c<e.near||c>e.far?null:{distance:c,point:es.clone(),object:i}}function ns(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ji),i.getVertexPosition(l,Ji),i.getVertexPosition(c,Qi);const u=Mc(i,t,e,n,ji,Ji,Qi,za);if(u){const d=new O;Ke.getBarycoord(za,ji,Ji,Qi,d),s&&(u.uv=Ke.getInterpolatedAttribute(s,o,l,c,d,new Bt)),r&&(u.uv1=Ke.getInterpolatedAttribute(r,o,l,c,d,new Bt)),a&&(u.normal=Ke.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};Ke.getNormal(ji,Ji,Qi,f.normal),u.face=f,u.barycoord=d}return u}class Vt extends nn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(d,2));function _(S,p,h,R,M,T,I,w,C,U,x){const E=T/C,P=I/U,H=T/2,G=I/2,X=w/2,$=C+1,W=U+1;let J=0,V=0;const rt=new O;for(let dt=0;dt<W;dt++){const Tt=dt*P-G;for(let Ot=0;Ot<$;Ot++){const te=Ot*E-H;rt[S]=te*R,rt[p]=Tt*M,rt[h]=X,c.push(rt.x,rt.y,rt.z),rt[S]=0,rt[p]=0,rt[h]=w>0?1:-1,u.push(rt.x,rt.y,rt.z),d.push(Ot/C),d.push(1-dt/U),J+=1}}for(let dt=0;dt<U;dt++)for(let Tt=0;Tt<C;Tt++){const Ot=f+Tt+$*dt,te=f+Tt+$*(dt+1),K=f+(Tt+1)+$*(dt+1),et=f+(Tt+1)+$*dt;l.push(Ot,te,et),l.push(te,K,et),V+=6}o.addGroup(m,V,x),m+=V,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=Ti(i[e]);for(const s in n)t[s]=n[s]}return t}function yc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Ac={clone:Ti,merge:Re};var Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=Cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=yc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $o extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new O,Va=new Bt,Wa=new Bt;class Ye extends $o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Va,Wa),e.subVectors(Wa,Va)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ai=-90,oi=1;class bc extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ye(ai,oi,t,e);s.layers=this.layers,this.add(s);const r=new Ye(ai,oi,t,e);r.layers=this.layers,this.add(r);const a=new Ye(ai,oi,t,e);a.layers=this.layers,this.add(a);const o=new Ye(ai,oi,t,e);o.layers=this.layers,this.add(o);const l=new Ye(ai,oi,t,e);l.layers=this.layers,this.add(l);const c=new Ye(ai,oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class jo extends Ce{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wc extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:yn});r.uniforms.tEquirect.value=e;const a=new ut(s,r),o=e.minFilter;return e.minFilter===Vn&&(e.minFilter=Ue),new bc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class ee extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pc={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const p=e.getJointPose(S,n),h=this._getHandJoint(c,S);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pc)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ic extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ys=new O,Lc=new O,Dc=new Lt;class Fn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ys.subVectors(n,e).cross(Lc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ys),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dc.getNormalMatrix(t),s=this.coplanarPoint(Ys).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new oa,is=new O;class la{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],_=s[9],S=s[10],p=s[11],h=s[12],R=s[13],M=s[14],T=s[15];if(n[0].setComponents(l-r,f-c,p-m,T-h).normalize(),n[1].setComponents(l+r,f+c,p+m,T+h).normalize(),n[2].setComponents(l+a,f+u,p+_,T+R).normalize(),n[3].setComponents(l-a,f-u,p-_,T-R).normalize(),n[4].setComponents(l-o,f-d,p-S,T-M).normalize(),e===fn)n[5].setComponents(l+o,f+d,p+S,T+M).normalize();else if(e===_s)n[5].setComponents(o,d,S,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(is.x=s.normal.x>0?t.max.x:t.min.x,is.y=s.normal.y>0?t.max.y:t.min.y,is.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ca extends Ce{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jo extends Ce{constructor(t,e,n,s,r,a,o,l,c,u=fi){if(u!==fi&&u!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fi&&(n=Xn),n===void 0&&u===vi&&(n=Si),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new aa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class me extends nn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],m=[];let _=0;const S=[],p=n/2;let h=0;R(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(m,2));function R(){const T=new O,I=new O;let w=0;const C=(e-t)/n;for(let U=0;U<=r;U++){const x=[],E=U/r,P=E*(e-t)+t;for(let H=0;H<=s;H++){const G=H/s,X=G*l+o,$=Math.sin(X),W=Math.cos(X);I.x=P*$,I.y=-E*n+p,I.z=P*W,d.push(I.x,I.y,I.z),T.set($,C,W).normalize(),f.push(T.x,T.y,T.z),m.push(G,1-E),x.push(_++)}S.push(x)}for(let U=0;U<s;U++)for(let x=0;x<r;x++){const E=S[x][U],P=S[x+1][U],H=S[x+1][U+1],G=S[x][U+1];(t>0||x!==0)&&(u.push(E,P,G),w+=3),(e>0||x!==r-1)&&(u.push(P,H,G),w+=3)}c.addGroup(h,w,0),h+=w}function M(T){const I=_,w=new Bt,C=new O;let U=0;const x=T===!0?t:e,E=T===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,p*E,0),f.push(0,E,0),m.push(.5,.5),_++;const P=_;for(let H=0;H<=s;H++){const X=H/s*l+o,$=Math.cos(X),W=Math.sin(X);C.x=x*W,C.y=p*E,C.z=x*$,d.push(C.x,C.y,C.z),f.push(0,E,0),w.x=$*.5+.5,w.y=W*.5*E+.5,m.push(w.x,w.y),_++}for(let H=0;H<s;H++){const G=I+H,X=P+H;T===!0?u.push(X,X+1,G):u.push(X+1,X,G),U+=3}c.addGroup(h,U,T===!0?1:2),h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua extends me{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ua(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kn extends nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=e/l,m=[],_=[],S=[],p=[];for(let h=0;h<u;h++){const R=h*f-a;for(let M=0;M<c;M++){const T=M*d-r;_.push(T,-R,0),S.push(0,0,1),p.push(M/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let R=0;R<o;R++){const M=R+c*h,T=R+c*(h+1),I=R+1+c*(h+1),w=R+1+c*h;m.push(M,T,w),m.push(T,I,w)}this.setIndex(m),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ha extends nn{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=t;const f=(e-t)/s,m=new O,_=new Bt;for(let S=0;S<=s;S++){for(let p=0;p<=n;p++){const h=r+p/n*a;m.x=d*Math.cos(h),m.y=d*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,u.push(_.x,_.y)}d+=f}for(let S=0;S<s;S++){const p=S*(n+1);for(let h=0;h<n;h++){const R=h+p,M=R,T=R+n+1,I=R+n+2,w=R+1;o.push(M,T,w),o.push(T,I,w)}}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Mi extends nn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new O,f=new O,m=[],_=[],S=[],p=[];for(let h=0;h<=n;h++){const R=[],M=h/n;let T=0;h===0&&a===0?T=.5/e:h===n&&l===Math.PI&&(T=-.5/e);for(let I=0;I<=e;I++){const w=I/e;d.x=-t*Math.cos(s+w*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(s+w*r)*Math.sin(a+M*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),p.push(w+T,1-M),R.push(c++)}u.push(R)}for(let h=0;h<n;h++)for(let R=0;R<e;R++){const M=u[h][R+1],T=u[h][R],I=u[h+1][R],w=u[h+1][R+1];(h!==0||a>0)&&m.push(M,T,w),(h!==n-1||l<Math.PI)&&m.push(T,I,w)}this.setIndex(m),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nt extends Fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uc extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nc extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qo extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ks=new he,Xa=new O,Ya=new O;class Oc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xa),Ya.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ya),e.updateMatrixWorld(),Ks.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ks),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ks)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class da extends $o{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fc extends Oc{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bc extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Fc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kc extends Qo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gc extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Hc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ka(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ka();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ka(){return performance.now()}function qa(i,t,e,n){const s=zc(n);switch(e){case Uo:return i*t;case Oo:return i*t;case Fo:return i*t*2;case Bo:return i*t/s.components*s.byteLength;case ia:return i*t/s.components*s.byteLength;case ko:return i*t*2/s.components*s.byteLength;case sa:return i*t*2/s.components*s.byteLength;case No:return i*t*3/s.components*s.byteLength;case qe:return i*t*4/s.components*s.byteLength;case ra:return i*t*4/s.components*s.byteLength;case cs:case us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hs:case ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sr:case Er:return Math.max(i,16)*Math.max(t,8)/4;case gr:case vr:return Math.max(i,8)*Math.max(t,8)/2;case Tr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ar:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case br:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ir:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ur:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Or:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fs:case Br:case kr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Go:case Gr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hr:case zr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zc(i){switch(i){case mn:case Io:return{byteLength:1,components:1};case Li:case Lo:case Di:return{byteLength:2,components:1};case ea:case na:return{byteLength:2,components:4};case Xn:case ta:case dn:return{byteLength:4,components:1};case Do:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vc(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<d.length;m++){const _=d[f],S=d[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,d[f]=S)}d.length=f+1;for(let m=0,_=d.length;m<_;m++){const S=d[m];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xc=`#ifdef USE_ALPHAHASH
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
#endif`,Yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$c=`#ifdef USE_AOMAP
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
#endif`,jc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jc=`#ifdef USE_BATCHING
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
#endif`,Qc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iu=`#ifdef USE_IRIDESCENCE
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
#endif`,su=`#ifdef USE_BUMPMAP
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
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fu=`#define PI 3.141592653589793
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
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mu=`vec3 transformedNormal = objectNormal;
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
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
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
}`,Lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nu=`uniform bool receiveShadow;
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
#endif`,Ou=`#ifdef USE_ENVMAP
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
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
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
#endif`,zu=`struct PhysicalMaterial {
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
}`,Vu=`
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
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qu=`#if defined( USE_POINTS_UV )
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
#endif`,th=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ih=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rh=`#ifdef USE_MORPHTARGETS
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
#endif`,ah=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dh=`#ifdef USE_NORMALMAP
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
#endif`,fh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ph=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_h=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Th=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ah=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ch=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bh=`float getShadowMask() {
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
}`,wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ph=`#ifdef USE_SKINNING
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
#endif`,Ih=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lh=`#ifdef USE_SKINNING
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
#endif`,Dh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fh=`#ifdef USE_TRANSMISSION
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
#endif`,Bh=`#ifdef USE_TRANSMISSION
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
#endif`,kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wh=`uniform sampler2D t2D;
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
}`,Xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`#include <common>
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
}`,$h=`#if DEPTH_PACKING == 3200
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
}`,jh=`#define DISTANCE
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
}`,Jh=`#define DISTANCE
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
}`,Qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`uniform float scale;
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
}`,nd=`uniform vec3 diffuse;
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
}`,id=`#include <common>
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
}`,sd=`uniform vec3 diffuse;
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
}`,rd=`#define LAMBERT
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
}`,ad=`#define LAMBERT
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
}`,od=`#define MATCAP
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
}`,ld=`#define MATCAP
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
}`,cd=`#define NORMAL
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
}`,ud=`#define NORMAL
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
}`,hd=`#define PHONG
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
}`,dd=`#define PHONG
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
}`,fd=`#define STANDARD
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
}`,pd=`#define STANDARD
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
}`,md=`#define TOON
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
}`,_d=`#define TOON
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
}`,gd=`uniform float size;
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
}`,Sd=`uniform vec3 diffuse;
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
}`,vd=`#include <common>
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
}`,Ed=`uniform vec3 color;
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
}`,Td=`uniform float rotation;
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
}`,xd=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Wc,alphahash_pars_fragment:Xc,alphamap_fragment:Yc,alphamap_pars_fragment:Kc,alphatest_fragment:qc,alphatest_pars_fragment:Zc,aomap_fragment:$c,aomap_pars_fragment:jc,batching_pars_vertex:Jc,batching_vertex:Qc,begin_vertex:tu,beginnormal_vertex:eu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:su,clipping_planes_fragment:ru,clipping_planes_pars_fragment:au,clipping_planes_pars_vertex:ou,clipping_planes_vertex:lu,color_fragment:cu,color_pars_fragment:uu,color_pars_vertex:hu,color_vertex:du,common:fu,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:_u,displacementmap_vertex:gu,emissivemap_fragment:Su,emissivemap_pars_fragment:vu,colorspace_fragment:Eu,colorspace_pars_fragment:Tu,envmap_fragment:xu,envmap_common_pars_fragment:Mu,envmap_pars_fragment:yu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Ou,envmap_vertex:Ru,fog_vertex:Cu,fog_pars_vertex:bu,fog_fragment:wu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Iu,lightmap_pars_fragment:Lu,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Uu,lights_pars_begin:Nu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Bu,lights_phong_fragment:ku,lights_phong_pars_fragment:Gu,lights_physical_fragment:Hu,lights_physical_pars_fragment:zu,lights_fragment_begin:Vu,lights_fragment_maps:Wu,lights_fragment_end:Xu,logdepthbuf_fragment:Yu,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:Zu,map_fragment:$u,map_pars_fragment:ju,map_particle_fragment:Ju,map_particle_pars_fragment:Qu,metalnessmap_fragment:th,metalnessmap_pars_fragment:eh,morphinstance_vertex:nh,morphcolor_vertex:ih,morphnormal_vertex:sh,morphtarget_pars_vertex:rh,morphtarget_vertex:ah,normal_fragment_begin:oh,normal_fragment_maps:lh,normal_pars_fragment:ch,normal_pars_vertex:uh,normal_vertex:hh,normalmap_pars_fragment:dh,clearcoat_normal_fragment_begin:fh,clearcoat_normal_fragment_maps:ph,clearcoat_pars_fragment:mh,iridescence_pars_fragment:_h,opaque_fragment:gh,packing:Sh,premultiplied_alpha_fragment:vh,project_vertex:Eh,dithering_fragment:Th,dithering_pars_fragment:xh,roughnessmap_fragment:Mh,roughnessmap_pars_fragment:yh,shadowmap_pars_fragment:Ah,shadowmap_pars_vertex:Rh,shadowmap_vertex:Ch,shadowmask_pars_fragment:bh,skinbase_vertex:wh,skinning_pars_vertex:Ph,skinning_vertex:Ih,skinnormal_vertex:Lh,specularmap_fragment:Dh,specularmap_pars_fragment:Uh,tonemapping_fragment:Nh,tonemapping_pars_fragment:Oh,transmission_fragment:Fh,transmission_pars_fragment:Bh,uv_pars_fragment:kh,uv_pars_vertex:Gh,uv_vertex:Hh,worldpos_vertex:zh,background_vert:Vh,background_frag:Wh,backgroundCube_vert:Xh,backgroundCube_frag:Yh,cube_vert:Kh,cube_frag:qh,depth_vert:Zh,depth_frag:$h,distanceRGBA_vert:jh,distanceRGBA_frag:Jh,equirect_vert:Qh,equirect_frag:td,linedashed_vert:ed,linedashed_frag:nd,meshbasic_vert:id,meshbasic_frag:sd,meshlambert_vert:rd,meshlambert_frag:ad,meshmatcap_vert:od,meshmatcap_frag:ld,meshnormal_vert:cd,meshnormal_frag:ud,meshphong_vert:hd,meshphong_frag:dd,meshphysical_vert:fd,meshphysical_frag:pd,meshtoon_vert:md,meshtoon_frag:_d,points_vert:gd,points_frag:Sd,shadow_vert:vd,shadow_frag:Ed,sprite_vert:Td,sprite_frag:xd},nt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Je={basic:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Re([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Re([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Re([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Re([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Re([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Re([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Re([nt.common,nt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Re([nt.lights,nt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Je.physical={uniforms:Re([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const ss={r:0,b:0,g:0},Un=new en,Md=new he;function yd(i,t,e,n,s,r,a){const o=new qt(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function _(M){let T=M.isScene===!0?M.background:null;return T&&T.isTexture&&(T=(M.backgroundBlurriness>0?e:t).get(T)),T}function S(M){let T=!1;const I=_(M);I===null?h(o,l):I&&I.isColor&&(h(I,1),T=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,T){const I=_(T);I&&(I.isCubeTexture||I.mapping===Ss)?(u===void 0&&(u=new ut(new Vt(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ti(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Un.copy(T.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Md.makeRotationFromEuler(Un)),u.material.toneMapped=Kt.getTransfer(I.colorSpace)!==Qt,(d!==I||f!==I.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=I,f=I.version,m=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ut(new Kn(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ti(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(I.colorSpace)!==Qt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||f!==I.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=I,f=I.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function h(M,T){M.getRGB(ss,Zo(i)),n.buffers.color.setClear(ss.r,ss.g,ss.b,T,a)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,h(o,l)},render:S,addToRenderList:p,dispose:R}}function Ad(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(E,P,H,G,X){let $=!1;const W=d(G,H,P);r!==W&&(r=W,c(r.object)),$=m(E,G,H,X),$&&_(E,G,H,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,T(E,P,H,G),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function d(E,P,H){const G=H.wireframe===!0;let X=n[E.id];X===void 0&&(X={},n[E.id]=X);let $=X[P.id];$===void 0&&($={},X[P.id]=$);let W=$[G];return W===void 0&&(W=f(l()),$[G]=W),W}function f(E){const P=[],H=[],G=[];for(let X=0;X<e;X++)P[X]=0,H[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:G,object:E,attributes:{},index:null}}function m(E,P,H,G){const X=r.attributes,$=P.attributes;let W=0;const J=H.getAttributes();for(const V in J)if(J[V].location>=0){const dt=X[V];let Tt=$[V];if(Tt===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(Tt=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(Tt=E.instanceColor)),dt===void 0||dt.attribute!==Tt||Tt&&dt.data!==Tt.data)return!0;W++}return r.attributesNum!==W||r.index!==G}function _(E,P,H,G){const X={},$=P.attributes;let W=0;const J=H.getAttributes();for(const V in J)if(J[V].location>=0){let dt=$[V];dt===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(dt=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(dt=E.instanceColor));const Tt={};Tt.attribute=dt,dt&&dt.data&&(Tt.data=dt.data),X[V]=Tt,W++}r.attributes=X,r.attributesNum=W,r.index=G}function S(){const E=r.newAttributes;for(let P=0,H=E.length;P<H;P++)E[P]=0}function p(E){h(E,0)}function h(E,P){const H=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;H[E]=1,G[E]===0&&(i.enableVertexAttribArray(E),G[E]=1),X[E]!==P&&(i.vertexAttribDivisor(E,P),X[E]=P)}function R(){const E=r.newAttributes,P=r.enabledAttributes;for(let H=0,G=P.length;H<G;H++)P[H]!==E[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function M(E,P,H,G,X,$,W){W===!0?i.vertexAttribIPointer(E,P,H,X,$):i.vertexAttribPointer(E,P,H,G,X,$)}function T(E,P,H,G){S();const X=G.attributes,$=H.getAttributes(),W=P.defaultAttributeValues;for(const J in $){const V=$[J];if(V.location>=0){let rt=X[J];if(rt===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(rt=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(rt=E.instanceColor)),rt!==void 0){const dt=rt.normalized,Tt=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;const te=Ot.buffer,K=Ot.type,et=Ot.bytesPerElement,gt=K===i.INT||K===i.UNSIGNED_INT||rt.gpuType===ta;if(rt.isInterleavedBufferAttribute){const at=rt.data,At=at.stride,Zt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Ct=0;Ct<V.locationSize;Ct++)h(V.location+Ct,at.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ct=0;Ct<V.locationSize;Ct++)p(V.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Ct=0;Ct<V.locationSize;Ct++)M(V.location+Ct,Tt/V.locationSize,K,dt,At*et,(Zt+Tt/V.locationSize*Ct)*et,gt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)h(V.location+at,rt.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<V.locationSize;at++)p(V.location+at);i.bindBuffer(i.ARRAY_BUFFER,te);for(let at=0;at<V.locationSize;at++)M(V.location+at,Tt/V.locationSize,K,dt,Tt*et,Tt/V.locationSize*at*et,gt)}}else if(W!==void 0){const dt=W[J];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(V.location,dt);break;case 3:i.vertexAttrib3fv(V.location,dt);break;case 4:i.vertexAttrib4fv(V.location,dt);break;default:i.vertexAttrib1fv(V.location,dt)}}}}R()}function I(){U();for(const E in n){const P=n[E];for(const H in P){const G=P[H];for(const X in G)u(G[X].object),delete G[X];delete P[H]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const H in P){const G=P[H];for(const X in G)u(G[X].object),delete G[X];delete P[H]}delete n[E.id]}function C(E){for(const P in n){const H=n[P];if(H[E.id]===void 0)continue;const G=H[E.id];for(const X in G)u(G[X].object),delete G[X];delete H[E.id]}}function U(){x(),a=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:x,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:p,disableUnusedAttributes:R}}function Rd(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];e.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let S=0;S<d;S++)_+=u[S]*f[S];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==qe&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==dn&&!U)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:R,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:I,maxSamples:w}}function bd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Fn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const R=r?0:n,M=R*4;let T=h.clippingState||null;l.value=T,T=u(_,f,M,m);for(let I=0;I!==M;++I)T[I]=e[I];h.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,m,_){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const h=m+S*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,T=m;M!==S;++M,T+=4)a.copy(d[M]).applyMatrix4(R,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}function wd(i){let t=new WeakMap;function e(a,o){return o===fr?a.mapping=_i:o===pr&&(a.mapping=gi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fr||o===pr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ui=4,Za=[.125,.215,.35,.446,.526,.582],Hn=20,qs=new da,$a=new qt;let Zs=null,$s=0,js=0,Js=!1;const Bn=(1+Math.sqrt(5))/2,li=1/Bn,ja=[new O(-Bn,li,0),new O(Bn,li,0),new O(-li,0,Bn),new O(li,0,Bn),new O(0,Bn,-li),new O(0,Bn,li),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Pd=new O;class Ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Pd}=r;Zs=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=to(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zs,$s,js),this._renderer.xr.enabled=Js,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zs=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Di,format:qe,colorSpace:Ei,depthBuffer:!1},s=Qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Id(r)),this._blurMaterial=Ld(r,t,e)}return s}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,n,s,r){const l=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor($a),d.toneMapping=An,d.autoClear=!1;const _=new Ge({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),S=new ut(new Vt,_);let p=!1;const h=t.background;h?h.isColor&&(_.color.copy(h),t.background=null,p=!0):(_.color.copy($a),p=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));const T=this._cubeSize;rs(s,M*T,R>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(S,l),d.render(t,l)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=m,d.autoClear=f,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_i||t.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=to());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ja[(s-r-1)%ja.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ut(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Hn-1),S=r/_,p=isFinite(r)?1+Math.floor(u*S):Hn;p>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hn}`);const h=[];let R=0;for(let C=0;C<Hn;++C){const U=C/S,x=Math.exp(-U*U/2);h.push(x),C===0?R+=x:C<p&&(R+=2*x)}for(let C=0;C<h.length;C++)h[C]=h[C]/R;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const T=this._sizeLods[s],I=3*T*(s>M-ui?s-M+ui:0),w=4*(this._cubeSize-T);rs(e,I,w,3*T,2*T),l.setRenderTarget(e),l.render(d,qs)}}function Id(i){const t=[],e=[],n=[];let s=i;const r=i-ui+1+Za.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ui?l=Za[a-i+ui-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,S=3,p=2,h=1,R=new Float32Array(S*_*m),M=new Float32Array(p*_*m),T=new Float32Array(h*_*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,U=w>2?0:-1,x=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];R.set(x,S*_*w),M.set(f,p*_*w);const E=[w,w,w,w,w,w];T.set(E,h*_*w)}const I=new nn;I.setAttribute("position",new tn(R,S)),I.setAttribute("uv",new tn(M,p)),I.setAttribute("faceIndex",new tn(T,h)),t.push(I),s>ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qa(i,t,e){const n=new Yn(i,t,e);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ld(i,t,e){const n=new Float32Array(Hn),s=new O(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fa(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function to(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function eo(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function Dd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===fr||l===pr,u=l===_i||l===gi;if(c||u){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ja(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Ja(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ud(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&On("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Nd(i,t,e,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,_=d.attributes.position;let S=0;if(m!==null){const R=m.array;S=m.version;for(let M=0,T=R.length;M<T;M+=3){const I=R[M+0],w=R[M+1],C=R[M+2];f.push(I,w,w,C,C,I)}}else if(_!==void 0){const R=_.array;S=_.version;for(let M=0,T=R.length/3-1;M<T;M+=3){const I=M+0,w=M+1,C=M+2;f.push(I,w,w,C,C,I)}}else return;const p=new(Vo(f)?qo:Ko)(f,1);p.version=S;const h=r.get(d);h&&t.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Od(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,f*a,_),e.update(m,n,_))}function u(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];e.update(p,n,1)}function d(f,m,_,S){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/a,m[h],S[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,S,0,_);let h=0;for(let R=0;R<_;R++)h+=m[R]*S[R];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Fd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bd(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let E=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var m=E;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),S===!0&&(T=2),p===!0&&(T=3);let I=o.attributes.position.count*T,w=1;I>t.maxTextureSize&&(w=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const C=new Float32Array(I*w*4*d),U=new Wo(C,I,w,d);U.type=dn,U.needsUpdate=!0;const x=T*4;for(let P=0;P<d;P++){const H=h[P],G=R[P],X=M[P],$=I*w*4*P;for(let W=0;W<H.count;W++){const J=W*x;_===!0&&(s.fromBufferAttribute(H,W),C[$+J+0]=s.x,C[$+J+1]=s.y,C[$+J+2]=s.z,C[$+J+3]=0),S===!0&&(s.fromBufferAttribute(G,W),C[$+J+4]=s.x,C[$+J+5]=s.y,C[$+J+6]=s.z,C[$+J+7]=0),p===!0&&(s.fromBufferAttribute(X,W),C[$+J+8]=s.x,C[$+J+9]=s.y,C[$+J+10]=s.z,C[$+J+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:U,size:new Bt(I,w)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function kd(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const el=new Ce,no=new Jo(1,1),nl=new Wo,il=new hc,sl=new jo,io=[],so=[],ro=new Float32Array(16),ao=new Float32Array(9),oo=new Float32Array(4);function yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=io[s];if(r===void 0&&(r=new Float32Array(s),io[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vs(i,t){let e=so[t];e===void 0&&(e=new Int32Array(t),so[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Wd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;oo.set(n),i.uniformMatrix2fv(this.addr,!1,oo),ge(e,n)}}function Xd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;ao.set(n),i.uniformMatrix3fv(this.addr,!1,ao),ge(e,n)}}function Yd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;ro.set(n),i.uniformMatrix4fv(this.addr,!1,ro),ge(e,n)}}function Kd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function $d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function ef(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(no.compareFunction=zo,r=no):r=el,e.setTexture2D(t||r,s)}function nf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||il,s)}function sf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sl,s)}function rf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nl,s)}function af(i){switch(i){case 5126:return Gd;case 35664:return Hd;case 35665:return zd;case 35666:return Vd;case 35674:return Wd;case 35675:return Xd;case 35676:return Yd;case 5124:case 35670:return Kd;case 35667:case 35671:return qd;case 35668:case 35672:return Zd;case 35669:case 35673:return $d;case 5125:return jd;case 36294:return Jd;case 36295:return Qd;case 36296:return tf;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return sf;case 36289:case 36303:case 36311:case 36292:return rf}}function of(i,t){i.uniform1fv(this.addr,t)}function lf(i,t){const e=yi(t,this.size,2);i.uniform2fv(this.addr,e)}function cf(i,t){const e=yi(t,this.size,3);i.uniform3fv(this.addr,e)}function uf(i,t){const e=yi(t,this.size,4);i.uniform4fv(this.addr,e)}function hf(i,t){const e=yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function df(i,t){const e=yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ff(i,t){const e=yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pf(i,t){i.uniform1iv(this.addr,t)}function mf(i,t){i.uniform2iv(this.addr,t)}function _f(i,t){i.uniform3iv(this.addr,t)}function gf(i,t){i.uniform4iv(this.addr,t)}function Sf(i,t){i.uniform1uiv(this.addr,t)}function vf(i,t){i.uniform2uiv(this.addr,t)}function Ef(i,t){i.uniform3uiv(this.addr,t)}function Tf(i,t){i.uniform4uiv(this.addr,t)}function xf(i,t,e){const n=this.cache,s=t.length,r=vs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||el,r[a])}function Mf(i,t,e){const n=this.cache,s=t.length,r=vs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||il,r[a])}function yf(i,t,e){const n=this.cache,s=t.length,r=vs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||sl,r[a])}function Af(i,t,e){const n=this.cache,s=t.length,r=vs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||nl,r[a])}function Rf(i){switch(i){case 5126:return of;case 35664:return lf;case 35665:return cf;case 35666:return uf;case 35674:return hf;case 35675:return df;case 35676:return ff;case 5124:case 35670:return pf;case 35667:case 35671:return mf;case 35668:case 35672:return _f;case 35669:case 35673:return gf;case 5125:return Sf;case 36294:return vf;case 36295:return Ef;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return Af}}class Cf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=af(e.type)}}class bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rf(e.type)}}class wf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function lo(i,t){i.seq.push(t),i.map[t.id]=t}function Pf(i,t,e){const n=i.name,s=n.length;for(Qs.lastIndex=0;;){const r=Qs.exec(n),a=Qs.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lo(e,c===void 0?new Cf(o,i,t):new bf(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new wf(o),lo(e,d)),e=d}}}class ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Pf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function co(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const If=37297;let Lf=0;function Df(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const uo=new Lt;function Uf(i){Kt._getMatrix(uo,Kt.workingColorSpace,i);const t=`mat3( ${uo.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case ms:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ho(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Df(i.getShaderSource(t),a)}else return s}function Nf(i,t){const e=Uf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Of(i,t){let e;switch(t){case Fl:e="Linear";break;case Bl:e="Reinhard";break;case kl:e="Cineon";break;case Gl:e="ACESFilmic";break;case zl:e="AgX";break;case Vl:e="Neutral";break;case Hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const as=new O;function Ff(){Kt.getLuminanceCoefficients(as);const i=as.x.toFixed(4),t=as.y.toFixed(4),e=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function kf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ii(i){return i!==""}function fo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function po(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wr(i){return i.replace(Hf,Vf)}const zf=new Map;function Vf(i,t){let e=Ut[t];if(e===void 0){const n=zf.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wr(e)}const Wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mo(i){return i.replace(Wf,Xf)}function Xf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _o(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Kf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case gi:t="ENVMAP_TYPE_CUBE";break;case Ss:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Zf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qr:t="ENVMAP_BLENDING_MULTIPLY";break;case Nl:t="ENVMAP_BLENDING_MIX";break;case Ol:t="ENVMAP_BLENDING_ADD";break}return t}function $f(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function jf(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Yf(e),c=Kf(e),u=qf(e),d=Zf(e),f=$f(e),m=Bf(e),_=kf(r),S=s.createProgram();let p,h,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ii).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ii).join(`
`),h.length>0&&(h+=`
`)):(p=[_o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),h=[_o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Ut.tonemapping_pars_fragment:"",e.toneMapping!==An?Of("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Nf("linearToOutputTexel",e.outputColorSpace),Ff(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),a=Wr(a),a=fo(a,e),a=po(a,e),o=Wr(o),o=fo(o,e),o=po(o,e),a=mo(a),o=mo(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=R+p+a,T=R+h+o,I=co(s,s.VERTEX_SHADER,M),w=co(s,s.FRAGMENT_SHADER,T);s.attachShader(S,I),s.attachShader(S,w),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(P){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(S).trim(),G=s.getShaderInfoLog(I).trim(),X=s.getShaderInfoLog(w).trim();let $=!0,W=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,I,w);else{const J=ho(s,I,"vertex"),V=ho(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+J+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||X==="")&&(W=!1);W&&(P.diagnostics={runnable:$,programLog:H,vertexShader:{log:G,prefix:p},fragmentShader:{log:X,prefix:h}})}s.deleteShader(I),s.deleteShader(w),U=new ps(s,S),x=Gf(s,S)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(S,If)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lf++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=w,this}let Jf=0;class Qf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tp(t),e.set(t,n)),n}}class tp{constructor(t){this.id=Jf++,this.code=t,this.usedTimes=0}}function ep(i,t,e,n,s,r,a){const o=new Xo,l=new Qf,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,E,P,H,G){const X=H.fog,$=G.geometry,W=x.isMeshStandardMaterial?H.environment:null,J=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),V=J&&J.mapping===Ss?J.image.height:null,rt=_[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Tt=dt!==void 0?dt.length:0;let Ot=0;$.morphAttributes.position!==void 0&&(Ot=1),$.morphAttributes.normal!==void 0&&(Ot=2),$.morphAttributes.color!==void 0&&(Ot=3);let te,K,et,gt;if(rt){const Jt=Je[rt];te=Jt.vertexShader,K=Jt.fragmentShader}else te=x.vertexShader,K=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),gt=l.getFragmentShaderID(x);const at=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Zt=G.isInstancedMesh===!0,Ct=G.isBatchedMesh===!0,de=!!x.map,oe=!!x.matcap,kt=!!J,b=!!x.aoMap,Ne=!!x.lightMap,Gt=!!x.bumpMap,Ht=!!x.normalMap,xt=!!x.displacementMap,ie=!!x.emissiveMap,Et=!!x.metalnessMap,y=!!x.roughnessMap,g=x.anisotropy>0,F=x.clearcoat>0,q=x.dispersion>0,j=x.iridescence>0,Y=x.sheen>0,St=x.transmission>0,ot=g&&!!x.anisotropyMap,ft=F&&!!x.clearcoatMap,Wt=F&&!!x.clearcoatNormalMap,tt=F&&!!x.clearcoatRoughnessMap,pt=j&&!!x.iridescenceMap,Rt=j&&!!x.iridescenceThicknessMap,bt=Y&&!!x.sheenColorMap,mt=Y&&!!x.sheenRoughnessMap,zt=!!x.specularMap,Dt=!!x.specularColorMap,ne=!!x.specularIntensityMap,L=St&&!!x.transmissionMap,it=St&&!!x.thicknessMap,z=!!x.gradientMap,Z=!!x.alphaMap,ct=x.alphaTest>0,lt=!!x.alphaHash,It=!!x.extensions;let le=An;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(le=i.toneMapping);const Ee={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:te,fragmentShader:K,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ct,batchingColor:Ct&&G._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&G.instanceColor!==null,instancingMorph:Zt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ei,alphaToCoverage:!!x.alphaToCoverage,map:de,matcap:oe,envMap:kt,envMapMode:kt&&J.mapping,envMapCubeUVHeight:V,aoMap:b,lightMap:Ne,bumpMap:Gt,normalMap:Ht,displacementMap:f&&xt,emissiveMap:ie,normalMapObjectSpace:Ht&&x.normalMapType===Kl,normalMapTangentSpace:Ht&&x.normalMapType===Ho,metalnessMap:Et,roughnessMap:y,anisotropy:g,anisotropyMap:ot,clearcoat:F,clearcoatMap:ft,clearcoatNormalMap:Wt,clearcoatRoughnessMap:tt,dispersion:q,iridescence:j,iridescenceMap:pt,iridescenceThicknessMap:Rt,sheen:Y,sheenColorMap:bt,sheenRoughnessMap:mt,specularMap:zt,specularColorMap:Dt,specularIntensityMap:ne,transmission:St,transmissionMap:L,thicknessMap:it,gradientMap:z,opaque:x.transparent===!1&&x.blending===di&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:lt,combine:x.combine,mapUv:de&&S(x.map.channel),aoMapUv:b&&S(x.aoMap.channel),lightMapUv:Ne&&S(x.lightMap.channel),bumpMapUv:Gt&&S(x.bumpMap.channel),normalMapUv:Ht&&S(x.normalMap.channel),displacementMapUv:xt&&S(x.displacementMap.channel),emissiveMapUv:ie&&S(x.emissiveMap.channel),metalnessMapUv:Et&&S(x.metalnessMap.channel),roughnessMapUv:y&&S(x.roughnessMap.channel),anisotropyMapUv:ot&&S(x.anisotropyMap.channel),clearcoatMapUv:ft&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:mt&&S(x.sheenRoughnessMap.channel),specularMapUv:zt&&S(x.specularMap.channel),specularColorMapUv:Dt&&S(x.specularColorMap.channel),specularIntensityMapUv:ne&&S(x.specularIntensityMap.channel),transmissionMapUv:L&&S(x.transmissionMap.channel),thicknessMapUv:it&&S(x.thicknessMap.channel),alphaMapUv:Z&&S(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ht||g),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(de||Z),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:de&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===Qt,decodeVideoTextureEmissive:ie&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===Qt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qe,flipSided:x.side===Pe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:It&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&x.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function h(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(R(E,x),M(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function R(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),x.push(o.mask)}function T(x){const E=_[x.type];let P;if(E){const H=Je[E];P=Ac.clone(H.uniforms)}else P=x.uniforms;return P}function I(x,E){let P;for(let H=0,G=u.length;H<G;H++){const X=u[H];if(X.cacheKey===E){P=X,++P.usedTimes;break}}return P===void 0&&(P=new jf(i,E,x,r),u.push(P)),P}function w(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function C(x){l.remove(x)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:I,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:U}}function np(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ip(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function go(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function So(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,_,S,p){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:S,group:p},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=S,h.group=p),t++,h}function o(d,f,m,_,S,p){const h=a(d,f,m,_,S,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(d,f,m,_,S,p){const h=a(d,f,m,_,S,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||ip),n.length>1&&n.sort(f||go),s.length>1&&s.sort(f||go)}function u(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function sp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new So,i.set(n,[a])):s>=r.length?(a=new So,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function rp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new qt};break;case"SpotLight":e={position:new O,direction:new O,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function ap(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let op=0;function lp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cp(i){const t=new rp,e=ap(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new he,a=new he;function o(c){let u=0,d=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let m=0,_=0,S=0,p=0,h=0,R=0,M=0,T=0,I=0,w=0,C=0;c.sort(lp);for(let x=0,E=c.length;x<E;x++){const P=c[x],H=P.color,G=P.intensity,X=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=H.r*G,d+=H.g*G,f+=H.b*G;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],G);C++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,V=e.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=P.shadow.matrix,R++}n.directional[m]=W,m++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(G),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[S]=W;const J=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,J.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[S]=J.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[S]=V,n.spotShadowMap[S]=$,T++}S++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(H).multiplyScalar(G),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=W,p++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const J=P.shadow,V=e.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=W,_++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(G),W.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[h]=W,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==S||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==R||U.numPointShadows!==M||U.numSpotShadows!==T||U.numSpotMaps!==I||U.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=p,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,U.directionalLength=m,U.pointLength=_,U.spotLength=S,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=R,U.numPointShadows=M,U.numSpotShadows=T,U.numSpotMaps=I,U.numLightProbes=C,n.version=op++)}function l(c,u){let d=0,f=0,m=0,_=0,S=0;const p=u.matrixWorldInverse;for(let h=0,R=c.length;h<R;h++){const M=c[h];if(M.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(M.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const T=n.hemi[S];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:n}}function vo(i){const t=new cp(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function up(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new vo(i),t.set(s,[o])):r>=a.length?(o=new vo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dp=`uniform sampler2D shadow_pass;
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
}`;function fp(i,t,e){let n=new la;const s=new Bt,r=new Bt,a=new ue,o=new Uc({depthPacking:Yl}),l=new Nc,c={},u=e.maxTextureSize,d={[Rn]:Pe,[Pe]:Rn,[Qe]:Qe},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:hp,fragmentShader:dp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ut(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let h=this.type;this.render=function(w,C,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const x=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(yn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=h!==hn&&this.type===hn,X=h===hn&&this.type!==hn;for(let $=0,W=w.length;$<W;$++){const J=w[$],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const rt=V.getFrameExtents();if(s.multiply(rt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,V.mapSize.y=r.y)),V.map===null||G===!0||X===!0){const Tt=this.type!==hn?{minFilter:Ze,magFilter:Ze}:{};V.map!==null&&V.map.dispose(),V.map=new Yn(s.x,s.y,Tt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const dt=V.getViewportCount();for(let Tt=0;Tt<dt;Tt++){const Ot=V.getViewport(Tt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),H.viewport(a),V.updateMatrices(J,Tt),n=V.getFrustum(),T(C,U,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===hn&&R(V,U),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(x,E,P)};function R(w,C){const U=t.update(S);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,U,f,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,U,m,S,null)}function M(w,C,U,x){let E=null;const P=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)E=P;else if(E=U.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=E.uuid,G=C.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let $=X[G];$===void 0&&($=E.clone(),X[G]=$,C.addEventListener("dispose",I)),E=$}if(E.visible=C.visible,E.wireframe=C.wireframe,x===hn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=i.properties.get(E);H.light=U}return E}function T(w,C,U,x,E){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===hn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const G=t.update(w),X=w.material;if(Array.isArray(X)){const $=G.groups;for(let W=0,J=$.length;W<J;W++){const V=$[W],rt=X[V.materialIndex];if(rt&&rt.visible){const dt=M(w,rt,x,E);w.onBeforeShadow(i,w,C,U,G,dt,V),i.renderBufferDirect(U,null,G,dt,w,V),w.onAfterShadow(i,w,C,U,G,dt,V)}}}else if(X.visible){const $=M(w,X,x,E);w.onBeforeShadow(i,w,C,U,G,$,null),i.renderBufferDirect(U,null,G,$,w,null),w.onAfterShadow(i,w,C,U,G,$,null)}}const H=w.children;for(let G=0,X=H.length;G<X;G++)T(H[G],C,U,x,E)}function I(w){w.target.removeEventListener("dispose",I);for(const U in c){const x=c[U],E=w.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}const pp={[ar]:or,[lr]:hr,[cr]:dr,[mi]:ur,[or]:ar,[hr]:lr,[dr]:cr,[ur]:mi};function mp(i,t){function e(){let L=!1;const it=new ue;let z=null;const Z=new ue(0,0,0,0);return{setMask:function(ct){z!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),z=ct)},setLocked:function(ct){L=ct},setClear:function(ct,lt,It,le,Ee){Ee===!0&&(ct*=le,lt*=le,It*=le),it.set(ct,lt,It,le),Z.equals(it)===!1&&(i.clearColor(ct,lt,It,le),Z.copy(it))},reset:function(){L=!1,z=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,z=null,Z=null,ct=null;return{setReversed:function(lt){if(it!==lt){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const le=ct;ct=null,this.setClear(le)}it=lt},getReversed:function(){return it},setTest:function(lt){lt?at(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(lt){z!==lt&&!L&&(i.depthMask(lt),z=lt)},setFunc:function(lt){if(it&&(lt=pp[lt]),Z!==lt){switch(lt){case ar:i.depthFunc(i.NEVER);break;case or:i.depthFunc(i.ALWAYS);break;case lr:i.depthFunc(i.LESS);break;case mi:i.depthFunc(i.LEQUAL);break;case cr:i.depthFunc(i.EQUAL);break;case ur:i.depthFunc(i.GEQUAL);break;case hr:i.depthFunc(i.GREATER);break;case dr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=lt}},setLocked:function(lt){L=lt},setClear:function(lt){ct!==lt&&(it&&(lt=1-lt),i.clearDepth(lt),ct=lt)},reset:function(){L=!1,z=null,Z=null,ct=null,it=!1}}}function s(){let L=!1,it=null,z=null,Z=null,ct=null,lt=null,It=null,le=null,Ee=null;return{setTest:function(Jt){L||(Jt?at(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!L&&(i.stencilMask(Jt),it=Jt)},setFunc:function(Jt,He,sn){(z!==Jt||Z!==He||ct!==sn)&&(i.stencilFunc(Jt,He,sn),z=Jt,Z=He,ct=sn)},setOp:function(Jt,He,sn){(lt!==Jt||It!==He||le!==sn)&&(i.stencilOp(Jt,He,sn),lt=Jt,It=He,le=sn)},setLocked:function(Jt){L=Jt},setClear:function(Jt){Ee!==Jt&&(i.clearStencil(Jt),Ee=Jt)},reset:function(){L=!1,it=null,z=null,Z=null,ct=null,lt=null,It=null,le=null,Ee=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],_=null,S=!1,p=null,h=null,R=null,M=null,T=null,I=null,w=null,C=new qt(0,0,0),U=0,x=!1,E=null,P=null,H=null,G=null,X=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=J>=2);let rt=null,dt={};const Tt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),te=new ue().fromArray(Tt),K=new ue().fromArray(Ot);function et(L,it,z,Z){const ct=new Uint8Array(4),lt=i.createTexture();i.bindTexture(L,lt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<z;It++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return lt}const gt={};gt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(mi),Gt(!1),Ht(Ta),at(i.CULL_FACE),b(yn);function at(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function At(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Zt(L,it){return d[L]!==it?(i.bindFramebuffer(L,it),d[L]=it,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ct(L,it){let z=m,Z=!1;if(L){z=f.get(it),z===void 0&&(z=[],f.set(it,z));const ct=L.textures;if(z.length!==ct.length||z[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,It=ct.length;lt<It;lt++)z[lt]=i.COLOR_ATTACHMENT0+lt;z.length=ct.length,Z=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,Z=!0);Z&&i.drawBuffers(z)}function de(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const oe={[Gn]:i.FUNC_ADD,[Sl]:i.FUNC_SUBTRACT,[vl]:i.FUNC_REVERSE_SUBTRACT};oe[El]=i.MIN,oe[Tl]=i.MAX;const kt={[xl]:i.ZERO,[Ml]:i.ONE,[yl]:i.SRC_COLOR,[sr]:i.SRC_ALPHA,[Pl]:i.SRC_ALPHA_SATURATE,[bl]:i.DST_COLOR,[Rl]:i.DST_ALPHA,[Al]:i.ONE_MINUS_SRC_COLOR,[rr]:i.ONE_MINUS_SRC_ALPHA,[wl]:i.ONE_MINUS_DST_COLOR,[Cl]:i.ONE_MINUS_DST_ALPHA,[Il]:i.CONSTANT_COLOR,[Ll]:i.ONE_MINUS_CONSTANT_COLOR,[Dl]:i.CONSTANT_ALPHA,[Ul]:i.ONE_MINUS_CONSTANT_ALPHA};function b(L,it,z,Z,ct,lt,It,le,Ee,Jt){if(L===yn){S===!0&&(At(i.BLEND),S=!1);return}if(S===!1&&(at(i.BLEND),S=!0),L!==gl){if(L!==p||Jt!==x){if((h!==Gn||T!==Gn)&&(i.blendEquation(i.FUNC_ADD),h=Gn,T=Gn),Jt)switch(L){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFunc(i.ONE,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}R=null,M=null,I=null,w=null,C.set(0,0,0),U=0,p=L,x=Jt}return}ct=ct||it,lt=lt||z,It=It||Z,(it!==h||ct!==T)&&(i.blendEquationSeparate(oe[it],oe[ct]),h=it,T=ct),(z!==R||Z!==M||lt!==I||It!==w)&&(i.blendFuncSeparate(kt[z],kt[Z],kt[lt],kt[It]),R=z,M=Z,I=lt,w=It),(le.equals(C)===!1||Ee!==U)&&(i.blendColor(le.r,le.g,le.b,Ee),C.copy(le),U=Ee),p=L,x=!1}function Ne(L,it){L.side===Qe?At(i.CULL_FACE):at(i.CULL_FACE);let z=L.side===Pe;it&&(z=!z),Gt(z),L.blending===di&&L.transparent===!1?b(yn):b(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const Z=L.stencilWrite;o.setTest(Z),Z&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){E!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),E=L)}function Ht(L){L!==pl?(at(i.CULL_FACE),L!==P&&(L===Ta?i.cullFace(i.BACK):L===ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),P=L}function xt(L){L!==H&&(W&&i.lineWidth(L),H=L)}function ie(L,it,z){L?(at(i.POLYGON_OFFSET_FILL),(G!==it||X!==z)&&(i.polygonOffset(it,z),G=it,X=z)):At(i.POLYGON_OFFSET_FILL)}function Et(L){L?at(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function y(L){L===void 0&&(L=i.TEXTURE0+$-1),rt!==L&&(i.activeTexture(L),rt=L)}function g(L,it,z){z===void 0&&(rt===null?z=i.TEXTURE0+$-1:z=rt);let Z=dt[z];Z===void 0&&(Z={type:void 0,texture:void 0},dt[z]=Z),(Z.type!==L||Z.texture!==it)&&(rt!==z&&(i.activeTexture(z),rt=z),i.bindTexture(L,it||gt[L]),Z.type=L,Z.texture=it)}function F(){const L=dt[rt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(L){te.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function mt(L){K.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function zt(L,it){let z=c.get(it);z===void 0&&(z=new WeakMap,c.set(it,z));let Z=z.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(it,L.name),z.set(L,Z))}function Dt(L,it){const Z=c.get(it).get(L);l.get(it)!==Z&&(i.uniformBlockBinding(it,Z,L.__bindingPointIndex),l.set(it,Z))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,dt={},d={},f=new WeakMap,m=[],_=null,S=!1,p=null,h=null,R=null,M=null,T=null,I=null,w=null,C=new qt(0,0,0),U=0,x=!1,E=null,P=null,H=null,G=null,X=null,te.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:At,bindFramebuffer:Zt,drawBuffers:Ct,useProgram:de,setBlending:b,setMaterial:Ne,setFlipSided:Gt,setCullFace:Ht,setLineWidth:xt,setPolygonOffset:ie,setScissorTest:Et,activeTexture:y,bindTexture:g,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:j,texImage2D:pt,texImage3D:Rt,updateUBOMapping:zt,uniformBlockBinding:Dt,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:St,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:bt,viewport:mt,reset:ne}}function _p(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):gs("canvas")}function S(y,g,F){let q=1;const j=Et(y);if((j.width>F||j.height>F)&&(q=F/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Y=Math.floor(q*j.width),St=Math.floor(q*j.height);d===void 0&&(d=_(Y,St));const ot=g?_(Y,St):d;return ot.width=Y,ot.height=St,ot.getContext("2d").drawImage(y,0,0,Y,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+St+")."),ot}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){i.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(y,g,F,q,j=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Y=g;if(g===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),g===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),g===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),g===i.RGBA){const St=j?ms:Kt.getTransfer(q);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=St===Qt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function T(y,g){let F;return y?g===null||g===Xn||g===Si?F=i.DEPTH24_STENCIL8:g===dn?F=i.DEPTH32F_STENCIL8:g===Li&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Xn||g===Si?F=i.DEPTH_COMPONENT24:g===dn?F=i.DEPTH_COMPONENT32F:g===Li&&(F=i.DEPTH_COMPONENT16),F}function I(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ze&&y.minFilter!==Ue?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function w(y){const g=y.target;g.removeEventListener("dispose",w),U(g),g.isVideoTexture&&u.delete(g)}function C(y){const g=y.target;g.removeEventListener("dispose",C),E(g)}function U(y){const g=n.get(y);if(g.__webglInit===void 0)return;const F=y.source,q=f.get(F);if(q){const j=q[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(y),Object.keys(q).length===0&&f.delete(F)}n.remove(y)}function x(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const F=y.source,q=f.get(F);delete q[g.__cacheKey],a.memory.textures--}function E(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let j=0;j<g.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[q][j]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=y.textures;for(let q=0,j=F.length;q<j;q++){const Y=n.get(F[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(y)}let P=0;function H(){P=0}function G(){const y=P;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),P+=1,y}function X(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function $(y,g){const F=n.get(y);if(y.isVideoTexture&&xt(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const q=y.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,y,g);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function W(y,g){const F=n.get(y);if(y.version>0&&F.__version!==y.version){K(F,y,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function J(y,g){const F=n.get(y);if(y.version>0&&F.__version!==y.version){K(F,y,g);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function V(y,g){const F=n.get(y);if(y.version>0&&F.__version!==y.version){et(F,y,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const rt={[mr]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[_r]:i.MIRRORED_REPEAT},dt={[Ze]:i.NEAREST,[Wl]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[Ms]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Tt={[ql]:i.NEVER,[tc]:i.ALWAYS,[Zl]:i.LESS,[zo]:i.LEQUAL,[$l]:i.EQUAL,[Ql]:i.GEQUAL,[jl]:i.GREATER,[Jl]:i.NOTEQUAL};function Ot(y,g){if(g.type===dn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ue||g.magFilter===Ms||g.magFilter===Gi||g.magFilter===Vn||g.minFilter===Ue||g.minFilter===Ms||g.minFilter===Gi||g.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,rt[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,rt[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,rt[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,dt[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,dt[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Tt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ze||g.minFilter!==Gi&&g.minFilter!==Vn||g.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function te(y,g){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",w));const q=g.source;let j=f.get(q);j===void 0&&(j={},f.set(q,j));const Y=X(g);if(Y!==y.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[Y].usedTimes++;const St=j[y.__cacheKey];St!==void 0&&(j[y.__cacheKey].usedTimes--,St.usedTimes===0&&x(g)),y.__cacheKey=Y,y.__webglTexture=j[Y].texture}return F}function K(y,g,F){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);const j=te(y,g),Y=g.source;e.bindTexture(q,y.__webglTexture,i.TEXTURE0+F);const St=n.get(Y);if(Y.version!==St.__version||j===!0){e.activeTexture(i.TEXTURE0+F);const ot=Kt.getPrimaries(Kt.workingColorSpace),ft=g.colorSpace===xn?null:Kt.getPrimaries(g.colorSpace),Wt=g.colorSpace===xn||ot===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=S(g.image,!1,s.maxTextureSize);tt=ie(g,tt);const pt=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type);let bt=M(g.internalFormat,pt,Rt,g.colorSpace,g.isVideoTexture);Ot(q,g);let mt;const zt=g.mipmaps,Dt=g.isVideoTexture!==!0,ne=St.__version===void 0||j===!0,L=Y.dataReady,it=I(g,tt);if(g.isDepthTexture)bt=T(g.format===vi,g.type),ne&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,bt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,bt,tt.width,tt.height,0,pt,Rt,null));else if(g.isDataTexture)if(zt.length>0){Dt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,bt,zt[0].width,zt[0].height);for(let z=0,Z=zt.length;z<Z;z++)mt=zt[z],Dt?L&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,z,bt,mt.width,mt.height,0,pt,Rt,mt.data);g.generateMipmaps=!1}else Dt?(ne&&e.texStorage2D(i.TEXTURE_2D,it,bt,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,Rt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,bt,tt.width,tt.height,0,pt,Rt,tt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Dt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,bt,zt[0].width,zt[0].height,tt.depth);for(let z=0,Z=zt.length;z<Z;z++)if(mt=zt[z],g.format!==qe)if(pt!==null)if(Dt){if(L)if(g.layerUpdates.size>0){const ct=qa(mt.width,mt.height,g.format,g.type);for(const lt of g.layerUpdates){const It=mt.data.subarray(lt*ct/mt.data.BYTES_PER_ELEMENT,(lt+1)*ct/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,lt,mt.width,mt.height,1,pt,It)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,bt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,mt.width,mt.height,tt.depth,pt,Rt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,bt,mt.width,mt.height,tt.depth,0,pt,Rt,mt.data)}else{Dt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,bt,zt[0].width,zt[0].height);for(let z=0,Z=zt.length;z<Z;z++)mt=zt[z],g.format!==qe?pt!==null?Dt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,bt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?L&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,z,bt,mt.width,mt.height,0,pt,Rt,mt.data)}else if(g.isDataArrayTexture)if(Dt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,bt,tt.width,tt.height,tt.depth),L)if(g.layerUpdates.size>0){const z=qa(tt.width,tt.height,g.format,g.type);for(const Z of g.layerUpdates){const ct=tt.data.subarray(Z*z/tt.data.BYTES_PER_ELEMENT,(Z+1)*z/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,pt,Rt,ct)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Rt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,tt.width,tt.height,tt.depth,0,pt,Rt,tt.data);else if(g.isData3DTexture)Dt?(ne&&e.texStorage3D(i.TEXTURE_3D,it,bt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Rt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,tt.width,tt.height,tt.depth,0,pt,Rt,tt.data);else if(g.isFramebufferTexture){if(ne)if(Dt)e.texStorage2D(i.TEXTURE_2D,it,bt,tt.width,tt.height);else{let z=tt.width,Z=tt.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,bt,z,Z,0,pt,Rt,null),z>>=1,Z>>=1}}else if(zt.length>0){if(Dt&&ne){const z=Et(zt[0]);e.texStorage2D(i.TEXTURE_2D,it,bt,z.width,z.height)}for(let z=0,Z=zt.length;z<Z;z++)mt=zt[z],Dt?L&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,pt,Rt,mt):e.texImage2D(i.TEXTURE_2D,z,bt,pt,Rt,mt);g.generateMipmaps=!1}else if(Dt){if(ne){const z=Et(tt);e.texStorage2D(i.TEXTURE_2D,it,bt,z.width,z.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Rt,tt)}else e.texImage2D(i.TEXTURE_2D,0,bt,pt,Rt,tt);p(g)&&h(q),St.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function et(y,g,F){if(g.image.length!==6)return;const q=te(y,g),j=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const Y=n.get(j);if(j.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+F);const St=Kt.getPrimaries(Kt.workingColorSpace),ot=g.colorSpace===xn?null:Kt.getPrimaries(g.colorSpace),ft=g.colorSpace===xn||St===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Wt=g.isCompressedTexture||g.image[0].isCompressedTexture,tt=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Wt&&!tt?pt[Z]=S(g.image[Z],!0,s.maxCubemapSize):pt[Z]=tt?g.image[Z].image:g.image[Z],pt[Z]=ie(g,pt[Z]);const Rt=pt[0],bt=r.convert(g.format,g.colorSpace),mt=r.convert(g.type),zt=M(g.internalFormat,bt,mt,g.colorSpace),Dt=g.isVideoTexture!==!0,ne=Y.__version===void 0||q===!0,L=j.dataReady;let it=I(g,Rt);Ot(i.TEXTURE_CUBE_MAP,g);let z;if(Wt){Dt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,zt,Rt.width,Rt.height);for(let Z=0;Z<6;Z++){z=pt[Z].mipmaps;for(let ct=0;ct<z.length;ct++){const lt=z[ct];g.format!==qe?bt!==null?Dt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,lt.width,lt.height,bt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,zt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,lt.width,lt.height,bt,mt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,zt,lt.width,lt.height,0,bt,mt,lt.data)}}}else{if(z=g.mipmaps,Dt&&ne){z.length>0&&it++;const Z=Et(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,bt,mt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,pt[Z].width,pt[Z].height,0,bt,mt,pt[Z].data);for(let ct=0;ct<z.length;ct++){const It=z[ct].image[Z].image;Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,It.width,It.height,bt,mt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,zt,It.width,It.height,0,bt,mt,It.data)}}else{Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt,mt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,bt,mt,pt[Z]);for(let ct=0;ct<z.length;ct++){const lt=z[ct];Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,bt,mt,lt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,zt,bt,mt,lt.image[Z])}}}p(g)&&h(i.TEXTURE_CUBE_MAP),Y.__version=j.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function gt(y,g,F,q,j,Y){const St=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ft=M(F.internalFormat,St,ot,F.colorSpace),Wt=n.get(g),tt=n.get(F);if(tt.__renderTarget=g,!Wt.__hasExternalTextures){const pt=Math.max(1,g.width>>Y),Rt=Math.max(1,g.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,ft,pt,Rt,g.depth,0,St,ot,null):e.texImage2D(j,Y,ft,pt,Rt,0,St,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),Ht(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,tt.__webglTexture,0,Gt(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,tt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(y,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const q=g.depthTexture,j=q&&q.isDepthTexture?q.type:null,Y=T(g.stencilBuffer,j),St=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Gt(g);Ht(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Y,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Y,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Y,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,y)}else{const q=g.textures;for(let j=0;j<q.length;j++){const Y=q[j],St=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),ft=M(Y.internalFormat,St,ot,Y.colorSpace),Wt=Gt(g);F&&Ht(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ft,g.width,g.height):Ht(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ft,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ft,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$(g.depthTexture,0);const j=q.__webglTexture,Y=Gt(g);if(g.depthTexture.format===fi)Ht(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(g.depthTexture.format===vi)Ht(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Zt(y){const g=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=q}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");At(g.__webglFramebuffer,y)}else if(F){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),at(g.__webglDepthbuffer[q],y,!1);else{const j=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),at(g.__webglDepthbuffer,y,!1);else{const q=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(y,g,F){const q=n.get(y);g!==void 0&&gt(q.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Zt(y)}function de(y){const g=y.texture,F=n.get(y),q=n.get(g);y.addEventListener("dispose",C);const j=y.textures,Y=y.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ft=0;ft<g.mipmaps.length;ft++)F.__webglFramebuffer[ot][ft]=i.createFramebuffer()}else F.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<g.mipmaps.length;ot++)F.__webglFramebuffer[ot]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(St)for(let ot=0,ft=j.length;ot<ft;ot++){const Wt=n.get(j[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&Ht(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){const ft=j[ot];F.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const Wt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),pt=M(ft.internalFormat,Wt,tt,ft.colorSpace,y.isXRRenderTarget===!0),Rt=Gt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,pt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),at(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,g);for(let ot=0;ot<6;ot++)if(g.mipmaps&&g.mipmaps.length>0)for(let ft=0;ft<g.mipmaps.length;ft++)gt(F.__webglFramebuffer[ot][ft],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else gt(F.__webglFramebuffer[ot],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(g)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ot=0,ft=j.length;ot<ft;ot++){const Wt=j[ot],tt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Ot(i.TEXTURE_2D,Wt),gt(F.__webglFramebuffer,y,Wt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),p(Wt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ot=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,q.__webglTexture),Ot(ot,g),g.mipmaps&&g.mipmaps.length>0)for(let ft=0;ft<g.mipmaps.length;ft++)gt(F.__webglFramebuffer[ft],y,g,i.COLOR_ATTACHMENT0,ot,ft);else gt(F.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,ot,0);p(g)&&h(ot),e.unbindTexture()}y.depthBuffer&&Zt(y)}function oe(y){const g=y.textures;for(let F=0,q=g.length;F<q;F++){const j=g[F];if(p(j)){const Y=R(y),St=n.get(j).__webglTexture;e.bindTexture(Y,St),h(Y),e.unbindTexture()}}}const kt=[],b=[];function Ne(y){if(y.samples>0){if(Ht(y)===!1){const g=y.textures,F=y.width,q=y.height;let j=i.COLOR_BUFFER_BIT;const Y=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(y),ot=g.length>1;if(ot)for(let ft=0;ft<g.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ft=0;ft<g.length;ft++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const Wt=n.get(g[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,j,i.NEAREST),l===!0&&(kt.length=0,b.length=0,kt.push(i.COLOR_ATTACHMENT0+ft),y.depthBuffer&&y.resolveDepthBuffer===!1&&(kt.push(Y),b.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,b)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<g.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const Wt=n.get(g[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Gt(y){return Math.min(s.maxSamples,y.samples)}function Ht(y){const g=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function xt(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function ie(y,g){const F=y.colorSpace,q=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==Ei&&F!==xn&&(Kt.getTransfer(F)===Qt?(q!==qe||j!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function Et(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Ct,this.setupRenderTarget=de,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ht}function gp(i,t){function e(n,s=xn){let r;const a=Kt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Do)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Io)return i.BYTE;if(n===Lo)return i.SHORT;if(n===Li)return i.UNSIGNED_SHORT;if(n===ta)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===Uo)return i.ALPHA;if(n===No)return i.RGB;if(n===qe)return i.RGBA;if(n===Oo)return i.LUMINANCE;if(n===Fo)return i.LUMINANCE_ALPHA;if(n===fi)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===Bo)return i.RED;if(n===ia)return i.RED_INTEGER;if(n===ko)return i.RG;if(n===sa)return i.RG_INTEGER;if(n===ra)return i.RGBA_INTEGER;if(n===cs||n===us||n===hs||n===ds)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gr||n===Sr||n===vr||n===Er)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tr||n===xr||n===Mr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tr||n===xr)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yr||n===Ar||n===Rr||n===Cr||n===br||n===wr||n===Pr||n===Ir||n===Lr||n===Dr||n===Ur||n===Nr||n===Or||n===Fr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ar)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===br)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ir)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ur)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Or)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fs||n===Br||n===kr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fs)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Br)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Gr||n===Hr||n===zr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vp=`
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

}`;class Ep{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:Sp,fragmentShader:vp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tp extends xi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,_=null;const S=new Ep,p=e.getContextAttributes();let h=null,R=null;const M=[],T=[],I=new Bt;let w=null;const C=new Ye;C.viewport=new ue;const U=new Ye;U.viewport=new ue;const x=[C,U],E=new Gc;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=M[K];return et===void 0&&(et=new Xs,M[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=M[K];return et===void 0&&(et=new Xs,M[K]=et),et.getGripSpace()},this.getHand=function(K){let et=M[K];return et===void 0&&(et=new Xs,M[K]=et),et.getHandSpace()};function G(K){const et=T.indexOf(K.inputSource);if(et===-1)return;const gt=M[et];gt!==void 0&&(gt.update(K.inputSource,K.frame,c||a),gt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let K=0;K<M.length;K++){const et=T[K];et!==null&&(T[K]=null,M[K].disconnect(et))}P=null,H=null,S.reset(),t.setRenderTarget(h),m=null,f=null,d=null,s=null,R=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,at=null,At=null;p.depth&&(At=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=p.stencil?vi:fi,at=p.stencil?Si:Xn);const Zt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new Yn(f.textureWidth,f.textureHeight,{format:qe,type:mn,depthTexture:new Jo(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const gt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new Yn(m.framebufferWidth,m.framebufferHeight,{format:qe,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(K){for(let et=0;et<K.removed.length;et++){const gt=K.removed[et],at=T.indexOf(gt);at>=0&&(T[at]=null,M[at].disconnect(gt))}for(let et=0;et<K.added.length;et++){const gt=K.added[et];let at=T.indexOf(gt);if(at===-1){for(let Zt=0;Zt<M.length;Zt++)if(Zt>=T.length){T.push(gt),at=Zt;break}else if(T[Zt]===null){T[Zt]=gt,at=Zt;break}if(at===-1)break}const At=M[at];At&&At.connect(gt)}}const W=new O,J=new O;function V(K,et,gt){W.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(gt.matrixWorld);const at=W.distanceTo(J),At=et.projectionMatrix.elements,Zt=gt.projectionMatrix.elements,Ct=At[14]/(At[10]-1),de=At[14]/(At[10]+1),oe=(At[9]+1)/At[5],kt=(At[9]-1)/At[5],b=(At[8]-1)/At[0],Ne=(Zt[8]+1)/Zt[0],Gt=Ct*b,Ht=Ct*Ne,xt=at/(-b+Ne),ie=xt*-b;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ie),K.translateZ(xt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),At[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=Ct+xt,y=de+xt,g=Gt-ie,F=Ht+(at-ie),q=oe*de/y*Et,j=kt*de/y*Et;K.projectionMatrix.makePerspective(g,F,q,j,Et,y),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function rt(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,gt=K.far;S.texture!==null&&(S.depthNear>0&&(et=S.depthNear),S.depthFar>0&&(gt=S.depthFar)),E.near=U.near=C.near=et,E.far=U.far=C.far=gt,(P!==E.near||H!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,H=E.far),C.layers.mask=K.layers.mask|2,U.layers.mask=K.layers.mask|4,E.layers.mask=C.layers.mask|U.layers.mask;const at=K.parent,At=E.cameras;rt(E,at);for(let Zt=0;Zt<At.length;Zt++)rt(At[Zt],at);At.length===2?V(E,C,U):E.projectionMatrix.copy(C.projectionMatrix),dt(K,E,at)};function dt(K,et,gt){gt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(gt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let Tt=null;function Ot(K,et){if(u=et.getViewerPose(c||a),_=et,u!==null){const gt=u.views;m!==null&&(t.setRenderTargetFramebuffer(R,m.framebuffer),t.setRenderTarget(R));let at=!1;gt.length!==E.cameras.length&&(E.cameras.length=0,at=!0);for(let Ct=0;Ct<gt.length;Ct++){const de=gt[Ct];let oe=null;if(m!==null)oe=m.getViewport(de);else{const b=d.getViewSubImage(f,de);oe=b.viewport,Ct===0&&(t.setRenderTargetTextures(R,b.colorTexture,f.ignoreDepthValues?void 0:b.depthStencilTexture),t.setRenderTarget(R))}let kt=x[Ct];kt===void 0&&(kt=new Ye,kt.layers.enable(Ct),kt.viewport=new ue,x[Ct]=kt),kt.matrix.fromArray(de.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(de.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(oe.x,oe.y,oe.width,oe.height),Ct===0&&(E.matrix.copy(kt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),at===!0&&E.cameras.push(kt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Ct=d.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&S.init(t,Ct,s.renderState)}}for(let gt=0;gt<M.length;gt++){const at=T[gt],At=M[gt];at!==null&&At!==void 0&&At.update(at,et,c||a)}Tt&&Tt(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const te=new tl;te.setAnimationLoop(Ot),this.setAnimationLoop=function(K){Tt=K},this.dispose=function(){}}}const Nn=new en,xp=new he;function Mp(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Zo(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,R,M,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),S(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,R,M):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Pe&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Pe&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const R=t.get(h),M=R.envMap,T=R.envMapRotation;M&&(p.envMap.value=M,Nn.copy(T),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),p.envMapRotation.value.setFromMatrix4(xp.makeRotationFromEuler(Nn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,R,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*R,p.scale.value=M*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,R){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pe&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function S(p,h){const R=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,M){const T=M.program;n.uniformBlockBinding(R,T)}function c(R,M){let T=s[R.id];T===void 0&&(_(R),T=u(R),s[R.id]=T,R.addEventListener("dispose",p));const I=M.program;n.updateUBOMapping(R,I);const w=t.render.frame;r[R.id]!==w&&(f(R),r[R.id]=w)}function u(R){const M=d();R.__bindingPointIndex=M;const T=i.createBuffer(),I=R.__size,w=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function d(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const M=s[R.id],T=R.uniforms,I=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,C=T.length;w<C;w++){const U=Array.isArray(T[w])?T[w]:[T[w]];for(let x=0,E=U.length;x<E;x++){const P=U[x];if(m(P,w,x,I)===!0){const H=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let $=0;$<G.length;$++){const W=G[$],J=S(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+X,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,M,T,I){const w=R.value,C=M+"_"+T;if(I[C]===void 0)return typeof w=="number"||typeof w=="boolean"?I[C]=w:I[C]=w.clone(),!0;{const U=I[C];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return I[C]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function _(R){const M=R.uniforms;let T=0;const I=16;for(let C=0,U=M.length;C<U;C++){const x=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,P=x.length;E<P;E++){const H=x[E],G=Array.isArray(H.value)?H.value:[H.value];for(let X=0,$=G.length;X<$;X++){const W=G[X],J=S(W),V=T%I,rt=V%J.boundary,dt=V+rt;T+=rt,dt!==0&&I-dt<J.storage&&(T+=I-dt),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=J.storage}}}const w=T%I;return w>0&&(T+=I-w),R.__size=T,R.__cache={},this}function S(R){const M={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(M.boundary=4,M.storage=4):R.isVector2?(M.boundary=8,M.storage=8):R.isVector3||R.isColor?(M.boundary=16,M.storage=12):R.isVector4?(M.boundary=16,M.storage=16):R.isMatrix3?(M.boundary=48,M.storage=48):R.isMatrix4?(M.boundary=64,M.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),M}function p(R){const M=R.target;M.removeEventListener("dispose",p);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function h(){for(const R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Ap{constructor(t={}){const{canvas:e=nc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),S=new Int32Array(4);let p=null,h=null;const R=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=An,this.toneMappingExposure=1;const T=this;let I=!1,w=0,C=0,U=null,x=-1,E=null;const P=new ue,H=new ue;let G=null;const X=new qt(0);let $=0,W=e.width,J=e.height,V=1,rt=null,dt=null;const Tt=new ue(0,0,W,J),Ot=new ue(0,0,W,J);let te=!1;const K=new la;let et=!1,gt=!1;this.transmissionResolutionScale=1;const at=new he,At=new he,Zt=new O,Ct=new ue,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function kt(){return U===null?V:1}let b=n;function Ne(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jr}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),b===null){const D="webgl2";if(b=Ne(D,v),b===null)throw Ne(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Gt,Ht,xt,ie,Et,y,g,F,q,j,Y,St,ot,ft,Wt,tt,pt,Rt,bt,mt,zt,Dt,ne,L;function it(){Gt=new Ud(b),Gt.init(),Dt=new gp(b,Gt),Ht=new Cd(b,Gt,t,Dt),xt=new mp(b,Gt),Ht.reverseDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),ie=new Fd(b),Et=new np,y=new _p(b,Gt,xt,Et,Ht,Dt,ie),g=new wd(T),F=new Dd(T),q=new Vc(b),ne=new Ad(b,q),j=new Nd(b,q,ie,ne),Y=new kd(b,j,q,ie),bt=new Bd(b,Ht,y),tt=new bd(Et),St=new ep(T,g,F,Gt,Ht,ne,tt),ot=new Mp(T,Et),ft=new sp,Wt=new up(Gt),Rt=new yd(T,g,F,xt,Y,m,l),pt=new fp(T,Y,Ht),L=new yp(b,ie,Ht,xt),mt=new Rd(b,Gt,ie),zt=new Od(b,Gt,ie),ie.programs=St.programs,T.capabilities=Ht,T.extensions=Gt,T.properties=Et,T.renderLists=ft,T.shadowMap=pt,T.state=xt,T.info=ie}it();const z=new Tp(T,b);this.xr=z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const v=Gt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Gt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(W,J,!1))},this.getSize=function(v){return v.set(W,J)},this.setSize=function(v,D,B=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,J=D,e.width=Math.floor(v*V),e.height=Math.floor(D*V),B===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(W*V,J*V).floor()},this.setDrawingBufferSize=function(v,D,B){W=v,J=D,V=B,e.width=Math.floor(v*B),e.height=Math.floor(D*B),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(Tt)},this.setViewport=function(v,D,B,k){v.isVector4?Tt.set(v.x,v.y,v.z,v.w):Tt.set(v,D,B,k),xt.viewport(P.copy(Tt).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Ot)},this.setScissor=function(v,D,B,k){v.isVector4?Ot.set(v.x,v.y,v.z,v.w):Ot.set(v,D,B,k),xt.scissor(H.copy(Ot).multiplyScalar(V).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(v){xt.setScissorTest(te=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){dt=v},this.getClearColor=function(v){return v.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,B=!0){let k=0;if(v){let N=!1;if(U!==null){const Q=U.texture.format;N=Q===ra||Q===sa||Q===ia}if(N){const Q=U.texture.type,st=Q===mn||Q===Xn||Q===Li||Q===Si||Q===ea||Q===na,ht=Rt.getClearColor(),_t=Rt.getClearAlpha(),wt=ht.r,Pt=ht.g,Mt=ht.b;st?(_[0]=wt,_[1]=Pt,_[2]=Mt,_[3]=_t,b.clearBufferuiv(b.COLOR,0,_)):(S[0]=wt,S[1]=Pt,S[2]=Mt,S[3]=_t,b.clearBufferiv(b.COLOR,0,S))}else k|=b.COLOR_BUFFER_BIT}D&&(k|=b.DEPTH_BUFFER_BIT),B&&(k|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Rt.dispose(),ft.dispose(),Wt.dispose(),Et.dispose(),g.dispose(),F.dispose(),Y.dispose(),ne.dispose(),L.dispose(),St.dispose(),z.dispose(),z.removeEventListener("sessionstart",pa),z.removeEventListener("sessionend",ma),bn.stop()};function Z(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const v=ie.autoReset,D=pt.enabled,B=pt.autoUpdate,k=pt.needsUpdate,N=pt.type;it(),ie.autoReset=v,pt.enabled=D,pt.autoUpdate=B,pt.needsUpdate=k,pt.type=N}function lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function It(v){const D=v.target;D.removeEventListener("dispose",It),le(D)}function le(v){Ee(v),Et.remove(v)}function Ee(v){const D=Et.get(v).programs;D!==void 0&&(D.forEach(function(B){St.releaseProgram(B)}),v.isShaderMaterial&&St.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,B,k,N,Q){D===null&&(D=de);const st=N.isMesh&&N.matrixWorld.determinant()<0,ht=ll(v,D,B,k,N);xt.setMaterial(k,st);let _t=B.index,wt=1;if(k.wireframe===!0){if(_t=j.getWireframeAttribute(B),_t===void 0)return;wt=2}const Pt=B.drawRange,Mt=B.attributes.position;let Xt=Pt.start*wt,$t=(Pt.start+Pt.count)*wt;Q!==null&&(Xt=Math.max(Xt,Q.start*wt),$t=Math.min($t,(Q.start+Q.count)*wt)),_t!==null?(Xt=Math.max(Xt,0),$t=Math.min($t,_t.count)):Mt!=null&&(Xt=Math.max(Xt,0),$t=Math.min($t,Mt.count));const fe=$t-Xt;if(fe<0||fe===1/0)return;ne.setup(N,k,ht,B,_t);let ce,Yt=mt;if(_t!==null&&(ce=q.get(_t),Yt=zt,Yt.setIndex(ce)),N.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*kt()),Yt.setMode(b.LINES)):Yt.setMode(b.TRIANGLES);else if(N.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),xt.setLineWidth(yt*kt()),N.isLineSegments?Yt.setMode(b.LINES):N.isLineLoop?Yt.setMode(b.LINE_LOOP):Yt.setMode(b.LINE_STRIP)}else N.isPoints?Yt.setMode(b.POINTS):N.isSprite&&Yt.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)On("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Yt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const yt=N._multiDrawStarts,ve=N._multiDrawCounts,jt=N._multiDrawCount,ze=_t?q.get(_t).bytesPerElement:1,qn=Et.get(k).currentProgram.getUniforms();for(let Ie=0;Ie<jt;Ie++)qn.setValue(b,"_gl_DrawID",Ie),Yt.render(yt[Ie]/ze,ve[Ie])}else if(N.isInstancedMesh)Yt.renderInstances(Xt,fe,N.count);else if(B.isInstancedBufferGeometry){const yt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ve=Math.min(B.instanceCount,yt);Yt.renderInstances(Xt,fe,ve)}else Yt.render(Xt,fe)};function Jt(v,D,B){v.transparent===!0&&v.side===Qe&&v.forceSinglePass===!1?(v.side=Pe,v.needsUpdate=!0,ki(v,D,B),v.side=Rn,v.needsUpdate=!0,ki(v,D,B),v.side=Qe):ki(v,D,B)}this.compile=function(v,D,B=null){B===null&&(B=v),h=Wt.get(B),h.init(D),M.push(h),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),v!==B&&v.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const k=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let st=0;st<Q.length;st++){const ht=Q[st];Jt(ht,B,N),k.add(ht)}else Jt(Q,B,N),k.add(Q)}),h=M.pop(),k},this.compileAsync=function(v,D,B=null){const k=this.compile(v,D,B);return new Promise(N=>{function Q(){if(k.forEach(function(st){Et.get(st).currentProgram.isReady()&&k.delete(st)}),k.size===0){N(v);return}setTimeout(Q,10)}Gt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let He=null;function sn(v){He&&He(v)}function pa(){bn.stop()}function ma(){bn.start()}const bn=new tl;bn.setAnimationLoop(sn),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(v){He=v,z.setAnimationLoop(v),v===null?bn.stop():bn.start()},z.addEventListener("sessionstart",pa),z.addEventListener("sessionend",ma),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(D),D=z.getCamera()),v.isScene===!0&&v.onBeforeRender(T,v,D,U),h=Wt.get(v,M.length),h.init(D),M.push(h),At.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),K.setFromProjectionMatrix(At),gt=this.localClippingEnabled,et=tt.init(this.clippingPlanes,gt),p=ft.get(v,R.length),p.init(),R.push(p),z.enabled===!0&&z.isPresenting===!0){const Q=T.xr.getDepthSensingMesh();Q!==null&&Ts(Q,D,-1/0,T.sortObjects)}Ts(v,D,0,T.sortObjects),p.finish(),T.sortObjects===!0&&p.sort(rt,dt),oe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,oe&&Rt.addToRenderList(p,v),this.info.render.frame++,et===!0&&tt.beginShadows();const B=h.state.shadowsArray;pt.render(B,v,D),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,N=p.transmissive;if(h.setupLights(),D.isArrayCamera){const Q=D.cameras;if(N.length>0)for(let st=0,ht=Q.length;st<ht;st++){const _t=Q[st];ga(k,N,v,_t)}oe&&Rt.render(v);for(let st=0,ht=Q.length;st<ht;st++){const _t=Q[st];_a(p,v,_t,_t.viewport)}}else N.length>0&&ga(k,N,v,D),oe&&Rt.render(v),_a(p,v,D);U!==null&&C===0&&(y.updateMultisampleRenderTarget(U),y.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(T,v,D),ne.resetDefaultState(),x=-1,E=null,M.pop(),M.length>0?(h=M[M.length-1],et===!0&&tt.setGlobalState(T.clippingPlanes,h.state.camera)):h=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function Ts(v,D,B,k){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||K.intersectsSprite(v)){k&&Ct.setFromMatrixPosition(v.matrixWorld).applyMatrix4(At);const st=Y.update(v),ht=v.material;ht.visible&&p.push(v,st,ht,B,Ct.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||K.intersectsObject(v))){const st=Y.update(v),ht=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ct.copy(v.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ct.copy(st.boundingSphere.center)),Ct.applyMatrix4(v.matrixWorld).applyMatrix4(At)),Array.isArray(ht)){const _t=st.groups;for(let wt=0,Pt=_t.length;wt<Pt;wt++){const Mt=_t[wt],Xt=ht[Mt.materialIndex];Xt&&Xt.visible&&p.push(v,st,Xt,B,Ct.z,Mt)}}else ht.visible&&p.push(v,st,ht,B,Ct.z,null)}}const Q=v.children;for(let st=0,ht=Q.length;st<ht;st++)Ts(Q[st],D,B,k)}function _a(v,D,B,k){const N=v.opaque,Q=v.transmissive,st=v.transparent;h.setupLightsView(B),et===!0&&tt.setGlobalState(T.clippingPlanes,B),k&&xt.viewport(P.copy(k)),N.length>0&&Bi(N,D,B),Q.length>0&&Bi(Q,D,B),st.length>0&&Bi(st,D,B),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ga(v,D,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new Yn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Di:mn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const Q=h.state.transmissionRenderTarget[k.id],st=k.viewport||P;Q.setSize(st.z*T.transmissionResolutionScale,st.w*T.transmissionResolutionScale);const ht=T.getRenderTarget();T.setRenderTarget(Q),T.getClearColor(X),$=T.getClearAlpha(),$<1&&T.setClearColor(16777215,.5),T.clear(),oe&&Rt.render(B);const _t=T.toneMapping;T.toneMapping=An;const wt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),et===!0&&tt.setGlobalState(T.clippingPlanes,k),Bi(v,B,k),y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Mt=0,Xt=D.length;Mt<Xt;Mt++){const $t=D[Mt],fe=$t.object,ce=$t.geometry,Yt=$t.material,yt=$t.group;if(Yt.side===Qe&&fe.layers.test(k.layers)){const ve=Yt.side;Yt.side=Pe,Yt.needsUpdate=!0,Sa(fe,B,k,ce,Yt,yt),Yt.side=ve,Yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q))}T.setRenderTarget(ht),T.setClearColor(X,$),wt!==void 0&&(k.viewport=wt),T.toneMapping=_t}function Bi(v,D,B){const k=D.isScene===!0?D.overrideMaterial:null;for(let N=0,Q=v.length;N<Q;N++){const st=v[N],ht=st.object,_t=st.geometry,wt=k===null?st.material:k,Pt=st.group;ht.layers.test(B.layers)&&Sa(ht,D,B,_t,wt,Pt)}}function Sa(v,D,B,k,N,Q){v.onBeforeRender(T,D,B,k,N,Q),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(T,D,B,k,v,Q),N.transparent===!0&&N.side===Qe&&N.forceSinglePass===!1?(N.side=Pe,N.needsUpdate=!0,T.renderBufferDirect(B,D,k,N,v,Q),N.side=Rn,N.needsUpdate=!0,T.renderBufferDirect(B,D,k,N,v,Q),N.side=Qe):T.renderBufferDirect(B,D,k,N,v,Q),v.onAfterRender(T,D,B,k,N,Q)}function ki(v,D,B){D.isScene!==!0&&(D=de);const k=Et.get(v),N=h.state.lights,Q=h.state.shadowsArray,st=N.state.version,ht=St.getParameters(v,N.state,Q,D,B),_t=St.getProgramCacheKey(ht);let wt=k.programs;k.environment=v.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(v.isMeshStandardMaterial?F:g).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",It),wt=new Map,k.programs=wt);let Pt=wt.get(_t);if(Pt!==void 0){if(k.currentProgram===Pt&&k.lightsStateVersion===st)return Ea(v,ht),Pt}else ht.uniforms=St.getUniforms(v),v.onBeforeCompile(ht,T),Pt=St.acquireProgram(ht,_t),wt.set(_t,Pt),k.uniforms=ht.uniforms;const Mt=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Mt.clippingPlanes=tt.uniform),Ea(v,ht),k.needsLights=ul(v),k.lightsStateVersion=st,k.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Pt,k.uniformsList=null,Pt}function va(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=ps.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Ea(v,D){const B=Et.get(v);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function ll(v,D,B,k,N){D.isScene!==!0&&(D=de),y.resetTextureUnits();const Q=D.fog,st=k.isMeshStandardMaterial?D.environment:null,ht=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ei,_t=(k.isMeshStandardMaterial?F:g).get(k.envMap||st),wt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Mt=!!B.morphAttributes.position,Xt=!!B.morphAttributes.normal,$t=!!B.morphAttributes.color;let fe=An;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(fe=T.toneMapping);const ce=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Yt=ce!==void 0?ce.length:0,yt=Et.get(k),ve=h.state.lights;if(et===!0&&(gt===!0||v!==E)){const Ae=v===E&&k.id===x;tt.setState(k,v,Ae)}let jt=!1;k.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==ve.state.version||yt.outputColorSpace!==ht||N.isBatchedMesh&&yt.batching===!1||!N.isBatchedMesh&&yt.batching===!0||N.isBatchedMesh&&yt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&yt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&yt.instancing===!1||!N.isInstancedMesh&&yt.instancing===!0||N.isSkinnedMesh&&yt.skinning===!1||!N.isSkinnedMesh&&yt.skinning===!0||N.isInstancedMesh&&yt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&yt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&yt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&yt.instancingMorph===!1&&N.morphTexture!==null||yt.envMap!==_t||k.fog===!0&&yt.fog!==Q||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==tt.numPlanes||yt.numIntersection!==tt.numIntersection)||yt.vertexAlphas!==wt||yt.vertexTangents!==Pt||yt.morphTargets!==Mt||yt.morphNormals!==Xt||yt.morphColors!==$t||yt.toneMapping!==fe||yt.morphTargetsCount!==Yt)&&(jt=!0):(jt=!0,yt.__version=k.version);let ze=yt.currentProgram;jt===!0&&(ze=ki(k,D,N));let qn=!1,Ie=!1,Ai=!1;const ae=ze.getUniforms(),Oe=yt.uniforms;if(xt.useProgram(ze.program)&&(qn=!0,Ie=!0,Ai=!0),k.id!==x&&(x=k.id,Ie=!0),qn||E!==v){xt.buffers.depth.getReversed()?(at.copy(v.projectionMatrix),sc(at),rc(at),ae.setValue(b,"projectionMatrix",at)):ae.setValue(b,"projectionMatrix",v.projectionMatrix),ae.setValue(b,"viewMatrix",v.matrixWorldInverse);const be=ae.map.cameraPosition;be!==void 0&&be.setValue(b,Zt.setFromMatrixPosition(v.matrixWorld)),Ht.logarithmicDepthBuffer&&ae.setValue(b,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ae.setValue(b,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,Ie=!0,Ai=!0)}if(N.isSkinnedMesh){ae.setOptional(b,N,"bindMatrix"),ae.setOptional(b,N,"bindMatrixInverse");const Ae=N.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ae.setValue(b,"boneTexture",Ae.boneTexture,y))}N.isBatchedMesh&&(ae.setOptional(b,N,"batchingTexture"),ae.setValue(b,"batchingTexture",N._matricesTexture,y),ae.setOptional(b,N,"batchingIdTexture"),ae.setValue(b,"batchingIdTexture",N._indirectTexture,y),ae.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&ae.setValue(b,"batchingColorTexture",N._colorsTexture,y));const Fe=B.morphAttributes;if((Fe.position!==void 0||Fe.normal!==void 0||Fe.color!==void 0)&&bt.update(N,B,ze),(Ie||yt.receiveShadow!==N.receiveShadow)&&(yt.receiveShadow=N.receiveShadow,ae.setValue(b,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Oe.envMap.value=_t,Oe.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Oe.envMapIntensity.value=D.environmentIntensity),Ie&&(ae.setValue(b,"toneMappingExposure",T.toneMappingExposure),yt.needsLights&&cl(Oe,Ai),Q&&k.fog===!0&&ot.refreshFogUniforms(Oe,Q),ot.refreshMaterialUniforms(Oe,k,V,J,h.state.transmissionRenderTarget[v.id]),ps.upload(b,va(yt),Oe,y)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ps.upload(b,va(yt),Oe,y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ae.setValue(b,"center",N.center),ae.setValue(b,"modelViewMatrix",N.modelViewMatrix),ae.setValue(b,"normalMatrix",N.normalMatrix),ae.setValue(b,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ae=k.uniformsGroups;for(let be=0,xs=Ae.length;be<xs;be++){const wn=Ae[be];L.update(wn,ze),L.bind(wn,ze)}}return ze}function cl(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function ul(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,D,B){Et.get(v.texture).__webglTexture=D,Et.get(v.depthTexture).__webglTexture=B;const k=Et.get(v);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const B=Et.get(v);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};const hl=b.createFramebuffer();this.setRenderTarget=function(v,D=0,B=0){U=v,w=D,C=B;let k=!0,N=null,Q=!1,st=!1;if(v){const _t=Et.get(v);if(_t.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(b.FRAMEBUFFER,null),k=!1;else if(_t.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(_t.__hasExternalTextures)y.rebindTextures(v,Et.get(v.texture).__webglTexture,Et.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Mt=v.depthTexture;if(_t.__boundDepthTexture!==Mt){if(Mt!==null&&Et.has(Mt)&&(v.width!==Mt.image.width||v.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(st=!0);const Pt=Et.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?N=Pt[D][B]:N=Pt[D],Q=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?N=Et.get(v).__webglMultisampledFramebuffer:Array.isArray(Pt)?N=Pt[B]:N=Pt,P.copy(v.viewport),H.copy(v.scissor),G=v.scissorTest}else P.copy(Tt).multiplyScalar(V).floor(),H.copy(Ot).multiplyScalar(V).floor(),G=te;if(B!==0&&(N=hl),xt.bindFramebuffer(b.FRAMEBUFFER,N)&&k&&xt.drawBuffers(v,N),xt.viewport(P),xt.scissor(H),xt.setScissorTest(G),Q){const _t=Et.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+D,_t.__webglTexture,B)}else if(st){const _t=Et.get(v.texture),wt=D;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,_t.__webglTexture,B,wt)}else if(v!==null&&B!==0){const _t=Et.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,_t.__webglTexture,B)}x=-1},this.readRenderTargetPixels=function(v,D,B,k,N,Q,st){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Et.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){xt.bindFramebuffer(b.FRAMEBUFFER,ht);try{const _t=v.texture,wt=_t.format,Pt=_t.type;if(!Ht.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-k&&B>=0&&B<=v.height-N&&b.readPixels(D,B,k,N,Dt.convert(wt),Dt.convert(Pt),Q)}finally{const _t=U!==null?Et.get(U).__webglFramebuffer:null;xt.bindFramebuffer(b.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(v,D,B,k,N,Q,st){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Et.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){const _t=v.texture,wt=_t.format,Pt=_t.type;if(!Ht.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-k&&B>=0&&B<=v.height-N){xt.bindFramebuffer(b.FRAMEBUFFER,ht);const Mt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Mt),b.bufferData(b.PIXEL_PACK_BUFFER,Q.byteLength,b.STREAM_READ),b.readPixels(D,B,k,N,Dt.convert(wt),Dt.convert(Pt),0);const Xt=U!==null?Et.get(U).__webglFramebuffer:null;xt.bindFramebuffer(b.FRAMEBUFFER,Xt);const $t=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await ic(b,$t,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Mt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Q),b.deleteBuffer(Mt),b.deleteSync($t),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,B=0){v.isTexture!==!0&&(On("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(v.image.width*k),Q=Math.floor(v.image.height*k),st=D!==null?D.x:0,ht=D!==null?D.y:0;y.setTexture2D(v,0),b.copyTexSubImage2D(b.TEXTURE_2D,B,0,0,st,ht,N,Q),xt.unbindTexture()};const dl=b.createFramebuffer(),fl=b.createFramebuffer();this.copyTextureToTexture=function(v,D,B=null,k=null,N=0,Q=null){v.isTexture!==!0&&(On("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,v=arguments[1],D=arguments[2],Q=arguments[3]||0,B=null),Q===null&&(N!==0?(On("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let st,ht,_t,wt,Pt,Mt,Xt,$t,fe;const ce=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(B!==null)st=B.max.x-B.min.x,ht=B.max.y-B.min.y,_t=B.isBox3?B.max.z-B.min.z:1,wt=B.min.x,Pt=B.min.y,Mt=B.isBox3?B.min.z:0;else{const Fe=Math.pow(2,-N);st=Math.floor(ce.width*Fe),ht=Math.floor(ce.height*Fe),v.isDataArrayTexture?_t=ce.depth:v.isData3DTexture?_t=Math.floor(ce.depth*Fe):_t=1,wt=0,Pt=0,Mt=0}k!==null?(Xt=k.x,$t=k.y,fe=k.z):(Xt=0,$t=0,fe=0);const Yt=Dt.convert(D.format),yt=Dt.convert(D.type);let ve;D.isData3DTexture?(y.setTexture3D(D,0),ve=b.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(y.setTexture2DArray(D,0),ve=b.TEXTURE_2D_ARRAY):(y.setTexture2D(D,0),ve=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,D.unpackAlignment);const jt=b.getParameter(b.UNPACK_ROW_LENGTH),ze=b.getParameter(b.UNPACK_IMAGE_HEIGHT),qn=b.getParameter(b.UNPACK_SKIP_PIXELS),Ie=b.getParameter(b.UNPACK_SKIP_ROWS),Ai=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ce.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ce.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,wt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Pt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Mt);const ae=v.isDataArrayTexture||v.isData3DTexture,Oe=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Fe=Et.get(v),Ae=Et.get(D),be=Et.get(Fe.__renderTarget),xs=Et.get(Ae.__renderTarget);xt.bindFramebuffer(b.READ_FRAMEBUFFER,be.__webglFramebuffer),xt.bindFramebuffer(b.DRAW_FRAMEBUFFER,xs.__webglFramebuffer);for(let wn=0;wn<_t;wn++)ae&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Et.get(v).__webglTexture,N,Mt+wn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Et.get(D).__webglTexture,Q,fe+wn)),b.blitFramebuffer(wt,Pt,st,ht,Xt,$t,st,ht,b.DEPTH_BUFFER_BIT,b.NEAREST);xt.bindFramebuffer(b.READ_FRAMEBUFFER,null),xt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||Et.has(v)){const Fe=Et.get(v),Ae=Et.get(D);xt.bindFramebuffer(b.READ_FRAMEBUFFER,dl),xt.bindFramebuffer(b.DRAW_FRAMEBUFFER,fl);for(let be=0;be<_t;be++)ae?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Fe.__webglTexture,N,Mt+be):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Fe.__webglTexture,N),Oe?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ae.__webglTexture,Q,fe+be):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ae.__webglTexture,Q),N!==0?b.blitFramebuffer(wt,Pt,st,ht,Xt,$t,st,ht,b.COLOR_BUFFER_BIT,b.NEAREST):Oe?b.copyTexSubImage3D(ve,Q,Xt,$t,fe+be,wt,Pt,st,ht):b.copyTexSubImage2D(ve,Q,Xt,$t,wt,Pt,st,ht);xt.bindFramebuffer(b.READ_FRAMEBUFFER,null),xt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Oe?v.isDataTexture||v.isData3DTexture?b.texSubImage3D(ve,Q,Xt,$t,fe,st,ht,_t,Yt,yt,ce.data):D.isCompressedArrayTexture?b.compressedTexSubImage3D(ve,Q,Xt,$t,fe,st,ht,_t,Yt,ce.data):b.texSubImage3D(ve,Q,Xt,$t,fe,st,ht,_t,Yt,yt,ce):v.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Q,Xt,$t,st,ht,Yt,yt,ce.data):v.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Q,Xt,$t,ce.width,ce.height,Yt,ce.data):b.texSubImage2D(b.TEXTURE_2D,Q,Xt,$t,st,ht,Yt,yt,ce);b.pixelStorei(b.UNPACK_ROW_LENGTH,jt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ze),b.pixelStorei(b.UNPACK_SKIP_PIXELS,qn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ie),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ai),Q===0&&D.generateMipmaps&&b.generateMipmap(ve),xt.unbindTexture()},this.copyTextureToTexture3D=function(v,D,B=null,k=null,N=0){return v.isTexture!==!0&&(On("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,v=arguments[2],D=arguments[3],N=arguments[4]||0),On('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,B,k,N)},this.initRenderTarget=function(v){Et.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),xt.unbindTexture()},this.resetState=function(){w=0,C=0,U=null,xt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}const A={DEV_MODE:!0,APP_VERSION:"1.0.0",WORLD:{SIZE:58,BOUNDS:{MIN_X:-25,MAX_X:26.5,MIN_Z:-14,MAX_Z:14},TILE_SIZE:2,BORDER_HEIGHT:.5,BORDER_THICKNESS:.4},CAMERA:{FRUSTUM_SIZE:20,NEAR:-100,FAR:200,ANGLE_Y:Math.PI/4,ANGLE_X:Math.atan(1/Math.SQRT2),DISTANCE:45,FOLLOW_LERP:.08},LIGHT:{AMBIENT_INTENSITY:.78,AMBIENT_COLOR:16777215,DIRECTIONAL_INTENSITY:1.25,DIRECTIONAL_COLOR:16775914,DIRECTIONAL_POS:{x:25,y:40,z:20}},ECONOMY:{CRATE_PRICE:60,MERCHANT_INTERVAL:60,SALES_BUFFER_CAPACITY:12},ITEMS:{APRICOT:"apricot",CRATE_FRESH:"crate_fresh",CRATE_DRY1:"crate_dry1",CRATE_SULFUR:"crate_sulfur",CRATE_DRY2:"crate_dry2"},CHAIN:[{from:"apricot",to:"crate_fresh",stationId:"station_crate"},{from:"crate_fresh",to:"crate_dry1",stationId:"station_drying1"},{from:"crate_dry1",to:"crate_sulfur",stationId:"station_tent"},{from:"crate_sulfur",to:"crate_dry2",stationId:"station_drying2"}],CAPACITIES:{apricot:10,crate_fresh:3,crate_dry1:3,crate_sulfur:3,crate_dry2:3},ITEM_LABELS:{EMPTY:{label:"BOŞ",icon:"🖐️"},apricot:{label:"KAYISI",icon:"🍑"},crate_fresh:{label:"TAZE KASA",icon:"📦"},crate_dry1:{label:"1. KURU KASA",icon:"🪵"},crate_sulfur:{label:"KÜKÜRT KASA",icon:"✨"},crate_dry2:{label:"2. KURU KASA",icon:"🏆"}},PLAYER:{SPEED:6.2,ROTATION_LERP:.22,RADIUS:.45,HEIGHT:1.6,HEAD_RADIUS:.28,HEAD_HEIGHT:1.35,BODY_HEIGHT:.85,BODY_RADIUS_TOP:.32,BODY_RADIUS_BOTTOM:.38,BODY_Y:.65,FEET_WIDTH:.16,FEET_HEIGHT:.15,FEET_DEPTH:.24,FEET_SPACING:.18,FEET_Y:.075,HAT_RADIUS:.34,HAT_HEIGHT:.12,HAT_TOP_RADIUS:.2,HAT_TOP_HEIGHT:.15,HAT_Y:1.55,BASKET_WIDTH:.56,BASKET_HEIGHT:.55,BASKET_DEPTH:.42,BASKET_Y:.65,BASKET_Z:-.32,STACK:{OFFSET_Y:.8,OFFSET_Z:-.32,COLS:2,ROWS:2,SPACING_X:.2,SPACING_Y:.18,SPACING_Z:.2,SCALE:.75},CRATE_STACK:{OFFSET_Y:.35,OFFSET_Z:-.42,SPACING_Y:.36,SCALE:.68}},TREES:{COUNT:4,POSITIONS:[{x:-20,z:-4.5},{x:-16,z:-4.5},{x:-20,z:4.5},{x:-16,z:4.5}],TRUNK_HEIGHT:1.7,TRUNK_RADIUS_TOP:.28,TRUNK_RADIUS_BOTTOM:.42,TRUNK_SEGMENTS:7,CROWN_TIERS:[{y:1.6,radius:1.5,height:1.25,segments:7},{y:2.45,radius:1.15,height:1.1,segments:7}],FRUITS_PER_TREE:5,FRUIT_OFFSETS:[{x:.95,y:1.9,z:.35},{x:-.85,y:2.1,z:.55},{x:.45,y:2.4,z:-.8},{x:-.7,y:1.9,z:-.65},{x:.1,y:2.6,z:.75}]},APRICOT:{RADIUS:.14,WIDTH_SEGMENTS:7,HEIGHT_SEGMENTS:6,STEM_RADIUS:.02,STEM_HEIGHT:.06,LEAF_WIDTH:.08,LEAF_HEIGHT:.015,LEAF_DEPTH:.05},PROPS:{CRATE:{WIDTH:.68,HEIGHT:.34,DEPTH:.52,WALL_THICKNESS:.05},CRATE_STATION:{POS:{x:-9,z:0},TABLE_WIDTH:2.4,TABLE_HEIGHT:.85,TABLE_DEPTH:1.4,FUNNEL_HEIGHT:.7,INPUT_ZONE:{x:-11.2,z:0,radius:1.2},OUTPUT_ZONE:{x:-6.8,z:0,radius:1.2},SLOT_POSITIONS:[{x:-8.8,y:.85,z:0}],PANEL_POS:{x:-9,y:2.4,z:0}},DRYING_RACK_1:{POS:{x:-1,z:0},WIDTH:2.8,HEIGHT:1.1,DEPTH:1.8,LEG_RADIUS:.06,SHELF_THICKNESS:.05,INPUT_ZONE:{x:-3.2,z:0,radius:1.2},OUTPUT_ZONE:{x:1.2,z:0,radius:1.2},SLOT_POSITIONS:[{x:-1.7,y:.95,z:-.5},{x:-.3,y:.95,z:-.5},{x:-1.7,y:.95,z:.5},{x:-.3,y:.95,z:.5}],PANEL_POS:{x:-1,y:2.4,z:0}},SULFUR_TENT:{POS:{x:7.5,z:0},WIDTH:2.6,HEIGHT:2.2,DEPTH:2.2,INPUT_ZONE:{x:5.3,z:0,radius:1.2},OUTPUT_ZONE:{x:9.7,z:0,radius:1.2},SLOT_POSITIONS:[{x:7.1,y:.25,z:-.4},{x:7.1,y:.25,z:.4}],SMOKE_ORIGIN:{x:6.4,y:1.8,z:0},PANEL_POS:{x:7.5,y:3.1,z:0}},DRYING_RACK_2:{POS:{x:15.5,z:0},WIDTH:2.8,HEIGHT:1.1,DEPTH:1.8,LEG_RADIUS:.06,SHELF_THICKNESS:.05,INPUT_ZONE:{x:13.3,z:0,radius:1.2},OUTPUT_ZONE:{x:17.7,z:0,radius:1.2},SLOT_POSITIONS:[{x:14.8,y:.95,z:-.5},{x:16.2,y:.95,z:-.5},{x:14.8,y:.95,z:.5},{x:16.2,y:.95,z:.5}],PANEL_POS:{x:15.5,y:2.4,z:0}},SALES_STAND:{POS:{x:20.8,z:0},PALLET_WIDTH:2.2,PALLET_HEIGHT:.16,PALLET_DEPTH:1.8,INPUT_ZONE:{x:19.5,z:0,radius:1.2},PANEL_POS:{x:20.8,y:2.5,z:0}},ROAD:{X:23.8,WIDTH:3.2,LENGTH:54,COLOR:5727604,LINE_COLOR:15856374},MERCHANT_TRUCK:{SPEED:10,ROAD_X:23.8,START_Z:-26,STOP_Z:0,END_Z:26,EMPTY_WAIT:1.5,CRATE_FLY_DURATION:.4,DEPART_DELAY:.5}},STATIONS:{ITEM_TRANSFER_INTERVAL:.08,FLOATING_ICON_Y:2.5,SMOKE_POOL_SIZE:10,CRATE_STATION:{ID:"station_crate",NAME:"Kasa İstasyonu",INPUT_TYPE:"apricot",OUTPUT_TYPE:"crate_fresh",INPUT_PER_BATCH:10,PROCESS_TIME:2,SLOT_COUNT:1,INPUT_BUFFER_CAPACITY:30,OUTPUT_LIMIT:2},DRYING_RACK_1:{ID:"station_drying1",NAME:"1. Güneş Kurutma Rafı",INPUT_TYPE:"crate_fresh",OUTPUT_TYPE:"crate_dry1",INPUT_PER_BATCH:1,PROCESS_TIME:20,SLOT_COUNT:4,INPUT_BUFFER_CAPACITY:6,OUTPUT_LIMIT:4},SULFUR_TENT:{ID:"station_tent",NAME:"Kükürt Çadırı",INPUT_TYPE:"crate_dry1",OUTPUT_TYPE:"crate_sulfur",INPUT_PER_BATCH:1,PROCESS_TIME:25,SLOT_COUNT:2,INPUT_BUFFER_CAPACITY:4,OUTPUT_LIMIT:2,HAS_SMOKE:!0},DRYING_RACK_2:{ID:"station_drying2",NAME:"2. Güneş Kurutma Rafı",INPUT_TYPE:"crate_sulfur",OUTPUT_TYPE:"crate_dry2",INPUT_PER_BATCH:1,PROCESS_TIME:20,SLOT_COUNT:4,INPUT_BUFFER_CAPACITY:6,OUTPUT_LIMIT:4}},HARVEST:{TRIGGER_DISTANCE:2.6,STAND_STILL_TIME:1.5,MOVEMENT_THRESHOLD:.12,SHAKE_DURATION:.65,SHAKE_FREQUENCY:32,SHAKE_INTENSITY:.14,RESPAWN_COOLDOWN:15,DROP_FLIGHT_DURATION:.5,DROP_ARC_HEIGHT:1.6},JOYSTICK:{MAX_RADIUS:46,DEADZONE:.08,DEFAULT_POS:{x:80,y:80}},COLORS:{BACKGROUND:7516756,GROUND_LIGHT:8306526,GROUND_DARK:7582803,BORDER:5935426,TREE_TRUNK:6833446,TREE_FOLIAGE_BOTTOM:4758323,TREE_FOLIAGE_TOP:5813056,APRICOT:16753922,APRICOT_DRY1:9124367,APRICOT_SULFUR:16700208,APRICOT_DRY2:4859141,APRICOT_LEAF:3971360,PLAYER_SHIRT:2257043,PLAYER_SKIN:16765861,PLAYER_HAT:15044134,PLAYER_FEET:2899536,BASKET:9198390,CRATE:11040583,CRATE_SLAT:9198390,STATION_TABLE:5726319,STATION_METAL:10793150,STATION_FUNNEL:16739201,RACK_FRAME:5857909,RACK_NET:13808780,TENT_ROOF:13555424,TENT_TRIM:15158332,TENT_ENTRANCE:3093826,SMOKE:16710368,ZONE_INPUT:53971,ZONE_OUTPUT:16697943,ROAD:5727604,ROAD_LINE:15856374,TRUCK_CABIN:15420747,TRUCK_ROOF:16742777,TRUCK_BED:5463144,TRUCK_WHEEL:3093826,TRUCK_BUMPER:14673130},STRINGS:{TITLE:"Kayısı Hasadı",FULL:"DOLU!",WARNING_EMPTY_HANDS:"Önce ellerini boşalt",WARNING_WRONG_CRATE:"Bu kasa buraya uymaz",TOAST_DISCARDED:"Atıldı",DISCARD_BUTTON:"🗑️ At",EMPTY_LABEL:"BOŞ",NO_GOODS:"Mal yok!",LOADING:"Yükleniyor...",UPGRADE_BUTTON:"⚡ Yükselt",UPGRADE_PANEL_TITLE:"Geliştirmeler",LEVEL_MAX:"MAX",LEVEL_FORMAT:"Seviye {0}/{1}",BUY_BUTTON:"Al",RESET_SAVE:"Kaydı Sıfırla",RESET_SAVE_CONFIRM:"Tüm oyun kaydı silinecek ve oyun baştan başlayacak. Emin misiniz?"},STORAGE:{KEY:"kayisi_save",VERSION:2,AUTO_SAVE_INTERVAL:5,DEFAULT_SOUND:!0},TUTORIAL:{STEPS:[{id:"tree",text:"Ağaca git ve durarak kayısı topla",target:{x:-20,y:0,z:-4.5},completeEvent:"apricot_collected"},{id:"crate_station",text:"Topladığın kayısıları Kasa İstasyonu girişine bırak",target:{x:-11.2,y:0,z:0},completeEvent:"station_started",stationId:"station_crate"},{id:"pick_crate",text:"Kasa İstasyonu çıkışındaki taze kasayı al",target:{x:-6.8,y:0,z:0},completeEvent:"crate_picked",itemType:"crate_fresh"},{id:"rack_1",text:"Kasayı 1. Güneş Rafı girişine bırak",target:{x:-3.2,y:0,z:0},completeEvent:"station_started",stationId:"station_drying1"},{id:"tent",text:"Kurutulan kasayı Kükürt Çadırı girişine bırak",target:{x:5.3,y:0,z:0},completeEvent:"station_started",stationId:"station_tent"},{id:"rack_2",text:"Kükürtlü kasayı 2. Güneş Rafı girişine bırak",target:{x:13.3,y:0,z:0},completeEvent:"station_started",stationId:"station_drying2"},{id:"sales",text:"Kuru altın kayısı kasasını Satış Deposuna bırak",target:{x:19.5,y:0,z:0},completeEvent:"dropped",stationId:"sales"},{id:"wait_truck",text:"Tüccar kamyonunu bekle ve altınları kazan",target:{x:23.8,y:0,z:0},completeEvent:"sold"},{id:"upgrade",text:"⚡ Yükselt butonuna dokun ve geliştirme yap",target:null,completeEvent:"upgrade_bought"}],STRINGS:{SKIP_BTN:"Geç",CLOSE_BTN:"✕ Kapat",COMPLETE_TITLE:"Tebrikler!",COMPLETE_TEXT:"Çiftlik döngüsünü öğrendin. Bol kazançlar!"}},AUDIO:{ENABLED_DEFAULT:!0,MAX_COLLECT_RATE:8,MIN_COLLECT_INTERVAL:.125},PARTICLES:{POOL_SIZE:30,GRAVITY:-9.8,DEFAULT_LIFE:.85},UPGRADES:{TENT_CAPACITY:{ID:"tentCapacity",NAME:"Çadır Kapasitesi",ICON:"⛺",BASE_COST:400,COST_MULTIPLIER:1.7,MAX_LEVEL:5,BONUS_PER_LEVEL:1,DESC:"+1 Kükürt Yuvası"},WALK_SPEED:{ID:"walkSpeed",NAME:"Yürüme Hızı",ICON:"👟",BASE_COST:250,COST_MULTIPLIER:1.7,MAX_LEVEL:5,MULTIPLIER_PER_LEVEL:.12,DESC:"+%12 Hız"},CARRY_CAPACITY:{ID:"carryCapacity",NAME:"Taşıma Kapasitesi",ICON:"🎒",BASE_COST:300,COST_MULTIPLIER:1.7,MAX_LEVEL:5,APRICOT_BONUS_PER_LEVEL:3,CRATE_BONUS_PER_LEVEL:1,DESC:"+3 Kayısı, +1 Kasa"},HARVEST_SPEED:{ID:"harvestSpeed",NAME:"Silkeleme Hızı",ICON:"🌳",BASE_COST:200,COST_MULTIPLIER:1.7,MAX_LEVEL:5,REDUCTION_PER_LEVEL:.15,DESC:"-%15 Silkeleme Süresi"}}},vt={groundLight:new Nt({color:A.COLORS.GROUND_LIGHT,flatShading:!0}),groundDark:new Nt({color:A.COLORS.GROUND_DARK,flatShading:!0}),border:new Nt({color:A.COLORS.BORDER,flatShading:!0}),treeTrunk:new Nt({color:A.COLORS.TREE_TRUNK,flatShading:!0}),foliageBottom:new Nt({color:A.COLORS.TREE_FOLIAGE_BOTTOM,flatShading:!0}),foliageTop:new Nt({color:A.COLORS.TREE_FOLIAGE_TOP,flatShading:!0}),apricotFresh:new Nt({color:A.COLORS.APRICOT,flatShading:!0}),apricotDry1:new Nt({color:A.COLORS.APRICOT_DRY1,flatShading:!0}),apricotSulfur:new Nt({color:A.COLORS.APRICOT_SULFUR,flatShading:!0}),apricotDry2:new Nt({color:A.COLORS.APRICOT_DRY2,flatShading:!0}),apricotLeaf:new Nt({color:A.COLORS.APRICOT_LEAF,flatShading:!0}),playerShirt:new Nt({color:A.COLORS.PLAYER_SHIRT,flatShading:!0}),playerSkin:new Nt({color:A.COLORS.PLAYER_SKIN,flatShading:!0}),playerHat:new Nt({color:A.COLORS.PLAYER_HAT,flatShading:!0}),playerFeet:new Nt({color:A.COLORS.PLAYER_FEET,flatShading:!0}),basket:new Nt({color:A.COLORS.BASKET,flatShading:!0}),crate:new Nt({color:A.COLORS.CRATE,flatShading:!0}),crateSlat:new Nt({color:A.COLORS.CRATE_SLAT,flatShading:!0}),stationTable:new Nt({color:A.COLORS.STATION_TABLE,flatShading:!0}),stationMetal:new Nt({color:A.COLORS.STATION_METAL,flatShading:!0}),stationFunnel:new Nt({color:A.COLORS.STATION_FUNNEL,flatShading:!0}),rackFrame:new Nt({color:A.COLORS.RACK_FRAME,flatShading:!0}),rackNet:new Nt({color:A.COLORS.RACK_NET,flatShading:!0}),tentRoof:new Nt({color:A.COLORS.TENT_ROOF,flatShading:!0}),tentTrim:new Nt({color:A.COLORS.TENT_TRIM,flatShading:!0}),tentEntrance:new Nt({color:A.COLORS.TENT_ENTRANCE,flatShading:!0}),smoke:new Nt({color:A.COLORS.SMOKE,transparent:!0,opacity:.5,flatShading:!0}),road:new Nt({color:A.COLORS.ROAD,flatShading:!0}),roadLine:new Nt({color:A.COLORS.ROAD_LINE,flatShading:!0}),truckCabin:new Nt({color:A.COLORS.TRUCK_CABIN,flatShading:!0}),truckRoof:new Nt({color:A.COLORS.TRUCK_ROOF,flatShading:!0}),truckBed:new Nt({color:A.COLORS.TRUCK_BED,flatShading:!0}),truckBumper:new Nt({color:A.COLORS.TRUCK_BUMPER,flatShading:!0}),zoneInput:new Nt({color:A.COLORS.ZONE_INPUT,transparent:!0,opacity:.65}),zoneOutput:new Nt({color:A.COLORS.ZONE_OUTPUT,transparent:!0,opacity:.65}),zoneIcon:new Nt({color:16777215}),progressBg:new Ge({color:A.COLORS.PROGRESS_BG}),progressFill:new Ge({color:A.COLORS.PROGRESS_FILL}),progressPaused:new Ge({color:A.COLORS.PROGRESS_PAUSED}),checkGreen:new Ge({color:A.COLORS.CHECK_GREEN})},tr={body:new Mi(A.APRICOT.RADIUS,A.APRICOT.WIDTH_SEGMENTS,A.APRICOT.HEIGHT_SEGMENTS),stem:new me(A.APRICOT.STEM_RADIUS,A.APRICOT.STEM_RADIUS,A.APRICOT.STEM_HEIGHT,4),leaf:new Vt(A.APRICOT.LEAF_WIDTH,A.APRICOT.LEAF_HEIGHT,A.APRICOT.LEAF_DEPTH)};function Es(i=!1){const t=new ee;t.name="Apricot";const e=A.APRICOT,n=new ut(tr.body,i?vt.apricotDry1:vt.apricotFresh);n.position.y=e.RADIUS,t.add(n);const s=new ut(tr.stem,vt.treeTrunk);s.position.y=e.RADIUS*2+e.STEM_HEIGHT/2-.02,t.add(s);const r=new ut(tr.leaf,vt.apricotLeaf);return r.position.set(e.LEAF_WIDTH/2,e.RADIUS*2+.01,0),r.rotation.z=.3,t.add(r),t}const Xr=A.PROPS.CRATE.HEIGHT-.04,ci={bottom:new Vt(A.PROPS.CRATE.WIDTH,.04,A.PROPS.CRATE.DEPTH),longWall:new Vt(A.PROPS.CRATE.WIDTH,Xr,A.PROPS.CRATE.WALL_THICKNESS),shortWall:new Vt(A.PROPS.CRATE.WALL_THICKNESS,Xr,A.PROPS.CRATE.DEPTH-A.PROPS.CRATE.WALL_THICKNESS*2),fruit:new Mi(.08,6,5)};function Wn(i=A.ITEMS.CRATE_FRESH){const t=new ee;t.name=`Crate_${i}`;const e=A.PROPS.CRATE,n=new ut(ci.bottom,vt.crateSlat);n.position.y=.02,t.add(n);const s=Xr,r=new ut(ci.longWall,vt.crate);r.position.set(0,s/2+.04,e.DEPTH/2-e.WALL_THICKNESS/2);const a=new ut(ci.longWall,vt.crate);a.position.set(0,s/2+.04,-.52/2+e.WALL_THICKNESS/2);const o=new ut(ci.shortWall,vt.crate);o.position.set(-.68/2+e.WALL_THICKNESS/2,s/2+.04,0);const l=new ut(ci.shortWall,vt.crate);l.position.set(e.WIDTH/2-e.WALL_THICKNESS/2,s/2+.04,0),t.add(r,a,o,l);let c=vt.apricotFresh;i===A.ITEMS.CRATE_DRY1?c=vt.apricotDry1:i===A.ITEMS.CRATE_SULFUR?c=vt.apricotSulfur:i===A.ITEMS.CRATE_DRY2&&(c=vt.apricotDry2);const u=2,d=3,f=.16,m=.16;for(let _=0;_<u;_++)for(let S=0;S<d;S++){const p=new ut(ci.fruit,c),h=(S-(d-1)/2)*f,R=(_-(u-1)/2)*m;p.position.set(h,.14,R),t.add(p)}return t.userData={type:i,height:e.HEIGHT},t}function Rp(){const i=new ee;i.name="CrateStation";const t=A.PROPS.CRATE_STATION,e=new Vt(t.TABLE_WIDTH,.1,t.TABLE_DEPTH),n=new ut(e,vt.stationTable);n.position.y=t.TABLE_HEIGHT,i.add(n);const s=new me(.06,.06,t.TABLE_HEIGHT,6),r=t.TABLE_WIDTH/2-.15,a=t.TABLE_DEPTH/2-.15;[[-r,-a],[r,-a],[-r,a],[r,a]].forEach(([d,f])=>{const m=new ut(s,vt.stationMetal);m.position.set(d,t.TABLE_HEIGHT/2,f),i.add(m)});const o=new me(.48,.18,t.FUNNEL_HEIGHT,8,1,!0),l=new ut(o,vt.stationFunnel);l.position.set(-2.4/4,t.TABLE_HEIGHT+t.FUNNEL_HEIGHT/2,0),i.add(l);const c=new Vt(t.TABLE_WIDTH/2.2,.06,t.TABLE_DEPTH*.7),u=new ut(c,vt.stationMetal);return u.position.set(t.TABLE_WIDTH/4,t.TABLE_HEIGHT+.06,0),i.add(u),i}function Eo(){const i=new ee;i.name="DryingRack";const t=A.PROPS.DRYING_RACK_1,e=new Vt(t.WIDTH,t.SHELF_THICKNESS,t.DEPTH),n=new ut(e,vt.rackNet);n.position.y=t.HEIGHT,i.add(n);const s=new me(t.LEG_RADIUS,t.LEG_RADIUS,t.HEIGHT,6),r=t.WIDTH/2-.1,a=t.DEPTH/2-.1;[[-r,-a],[0,-a],[r,-a],[-r,a],[0,a],[r,a]].forEach(([d,f])=>{const m=new ut(s,vt.rackFrame);m.position.set(d,t.HEIGHT/2,f),i.add(m)});const o=new Vt(.04,.08,t.DEPTH),l=new ut(o,vt.rackFrame);l.position.set(0,t.HEIGHT+.04,0);const c=new Vt(t.WIDTH,.08,.04),u=new ut(c,vt.rackFrame);return u.position.set(0,t.HEIGHT+.04,0),i.add(l,u),i}function Cp(){const i=new ee;i.name="SulfurTent";const t=A.PROPS.SULFUR_TENT,e=t.WIDTH/1.5,n=new me(e,e,t.DEPTH,3);n.rotateZ(Math.PI/2),n.rotateY(Math.PI/6);const s=new ut(n,vt.tentRoof);s.position.set(0,t.HEIGHT/2+.2,0),i.add(s);const r=new Vt(.12,.12,t.DEPTH+.1),a=new ut(r,vt.tentTrim);a.position.set(0,t.HEIGHT+.25,0),i.add(a);const o=new Vt(.06,1.2,.9),l=new ut(o,vt.tentEntrance);l.position.set(-2.6/2+.15,.6,0),i.add(l);const c=new Vt(t.WIDTH+.2,.15,t.DEPTH+.2),u=new ut(c,vt.stationTable);return u.position.y=.075,i.add(u),i}function bp(i){const t=new ee;t.name=`FloatingBadge_${i}`;let e;i===A.ITEMS.APRICOT?(e=Es(!1),e.scale.setScalar(1.2)):(e=Wn(i),e.scale.setScalar(.7)),e.position.y=0,t.add(e);const n=new me(.3,.3,.01,16),s=new Ge({color:0,transparent:!0,opacity:.25}),r=new ut(n,s);return r.position.y=-.3,t.add(r),t}function wp(){const i=new Mi(.2,6,5),t=new ut(i,vt.smoke);return t.visible=!1,t.userData={active:!1,life:0,maxLife:2.2,vx:0,vy:.8,vz:0,baseScale:1},t}function Yr(i,t=1.2){const e=new ee;e.name=`ZoneMarker_${i}`;const n=i==="input",s=n?vt.zoneInput:vt.zoneOutput,r=new me(t,t,.02,24),a=new ut(r,s);a.position.y=.01,e.add(a);const o=new ee;if(o.position.y=.025,n){const l=new Vt(.12,.01,.35),c=new ut(l,vt.zoneIcon);c.position.z=-.08;const u=new me(.24,0,.01,3);u.rotateY(Math.PI);const d=new ut(u,vt.zoneIcon);d.position.z=.16,o.add(c,d)}else{const l=new Vt(.12,.01,.35),c=new ut(l,vt.zoneIcon);c.position.z=.08;const u=new me(.24,0,.01,3),d=new ut(u,vt.zoneIcon);d.position.z=-.16,o.add(c,d)}return e.add(o),e.userData={ringMesh:a,iconGroup:o},e}function To(i=1){const t=document.createElement("canvas"),e=44,n=14,s=340,r=n*2+i*e;t.width=s,t.height=r;const a=t.getContext("2d"),o=new ca(t);o.minFilter=Ue;const l=1.35,c=.22+i*.16,u=new Kn(l,c),d=new Ge({map:o,transparent:!0,depthWrite:!1}),f=new ut(u,d);f.name="StationStatusPanel";let m="";return f.userData={update:(_,S)=>{const p=_.map(h=>{const R=Math.max(0,Math.ceil(h.maxTime-h.progress));return`${h.state}_${R}_${S?1:0}`}).join("|");p!==m&&(m=p,a.clearRect(0,0,s,r),a.fillStyle="rgba(26, 36, 43, 0.88)",a.strokeStyle="rgba(255, 255, 255, 0.35)",a.lineWidth=3,Mn(a,4,4,s-8,r-8,12),a.fill(),a.stroke(),_.forEach((h,R)=>{const M=n+R*e;a.fillStyle="#dfe4ea",a.font="bold 15px sans-serif",a.textAlign="left",a.textBaseline="middle",a.fillText(`S${R+1}:`,14,M+15);const T=48,I=M+4,w=180,C=22;if(h.state==="EMPTY")a.fillStyle="rgba(255, 255, 255, 0.12)",Mn(a,T,I,w,C,5),a.fill(),a.fillStyle="#a4b0be",a.font="13px sans-serif",a.fillText("Boş",T+10,I+C/2);else if(h.state==="PROCESSING"){a.fillStyle="rgba(0, 0, 0, 0.45)",Mn(a,T,I,w,C,5),a.fill();const U=Math.max(.02,Math.min(1,h.progress/h.maxTime));a.fillStyle=S?"#e67e22":"#10ac84",Mn(a,T,I,w*U,C,5),a.fill();const x=Math.max(0,Math.ceil(h.maxTime-h.progress));a.fillStyle="#ffffff",a.font="bold 14px sans-serif",a.textAlign="left",a.fillText(S?"Durakladı":`${x}sn`,T+w+10,I+C/2)}else h.state==="READY"&&(a.fillStyle="rgba(46, 213, 115, 0.2)",Mn(a,T,I,w,C,5),a.fill(),a.fillStyle="#2ed573",a.font="bold 15px sans-serif",a.textAlign="left",a.fillText("✓ HAZIR",T+10,I+C/2))}),o.needsUpdate=!0)}},f}function Mn(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.lineTo(t+n-r,e),i.quadraticCurveTo(t+n,e,t+n,e+r),i.lineTo(t+n,e+s-r),i.quadraticCurveTo(t+n,e+s,t+n-r,e+s),i.lineTo(t+r,e+s),i.quadraticCurveTo(t,e+s,t,e+s-r),i.lineTo(t,e+r),i.quadraticCurveTo(t,e,t+r,e),i.closePath()}function Pp(){const i=new ee;i.name="Player";const t=A.PLAYER,e=new Vt(t.FEET_WIDTH,t.FEET_HEIGHT,t.FEET_DEPTH),n=new ut(e,vt.playerFeet);n.position.set(-.18,t.FEET_Y,.02);const s=new ut(e,vt.playerFeet);s.position.set(t.FEET_SPACING,t.FEET_Y,.02),i.add(n,s);const r=new me(t.BODY_RADIUS_TOP,t.BODY_RADIUS_BOTTOM,t.BODY_HEIGHT,8),a=new ut(r,vt.playerShirt);a.position.y=t.BODY_Y,i.add(a);const o=new Mi(t.HEAD_RADIUS,8,7),l=new ut(o,vt.playerSkin);l.position.y=t.HEAD_HEIGHT,i.add(l);const c=new me(t.HAT_RADIUS,t.HAT_RADIUS,t.HAT_HEIGHT,8),u=new ut(c,vt.playerHat);u.position.y=t.HAT_Y;const d=new me(t.HAT_TOP_RADIUS,t.HAT_TOP_RADIUS,t.HAT_TOP_HEIGHT,8),f=new ut(d,vt.playerHat);f.position.y=t.HAT_Y+t.HAT_HEIGHT/2+t.HAT_TOP_HEIGHT/2,i.add(u,f);const m=new Vt(t.BASKET_WIDTH,t.BASKET_HEIGHT,t.BASKET_DEPTH),_=new ut(m,vt.basket);_.position.set(0,t.BASKET_Y,t.BASKET_Z),i.add(_);const S=new ee;S.name="FruitAnchor",S.position.set(0,t.STACK.OFFSET_Y,t.STACK.OFFSET_Z),i.add(S);const p=new ee;return p.name="CrateAnchor",p.position.set(0,t.CRATE_STACK.OFFSET_Y,t.CRATE_STACK.OFFSET_Z),i.add(p),i.userData={fruitAnchor:S,crateAnchor:p,basketMesh:_,leftFoot:n,rightFoot:s},i}function Ip(){const i=new ee;i.name="Tree";const t=A.TREES,e=new me(t.TRUNK_RADIUS_TOP,t.TRUNK_RADIUS_BOTTOM,t.TRUNK_HEIGHT,t.TRUNK_SEGMENTS),n=new ut(e,vt.treeTrunk);n.position.y=t.TRUNK_HEIGHT/2,i.add(n);const s=new ee;s.name="CrownGroup",t.CROWN_TIERS.forEach((a,o)=>{const l=new me(.1,a.radius,a.height,a.segments),c=o===0?vt.foliageBottom:vt.foliageTop,u=new ut(l,c);u.position.y=a.y+a.height/2,s.add(u)}),i.add(s);const r=[];for(let a=0;a<t.FRUITS_PER_TREE;a++){const o=Es(!1),l=t.FRUIT_OFFSETS[a]||{x:0,y:2,z:0};o.position.set(l.x,l.y,l.z),o.userData={basePos:o.position.clone(),index:a},s.add(o),r.push(o)}return i.userData={crownGroup:s,fruitMeshes:r},i}function Lp(i=!1,t=A.WORLD.TILE_SIZE){const e=new ee,n=new Vt(t,.4,t),s=i?vt.groundDark:vt.groundLight,r=new ut(n,s);return r.position.y=-.2,e.add(r),e}function os(i,t,e){const n=new ee,s=new Vt(i,t,e),r=new ut(s,vt.border);return r.position.y=t/2,n.add(r),n}const Kr=.36,kn=.28,qr=2.1,Zr=3.2,$r=.7,er=1.9,rl=1.5,al=1.5,ol=new me(Kr,Kr,kn,12);ol.rotateZ(Math.PI/2);const $e={bedFloor:new Vt(qr,.12,Zr),railSide:new Vt(.08,$r,Zr),backRail:new Vt(qr,$r,.08),cabin:new Vt(er,rl,al),glass:new Vt(er-.2,.6,.04),bumper:new Vt(er+.1,.35,.2),light:new Vt(.24,.18,.04),wheel:ol},nr={glass:new Nt({color:3093826,flatShading:!0}),light:new Ge({color:15844367})};function Dp(){const i=new ee;i.name="MerchantTruck";const t=Kr,e=qr,n=Zr,s=$r,r=rl,a=al,o=new ut($e.bedFloor,vt.truckBed);o.position.set(0,t*2+.06,-.4),i.add(o);const l=new ut($e.railSide,vt.truckBed);l.position.set(-e/2+.04,t*2+s/2,-.4);const c=new ut($e.railSide,vt.truckBed);c.position.set(e/2-.04,t*2+s/2,-.4);const u=new ut($e.backRail,vt.truckBed);u.position.set(0,t*2+s/2,-.4-n/2+.04),i.add(l,c,u);const d=new ut($e.cabin,vt.truckCabin);d.position.set(0,t*2+r/2,1.35),i.add(d);const f=new ut($e.glass,nr.glass);f.position.set(0,t*2+r*.65,1.35+a/2+.01),i.add(f);const m=new ut($e.bumper,vt.truckBumper);m.position.set(0,t+.1,1.35+a/2+.1),i.add(m);const _=new ut($e.light,nr.light);_.position.set(-.6,t+.15,1.35+a/2+.21);const S=new ut($e.light,nr.light);S.position.set(.6,t+.15,1.35+a/2+.21),i.add(_,S),[[-e/2-kn/2,t,1.35],[e/2+kn/2,t,1.35],[-e/2-kn/2,t,-.1],[e/2+kn/2,t,-.1],[-e/2-kn/2,t,-1.3],[e/2+kn/2,t,-1.3]].forEach(([R,M,T])=>{const I=new ut($e.wheel,vt.truckWheel);I.position.set(R,M,T),i.add(I)});const h=new ee;return h.name="CrateBedAnchor",h.position.set(0,t*2+.12,-.4),i.add(h),i.userData={crateBedAnchor:h},i}function Up(i=3.2,t=54){const e=new ee;e.name="Road";const n=new Vt(i,.04,t),s=new ut(n,vt.road);s.position.y=.02,e.add(s);const r=Math.floor(t/2.4),a=new Vt(.18,.045,1.2);for(let o=0;o<r;o++){const l=new ut(a,vt.roadLine);l.position.set(0,.025,-t/2+1.2+o*2.4),e.add(l)}return e}function Np(){const i=new ee;i.name="SalesStand";const t=A.PROPS.SALES_STAND,e=new Vt(t.PALLET_WIDTH,t.PALLET_HEIGHT,t.PALLET_DEPTH),n=new ut(e,vt.crateSlat);n.position.y=t.PALLET_HEIGHT/2,i.add(n);const s=new me(.05,.05,.6,6),r=t.PALLET_WIDTH/2-.08,a=t.PALLET_DEPTH/2-.08;[[-r,-a],[r,-a],[-r,a],[r,a]].forEach(([l,c])=>{const u=new ut(s,vt.stationMetal);u.position.set(l,.3,c),i.add(u)});const o=new ee;return o.name="CrateStackAnchor",o.position.set(0,t.PALLET_HEIGHT,0),i.add(o),i.userData={crateStackAnchor:o},i}function Op(){const i=document.createElement("canvas");i.width=380,i.height=140;const t=i.getContext("2d"),e=new ca(i);e.minFilter=Ue;const n=1.45,s=.55,r=new Kn(n,s),a=new Ge({map:e,transparent:!0,depthWrite:!1}),o=new ut(r,a);o.name="SalesBillboard";let l="";return o.userData={update:(c,u,d,f)=>{const m=`${Math.ceil(c)}_${u}_${d}_${f?1:0}`;if(m===l)return;if(l=m,t.clearRect(0,0,i.width,i.height),t.fillStyle="rgba(26, 36, 43, 0.92)",t.strokeStyle="rgba(255, 255, 255, 0.35)",t.lineWidth=3,Mn(t,4,4,i.width-8,i.height-8,14),t.fill(),t.stroke(),f)t.fillStyle="#2ed573",t.font="bold 20px sans-serif",t.textAlign="center",t.fillText("🚚 Yükleniyor...",i.width/2,42);else{t.fillStyle="#ffffff",t.font="bold 18px sans-serif",t.textAlign="center";const M=Math.max(0,Math.ceil(c));t.fillText(`Sonraki kamyon: ${M}sn`,i.width/2,42)}t.fillStyle="#f1f2f6",t.font="bold 16px sans-serif",t.textAlign="left",t.fillText(`Depo: ${u} / ${d}`,32,95);const _=180,S=80,p=160,h=20;t.fillStyle="rgba(0, 0, 0, 0.5)",Mn(t,_,S,p,h,5),t.fill();const R=Math.max(0,Math.min(1,u/d));t.fillStyle="#e67e22",Mn(t,_,S,p*R,h,5),t.fill(),e.needsUpdate=!0}},o}const Fp=new Kn(1.6,.48);function Bp(i,t="#2ed573"){const e=document.createElement("canvas");e.width=300,e.height=90;const n=e.getContext("2d");n.fillStyle=t,n.strokeStyle="#000000",n.lineWidth=4,n.font="900 36px sans-serif",n.textAlign="center",n.textBaseline="middle",n.strokeText(i,e.width/2,e.height/2),n.fillText(i,e.width/2,e.height/2);const s=new ca(e);s.minFilter=Ue;const r=new Ge({map:s,transparent:!0,depthWrite:!1}),a=new ut(Fp,r);return a.name=`FloatingNotice_${i}`,a.userData={life:0,maxLife:1.8,vy:1.4},a}class kp{constructor(){this.listeners=new Map}on(t,e){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),()=>this.off(t,e)}off(t,e){const n=this.listeners.get(t);n&&(n.delete(e),n.size===0&&this.listeners.delete(t))}emit(t,e){A&&A.DEV_MODE&&console.log(`[Event Emit] ${t}:`,e!==void 0?e:null);const n=this.listeners.get(t);n&&n.forEach(s=>{try{s(e)}catch(r){console.error(`Error in event listener for "${t}":`,r)}})}}const re=new kp;class ls{constructor(t){this.id=t.id,this.name=t.name,this.inputType=t.inputType,this.outputType=t.outputType,this.inputPerBatch=t.inputPerBatch,this.processTime=t.processTime,this.slotCount=t.slotCount,this.inputBufferCapacity=t.inputBufferCapacity||t.slotCount*t.inputPerBatch+2,this.outputLimit=t.outputLimit!==void 0?t.outputLimit:t.slotCount,this.scene=t.scene,this.onWarning=t.onWarning||(()=>{});const e=1.2;this.inputZone={x:t.inputZone.x,z:t.inputZone.z,radius:t.inputZone.radius||e},this.outputZone={x:t.outputZone.x,z:t.outputZone.z,radius:t.outputZone.radius||e},this.inputMarker=Yr("input",this.inputZone.radius),this.inputMarker.position.set(this.inputZone.x,.01,this.inputZone.z),this.scene.add(this.inputMarker),this.outputMarker=Yr("output",this.outputZone.radius),this.outputMarker.position.set(this.outputZone.x,.01,this.outputZone.z),this.scene.add(this.outputMarker),this.group=t.stationGroup||null,this.group&&!this.group.parent&&this.scene.add(this.group),this.inputBuffer=0,this.transferTimer=0,this.slots=[],this.slotPositions=t.slotPositions||[];for(let n=0;n<this.slotCount;n++){const s=this.slotPositions[n]||{x:this.inputZone.x,y:1,z:this.inputZone.z};this.slots.push({index:n,state:"EMPTY",progress:0,maxTime:this.processTime,position:s,itemMesh:null})}if(this.panelPos=t.panelPos||{x:(this.inputZone.x+this.outputZone.x)/2,y:2.5,z:(this.inputZone.z+this.outputZone.z)/2},this.statusPanel=To(this.slotCount),this.statusPanel.position.set(this.panelPos.x,this.panelPos.y,this.panelPos.z),this.scene.add(this.statusPanel),this.floatingIconType=t.floatingIconType||this.inputType,this.floatingIconType){this.floatingBadge=bp(this.floatingIconType);const n=(this.inputZone.x+this.outputZone.x)/2,s=(this.inputZone.z+this.outputZone.z)/2;this.baseBadgeY=this.panelPos.y+(.22+this.slotCount*.16)/2+.45,this.floatingBadge.position.set(n,this.baseBadgeY,s),this.scene.add(this.floatingBadge),this.badgeTimer=0}if(this.hasSmoke=!!t.hasSmoke,this.smokeOrigin=t.smokeOrigin||{x:this.inputZone.x,y:1.6,z:this.inputZone.z},this.smokePool=[],this.smokeSpawnTimer=0,this.hasSmoke){const n=A.STATIONS.SMOKE_POOL_SIZE;for(let s=0;s<n;s++){const r=wp();this.scene.add(r),this.smokePool.push(r)}}}update(t,e,n){const s=e.getPosition();n&&this.statusPanel&&this.statusPanel.quaternion.copy(n.quaternion),this.floatingBadge&&(this.badgeTimer+=t,this.floatingBadge.rotation.y+=t*1.5,this.floatingBadge.position.y=this.baseBadgeY+Math.sin(this.badgeTimer*2.2)*.08);const a=Math.hypot(s.x-this.inputZone.x,s.z-this.inputZone.z)<=this.inputZone.radius,l=Math.hypot(s.x-this.outputZone.x,s.z-this.outputZone.z)<=this.outputZone.radius;this.inputMarker&&this.inputMarker.scale.setScalar(a?1.06:1),this.outputMarker&&this.outputMarker.scale.setScalar(l?1.06:1);const u=this.slots.filter(d=>d.state==="READY").length>=this.outputLimit;this._handleInputDeposit(t,e,a),this._updateSlots(t,u),this.statusPanel&&this.statusPanel.userData.update&&this.statusPanel.userData.update(this.slots,u),this.hasSmoke&&this._updateSmoke(t,u),this._handleOutputCollection(t,e,l)}_handleInputDeposit(t,e,n){if(!n)return;const s=e.getCurrentType();if(!(e.getCount()<=0||s===null)){if(s!==this.inputType){this.onWarning(A.STRINGS.WARNING_WRONG_CRATE),re.emit("warning",{message:A.STRINGS.WARNING_WRONG_CRATE});return}this.inputBuffer>=this.inputBufferCapacity||(this.transferTimer+=t,this.transferTimer>=A.STATIONS.ITEM_TRANSFER_INTERVAL&&(this.transferTimer=0,e.removeItem()&&(this.inputBuffer+=1,re.emit("dropped",{stationId:this.id,itemType:s}))))}}_updateSlots(t,e){if(!e)for(const n of this.slots)n.state==="EMPTY"&&this.inputBuffer>=this.inputPerBatch&&(this.inputBuffer-=this.inputPerBatch,n.state="PROCESSING",n.progress=0,n.itemMesh&&this.scene.remove(n.itemMesh),n.itemMesh=Wn(this.inputType===A.ITEMS.APRICOT?A.ITEMS.CRATE_FRESH:this.inputType),n.itemMesh.position.set(n.position.x,n.position.y,n.position.z),this.scene.add(n.itemMesh),re.emit("station_started",{stationId:this.id,inputType:this.inputType}));for(const n of this.slots)n.state==="PROCESSING"&&(e||(n.progress+=t,n.progress>=n.maxTime&&(n.state="READY",n.itemMesh&&this.scene.remove(n.itemMesh),n.itemMesh=Wn(this.outputType),n.itemMesh.position.set(n.position.x,n.position.y,n.position.z),this.scene.add(n.itemMesh),re.emit("crate_made",{stationId:this.id,outputType:this.outputType}),re.emit("station_ready",{stationId:this.id,slotIndex:n.index,position:{x:n.position.x,y:n.position.y,z:n.position.z}}))))}_updateSmoke(t,e){if(!e&&this.slots.some(s=>s.state==="PROCESSING")&&(this.smokeSpawnTimer+=t,this.smokeSpawnTimer>=.22)){this.smokeSpawnTimer=0;const s=this.smokePool.find(r=>!r.userData.active);s&&(s.visible=!0,s.userData.active=!0,s.userData.life=0,s.userData.maxLife=2+Math.random()*.4,s.position.set(this.smokeOrigin.x+(Math.random()-.5)*.25,this.smokeOrigin.y,this.smokeOrigin.z+(Math.random()-.5)*.25),s.userData.vx=(Math.random()-.5)*.2,s.userData.vy=.65+Math.random()*.25,s.userData.vz=(Math.random()-.5)*.2,s.scale.setScalar(.7))}for(const s of this.smokePool)if(s.userData.active){s.userData.life+=t;const r=s.userData.life/s.userData.maxLife;r>=1?(s.userData.active=!1,s.visible=!1):(s.position.x+=s.userData.vx*t,s.position.y+=s.userData.vy*t,s.position.z+=s.userData.vz*t,s.scale.setScalar(.7+r*1.5))}}_handleOutputCollection(t,e,n){if(!n)return;const s=this.slots.find(o=>o.state==="READY");if(!s)return;const r=e.getCurrentType();if(r!==null&&r!==this.outputType){this.onWarning(A.STRINGS.WARNING_EMPTY_HANDS),re.emit("warning",{message:A.STRINGS.WARNING_EMPTY_HANDS});return}if(e.isFull())return;e.addItem(this.outputType)&&(s.itemMesh&&(this.scene.remove(s.itemMesh),s.itemMesh=null),s.state="EMPTY",s.progress=0,re.emit("crate_picked",{stationId:this.id,type:this.outputType}))}getSlots(){return this.slots}getInputBuffer(){return this.inputBuffer}getProcessingCount(){return this.slots.filter(t=>t.state==="PROCESSING").length}getReadyCount(){return this.slots.filter(t=>t.state==="READY").length}hasReadyCrate(){return this.slots.some(t=>t.state==="READY")}getTotalItems(){return this.inputBuffer+this.slots.filter(t=>t.state!=="EMPTY").length}setSlotCount(t){if(!(t<=0||t===this.slotCount)){for(this.slotCount=t,this.inputBufferCapacity=this.slotCount*this.inputPerBatch+2;this.slots.length<this.slotCount;){const e=this.slots.length,n=this.slotPositions[0]||{x:this.inputZone.x,y:.25,z:0},s=(e%3-1)*.45,r=Math.floor(e/3)*.4,a={x:n.x+r,y:n.y,z:(n.z||0)+s};this.slots.push({index:e,state:"EMPTY",progress:0,maxTime:this.processTime,position:a,itemMesh:null})}if(this.slots.length>this.slotCount){for(let e=this.slotCount;e<this.slots.length;e++)this.slots[e].itemMesh&&this.scene.remove(this.slots[e].itemMesh);this.slots.length=this.slotCount}if(this.statusPanel&&this.scene.remove(this.statusPanel),this.statusPanel=To(this.slotCount),this.statusPanel.position.set(this.panelPos.x,this.panelPos.y,this.panelPos.z),this.scene.add(this.statusPanel),this.floatingBadge){const e=.22+this.slotCount*.16;this.baseBadgeY=this.panelPos.y+e/2+.45,this.floatingBadge.position.y=this.baseBadgeY}}}}class Gp{constructor(){this.money=0,this.totalCratesSold=0,this.totalTrucksServed=0,this.salesHistory=[],this.tutorialDone=!1,this.soundEnabled=!0,this.upgrades={},this.resetUpgrades(),this.upgradeCallbacks=[],this.load()}resetUpgrades(){A.UPGRADES&&Object.keys(A.UPGRADES).forEach(t=>{const e=A.UPGRADES[t];this.upgrades[e.ID]=0})}getMoney(){return this.money}addMoney(t,e=0){const n=Math.max(0,Math.round(t));this.money+=n,this.totalCratesSold+=e,this.totalTrucksServed+=1,this.salesHistory.push({timestamp:performance.now(),amount:n,crates:e});const s=performance.now()-3e5;this.salesHistory=this.salesHistory.filter(r=>r.timestamp>=s),this.save()}getMoneyPerMinute(){const t=performance.now()-6e4;return this.salesHistory.filter(e=>e.timestamp>=t).reduce((e,n)=>e+n.amount,0)}getAveragePerTruck(){if(this.totalTrucksServed===0)return 0;const t=this.salesHistory.reduce((e,n)=>e+n.amount,0);return Math.round(t/this.totalTrucksServed)}getTotalCratesSold(){return this.totalCratesSold}getTotalTrucksServed(){return this.totalTrucksServed}getUpgradeDefinition(t){return A.UPGRADES&&Object.values(A.UPGRADES).find(e=>e.ID===t)||null}getUpgradeLevel(t){return this.upgrades[t]||0}getTotalUpgradesCount(){return Object.values(this.upgrades).reduce((t,e)=>t+(e||0),0)}getUpgradeCost(t){const e=this.getUpgradeDefinition(t);if(!e)return null;const n=this.getUpgradeLevel(t);return n>=e.MAX_LEVEL?null:Math.round(e.BASE_COST*Math.pow(e.COST_MULTIPLIER,n))}canAffordUpgrade(t){const e=this.getUpgradeCost(t);return e!==null&&this.money>=e}isUpgradeMaxed(t){const e=this.getUpgradeDefinition(t);return e?this.getUpgradeLevel(t)>=e.MAX_LEVEL:!1}purchaseUpgrade(t){if(!this.getUpgradeDefinition(t))return!1;const n=this.getUpgradeCost(t);return n===null||this.money<n?!1:(this.money-=n,this.upgrades[t]=(this.upgrades[t]||0)+1,this.save(),this._notifyUpgradeChanged(t,this.upgrades[t]),re.emit("upgrade_bought",{upgradeId:t,level:this.upgrades[t]}),!0)}isTutorialDone(){return this.tutorialDone}setTutorialDone(t=!0){this.tutorialDone=t,this.save()}isSoundEnabled(){return this.soundEnabled}setSoundEnabled(t=!0){this.soundEnabled=t,this.save()}onUpgradeChanged(t){this.upgradeCallbacks.push(t)}_notifyUpgradeChanged(t,e){this.upgradeCallbacks.forEach(n=>{try{n(t,e)}catch(s){console.error("Error in upgrade callback:",s)}})}getStat(t){switch(t){case"walkSpeed":{const n=(this.upgrades.walkSpeed||0)*A.UPGRADES.WALK_SPEED.MULTIPLIER_PER_LEVEL;return A.PLAYER.SPEED*(1+n)}case"carryCapacityApricot":{const n=(this.upgrades.carryCapacity||0)*A.UPGRADES.CARRY_CAPACITY.APRICOT_BONUS_PER_LEVEL;return A.CAPACITIES.apricot+n}case"carryCapacityCrate":{const n=(this.upgrades.carryCapacity||0)*A.UPGRADES.CARRY_CAPACITY.CRATE_BONUS_PER_LEVEL;return A.CAPACITIES.crate_fresh+n}case"tentSlots":{const n=(this.upgrades.tentCapacity||0)*A.UPGRADES.TENT_CAPACITY.BONUS_PER_LEVEL;return A.STATIONS.SULFUR_TENT.SLOT_COUNT+n}case"standStillTime":{const n=(this.upgrades.harvestSpeed||0)*A.UPGRADES.HARVEST_SPEED.REDUCTION_PER_LEVEL;return A.HARVEST.STAND_STILL_TIME*Math.max(.1,1-n)}default:return 0}}maxAllUpgrades(){A.UPGRADES&&Object.values(A.UPGRADES).forEach(t=>{this.upgrades[t.ID]=t.MAX_LEVEL}),this.save(),this._notifyUpgradeChanged("*",5)}save(){if(!this._saveDisabled)try{const t={version:A.STORAGE.VERSION,money:this.money,upgrades:this.upgrades,tutorialDone:this.tutorialDone,soundEnabled:this.soundEnabled,savedAt:Date.now()};localStorage.setItem(A.STORAGE.KEY,JSON.stringify(t))}catch(t){console.warn("Failed to save game state to localStorage:",t)}}load(){try{const t=localStorage.getItem(A.STORAGE.KEY);if(!t)return!1;const e=JSON.parse(t);if(!e||typeof e!="object")return this._handleCorruptSave("Save is not an object"),!1;if(e.version!==1&&e.version!==2)return this._handleCorruptSave(`Version mismatch: expected 1 or 2, got ${e.version}`),!1;if(typeof e.money!="number"||isNaN(e.money)||e.money<0)return this._handleCorruptSave("Invalid money value"),!1;if(!e.upgrades||typeof e.upgrades!="object")return this._handleCorruptSave("Invalid upgrades object"),!1;const n={};for(const s of Object.keys(A.UPGRADES)){const r=A.UPGRADES[s],a=e.upgrades[r.ID];if(typeof a!="number"||isNaN(a)||a<0||a>r.MAX_LEVEL)return this._handleCorruptSave(`Invalid level for upgrade ${r.ID}: ${a}`),!1;n[r.ID]=Math.floor(a)}return this.money=Math.round(e.money),this.upgrades=n,this.tutorialDone=typeof e.tutorialDone=="boolean"?e.tutorialDone:!1,this.soundEnabled=typeof e.soundEnabled=="boolean"?e.soundEnabled:!0,e.version===1&&(console.log("[Save System] Successfully migrated save from version 1 to 2."),this.save()),!0}catch(t){return this._handleCorruptSave(`JSON parse or read error: ${t.message}`),!1}}_handleCorruptSave(t){console.warn(`[Save System] Resilient fallback: ${t}. Starting fresh.`),this.money=0,this.resetUpgrades(),this.tutorialDone=!1,this.soundEnabled=!0;try{localStorage.removeItem(A.STORAGE.KEY)}catch{}}resetSave(){try{localStorage.removeItem(A.STORAGE.KEY)}catch{}this.money=0,this.totalCratesSold=0,this.totalTrucksServed=0,this.salesHistory=[],this.tutorialDone=!1,this.soundEnabled=!0,this.resetUpgrades(),this._notifyUpgradeChanged("*",0)}}const se=new Gp,ir=new O;class Hp{constructor(t){this.scene=t.scene,this.onWarning=t.onWarning||(()=>{});const e=A.PROPS.SALES_STAND;this.pos=e.POS,this.capacity=A.ECONOMY.SALES_BUFFER_CAPACITY,this.cratesCount=0,this.transferTimer=0,this.group=Np(),this.group.position.set(this.pos.x,0,this.pos.z),this.scene.add(this.group),this.crateStackAnchor=this.group.userData.crateStackAnchor,this.visualCrates=[],this.inputZone={x:e.INPUT_ZONE.x,z:e.INPUT_ZONE.z,radius:e.INPUT_ZONE.radius},this.inputMarker=Yr("input",this.inputZone.radius),this.inputMarker.position.set(this.inputZone.x,.01,this.inputZone.z),this.scene.add(this.inputMarker),this.billboard=Op(),this.billboard.position.set(e.PANEL_POS.x,e.PANEL_POS.y,e.PANEL_POS.z),this.scene.add(this.billboard);const n=A.PROPS.MERCHANT_TRUCK;this.truckConfig=n,this.truckState="WAITING",this.truckTimer=A.ECONOMY.MERCHANT_INTERVAL,this.truckStateTimer=0,this.truckGroup=null,this.truckSnapshot=0,this.flyingCrates=[],this.floatingNotices=[]}update(t,e,n){n&&this.billboard&&this.billboard.quaternion.copy(n.quaternion),this._handlePlayerDeposit(t,e),this._updateMerchantTruck(t),this._updateFlyingCrates(t),this._updateFloatingNotices(t,n);const s=this.truckState==="ARRIVING"||this.truckState==="STOPPED"||this.truckState==="LOADING"||this.truckState==="POST_LOAD";this.billboard&&this.billboard.userData.update&&this.billboard.userData.update(this.truckTimer,this.cratesCount,this.capacity,s)}_handlePlayerDeposit(t,e){const n=e.getPosition(),r=Math.hypot(n.x-this.inputZone.x,n.z-this.inputZone.z)<=this.inputZone.radius;if(this.inputMarker&&this.inputMarker.scale.setScalar(r?1.06:1),!r)return;const a=e.getCount(),o=e.getCurrentType();if(!(a<=0||o===null)){if(o!==A.ITEMS.CRATE_DRY2){this.onWarning(A.STRINGS.WARNING_WRONG_CRATE),re.emit("warning",{message:A.STRINGS.WARNING_WRONG_CRATE});return}this.cratesCount>=this.capacity||(this.transferTimer+=t,this.transferTimer>=A.STATIONS.ITEM_TRANSFER_INTERVAL&&(this.transferTimer=0,e.removeItem()&&(this.cratesCount+=1,this._addVisualCrate(),re.emit("dropped",{stationId:"sales",itemType:o}))))}}_addVisualCrate(){const t=Wn(A.ITEMS.CRATE_DRY2);t.scale.setScalar(.72);const e=this.visualCrates.length,n=6,s=Math.floor(e/n),r=e%n,a=r%3,o=Math.floor(r/3),l=(a-1)*.52,c=s*.28,u=(o-.5)*.44;t.position.set(l,c,u),this.crateStackAnchor.add(t),this.visualCrates.push(t)}_removeVisualCrate(){if(this.visualCrates.length===0)return null;const t=this.visualCrates.pop();return t&&t.parent&&t.parent.remove(t),t}_updateMerchantTruck(t){const e=this.truckConfig;switch(this.truckState){case"WAITING":this.truckTimer-=t,this.truckTimer<=0&&this._spawnTruck();break;case"ARRIVING":this.truckGroup&&(this.truckGroup.position.z+=e.SPEED*t,this.truckGroup.position.z>=e.STOP_Z&&(this.truckGroup.position.z=e.STOP_Z,this.truckState="STOPPED",this.truckStateTimer=0,this._handleTruckArrival()));break;case"STOPPED":this.truckStateTimer+=t,this.truckSnapshot===0&&this.truckStateTimer>=e.EMPTY_WAIT&&(this.truckState="DEPARTING");break;case"LOADING":break;case"POST_LOAD":this.truckStateTimer+=t,this.truckStateTimer>=e.DEPART_DELAY&&(this.truckState="DEPARTING");break;case"DEPARTING":this.truckGroup&&(this.truckGroup.position.z+=e.SPEED*t,this.truckGroup.position.z>=e.END_Z&&this._despawnTruck());break}}_spawnTruck(){const t=this.truckConfig;this.truckGroup=Dp(),this.truckGroup.position.set(t.ROAD_X,0,t.START_Z),this.scene.add(this.truckGroup),this.truckState="ARRIVING"}_handleTruckArrival(){this.truckSnapshot=this.cratesCount,this.truckSnapshot===0?this._spawnNotice(A.STRINGS.NO_GOODS,"#ff4757"):(this.truckState="LOADING",this.truckStateTimer=0,this.cratesCount-=this.truckSnapshot,this._launchLoadingAnimation(this.truckSnapshot))}_launchLoadingAnimation(t){const e=this.truckGroup.userData.crateBedAnchor,n=new O;e.getWorldPosition(n);for(let s=0;s<t;s++){this._removeVisualCrate();const r=Wn(A.ITEMS.CRATE_DRY2);r.scale.setScalar(.72);const a=new O(this.pos.x,.4,this.pos.z+(Math.random()-.5)*.4);r.position.copy(a),this.scene.add(r),this.flyingCrates.push({mesh:r,startPos:a.clone(),progress:0,delay:s*.12,duration:this.truckConfig.CRATE_FLY_DURATION,arcHeight:1.8})}}_updateFlyingCrates(t){if(this.flyingCrates.length===0)return;const e=this.truckGroup?this.truckGroup.userData.crateBedAnchor:null;e?e.getWorldPosition(ir):ir.set(0,0,0);for(let n=this.flyingCrates.length-1;n>=0;n--){const s=this.flyingCrates[n];if(s.delay>0){s.delay-=t;continue}if(s.progress+=t/s.duration,s.progress>=1){if(this.scene.remove(s.mesh),e){const r=Wn(A.ITEMS.CRATE_DRY2);r.scale.setScalar(.65);const a=e.children.length;r.position.set((a%3-1)*.44,Math.floor(a/6)*.24,(Math.floor(a/3)%2-.5)*.55),e.add(r)}this.flyingCrates.splice(n,1),this.flyingCrates.length===0&&this.truckState==="LOADING"&&this._finalizeLoading()}else{const r=s.progress;s.mesh.position.lerpVectors(s.startPos,ir,r);const a=Math.sin(r*Math.PI)*s.arcHeight;s.mesh.position.y+=a,s.mesh.rotation.y+=t*6}}}_finalizeLoading(){const t=this.truckSnapshot*A.ECONOMY.CRATE_PRICE;se.addMoney(t,this.truckSnapshot),re.emit("sold",{earnings:t,crateCount:this.truckSnapshot,pos:{x:this.truckConfig.ROAD_X,y:1.5,z:this.truckConfig.STOP_Z}}),this._spawnNotice(`+${t} 💰`,"#2ed573"),this.truckState="POST_LOAD",this.truckStateTimer=0}_spawnNotice(t,e){if(window.__GAME__&&window.__GAME__.getTimeScale&&window.__GAME__.getTimeScale()>=3&&(this.noticeSkipCounter=(this.noticeSkipCounter||0)+1,this.noticeSkipCounter%2!==0))return;const s=Bp(t,e),r=this.truckGroup?this.truckGroup.position.z:0;s.position.set(this.truckConfig.ROAD_X,2.8,r),this.scene.add(s),this.floatingNotices.push(s)}_updateFloatingNotices(t,e){for(let n=this.floatingNotices.length-1;n>=0;n--){const s=this.floatingNotices[n];s.userData.life+=t,e&&s.quaternion.copy(e.quaternion),s.position.y+=s.userData.vy*t,s.userData.life>=s.userData.maxLife&&(this.scene.remove(s),s.material&&(s.material.map&&s.material.map.dispose(),s.material.dispose()),this.floatingNotices.splice(n,1))}}_despawnTruck(){this.truckGroup&&(this.scene.remove(this.truckGroup),this.truckGroup=null),this.truckSnapshot=0,this.truckTimer=A.ECONOMY.MERCHANT_INTERVAL,this.truckState="WAITING"}callTruckImmediately(){this.truckState==="WAITING"&&(this.truckTimer=0,this._spawnTruck())}getBufferCount(){return this.cratesCount}getCratesCount(){return this.cratesCount}}const xo=new O;function Mo(){const i=window.devicePixelRatio||1,e=navigator.deviceMemory&&navigator.deviceMemory<=4||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4?1:1.5;return Math.min(i,e)}class zp{constructor(t,e=()=>{}){this.container=t,this.onWarning=e,this.scene=new Ic,this.scene.background=new qt(A.COLORS.BACKGROUND);const n=t.clientWidth/t.clientHeight,s=A.CAMERA.FRUSTUM_SIZE;this.camera=new da(-s*n/2,s*n/2,s/2,-s/2,A.CAMERA.NEAR,A.CAMERA.FAR);const r=A.CAMERA.DISTANCE,a=r*Math.SQRT1_2,o=r*Math.SQRT1_2,l=r*Math.tan(A.CAMERA.ANGLE_X);this.cameraOffset=new O(a,l,o),this.cameraTarget=new O(0,0,0);const u=!(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||window.innerWidth<768);this.renderer=new Ap({antialias:u,alpha:!1}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Mo()),this.renderer.shadowMap.enabled=!1,t.appendChild(this.renderer.domElement),this._initLighting(),this._initGround(),this.trees=[],this._initTrees(),this._initStations(),this.flyingFruits=[],window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>{setTimeout(()=>this.onResize(),150)})}_initLighting(){const t=new kc(A.LIGHT.AMBIENT_COLOR,A.LIGHT.AMBIENT_INTENSITY);this.scene.add(t);const e=new Bc(A.LIGHT.DIRECTIONAL_COLOR,A.LIGHT.DIRECTIONAL_INTENSITY);e.position.set(A.LIGHT.DIRECTIONAL_POS.x,A.LIGHT.DIRECTIONAL_POS.y,A.LIGHT.DIRECTIONAL_POS.z),e.castShadow=!1,this.scene.add(e)}_initGround(){const t=A.WORLD.SIZE,e=A.WORLD.TILE_SIZE,n=Math.floor(t/e),s=-29+e/2,r=new ee;r.name="GroundTiles";for(let h=0;h<n;h++)for(let R=0;R<n;R++){const M=(h+R)%2===1,T=Lp(M,e);T.position.set(s+h*e,0,s+R*e),r.add(T)}this.scene.add(r);const a=A.WORLD.BOUNDS,o=a.MAX_X-a.MIN_X,l=a.MAX_Z-a.MIN_Z,c=A.WORLD.BORDER_HEIGHT,u=A.WORLD.BORDER_THICKNESS,d=os(o+u*2,c,u);d.position.set(0,0,a.MIN_Z-u/2);const f=os(o+u*2,c,u);f.position.set(0,0,a.MAX_Z+u/2);const m=os(u,c,l);m.position.set(a.MIN_X-u/2,0,0);const _=os(u,c,l);_.position.set(a.MAX_X+u/2,0,0),this.scene.add(d,f,m,_);const S=A.PROPS.ROAD,p=Up(S.WIDTH,S.LENGTH);p.position.set(S.X,0,0),this.scene.add(p)}_initTrees(){A.TREES.POSITIONS.forEach((t,e)=>{const n=Ip();n.position.set(t.x,0,t.y||t.z),this.scene.add(n),this.trees.push({id:e,group:n,crownGroup:n.userData.crownGroup,fruitMeshes:n.userData.fruitMeshes,position:n.position,state:"READY",standTimer:0,shakeTimer:0,cooldownTimer:0,respawnScale:1})})}_initStations(){const t=Rp();t.position.set(A.PROPS.CRATE_STATION.POS.x,0,A.PROPS.CRATE_STATION.POS.z),this.crateStation=new ls({id:A.STATIONS.CRATE_STATION.ID,name:A.STATIONS.CRATE_STATION.NAME,inputType:A.STATIONS.CRATE_STATION.INPUT_TYPE,outputType:A.STATIONS.CRATE_STATION.OUTPUT_TYPE,inputPerBatch:A.STATIONS.CRATE_STATION.INPUT_PER_BATCH,processTime:A.STATIONS.CRATE_STATION.PROCESS_TIME,slotCount:A.STATIONS.CRATE_STATION.SLOT_COUNT,inputBufferCapacity:A.STATIONS.CRATE_STATION.INPUT_BUFFER_CAPACITY,outputLimit:A.STATIONS.CRATE_STATION.OUTPUT_LIMIT,inputZone:A.PROPS.CRATE_STATION.INPUT_ZONE,outputZone:A.PROPS.CRATE_STATION.OUTPUT_ZONE,slotPositions:A.PROPS.CRATE_STATION.SLOT_POSITIONS,panelPos:A.PROPS.CRATE_STATION.PANEL_POS,stationGroup:t,floatingIconType:A.ITEMS.APRICOT,scene:this.scene,onWarning:this.onWarning});const e=Eo();e.position.set(A.PROPS.DRYING_RACK_1.POS.x,0,A.PROPS.DRYING_RACK_1.POS.z),this.dryingRack1=new ls({id:A.STATIONS.DRYING_RACK_1.ID,name:A.STATIONS.DRYING_RACK_1.NAME,inputType:A.STATIONS.DRYING_RACK_1.INPUT_TYPE,outputType:A.STATIONS.DRYING_RACK_1.OUTPUT_TYPE,inputPerBatch:A.STATIONS.DRYING_RACK_1.INPUT_PER_BATCH,processTime:A.STATIONS.DRYING_RACK_1.PROCESS_TIME,slotCount:A.STATIONS.DRYING_RACK_1.SLOT_COUNT,inputBufferCapacity:A.STATIONS.DRYING_RACK_1.INPUT_BUFFER_CAPACITY,outputLimit:A.STATIONS.DRYING_RACK_1.OUTPUT_LIMIT,inputZone:A.PROPS.DRYING_RACK_1.INPUT_ZONE,outputZone:A.PROPS.DRYING_RACK_1.OUTPUT_ZONE,slotPositions:A.PROPS.DRYING_RACK_1.SLOT_POSITIONS,panelPos:A.PROPS.DRYING_RACK_1.PANEL_POS,stationGroup:e,floatingIconType:A.ITEMS.CRATE_FRESH,scene:this.scene,onWarning:this.onWarning});const n=Cp();n.position.set(A.PROPS.SULFUR_TENT.POS.x,0,A.PROPS.SULFUR_TENT.POS.z);const s=se?se.getStat("tentSlots"):A.STATIONS.SULFUR_TENT.SLOT_COUNT;this.sulfurTent=new ls({id:A.STATIONS.SULFUR_TENT.ID,name:A.STATIONS.SULFUR_TENT.NAME,inputType:A.STATIONS.SULFUR_TENT.INPUT_TYPE,outputType:A.STATIONS.SULFUR_TENT.OUTPUT_TYPE,inputPerBatch:A.STATIONS.SULFUR_TENT.INPUT_PER_BATCH,processTime:A.STATIONS.SULFUR_TENT.PROCESS_TIME,slotCount:s,inputBufferCapacity:s*A.STATIONS.SULFUR_TENT.INPUT_PER_BATCH+2,outputLimit:A.STATIONS.SULFUR_TENT.OUTPUT_LIMIT,inputZone:A.PROPS.SULFUR_TENT.INPUT_ZONE,outputZone:A.PROPS.SULFUR_TENT.OUTPUT_ZONE,slotPositions:A.PROPS.SULFUR_TENT.SLOT_POSITIONS,panelPos:A.PROPS.SULFUR_TENT.PANEL_POS,stationGroup:n,hasSmoke:A.STATIONS.SULFUR_TENT.HAS_SMOKE,smokeOrigin:A.PROPS.SULFUR_TENT.SMOKE_ORIGIN,floatingIconType:A.ITEMS.CRATE_DRY1,scene:this.scene,onWarning:this.onWarning}),se&&se.onUpgradeChanged(a=>{(a==="tentCapacity"||a==="*")&&this.sulfurTent.setSlotCount(se.getStat("tentSlots"))});const r=Eo();r.position.set(A.PROPS.DRYING_RACK_2.POS.x,0,A.PROPS.DRYING_RACK_2.POS.z),this.dryingRack2=new ls({id:A.STATIONS.DRYING_RACK_2.ID,name:A.STATIONS.DRYING_RACK_2.NAME,inputType:A.STATIONS.DRYING_RACK_2.INPUT_TYPE,outputType:A.STATIONS.DRYING_RACK_2.OUTPUT_TYPE,inputPerBatch:A.STATIONS.DRYING_RACK_2.INPUT_PER_BATCH,processTime:A.STATIONS.DRYING_RACK_2.PROCESS_TIME,slotCount:A.STATIONS.DRYING_RACK_2.SLOT_COUNT,inputBufferCapacity:A.STATIONS.DRYING_RACK_2.INPUT_BUFFER_CAPACITY,outputLimit:A.STATIONS.DRYING_RACK_2.OUTPUT_LIMIT,inputZone:A.PROPS.DRYING_RACK_2.INPUT_ZONE,outputZone:A.PROPS.DRYING_RACK_2.OUTPUT_ZONE,slotPositions:A.PROPS.DRYING_RACK_2.SLOT_POSITIONS,panelPos:A.PROPS.DRYING_RACK_2.PANEL_POS,stationGroup:r,floatingIconType:A.ITEMS.CRATE_SULFUR,scene:this.scene,onWarning:this.onWarning}),this.salesStand=new Hp({scene:this.scene,onWarning:this.onWarning})}update(t,e,n){const s=e.getPosition(),r=n.hasInput();this.trees.forEach(a=>{const l=s.distanceTo(a.position)<=A.HARVEST.TRIGGER_DISTANCE;switch(a.state){case"READY":if(l){const u=e.getCurrentType();if(u!==null&&u!==A.ITEMS.APRICOT){r||this.onWarning(A.STRINGS.WARNING_EMPTY_HANDS),a.standTimer=0,a.crownGroup.rotation.z=0;break}if(!e.isFull())if(r)a.standTimer=0,a.crownGroup.rotation.z=0;else{a.standTimer+=t;const d=se?se.getStat("standStillTime"):A.HARVEST.STAND_STILL_TIME,f=a.standTimer/d;f>.4&&(a.crownGroup.rotation.z=Math.sin(a.standTimer*20)*(.02*f)),a.standTimer>=d&&(a.state="SHAKING",a.shakeTimer=0,a.standTimer=0)}}else a.standTimer=0,a.crownGroup.rotation.z=0;break;case"SHAKING":a.shakeTimer+=t;const c=Math.sin(a.shakeTimer*A.HARVEST.SHAKE_FREQUENCY);a.crownGroup.rotation.z=c*A.HARVEST.SHAKE_INTENSITY,a.crownGroup.rotation.x=Math.cos(a.shakeTimer*A.HARVEST.SHAKE_FREQUENCY)*(A.HARVEST.SHAKE_INTENSITY*.6),a.shakeTimer>=A.HARVEST.SHAKE_DURATION&&(a.crownGroup.rotation.set(0,0,0),a.state="COOLDOWN",a.cooldownTimer=A.HARVEST.RESPAWN_COOLDOWN,a.fruitMeshes.forEach(u=>u.visible=!1),this._spawnHarvestDrop(a,e));break;case"COOLDOWN":a.cooldownTimer-=t,a.cooldownTimer<=0&&(a.state="READY",a.standTimer=0,a.fruitMeshes.forEach(u=>{u.visible=!0,u.scale.set(.01,.01,.01)}),a.respawnScale=.01);break}a.state==="READY"&&a.respawnScale<1&&(a.respawnScale=Math.min(1,a.respawnScale+t*3.5),a.fruitMeshes.forEach(c=>{c.scale.setScalar(a.respawnScale)}))}),this._updateFlyingFruits(t,e),this.crateStation.update(t,e,this.camera),this.dryingRack1.update(t,e,this.camera),this.sulfurTent.update(t,e,this.camera),this.dryingRack2.update(t,e,this.camera),this.salesStand.update(t,e,this.camera),this._updateCamera(t,s)}_spawnHarvestDrop(t,e){const n=A.TREES.FRUITS_PER_TREE;for(let s=0;s<n;s++){const r=Es(!1);this.scene.add(r);const a=t.fruitMeshes[s],o=new O;a.getWorldPosition(o),r.position.copy(o),this.flyingFruits.push({mesh:r,startPos:o.clone(),progress:0,delay:s*.08,duration:A.HARVEST.DROP_FLIGHT_DURATION,arcHeight:A.HARVEST.DROP_ARC_HEIGHT})}}_updateFlyingFruits(t,e){for(let n=this.flyingFruits.length-1;n>=0;n--){const s=this.flyingFruits[n];if(s.delay>0){s.delay-=t;continue}if(s.progress+=t/s.duration,e.getStackWorldPosition(xo),s.progress>=1)this.scene.remove(s.mesh),e.addApricot(),re.emit("apricot_collected",{count:e.getCount()}),this.flyingFruits.splice(n,1);else{const r=s.progress;s.mesh.position.lerpVectors(s.startPos,xo,r);const a=Math.sin(r*Math.PI)*s.arcHeight;s.mesh.position.y+=a,s.mesh.rotation.x+=t*8,s.mesh.rotation.y+=t*6}}}_updateCamera(t,e){this.cameraTarget.lerp(e,A.CAMERA.FOLLOW_LERP),this.camera.position.copy(this.cameraTarget).add(this.cameraOffset),this.camera.lookAt(this.cameraTarget.x,this.cameraTarget.y+.6,this.cameraTarget.z)}onResize(){const t=this.container.clientWidth,e=this.container.clientHeight;if(t===0||e===0)return;const n=t/e,s=A.CAMERA.FRUSTUM_SIZE;let r,a;n>=1?(a=s/2,r=a*n):(r=Math.max(12,s*n)/2,a=r/n),this.camera.left=-r,this.camera.right=r,this.camera.top=a,this.camera.bottom=-a,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Mo()),this.renderer.setSize(t,e)}render(){this.renderer.render(this.scene,this.camera)}}const Vp=new O;class Wp{constructor(t){this.scene=t,this.group=Pp(),this.scene.add(this.group),this.currentType=null,this.stack=[],this.speed=A.PLAYER.SPEED,this.fruitAnchor=this.group.userData.fruitAnchor,this.crateAnchor=this.group.userData.crateAnchor,this.leftFoot=this.group.userData.leftFoot,this.rightFoot=this.group.userData.rightFoot,this.velocity=new O(0,0,0),this.walkCycle=0,this.targetRotationY=0,this.group.position.set(0,0,0)}update(t,e){if(e.lengthSq()>.001){const s=se?se.getStat("walkSpeed"):this.speed,r=e.x*s*t,a=e.y*s*t;this.group.position.x+=r,this.group.position.z+=a;const o=A.WORLD.BOUNDS;this.group.position.x=Math.max(o.MIN_X,Math.min(o.MAX_X,this.group.position.x)),this.group.position.z=Math.max(o.MIN_Z,Math.min(o.MAX_Z,this.group.position.z)),this.targetRotationY=Math.atan2(e.x,e.y);let l=this.targetRotationY-this.group.rotation.y;for(;l<-Math.PI;)l+=Math.PI*2;for(;l>Math.PI;)l-=Math.PI*2;this.group.rotation.y+=l*A.PLAYER.ROTATION_LERP,this.walkCycle+=t*14;const c=Math.sin(this.walkCycle)*.22;this.leftFoot&&(this.leftFoot.position.z=c),this.rightFoot&&(this.rightFoot.position.z=-c),this.group.position.y=Math.abs(Math.sin(this.walkCycle))*.05;const u=Math.min(this.stack.length/5,1),d=Math.sin(this.walkCycle)*.08*(.3+.7*u),f=-.06;this.fruitAnchor&&(this.fruitAnchor.rotation.z=d,this.fruitAnchor.rotation.x=f),this.crateAnchor&&(this.crateAnchor.rotation.z=d*.7,this.crateAnchor.rotation.x=f)}else this.leftFoot&&(this.leftFoot.position.z=0),this.rightFoot&&(this.rightFoot.position.z=0),this.group.position.y=0,this.fruitAnchor&&(this.fruitAnchor.rotation.z*=.8,this.fruitAnchor.rotation.x*=.8),this.crateAnchor&&(this.crateAnchor.rotation.z*=.8,this.crateAnchor.rotation.x*=.8)}addItem(t){if(this.currentType!==null&&this.currentType!==t)return!1;const e=this.getCapacity(t);if(this.stack.length>=e)return!1;this.currentType=t;const n=this.stack.length;if(t===A.ITEMS.APRICOT){const s=Es(!1),r=A.PLAYER.STACK;s.scale.setScalar(r.SCALE);const a=r.COLS*r.ROWS,o=Math.floor(n/a),l=n%a,c=l%r.COLS,u=Math.floor(l/r.COLS),d=(c-(r.COLS-1)/2)*r.SPACING_X,f=o*r.SPACING_Y,m=(u-(r.ROWS-1)/2)*r.SPACING_Z;s.position.set(d,f,m),this.fruitAnchor.add(s),this.stack.push(s)}else{const s=Wn(t),r=A.PLAYER.CRATE_STACK;s.scale.setScalar(r.SCALE);const a=n*r.SPACING_Y;s.position.set(0,a,0),this.crateAnchor.add(s),this.stack.push(s)}return!0}removeItem(){if(this.stack.length===0)return!1;const t=this.stack.pop();return t.parent&&t.parent.remove(t),this.stack.length===0&&(this.currentType=null),!0}discardAll(){const t=this.stack.length;if(t===0)return 0;for(;this.stack.length>0;){const e=this.stack.pop();e&&e.parent&&e.parent.remove(e)}return this.currentType=null,t}addApricot(){return this.addItem(A.ITEMS.APRICOT)}getCurrentType(){return this.currentType}getCount(){return this.stack.length}getCapacity(t=this.currentType){return t?se?t===A.ITEMS.APRICOT?se.getStat("carryCapacityApricot"):se.getStat("carryCapacityCrate"):A.CAPACITIES[t]||0:0}isFull(){return this.currentType?this.stack.length>=this.getCapacity():!1}getPosition(){return this.group.position}getStackWorldPosition(t=Vp){return this.fruitAnchor.getWorldPosition(t),t}}class Xp{constructor(){this.moveVector=new Bt(0,0),this.screenVector=new Bt(0,0),this.keys={up:!1,down:!1,left:!1,right:!1},this.isJoystickActive=!1,this.joystickPointerId=null,this.joystickOrigin={x:0,y:0},this.joystickDelta={x:0,y:0},this.zoneEl=document.getElementById("joystick-zone"),this.baseEl=document.getElementById("joystick-base"),this.knobEl=document.getElementById("joystick-knob"),this._initKeyboard(),this._initJoystick()}_initKeyboard(){window.addEventListener("keydown",t=>{t.code==="KeyQ"&&this.onDiscardCallback&&this.onDiscardCallback(),this._handleKey(t.code,!0)}),window.addEventListener("keyup",t=>{this._handleKey(t.code,!1)}),window.addEventListener("blur",()=>{this.keys.up=!1,this.keys.down=!1,this.keys.left=!1,this.keys.right=!1})}_handleKey(t,e){switch(t){case"KeyW":case"ArrowUp":this.keys.up=e;break;case"KeyS":case"ArrowDown":this.keys.down=e;break;case"KeyA":case"ArrowLeft":this.keys.left=e;break;case"KeyD":case"ArrowRight":this.keys.right=e;break}}_initJoystick(){if(!this.zoneEl||!this.baseEl||!this.knobEl)return;this.zoneEl.addEventListener("pointerdown",e=>{if(this.isJoystickActive)return;this.isJoystickActive=!0,this.joystickPointerId=e.pointerId,this.zoneEl.setPointerCapture(e.pointerId);const n=this.zoneEl.getBoundingClientRect(),s=e.clientX,r=e.clientY;this.joystickOrigin={x:s,y:r},this.baseEl.style.left=`${s-n.left}px`,this.baseEl.style.top=`${r-n.top}px`,this.baseEl.style.bottom="auto",this.baseEl.classList.add("active"),this._updateJoystick(s,r)}),this.zoneEl.addEventListener("pointermove",e=>{!this.isJoystickActive||e.pointerId!==this.joystickPointerId||this._updateJoystick(e.clientX,e.clientY)});const t=e=>{!this.isJoystickActive||e&&e.pointerId!==this.joystickPointerId||(this.isJoystickActive=!1,this.joystickPointerId=null,this.joystickDelta={x:0,y:0},this.knobEl.style.transform="translate(0px, 0px)",this.baseEl.classList.remove("active"),this.baseEl.style.left=`${A.JOYSTICK.DEFAULT_POS.x}px`,this.baseEl.style.bottom=`${A.JOYSTICK.DEFAULT_POS.y}px`,this.baseEl.style.top="auto")};this.zoneEl.addEventListener("pointerup",t),this.zoneEl.addEventListener("pointercancel",t)}_updateJoystick(t,e){const n=t-this.joystickOrigin.x,s=e-this.joystickOrigin.y,r=Math.hypot(n,s),a=A.JOYSTICK.MAX_RADIUS;let o=n,l=s;if(r>a){const u=Math.atan2(s,n);o=Math.cos(u)*a,l=Math.sin(u)*a}this.knobEl.style.transform=`translate(${o}px, ${l}px)`;const c=A.JOYSTICK.DEADZONE*a;r<c?this.joystickDelta={x:0,y:0}:this.joystickDelta={x:o/a,y:l/a}}update(){let t=0,e=0;this.keys.right&&(t+=1),this.keys.left&&(t-=1),this.keys.up&&(e+=1),this.keys.down&&(e-=1);const n=this.joystickDelta.x,s=-this.joystickDelta.y;let r=t+n,a=e+s;const o=Math.hypot(r,a);o>1&&(r/=o,a/=o),this.screenVector.set(r,a);const l=1/Math.SQRT2,c=(r-a)*l,u=(-r-a)*l;this.moveVector.set(c,u)}getMoveVector(){return this.moveVector}hasInput(){return this.moveVector.lengthSq()>.001}}const yo="kayisi_errlog",Yp=20;class Kp{constructor(){this.fpsProvider=()=>60,this.timeScaleProvider=()=>1,this.isContextLost=!1,this._initGlobalHandlers()}setProviders({getFPS:t,getTimeScale:e}){t&&(this.fpsProvider=t),e&&(this.timeScaleProvider=e)}_initGlobalHandlers(){window.addEventListener("error",t=>{this.log({type:"onerror",message:t.message||"Unknown window error",stack:t.error?t.error.stack:null,filename:t.filename,lineno:t.lineno,colno:t.colno})}),window.addEventListener("unhandledrejection",t=>{const e=t.reason;this.log({type:"unhandledrejection",message:e instanceof Error?e.message:String(e),stack:e instanceof Error?e.stack:null})})}attachWebGLContext(t){t&&(t.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.isContextLost=!0,this.log({type:"webglcontextlost",message:"WebGL context lost (GPU crash or memory pressure). Render loop halted."}),console.error("[WebGL] Context lost! Loop halted.")}),t.addEventListener("webglcontextrestored",()=>{this.log({type:"webglcontextrestored",message:"WebGL context restored. Reloading page..."}),console.warn("[WebGL] Context restored! Reloading application..."),window.location.reload()}))}log(t){try{const e={timestamp:new Date().toISOString(),appVersion:A.APP_VERSION||"1.0.0",userAgent:navigator.userAgent,lastFps:this.fpsProvider(),timeScale:this.timeScaleProvider(),...t},n=this.getLogs();for(n.push(e);n.length>Yp;)n.shift();localStorage.setItem(yo,JSON.stringify(n))}catch(e){console.error("[ErrorLogger] Failed to write error to localStorage:",e)}}getLogs(){try{const t=localStorage.getItem(yo);if(!t)return[];const e=JSON.parse(t);return Array.isArray(e)?e:[]}catch{return[]}}getLogCount(){return this.getLogs().length}async copyLogsToClipboard(){const t=this.getLogs(),e=JSON.stringify(t,null,2);if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}return t.length}}const hi=new Kp,qp=600*1e3;class un{constructor(t,e=""){this.name=t,this.unit=e,this.initial=null,this.current=0,this.samples=[]}record(t,e=performance.now()){this.current=t,this.initial===null&&(this.initial=t),this.samples.push({t:e,v:t});const n=e-qp;for(;this.samples.length>0&&this.samples[0].t<n;)this.samples.shift()}getPeak(){let t=this.initial!==null?this.initial:0;for(let e=0;e<this.samples.length;e++)this.samples[e].v>t&&(t=this.samples[e].v);return t}format(){if(this.initial===null&&this.current===0)return"N/A";const t=this.current.toLocaleString("tr-TR"),e=(this.initial!==null?this.initial:0).toLocaleString("tr-TR"),n=this.getPeak().toLocaleString("tr-TR"),s=this.unit?` ${this.unit}`:"";return`${t}${s} (Baş: ${e} | Tepe: ${n})`}}class Zp{constructor(){this.metrics={geometries:new un("Geometriler"),textures:new un("Dokular"),calls:new un("Draw Calls"),triangles:new un("Üçgenler"),sceneObjects:new un("Sahne Nesneleri"),domNodes:new un("DOM Elemanları"),particles:new un("Aktif Parçacıklar"),heap:new un("JS Heap","MB"),audioNodes:new un("WebAudio Düğümleri")},this.fps60Samples=[],this.audioState="başlatılmadı",this.audioTotalCreated=0,this.lastSampleTime=0,this.sampleInterval=500}update({renderer:t,scene:e,particles:n,audio:s,fps:r}){const a=performance.now();if(a-this.lastSampleTime<this.sampleInterval)return;if(this.lastSampleTime=a,t&&t.info&&t.info.memory&&(this.metrics.geometries.record(t.info.memory.geometries,a),this.metrics.textures.record(t.info.memory.textures,a)),t&&t.info&&t.info.render&&(this.metrics.calls.record(t.info.render.calls,a),this.metrics.triangles.record(t.info.render.triangles,a)),e){let l=0;e.traverse(()=>{l++}),this.metrics.sceneObjects.record(l,a)}const o=document.querySelectorAll("*").length;if(this.metrics.domNodes.record(o,a),n&&typeof n.getActiveCount=="function"&&this.metrics.particles.record(n.getActiveCount(),a),window.performance&&window.performance.memory&&typeof window.performance.memory.usedJSHeapSize=="number"){const l=Math.round(window.performance.memory.usedJSHeapSize/1048576*10)/10;this.metrics.heap.record(l,a)}if(s&&typeof s.getAudioStats=="function"){const l=s.getAudioStats();this.audioState=l.state,this.audioTotalCreated=l.totalNodes,this.metrics.audioNodes.record(l.activeNodes,a)}if(typeof r=="number"&&r>0){this.fps60Samples.push({t:a,fps:r});const l=a-6e4;for(;this.fps60Samples.length>0&&this.fps60Samples[0].t<l;)this.fps60Samples.shift()}}getFps60Stats(){if(this.fps60Samples.length===0)return{avg:60,min:60,formatted:"Hesaplanıyor..."};let t=0,e=999;for(let r=0;r<this.fps60Samples.length;r++){const a=this.fps60Samples[r].fps;t+=a,a<e&&(e=a)}const n=Math.round(t/this.fps60Samples.length),s=e===999?n:e;return{avg:n,min:s,formatted:`Ort: ${n} | En Düşük: ${s}`}}getAudioFormatted(){const t=this.metrics.audioNodes,e=t.current,n=t.getPeak();return`Aktif: ${e} (Tepe: ${n}) | Top: ${this.audioTotalCreated} [${this.audioState}]`}getSnapshot(){const t={};for(const[e,n]of Object.entries(this.metrics))t[e]={current:n.current,initial:n.initial,peak:n.getPeak(),formatted:n.format()};return t.fps60=this.getFps60Stats(),t.audioStats={formatted:this.getAudioFormatted()},t}}const jr=new Zp;class $p{constructor(){this.iconEl=document.getElementById("hud-item-icon"),this.labelEl=document.getElementById("hud-item-label"),this.counterEl=document.getElementById("apricot-counter"),this.fullBadgeEl=document.getElementById("full-capacity-badge"),this.toastEl=document.getElementById("warning-toast"),this.discardBtnEl=document.getElementById("discard-btn"),this.audioToggleBtn=document.getElementById("audio-toggle-btn"),this.moneyEl=document.getElementById("money-counter"),this.devPanelEl=document.getElementById("dev-panel"),this.devToggleBtn=document.getElementById("dev-panel-toggle"),this.devCloseBtn=document.getElementById("dev-panel-close"),this.devMoneyRateEl=document.getElementById("dev-money-rate"),this.devTotalCratesEl=document.getElementById("dev-total-crates"),this.devAvgTruckEl=document.getElementById("dev-avg-truck"),this.devSummonTruckBtn=document.getElementById("dev-summon-truck"),this.devResetSaveBtn=document.getElementById("dev-reset-save"),this.devFpsEl=document.getElementById("dev-fps"),this.devAppVersionEl=document.getElementById("dev-app-version"),this.devAppVersionEl&&A.APP_VERSION&&(this.devAppVersionEl.textContent=`v${A.APP_VERSION}`),this.devMetricGeometriesEl=document.getElementById("dev-metric-geometries"),this.devMetricTexturesEl=document.getElementById("dev-metric-textures"),this.devMetricCallsEl=document.getElementById("dev-metric-calls"),this.devMetricTrianglesEl=document.getElementById("dev-metric-triangles"),this.devMetricSceneObjectsEl=document.getElementById("dev-metric-scene-objects"),this.devMetricDomNodesEl=document.getElementById("dev-metric-dom-nodes"),this.devMetricParticlesEl=document.getElementById("dev-metric-particles"),this.devMetricHeapEl=document.getElementById("dev-metric-heap"),this.devMetricAudioEl=document.getElementById("dev-metric-audio"),this.devMetricFps60El=document.getElementById("dev-metric-fps60"),this.devCopyErrlogBtn=document.getElementById("dev-copy-errlog"),this.devErrCountEl=document.getElementById("dev-err-count"),this.devCopyErrlogBtn&&this.devCopyErrlogBtn.addEventListener("click",async()=>{const t=await hi.copyLogsToClipboard(),e=this.devCopyErrlogBtn.innerHTML;this.devCopyErrlogBtn.textContent=`✅ Kopyalandı! (${t} hata)`,setTimeout(()=>{this.devCopyErrlogBtn.innerHTML=e},2e3)}),this.pwaBannerEl=document.getElementById("pwa-install-banner"),this.pwaInstallBtn=document.getElementById("pwa-install-btn"),this.pwaDismissBtn=document.getElementById("pwa-dismiss-btn"),this.pwaBannerText=document.getElementById("pwa-banner-text"),this.deferredPrompt=null,this._initPwaInstallBanner(),this.devToolsSectionEl=document.getElementById("dev-tools-section"),this.devAdd1000Btn=document.getElementById("dev-add-1000"),this.devAdd10000Btn=document.getElementById("dev-add-10000"),this.devMaxUpgradesBtn=document.getElementById("dev-max-upgrades"),this.timescaleBtns=document.querySelectorAll(".timescale-btn"),this.upgradeBtnEl=document.getElementById("upgrade-btn"),this.upgradePanelEl=document.getElementById("upgrade-panel"),this.upgradePanelCloseEl=document.getElementById("upgrade-panel-close"),this.upgradeListEl=document.getElementById("upgrade-list"),this.upgradeModalBackdropEl=this.upgradePanelEl?this.upgradePanelEl.querySelector(".upgrade-modal-backdrop"):null,this.fullBadgeEl&&(this.fullBadgeEl.textContent=A.STRINGS.FULL),this.discardBtnEl&&(this.discardBtnEl.textContent=A.STRINGS.DISCARD_BUTTON),this.lastType=void 0,this.lastCount=-1,this.lastCapacity=-1,this.lastIsFull=!1,this.lastHasItems=!1,this.lastMoney=-1,this.toastTimer=null,this.onDiscardCallback=null,this.onSummonTruckCallback=null,this.onResetSaveCallback=null,this.onTimeScaleCallback=null,this.currentTimeScale=1,this.gameStateRef=null,this.lastSoundEnabled=void 0,this.audioToggleBtn&&this.audioToggleBtn.addEventListener("click",()=>{if(this.gameStateRef){const t=!this.gameStateRef.isSoundEnabled();this.gameStateRef.setSoundEnabled(t),this.updateAudioButton(t)}}),this.discardBtnEl&&this.discardBtnEl.addEventListener("click",()=>{this.onDiscardCallback&&this.onDiscardCallback()}),this.devToggleBtn&&this.devToggleBtn.addEventListener("click",()=>{this.toggleDevPanel()}),this.devCloseBtn&&this.devCloseBtn.addEventListener("click",()=>{this.closeDevPanel()}),this.devSummonTruckBtn&&this.devSummonTruckBtn.addEventListener("click",()=>{this.onSummonTruckCallback&&this.onSummonTruckCallback()}),this.devResetSaveBtn&&this.devResetSaveBtn.addEventListener("click",()=>{confirm(A.STRINGS.RESET_SAVE_CONFIRM)&&this.onResetSaveCallback&&this.onResetSaveCallback()}),this.devAdd1000Btn&&this.devAdd1000Btn.addEventListener("click",()=>{this.gameStateRef&&this.gameStateRef.addMoney(1e3)}),this.devAdd10000Btn&&this.devAdd10000Btn.addEventListener("click",()=>{this.gameStateRef&&this.gameStateRef.addMoney(1e4)}),this.devMaxUpgradesBtn&&this.devMaxUpgradesBtn.addEventListener("click",()=>{this.gameStateRef&&(this.gameStateRef.maxAllUpgrades(),this.updateUpgradeRows(this.gameStateRef))}),this.timescaleBtns&&this.timescaleBtns.forEach(t=>{t.addEventListener("click",()=>{const e=parseFloat(t.dataset.scale)||1;this.setTimeScale(e),this.onTimeScaleCallback&&this.onTimeScaleCallback(e)})}),this.upgradeBtnEl&&this.upgradeBtnEl.addEventListener("click",()=>{this.openUpgradePanel()}),this.upgradePanelCloseEl&&this.upgradePanelCloseEl.addEventListener("click",()=>{this.closeUpgradePanel()}),this.upgradeModalBackdropEl&&this.upgradeModalBackdropEl.addEventListener("click",()=>{this.closeUpgradePanel()}),window.addEventListener("keydown",t=>{t.key==="F2"||t.key==="`"?(t.preventDefault(),this.toggleDevPanel()):t.key==="Escape"&&(this.isUpgradePanelOpen()?this.closeUpgradePanel():this.isDevPanelOpen()&&this.closeDevPanel())})}onSummonTruck(t){this.onSummonTruckCallback=t}onResetSave(t){this.onResetSaveCallback=t}onTimeScaleChange(t){this.onTimeScaleCallback=t}setTimeScale(t){this.currentTimeScale=t,this.timescaleBtns&&this.timescaleBtns.forEach(e=>{(parseFloat(e.dataset.scale)||1)===t?e.classList.add("is-active"):e.classList.remove("is-active")})}toggleDevPanel(t){if(!this.devPanelEl)return;(t!==void 0?t:this.devPanelEl.classList.contains("dev-panel-hidden"))?this.devPanelEl.classList.remove("dev-panel-hidden"):this.devPanelEl.classList.add("dev-panel-hidden")}closeDevPanel(){this.devPanelEl&&this.devPanelEl.classList.add("dev-panel-hidden")}isDevPanelOpen(){return this.devPanelEl&&!this.devPanelEl.classList.contains("dev-panel-hidden")}openUpgradePanel(){this.upgradePanelEl&&(this.upgradePanelEl.classList.remove("panel-hidden"),this.gameStateRef&&this.renderUpgradePanel(this.gameStateRef))}closeUpgradePanel(){this.upgradePanelEl&&this.upgradePanelEl.classList.add("panel-hidden")}isUpgradePanelOpen(){return this.upgradePanelEl&&!this.upgradePanelEl.classList.contains("panel-hidden")}renderUpgradePanel(t){if(!this.upgradeListEl||!A.UPGRADES)return;this.gameStateRef=t;const e=Object.values(A.UPGRADES);if(this.upgradeListEl.children.length===e.length){this.updateUpgradeRows(t);return}this.upgradeListEl.innerHTML="",e.forEach(n=>{const s=document.createElement("div");s.className="upgrade-row",s.id=`upgrade-row-${n.ID}`,s.dataset.upgradeId=n.ID,s.innerHTML=`
        <div class="upgrade-icon">${n.ICON}</div>
        <div class="upgrade-info">
          <div class="upgrade-title-row">
            <span class="upgrade-title">${n.NAME}</span>
            <span class="upgrade-level" id="upgrade-lvl-${n.ID}">Seviye 0/5</span>
          </div>
          <div class="upgrade-effect" id="upgrade-effect-${n.ID}">${n.DESC}</div>
        </div>
        <div class="upgrade-action">
          <button class="upgrade-buy-btn" id="upgrade-btn-${n.ID}" data-upgrade-id="${n.ID}">
            Al
          </button>
        </div>
      `,s.querySelector(".upgrade-buy-btn").addEventListener("click",()=>{this.handleBuyUpgrade(n.ID,s)}),this.upgradeListEl.appendChild(s)}),this.updateUpgradeRows(t)}updateUpgradeRows(t){!this.upgradeListEl||!A.UPGRADES||Object.values(A.UPGRADES).forEach(e=>{const n=t.getUpgradeLevel(e.ID),s=n>=e.MAX_LEVEL,r=t.getUpgradeCost(e.ID),a=!s&&r!==null&&t.getMoney()>=r,o=document.getElementById(`upgrade-lvl-${e.ID}`),l=document.getElementById(`upgrade-effect-${e.ID}`),c=document.getElementById(`upgrade-btn-${e.ID}`);o&&(o.textContent=`Seviye ${n}/${e.MAX_LEVEL}`),l&&(l.textContent=this._getUpgradeEffectText(e.ID,n,t)),c&&(s?(c.textContent=A.STRINGS.LEVEL_MAX,c.disabled=!0,c.className="upgrade-buy-btn is-max"):(c.textContent=`${A.STRINGS.BUY_BUTTON} (${r.toLocaleString("tr-TR")} 💰)`,c.disabled=!a,a?c.className="upgrade-buy-btn":c.className="upgrade-buy-btn is-disabled"))})}_getUpgradeEffectText(t,e,n){switch(t){case"tentCapacity":{const s=n.getStat("tentSlots");return e>=5?`Maksimum Kapasite (${s} Yuva)`:`+1 Kükürt Yuvası (Mevcut: ${s})`}case"walkSpeed":{const s=Math.round(e*12);return e>=5?`Maksimum Hız (+%${s})`:`+%12 Hız (Şu an: +%${s})`}case"carryCapacity":{const s=n.getStat("carryCapacityApricot"),r=n.getStat("carryCapacityCrate");return e>=5?`Maksimum Kapasite (${s} 🍑 / ${r} 📦)`:`+3 Kayısı, +1 Kasa (Mevcut: ${s}/${r})`}case"harvestSpeed":{const s=Math.round(e*15);return e>=5?`Maksimum Hız (-%${s} Süre)`:`-%15 Silkeleme Süresi (Şu an: -%${s})`}default:return""}}handleBuyUpgrade(t,e){if(!this.gameStateRef)return;this.gameStateRef.purchaseUpgrade(t)&&(e&&(e.classList.remove("upgrade-success-flash"),e.offsetWidth,e.classList.add("upgrade-success-flash")),this.updateUpgradeRows(this.gameStateRef))}onDiscard(t){this.onDiscardCallback=t}updateAudioButton(t){this.audioToggleBtn&&(this.audioToggleBtn.textContent=t?"🔊":"🔇",this.audioToggleBtn.title=t?"Sesi Kapat":"Sesi Aç")}setFPS(t){this.devFpsEl&&this.isDevPanelOpen()&&(this.devFpsEl.textContent=Math.round(t).toString())}_initPwaInstallBanner(){if(!this.pwaBannerEl)return;const t=localStorage.getItem("kayisi_pwa_dismissed")==="1",e=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0;if(t||e)return;const n=/iPhone|iPad|iPod/.test(navigator.userAgent)&&!window.MSStream;(n||/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768)&&(n?(this.pwaBannerText&&(this.pwaBannerText.textContent="Ana ekrana eklemek için: Paylaş ➔ Ana Ekrana Ekle seçeneğine dokun."),this.pwaInstallBtn&&(this.pwaInstallBtn.style.display="none"),setTimeout(()=>{!localStorage.getItem("kayisi_pwa_prompt_dismissed")&&this.pwaBannerEl&&this.pwaBannerEl.classList.remove("pwa-banner-hidden")},2500)):(window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),this.deferredPrompt=r,!localStorage.getItem("kayisi_pwa_prompt_dismissed")&&this.pwaBannerEl&&this.pwaBannerEl.classList.remove("pwa-banner-hidden")}),this.pwaInstallBtn&&this.pwaInstallBtn.addEventListener("click",async()=>{if(this.deferredPrompt){this.deferredPrompt.prompt();try{const{outcome:r}=await this.deferredPrompt.userChoice;console.log("[PWA] User choice:",r)}catch{}this.deferredPrompt=null}this._dismissPwaBanner()})),this.pwaDismissBtn&&this.pwaDismissBtn.addEventListener("click",()=>{this._dismissPwaBanner()}))}_dismissPwaBanner(){this.pwaBannerEl&&(this.pwaBannerEl.classList.add("pwa-banner-hidden"),this.pwaBannerEl.style.display="none"),localStorage.setItem("kayisi_pwa_prompt_dismissed","true")}showWarning(t){re.emit("warning",{message:t}),this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.remove("toast-hidden"),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastEl.classList.add("toast-hidden"),this.toastTimer=null},2200))}update(t,e){this.gameStateRef=e;const n=t.getCurrentType(),s=t.getCount(),r=t.getCapacity(),a=t.isFull(),o=s>0;if(n!==this.lastType){this.lastType=n;const l=n?A.ITEM_LABELS[n]:A.ITEM_LABELS.EMPTY;this.iconEl&&(this.iconEl.textContent=l.icon),this.labelEl&&(this.labelEl.textContent=l.label)}if((s!==this.lastCount||r!==this.lastCapacity)&&(this.lastCount=s,this.lastCapacity=r,this.counterEl&&(n?this.counterEl.textContent=`${s}/${r}`:this.counterEl.textContent="0/0")),a!==this.lastIsFull&&(this.lastIsFull=a,this.fullBadgeEl&&(a?this.fullBadgeEl.classList.remove("badge-hidden"):this.fullBadgeEl.classList.add("badge-hidden"))),o!==this.lastHasItems&&(this.lastHasItems=o,this.discardBtnEl&&(o?this.discardBtnEl.classList.remove("discard-btn-hidden"):this.discardBtnEl.classList.add("discard-btn-hidden"))),e&&this.moneyEl){const l=e.getMoney();l!==this.lastMoney&&(this.lastMoney=l,this.moneyEl.textContent=l.toLocaleString("tr-TR"))}if(e&&this.isDevPanelOpen()){this.devMoneyRateEl&&(this.devMoneyRateEl.textContent=`${e.getMoneyPerMinute()} 💰/dk`),this.devTotalCratesEl&&(this.devTotalCratesEl.textContent=e.getTotalCratesSold().toString()),this.devAvgTruckEl&&(this.devAvgTruckEl.textContent=`${e.getAveragePerTruck()} 💰`),this.devErrCountEl&&(this.devErrCountEl.textContent=hi.getLogCount().toString());const l=jr.getSnapshot();this.devMetricGeometriesEl&&(this.devMetricGeometriesEl.textContent=l.geometries.formatted),this.devMetricTexturesEl&&(this.devMetricTexturesEl.textContent=l.textures.formatted),this.devMetricCallsEl&&(this.devMetricCallsEl.textContent=l.calls.formatted),this.devMetricTrianglesEl&&(this.devMetricTrianglesEl.textContent=l.triangles.formatted),this.devMetricSceneObjectsEl&&(this.devMetricSceneObjectsEl.textContent=l.sceneObjects.formatted),this.devMetricDomNodesEl&&(this.devMetricDomNodesEl.textContent=l.domNodes.formatted),this.devMetricParticlesEl&&(this.devMetricParticlesEl.textContent=l.particles.formatted),this.devMetricHeapEl&&l.heap&&(this.devMetricHeapEl.textContent=l.heap.formatted),this.devMetricAudioEl&&l.audioStats&&(this.devMetricAudioEl.textContent=l.audioStats.formatted),this.devMetricFps60El&&l.fps60&&(this.devMetricFps60El.textContent=l.fps60.formatted)}if(e&&this.isUpgradePanelOpen()&&this.updateUpgradeRows(e),e){const l=e.isSoundEnabled();l!==this.lastSoundEnabled&&(this.lastSoundEnabled=l,this.updateAudioButton(l))}}}class jp{constructor(){this.ctx=null,this.masterGain=null,this.lastCollectTime=0,this.initialized=!1,this.totalNodesCreated=0,this.activeNodes=0,this._setupUserGestureListener(),this._bindEvents()}_setupUserGestureListener(){const t=()=>{this._ensureContext(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t),window.removeEventListener("click",t)};window.addEventListener("pointerdown",t,{once:!0}),window.addEventListener("keydown",t,{once:!0}),window.addEventListener("touchstart",t,{once:!0}),window.addEventListener("click",t,{once:!0})}_ensureContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(t)try{this.ctx=new t,this.masterGain=this.ctx.createGain(),this.totalNodesCreated=1,this.activeNodes=1,this.masterGain.gain.setValueAtTime(.22,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.initialized=!0}catch(e){console.warn("AudioContext initialization failed:",e)}}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}_canPlay(){return se.isSoundEnabled()?(this.ctx||this._ensureContext(),this.ctx&&this.ctx.state==="running"):!1}_createVoice(t,e=.25){const n=this.ctx.createOscillator(),s=this.ctx.createGain();return n.type=t,n.connect(s),s.connect(this.masterGain),this.totalNodesCreated+=2,this.activeNodes+=2,n.onended=()=>{this.activeNodes=Math.max(1,this.activeNodes-2)},{osc:n,gain:s}}getAudioStats(){return{state:this.ctx?this.ctx.state:"başlatılmadı",activeNodes:this.activeNodes,totalNodes:this.totalNodesCreated}}_bindEvents(){re.on("apricot_collected",()=>this.playCollect()),re.on("crate_made",()=>this.playCrateMade()),re.on("station_ready",()=>this.playStationReady()),re.on("sold",()=>this.playSold()),re.on("upgrade_bought",()=>this.playUpgrade()),re.on("warning",()=>this.playWarning())}playCollect(){const t=performance.now()/1e3,e=A.AUDIO&&A.AUDIO.MIN_COLLECT_INTERVAL||.125;if(!(t-this.lastCollectTime<e)&&(this.lastCollectTime=t,!!this._canPlay()))try{const n=this.ctx.currentTime,{osc:s,gain:r}=this._createVoice("sine",.25);s.frequency.setValueAtTime(450,n),s.frequency.exponentialRampToValueAtTime(750,n+.05),r.gain.setValueAtTime(.25,n),r.gain.exponentialRampToValueAtTime(.001,n+.06),s.start(n),s.stop(n+.06)}catch{}}playCrateMade(){if(this._canPlay())try{const t=this.ctx.currentTime,{osc:e,gain:n}=this._createVoice("triangle",.32);e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(55,t+.12),n.gain.setValueAtTime(.32,t),n.gain.exponentialRampToValueAtTime(.001,t+.14),e.start(t),e.stop(t+.14)}catch{}}playStationReady(){if(this._canPlay())try{const t=this.ctx.currentTime,{osc:e,gain:n}=this._createVoice("sine",.24);e.frequency.setValueAtTime(880,t),e.frequency.exponentialRampToValueAtTime(1320,t+.04),n.gain.setValueAtTime(.24,t),n.gain.exponentialRampToValueAtTime(.001,t+.32),e.start(t),e.stop(t+.32)}catch{}}playSold(){if(this._canPlay())try{const t=[987.77,1318.51,1760],e=this.ctx.currentTime;t.forEach((n,s)=>{const r=e+s*.08,{osc:a,gain:o}=this._createVoice("sine",.22);a.frequency.setValueAtTime(n,r),o.gain.setValueAtTime(.22,r),o.gain.exponentialRampToValueAtTime(.001,r+.22),a.start(r),a.stop(r+.22)})}catch{}}playUpgrade(){if(this._canPlay())try{const t=[523.25,659.25,783.99,1046.5],e=this.ctx.currentTime;t.forEach((n,s)=>{const r=e+s*.07,{osc:a,gain:o}=this._createVoice("triangle",.28);a.frequency.setValueAtTime(n,r),o.gain.setValueAtTime(.28,r),o.gain.exponentialRampToValueAtTime(.001,r+.26),a.start(r),a.stop(r+.26)})}catch{}}playWarning(){if(this._canPlay())try{const t=this.ctx.currentTime,{osc:e,gain:n}=this._createVoice("sawtooth",.18);e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(95,t+.14),n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.start(t),e.stop(t+.15)}catch{}}}const Ao=new jp;class Jp{constructor(t){this.scene=t,this.poolSize=A.PARTICLES&&A.PARTICLES.POOL_SIZE||30,this.activePoolLimit=this.poolSize,this.quality="high",this.particles=[];const e=new Vt(.12,.12,.12);for(let n=0;n<this.poolSize;n++){const s=new Nt({color:16777215,flatShading:!0,transparent:!0,opacity:1}),r=new ut(e,s);r.visible=!1,this.scene.add(r),this.particles.push({mesh:r,mat:s,active:!1,life:0,maxLife:1,velocity:new O,gravity:-9.8,startScale:1,rotSpeed:new O})}this._bindEvents()}_bindEvents(){re.on("sold",t=>{const e=t&&t.pos?t.pos:{x:23.8,y:1.5,z:0};this.burstGold(e)}),re.on("station_ready",t=>{t&&t.position&&this.burstReady(t.position)}),re.on("dropped",t=>{t&&t.action==="discard"&&t.pos&&this.burstDust(t.pos)})}reduceQuality(){if(this.quality!=="low"){this.quality="low",this.activePoolLimit=Math.floor(this.poolSize/2);for(let t=this.activePoolLimit;t<this.particles.length;t++)this.particles[t].active=!1,this.particles[t].mesh.visible=!1;console.warn("[Performance] Düşük FPS tespit edildi, parçacık havuzu 15'e düşürüldü.")}}getQualityLevel(){return this.quality}getQuality(){return this.quality}getActivePoolLimit(){return this.activePoolLimit}getActiveCount(){let t=0;for(let e=0;e<this.activePoolLimit;e++)this.particles[e].active&&t++;return t}spawn({pos:t={x:0,y:0,z:0},count:e=6,color:n=16763904,speed:s=2,gravity:r=-9.8,life:a=.8,scale:o=1,spreadX:l=1,spreadY:c=1,spreadZ:u=1,baseVy:d=2}){let f=0,m=this.quality==="low"?Math.max(1,Math.round(e*.5)):e;window.__GAME__&&window.__GAME__.getTimeScale&&window.__GAME__.getTimeScale()>=3&&(m=Math.max(1,Math.round(m*.5)));for(let S=0;S<this.activePoolLimit&&!(f>=m);S++){const p=this.particles[S];if(p.active)continue;p.active=!0,p.life=0,p.maxLife=a*(.8+Math.random()*.4),p.gravity=r,p.startScale=o*(.8+Math.random()*.5),p.mat.color.setHex(n),p.mat.opacity=1,p.mesh.position.set(t.x+(Math.random()-.5)*.3,t.y+(Math.random()-.5)*.2,t.z+(Math.random()-.5)*.3),p.mesh.scale.setScalar(p.startScale),p.mesh.visible=!0;const h=Math.random()*Math.PI*2,R=s*(.4+Math.random()*.6);p.velocity.set(Math.cos(h)*R*l,d+Math.random()*s*c,Math.sin(h)*R*u),p.rotSpeed.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),f++}}burstGold(t){this.spawn({pos:t,count:9,color:16096779,speed:2.5,gravity:-11,life:.9,scale:1.1,baseVy:3.5})}burstUpgrade(t){this.spawn({pos:t,count:10,color:2278750,speed:3,gravity:-7,life:.85,scale:1,baseVy:2.8})}burstReady(t){this.spawn({pos:t,count:5,color:16707722,speed:1.2,gravity:-3.5,life:.7,scale:.8,baseVy:1.8})}burstDust(t){this.spawn({pos:{x:t.x,y:.1,z:t.z},count:7,color:13948120,speed:2,gravity:-10,life:.55,scale:.9,baseVy:1.4,spreadY:.4})}update(t){for(const e of this.particles){if(!e.active)continue;if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;continue}const n=e.life/e.maxLife;e.velocity.y+=e.gravity*t,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=e.rotSpeed.x*t,e.mesh.rotation.y+=e.rotSpeed.y*t,e.mesh.rotation.z+=e.rotSpeed.z*t;const s=e.startScale*Math.max(.01,1-n*.75);e.mesh.scale.setScalar(s),e.mat.opacity=Math.max(0,1-n)}}}const Ro=new O,je=new O;class Qp{constructor(t,e={}){this.scene=t,this.gameContext=e,this.steps=A.TUTORIAL&&A.TUTORIAL.STEPS||[],this.currentStepIndex=0,this.isActive=!1,this.animTime=0,this.stepTimer=0,this.predicateTimer=0,this.overlayEl=document.getElementById("tutorial-overlay"),this.bannerEl=document.getElementById("tutorial-banner"),this.counterEl=document.getElementById("tutorial-step-counter"),this.textEl=document.getElementById("tutorial-text"),this.skipBtn=document.getElementById("tutorial-skip-btn"),this.closeBtn=document.getElementById("tutorial-close-btn"),this.edgePointerEl=document.getElementById("tutorial-edge-pointer"),this.edgeArrowEl=this.edgePointerEl?this.edgePointerEl.querySelector(".edge-pointer-arrow"):null,this._create3DMarker(),this._initPredicates(),se.isTutorialDone()||this.steps.length===0?this.hide():this.start(),this._bindUI()}setGameContext(t){this.gameContext=t}_initPredicates(){this.predicates={tree:(t,e,n)=>{const s=e.getCurrentType(),r=e.getCount();return!!(s==="apricot"&&r>0||s&&s!=="apricot"||t.crateStation&&(t.crateStation.getTotalItems()>0||t.crateStation.hasReadyCrate())||t.dryingRack1&&t.dryingRack1.getTotalItems()>0||t.sulfurTent&&t.sulfurTent.getTotalItems()>0||t.dryingRack2&&t.dryingRack2.getTotalItems()>0||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},crate_station:(t,e,n)=>{const s=e.getCurrentType();return!!(t.crateStation&&(t.crateStation.getTotalItems()>0||t.crateStation.hasReadyCrate())||s&&s!=="apricot"||t.dryingRack1&&t.dryingRack1.getTotalItems()>0||t.sulfurTent&&t.sulfurTent.getTotalItems()>0||t.dryingRack2&&t.dryingRack2.getTotalItems()>0||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},pick_crate:(t,e,n)=>{const s=e.getCurrentType();return!!(s==="crate_fresh"||s==="crate_dry1"||s==="crate_sulfur"||s==="crate_dry2"||t.dryingRack1&&t.dryingRack1.getTotalItems()>0||t.sulfurTent&&t.sulfurTent.getTotalItems()>0||t.dryingRack2&&t.dryingRack2.getTotalItems()>0||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},rack_1:(t,e,n)=>{const s=e.getCurrentType();return!!(t.dryingRack1&&t.dryingRack1.getTotalItems()>0||s==="crate_dry1"||s==="crate_sulfur"||s==="crate_dry2"||t.sulfurTent&&t.sulfurTent.getTotalItems()>0||t.dryingRack2&&t.dryingRack2.getTotalItems()>0||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},tent:(t,e,n)=>{const s=e.getCurrentType();return!!(t.sulfurTent&&t.sulfurTent.getTotalItems()>0||s==="crate_sulfur"||s==="crate_dry2"||t.dryingRack2&&t.dryingRack2.getTotalItems()>0||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},rack_2:(t,e,n)=>{const s=e.getCurrentType();return!!(t.dryingRack2&&t.dryingRack2.getTotalItems()>0||s==="crate_dry2"||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},sales:(t,e,n)=>!!(t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0),wait_truck:(t,e,n)=>!!(n&&n.getTotalCratesSold()>0||n&&n.getTotalUpgradesCount()>0),upgrade:(t,e,n)=>n&&n.getTotalUpgradesCount()>=1}}_create3DMarker(){this.markerGroup=new ee,this.markerGroup.visible=!1;const t=new ha(.7,.95,24);t.rotateX(-Math.PI/2);const e=new Ge({color:16436245,side:Qe,transparent:!0,opacity:.85});this.ringMesh=new ut(t,e),this.ringMesh.position.y=.05,this.markerGroup.add(this.ringMesh),this.arrowGroup=new ee,this.arrowGroup.position.y=1.3;const n=new ua(.3,.55,6);n.rotateX(Math.PI);const s=new Nt({color:16096779,flatShading:!0}),r=new ut(n,s);r.position.y=-.15,this.arrowGroup.add(r);const a=new me(.12,.12,.45,6),o=new ut(a,s);o.position.y=.3,this.arrowGroup.add(o),this.markerGroup.add(this.arrowGroup),this.scene.add(this.markerGroup)}_bindUI(){this.skipBtn&&this.skipBtn.addEventListener("click",t=>{t.stopPropagation(),this.nextStep()}),this.closeBtn&&this.closeBtn.addEventListener("click",t=>{t.stopPropagation(),this.closeTutorial()})}start(){this.currentStepIndex=0,this.stepTimer=0,this.isActive=!0,this.overlayEl&&this.overlayEl.classList.remove("tutorial-hidden"),this._renderCurrentStep()}getCurrentStep(){return this.currentStepIndex<this.steps.length?this.steps[this.currentStepIndex]:null}nextStep(){this.currentStepIndex++,this.stepTimer=0,this.skipBtn&&this.skipBtn.classList.remove("tutorial-btn-highlight"),this.currentStepIndex>=this.steps.length?this._completeTutorial():this._renderCurrentStep()}_renderCurrentStep(){const t=this.getCurrentStep();t&&(this.counterEl&&(this.counterEl.textContent=`${this.currentStepIndex+1}/${this.steps.length}`),this.textEl&&(this.textEl.textContent=t.text),t.target?(this.markerGroup.position.set(t.target.x,t.target.y,t.target.z),this.markerGroup.visible=!0):(this.markerGroup.visible=!1,this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden")))}_completeTutorial(){this.isActive=!1,this.markerGroup.visible=!1,this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden"),se.setTutorialDone(!0),this.counterEl&&(this.counterEl.textContent="🎉"),this.textEl&&(this.textEl.textContent=A.TUTORIAL&&A.TUTORIAL.STRINGS&&A.TUTORIAL.STRINGS.COMPLETE_TEXT||"Tebrikler! Çiftlik döngüsünü öğrendin. Bol kazançlar!"),this.skipBtn&&(this.skipBtn.style.display="none"),setTimeout(()=>{this.hide()},3500)}closeTutorial(){this.isActive=!1,this.markerGroup.visible=!1,this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden"),se.setTutorialDone(!0),this.hide()}hide(){this.isActive=!1,this.markerGroup&&(this.markerGroup.visible=!1),this.overlayEl&&this.overlayEl.classList.add("tutorial-hidden"),this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden"),this.skipBtn&&this.skipBtn.classList.remove("tutorial-btn-highlight")}_checkStepPredicates(){if(!this.isActive)return;const{world:t,player:e,state:n}=this.gameContext;if(!t||!e||!n)return;let s=0;for(;this.isActive&&s<9;){const r=this.getCurrentStep();if(!r)break;const a=this.predicates[r.id];if(a&&a(t,e,n))this.nextStep(),s++;else break}}update(t,e,n){if(!this.isActive)return;this.animTime+=t,this.stepTimer+=t,this.stepTimer>=45&&this.skipBtn&&!this.skipBtn.classList.contains("tutorial-btn-highlight")&&this.skipBtn.classList.add("tutorial-btn-highlight"),this.predicateTimer+=t,this.predicateTimer>=.1&&(this.predicateTimer=0,this._checkStepPredicates());const s=this.getCurrentStep();if(!s||!s.target||!n){this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden");return}this.arrowGroup.position.y=1.3+Math.sin(this.animTime*4.5)*.18,this.arrowGroup.rotation.y+=t*2.2;const r=1+Math.sin(this.animTime*3.5)*.12;if(this.ringMesh.scale.set(r,r,1),Ro.set(s.target.x,s.target.y,s.target.z),je.copy(Ro).project(n),je.x>=-.8&&je.x<=.8&&je.y>=-.78&&je.y<=.78&&je.z<1)this.markerGroup.visible=!0,this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden");else if(this.markerGroup.visible=!1,this.edgePointerEl){this.edgePointerEl.classList.remove("edge-pointer-hidden");const o=window.innerWidth,l=window.innerHeight,c=o/2,u=l/2,d=Math.atan2(je.y,je.x),f=36,m=56,_=c-f,S=u-m;let p,h;const R=Math.tan(d);if(Math.abs(Math.cos(d))*S>Math.abs(Math.sin(d))*_){const M=je.x>0?1:-1;p=c+M*_,h=u-M*_*R}else{const M=je.y>0?1:-1;h=u-M*S,p=c+M*S/(R||1e-4)}if(p=Math.max(f,Math.min(o-f,p)),h=Math.max(m,Math.min(l-m,h)),this.edgePointerEl.style.left=`${p}px`,this.edgePointerEl.style.top=`${h}px`,this.edgePointerEl.style.transform="translate(-50%, -50%)",this.edgeArrowEl){const M=-(d*180)/Math.PI;this.edgeArrowEl.style.transform=`rotate(${M}deg)`}}}}const tm="modulepreload",em=function(i){return"/"+i},Co={},nm=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=a(e.map(c=>{if(c=em(c),c in Co)return;Co[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":tm,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function im(i={}){const{immediate:t=!1,onNeedReload:e,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:a,onRegisterError:o}=i;let l,c,u;const d=async(m=!0)=>{await c,u==null||u()};async function f(){if("serviceWorker"in navigator){if(l=await nm(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/sw.js",{scope:"/",type:"classic"})).catch(m=>{o==null||o(m)}),!l)return;u=()=>{l==null||l.messageSkipWaiting()};{let m=!1;const _=()=>{m=!0,l==null||l.addEventListener("controlling",S=>{S.isUpdate&&(e?e():window.location.reload())}),n==null||n()};l.addEventListener("installed",S=>{typeof S.isUpdate>"u"?typeof S.isExternal<"u"&&S.isExternal?_():!m&&(s==null||s()):S.isUpdate||s==null||s()}),l.addEventListener("waiting",_)}l.register({immediate:t}).then(m=>{a?a("/sw.js",m):r==null||r(m)}).catch(m=>{o==null||o(m)})}}return c=f(),d}function sm(){const i=document.getElementById("pwa-update-prompt"),t=document.getElementById("pwa-reload-btn"),e=im({onNeedRefresh(){i&&i.classList.remove("pwa-prompt-hidden")},onOfflineReady(){console.log("[PWA] Çevrimdışı çalışmaya hazır.")}});t&&t.addEventListener("click",()=>{e(!0)})}function bo(){const i=document.getElementById("canvas-container");if(!i){console.error("Canvas container not found");return}const t=new $p,e=new zp(i,M=>t.showWarning(M)),n=new Wp(e.scene),s=new Xp,r=new Jp(e.scene),a=new Qp(e.scene,{world:e,player:n,state:se});hi.attachWebGLContext(e.renderer.domElement),hi.setProviders({getFPS:()=>m,getTimeScale:()=>l}),re.on("upgrade_bought",()=>{const M=n.getPosition();r.burstUpgrade({x:M.x,y:1,z:M.z})});const o=()=>{if(n.getCount()>0){const M=n.getPosition().clone(),T=n.getCount(),I=n.getCurrentType();n.discardAll(),t.showWarning(A.STRINGS.TOAST_DISCARDED),re.emit("dropped",{action:"discard",itemType:I,count:T,pos:M})}};t.onDiscard(o),s.onDiscardCallback=o,t.onSummonTruck(()=>{e.salesStand&&e.salesStand.callTruckImmediately()}),t.onResetSave(()=>{se.resetSave(),window.location.reload()});let l=1;t.onTimeScaleChange(M=>{l=M});let c=0;const u=A.STORAGE&&A.STORAGE.AUTO_SAVE_INTERVAL||5;let d=0,f=0,m=60,_=0,S=0;sm(),document.addEventListener("visibilitychange",()=>{document.hidden||h.getDelta(),se.save()}),window.addEventListener("beforeunload",()=>{se.save()});const p=new Bt(0,0),h=new Hc;function R(){if(hi.isContextLost)return;requestAnimationFrame(R);const M=Math.min(h.getDelta(),.1);jr.update({renderer:e.renderer,scene:e.scene,particles:r,audio:Ao,fps:m}),d++,f+=M,f>=.5&&(m=Math.round(d/f),t.setFPS(m),m<40?(_+=f,_>=3&&r.reduceQuality()):_=0,d=0,f=0),c+=M,c>=u&&(c=0,se.save()),s.update();const T=t.isUpgradePanelOpen()?p:s.getMoveVector();n.update(M,T);const I=M*l;e.update(I,n,s),r.update(I),a.update(I,n.getPosition(),e.camera),t.update(n,se),document.hidden?S++:e.render()}e.onResize(),window.__GAME__={world:e,player:n,input:s,ui:t,state:se,particles:r,tutorial:a,audio:Ao,events:re,trees:e.trees,stations:e.stations,salesStand:e.salesStand,salesDepot:e.salesStand,errorLogger:hi,metricsTracker:jr,handleDiscard:o,getFPS:()=>m,getRenderSkippedCount:()=>S,getTimeScale:()=>l,setTimeScale:M=>{l=M,t.setTimeScale(M)}},requestAnimationFrame(R)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",bo):bo();
