(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Or="174",Wo=0,ra=1,Xo=2,oo=1,Yo=2,ln=3,Mn=0,Pe=1,je=2,Tn=0,ai=1,aa=2,oa=3,la=4,Ko=5,On=100,qo=101,Zo=102,$o=103,jo=104,Jo=200,Qo=201,tl=202,el=203,qs=204,Zs=205,nl=206,il=207,sl=208,rl=209,al=210,ol=211,ll=212,cl=213,ul=214,$s=0,js=1,Js=2,ci=3,Qs=4,tr=5,er=6,nr=7,Fr=0,hl=1,dl=2,xn=0,fl=1,pl=2,ml=3,_l=4,gl=5,Sl=6,vl=7,lo=300,ui=301,hi=302,ir=303,sr=304,ds=306,rr=1e3,Bn=1001,ar=1002,Ze=1003,El=1004,Ui=1005,Ue=1006,gs=1007,kn=1008,dn=1009,co=1010,uo=1011,Ri=1012,Br=1013,zn=1014,cn=1015,bi=1016,kr=1017,Gr=1018,di=1020,ho=35902,fo=1021,po=1022,qe=1023,mo=1024,_o=1025,oi=1026,fi=1027,go=1028,zr=1029,So=1030,Hr=1031,Vr=1033,is=33776,ss=33777,rs=33778,as=33779,or=35840,lr=35841,cr=35842,ur=35843,hr=36196,dr=37492,fr=37496,pr=37808,mr=37809,_r=37810,gr=37811,Sr=37812,vr=37813,Er=37814,Tr=37815,xr=37816,Mr=37817,yr=37818,Ar=37819,Rr=37820,br=37821,os=36492,Cr=36494,wr=36495,vo=36283,Pr=36284,Ir=36285,Lr=36286,Tl=3200,xl=3201,Eo=0,Ml=1,vn="",ke="srgb",pi="srgb-linear",cs="linear",Qt="srgb",Xn=7680,ca=519,yl=512,Al=513,Rl=514,To=515,bl=516,Cl=517,wl=518,Pl=519,ua=35044,ha="300 es",un=2e3,us=2001;class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ss=Math.PI/180,Dr=180/Math.PI;function Ci(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ft(i,t,e){return Math.max(t,Math.min(e,i))}function Il(i,t){return(i%t+t)%t}function vs(i,t,e){return(1-e)*i+e*t}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,s,r,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],_=n[8],S=s[0],m=s[3],h=s[6],A=s[1],M=s[4],T=s[7],P=s[2],C=s[5],b=s[8];return r[0]=a*S+o*A+l*P,r[3]=a*m+o*M+l*C,r[6]=a*h+o*T+l*b,r[1]=c*S+u*A+d*P,r[4]=c*m+u*M+d*C,r[7]=c*h+u*T+d*b,r[2]=f*S+p*A+_*P,r[5]=f*m+p*M+_*C,r[8]=f*h+p*T+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,_=e*d+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=d*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=f*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=p*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Es.makeScale(t,e)),this}rotate(t){return this.premultiply(Es.makeRotation(-t)),this}translate(t,e){return this.premultiply(Es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new Lt;function xo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ll(){const i=hs("canvas");return i.style.display="block",i}const da={};function Dn(i){i in da||(da[i]=!0,console.warn(i))}function Dl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ul(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nl(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fa=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pa=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ol(){const i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(s.r=hn(s.r),s.g=hn(s.g),s.b=hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vn?cs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pi]:{primaries:t,whitePoint:n,transfer:cs,toXYZ:fa,fromXYZ:pa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:fa,fromXYZ:pa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const Kt=Ol();function hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class Fl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=hs("canvas")),Yn.width=t.width,Yn.height=t.height;const n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hn(e[n]/255)*255):e[n]=hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bl=0;class Wr{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ts(s[a].image)):r.push(Ts(s[a]))}else r=Ts(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kl=0;class be extends _i{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Bn,s=Bn,r=Ue,a=kn,o=qe,l=dn,c=be.DEFAULT_ANISOTROPY,u=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=Ci(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rr:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case ar:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rr:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case ar:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=lo;be.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],S=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,T=(p+1)/2,P=(h+1)/2,C=(u+f)/4,b=(d+S)/4,U=(_+m)/4;return M>T&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=b/n):T>P?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=C/s,r=U/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=b/r,s=U/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(d-S)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gl extends _i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Wr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Gl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mo extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zl extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const f=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=S;return}if(d!==S||l!==f||c!==p||u!==_){let m=1-o;const h=l*f+c*p+u*_+d*S,A=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const P=Math.sqrt(M),C=Math.atan2(P,h*A);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const T=o*A;if(l=l*m+f*T,c=c*m+p*T,u=u*m+_*T,d=d*m+S*T,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*d+l*p-c*f,t[e+1]=l*_+u*f+c*d-o*p,t[e+2]=c*_+u*p+o*f-l*d,t[e+3]=u*_-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ma.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ma.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ft(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xs.copy(this).projectOnVector(t),this.sub(xs)}reflect(t){return this.sub(xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ft(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xs=new O,ma=new wi;class Pi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ve):Ve.fromBufferAttribute(r,a),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ni.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ni.copy(n.boundingBox)),Ni.applyMatrix4(t.matrixWorld),this.union(Ni)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),Oi.subVectors(this.max,Ti),Kn.subVectors(t.a,Ti),qn.subVectors(t.b,Ti),Zn.subVectors(t.c,Ti),fn.subVectors(qn,Kn),pn.subVectors(Zn,qn),bn.subVectors(Kn,Zn);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-bn.z,bn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,bn.z,0,-bn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-bn.y,bn.x,0];return!Ms(e,Kn,qn,Zn,Oi)||(e=[1,0,0,0,1,0,0,0,1],!Ms(e,Kn,qn,Zn,Oi))?!1:(Fi.crossVectors(fn,pn),e=[Fi.x,Fi.y,Fi.z],Ms(e,Kn,qn,Zn,Oi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new O,new O,new O,new O,new O,new O,new O,new O],Ve=new O,Ni=new Pi,Kn=new O,qn=new O,Zn=new O,fn=new O,pn=new O,bn=new O,Ti=new O,Oi=new O,Fi=new O,Cn=new O;function Ms(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cn.fromArray(i,r);const o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),u=n.dot(Cn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Hl=new Pi,xi=new O,ys=new O;class Xr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xi.subVectors(t,this.center);const e=xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ys.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xi.copy(t.center).add(ys)),this.expandByPoint(xi.copy(t.center).sub(ys))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new O,As=new O,Bi=new O,mn=new O,Rs=new O,ki=new O,bs=new O;class Vl{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){As.copy(t).add(e).multiplyScalar(.5),Bi.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(As);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Bi),o=mn.dot(this.direction),l=-mn.dot(Bi),c=mn.lengthSq(),u=Math.abs(1-a*a);let d,f,p,_;if(u>0)if(d=a*l-o,f=a*o-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const S=1/u;d*=S,f*=S,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(As).addScaledVector(Bi,f),p}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,s,r){Rs.subVectors(e,t),ki.subVectors(n,t),bs.crossVectors(Rs,ki);let a=this.direction.dot(bs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,t);const l=o*this.direction.dot(ki.crossVectors(mn,ki));if(l<0)return null;const c=o*this.direction.dot(Rs.cross(mn));if(c<0||l+c>a)return null;const u=-o*mn.dot(bs);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,a,o,l,c,u,d,f,p,_,S,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,f,p,_,S,m)}set(t,e,n,s,r,a,o,l,c,u,d,f,p,_,S,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/$n.setFromMatrixColumn(t,0).length(),r=1/$n.setFromMatrixColumn(t,1).length(),a=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*u,p=a*d,_=o*u,S=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=f-S*c,e[9]=-o*l,e[2]=S-f*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*d,_=c*u,S=c*d;e[0]=f+S*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=S+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*d,_=c*u,S=c*d;e[0]=f-S*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=S-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*d,_=o*u,S=o*d;e[0]=l*u,e[4]=_*c-p,e[8]=f*c+S,e[1]=l*d,e[5]=S*c+f,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=S-f*d,e[8]=_*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+_,e[10]=f-S*d}else if(t.order==="XZY"){const f=a*l,p=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+S,e[5]=a*u,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*u,e[10]=S*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wl,t,Xl)}lookAt(t,e,n){const s=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),_n.crossVectors(n,Le),_n.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),_n.crossVectors(n,Le)),_n.normalize(),Gi.crossVectors(Le,_n),s[0]=_n.x,s[4]=Gi.x,s[8]=Le.x,s[1]=_n.y,s[5]=Gi.y,s[9]=Le.y,s[2]=_n.z,s[6]=Gi.z,s[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],_=n[2],S=n[6],m=n[10],h=n[14],A=n[3],M=n[7],T=n[11],P=n[15],C=s[0],b=s[4],U=s[8],x=s[12],E=s[1],I=s[5],z=s[9],k=s[13],X=s[2],q=s[6],W=s[10],j=s[14],V=s[3],rt=s[7],dt=s[11],Tt=s[15];return r[0]=a*C+o*E+l*X+c*V,r[4]=a*b+o*I+l*q+c*rt,r[8]=a*U+o*z+l*W+c*dt,r[12]=a*x+o*k+l*j+c*Tt,r[1]=u*C+d*E+f*X+p*V,r[5]=u*b+d*I+f*q+p*rt,r[9]=u*U+d*z+f*W+p*dt,r[13]=u*x+d*k+f*j+p*Tt,r[2]=_*C+S*E+m*X+h*V,r[6]=_*b+S*I+m*q+h*rt,r[10]=_*U+S*z+m*W+h*dt,r[14]=_*x+S*k+m*j+h*Tt,r[3]=A*C+M*E+T*X+P*V,r[7]=A*b+M*I+T*q+P*rt,r[11]=A*U+M*z+T*W+P*dt,r[15]=A*x+M*k+T*j+P*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],_=t[3],S=t[7],m=t[11],h=t[15];return _*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+S*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+h*(-s*o*u-e*l*d+e*o*f+s*a*d-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],_=t[12],S=t[13],m=t[14],h=t[15],A=d*m*c-S*f*c+S*l*p-o*m*p-d*l*h+o*f*h,M=_*f*c-u*m*c-_*l*p+a*m*p+u*l*h-a*f*h,T=u*S*c-_*d*c+_*o*p-a*S*p-u*o*h+a*d*h,P=_*d*l-u*S*l-_*o*f+a*S*f+u*o*m-a*d*m,C=e*A+n*M+s*T+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=A*b,t[1]=(S*f*r-d*m*r-S*s*p+n*m*p+d*s*h-n*f*h)*b,t[2]=(o*m*r-S*l*r+S*s*c-n*m*c-o*s*h+n*l*h)*b,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*b,t[4]=M*b,t[5]=(u*m*r-_*f*r+_*s*p-e*m*p-u*s*h+e*f*h)*b,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*h-e*l*h)*b,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*b,t[8]=T*b,t[9]=(_*d*r-u*S*r-_*n*p+e*S*p+u*n*h-e*d*h)*b,t[10]=(a*S*r-_*o*r+_*n*c-e*S*c-a*n*h+e*o*h)*b,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*p-e*o*p)*b,t[12]=P*b,t[13]=(u*S*s-_*d*s+_*n*f-e*S*f-u*n*m+e*d*m)*b,t[14]=(_*o*s-a*S*s-_*n*l+e*S*l+a*n*m-e*o*m)*b,t[15]=(a*d*s-u*o*s+u*n*l-e*d*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,_=r*d,S=a*u,m=a*d,h=o*d,A=l*c,M=l*u,T=l*d,P=n.x,C=n.y,b=n.z;return s[0]=(1-(S+h))*P,s[1]=(p+T)*P,s[2]=(_-M)*P,s[3]=0,s[4]=(p-T)*C,s[5]=(1-(f+h))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(_+M)*b,s[9]=(m-A)*b,s[10]=(1-(f+S))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=$n.set(s[0],s[1],s[2]).length();const a=$n.set(s[4],s[5],s[6]).length(),o=$n.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);const c=1/r,u=1/a,d=1/o;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=u,We.elements[5]*=u,We.elements[6]*=u,We.elements[8]*=d,We.elements[9]*=d,We.elements[10]*=d,e.setFromRotationMatrix(We),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=un){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,_;if(o===un)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===us)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un){const l=this.elements,c=1/(e-t),u=1/(n-s),d=1/(a-r),f=(e+t)*c,p=(n+s)*u;let _,S;if(o===un)_=(a+r)*d,S=-2*d;else if(o===us)_=r*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $n=new O,We=new he,Wl=new O(0,0,0),Xl=new O(1,1,1),_n=new O,Gi=new O,Le=new O,_a=new he,ga=new wi;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _a.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ga.setFromEuler(this),this.setFromQuaternion(ga,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yl=0;const Sa=new O,jn=new wi,rn=new he,zi=new O,Mi=new O,Kl=new O,ql=new wi,va=new O(1,0,0),Ea=new O(0,1,0),Ta=new O(0,0,1),xa={type:"added"},Zl={type:"removed"},Jn={type:"childadded",child:null},Cs={type:"childremoved",child:null};class Me extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new O,e=new Qe,n=new wi,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Lt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(va,t)}rotateY(t){return this.rotateOnAxis(Ea,t)}rotateZ(t){return this.rotateOnAxis(Ta,t)}translateOnAxis(t,e){return Sa.copy(t).applyQuaternion(this.quaternion),this.position.add(Sa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(va,t)}translateY(t){return this.translateOnAxis(Ea,t)}translateZ(t){return this.translateOnAxis(Ta,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zi.copy(t):zi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Mi,zi,this.up):rn.lookAt(zi,Mi,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),jn.setFromRotationMatrix(rn),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xa),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zl),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xa),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,t,Kl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new O(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new O,an=new O,ws=new O,on=new O,Qn=new O,ti=new O,Ma=new O,Ps=new O,Is=new O,Ls=new O,Ds=new ue,Us=new ue,Ns=new ue;class Ke{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),an.subVectors(n,e),ws.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(an),l=Xe.dot(ws),c=an.dot(an),u=an.dot(ws),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ds.setScalar(0),Us.setScalar(0),Ns.setScalar(0),Ds.fromBufferAttribute(t,e),Us.fromBufferAttribute(t,n),Ns.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ds,r.x),a.addScaledVector(Us,r.y),a.addScaledVector(Ns,r.z),a}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),an.subVectors(t,e),Xe.cross(an).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Xe.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Qn.subVectors(s,n),ti.subVectors(r,n),Ps.subVectors(t,n);const l=Qn.dot(Ps),c=ti.dot(Ps);if(l<=0&&c<=0)return e.copy(n);Is.subVectors(t,s);const u=Qn.dot(Is),d=ti.dot(Is);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Qn,a);Ls.subVectors(t,r);const p=Qn.dot(Ls),_=ti.dot(Ls);if(_>=0&&p<=_)return e.copy(r);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ti,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Ma.subVectors(r,s),o=(d-u)/(d-u+(p-_)),e.copy(s).addScaledVector(Ma,o);const h=1/(m+S+f);return a=S*h,o=f*h,e.copy(n).addScaledVector(Qn,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Hi={h:0,s:0,l:0};function Os(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Il(t,1),e=Ft(e,0,1),n=Ft(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Os(a,r,t+1/3),this.g=Os(a,r,t),this.b=Os(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Ao[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Kt.fromWorkingColorSpace(xe.copy(this),t),Math.round(Ft(xe.r*255,0,255))*65536+Math.round(Ft(xe.g*255,0,255))*256+Math.round(Ft(xe.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(xe.copy(this),e);const n=xe.r,s=xe.g,r=xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=ke){Kt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,s=xe.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(Hi);const n=vs(gn.h,Hi.h,e),s=vs(gn.s,Hi.s,e),r=vs(gn.l,Hi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new qt;qt.NAMES=Ao;let $l=0;class Ii extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=ai,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qs,this.blendDst=Zs,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qs&&(n.blendSrc=this.blendSrc),this.blendDst!==Zs&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ge extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new O,Vi=new Bt;let jl=0;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jl++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ua,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vi.fromBufferAttribute(this,e),Vi.applyMatrix3(t),this.setXY(e,Vi.x,Vi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ua&&(t.usage=this.usage),t}}class Ro extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bo extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jl=0;const Be=new he,Fs=new Me,ei=new O,De=new Pi,yi=new Pi,Se=new O;class tn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xo(t)?bo:Ro)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Fs.lookAt(t),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(De.min,yi.min),De.expandByPoint(Se),Se.addVectors(De.max,yi.max),De.expandByPoint(Se)):(De.expandByPoint(yi.min),De.expandByPoint(yi.max))}De.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Se.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(t,c),Se.add(ei)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new O,l[U]=new O;const c=new O,u=new O,d=new O,f=new Bt,p=new Bt,_=new Bt,S=new O,m=new O;function h(U,x,E){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,x),d.fromBufferAttribute(n,E),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,x),_.fromBufferAttribute(r,E),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),o[U].add(S),o[x].add(S),o[E].add(S),l[U].add(m),l[x].add(m),l[E].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let U=0,x=A.length;U<x;++U){const E=A[U],I=E.start,z=E.count;for(let k=I,X=I+z;k<X;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new O,T=new O,P=new O,C=new O;function b(U){P.fromBufferAttribute(s,U),C.copy(P);const x=o[U];M.copy(x),M.sub(P.multiplyScalar(P.dot(x))).normalize(),T.crossVectors(C,x);const I=T.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,I)}for(let U=0,x=A.length;U<x;++U){const E=A[U],I=E.start,z=E.count;for(let k=I,X=I+z;k<X;k+=3)b(t.getX(k+0)),b(t.getX(k+1)),b(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new Je(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ya=new he,wn=new Vl,Wi=new Xr,Aa=new O,Xi=new O,Yi=new O,Ki=new O,Bs=new O,qi=new O,Ra=new O,Zi=new O;class ut extends Me{constructor(t=new tn,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){qi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Bs.fromBufferAttribute(d,t),a?qi.addScaledVector(Bs,u):qi.addScaledVector(Bs.sub(e),u))}e.add(qi)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(r),wn.copy(t.ray).recast(t.near),!(Wi.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Wi,Aa)===null||wn.origin.distanceToSquared(Aa)>(t.far-t.near)**2))&&(ya.copy(r).invert(),wn.copy(t.ray).applyMatrix4(ya),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const m=f[_],h=a[m.materialIndex],A=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=A,P=M;T<P;T+=3){const C=o.getX(T),b=o.getX(T+1),U=o.getX(T+2);s=$i(this,h,t,n,c,u,d,C,b,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,h=S;m<h;m+=3){const A=o.getX(m),M=o.getX(m+1),T=o.getX(m+2);s=$i(this,a,t,n,c,u,d,A,M,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const m=f[_],h=a[m.materialIndex],A=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=A,P=M;T<P;T+=3){const C=T,b=T+1,U=T+2;s=$i(this,h,t,n,c,u,d,C,b,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,h=S;m<h;m+=3){const A=m,M=m+1,T=m+2;s=$i(this,a,t,n,c,u,d,A,M,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ql(i,t,e,n,s,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Mn,o),l===null)return null;Zi.copy(o),Zi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zi);return c<e.near||c>e.far?null:{distance:c,point:Zi.clone(),object:i}}function $i(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xi),i.getVertexPosition(l,Yi),i.getVertexPosition(c,Ki);const u=Ql(i,t,e,n,Xi,Yi,Ki,Ra);if(u){const d=new O;Ke.getBarycoord(Ra,Xi,Yi,Ki,d),s&&(u.uv=Ke.getInterpolatedAttribute(s,o,l,c,d,new Bt)),r&&(u.uv1=Ke.getInterpolatedAttribute(r,o,l,c,d,new Bt)),a&&(u.normal=Ke.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};Ke.getNormal(Xi,Yi,Ki,f.normal),u.face=f,u.barycoord=d}return u}class Vt extends tn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(d,2));function _(S,m,h,A,M,T,P,C,b,U,x){const E=T/b,I=P/U,z=T/2,k=P/2,X=C/2,q=b+1,W=U+1;let j=0,V=0;const rt=new O;for(let dt=0;dt<W;dt++){const Tt=dt*I-k;for(let Ot=0;Ot<q;Ot++){const te=Ot*E-z;rt[S]=te*A,rt[m]=Tt*M,rt[h]=X,c.push(rt.x,rt.y,rt.z),rt[S]=0,rt[m]=0,rt[h]=C>0?1:-1,u.push(rt.x,rt.y,rt.z),d.push(Ot/b),d.push(1-dt/U),j+=1}}for(let dt=0;dt<U;dt++)for(let Tt=0;Tt<b;Tt++){const Ot=f+Tt+q*dt,te=f+Tt+q*(dt+1),K=f+(Tt+1)+q*(dt+1),et=f+(Tt+1)+q*dt;l.push(Ot,te,et),l.push(te,K,et),V+=6}o.addGroup(p,V,x),p+=V,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=mi(i[e]);for(const s in n)t[s]=n[s]}return t}function tc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Co(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const ec={clone:mi,merge:Re};var nc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ic=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nc,this.fragmentShader=ic,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=tc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wo extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new O,ba=new Bt,Ca=new Bt;class Ye extends wo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,ba,Ca),e.subVectors(Ca,ba)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class sc extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ye(ni,ii,t,e);s.layers=this.layers,this.add(s);const r=new Ye(ni,ii,t,e);r.layers=this.layers,this.add(r);const a=new Ye(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new Ye(ni,ii,t,e);o.layers=this.layers,this.add(o);const l=new Ye(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new Ye(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Po extends be{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ui,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rc extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Po(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Tn});r.uniforms.tEquirect.value=e;const a=new ut(s,r),o=e.minFilter;return e.minFilter===kn&&(e.minFilter=Ue),new sc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class ee extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ac={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),h=this._getHandJoint(c,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ac)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class oc extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Gs=new O,lc=new O,cc=new Lt;class Un{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Gs.subVectors(n,e).cross(lc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cc.getNormalMatrix(t),s=this.coplanarPoint(Gs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Xr,ji=new O;class Yr{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],_=s[9],S=s[10],m=s[11],h=s[12],A=s[13],M=s[14],T=s[15];if(n[0].setComponents(l-r,f-c,m-p,T-h).normalize(),n[1].setComponents(l+r,f+c,m+p,T+h).normalize(),n[2].setComponents(l+a,f+u,m+_,T+A).normalize(),n[3].setComponents(l-a,f-u,m-_,T-A).normalize(),n[4].setComponents(l-o,f-d,m-S,T-M).normalize(),e===un)n[5].setComponents(l+o,f+d,m+S,T+M).normalize();else if(e===us)n[5].setComponents(o,d,S,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ji.x=s.normal.x>0?t.max.x:t.min.x,ji.y=s.normal.y>0?t.max.y:t.min.y,ji.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ji)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kr extends be{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Io extends be{constructor(t,e,n,s,r,a,o,l,c,u=oi){if(u!==oi&&u!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===oi&&(n=zn),n===void 0&&u===fi&&(n=di),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class me extends tn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],p=[];let _=0;const S=[],m=n/2;let h=0;A(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(p,2));function A(){const T=new O,P=new O;let C=0;const b=(e-t)/n;for(let U=0;U<=r;U++){const x=[],E=U/r,I=E*(e-t)+t;for(let z=0;z<=s;z++){const k=z/s,X=k*l+o,q=Math.sin(X),W=Math.cos(X);P.x=I*q,P.y=-E*n+m,P.z=I*W,d.push(P.x,P.y,P.z),T.set(q,b,W).normalize(),f.push(T.x,T.y,T.z),p.push(k,1-E),x.push(_++)}S.push(x)}for(let U=0;U<s;U++)for(let x=0;x<r;x++){const E=S[x][U],I=S[x+1][U],z=S[x+1][U+1],k=S[x][U+1];(t>0||x!==0)&&(u.push(E,I,k),C+=3),(e>0||x!==r-1)&&(u.push(I,z,k),C+=3)}c.addGroup(h,C,0),h+=C}function M(T){const P=_,C=new Bt,b=new O;let U=0;const x=T===!0?t:e,E=T===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),_++;const I=_;for(let z=0;z<=s;z++){const X=z/s*l+o,q=Math.cos(X),W=Math.sin(X);b.x=x*W,b.y=m*E,b.z=x*q,d.push(b.x,b.y,b.z),f.push(0,E,0),C.x=q*.5+.5,C.y=W*.5*E+.5,p.push(C.x,C.y),_++}for(let z=0;z<s;z++){const k=P+z,X=I+z;T===!0?u.push(X,X+1,k):u.push(X+1,X,k),U+=3}c.addGroup(h,U,T===!0?1:2),h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qr extends me{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new qr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vn extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=e/l,p=[],_=[],S=[],m=[];for(let h=0;h<u;h++){const A=h*f-a;for(let M=0;M<c;M++){const T=M*d-r;_.push(T,-A,0),S.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const M=A+c*h,T=A+c*(h+1),P=A+1+c*(h+1),C=A+1+c*h;p.push(M,T,C),p.push(T,P,C)}this.setIndex(p),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zr extends tn{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=t;const f=(e-t)/s,p=new O,_=new Bt;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const h=r+m/n*a;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}d+=f}for(let S=0;S<s;S++){const m=S*(n+1);for(let h=0;h<n;h++){const A=h+m,M=A,T=A+n+1,P=A+n+2,C=A+1;o.push(M,T,C),o.push(T,P,C)}}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gi extends tn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new O,f=new O,p=[],_=[],S=[],m=[];for(let h=0;h<=n;h++){const A=[],M=h/n;let T=0;h===0&&a===0?T=.5/e:h===n&&l===Math.PI&&(T=-.5/e);for(let P=0;P<=e;P++){const C=P/e;d.x=-t*Math.cos(s+C*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(s+C*r)*Math.sin(a+M*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),m.push(C+T,1-M),A.push(c++)}u.push(A)}for(let h=0;h<n;h++)for(let A=0;A<e;A++){const M=u[h][A+1],T=u[h][A],P=u[h+1][A],C=u[h+1][A+1];(h!==0||a>0)&&p.push(M,T,C),(h!==n-1||l<Math.PI)&&p.push(T,P,C)}this.setIndex(p),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nt extends Ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uc extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hc extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lo extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const zs=new he,wa=new O,Pa=new O;class dc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wa.setFromMatrixPosition(t.matrixWorld),e.position.copy(wa),Pa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pa),e.updateMatrixWorld(),zs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $r extends wo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class fc extends dc{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pc extends Lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new fc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mc extends Lo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _c extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class gc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ia(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ia();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ia(){return performance.now()}function La(i,t,e,n){const s=Sc(n);switch(e){case fo:return i*t;case mo:return i*t;case _o:return i*t*2;case go:return i*t/s.components*s.byteLength;case zr:return i*t/s.components*s.byteLength;case So:return i*t*2/s.components*s.byteLength;case Hr:return i*t*2/s.components*s.byteLength;case po:return i*t*3/s.components*s.byteLength;case qe:return i*t*4/s.components*s.byteLength;case Vr:return i*t*4/s.components*s.byteLength;case is:case ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rs:case as:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lr:case ur:return Math.max(i,16)*Math.max(t,8)/4;case or:case cr:return Math.max(i,8)*Math.max(t,8)/2;case hr:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _r:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Er:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ar:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case br:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case os:case Cr:case wr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vo:case Pr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ir:case Lr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sc(i){switch(i){case dn:case co:return{byteLength:1,components:1};case Ri:case uo:case bi:return{byteLength:2,components:1};case kr:case Gr:return{byteLength:2,components:4};case zn:case Br:case cn:return{byteLength:4,components:1};case ho:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Or}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Or);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Do(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vc(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,d[f]=S)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const S=d[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ec=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tc=`#ifdef USE_ALPHAHASH
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
#endif`,xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ac=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rc=`#ifdef USE_AOMAP
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
#endif`,bc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cc=`#ifdef USE_BATCHING
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
#endif`,wc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ic=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dc=`#ifdef USE_IRIDESCENCE
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
#endif`,Uc=`#ifdef USE_BUMPMAP
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
#endif`,Nc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vc=`#define PI 3.141592653589793
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
} // validated`,Wc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xc=`vec3 transformedNormal = objectNormal;
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
#endif`,Yc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$c="gl_FragColor = linearToOutputTexel( gl_FragColor );",jc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jc=`#ifdef USE_ENVMAP
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
#endif`,Qc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ou=`#ifdef USE_GRADIENTMAP
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
}`,lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hu=`uniform bool receiveShadow;
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
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gu=`PhysicalMaterial material;
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
#endif`,Su=`struct PhysicalMaterial {
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
}`,vu=`
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wu=`#if defined( USE_POINTS_UV )
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
#endif`,Pu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Du=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hu=`#ifdef USE_NORMALMAP
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
#endif`,Vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ju=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,th=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ih=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sh=`float getShadowMask() {
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
}`,rh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ah=`#ifdef USE_SKINNING
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
#endif`,oh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lh=`#ifdef USE_SKINNING
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
#endif`,ch=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fh=`#ifdef USE_TRANSMISSION
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
#endif`,ph=`#ifdef USE_TRANSMISSION
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
#endif`,mh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eh=`uniform sampler2D t2D;
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
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ah=`#include <common>
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
}`,Rh=`#if DEPTH_PACKING == 3200
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
}`,bh=`#define DISTANCE
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
}`,Ch=`#define DISTANCE
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
}`,wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ph=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`uniform float scale;
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
}`,Lh=`uniform vec3 diffuse;
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
}`,Dh=`#include <common>
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
}`,Uh=`uniform vec3 diffuse;
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
}`,Nh=`#define LAMBERT
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
}`,Oh=`#define LAMBERT
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
}`,Fh=`#define MATCAP
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
}`,Bh=`#define MATCAP
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
}`,kh=`#define NORMAL
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
}`,Gh=`#define NORMAL
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
}`,zh=`#define PHONG
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
}`,Hh=`#define PHONG
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
}`,Vh=`#define STANDARD
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
}`,Wh=`#define STANDARD
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
}`,Xh=`#define TOON
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
}`,Yh=`#define TOON
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
}`,Kh=`uniform float size;
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
}`,qh=`uniform vec3 diffuse;
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
}`,Zh=`#include <common>
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
}`,$h=`uniform vec3 color;
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
}`,jh=`uniform float rotation;
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
}`,Jh=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Ec,alphahash_pars_fragment:Tc,alphamap_fragment:xc,alphamap_pars_fragment:Mc,alphatest_fragment:yc,alphatest_pars_fragment:Ac,aomap_fragment:Rc,aomap_pars_fragment:bc,batching_pars_vertex:Cc,batching_vertex:wc,begin_vertex:Pc,beginnormal_vertex:Ic,bsdfs:Lc,iridescence_fragment:Dc,bumpmap_pars_fragment:Uc,clipping_planes_fragment:Nc,clipping_planes_pars_fragment:Oc,clipping_planes_pars_vertex:Fc,clipping_planes_vertex:Bc,color_fragment:kc,color_pars_fragment:Gc,color_pars_vertex:zc,color_vertex:Hc,common:Vc,cube_uv_reflection_fragment:Wc,defaultnormal_vertex:Xc,displacementmap_pars_vertex:Yc,displacementmap_vertex:Kc,emissivemap_fragment:qc,emissivemap_pars_fragment:Zc,colorspace_fragment:$c,colorspace_pars_fragment:jc,envmap_fragment:Jc,envmap_common_pars_fragment:Qc,envmap_pars_fragment:tu,envmap_pars_vertex:eu,envmap_physical_pars_fragment:du,envmap_vertex:nu,fog_vertex:iu,fog_pars_vertex:su,fog_fragment:ru,fog_pars_fragment:au,gradientmap_pars_fragment:ou,lightmap_pars_fragment:lu,lights_lambert_fragment:cu,lights_lambert_pars_fragment:uu,lights_pars_begin:hu,lights_toon_fragment:fu,lights_toon_pars_fragment:pu,lights_phong_fragment:mu,lights_phong_pars_fragment:_u,lights_physical_fragment:gu,lights_physical_pars_fragment:Su,lights_fragment_begin:vu,lights_fragment_maps:Eu,lights_fragment_end:Tu,logdepthbuf_fragment:xu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:yu,logdepthbuf_vertex:Au,map_fragment:Ru,map_pars_fragment:bu,map_particle_fragment:Cu,map_particle_pars_fragment:wu,metalnessmap_fragment:Pu,metalnessmap_pars_fragment:Iu,morphinstance_vertex:Lu,morphcolor_vertex:Du,morphnormal_vertex:Uu,morphtarget_pars_vertex:Nu,morphtarget_vertex:Ou,normal_fragment_begin:Fu,normal_fragment_maps:Bu,normal_pars_fragment:ku,normal_pars_vertex:Gu,normal_vertex:zu,normalmap_pars_fragment:Hu,clearcoat_normal_fragment_begin:Vu,clearcoat_normal_fragment_maps:Wu,clearcoat_pars_fragment:Xu,iridescence_pars_fragment:Yu,opaque_fragment:Ku,packing:qu,premultiplied_alpha_fragment:Zu,project_vertex:$u,dithering_fragment:ju,dithering_pars_fragment:Ju,roughnessmap_fragment:Qu,roughnessmap_pars_fragment:th,shadowmap_pars_fragment:eh,shadowmap_pars_vertex:nh,shadowmap_vertex:ih,shadowmask_pars_fragment:sh,skinbase_vertex:rh,skinning_pars_vertex:ah,skinning_vertex:oh,skinnormal_vertex:lh,specularmap_fragment:ch,specularmap_pars_fragment:uh,tonemapping_fragment:hh,tonemapping_pars_fragment:dh,transmission_fragment:fh,transmission_pars_fragment:ph,uv_pars_fragment:mh,uv_pars_vertex:_h,uv_vertex:gh,worldpos_vertex:Sh,background_vert:vh,background_frag:Eh,backgroundCube_vert:Th,backgroundCube_frag:xh,cube_vert:Mh,cube_frag:yh,depth_vert:Ah,depth_frag:Rh,distanceRGBA_vert:bh,distanceRGBA_frag:Ch,equirect_vert:wh,equirect_frag:Ph,linedashed_vert:Ih,linedashed_frag:Lh,meshbasic_vert:Dh,meshbasic_frag:Uh,meshlambert_vert:Nh,meshlambert_frag:Oh,meshmatcap_vert:Fh,meshmatcap_frag:Bh,meshnormal_vert:kh,meshnormal_frag:Gh,meshphong_vert:zh,meshphong_frag:Hh,meshphysical_vert:Vh,meshphysical_frag:Wh,meshtoon_vert:Xh,meshtoon_frag:Yh,points_vert:Kh,points_frag:qh,shadow_vert:Zh,shadow_frag:$h,sprite_vert:jh,sprite_frag:Jh},nt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},$e={basic:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Re([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Re([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Re([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Re([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Re([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Re([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Re([nt.common,nt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Re([nt.lights,nt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};$e.physical={uniforms:Re([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Ji={r:0,b:0,g:0},In=new Qe,Qh=new he;function td(i,t,e,n,s,r,a){const o=new qt(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function _(M){let T=M.isScene===!0?M.background:null;return T&&T.isTexture&&(T=(M.backgroundBlurriness>0?e:t).get(T)),T}function S(M){let T=!1;const P=_(M);P===null?h(o,l):P&&P.isColor&&(h(P,1),T=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,T){const P=_(T);P&&(P.isCubeTexture||P.mapping===ds)?(u===void 0&&(u=new ut(new Vt(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:mi($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),In.copy(T.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qh.makeRotationFromEuler(In)),u.material.toneMapped=Kt.getTransfer(P.colorSpace)!==Qt,(d!==P||f!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=P,f=P.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new ut(new Vn(2,2),new yn({name:"BackgroundMaterial",uniforms:mi($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(P.colorSpace)!==Qt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=P,f=P.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function h(M,T){M.getRGB(Ji,Co(i)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,T,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,h(o,l)},render:S,addToRenderList:m,dispose:A}}function ed(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(E,I,z,k,X){let q=!1;const W=d(k,z,I);r!==W&&(r=W,c(r.object)),q=p(E,k,z,X),q&&_(E,k,z,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,T(E,I,z,k),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function d(E,I,z){const k=z.wireframe===!0;let X=n[E.id];X===void 0&&(X={},n[E.id]=X);let q=X[I.id];q===void 0&&(q={},X[I.id]=q);let W=q[k];return W===void 0&&(W=f(l()),q[k]=W),W}function f(E){const I=[],z=[],k=[];for(let X=0;X<e;X++)I[X]=0,z[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:k,object:E,attributes:{},index:null}}function p(E,I,z,k){const X=r.attributes,q=I.attributes;let W=0;const j=z.getAttributes();for(const V in j)if(j[V].location>=0){const dt=X[V];let Tt=q[V];if(Tt===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(Tt=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(Tt=E.instanceColor)),dt===void 0||dt.attribute!==Tt||Tt&&dt.data!==Tt.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function _(E,I,z,k){const X={},q=I.attributes;let W=0;const j=z.getAttributes();for(const V in j)if(j[V].location>=0){let dt=q[V];dt===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(dt=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(dt=E.instanceColor));const Tt={};Tt.attribute=dt,dt&&dt.data&&(Tt.data=dt.data),X[V]=Tt,W++}r.attributes=X,r.attributesNum=W,r.index=k}function S(){const E=r.newAttributes;for(let I=0,z=E.length;I<z;I++)E[I]=0}function m(E){h(E,0)}function h(E,I){const z=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;z[E]=1,k[E]===0&&(i.enableVertexAttribArray(E),k[E]=1),X[E]!==I&&(i.vertexAttribDivisor(E,I),X[E]=I)}function A(){const E=r.newAttributes,I=r.enabledAttributes;for(let z=0,k=I.length;z<k;z++)I[z]!==E[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function M(E,I,z,k,X,q,W){W===!0?i.vertexAttribIPointer(E,I,z,X,q):i.vertexAttribPointer(E,I,z,k,X,q)}function T(E,I,z,k){S();const X=k.attributes,q=z.getAttributes(),W=I.defaultAttributeValues;for(const j in q){const V=q[j];if(V.location>=0){let rt=X[j];if(rt===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(rt=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(rt=E.instanceColor)),rt!==void 0){const dt=rt.normalized,Tt=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;const te=Ot.buffer,K=Ot.type,et=Ot.bytesPerElement,gt=K===i.INT||K===i.UNSIGNED_INT||rt.gpuType===Br;if(rt.isInterleavedBufferAttribute){const at=rt.data,At=at.stride,Zt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let bt=0;bt<V.locationSize;bt++)h(V.location+bt,at.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let bt=0;bt<V.locationSize;bt++)m(V.location+bt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let bt=0;bt<V.locationSize;bt++)M(V.location+bt,Tt/V.locationSize,K,dt,At*et,(Zt+Tt/V.locationSize*bt)*et,gt)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)h(V.location+at,rt.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);i.bindBuffer(i.ARRAY_BUFFER,te);for(let at=0;at<V.locationSize;at++)M(V.location+at,Tt/V.locationSize,K,dt,Tt*et,Tt/V.locationSize*at*et,gt)}}else if(W!==void 0){const dt=W[j];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(V.location,dt);break;case 3:i.vertexAttrib3fv(V.location,dt);break;case 4:i.vertexAttrib4fv(V.location,dt);break;default:i.vertexAttrib1fv(V.location,dt)}}}}A()}function P(){U();for(const E in n){const I=n[E];for(const z in I){const k=I[z];for(const X in k)u(k[X].object),delete k[X];delete I[z]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const z in I){const k=I[z];for(const X in k)u(k[X].object),delete k[X];delete I[z]}delete n[E.id]}function b(E){for(const I in n){const z=n[I];if(z[E.id]===void 0)continue;const k=z[E.id];for(const X in k)u(k[X].object),delete k[X];delete z[E.id]}}function U(){x(),a=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:x,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function nd(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];e.update(p,n,1)}function l(c,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let S=0;S<d;S++)_+=u[S]*f[S];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function id(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==qe&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const U=b===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==dn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==cn&&!U)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:A,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:P,maxSamples:C}}function sd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Un,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const A=r?0:n,M=A*4;let T=h.clippingState||null;l.value=T,T=u(_,f,M,p);for(let P=0;P!==M;++P)T[P]=e[P];h.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,p,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const h=p+S*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,T=p;M!==S;++M,T+=4)a.copy(d[M]).applyMatrix4(A,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function rd(i){let t=new WeakMap;function e(a,o){return o===ir?a.mapping=ui:o===sr&&(a.mapping=hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ir||o===sr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ri=4,Da=[.125,.215,.35,.446,.526,.582],Fn=20,Hs=new $r,Ua=new qt;let Vs=null,Ws=0,Xs=0,Ys=!1;const Nn=(1+Math.sqrt(5))/2,si=1/Nn,Na=[new O(-Nn,si,0),new O(Nn,si,0),new O(-si,0,Nn),new O(si,0,Nn),new O(0,Nn,-si),new O(0,Nn,si),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],ad=new O;class Oa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=ad}=r;Vs=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vs,Ws,Xs),this._renderer.xr.enabled=Ys,t.scissorTest=!1,Qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vs=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:bi,format:qe,colorSpace:pi,depthBuffer:!1},s=Fa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=od(r)),this._blurMaterial=ld(r,t,e)}return s}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Hs)}_sceneToCubeUV(t,e,n,s,r){const l=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Ua),d.toneMapping=xn,d.autoClear=!1;const _=new Ge({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),S=new ut(new Vt,_);let m=!1;const h=t.background;h?h.isColor&&(_.color.copy(h),t.background=null,m=!0):(_.color.copy(Ua),m=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const T=this._cubeSize;Qi(s,M*T,A>2?T:0,T,T),d.setRenderTarget(s),m&&d.render(S,l),d.render(t,l)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ui||t.mapping===hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ba());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Hs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Na[(s-r-1)%Na.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ut(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),S=r/_,m=isFinite(r)?1+Math.floor(u*S):Fn;m>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);const h=[];let A=0;for(let b=0;b<Fn;++b){const U=b/S,x=Math.exp(-U*U/2);h.push(x),b===0?A+=x:b<m&&(A+=2*x)}for(let b=0;b<h.length;b++)h[b]=h[b]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const T=this._sizeLods[s],P=3*T*(s>M-ri?s-M+ri:0),C=4*(this._cubeSize-T);Qi(e,P,C,3*T,2*T),l.setRenderTarget(e),l.render(d,Hs)}}function od(i){const t=[],e=[],n=[];let s=i;const r=i-ri+1+Da.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ri?l=Da[a-i+ri-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,S=3,m=2,h=1,A=new Float32Array(S*_*p),M=new Float32Array(m*_*p),T=new Float32Array(h*_*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,U=C>2?0:-1,x=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];A.set(x,S*_*C),M.set(f,m*_*C);const E=[C,C,C,C,C,C];T.set(E,h*_*C)}const P=new tn;P.setAttribute("position",new Je(A,S)),P.setAttribute("uv",new Je(M,m)),P.setAttribute("faceIndex",new Je(T,h)),t.push(P),s>ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fa(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ld(i,t,e){const n=new Float32Array(Fn),s=new O(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jr(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ba(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jr(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ka(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function jr(){return`

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
	`}function cd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ir||l===sr,u=l===ui||l===hi;if(c||u){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Oa(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Oa(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ud(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Dn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hd(i,t,e,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,_=d.attributes.position;let S=0;if(p!==null){const A=p.array;S=p.version;for(let M=0,T=A.length;M<T;M+=3){const P=A[M+0],C=A[M+1],b=A[M+2];f.push(P,C,C,b,b,P)}}else if(_!==void 0){const A=_.array;S=_.version;for(let M=0,T=A.length/3-1;M<T;M+=3){const P=M+0,C=M+1,b=M+2;f.push(P,C,C,b,b,P)}}else return;const m=new(xo(f)?bo:Ro)(f,1);m.version=S;const h=r.get(d);h&&t.remove(h),r.set(d,m)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function dd(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*a,_),e.update(p,n,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,n,1)}function d(f,p,_,S){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],S[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,S,0,_);let h=0;for(let A=0;A<_;A++)h+=p[A]*S[A];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pd(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let E=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),S===!0&&(T=2),m===!0&&(T=3);let P=o.attributes.position.count*T,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const b=new Float32Array(P*C*4*d),U=new Mo(b,P,C,d);U.type=cn,U.needsUpdate=!0;const x=T*4;for(let I=0;I<d;I++){const z=h[I],k=A[I],X=M[I],q=P*C*4*I;for(let W=0;W<z.count;W++){const j=W*x;_===!0&&(s.fromBufferAttribute(z,W),b[q+j+0]=s.x,b[q+j+1]=s.y,b[q+j+2]=s.z,b[q+j+3]=0),S===!0&&(s.fromBufferAttribute(k,W),b[q+j+4]=s.x,b[q+j+5]=s.y,b[q+j+6]=s.z,b[q+j+7]=0),m===!0&&(s.fromBufferAttribute(X,W),b[q+j+8]=s.x,b[q+j+9]=s.y,b[q+j+10]=s.z,b[q+j+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:U,size:new Bt(P,C)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function md(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Uo=new be,Ga=new Io(1,1),No=new Mo,Oo=new zl,Fo=new Po,za=[],Ha=[],Va=new Float32Array(16),Wa=new Float32Array(9),Xa=new Float32Array(4);function Si(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=za[s];if(r===void 0&&(r=new Float32Array(s),za[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fs(i,t){let e=Ha[t];e===void 0&&(e=new Int32Array(t),Ha[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Ed(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Xa.set(n),i.uniformMatrix2fv(this.addr,!1,Xa),ge(e,n)}}function Td(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Wa.set(n),i.uniformMatrix3fv(this.addr,!1,Wa),ge(e,n)}}function xd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,n))return;Va.set(n),i.uniformMatrix4fv(this.addr,!1,Va),ge(e,n)}}function Md(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Rd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function bd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function Pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Id(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ga.compareFunction=To,r=Ga):r=Uo,e.setTexture2D(t||r,s)}function Ld(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oo,s)}function Dd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fo,s)}function Ud(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||No,s)}function Nd(i){switch(i){case 5126:return _d;case 35664:return gd;case 35665:return Sd;case 35666:return vd;case 35674:return Ed;case 35675:return Td;case 35676:return xd;case 5124:case 35670:return Md;case 35667:case 35671:return yd;case 35668:case 35672:return Ad;case 35669:case 35673:return Rd;case 5125:return bd;case 36294:return Cd;case 36295:return wd;case 36296:return Pd;case 35678:case 36198:case 36298:case 36306:case 35682:return Id;case 35679:case 36299:case 36307:return Ld;case 35680:case 36300:case 36308:case 36293:return Dd;case 36289:case 36303:case 36311:case 36292:return Ud}}function Od(i,t){i.uniform1fv(this.addr,t)}function Fd(i,t){const e=Si(t,this.size,2);i.uniform2fv(this.addr,e)}function Bd(i,t){const e=Si(t,this.size,3);i.uniform3fv(this.addr,e)}function kd(i,t){const e=Si(t,this.size,4);i.uniform4fv(this.addr,e)}function Gd(i,t){const e=Si(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zd(i,t){const e=Si(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hd(i,t){const e=Si(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vd(i,t){i.uniform1iv(this.addr,t)}function Wd(i,t){i.uniform2iv(this.addr,t)}function Xd(i,t){i.uniform3iv(this.addr,t)}function Yd(i,t){i.uniform4iv(this.addr,t)}function Kd(i,t){i.uniform1uiv(this.addr,t)}function qd(i,t){i.uniform2uiv(this.addr,t)}function Zd(i,t){i.uniform3uiv(this.addr,t)}function $d(i,t){i.uniform4uiv(this.addr,t)}function jd(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Uo,r[a])}function Jd(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Oo,r[a])}function Qd(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fo,r[a])}function tf(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||No,r[a])}function ef(i){switch(i){case 5126:return Od;case 35664:return Fd;case 35665:return Bd;case 35666:return kd;case 35674:return Gd;case 35675:return zd;case 35676:return Hd;case 5124:case 35670:return Vd;case 35667:case 35671:return Wd;case 35668:case 35672:return Xd;case 35669:case 35673:return Yd;case 5125:return Kd;case 36294:return qd;case 36295:return Zd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return tf}}class nf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nd(e.type)}}class sf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ef(e.type)}}class rf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function Ya(i,t){i.seq.push(t),i.map[t.id]=t}function af(i,t,e){const n=i.name,s=n.length;for(Ks.lastIndex=0;;){const r=Ks.exec(n),a=Ks.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ya(e,c===void 0?new nf(o,i,t):new sf(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new rf(o),Ya(e,d)),e=d}}}class ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);af(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ka(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const of=37297;let lf=0;function cf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const qa=new Lt;function uf(i){Kt._getMatrix(qa,Kt.workingColorSpace,i);const t=`mat3( ${qa.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case cs:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Za(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cf(i.getShaderSource(t),a)}else return s}function hf(i,t){const e=uf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function df(i,t){let e;switch(t){case fl:e="Linear";break;case pl:e="Reinhard";break;case ml:e="Cineon";break;case _l:e="ACESFilmic";break;case Sl:e="AgX";break;case vl:e="Neutral";break;case gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ts=new O;function ff(){Kt.getLuminanceCoefficients(ts);const i=ts.x.toFixed(4),t=ts.y.toFixed(4),e=ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ai).join(`
`)}function mf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _f(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ai(i){return i!==""}function $a(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ja(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ur(i){return i.replace(gf,vf)}const Sf=new Map;function vf(i,t){let e=Ut[t];if(e===void 0){const n=Sf.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ur(e)}const Ef=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(i){return i.replace(Ef,Tf)}function Tf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qa(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function xf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Mf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case hi:t="ENVMAP_TYPE_CUBE";break;case ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:t="ENVMAP_MODE_REFRACTION";break}return t}function Af(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fr:t="ENVMAP_BLENDING_MULTIPLY";break;case hl:t="ENVMAP_BLENDING_MIX";break;case dl:t="ENVMAP_BLENDING_ADD";break}return t}function Rf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bf(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=xf(e),c=Mf(e),u=yf(e),d=Af(e),f=Rf(e),p=pf(e),_=mf(r),S=s.createProgram();let m,h,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ai).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ai).join(`
`),h.length>0&&(h+=`
`)):(m=[Qa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),h=[Qa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==xn?df("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,hf("linearToOutputTexel",e.outputColorSpace),ff(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ai).join(`
`)),a=Ur(a),a=$a(a,e),a=ja(a,e),o=Ur(o),o=$a(o,e),o=ja(o,e),a=Ja(a),o=Ja(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=A+m+a,T=A+h+o,P=Ka(s,s.VERTEX_SHADER,M),C=Ka(s,s.FRAGMENT_SHADER,T);s.attachShader(S,P),s.attachShader(S,C),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function b(I){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(S).trim(),k=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(C).trim();let q=!0,W=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,P,C);else{const j=Za(s,P,"vertex"),V=Za(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+j+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||X==="")&&(W=!1);W&&(I.diagnostics={runnable:q,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:h}})}s.deleteShader(P),s.deleteShader(C),U=new ls(s,S),x=_f(s,S)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(S,of)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lf++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=C,this}let Cf=0;class wf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Pf(t),e.set(t,n)),n}}class Pf{constructor(t){this.id=Cf++,this.code=t,this.usedTimes=0}}function If(i,t,e,n,s,r,a){const o=new yo,l=new wf,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,I,z,k){const X=z.fog,q=k.geometry,W=x.isMeshStandardMaterial?z.environment:null,j=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),V=j&&j.mapping===ds?j.image.height:null,rt=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Tt=dt!==void 0?dt.length:0;let Ot=0;q.morphAttributes.position!==void 0&&(Ot=1),q.morphAttributes.normal!==void 0&&(Ot=2),q.morphAttributes.color!==void 0&&(Ot=3);let te,K,et,gt;if(rt){const Jt=$e[rt];te=Jt.vertexShader,K=Jt.fragmentShader}else te=x.vertexShader,K=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),gt=l.getFragmentShaderID(x);const at=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Zt=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,de=!!x.map,oe=!!x.matcap,kt=!!j,w=!!x.aoMap,Ne=!!x.lightMap,Gt=!!x.bumpMap,zt=!!x.normalMap,xt=!!x.displacementMap,ie=!!x.emissiveMap,Et=!!x.metalnessMap,y=!!x.roughnessMap,g=x.anisotropy>0,F=x.clearcoat>0,Z=x.dispersion>0,J=x.iridescence>0,Y=x.sheen>0,St=x.transmission>0,ot=g&&!!x.anisotropyMap,ft=F&&!!x.clearcoatMap,Wt=F&&!!x.clearcoatNormalMap,tt=F&&!!x.clearcoatRoughnessMap,pt=J&&!!x.iridescenceMap,Rt=J&&!!x.iridescenceThicknessMap,Ct=Y&&!!x.sheenColorMap,mt=Y&&!!x.sheenRoughnessMap,Ht=!!x.specularMap,Dt=!!x.specularColorMap,ne=!!x.specularIntensityMap,L=St&&!!x.transmissionMap,it=St&&!!x.thicknessMap,H=!!x.gradientMap,$=!!x.alphaMap,ct=x.alphaTest>0,lt=!!x.alphaHash,It=!!x.extensions;let le=xn;x.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(le=i.toneMapping);const Ee={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:te,fragmentShader:K,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&k.instanceColor!==null,instancingMorph:Zt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:pi,alphaToCoverage:!!x.alphaToCoverage,map:de,matcap:oe,envMap:kt,envMapMode:kt&&j.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:Ne,bumpMap:Gt,normalMap:zt,displacementMap:f&&xt,emissiveMap:ie,normalMapObjectSpace:zt&&x.normalMapType===Ml,normalMapTangentSpace:zt&&x.normalMapType===Eo,metalnessMap:Et,roughnessMap:y,anisotropy:g,anisotropyMap:ot,clearcoat:F,clearcoatMap:ft,clearcoatNormalMap:Wt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Rt,sheen:Y,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Ht,specularColorMap:Dt,specularIntensityMap:ne,transmission:St,transmissionMap:L,thicknessMap:it,gradientMap:H,opaque:x.transparent===!1&&x.blending===ai&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:lt,combine:x.combine,mapUv:de&&S(x.map.channel),aoMapUv:w&&S(x.aoMap.channel),lightMapUv:Ne&&S(x.lightMap.channel),bumpMapUv:Gt&&S(x.bumpMap.channel),normalMapUv:zt&&S(x.normalMap.channel),displacementMapUv:xt&&S(x.displacementMap.channel),emissiveMapUv:ie&&S(x.emissiveMap.channel),metalnessMapUv:Et&&S(x.metalnessMap.channel),roughnessMapUv:y&&S(x.roughnessMap.channel),anisotropyMapUv:ot&&S(x.anisotropyMap.channel),clearcoatMapUv:ft&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:mt&&S(x.sheenRoughnessMap.channel),specularMapUv:Ht&&S(x.specularMap.channel),specularColorMapUv:Dt&&S(x.specularColorMap.channel),specularIntensityMapUv:ne&&S(x.specularIntensityMap.channel),transmissionMapUv:L&&S(x.transmissionMap.channel),thicknessMapUv:it&&S(x.thicknessMap.channel),alphaMapUv:$&&S(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(zt||g),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(de||$),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:de&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===Qt,decodeVideoTextureEmissive:ie&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===Qt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===je,flipSided:x.side===Pe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:It&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&x.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function h(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(A(E,x),M(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function A(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),x.push(o.mask)}function T(x){const E=_[x.type];let I;if(E){const z=$e[E];I=ec.clone(z.uniforms)}else I=x.uniforms;return I}function P(x,E){let I;for(let z=0,k=u.length;z<k;z++){const X=u[z];if(X.cacheKey===E){I=X,++I.usedTimes;break}}return I===void 0&&(I=new bf(i,E,x,r),u.push(I)),I}function C(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function b(x){l.remove(x)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:T,acquireProgram:P,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:U}}function Lf(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Df(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function to(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,p,_,S,m){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:S,group:m},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=S,h.group=m),t++,h}function o(d,f,p,_,S,m){const h=a(d,f,p,_,S,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(d,f,p,_,S,m){const h=a(d,f,p,_,S,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||Df),n.length>1&&n.sort(f||to),s.length>1&&s.sort(f||to)}function u(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Uf(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new eo,i.set(n,[a])):s>=r.length?(a=new eo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Nf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new qt};break;case"SpotLight":e={position:new O,direction:new O,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Of(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ff=0;function Bf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kf(i){const t=new Nf,e=Of(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new he,a=new he;function o(c){let u=0,d=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,_=0,S=0,m=0,h=0,A=0,M=0,T=0,P=0,C=0,b=0;c.sort(Bf);for(let x=0,E=c.length;x<E;x++){const I=c[x],z=I.color,k=I.intensity,X=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*k,d+=z.g*k,f+=z.b*k;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],k);b++}else if(I.isDirectionalLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,V=e.get(I);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=I.shadow.matrix,A++}n.directional[p]=W,p++}else if(I.isSpotLight){const W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(k),W.distance=X,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[S]=W;const j=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,j.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[S]=j.matrix,I.castShadow){const V=e.get(I);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[S]=V,n.spotShadowMap[S]=q,T++}S++}else if(I.isRectAreaLight){const W=t.get(I);W.color.copy(z).multiplyScalar(k),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const j=I.shadow,V=e.get(I);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=I.shadow.matrix,M++}n.point[_]=W,_++}else if(I.isHemisphereLight){const W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(k),W.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[h]=W,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==S||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==A||U.numPointShadows!==M||U.numSpotShadows!==T||U.numSpotMaps!==P||U.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,U.directionalLength=p,U.pointLength=_,U.spotLength=S,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=A,U.numPointShadows=M,U.numSpotShadows=T,U.numSpotMaps=P,U.numLightProbes=b,n.version=Ff++)}function l(c,u){let d=0,f=0,p=0,_=0,S=0;const m=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const M=c[h];if(M.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(M.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const T=n.hemi[S];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:n}}function no(i){const t=new kf(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Gf(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new no(i),t.set(s,[o])):r>=a.length?(o=new no(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const zf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hf=`uniform sampler2D shadow_pass;
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
}`;function Vf(i,t,e){let n=new Yr;const s=new Bt,r=new Bt,a=new ue,o=new uc({depthPacking:xl}),l=new hc,c={},u=e.maxTextureSize,d={[Mn]:Pe,[Pe]:Mn,[je]:je},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:zf,fragmentShader:Hf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new tn;_.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ut(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let h=this.type;this.render=function(C,b,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const x=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Tn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=h!==ln&&this.type===ln,X=h===ln&&this.type!==ln;for(let q=0,W=C.length;q<W;q++){const j=C[q],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const rt=V.getFrameExtents();if(s.multiply(rt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,V.mapSize.y=r.y)),V.map===null||k===!0||X===!0){const Tt=this.type!==ln?{minFilter:Ze,magFilter:Ze}:{};V.map!==null&&V.map.dispose(),V.map=new Hn(s.x,s.y,Tt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const dt=V.getViewportCount();for(let Tt=0;Tt<dt;Tt++){const Ot=V.getViewport(Tt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),z.viewport(a),V.updateMatrices(j,Tt),n=V.getFrustum(),T(b,U,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===ln&&A(V,U),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(x,E,I)};function A(C,b){const U=t.update(S);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Hn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,U,f,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,U,p,S,null)}function M(C,b,U,x){let E=null;const I=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)E=I;else if(E=U.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=E.uuid,k=b.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let q=X[k];q===void 0&&(q=E.clone(),X[k]=q,b.addEventListener("dispose",P)),E=q}if(E.visible=b.visible,E.wireframe=b.wireframe,x===ln?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:d[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=i.properties.get(E);z.light=U}return E}function T(C,b,U,x,E){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===ln)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const k=t.update(C),X=C.material;if(Array.isArray(X)){const q=k.groups;for(let W=0,j=q.length;W<j;W++){const V=q[W],rt=X[V.materialIndex];if(rt&&rt.visible){const dt=M(C,rt,x,E);C.onBeforeShadow(i,C,b,U,k,dt,V),i.renderBufferDirect(U,null,k,dt,C,V),C.onAfterShadow(i,C,b,U,k,dt,V)}}}else if(X.visible){const q=M(C,X,x,E);C.onBeforeShadow(i,C,b,U,k,q,null),i.renderBufferDirect(U,null,k,q,C,null),C.onAfterShadow(i,C,b,U,k,q,null)}}const z=C.children;for(let k=0,X=z.length;k<X;k++)T(z[k],b,U,x,E)}function P(C){C.target.removeEventListener("dispose",P);for(const U in c){const x=c[U],E=C.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}const Wf={[$s]:js,[Js]:er,[Qs]:nr,[ci]:tr,[js]:$s,[er]:Js,[nr]:Qs,[tr]:ci};function Xf(i,t){function e(){let L=!1;const it=new ue;let H=null;const $=new ue(0,0,0,0);return{setMask:function(ct){H!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),H=ct)},setLocked:function(ct){L=ct},setClear:function(ct,lt,It,le,Ee){Ee===!0&&(ct*=le,lt*=le,It*=le),it.set(ct,lt,It,le),$.equals(it)===!1&&(i.clearColor(ct,lt,It,le),$.copy(it))},reset:function(){L=!1,H=null,$.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,H=null,$=null,ct=null;return{setReversed:function(lt){if(it!==lt){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const le=ct;ct=null,this.setClear(le)}it=lt},getReversed:function(){return it},setTest:function(lt){lt?at(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(lt){H!==lt&&!L&&(i.depthMask(lt),H=lt)},setFunc:function(lt){if(it&&(lt=Wf[lt]),$!==lt){switch(lt){case $s:i.depthFunc(i.NEVER);break;case js:i.depthFunc(i.ALWAYS);break;case Js:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case Qs:i.depthFunc(i.EQUAL);break;case tr:i.depthFunc(i.GEQUAL);break;case er:i.depthFunc(i.GREATER);break;case nr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=lt}},setLocked:function(lt){L=lt},setClear:function(lt){ct!==lt&&(it&&(lt=1-lt),i.clearDepth(lt),ct=lt)},reset:function(){L=!1,H=null,$=null,ct=null,it=!1}}}function s(){let L=!1,it=null,H=null,$=null,ct=null,lt=null,It=null,le=null,Ee=null;return{setTest:function(Jt){L||(Jt?at(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!L&&(i.stencilMask(Jt),it=Jt)},setFunc:function(Jt,ze,en){(H!==Jt||$!==ze||ct!==en)&&(i.stencilFunc(Jt,ze,en),H=Jt,$=ze,ct=en)},setOp:function(Jt,ze,en){(lt!==Jt||It!==ze||le!==en)&&(i.stencilOp(Jt,ze,en),lt=Jt,It=ze,le=en)},setLocked:function(Jt){L=Jt},setClear:function(Jt){Ee!==Jt&&(i.clearStencil(Jt),Ee=Jt)},reset:function(){L=!1,it=null,H=null,$=null,ct=null,lt=null,It=null,le=null,Ee=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],_=null,S=!1,m=null,h=null,A=null,M=null,T=null,P=null,C=null,b=new qt(0,0,0),U=0,x=!1,E=null,I=null,z=null,k=null,X=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=j>=2);let rt=null,dt={};const Tt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),te=new ue().fromArray(Tt),K=new ue().fromArray(Ot);function et(L,it,H,$){const ct=new Uint8Array(4),lt=i.createTexture();i.bindTexture(L,lt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<H;It++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return lt}const gt={};gt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(ci),Gt(!1),zt(ra),at(i.CULL_FACE),w(Tn);function at(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function At(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Zt(L,it){return d[L]!==it?(i.bindFramebuffer(L,it),d[L]=it,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function bt(L,it){let H=p,$=!1;if(L){H=f.get(it),H===void 0&&(H=[],f.set(it,H));const ct=L.textures;if(H.length!==ct.length||H[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,It=ct.length;lt<It;lt++)H[lt]=i.COLOR_ATTACHMENT0+lt;H.length=ct.length,$=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,$=!0);$&&i.drawBuffers(H)}function de(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const oe={[On]:i.FUNC_ADD,[qo]:i.FUNC_SUBTRACT,[Zo]:i.FUNC_REVERSE_SUBTRACT};oe[$o]=i.MIN,oe[jo]=i.MAX;const kt={[Jo]:i.ZERO,[Qo]:i.ONE,[tl]:i.SRC_COLOR,[qs]:i.SRC_ALPHA,[al]:i.SRC_ALPHA_SATURATE,[sl]:i.DST_COLOR,[nl]:i.DST_ALPHA,[el]:i.ONE_MINUS_SRC_COLOR,[Zs]:i.ONE_MINUS_SRC_ALPHA,[rl]:i.ONE_MINUS_DST_COLOR,[il]:i.ONE_MINUS_DST_ALPHA,[ol]:i.CONSTANT_COLOR,[ll]:i.ONE_MINUS_CONSTANT_COLOR,[cl]:i.CONSTANT_ALPHA,[ul]:i.ONE_MINUS_CONSTANT_ALPHA};function w(L,it,H,$,ct,lt,It,le,Ee,Jt){if(L===Tn){S===!0&&(At(i.BLEND),S=!1);return}if(S===!1&&(at(i.BLEND),S=!0),L!==Ko){if(L!==m||Jt!==x){if((h!==On||T!==On)&&(i.blendEquation(i.FUNC_ADD),h=On,T=On),Jt)switch(L){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFunc(i.ONE,i.ONE);break;case oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case la:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case la:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,M=null,P=null,C=null,b.set(0,0,0),U=0,m=L,x=Jt}return}ct=ct||it,lt=lt||H,It=It||$,(it!==h||ct!==T)&&(i.blendEquationSeparate(oe[it],oe[ct]),h=it,T=ct),(H!==A||$!==M||lt!==P||It!==C)&&(i.blendFuncSeparate(kt[H],kt[$],kt[lt],kt[It]),A=H,M=$,P=lt,C=It),(le.equals(b)===!1||Ee!==U)&&(i.blendColor(le.r,le.g,le.b,Ee),b.copy(le),U=Ee),m=L,x=!1}function Ne(L,it){L.side===je?At(i.CULL_FACE):at(i.CULL_FACE);let H=L.side===Pe;it&&(H=!H),Gt(H),L.blending===ai&&L.transparent===!1?w(Tn):w(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){E!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),E=L)}function zt(L){L!==Wo?(at(i.CULL_FACE),L!==I&&(L===ra?i.cullFace(i.BACK):L===Xo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),I=L}function xt(L){L!==z&&(W&&i.lineWidth(L),z=L)}function ie(L,it,H){L?(at(i.POLYGON_OFFSET_FILL),(k!==it||X!==H)&&(i.polygonOffset(it,H),k=it,X=H)):At(i.POLYGON_OFFSET_FILL)}function Et(L){L?at(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function y(L){L===void 0&&(L=i.TEXTURE0+q-1),rt!==L&&(i.activeTexture(L),rt=L)}function g(L,it,H){H===void 0&&(rt===null?H=i.TEXTURE0+q-1:H=rt);let $=dt[H];$===void 0&&($={type:void 0,texture:void 0},dt[H]=$),($.type!==L||$.texture!==it)&&(rt!==H&&(i.activeTexture(H),rt=H),i.bindTexture(L,it||gt[L]),$.type=L,$.texture=it)}function F(){const L=dt[rt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){te.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function mt(L){K.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Ht(L,it){let H=c.get(it);H===void 0&&(H=new WeakMap,c.set(it,H));let $=H.get(L);$===void 0&&($=i.getUniformBlockIndex(it,L.name),H.set(L,$))}function Dt(L,it){const $=c.get(it).get(L);l.get(it)!==$&&(i.uniformBlockBinding(it,$,L.__bindingPointIndex),l.set(it,$))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,dt={},d={},f=new WeakMap,p=[],_=null,S=!1,m=null,h=null,A=null,M=null,T=null,P=null,C=null,b=new qt(0,0,0),U=0,x=!1,E=null,I=null,z=null,k=null,X=null,te.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:At,bindFramebuffer:Zt,drawBuffers:bt,useProgram:de,setBlending:w,setMaterial:Ne,setFlipSided:Gt,setCullFace:zt,setLineWidth:xt,setPolygonOffset:ie,setScissorTest:Et,activeTexture:y,bindTexture:g,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:pt,texImage3D:Rt,updateUBOMapping:Ht,uniformBlockBinding:Dt,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:St,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Ct,viewport:mt,reset:ne}}function Yf(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return p?new OffscreenCanvas(y,g):hs("canvas")}function S(y,g,F){let Z=1;const J=Et(y);if((J.width>F||J.height>F)&&(Z=F/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Y=Math.floor(Z*J.width),St=Math.floor(Z*J.height);d===void 0&&(d=_(Y,St));const ot=g?_(Y,St):d;return ot.width=Y,ot.height=St,ot.getContext("2d").drawImage(y,0,0,Y,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+St+")."),ot}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function m(y){return y.generateMipmaps}function h(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(y,g,F,Z,J=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Y=g;if(g===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),g===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),g===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),g===i.RGBA){const St=J?cs:Kt.getTransfer(Z);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=St===Qt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function T(y,g){let F;return y?g===null||g===zn||g===di?F=i.DEPTH24_STENCIL8:g===cn?F=i.DEPTH32F_STENCIL8:g===Ri&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zn||g===di?F=i.DEPTH_COMPONENT24:g===cn?F=i.DEPTH_COMPONENT32F:g===Ri&&(F=i.DEPTH_COMPONENT16),F}function P(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ze&&y.minFilter!==Ue?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){const g=y.target;g.removeEventListener("dispose",C),U(g),g.isVideoTexture&&u.delete(g)}function b(y){const g=y.target;g.removeEventListener("dispose",b),E(g)}function U(y){const g=n.get(y);if(g.__webglInit===void 0)return;const F=y.source,Z=f.get(F);if(Z){const J=Z[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(y),Object.keys(Z).length===0&&f.delete(F)}n.remove(y)}function x(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const F=y.source,Z=f.get(F);delete Z[g.__cacheKey],a.memory.textures--}function E(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let J=0;J<g.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[Z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=y.textures;for(let Z=0,J=F.length;Z<J;Z++){const Y=n.get(F[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(F[Z])}n.remove(y)}let I=0;function z(){I=0}function k(){const y=I;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),I+=1,y}function X(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function q(y,g){const F=n.get(y);if(y.isVideoTexture&&xt(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const Z=y.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,y,g);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function W(y,g){const F=n.get(y);if(y.version>0&&F.__version!==y.version){K(F,y,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function j(y,g){const F=n.get(y);if(y.version>0&&F.__version!==y.version){K(F,y,g);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function V(y,g){const F=n.get(y);if(y.version>0&&F.__version!==y.version){et(F,y,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const rt={[rr]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[ar]:i.MIRRORED_REPEAT},dt={[Ze]:i.NEAREST,[El]:i.NEAREST_MIPMAP_NEAREST,[Ui]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[gs]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},Tt={[yl]:i.NEVER,[Pl]:i.ALWAYS,[Al]:i.LESS,[To]:i.LEQUAL,[Rl]:i.EQUAL,[wl]:i.GEQUAL,[bl]:i.GREATER,[Cl]:i.NOTEQUAL};function Ot(y,g){if(g.type===cn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ue||g.magFilter===gs||g.magFilter===Ui||g.magFilter===kn||g.minFilter===Ue||g.minFilter===gs||g.minFilter===Ui||g.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,rt[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,rt[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,rt[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,dt[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,dt[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Tt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ze||g.minFilter!==Ui&&g.minFilter!==kn||g.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function te(y,g){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",C));const Z=g.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const Y=X(g);if(Y!==y.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[Y].usedTimes++;const St=J[y.__cacheKey];St!==void 0&&(J[y.__cacheKey].usedTimes--,St.usedTimes===0&&x(g)),y.__cacheKey=Y,y.__webglTexture=J[Y].texture}return F}function K(y,g,F){let Z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=i.TEXTURE_3D);const J=te(y,g),Y=g.source;e.bindTexture(Z,y.__webglTexture,i.TEXTURE0+F);const St=n.get(Y);if(Y.version!==St.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const ot=Kt.getPrimaries(Kt.workingColorSpace),ft=g.colorSpace===vn?null:Kt.getPrimaries(g.colorSpace),Wt=g.colorSpace===vn||ot===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=S(g.image,!1,s.maxTextureSize);tt=ie(g,tt);const pt=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type);let Ct=M(g.internalFormat,pt,Rt,g.colorSpace,g.isVideoTexture);Ot(Z,g);let mt;const Ht=g.mipmaps,Dt=g.isVideoTexture!==!0,ne=St.__version===void 0||J===!0,L=Y.dataReady,it=P(g,tt);if(g.isDepthTexture)Ct=T(g.format===fi,g.type),ne&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,pt,Rt,null));else if(g.isDataTexture)if(Ht.length>0){Dt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,Ct,Ht[0].width,Ht[0].height);for(let H=0,$=Ht.length;H<$;H++)mt=Ht[H],Dt?L&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,H,Ct,mt.width,mt.height,0,pt,Rt,mt.data);g.generateMipmaps=!1}else Dt?(ne&&e.texStorage2D(i.TEXTURE_2D,it,Ct,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,Rt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,pt,Rt,tt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Dt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Ct,Ht[0].width,Ht[0].height,tt.depth);for(let H=0,$=Ht.length;H<$;H++)if(mt=Ht[H],g.format!==qe)if(pt!==null)if(Dt){if(L)if(g.layerUpdates.size>0){const ct=La(mt.width,mt.height,g.format,g.type);for(const lt of g.layerUpdates){const It=mt.data.subarray(lt*ct/mt.data.BYTES_PER_ELEMENT,(lt+1)*ct/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,lt,mt.width,mt.height,1,pt,It)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Ct,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,Rt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,Ct,mt.width,mt.height,tt.depth,0,pt,Rt,mt.data)}else{Dt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,Ct,Ht[0].width,Ht[0].height);for(let H=0,$=Ht.length;H<$;H++)mt=Ht[H],g.format!==qe?pt!==null?Dt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?L&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,H,Ct,mt.width,mt.height,0,pt,Rt,mt.data)}else if(g.isDataArrayTexture)if(Dt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Ct,tt.width,tt.height,tt.depth),L)if(g.layerUpdates.size>0){const H=La(tt.width,tt.height,g.format,g.type);for(const $ of g.layerUpdates){const ct=tt.data.subarray($*H/tt.data.BYTES_PER_ELEMENT,($+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,pt,Rt,ct)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Rt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,pt,Rt,tt.data);else if(g.isData3DTexture)Dt?(ne&&e.texStorage3D(i.TEXTURE_3D,it,Ct,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Rt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,pt,Rt,tt.data);else if(g.isFramebufferTexture){if(ne)if(Dt)e.texStorage2D(i.TEXTURE_2D,it,Ct,tt.width,tt.height);else{let H=tt.width,$=tt.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,Ct,H,$,0,pt,Rt,null),H>>=1,$>>=1}}else if(Ht.length>0){if(Dt&&ne){const H=Et(Ht[0]);e.texStorage2D(i.TEXTURE_2D,it,Ct,H.width,H.height)}for(let H=0,$=Ht.length;H<$;H++)mt=Ht[H],Dt?L&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,pt,Rt,mt):e.texImage2D(i.TEXTURE_2D,H,Ct,pt,Rt,mt);g.generateMipmaps=!1}else if(Dt){if(ne){const H=Et(tt);e.texStorage2D(i.TEXTURE_2D,it,Ct,H.width,H.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Rt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,pt,Rt,tt);m(g)&&h(Z),St.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function et(y,g,F){if(g.image.length!==6)return;const Z=te(y,g),J=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const Y=n.get(J);if(J.version!==Y.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const St=Kt.getPrimaries(Kt.workingColorSpace),ot=g.colorSpace===vn?null:Kt.getPrimaries(g.colorSpace),ft=g.colorSpace===vn||St===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Wt=g.isCompressedTexture||g.image[0].isCompressedTexture,tt=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!Wt&&!tt?pt[$]=S(g.image[$],!0,s.maxCubemapSize):pt[$]=tt?g.image[$].image:g.image[$],pt[$]=ie(g,pt[$]);const Rt=pt[0],Ct=r.convert(g.format,g.colorSpace),mt=r.convert(g.type),Ht=M(g.internalFormat,Ct,mt,g.colorSpace),Dt=g.isVideoTexture!==!0,ne=Y.__version===void 0||Z===!0,L=J.dataReady;let it=P(g,Rt);Ot(i.TEXTURE_CUBE_MAP,g);let H;if(Wt){Dt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ht,Rt.width,Rt.height);for(let $=0;$<6;$++){H=pt[$].mipmaps;for(let ct=0;ct<H.length;ct++){const lt=H[ct];g.format!==qe?Ct!==null?Dt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,lt.width,lt.height,Ct,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Ht,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,lt.width,lt.height,Ct,mt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Ht,lt.width,lt.height,0,Ct,mt,lt.data)}}}else{if(H=g.mipmaps,Dt&&ne){H.length>0&&it++;const $=Et(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ht,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,Ct,mt,pt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ht,pt[$].width,pt[$].height,0,Ct,mt,pt[$].data);for(let ct=0;ct<H.length;ct++){const It=H[ct].image[$].image;Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,It.width,It.height,Ct,mt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Ht,It.width,It.height,0,Ct,mt,It.data)}}else{Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ct,mt,pt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ht,Ct,mt,pt[$]);for(let ct=0;ct<H.length;ct++){const lt=H[ct];Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Ct,mt,lt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Ht,Ct,mt,lt.image[$])}}}m(g)&&h(i.TEXTURE_CUBE_MAP),Y.__version=J.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function gt(y,g,F,Z,J,Y){const St=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ft=M(F.internalFormat,St,ot,F.colorSpace),Wt=n.get(g),tt=n.get(F);if(tt.__renderTarget=g,!Wt.__hasExternalTextures){const pt=Math.max(1,g.width>>Y),Rt=Math.max(1,g.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,ft,pt,Rt,g.depth,0,St,ot,null):e.texImage2D(J,Y,ft,pt,Rt,0,St,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),zt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,tt.__webglTexture,0,Gt(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,tt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(y,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const Z=g.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,Y=T(g.stencilBuffer,J),St=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Gt(g);zt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Y,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Y,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Y,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,y)}else{const Z=g.textures;for(let J=0;J<Z.length;J++){const Y=Z[J],St=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),ft=M(Y.internalFormat,St,ot,Y.colorSpace),Wt=Gt(g);F&&zt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ft,g.width,g.height):zt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ft,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ft,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(g.depthTexture);Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const J=Z.__webglTexture,Y=Gt(g);if(g.depthTexture.format===oi)zt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(g.depthTexture.format===fi)zt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Zt(y){const g=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const Z=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=Z}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");At(g.__webglFramebuffer,y)}else if(F){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=i.createRenderbuffer(),at(g.__webglDepthbuffer[Z],y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),at(g.__webglDepthbuffer,y,!1);else{const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(y,g,F){const Z=n.get(y);g!==void 0&&gt(Z.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Zt(y)}function de(y){const g=y.texture,F=n.get(y),Z=n.get(g);y.addEventListener("dispose",b);const J=y.textures,Y=y.isWebGLCubeRenderTarget===!0,St=J.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=g.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ft=0;ft<g.mipmaps.length;ft++)F.__webglFramebuffer[ot][ft]=i.createFramebuffer()}else F.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<g.mipmaps.length;ot++)F.__webglFramebuffer[ot]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(St)for(let ot=0,ft=J.length;ot<ft;ot++){const Wt=n.get(J[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&zt(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const ft=J[ot];F.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const Wt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),pt=M(ft.internalFormat,Wt,tt,ft.colorSpace,y.isXRRenderTarget===!0),Rt=Gt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,pt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),at(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,g);for(let ot=0;ot<6;ot++)if(g.mipmaps&&g.mipmaps.length>0)for(let ft=0;ft<g.mipmaps.length;ft++)gt(F.__webglFramebuffer[ot][ft],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else gt(F.__webglFramebuffer[ot],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(g)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ot=0,ft=J.length;ot<ft;ot++){const Wt=J[ot],tt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Ot(i.TEXTURE_2D,Wt),gt(F.__webglFramebuffer,y,Wt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Wt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ot=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Ot(ot,g),g.mipmaps&&g.mipmaps.length>0)for(let ft=0;ft<g.mipmaps.length;ft++)gt(F.__webglFramebuffer[ft],y,g,i.COLOR_ATTACHMENT0,ot,ft);else gt(F.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,ot,0);m(g)&&h(ot),e.unbindTexture()}y.depthBuffer&&Zt(y)}function oe(y){const g=y.textures;for(let F=0,Z=g.length;F<Z;F++){const J=g[F];if(m(J)){const Y=A(y),St=n.get(J).__webglTexture;e.bindTexture(Y,St),h(Y),e.unbindTexture()}}}const kt=[],w=[];function Ne(y){if(y.samples>0){if(zt(y)===!1){const g=y.textures,F=y.width,Z=y.height;let J=i.COLOR_BUFFER_BIT;const Y=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(y),ot=g.length>1;if(ot)for(let ft=0;ft<g.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ft=0;ft<g.length;ft++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const Wt=n.get(g[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,J,i.NEAREST),l===!0&&(kt.length=0,w.length=0,kt.push(i.COLOR_ATTACHMENT0+ft),y.depthBuffer&&y.resolveDepthBuffer===!1&&(kt.push(Y),w.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<g.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const Wt=n.get(g[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Gt(y){return Math.min(s.maxSamples,y.samples)}function zt(y){const g=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function xt(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function ie(y,g){const F=y.colorSpace,Z=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==pi&&F!==vn&&(Kt.getTransfer(F)===Qt?(Z!==qe||J!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function Et(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=bt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=zt}function Kf(i,t){function e(n,s=vn){let r;const a=Kt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===co)return i.BYTE;if(n===uo)return i.SHORT;if(n===Ri)return i.UNSIGNED_SHORT;if(n===Br)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===fo)return i.ALPHA;if(n===po)return i.RGB;if(n===qe)return i.RGBA;if(n===mo)return i.LUMINANCE;if(n===_o)return i.LUMINANCE_ALPHA;if(n===oi)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===zr)return i.RED_INTEGER;if(n===So)return i.RG;if(n===Hr)return i.RG_INTEGER;if(n===Vr)return i.RGBA_INTEGER;if(n===is||n===ss||n===rs||n===as)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ss)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===as)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===or||n===lr||n===cr||n===ur)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===or)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ur)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hr||n===dr||n===fr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hr||n===dr)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pr||n===mr||n===_r||n===gr||n===Sr||n===vr||n===Er||n===Tr||n===xr||n===Mr||n===yr||n===Ar||n===Rr||n===br)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_r)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Er)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ar)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===br)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===os||n===Cr||n===wr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===os)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===Pr||n===Ir||n===Lr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===os)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const qf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zf=`
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

}`;class $f{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:qf,fragmentShader:Zf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jf extends _i{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const S=new $f,m=e.getContextAttributes();let h=null,A=null;const M=[],T=[],P=new Bt;let C=null;const b=new Ye;b.viewport=new ue;const U=new Ye;U.viewport=new ue;const x=[b,U],E=new _c;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=M[K];return et===void 0&&(et=new ks,M[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=M[K];return et===void 0&&(et=new ks,M[K]=et),et.getGripSpace()},this.getHand=function(K){let et=M[K];return et===void 0&&(et=new ks,M[K]=et),et.getHandSpace()};function k(K){const et=T.indexOf(K.inputSource);if(et===-1)return;const gt=M[et];gt!==void 0&&(gt.update(K.inputSource,K.frame,c||a),gt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",q);for(let K=0;K<M.length;K++){const et=T[K];et!==null&&(T[K]=null,M[K].disconnect(et))}I=null,z=null,S.reset(),t.setRenderTarget(h),p=null,f=null,d=null,s=null,A=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,at=null,At=null;m.depth&&(At=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?fi:oi,at=m.stencil?di:zn);const Zt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Hn(f.textureWidth,f.textureHeight,{format:qe,type:dn,depthTexture:new Io(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Hn(p.framebufferWidth,p.framebufferHeight,{format:qe,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(K){for(let et=0;et<K.removed.length;et++){const gt=K.removed[et],at=T.indexOf(gt);at>=0&&(T[at]=null,M[at].disconnect(gt))}for(let et=0;et<K.added.length;et++){const gt=K.added[et];let at=T.indexOf(gt);if(at===-1){for(let Zt=0;Zt<M.length;Zt++)if(Zt>=T.length){T.push(gt),at=Zt;break}else if(T[Zt]===null){T[Zt]=gt,at=Zt;break}if(at===-1)break}const At=M[at];At&&At.connect(gt)}}const W=new O,j=new O;function V(K,et,gt){W.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(gt.matrixWorld);const at=W.distanceTo(j),At=et.projectionMatrix.elements,Zt=gt.projectionMatrix.elements,bt=At[14]/(At[10]-1),de=At[14]/(At[10]+1),oe=(At[9]+1)/At[5],kt=(At[9]-1)/At[5],w=(At[8]-1)/At[0],Ne=(Zt[8]+1)/Zt[0],Gt=bt*w,zt=bt*Ne,xt=at/(-w+Ne),ie=xt*-w;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ie),K.translateZ(xt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),At[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=bt+xt,y=de+xt,g=Gt-ie,F=zt+(at-ie),Z=oe*de/y*Et,J=kt*de/y*Et;K.projectionMatrix.makePerspective(g,F,Z,J,Et,y),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function rt(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,gt=K.far;S.texture!==null&&(S.depthNear>0&&(et=S.depthNear),S.depthFar>0&&(gt=S.depthFar)),E.near=U.near=b.near=et,E.far=U.far=b.far=gt,(I!==E.near||z!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,z=E.far),b.layers.mask=K.layers.mask|2,U.layers.mask=K.layers.mask|4,E.layers.mask=b.layers.mask|U.layers.mask;const at=K.parent,At=E.cameras;rt(E,at);for(let Zt=0;Zt<At.length;Zt++)rt(At[Zt],at);At.length===2?V(E,b,U):E.projectionMatrix.copy(b.projectionMatrix),dt(K,E,at)};function dt(K,et,gt){gt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(gt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Dr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let Tt=null;function Ot(K,et){if(u=et.getViewerPose(c||a),_=et,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let at=!1;gt.length!==E.cameras.length&&(E.cameras.length=0,at=!0);for(let bt=0;bt<gt.length;bt++){const de=gt[bt];let oe=null;if(p!==null)oe=p.getViewport(de);else{const w=d.getViewSubImage(f,de);oe=w.viewport,bt===0&&(t.setRenderTargetTextures(A,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(A))}let kt=x[bt];kt===void 0&&(kt=new Ye,kt.layers.enable(bt),kt.viewport=new ue,x[bt]=kt),kt.matrix.fromArray(de.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(de.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(oe.x,oe.y,oe.width,oe.height),bt===0&&(E.matrix.copy(kt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),at===!0&&E.cameras.push(kt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const bt=d.getDepthInformation(gt[0]);bt&&bt.isValid&&bt.texture&&S.init(t,bt,s.renderState)}}for(let gt=0;gt<M.length;gt++){const at=T[gt],At=M[gt];at!==null&&At!==void 0&&At.update(at,et,c||a)}Tt&&Tt(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const te=new Do;te.setAnimationLoop(Ot),this.setAnimationLoop=function(K){Tt=K},this.dispose=function(){}}}const Ln=new Qe,Jf=new he;function Qf(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Co(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,A,M,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,T)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),S(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,A,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Pe&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Pe&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=t.get(h),M=A.envMap,T=A.envMapRotation;M&&(m.envMap.value=M,Ln.copy(T),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),m.envMapRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(Ln)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,A,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=M*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pe&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const A=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,M){const T=M.program;n.uniformBlockBinding(A,T)}function c(A,M){let T=s[A.id];T===void 0&&(_(A),T=u(A),s[A.id]=T,A.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(A,P);const C=t.render.frame;r[A.id]!==C&&(f(A),r[A.id]=C)}function u(A){const M=d();A.__bindingPointIndex=M;const T=i.createBuffer(),P=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const M=s[A.id],T=A.uniforms,P=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,b=T.length;C<b;C++){const U=Array.isArray(T[C])?T[C]:[T[C]];for(let x=0,E=U.length;x<E;x++){const I=U[x];if(p(I,C,x,P)===!0){const z=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let q=0;q<k.length;q++){const W=k[q],j=S(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+X,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,M,T,P){const C=A.value,b=M+"_"+T;if(P[b]===void 0)return typeof C=="number"||typeof C=="boolean"?P[b]=C:P[b]=C.clone(),!0;{const U=P[b];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return P[b]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(A){const M=A.uniforms;let T=0;const P=16;for(let b=0,U=M.length;b<U;b++){const x=Array.isArray(M[b])?M[b]:[M[b]];for(let E=0,I=x.length;E<I;E++){const z=x[E],k=Array.isArray(z.value)?z.value:[z.value];for(let X=0,q=k.length;X<q;X++){const W=k[X],j=S(W),V=T%P,rt=V%j.boundary,dt=V+rt;T+=rt,dt!==0&&P-dt<j.storage&&(T+=P-dt),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=j.storage}}}const C=T%P;return C>0&&(T+=P-C),A.__size=T,A.__cache={},this}function S(A){const M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function m(A){const M=A.target;M.removeEventListener("dispose",m);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function h(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class ep{constructor(t={}){const{canvas:e=Ll(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),S=new Int32Array(4);let m=null,h=null;const A=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=xn,this.toneMappingExposure=1;const T=this;let P=!1,C=0,b=0,U=null,x=-1,E=null;const I=new ue,z=new ue;let k=null;const X=new qt(0);let q=0,W=e.width,j=e.height,V=1,rt=null,dt=null;const Tt=new ue(0,0,W,j),Ot=new ue(0,0,W,j);let te=!1;const K=new Yr;let et=!1,gt=!1;this.transmissionResolutionScale=1;const at=new he,At=new he,Zt=new O,bt=new ue,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function kt(){return U===null?V:1}let w=n;function Ne(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Or}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),w===null){const D="webgl2";if(w=Ne(D,v),w===null)throw Ne(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Gt,zt,xt,ie,Et,y,g,F,Z,J,Y,St,ot,ft,Wt,tt,pt,Rt,Ct,mt,Ht,Dt,ne,L;function it(){Gt=new ud(w),Gt.init(),Dt=new Kf(w,Gt),zt=new id(w,Gt,t,Dt),xt=new Xf(w,Gt),zt.reverseDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),ie=new fd(w),Et=new Lf,y=new Yf(w,Gt,xt,Et,zt,Dt,ie),g=new rd(T),F=new cd(T),Z=new vc(w),ne=new ed(w,Z),J=new hd(w,Z,ie,ne),Y=new md(w,J,Z,ie),Ct=new pd(w,zt,y),tt=new sd(Et),St=new If(T,g,F,Gt,zt,ne,tt),ot=new Qf(T,Et),ft=new Uf,Wt=new Gf(Gt),Rt=new td(T,g,F,xt,Y,p,l),pt=new Vf(T,Y,zt),L=new tp(w,ie,zt,xt),mt=new nd(w,Gt,ie),Ht=new dd(w,Gt,ie),ie.programs=St.programs,T.capabilities=zt,T.extensions=Gt,T.properties=Et,T.renderLists=ft,T.shadowMap=pt,T.state=xt,T.info=ie}it();const H=new jf(T,w);this.xr=H,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Gt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Gt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(W,j,!1))},this.getSize=function(v){return v.set(W,j)},this.setSize=function(v,D,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,j=D,e.width=Math.floor(v*V),e.height=Math.floor(D*V),B===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(W*V,j*V).floor()},this.setDrawingBufferSize=function(v,D,B){W=v,j=D,V=B,e.width=Math.floor(v*B),e.height=Math.floor(D*B),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(I)},this.getViewport=function(v){return v.copy(Tt)},this.setViewport=function(v,D,B,G){v.isVector4?Tt.set(v.x,v.y,v.z,v.w):Tt.set(v,D,B,G),xt.viewport(I.copy(Tt).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Ot)},this.setScissor=function(v,D,B,G){v.isVector4?Ot.set(v.x,v.y,v.z,v.w):Ot.set(v,D,B,G),xt.scissor(z.copy(Ot).multiplyScalar(V).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(v){xt.setScissorTest(te=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){dt=v},this.getClearColor=function(v){return v.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,B=!0){let G=0;if(v){let N=!1;if(U!==null){const Q=U.texture.format;N=Q===Vr||Q===Hr||Q===zr}if(N){const Q=U.texture.type,st=Q===dn||Q===zn||Q===Ri||Q===di||Q===kr||Q===Gr,ht=Rt.getClearColor(),_t=Rt.getClearAlpha(),wt=ht.r,Pt=ht.g,Mt=ht.b;st?(_[0]=wt,_[1]=Pt,_[2]=Mt,_[3]=_t,w.clearBufferuiv(w.COLOR,0,_)):(S[0]=wt,S[1]=Pt,S[2]=Mt,S[3]=_t,w.clearBufferiv(w.COLOR,0,S))}else G|=w.COLOR_BUFFER_BIT}D&&(G|=w.DEPTH_BUFFER_BIT),B&&(G|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Rt.dispose(),ft.dispose(),Wt.dispose(),Et.dispose(),g.dispose(),F.dispose(),Y.dispose(),ne.dispose(),L.dispose(),St.dispose(),H.dispose(),H.removeEventListener("sessionstart",Jr),H.removeEventListener("sessionend",Qr),An.stop()};function $(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const v=ie.autoReset,D=pt.enabled,B=pt.autoUpdate,G=pt.needsUpdate,N=pt.type;it(),ie.autoReset=v,pt.enabled=D,pt.autoUpdate=B,pt.needsUpdate=G,pt.type=N}function lt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function It(v){const D=v.target;D.removeEventListener("dispose",It),le(D)}function le(v){Ee(v),Et.remove(v)}function Ee(v){const D=Et.get(v).programs;D!==void 0&&(D.forEach(function(B){St.releaseProgram(B)}),v.isShaderMaterial&&St.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,B,G,N,Q){D===null&&(D=de);const st=N.isMesh&&N.matrixWorld.determinant()<0,ht=Bo(v,D,B,G,N);xt.setMaterial(G,st);let _t=B.index,wt=1;if(G.wireframe===!0){if(_t=J.getWireframeAttribute(B),_t===void 0)return;wt=2}const Pt=B.drawRange,Mt=B.attributes.position;let Xt=Pt.start*wt,$t=(Pt.start+Pt.count)*wt;Q!==null&&(Xt=Math.max(Xt,Q.start*wt),$t=Math.min($t,(Q.start+Q.count)*wt)),_t!==null?(Xt=Math.max(Xt,0),$t=Math.min($t,_t.count)):Mt!=null&&(Xt=Math.max(Xt,0),$t=Math.min($t,Mt.count));const fe=$t-Xt;if(fe<0||fe===1/0)return;ne.setup(N,G,ht,B,_t);let ce,Yt=mt;if(_t!==null&&(ce=Z.get(_t),Yt=Ht,Yt.setIndex(ce)),N.isMesh)G.wireframe===!0?(xt.setLineWidth(G.wireframeLinewidth*kt()),Yt.setMode(w.LINES)):Yt.setMode(w.TRIANGLES);else if(N.isLine){let yt=G.linewidth;yt===void 0&&(yt=1),xt.setLineWidth(yt*kt()),N.isLineSegments?Yt.setMode(w.LINES):N.isLineLoop?Yt.setMode(w.LINE_LOOP):Yt.setMode(w.LINE_STRIP)}else N.isPoints?Yt.setMode(w.POINTS):N.isSprite&&Yt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Dn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Yt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const yt=N._multiDrawStarts,ve=N._multiDrawCounts,jt=N._multiDrawCount,He=_t?Z.get(_t).bytesPerElement:1,Wn=Et.get(G).currentProgram.getUniforms();for(let Ie=0;Ie<jt;Ie++)Wn.setValue(w,"_gl_DrawID",Ie),Yt.render(yt[Ie]/He,ve[Ie])}else if(N.isInstancedMesh)Yt.renderInstances(Xt,fe,N.count);else if(B.isInstancedBufferGeometry){const yt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ve=Math.min(B.instanceCount,yt);Yt.renderInstances(Xt,fe,ve)}else Yt.render(Xt,fe)};function Jt(v,D,B){v.transparent===!0&&v.side===je&&v.forceSinglePass===!1?(v.side=Pe,v.needsUpdate=!0,Di(v,D,B),v.side=Mn,v.needsUpdate=!0,Di(v,D,B),v.side=je):Di(v,D,B)}this.compile=function(v,D,B=null){B===null&&(B=v),h=Wt.get(B),h.init(D),M.push(h),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),v!==B&&v.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const G=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let st=0;st<Q.length;st++){const ht=Q[st];Jt(ht,B,N),G.add(ht)}else Jt(Q,B,N),G.add(Q)}),h=M.pop(),G},this.compileAsync=function(v,D,B=null){const G=this.compile(v,D,B);return new Promise(N=>{function Q(){if(G.forEach(function(st){Et.get(st).currentProgram.isReady()&&G.delete(st)}),G.size===0){N(v);return}setTimeout(Q,10)}Gt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ze=null;function en(v){ze&&ze(v)}function Jr(){An.stop()}function Qr(){An.start()}const An=new Do;An.setAnimationLoop(en),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(v){ze=v,H.setAnimationLoop(v),v===null?An.stop():An.start()},H.addEventListener("sessionstart",Jr),H.addEventListener("sessionend",Qr),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),v.isScene===!0&&v.onBeforeRender(T,v,D,U),h=Wt.get(v,M.length),h.init(D),M.push(h),At.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),K.setFromProjectionMatrix(At),gt=this.localClippingEnabled,et=tt.init(this.clippingPlanes,gt),m=ft.get(v,A.length),m.init(),A.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=T.xr.getDepthSensingMesh();Q!==null&&ms(Q,D,-1/0,T.sortObjects)}ms(v,D,0,T.sortObjects),m.finish(),T.sortObjects===!0&&m.sort(rt,dt),oe=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,oe&&Rt.addToRenderList(m,v),this.info.render.frame++,et===!0&&tt.beginShadows();const B=h.state.shadowsArray;pt.render(B,v,D),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(h.setupLights(),D.isArrayCamera){const Q=D.cameras;if(N.length>0)for(let st=0,ht=Q.length;st<ht;st++){const _t=Q[st];ea(G,N,v,_t)}oe&&Rt.render(v);for(let st=0,ht=Q.length;st<ht;st++){const _t=Q[st];ta(m,v,_t,_t.viewport)}}else N.length>0&&ea(G,N,v,D),oe&&Rt.render(v),ta(m,v,D);U!==null&&b===0&&(y.updateMultisampleRenderTarget(U),y.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(T,v,D),ne.resetDefaultState(),x=-1,E=null,M.pop(),M.length>0?(h=M[M.length-1],et===!0&&tt.setGlobalState(T.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function ms(v,D,B,G){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||K.intersectsSprite(v)){G&&bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(At);const st=Y.update(v),ht=v.material;ht.visible&&m.push(v,st,ht,B,bt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||K.intersectsObject(v))){const st=Y.update(v),ht=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),bt.copy(v.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),bt.copy(st.boundingSphere.center)),bt.applyMatrix4(v.matrixWorld).applyMatrix4(At)),Array.isArray(ht)){const _t=st.groups;for(let wt=0,Pt=_t.length;wt<Pt;wt++){const Mt=_t[wt],Xt=ht[Mt.materialIndex];Xt&&Xt.visible&&m.push(v,st,Xt,B,bt.z,Mt)}}else ht.visible&&m.push(v,st,ht,B,bt.z,null)}}const Q=v.children;for(let st=0,ht=Q.length;st<ht;st++)ms(Q[st],D,B,G)}function ta(v,D,B,G){const N=v.opaque,Q=v.transmissive,st=v.transparent;h.setupLightsView(B),et===!0&&tt.setGlobalState(T.clippingPlanes,B),G&&xt.viewport(I.copy(G)),N.length>0&&Li(N,D,B),Q.length>0&&Li(Q,D,B),st.length>0&&Li(st,D,B),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ea(v,D,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new Hn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?bi:dn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const Q=h.state.transmissionRenderTarget[G.id],st=G.viewport||I;Q.setSize(st.z*T.transmissionResolutionScale,st.w*T.transmissionResolutionScale);const ht=T.getRenderTarget();T.setRenderTarget(Q),T.getClearColor(X),q=T.getClearAlpha(),q<1&&T.setClearColor(16777215,.5),T.clear(),oe&&Rt.render(B);const _t=T.toneMapping;T.toneMapping=xn;const wt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),et===!0&&tt.setGlobalState(T.clippingPlanes,G),Li(v,B,G),y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Mt=0,Xt=D.length;Mt<Xt;Mt++){const $t=D[Mt],fe=$t.object,ce=$t.geometry,Yt=$t.material,yt=$t.group;if(Yt.side===je&&fe.layers.test(G.layers)){const ve=Yt.side;Yt.side=Pe,Yt.needsUpdate=!0,na(fe,B,G,ce,Yt,yt),Yt.side=ve,Yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q))}T.setRenderTarget(ht),T.setClearColor(X,q),wt!==void 0&&(G.viewport=wt),T.toneMapping=_t}function Li(v,D,B){const G=D.isScene===!0?D.overrideMaterial:null;for(let N=0,Q=v.length;N<Q;N++){const st=v[N],ht=st.object,_t=st.geometry,wt=G===null?st.material:G,Pt=st.group;ht.layers.test(B.layers)&&na(ht,D,B,_t,wt,Pt)}}function na(v,D,B,G,N,Q){v.onBeforeRender(T,D,B,G,N,Q),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(T,D,B,G,v,Q),N.transparent===!0&&N.side===je&&N.forceSinglePass===!1?(N.side=Pe,N.needsUpdate=!0,T.renderBufferDirect(B,D,G,N,v,Q),N.side=Mn,N.needsUpdate=!0,T.renderBufferDirect(B,D,G,N,v,Q),N.side=je):T.renderBufferDirect(B,D,G,N,v,Q),v.onAfterRender(T,D,B,G,N,Q)}function Di(v,D,B){D.isScene!==!0&&(D=de);const G=Et.get(v),N=h.state.lights,Q=h.state.shadowsArray,st=N.state.version,ht=St.getParameters(v,N.state,Q,D,B),_t=St.getProgramCacheKey(ht);let wt=G.programs;G.environment=v.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(v.isMeshStandardMaterial?F:g).get(v.envMap||G.environment),G.envMapRotation=G.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",It),wt=new Map,G.programs=wt);let Pt=wt.get(_t);if(Pt!==void 0){if(G.currentProgram===Pt&&G.lightsStateVersion===st)return sa(v,ht),Pt}else ht.uniforms=St.getUniforms(v),v.onBeforeCompile(ht,T),Pt=St.acquireProgram(ht,_t),wt.set(_t,Pt),G.uniforms=ht.uniforms;const Mt=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Mt.clippingPlanes=tt.uniform),sa(v,ht),G.needsLights=Go(v),G.lightsStateVersion=st,G.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Pt,G.uniformsList=null,Pt}function ia(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=ls.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function sa(v,D){const B=Et.get(v);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Bo(v,D,B,G,N){D.isScene!==!0&&(D=de),y.resetTextureUnits();const Q=D.fog,st=G.isMeshStandardMaterial?D.environment:null,ht=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:pi,_t=(G.isMeshStandardMaterial?F:g).get(G.envMap||st),wt=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Mt=!!B.morphAttributes.position,Xt=!!B.morphAttributes.normal,$t=!!B.morphAttributes.color;let fe=xn;G.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(fe=T.toneMapping);const ce=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Yt=ce!==void 0?ce.length:0,yt=Et.get(G),ve=h.state.lights;if(et===!0&&(gt===!0||v!==E)){const Ae=v===E&&G.id===x;tt.setState(G,v,Ae)}let jt=!1;G.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==ve.state.version||yt.outputColorSpace!==ht||N.isBatchedMesh&&yt.batching===!1||!N.isBatchedMesh&&yt.batching===!0||N.isBatchedMesh&&yt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&yt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&yt.instancing===!1||!N.isInstancedMesh&&yt.instancing===!0||N.isSkinnedMesh&&yt.skinning===!1||!N.isSkinnedMesh&&yt.skinning===!0||N.isInstancedMesh&&yt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&yt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&yt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&yt.instancingMorph===!1&&N.morphTexture!==null||yt.envMap!==_t||G.fog===!0&&yt.fog!==Q||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==tt.numPlanes||yt.numIntersection!==tt.numIntersection)||yt.vertexAlphas!==wt||yt.vertexTangents!==Pt||yt.morphTargets!==Mt||yt.morphNormals!==Xt||yt.morphColors!==$t||yt.toneMapping!==fe||yt.morphTargetsCount!==Yt)&&(jt=!0):(jt=!0,yt.__version=G.version);let He=yt.currentProgram;jt===!0&&(He=Di(G,D,N));let Wn=!1,Ie=!1,vi=!1;const ae=He.getUniforms(),Oe=yt.uniforms;if(xt.useProgram(He.program)&&(Wn=!0,Ie=!0,vi=!0),G.id!==x&&(x=G.id,Ie=!0),Wn||E!==v){xt.buffers.depth.getReversed()?(at.copy(v.projectionMatrix),Ul(at),Nl(at),ae.setValue(w,"projectionMatrix",at)):ae.setValue(w,"projectionMatrix",v.projectionMatrix),ae.setValue(w,"viewMatrix",v.matrixWorldInverse);const Ce=ae.map.cameraPosition;Ce!==void 0&&Ce.setValue(w,Zt.setFromMatrixPosition(v.matrixWorld)),zt.logarithmicDepthBuffer&&ae.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ae.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,Ie=!0,vi=!0)}if(N.isSkinnedMesh){ae.setOptional(w,N,"bindMatrix"),ae.setOptional(w,N,"bindMatrixInverse");const Ae=N.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ae.setValue(w,"boneTexture",Ae.boneTexture,y))}N.isBatchedMesh&&(ae.setOptional(w,N,"batchingTexture"),ae.setValue(w,"batchingTexture",N._matricesTexture,y),ae.setOptional(w,N,"batchingIdTexture"),ae.setValue(w,"batchingIdTexture",N._indirectTexture,y),ae.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&ae.setValue(w,"batchingColorTexture",N._colorsTexture,y));const Fe=B.morphAttributes;if((Fe.position!==void 0||Fe.normal!==void 0||Fe.color!==void 0)&&Ct.update(N,B,He),(Ie||yt.receiveShadow!==N.receiveShadow)&&(yt.receiveShadow=N.receiveShadow,ae.setValue(w,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Oe.envMap.value=_t,Oe.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(Oe.envMapIntensity.value=D.environmentIntensity),Ie&&(ae.setValue(w,"toneMappingExposure",T.toneMappingExposure),yt.needsLights&&ko(Oe,vi),Q&&G.fog===!0&&ot.refreshFogUniforms(Oe,Q),ot.refreshMaterialUniforms(Oe,G,V,j,h.state.transmissionRenderTarget[v.id]),ls.upload(w,ia(yt),Oe,y)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ls.upload(w,ia(yt),Oe,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ae.setValue(w,"center",N.center),ae.setValue(w,"modelViewMatrix",N.modelViewMatrix),ae.setValue(w,"normalMatrix",N.normalMatrix),ae.setValue(w,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ae=G.uniformsGroups;for(let Ce=0,_s=Ae.length;Ce<_s;Ce++){const Rn=Ae[Ce];L.update(Rn,He),L.bind(Rn,He)}}return He}function ko(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Go(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,D,B){Et.get(v.texture).__webglTexture=D,Et.get(v.depthTexture).__webglTexture=B;const G=Et.get(v);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const B=Et.get(v);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};const zo=w.createFramebuffer();this.setRenderTarget=function(v,D=0,B=0){U=v,C=D,b=B;let G=!0,N=null,Q=!1,st=!1;if(v){const _t=Et.get(v);if(_t.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(w.FRAMEBUFFER,null),G=!1;else if(_t.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(_t.__hasExternalTextures)y.rebindTextures(v,Et.get(v.texture).__webglTexture,Et.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Mt=v.depthTexture;if(_t.__boundDepthTexture!==Mt){if(Mt!==null&&Et.has(Mt)&&(v.width!==Mt.image.width||v.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(st=!0);const Pt=Et.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?N=Pt[D][B]:N=Pt[D],Q=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?N=Et.get(v).__webglMultisampledFramebuffer:Array.isArray(Pt)?N=Pt[B]:N=Pt,I.copy(v.viewport),z.copy(v.scissor),k=v.scissorTest}else I.copy(Tt).multiplyScalar(V).floor(),z.copy(Ot).multiplyScalar(V).floor(),k=te;if(B!==0&&(N=zo),xt.bindFramebuffer(w.FRAMEBUFFER,N)&&G&&xt.drawBuffers(v,N),xt.viewport(I),xt.scissor(z),xt.setScissorTest(k),Q){const _t=Et.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,_t.__webglTexture,B)}else if(st){const _t=Et.get(v.texture),wt=D;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.__webglTexture,B,wt)}else if(v!==null&&B!==0){const _t=Et.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,_t.__webglTexture,B)}x=-1},this.readRenderTargetPixels=function(v,D,B,G,N,Q,st){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Et.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){xt.bindFramebuffer(w.FRAMEBUFFER,ht);try{const _t=v.texture,wt=_t.format,Pt=_t.type;if(!zt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-G&&B>=0&&B<=v.height-N&&w.readPixels(D,B,G,N,Dt.convert(wt),Dt.convert(Pt),Q)}finally{const _t=U!==null?Et.get(U).__webglFramebuffer:null;xt.bindFramebuffer(w.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(v,D,B,G,N,Q,st){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Et.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){const _t=v.texture,wt=_t.format,Pt=_t.type;if(!zt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-G&&B>=0&&B<=v.height-N){xt.bindFramebuffer(w.FRAMEBUFFER,ht);const Mt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Mt),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),w.readPixels(D,B,G,N,Dt.convert(wt),Dt.convert(Pt),0);const Xt=U!==null?Et.get(U).__webglFramebuffer:null;xt.bindFramebuffer(w.FRAMEBUFFER,Xt);const $t=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Dl(w,$t,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Mt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(Mt),w.deleteSync($t),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,B=0){v.isTexture!==!0&&(Dn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const G=Math.pow(2,-B),N=Math.floor(v.image.width*G),Q=Math.floor(v.image.height*G),st=D!==null?D.x:0,ht=D!==null?D.y:0;y.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,st,ht,N,Q),xt.unbindTexture()};const Ho=w.createFramebuffer(),Vo=w.createFramebuffer();this.copyTextureToTexture=function(v,D,B=null,G=null,N=0,Q=null){v.isTexture!==!0&&(Dn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,v=arguments[1],D=arguments[2],Q=arguments[3]||0,B=null),Q===null&&(N!==0?(Dn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let st,ht,_t,wt,Pt,Mt,Xt,$t,fe;const ce=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(B!==null)st=B.max.x-B.min.x,ht=B.max.y-B.min.y,_t=B.isBox3?B.max.z-B.min.z:1,wt=B.min.x,Pt=B.min.y,Mt=B.isBox3?B.min.z:0;else{const Fe=Math.pow(2,-N);st=Math.floor(ce.width*Fe),ht=Math.floor(ce.height*Fe),v.isDataArrayTexture?_t=ce.depth:v.isData3DTexture?_t=Math.floor(ce.depth*Fe):_t=1,wt=0,Pt=0,Mt=0}G!==null?(Xt=G.x,$t=G.y,fe=G.z):(Xt=0,$t=0,fe=0);const Yt=Dt.convert(D.format),yt=Dt.convert(D.type);let ve;D.isData3DTexture?(y.setTexture3D(D,0),ve=w.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(y.setTexture2DArray(D,0),ve=w.TEXTURE_2D_ARRAY):(y.setTexture2D(D,0),ve=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);const jt=w.getParameter(w.UNPACK_ROW_LENGTH),He=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Wn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ie=w.getParameter(w.UNPACK_SKIP_ROWS),vi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ce.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ce.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Pt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Mt);const ae=v.isDataArrayTexture||v.isData3DTexture,Oe=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Fe=Et.get(v),Ae=Et.get(D),Ce=Et.get(Fe.__renderTarget),_s=Et.get(Ae.__renderTarget);xt.bindFramebuffer(w.READ_FRAMEBUFFER,Ce.__webglFramebuffer),xt.bindFramebuffer(w.DRAW_FRAMEBUFFER,_s.__webglFramebuffer);for(let Rn=0;Rn<_t;Rn++)ae&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Et.get(v).__webglTexture,N,Mt+Rn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Et.get(D).__webglTexture,Q,fe+Rn)),w.blitFramebuffer(wt,Pt,st,ht,Xt,$t,st,ht,w.DEPTH_BUFFER_BIT,w.NEAREST);xt.bindFramebuffer(w.READ_FRAMEBUFFER,null),xt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||Et.has(v)){const Fe=Et.get(v),Ae=Et.get(D);xt.bindFramebuffer(w.READ_FRAMEBUFFER,Ho),xt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Vo);for(let Ce=0;Ce<_t;Ce++)ae?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Fe.__webglTexture,N,Mt+Ce):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Fe.__webglTexture,N),Oe?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ae.__webglTexture,Q,fe+Ce):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ae.__webglTexture,Q),N!==0?w.blitFramebuffer(wt,Pt,st,ht,Xt,$t,st,ht,w.COLOR_BUFFER_BIT,w.NEAREST):Oe?w.copyTexSubImage3D(ve,Q,Xt,$t,fe+Ce,wt,Pt,st,ht):w.copyTexSubImage2D(ve,Q,Xt,$t,wt,Pt,st,ht);xt.bindFramebuffer(w.READ_FRAMEBUFFER,null),xt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Oe?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(ve,Q,Xt,$t,fe,st,ht,_t,Yt,yt,ce.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(ve,Q,Xt,$t,fe,st,ht,_t,Yt,ce.data):w.texSubImage3D(ve,Q,Xt,$t,fe,st,ht,_t,Yt,yt,ce):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Q,Xt,$t,st,ht,Yt,yt,ce.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Q,Xt,$t,ce.width,ce.height,Yt,ce.data):w.texSubImage2D(w.TEXTURE_2D,Q,Xt,$t,st,ht,Yt,yt,ce);w.pixelStorei(w.UNPACK_ROW_LENGTH,jt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,He),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Wn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ie),w.pixelStorei(w.UNPACK_SKIP_IMAGES,vi),Q===0&&D.generateMipmaps&&w.generateMipmap(ve),xt.unbindTexture()},this.copyTextureToTexture3D=function(v,D,B=null,G=null,N=0){return v.isTexture!==!0&&(Dn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,v=arguments[2],D=arguments[3],N=arguments[4]||0),Dn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,B,G,N)},this.initRenderTarget=function(v){Et.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),xt.unbindTexture()},this.resetState=function(){C=0,b=0,U=null,xt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}const R={DEV_MODE:!0,APP_VERSION:"1.0.0",WORLD:{SIZE:58,BOUNDS:{MIN_X:-25,MAX_X:26.5,MIN_Z:-14,MAX_Z:14},TILE_SIZE:2,BORDER_HEIGHT:.5,BORDER_THICKNESS:.4},CAMERA:{FRUSTUM_SIZE:20,NEAR:-100,FAR:200,ANGLE_Y:Math.PI/4,ANGLE_X:Math.atan(1/Math.SQRT2),DISTANCE:45,FOLLOW_LERP:.08},LIGHT:{AMBIENT_INTENSITY:.78,AMBIENT_COLOR:16777215,DIRECTIONAL_INTENSITY:1.25,DIRECTIONAL_COLOR:16775914,DIRECTIONAL_POS:{x:25,y:40,z:20}},ECONOMY:{CRATE_PRICE:60,MERCHANT_INTERVAL:60,SALES_BUFFER_CAPACITY:12},ITEMS:{APRICOT:"apricot",CRATE_FRESH:"crate_fresh",CRATE_DRY1:"crate_dry1",CRATE_SULFUR:"crate_sulfur",CRATE_DRY2:"crate_dry2"},CHAIN:[{from:"apricot",to:"crate_fresh",stationId:"station_crate"},{from:"crate_fresh",to:"crate_dry1",stationId:"station_drying1"},{from:"crate_dry1",to:"crate_sulfur",stationId:"station_tent"},{from:"crate_sulfur",to:"crate_dry2",stationId:"station_drying2"}],CAPACITIES:{apricot:10,crate_fresh:3,crate_dry1:3,crate_sulfur:3,crate_dry2:3},ITEM_LABELS:{EMPTY:{label:"BOŞ",icon:"🖐️"},apricot:{label:"KAYISI",icon:"🍑"},crate_fresh:{label:"TAZE KASA",icon:"📦"},crate_dry1:{label:"1. KURU KASA",icon:"🪵"},crate_sulfur:{label:"KÜKÜRT KASA",icon:"✨"},crate_dry2:{label:"2. KURU KASA",icon:"🏆"}},PLAYER:{SPEED:6.2,ROTATION_LERP:.22,RADIUS:.45,HEIGHT:1.6,HEAD_RADIUS:.28,HEAD_HEIGHT:1.35,BODY_HEIGHT:.85,BODY_RADIUS_TOP:.32,BODY_RADIUS_BOTTOM:.38,BODY_Y:.65,FEET_WIDTH:.16,FEET_HEIGHT:.15,FEET_DEPTH:.24,FEET_SPACING:.18,FEET_Y:.075,HAT_RADIUS:.34,HAT_HEIGHT:.12,HAT_TOP_RADIUS:.2,HAT_TOP_HEIGHT:.15,HAT_Y:1.55,BASKET_WIDTH:.56,BASKET_HEIGHT:.55,BASKET_DEPTH:.42,BASKET_Y:.65,BASKET_Z:-.32,STACK:{OFFSET_Y:.8,OFFSET_Z:-.32,COLS:2,ROWS:2,SPACING_X:.2,SPACING_Y:.18,SPACING_Z:.2,SCALE:.75},CRATE_STACK:{OFFSET_Y:.35,OFFSET_Z:-.42,SPACING_Y:.36,SCALE:.68}},TREES:{COUNT:4,POSITIONS:[{x:-20,z:-4.5},{x:-16,z:-4.5},{x:-20,z:4.5},{x:-16,z:4.5}],TRUNK_HEIGHT:1.7,TRUNK_RADIUS_TOP:.28,TRUNK_RADIUS_BOTTOM:.42,TRUNK_SEGMENTS:7,CROWN_TIERS:[{y:1.6,radius:1.5,height:1.25,segments:7},{y:2.45,radius:1.15,height:1.1,segments:7}],FRUITS_PER_TREE:5,FRUIT_OFFSETS:[{x:.95,y:1.9,z:.35},{x:-.85,y:2.1,z:.55},{x:.45,y:2.4,z:-.8},{x:-.7,y:1.9,z:-.65},{x:.1,y:2.6,z:.75}]},APRICOT:{RADIUS:.14,WIDTH_SEGMENTS:7,HEIGHT_SEGMENTS:6,STEM_RADIUS:.02,STEM_HEIGHT:.06,LEAF_WIDTH:.08,LEAF_HEIGHT:.015,LEAF_DEPTH:.05},PROPS:{CRATE:{WIDTH:.68,HEIGHT:.34,DEPTH:.52,WALL_THICKNESS:.05},CRATE_STATION:{POS:{x:-9,z:0},TABLE_WIDTH:2.4,TABLE_HEIGHT:.85,TABLE_DEPTH:1.4,FUNNEL_HEIGHT:.7,INPUT_ZONE:{x:-11.2,z:0,radius:1.2},OUTPUT_ZONE:{x:-6.8,z:0,radius:1.2},SLOT_POSITIONS:[{x:-8.8,y:.85,z:0}],PANEL_POS:{x:-9,y:2.4,z:0}},DRYING_RACK_1:{POS:{x:-1,z:0},WIDTH:2.8,HEIGHT:1.1,DEPTH:1.8,LEG_RADIUS:.06,SHELF_THICKNESS:.05,INPUT_ZONE:{x:-3.2,z:0,radius:1.2},OUTPUT_ZONE:{x:1.2,z:0,radius:1.2},SLOT_POSITIONS:[{x:-1.7,y:.95,z:-.5},{x:-.3,y:.95,z:-.5},{x:-1.7,y:.95,z:.5},{x:-.3,y:.95,z:.5}],PANEL_POS:{x:-1,y:2.4,z:0}},SULFUR_TENT:{POS:{x:7.5,z:0},WIDTH:2.6,HEIGHT:2.2,DEPTH:2.2,INPUT_ZONE:{x:5.3,z:0,radius:1.2},OUTPUT_ZONE:{x:9.7,z:0,radius:1.2},SLOT_POSITIONS:[{x:7.1,y:.25,z:-.4},{x:7.1,y:.25,z:.4}],SMOKE_ORIGIN:{x:6.4,y:1.8,z:0},PANEL_POS:{x:7.5,y:3.1,z:0}},DRYING_RACK_2:{POS:{x:15.5,z:0},WIDTH:2.8,HEIGHT:1.1,DEPTH:1.8,LEG_RADIUS:.06,SHELF_THICKNESS:.05,INPUT_ZONE:{x:13.3,z:0,radius:1.2},OUTPUT_ZONE:{x:17.7,z:0,radius:1.2},SLOT_POSITIONS:[{x:14.8,y:.95,z:-.5},{x:16.2,y:.95,z:-.5},{x:14.8,y:.95,z:.5},{x:16.2,y:.95,z:.5}],PANEL_POS:{x:15.5,y:2.4,z:0}},SALES_STAND:{POS:{x:20.8,z:0},PALLET_WIDTH:2.2,PALLET_HEIGHT:.16,PALLET_DEPTH:1.8,INPUT_ZONE:{x:19.5,z:0,radius:1.2},PANEL_POS:{x:20.8,y:2.5,z:0}},ROAD:{X:23.8,WIDTH:3.2,LENGTH:54,COLOR:5727604,LINE_COLOR:15856374},MERCHANT_TRUCK:{SPEED:10,ROAD_X:23.8,START_Z:-26,STOP_Z:0,END_Z:26,EMPTY_WAIT:1.5,CRATE_FLY_DURATION:.4,DEPART_DELAY:.5}},STATIONS:{ITEM_TRANSFER_INTERVAL:.08,FLOATING_ICON_Y:2.5,SMOKE_POOL_SIZE:10,CRATE_STATION:{ID:"station_crate",NAME:"Kasa İstasyonu",INPUT_TYPE:"apricot",OUTPUT_TYPE:"crate_fresh",INPUT_PER_BATCH:10,PROCESS_TIME:2,SLOT_COUNT:1,INPUT_BUFFER_CAPACITY:30,OUTPUT_LIMIT:2},DRYING_RACK_1:{ID:"station_drying1",NAME:"1. Güneş Kurutma Rafı",INPUT_TYPE:"crate_fresh",OUTPUT_TYPE:"crate_dry1",INPUT_PER_BATCH:1,PROCESS_TIME:20,SLOT_COUNT:4,INPUT_BUFFER_CAPACITY:6,OUTPUT_LIMIT:4},SULFUR_TENT:{ID:"station_tent",NAME:"Kükürt Çadırı",INPUT_TYPE:"crate_dry1",OUTPUT_TYPE:"crate_sulfur",INPUT_PER_BATCH:1,PROCESS_TIME:25,SLOT_COUNT:2,INPUT_BUFFER_CAPACITY:4,OUTPUT_LIMIT:2,HAS_SMOKE:!0},DRYING_RACK_2:{ID:"station_drying2",NAME:"2. Güneş Kurutma Rafı",INPUT_TYPE:"crate_sulfur",OUTPUT_TYPE:"crate_dry2",INPUT_PER_BATCH:1,PROCESS_TIME:20,SLOT_COUNT:4,INPUT_BUFFER_CAPACITY:6,OUTPUT_LIMIT:4}},HARVEST:{TRIGGER_DISTANCE:2.6,STAND_STILL_TIME:1.5,MOVEMENT_THRESHOLD:.12,SHAKE_DURATION:.65,SHAKE_FREQUENCY:32,SHAKE_INTENSITY:.14,RESPAWN_COOLDOWN:15,DROP_FLIGHT_DURATION:.5,DROP_ARC_HEIGHT:1.6},JOYSTICK:{MAX_RADIUS:46,DEADZONE:.08,DEFAULT_POS:{x:80,y:80}},COLORS:{BACKGROUND:7516756,GROUND_LIGHT:8306526,GROUND_DARK:7582803,BORDER:5935426,TREE_TRUNK:6833446,TREE_FOLIAGE_BOTTOM:4758323,TREE_FOLIAGE_TOP:5813056,APRICOT:16753922,APRICOT_DRY1:9124367,APRICOT_SULFUR:16700208,APRICOT_DRY2:4859141,APRICOT_LEAF:3971360,PLAYER_SHIRT:2257043,PLAYER_SKIN:16765861,PLAYER_HAT:15044134,PLAYER_FEET:2899536,BASKET:9198390,CRATE:11040583,CRATE_SLAT:9198390,STATION_TABLE:5726319,STATION_METAL:10793150,STATION_FUNNEL:16739201,RACK_FRAME:5857909,RACK_NET:13808780,TENT_ROOF:13555424,TENT_TRIM:15158332,TENT_ENTRANCE:3093826,SMOKE:16710368,ZONE_INPUT:53971,ZONE_OUTPUT:16697943,ROAD:5727604,ROAD_LINE:15856374,TRUCK_CABIN:15420747,TRUCK_ROOF:16742777,TRUCK_BED:5463144,TRUCK_WHEEL:3093826,TRUCK_BUMPER:14673130},STRINGS:{TITLE:"Kayısı Hasadı",FULL:"DOLU!",WARNING_EMPTY_HANDS:"Önce ellerini boşalt",WARNING_WRONG_CRATE:"Bu kasa buraya uymaz",TOAST_DISCARDED:"Atıldı",DISCARD_BUTTON:"🗑️ At",EMPTY_LABEL:"BOŞ",NO_GOODS:"Mal yok!",LOADING:"Yükleniyor...",UPGRADE_BUTTON:"⚡ Yükselt",UPGRADE_PANEL_TITLE:"Geliştirmeler",LEVEL_MAX:"MAX",LEVEL_FORMAT:"Seviye {0}/{1}",BUY_BUTTON:"Al",RESET_SAVE:"Kaydı Sıfırla",RESET_SAVE_CONFIRM:"Tüm oyun kaydı silinecek ve oyun baştan başlayacak. Emin misiniz?"},STORAGE:{KEY:"kayisi_save",VERSION:2,AUTO_SAVE_INTERVAL:5,DEFAULT_SOUND:!0},TUTORIAL:{STEPS:[{id:"tree",text:"Ağaca git ve durarak kayısı topla",target:{x:-20,y:0,z:-4.5},completeEvent:"apricot_collected"},{id:"crate_station",text:"Topladığın kayısıları Kasa İstasyonu girişine bırak",target:{x:-11.2,y:0,z:0},completeEvent:"station_started",stationId:"station_crate"},{id:"pick_crate",text:"Kasa İstasyonu çıkışındaki taze kasayı al",target:{x:-6.8,y:0,z:0},completeEvent:"crate_picked",itemType:"crate_fresh"},{id:"rack_1",text:"Kasayı 1. Güneş Rafı girişine bırak",target:{x:-3.2,y:0,z:0},completeEvent:"station_started",stationId:"station_drying1"},{id:"tent",text:"Kurutulan kasayı Kükürt Çadırı girişine bırak",target:{x:5.3,y:0,z:0},completeEvent:"station_started",stationId:"station_tent"},{id:"rack_2",text:"Kükürtlü kasayı 2. Güneş Rafı girişine bırak",target:{x:13.3,y:0,z:0},completeEvent:"station_started",stationId:"station_drying2"},{id:"sales",text:"Kuru altın kayısı kasasını Satış Deposuna bırak",target:{x:19.5,y:0,z:0},completeEvent:"dropped",stationId:"sales"},{id:"wait_truck",text:"Tüccar kamyonunu bekle ve altınları kazan",target:{x:23.8,y:0,z:0},completeEvent:"sold"},{id:"upgrade",text:"⚡ Yükselt butonuna dokun ve geliştirme yap",target:null,completeEvent:"upgrade_bought"}],STRINGS:{SKIP_BTN:"Geç",CLOSE_BTN:"✕ Kapat",COMPLETE_TITLE:"Tebrikler!",COMPLETE_TEXT:"Çiftlik döngüsünü öğrendin. Bol kazançlar!"}},AUDIO:{ENABLED_DEFAULT:!0,MAX_COLLECT_RATE:8,MIN_COLLECT_INTERVAL:.125},PARTICLES:{POOL_SIZE:30,GRAVITY:-9.8,DEFAULT_LIFE:.85},UPGRADES:{TENT_CAPACITY:{ID:"tentCapacity",NAME:"Çadır Kapasitesi",ICON:"⛺",BASE_COST:400,COST_MULTIPLIER:1.7,MAX_LEVEL:5,BONUS_PER_LEVEL:1,DESC:"+1 Kükürt Yuvası"},WALK_SPEED:{ID:"walkSpeed",NAME:"Yürüme Hızı",ICON:"👟",BASE_COST:250,COST_MULTIPLIER:1.7,MAX_LEVEL:5,MULTIPLIER_PER_LEVEL:.12,DESC:"+%12 Hız"},CARRY_CAPACITY:{ID:"carryCapacity",NAME:"Taşıma Kapasitesi",ICON:"🎒",BASE_COST:300,COST_MULTIPLIER:1.7,MAX_LEVEL:5,APRICOT_BONUS_PER_LEVEL:3,CRATE_BONUS_PER_LEVEL:1,DESC:"+3 Kayısı, +1 Kasa"},HARVEST_SPEED:{ID:"harvestSpeed",NAME:"Silkeleme Hızı",ICON:"🌳",BASE_COST:200,COST_MULTIPLIER:1.7,MAX_LEVEL:5,REDUCTION_PER_LEVEL:.15,DESC:"-%15 Silkeleme Süresi"}}},vt={groundLight:new Nt({color:R.COLORS.GROUND_LIGHT,flatShading:!0}),groundDark:new Nt({color:R.COLORS.GROUND_DARK,flatShading:!0}),border:new Nt({color:R.COLORS.BORDER,flatShading:!0}),treeTrunk:new Nt({color:R.COLORS.TREE_TRUNK,flatShading:!0}),foliageBottom:new Nt({color:R.COLORS.TREE_FOLIAGE_BOTTOM,flatShading:!0}),foliageTop:new Nt({color:R.COLORS.TREE_FOLIAGE_TOP,flatShading:!0}),apricotFresh:new Nt({color:R.COLORS.APRICOT,flatShading:!0}),apricotDry1:new Nt({color:R.COLORS.APRICOT_DRY1,flatShading:!0}),apricotSulfur:new Nt({color:R.COLORS.APRICOT_SULFUR,flatShading:!0}),apricotDry2:new Nt({color:R.COLORS.APRICOT_DRY2,flatShading:!0}),apricotLeaf:new Nt({color:R.COLORS.APRICOT_LEAF,flatShading:!0}),playerShirt:new Nt({color:R.COLORS.PLAYER_SHIRT,flatShading:!0}),playerSkin:new Nt({color:R.COLORS.PLAYER_SKIN,flatShading:!0}),playerHat:new Nt({color:R.COLORS.PLAYER_HAT,flatShading:!0}),playerFeet:new Nt({color:R.COLORS.PLAYER_FEET,flatShading:!0}),basket:new Nt({color:R.COLORS.BASKET,flatShading:!0}),crate:new Nt({color:R.COLORS.CRATE,flatShading:!0}),crateSlat:new Nt({color:R.COLORS.CRATE_SLAT,flatShading:!0}),stationTable:new Nt({color:R.COLORS.STATION_TABLE,flatShading:!0}),stationMetal:new Nt({color:R.COLORS.STATION_METAL,flatShading:!0}),stationFunnel:new Nt({color:R.COLORS.STATION_FUNNEL,flatShading:!0}),rackFrame:new Nt({color:R.COLORS.RACK_FRAME,flatShading:!0}),rackNet:new Nt({color:R.COLORS.RACK_NET,flatShading:!0}),tentRoof:new Nt({color:R.COLORS.TENT_ROOF,flatShading:!0}),tentTrim:new Nt({color:R.COLORS.TENT_TRIM,flatShading:!0}),tentEntrance:new Nt({color:R.COLORS.TENT_ENTRANCE,flatShading:!0}),smoke:new Nt({color:R.COLORS.SMOKE,transparent:!0,opacity:.5,flatShading:!0}),road:new Nt({color:R.COLORS.ROAD,flatShading:!0}),roadLine:new Nt({color:R.COLORS.ROAD_LINE,flatShading:!0}),truckCabin:new Nt({color:R.COLORS.TRUCK_CABIN,flatShading:!0}),truckRoof:new Nt({color:R.COLORS.TRUCK_ROOF,flatShading:!0}),truckBed:new Nt({color:R.COLORS.TRUCK_BED,flatShading:!0}),truckBumper:new Nt({color:R.COLORS.TRUCK_BUMPER,flatShading:!0}),zoneInput:new Nt({color:R.COLORS.ZONE_INPUT,transparent:!0,opacity:.65}),zoneOutput:new Nt({color:R.COLORS.ZONE_OUTPUT,transparent:!0,opacity:.65}),zoneIcon:new Nt({color:16777215}),progressBg:new Ge({color:R.COLORS.PROGRESS_BG}),progressFill:new Ge({color:R.COLORS.PROGRESS_FILL}),progressPaused:new Ge({color:R.COLORS.PROGRESS_PAUSED}),checkGreen:new Ge({color:R.COLORS.CHECK_GREEN})};function ps(i=!1){const t=new ee;t.name="Apricot";const e=R.APRICOT,n=new gi(e.RADIUS,e.WIDTH_SEGMENTS,e.HEIGHT_SEGMENTS),s=new ut(n,i?vt.apricotDry1:vt.apricotFresh);s.position.y=e.RADIUS,t.add(s);const r=new me(e.STEM_RADIUS,e.STEM_RADIUS,e.STEM_HEIGHT,4),a=new ut(r,vt.treeTrunk);a.position.y=e.RADIUS*2+e.STEM_HEIGHT/2-.02,t.add(a);const o=new Vt(e.LEAF_WIDTH,e.LEAF_HEIGHT,e.LEAF_DEPTH),l=new ut(o,vt.apricotLeaf);return l.position.set(e.LEAF_WIDTH/2,e.RADIUS*2+.01,0),l.rotation.z=.3,t.add(l),t}function Gn(i=R.ITEMS.CRATE_FRESH){const t=new ee;t.name=`Crate_${i}`;const e=R.PROPS.CRATE,n=new Vt(e.WIDTH,.04,e.DEPTH),s=new ut(n,vt.crateSlat);s.position.y=.02,t.add(s);const r=e.HEIGHT-.04,a=new Vt(e.WIDTH,r,e.WALL_THICKNESS),o=new Vt(e.WALL_THICKNESS,r,e.DEPTH-e.WALL_THICKNESS*2),l=new ut(a,vt.crate);l.position.set(0,r/2+.04,e.DEPTH/2-e.WALL_THICKNESS/2);const c=new ut(a,vt.crate);c.position.set(0,r/2+.04,-.52/2+e.WALL_THICKNESS/2);const u=new ut(o,vt.crate);u.position.set(-.68/2+e.WALL_THICKNESS/2,r/2+.04,0);const d=new ut(o,vt.crate);d.position.set(e.WIDTH/2-e.WALL_THICKNESS/2,r/2+.04,0),t.add(l,c,u,d);let f=vt.apricotFresh;i===R.ITEMS.CRATE_DRY1?f=vt.apricotDry1:i===R.ITEMS.CRATE_SULFUR?f=vt.apricotSulfur:i===R.ITEMS.CRATE_DRY2&&(f=vt.apricotDry2);const p=new gi(.08,6,5),_=2,S=3,m=.16,h=.16;for(let A=0;A<_;A++)for(let M=0;M<S;M++){const T=new ut(p,f),P=(M-(S-1)/2)*m,C=(A-(_-1)/2)*h;T.position.set(P,.14,C),t.add(T)}return t.userData={type:i,height:e.HEIGHT},t}function np(){const i=new ee;i.name="CrateStation";const t=R.PROPS.CRATE_STATION,e=new Vt(t.TABLE_WIDTH,.1,t.TABLE_DEPTH),n=new ut(e,vt.stationTable);n.position.y=t.TABLE_HEIGHT,i.add(n);const s=new me(.06,.06,t.TABLE_HEIGHT,6),r=t.TABLE_WIDTH/2-.15,a=t.TABLE_DEPTH/2-.15;[[-r,-a],[r,-a],[-r,a],[r,a]].forEach(([d,f])=>{const p=new ut(s,vt.stationMetal);p.position.set(d,t.TABLE_HEIGHT/2,f),i.add(p)});const o=new me(.48,.18,t.FUNNEL_HEIGHT,8,1,!0),l=new ut(o,vt.stationFunnel);l.position.set(-2.4/4,t.TABLE_HEIGHT+t.FUNNEL_HEIGHT/2,0),i.add(l);const c=new Vt(t.TABLE_WIDTH/2.2,.06,t.TABLE_DEPTH*.7),u=new ut(c,vt.stationMetal);return u.position.set(t.TABLE_WIDTH/4,t.TABLE_HEIGHT+.06,0),i.add(u),i}function io(){const i=new ee;i.name="DryingRack";const t=R.PROPS.DRYING_RACK_1,e=new Vt(t.WIDTH,t.SHELF_THICKNESS,t.DEPTH),n=new ut(e,vt.rackNet);n.position.y=t.HEIGHT,i.add(n);const s=new me(t.LEG_RADIUS,t.LEG_RADIUS,t.HEIGHT,6),r=t.WIDTH/2-.1,a=t.DEPTH/2-.1;[[-r,-a],[0,-a],[r,-a],[-r,a],[0,a],[r,a]].forEach(([d,f])=>{const p=new ut(s,vt.rackFrame);p.position.set(d,t.HEIGHT/2,f),i.add(p)});const o=new Vt(.04,.08,t.DEPTH),l=new ut(o,vt.rackFrame);l.position.set(0,t.HEIGHT+.04,0);const c=new Vt(t.WIDTH,.08,.04),u=new ut(c,vt.rackFrame);return u.position.set(0,t.HEIGHT+.04,0),i.add(l,u),i}function ip(){const i=new ee;i.name="SulfurTent";const t=R.PROPS.SULFUR_TENT,e=t.WIDTH/1.5,n=new me(e,e,t.DEPTH,3);n.rotateZ(Math.PI/2),n.rotateY(Math.PI/6);const s=new ut(n,vt.tentRoof);s.position.set(0,t.HEIGHT/2+.2,0),i.add(s);const r=new Vt(.12,.12,t.DEPTH+.1),a=new ut(r,vt.tentTrim);a.position.set(0,t.HEIGHT+.25,0),i.add(a);const o=new Vt(.06,1.2,.9),l=new ut(o,vt.tentEntrance);l.position.set(-2.6/2+.15,.6,0),i.add(l);const c=new Vt(t.WIDTH+.2,.15,t.DEPTH+.2),u=new ut(c,vt.stationTable);return u.position.y=.075,i.add(u),i}function sp(i){const t=new ee;t.name=`FloatingBadge_${i}`;let e;i===R.ITEMS.APRICOT?(e=ps(!1),e.scale.setScalar(1.2)):(e=Gn(i),e.scale.setScalar(.7)),e.position.y=0,t.add(e);const n=new me(.3,.3,.01,16),s=new Ge({color:0,transparent:!0,opacity:.25}),r=new ut(n,s);return r.position.y=-.3,t.add(r),t}function rp(){const i=new gi(.2,6,5),t=new ut(i,vt.smoke);return t.visible=!1,t.userData={active:!1,life:0,maxLife:2.2,vx:0,vy:.8,vz:0,baseScale:1},t}function Nr(i,t=1.2){const e=new ee;e.name=`ZoneMarker_${i}`;const n=i==="input",s=n?vt.zoneInput:vt.zoneOutput,r=new me(t,t,.02,24),a=new ut(r,s);a.position.y=.01,e.add(a);const o=new ee;if(o.position.y=.025,n){const l=new Vt(.12,.01,.35),c=new ut(l,vt.zoneIcon);c.position.z=-.08;const u=new me(.24,0,.01,3);u.rotateY(Math.PI);const d=new ut(u,vt.zoneIcon);d.position.z=.16,o.add(c,d)}else{const l=new Vt(.12,.01,.35),c=new ut(l,vt.zoneIcon);c.position.z=.08;const u=new me(.24,0,.01,3),d=new ut(u,vt.zoneIcon);d.position.z=-.16,o.add(c,d)}return e.add(o),e.userData={ringMesh:a,iconGroup:o},e}function so(i=1){const t=document.createElement("canvas"),e=44,n=14,s=340,r=n*2+i*e;t.width=s,t.height=r;const a=t.getContext("2d"),o=new Kr(t);o.minFilter=Ue;const l=1.35,c=.22+i*.16,u=new Vn(l,c),d=new Ge({map:o,transparent:!0,depthWrite:!1}),f=new ut(u,d);f.name="StationStatusPanel";let p="";return f.userData={update:(_,S)=>{const m=_.map(h=>{const A=Math.max(0,Math.ceil(h.maxTime-h.progress));return`${h.state}_${A}_${S?1:0}`}).join("|");m!==p&&(p=m,a.clearRect(0,0,s,r),a.fillStyle="rgba(26, 36, 43, 0.88)",a.strokeStyle="rgba(255, 255, 255, 0.35)",a.lineWidth=3,En(a,4,4,s-8,r-8,12),a.fill(),a.stroke(),_.forEach((h,A)=>{const M=n+A*e;a.fillStyle="#dfe4ea",a.font="bold 15px sans-serif",a.textAlign="left",a.textBaseline="middle",a.fillText(`S${A+1}:`,14,M+15);const T=48,P=M+4,C=180,b=22;if(h.state==="EMPTY")a.fillStyle="rgba(255, 255, 255, 0.12)",En(a,T,P,C,b,5),a.fill(),a.fillStyle="#a4b0be",a.font="13px sans-serif",a.fillText("Boş",T+10,P+b/2);else if(h.state==="PROCESSING"){a.fillStyle="rgba(0, 0, 0, 0.45)",En(a,T,P,C,b,5),a.fill();const U=Math.max(.02,Math.min(1,h.progress/h.maxTime));a.fillStyle=S?"#e67e22":"#10ac84",En(a,T,P,C*U,b,5),a.fill();const x=Math.max(0,Math.ceil(h.maxTime-h.progress));a.fillStyle="#ffffff",a.font="bold 14px sans-serif",a.textAlign="left",a.fillText(S?"Durakladı":`${x}sn`,T+C+10,P+b/2)}else h.state==="READY"&&(a.fillStyle="rgba(46, 213, 115, 0.2)",En(a,T,P,C,b,5),a.fill(),a.fillStyle="#2ed573",a.font="bold 15px sans-serif",a.textAlign="left",a.fillText("✓ HAZIR",T+10,P+b/2))}),o.needsUpdate=!0)}},f}function En(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.lineTo(t+n-r,e),i.quadraticCurveTo(t+n,e,t+n,e+r),i.lineTo(t+n,e+s-r),i.quadraticCurveTo(t+n,e+s,t+n-r,e+s),i.lineTo(t+r,e+s),i.quadraticCurveTo(t,e+s,t,e+s-r),i.lineTo(t,e+r),i.quadraticCurveTo(t,e,t+r,e),i.closePath()}function ap(){const i=new ee;i.name="Player";const t=R.PLAYER,e=new Vt(t.FEET_WIDTH,t.FEET_HEIGHT,t.FEET_DEPTH),n=new ut(e,vt.playerFeet);n.position.set(-.18,t.FEET_Y,.02);const s=new ut(e,vt.playerFeet);s.position.set(t.FEET_SPACING,t.FEET_Y,.02),i.add(n,s);const r=new me(t.BODY_RADIUS_TOP,t.BODY_RADIUS_BOTTOM,t.BODY_HEIGHT,8),a=new ut(r,vt.playerShirt);a.position.y=t.BODY_Y,i.add(a);const o=new gi(t.HEAD_RADIUS,8,7),l=new ut(o,vt.playerSkin);l.position.y=t.HEAD_HEIGHT,i.add(l);const c=new me(t.HAT_RADIUS,t.HAT_RADIUS,t.HAT_HEIGHT,8),u=new ut(c,vt.playerHat);u.position.y=t.HAT_Y;const d=new me(t.HAT_TOP_RADIUS,t.HAT_TOP_RADIUS,t.HAT_TOP_HEIGHT,8),f=new ut(d,vt.playerHat);f.position.y=t.HAT_Y+t.HAT_HEIGHT/2+t.HAT_TOP_HEIGHT/2,i.add(u,f);const p=new Vt(t.BASKET_WIDTH,t.BASKET_HEIGHT,t.BASKET_DEPTH),_=new ut(p,vt.basket);_.position.set(0,t.BASKET_Y,t.BASKET_Z),i.add(_);const S=new ee;S.name="FruitAnchor",S.position.set(0,t.STACK.OFFSET_Y,t.STACK.OFFSET_Z),i.add(S);const m=new ee;return m.name="CrateAnchor",m.position.set(0,t.CRATE_STACK.OFFSET_Y,t.CRATE_STACK.OFFSET_Z),i.add(m),i.userData={fruitAnchor:S,crateAnchor:m,basketMesh:_,leftFoot:n,rightFoot:s},i}function op(){const i=new ee;i.name="Tree";const t=R.TREES,e=new me(t.TRUNK_RADIUS_TOP,t.TRUNK_RADIUS_BOTTOM,t.TRUNK_HEIGHT,t.TRUNK_SEGMENTS),n=new ut(e,vt.treeTrunk);n.position.y=t.TRUNK_HEIGHT/2,i.add(n);const s=new ee;s.name="CrownGroup",t.CROWN_TIERS.forEach((a,o)=>{const l=new me(.1,a.radius,a.height,a.segments),c=o===0?vt.foliageBottom:vt.foliageTop,u=new ut(l,c);u.position.y=a.y+a.height/2,s.add(u)}),i.add(s);const r=[];for(let a=0;a<t.FRUITS_PER_TREE;a++){const o=ps(!1),l=t.FRUIT_OFFSETS[a]||{x:0,y:2,z:0};o.position.set(l.x,l.y,l.z),o.userData={basePos:o.position.clone(),index:a},s.add(o),r.push(o)}return i.userData={crownGroup:s,fruitMeshes:r},i}function lp(i=!1,t=R.WORLD.TILE_SIZE){const e=new ee,n=new Vt(t,.4,t),s=i?vt.groundDark:vt.groundLight,r=new ut(n,s);return r.position.y=-.2,e.add(r),e}function es(i,t,e){const n=new ee,s=new Vt(i,t,e),r=new ut(s,vt.border);return r.position.y=t/2,n.add(r),n}function cp(){const i=new ee;i.name="MerchantTruck";const t=.36,e=.28,n=2.1,s=3.2,r=.7,a=new Vt(n,.12,s),o=new ut(a,vt.truckBed);o.position.set(0,t*2+.06,-.4),i.add(o);const l=new Vt(.08,r,s),c=new ut(l,vt.truckBed);c.position.set(-n/2+.04,t*2+r/2,-.4);const u=new ut(l,vt.truckBed);u.position.set(n/2-.04,t*2+r/2,-.4);const d=new Vt(n,r,.08),f=new ut(d,vt.truckBed);f.position.set(0,t*2+r/2,-.4-s/2+.04),i.add(c,u,f);const p=1.9,_=1.5,S=1.5,m=new Vt(p,_,S),h=new ut(m,vt.truckCabin);h.position.set(0,t*2+_/2,1.35),i.add(h);const A=new Vt(p-.2,.6,.04),M=new Nt({color:3093826,flatShading:!0}),T=new ut(A,M);T.position.set(0,t*2+_*.65,1.35+S/2+.01),i.add(T);const P=new Vt(p+.1,.35,.2),C=new ut(P,vt.truckBumper);C.position.set(0,t+.1,1.35+S/2+.1),i.add(C);const b=new Vt(.24,.18,.04),U=new Ge({color:15844367}),x=new ut(b,U);x.position.set(-.6,t+.15,1.35+S/2+.21);const E=new ut(b,U);E.position.set(.6,t+.15,1.35+S/2+.21),i.add(x,E);const I=new me(t,t,e,12);I.rotateZ(Math.PI/2),[[-n/2-e/2,t,1.35],[n/2+e/2,t,1.35],[-n/2-e/2,t,-.1],[n/2+e/2,t,-.1],[-n/2-e/2,t,-1.3],[n/2+e/2,t,-1.3]].forEach(([X,q,W])=>{const j=new ut(I,vt.truckWheel);j.position.set(X,q,W),i.add(j)});const k=new ee;return k.name="CrateBedAnchor",k.position.set(0,t*2+.12,-.4),i.add(k),i.userData={crateBedAnchor:k},i}function up(i=3.2,t=54){const e=new ee;e.name="Road";const n=new Vt(i,.04,t),s=new ut(n,vt.road);s.position.y=.02,e.add(s);const r=Math.floor(t/2.4),a=new Vt(.18,.045,1.2);for(let o=0;o<r;o++){const l=new ut(a,vt.roadLine);l.position.set(0,.025,-t/2+1.2+o*2.4),e.add(l)}return e}function hp(){const i=new ee;i.name="SalesStand";const t=R.PROPS.SALES_STAND,e=new Vt(t.PALLET_WIDTH,t.PALLET_HEIGHT,t.PALLET_DEPTH),n=new ut(e,vt.crateSlat);n.position.y=t.PALLET_HEIGHT/2,i.add(n);const s=new me(.05,.05,.6,6),r=t.PALLET_WIDTH/2-.08,a=t.PALLET_DEPTH/2-.08;[[-r,-a],[r,-a],[-r,a],[r,a]].forEach(([l,c])=>{const u=new ut(s,vt.stationMetal);u.position.set(l,.3,c),i.add(u)});const o=new ee;return o.name="CrateStackAnchor",o.position.set(0,t.PALLET_HEIGHT,0),i.add(o),i.userData={crateStackAnchor:o},i}function dp(){const i=document.createElement("canvas");i.width=380,i.height=140;const t=i.getContext("2d"),e=new Kr(i);e.minFilter=Ue;const n=1.45,s=.55,r=new Vn(n,s),a=new Ge({map:e,transparent:!0,depthWrite:!1}),o=new ut(r,a);o.name="SalesBillboard";let l="";return o.userData={update:(c,u,d,f)=>{const p=`${Math.ceil(c)}_${u}_${d}_${f?1:0}`;if(p===l)return;if(l=p,t.clearRect(0,0,i.width,i.height),t.fillStyle="rgba(26, 36, 43, 0.92)",t.strokeStyle="rgba(255, 255, 255, 0.35)",t.lineWidth=3,En(t,4,4,i.width-8,i.height-8,14),t.fill(),t.stroke(),f)t.fillStyle="#2ed573",t.font="bold 20px sans-serif",t.textAlign="center",t.fillText("🚚 Yükleniyor...",i.width/2,42);else{t.fillStyle="#ffffff",t.font="bold 18px sans-serif",t.textAlign="center";const M=Math.max(0,Math.ceil(c));t.fillText(`Sonraki kamyon: ${M}sn`,i.width/2,42)}t.fillStyle="#f1f2f6",t.font="bold 16px sans-serif",t.textAlign="left",t.fillText(`Depo: ${u} / ${d}`,32,95);const _=180,S=80,m=160,h=20;t.fillStyle="rgba(0, 0, 0, 0.5)",En(t,_,S,m,h,5),t.fill();const A=Math.max(0,Math.min(1,u/d));t.fillStyle="#e67e22",En(t,_,S,m*A,h,5),t.fill(),e.needsUpdate=!0}},o}function fp(i,t="#2ed573"){const e=document.createElement("canvas");e.width=300,e.height=90;const n=e.getContext("2d");n.fillStyle=t,n.strokeStyle="#000000",n.lineWidth=4,n.font="900 36px sans-serif",n.textAlign="center",n.textBaseline="middle",n.strokeText(i,e.width/2,e.height/2),n.fillText(i,e.width/2,e.height/2);const s=new Kr(e);s.minFilter=Ue;const r=new Vn(1.6,.48),a=new Ge({map:s,transparent:!0,depthWrite:!1}),o=new ut(r,a);return o.name=`FloatingNotice_${i}`,o.userData={life:0,maxLife:1.8,vy:1.4},o}class pp{constructor(){this.listeners=new Map}on(t,e){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(e),()=>this.off(t,e)}off(t,e){const n=this.listeners.get(t);n&&(n.delete(e),n.size===0&&this.listeners.delete(t))}emit(t,e){R&&R.DEV_MODE&&console.log(`[Event Emit] ${t}:`,e!==void 0?e:null);const n=this.listeners.get(t);n&&n.forEach(s=>{try{s(e)}catch(r){console.error(`Error in event listener for "${t}":`,r)}})}}const re=new pp;class ns{constructor(t){this.id=t.id,this.name=t.name,this.inputType=t.inputType,this.outputType=t.outputType,this.inputPerBatch=t.inputPerBatch,this.processTime=t.processTime,this.slotCount=t.slotCount,this.inputBufferCapacity=t.inputBufferCapacity||t.slotCount*t.inputPerBatch+2,this.outputLimit=t.outputLimit!==void 0?t.outputLimit:t.slotCount,this.scene=t.scene,this.onWarning=t.onWarning||(()=>{});const e=1.2;this.inputZone={x:t.inputZone.x,z:t.inputZone.z,radius:t.inputZone.radius||e},this.outputZone={x:t.outputZone.x,z:t.outputZone.z,radius:t.outputZone.radius||e},this.inputMarker=Nr("input",this.inputZone.radius),this.inputMarker.position.set(this.inputZone.x,.01,this.inputZone.z),this.scene.add(this.inputMarker),this.outputMarker=Nr("output",this.outputZone.radius),this.outputMarker.position.set(this.outputZone.x,.01,this.outputZone.z),this.scene.add(this.outputMarker),this.group=t.stationGroup||null,this.group&&!this.group.parent&&this.scene.add(this.group),this.inputBuffer=0,this.transferTimer=0,this.slots=[],this.slotPositions=t.slotPositions||[];for(let n=0;n<this.slotCount;n++){const s=this.slotPositions[n]||{x:this.inputZone.x,y:1,z:this.inputZone.z};this.slots.push({index:n,state:"EMPTY",progress:0,maxTime:this.processTime,position:s,itemMesh:null})}if(this.panelPos=t.panelPos||{x:(this.inputZone.x+this.outputZone.x)/2,y:2.5,z:(this.inputZone.z+this.outputZone.z)/2},this.statusPanel=so(this.slotCount),this.statusPanel.position.set(this.panelPos.x,this.panelPos.y,this.panelPos.z),this.scene.add(this.statusPanel),this.floatingIconType=t.floatingIconType||this.inputType,this.floatingIconType){this.floatingBadge=sp(this.floatingIconType);const n=(this.inputZone.x+this.outputZone.x)/2,s=(this.inputZone.z+this.outputZone.z)/2;this.baseBadgeY=this.panelPos.y+(.22+this.slotCount*.16)/2+.45,this.floatingBadge.position.set(n,this.baseBadgeY,s),this.scene.add(this.floatingBadge),this.badgeTimer=0}if(this.hasSmoke=!!t.hasSmoke,this.smokeOrigin=t.smokeOrigin||{x:this.inputZone.x,y:1.6,z:this.inputZone.z},this.smokePool=[],this.smokeSpawnTimer=0,this.hasSmoke){const n=R.STATIONS.SMOKE_POOL_SIZE;for(let s=0;s<n;s++){const r=rp();this.scene.add(r),this.smokePool.push(r)}}}update(t,e,n){const s=e.getPosition();n&&this.statusPanel&&this.statusPanel.quaternion.copy(n.quaternion),this.floatingBadge&&(this.badgeTimer+=t,this.floatingBadge.rotation.y+=t*1.5,this.floatingBadge.position.y=this.baseBadgeY+Math.sin(this.badgeTimer*2.2)*.08);const a=Math.hypot(s.x-this.inputZone.x,s.z-this.inputZone.z)<=this.inputZone.radius,l=Math.hypot(s.x-this.outputZone.x,s.z-this.outputZone.z)<=this.outputZone.radius;this.inputMarker&&this.inputMarker.scale.setScalar(a?1.06:1),this.outputMarker&&this.outputMarker.scale.setScalar(l?1.06:1);const u=this.slots.filter(d=>d.state==="READY").length>=this.outputLimit;this._handleInputDeposit(t,e,a),this._updateSlots(t,u),this.statusPanel&&this.statusPanel.userData.update&&this.statusPanel.userData.update(this.slots,u),this.hasSmoke&&this._updateSmoke(t,u),this._handleOutputCollection(t,e,l)}_handleInputDeposit(t,e,n){if(!n)return;const s=e.getCurrentType();if(!(e.getCount()<=0||s===null)){if(s!==this.inputType){this.onWarning(R.STRINGS.WARNING_WRONG_CRATE),re.emit("warning",{message:R.STRINGS.WARNING_WRONG_CRATE});return}this.inputBuffer>=this.inputBufferCapacity||(this.transferTimer+=t,this.transferTimer>=R.STATIONS.ITEM_TRANSFER_INTERVAL&&(this.transferTimer=0,e.removeItem()&&(this.inputBuffer+=1,re.emit("dropped",{stationId:this.id,itemType:s}))))}}_updateSlots(t,e){if(!e)for(const n of this.slots)n.state==="EMPTY"&&this.inputBuffer>=this.inputPerBatch&&(this.inputBuffer-=this.inputPerBatch,n.state="PROCESSING",n.progress=0,n.itemMesh&&this.scene.remove(n.itemMesh),n.itemMesh=Gn(this.inputType===R.ITEMS.APRICOT?R.ITEMS.CRATE_FRESH:this.inputType),n.itemMesh.position.set(n.position.x,n.position.y,n.position.z),this.scene.add(n.itemMesh),re.emit("station_started",{stationId:this.id,inputType:this.inputType}));for(const n of this.slots)n.state==="PROCESSING"&&(e||(n.progress+=t,n.progress>=n.maxTime&&(n.state="READY",n.itemMesh&&this.scene.remove(n.itemMesh),n.itemMesh=Gn(this.outputType),n.itemMesh.position.set(n.position.x,n.position.y,n.position.z),this.scene.add(n.itemMesh),re.emit("crate_made",{stationId:this.id,outputType:this.outputType}),re.emit("station_ready",{stationId:this.id,slotIndex:n.index,position:{x:n.position.x,y:n.position.y,z:n.position.z}}))))}_updateSmoke(t,e){if(!e&&this.slots.some(s=>s.state==="PROCESSING")&&(this.smokeSpawnTimer+=t,this.smokeSpawnTimer>=.22)){this.smokeSpawnTimer=0;const s=this.smokePool.find(r=>!r.userData.active);s&&(s.visible=!0,s.userData.active=!0,s.userData.life=0,s.userData.maxLife=2+Math.random()*.4,s.position.set(this.smokeOrigin.x+(Math.random()-.5)*.25,this.smokeOrigin.y,this.smokeOrigin.z+(Math.random()-.5)*.25),s.userData.vx=(Math.random()-.5)*.2,s.userData.vy=.65+Math.random()*.25,s.userData.vz=(Math.random()-.5)*.2,s.scale.setScalar(.7))}for(const s of this.smokePool)if(s.userData.active){s.userData.life+=t;const r=s.userData.life/s.userData.maxLife;r>=1?(s.userData.active=!1,s.visible=!1):(s.position.x+=s.userData.vx*t,s.position.y+=s.userData.vy*t,s.position.z+=s.userData.vz*t,s.scale.setScalar(.7+r*1.5))}}_handleOutputCollection(t,e,n){if(!n)return;const s=this.slots.find(o=>o.state==="READY");if(!s)return;const r=e.getCurrentType();if(r!==null&&r!==this.outputType){this.onWarning(R.STRINGS.WARNING_EMPTY_HANDS),re.emit("warning",{message:R.STRINGS.WARNING_EMPTY_HANDS});return}if(e.isFull())return;e.addItem(this.outputType)&&(s.itemMesh&&(this.scene.remove(s.itemMesh),s.itemMesh=null),s.state="EMPTY",s.progress=0,re.emit("crate_picked",{stationId:this.id,type:this.outputType}))}getSlots(){return this.slots}getInputBuffer(){return this.inputBuffer}getProcessingCount(){return this.slots.filter(t=>t.state==="PROCESSING").length}getReadyCount(){return this.slots.filter(t=>t.state==="READY").length}hasReadyCrate(){return this.slots.some(t=>t.state==="READY")}getTotalItems(){return this.inputBuffer+this.slots.filter(t=>t.state!=="EMPTY").length}setSlotCount(t){if(!(t<=0||t===this.slotCount)){for(this.slotCount=t,this.inputBufferCapacity=this.slotCount*this.inputPerBatch+2;this.slots.length<this.slotCount;){const e=this.slots.length,n=this.slotPositions[0]||{x:this.inputZone.x,y:.25,z:0},s=(e%3-1)*.45,r=Math.floor(e/3)*.4,a={x:n.x+r,y:n.y,z:(n.z||0)+s};this.slots.push({index:e,state:"EMPTY",progress:0,maxTime:this.processTime,position:a,itemMesh:null})}if(this.slots.length>this.slotCount){for(let e=this.slotCount;e<this.slots.length;e++)this.slots[e].itemMesh&&this.scene.remove(this.slots[e].itemMesh);this.slots.length=this.slotCount}if(this.statusPanel&&this.scene.remove(this.statusPanel),this.statusPanel=so(this.slotCount),this.statusPanel.position.set(this.panelPos.x,this.panelPos.y,this.panelPos.z),this.scene.add(this.statusPanel),this.floatingBadge){const e=.22+this.slotCount*.16;this.baseBadgeY=this.panelPos.y+e/2+.45,this.floatingBadge.position.y=this.baseBadgeY}}}}class mp{constructor(){this.money=0,this.totalCratesSold=0,this.totalTrucksServed=0,this.salesHistory=[],this.tutorialDone=!1,this.soundEnabled=!0,this.upgrades={},this.resetUpgrades(),this.upgradeCallbacks=[],this.load()}resetUpgrades(){R.UPGRADES&&Object.keys(R.UPGRADES).forEach(t=>{const e=R.UPGRADES[t];this.upgrades[e.ID]=0})}getMoney(){return this.money}addMoney(t,e=0){const n=Math.max(0,Math.round(t));this.money+=n,this.totalCratesSold+=e,this.totalTrucksServed+=1,this.salesHistory.push({timestamp:performance.now(),amount:n,crates:e});const s=performance.now()-3e5;this.salesHistory=this.salesHistory.filter(r=>r.timestamp>=s),this.save()}getMoneyPerMinute(){const t=performance.now()-6e4;return this.salesHistory.filter(e=>e.timestamp>=t).reduce((e,n)=>e+n.amount,0)}getAveragePerTruck(){if(this.totalTrucksServed===0)return 0;const t=this.salesHistory.reduce((e,n)=>e+n.amount,0);return Math.round(t/this.totalTrucksServed)}getTotalCratesSold(){return this.totalCratesSold}getTotalTrucksServed(){return this.totalTrucksServed}getUpgradeDefinition(t){return R.UPGRADES&&Object.values(R.UPGRADES).find(e=>e.ID===t)||null}getUpgradeLevel(t){return this.upgrades[t]||0}getTotalUpgradesCount(){return Object.values(this.upgrades).reduce((t,e)=>t+(e||0),0)}getUpgradeCost(t){const e=this.getUpgradeDefinition(t);if(!e)return null;const n=this.getUpgradeLevel(t);return n>=e.MAX_LEVEL?null:Math.round(e.BASE_COST*Math.pow(e.COST_MULTIPLIER,n))}canAffordUpgrade(t){const e=this.getUpgradeCost(t);return e!==null&&this.money>=e}isUpgradeMaxed(t){const e=this.getUpgradeDefinition(t);return e?this.getUpgradeLevel(t)>=e.MAX_LEVEL:!1}purchaseUpgrade(t){if(!this.getUpgradeDefinition(t))return!1;const n=this.getUpgradeCost(t);return n===null||this.money<n?!1:(this.money-=n,this.upgrades[t]=(this.upgrades[t]||0)+1,this.save(),this._notifyUpgradeChanged(t,this.upgrades[t]),re.emit("upgrade_bought",{upgradeId:t,level:this.upgrades[t]}),!0)}isTutorialDone(){return this.tutorialDone}setTutorialDone(t=!0){this.tutorialDone=t,this.save()}isSoundEnabled(){return this.soundEnabled}setSoundEnabled(t=!0){this.soundEnabled=t,this.save()}onUpgradeChanged(t){this.upgradeCallbacks.push(t)}_notifyUpgradeChanged(t,e){this.upgradeCallbacks.forEach(n=>{try{n(t,e)}catch(s){console.error("Error in upgrade callback:",s)}})}getStat(t){switch(t){case"walkSpeed":{const n=(this.upgrades.walkSpeed||0)*R.UPGRADES.WALK_SPEED.MULTIPLIER_PER_LEVEL;return R.PLAYER.SPEED*(1+n)}case"carryCapacityApricot":{const n=(this.upgrades.carryCapacity||0)*R.UPGRADES.CARRY_CAPACITY.APRICOT_BONUS_PER_LEVEL;return R.CAPACITIES.apricot+n}case"carryCapacityCrate":{const n=(this.upgrades.carryCapacity||0)*R.UPGRADES.CARRY_CAPACITY.CRATE_BONUS_PER_LEVEL;return R.CAPACITIES.crate_fresh+n}case"tentSlots":{const n=(this.upgrades.tentCapacity||0)*R.UPGRADES.TENT_CAPACITY.BONUS_PER_LEVEL;return R.STATIONS.SULFUR_TENT.SLOT_COUNT+n}case"standStillTime":{const n=(this.upgrades.harvestSpeed||0)*R.UPGRADES.HARVEST_SPEED.REDUCTION_PER_LEVEL;return R.HARVEST.STAND_STILL_TIME*Math.max(.1,1-n)}default:return 0}}maxAllUpgrades(){R.UPGRADES&&Object.values(R.UPGRADES).forEach(t=>{this.upgrades[t.ID]=t.MAX_LEVEL}),this.save(),this._notifyUpgradeChanged("*",5)}save(){if(!this._saveDisabled)try{const t={version:R.STORAGE.VERSION,money:this.money,upgrades:this.upgrades,tutorialDone:this.tutorialDone,soundEnabled:this.soundEnabled,savedAt:Date.now()};localStorage.setItem(R.STORAGE.KEY,JSON.stringify(t))}catch(t){console.warn("Failed to save game state to localStorage:",t)}}load(){try{const t=localStorage.getItem(R.STORAGE.KEY);if(!t)return!1;const e=JSON.parse(t);if(!e||typeof e!="object")return this._handleCorruptSave("Save is not an object"),!1;if(e.version!==1&&e.version!==2)return this._handleCorruptSave(`Version mismatch: expected 1 or 2, got ${e.version}`),!1;if(typeof e.money!="number"||isNaN(e.money)||e.money<0)return this._handleCorruptSave("Invalid money value"),!1;if(!e.upgrades||typeof e.upgrades!="object")return this._handleCorruptSave("Invalid upgrades object"),!1;const n={};for(const s of Object.keys(R.UPGRADES)){const r=R.UPGRADES[s],a=e.upgrades[r.ID];if(typeof a!="number"||isNaN(a)||a<0||a>r.MAX_LEVEL)return this._handleCorruptSave(`Invalid level for upgrade ${r.ID}: ${a}`),!1;n[r.ID]=Math.floor(a)}return this.money=Math.round(e.money),this.upgrades=n,this.tutorialDone=typeof e.tutorialDone=="boolean"?e.tutorialDone:!1,this.soundEnabled=typeof e.soundEnabled=="boolean"?e.soundEnabled:!0,e.version===1&&(console.log("[Save System] Successfully migrated save from version 1 to 2."),this.save()),!0}catch(t){return this._handleCorruptSave(`JSON parse or read error: ${t.message}`),!1}}_handleCorruptSave(t){console.warn(`[Save System] Resilient fallback: ${t}. Starting fresh.`),this.money=0,this.resetUpgrades(),this.tutorialDone=!1,this.soundEnabled=!0;try{localStorage.removeItem(R.STORAGE.KEY)}catch{}}resetSave(){try{localStorage.removeItem(R.STORAGE.KEY)}catch{}this.money=0,this.totalCratesSold=0,this.totalTrucksServed=0,this.salesHistory=[],this.tutorialDone=!1,this.soundEnabled=!0,this.resetUpgrades(),this._notifyUpgradeChanged("*",0)}}const se=new mp;class _p{constructor(t){this.scene=t.scene,this.onWarning=t.onWarning||(()=>{});const e=R.PROPS.SALES_STAND;this.pos=e.POS,this.capacity=R.ECONOMY.SALES_BUFFER_CAPACITY,this.cratesCount=0,this.transferTimer=0,this.group=hp(),this.group.position.set(this.pos.x,0,this.pos.z),this.scene.add(this.group),this.crateStackAnchor=this.group.userData.crateStackAnchor,this.visualCrates=[],this.inputZone={x:e.INPUT_ZONE.x,z:e.INPUT_ZONE.z,radius:e.INPUT_ZONE.radius},this.inputMarker=Nr("input",this.inputZone.radius),this.inputMarker.position.set(this.inputZone.x,.01,this.inputZone.z),this.scene.add(this.inputMarker),this.billboard=dp(),this.billboard.position.set(e.PANEL_POS.x,e.PANEL_POS.y,e.PANEL_POS.z),this.scene.add(this.billboard);const n=R.PROPS.MERCHANT_TRUCK;this.truckConfig=n,this.truckState="WAITING",this.truckTimer=R.ECONOMY.MERCHANT_INTERVAL,this.truckStateTimer=0,this.truckGroup=null,this.truckSnapshot=0,this.flyingCrates=[],this.floatingNotices=[]}update(t,e,n){n&&this.billboard&&this.billboard.quaternion.copy(n.quaternion),this._handlePlayerDeposit(t,e),this._updateMerchantTruck(t),this._updateFlyingCrates(t),this._updateFloatingNotices(t,n);const s=this.truckState==="ARRIVING"||this.truckState==="STOPPED"||this.truckState==="LOADING"||this.truckState==="POST_LOAD";this.billboard&&this.billboard.userData.update&&this.billboard.userData.update(this.truckTimer,this.cratesCount,this.capacity,s)}_handlePlayerDeposit(t,e){const n=e.getPosition(),r=Math.hypot(n.x-this.inputZone.x,n.z-this.inputZone.z)<=this.inputZone.radius;if(this.inputMarker&&this.inputMarker.scale.setScalar(r?1.06:1),!r)return;const a=e.getCount(),o=e.getCurrentType();if(!(a<=0||o===null)){if(o!==R.ITEMS.CRATE_DRY2){this.onWarning(R.STRINGS.WARNING_WRONG_CRATE),re.emit("warning",{message:R.STRINGS.WARNING_WRONG_CRATE});return}this.cratesCount>=this.capacity||(this.transferTimer+=t,this.transferTimer>=R.STATIONS.ITEM_TRANSFER_INTERVAL&&(this.transferTimer=0,e.removeItem()&&(this.cratesCount+=1,this._addVisualCrate(),re.emit("dropped",{stationId:"sales",itemType:o}))))}}_addVisualCrate(){const t=Gn(R.ITEMS.CRATE_DRY2);t.scale.setScalar(.72);const e=this.visualCrates.length,n=6,s=Math.floor(e/n),r=e%n,a=r%3,o=Math.floor(r/3),l=(a-1)*.52,c=s*.28,u=(o-.5)*.44;t.position.set(l,c,u),this.crateStackAnchor.add(t),this.visualCrates.push(t)}_removeVisualCrate(){if(this.visualCrates.length===0)return null;const t=this.visualCrates.pop();return t&&t.parent&&t.parent.remove(t),t}_updateMerchantTruck(t){const e=this.truckConfig;switch(this.truckState){case"WAITING":this.truckTimer-=t,this.truckTimer<=0&&this._spawnTruck();break;case"ARRIVING":this.truckGroup&&(this.truckGroup.position.z+=e.SPEED*t,this.truckGroup.position.z>=e.STOP_Z&&(this.truckGroup.position.z=e.STOP_Z,this.truckState="STOPPED",this.truckStateTimer=0,this._handleTruckArrival()));break;case"STOPPED":this.truckStateTimer+=t,this.truckSnapshot===0&&this.truckStateTimer>=e.EMPTY_WAIT&&(this.truckState="DEPARTING");break;case"LOADING":break;case"POST_LOAD":this.truckStateTimer+=t,this.truckStateTimer>=e.DEPART_DELAY&&(this.truckState="DEPARTING");break;case"DEPARTING":this.truckGroup&&(this.truckGroup.position.z+=e.SPEED*t,this.truckGroup.position.z>=e.END_Z&&this._despawnTruck());break}}_spawnTruck(){const t=this.truckConfig;this.truckGroup=cp(),this.truckGroup.position.set(t.ROAD_X,0,t.START_Z),this.scene.add(this.truckGroup),this.truckState="ARRIVING"}_handleTruckArrival(){this.truckSnapshot=this.cratesCount,this.truckSnapshot===0?this._spawnNotice(R.STRINGS.NO_GOODS,"#ff4757"):(this.truckState="LOADING",this.truckStateTimer=0,this.cratesCount-=this.truckSnapshot,this._launchLoadingAnimation(this.truckSnapshot))}_launchLoadingAnimation(t){const e=this.truckGroup.userData.crateBedAnchor,n=new O;e.getWorldPosition(n);for(let s=0;s<t;s++){this._removeVisualCrate();const r=Gn(R.ITEMS.CRATE_DRY2);r.scale.setScalar(.72);const a=new O(this.pos.x,.4,this.pos.z+(Math.random()-.5)*.4);r.position.copy(a),this.scene.add(r),this.flyingCrates.push({mesh:r,startPos:a.clone(),progress:0,delay:s*.12,duration:this.truckConfig.CRATE_FLY_DURATION,arcHeight:1.8})}}_updateFlyingCrates(t){if(this.flyingCrates.length===0)return;const e=this.truckGroup?this.truckGroup.userData.crateBedAnchor:null,n=new O;e&&e.getWorldPosition(n);for(let s=this.flyingCrates.length-1;s>=0;s--){const r=this.flyingCrates[s];if(r.delay>0){r.delay-=t;continue}if(r.progress+=t/r.duration,r.progress>=1){if(this.scene.remove(r.mesh),e){const a=Gn(R.ITEMS.CRATE_DRY2);a.scale.setScalar(.65);const o=e.children.length;a.position.set((o%3-1)*.44,Math.floor(o/6)*.24,(Math.floor(o/3)%2-.5)*.55),e.add(a)}this.flyingCrates.splice(s,1),this.flyingCrates.length===0&&this.truckState==="LOADING"&&this._finalizeLoading()}else{const a=r.progress;r.mesh.position.lerpVectors(r.startPos,n,a);const o=Math.sin(a*Math.PI)*r.arcHeight;r.mesh.position.y+=o,r.mesh.rotation.y+=t*6}}}_finalizeLoading(){const t=this.truckSnapshot*R.ECONOMY.CRATE_PRICE;se.addMoney(t,this.truckSnapshot),re.emit("sold",{earnings:t,crateCount:this.truckSnapshot,pos:{x:this.truckConfig.ROAD_X,y:1.5,z:this.truckConfig.STOP_Z}}),this._spawnNotice(`+${t} 💰`,"#2ed573"),this.truckState="POST_LOAD",this.truckStateTimer=0}_spawnNotice(t,e){const n=fp(t,e),s=this.truckGroup?this.truckGroup.position.z:0;n.position.set(this.truckConfig.ROAD_X,2.8,s),this.scene.add(n),this.floatingNotices.push(n)}_updateFloatingNotices(t,e){for(let n=this.floatingNotices.length-1;n>=0;n--){const s=this.floatingNotices[n];s.userData.life+=t,e&&s.quaternion.copy(e.quaternion),s.position.y+=s.userData.vy*t,s.userData.life>=s.userData.maxLife&&(this.scene.remove(s),this.floatingNotices.splice(n,1))}}_despawnTruck(){this.truckGroup&&(this.scene.remove(this.truckGroup),this.truckGroup=null),this.truckSnapshot=0,this.truckTimer=R.ECONOMY.MERCHANT_INTERVAL,this.truckState="WAITING"}callTruckImmediately(){this.truckState==="WAITING"&&(this.truckTimer=0,this._spawnTruck())}getBufferCount(){return this.cratesCount}getCratesCount(){return this.cratesCount}}class gp{constructor(t,e=()=>{}){this.container=t,this.onWarning=e,this.scene=new oc,this.scene.background=new qt(R.COLORS.BACKGROUND);const n=t.clientWidth/t.clientHeight,s=R.CAMERA.FRUSTUM_SIZE;this.camera=new $r(-s*n/2,s*n/2,s/2,-s/2,R.CAMERA.NEAR,R.CAMERA.FAR);const r=R.CAMERA.DISTANCE,a=r*Math.SQRT1_2,o=r*Math.SQRT1_2,l=r*Math.tan(R.CAMERA.ANGLE_X);this.cameraOffset=new O(a,l,o),this.cameraTarget=new O(0,0,0),this.renderer=new ep({antialias:!0,alpha:!1}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!1,t.appendChild(this.renderer.domElement),this._initLighting(),this._initGround(),this.trees=[],this._initTrees(),this._initStations(),this.flyingFruits=[],window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>{setTimeout(()=>this.onResize(),150)})}_initLighting(){const t=new mc(R.LIGHT.AMBIENT_COLOR,R.LIGHT.AMBIENT_INTENSITY);this.scene.add(t);const e=new pc(R.LIGHT.DIRECTIONAL_COLOR,R.LIGHT.DIRECTIONAL_INTENSITY);e.position.set(R.LIGHT.DIRECTIONAL_POS.x,R.LIGHT.DIRECTIONAL_POS.y,R.LIGHT.DIRECTIONAL_POS.z),e.castShadow=!1,this.scene.add(e)}_initGround(){const t=R.WORLD.SIZE,e=R.WORLD.TILE_SIZE,n=Math.floor(t/e),s=-29+e/2,r=new ee;r.name="GroundTiles";for(let h=0;h<n;h++)for(let A=0;A<n;A++){const M=(h+A)%2===1,T=lp(M,e);T.position.set(s+h*e,0,s+A*e),r.add(T)}this.scene.add(r);const a=R.WORLD.BOUNDS,o=a.MAX_X-a.MIN_X,l=a.MAX_Z-a.MIN_Z,c=R.WORLD.BORDER_HEIGHT,u=R.WORLD.BORDER_THICKNESS,d=es(o+u*2,c,u);d.position.set(0,0,a.MIN_Z-u/2);const f=es(o+u*2,c,u);f.position.set(0,0,a.MAX_Z+u/2);const p=es(u,c,l);p.position.set(a.MIN_X-u/2,0,0);const _=es(u,c,l);_.position.set(a.MAX_X+u/2,0,0),this.scene.add(d,f,p,_);const S=R.PROPS.ROAD,m=up(S.WIDTH,S.LENGTH);m.position.set(S.X,0,0),this.scene.add(m)}_initTrees(){R.TREES.POSITIONS.forEach((t,e)=>{const n=op();n.position.set(t.x,0,t.y||t.z),this.scene.add(n),this.trees.push({id:e,group:n,crownGroup:n.userData.crownGroup,fruitMeshes:n.userData.fruitMeshes,position:n.position,state:"READY",standTimer:0,shakeTimer:0,cooldownTimer:0,respawnScale:1})})}_initStations(){const t=np();t.position.set(R.PROPS.CRATE_STATION.POS.x,0,R.PROPS.CRATE_STATION.POS.z),this.crateStation=new ns({id:R.STATIONS.CRATE_STATION.ID,name:R.STATIONS.CRATE_STATION.NAME,inputType:R.STATIONS.CRATE_STATION.INPUT_TYPE,outputType:R.STATIONS.CRATE_STATION.OUTPUT_TYPE,inputPerBatch:R.STATIONS.CRATE_STATION.INPUT_PER_BATCH,processTime:R.STATIONS.CRATE_STATION.PROCESS_TIME,slotCount:R.STATIONS.CRATE_STATION.SLOT_COUNT,inputBufferCapacity:R.STATIONS.CRATE_STATION.INPUT_BUFFER_CAPACITY,outputLimit:R.STATIONS.CRATE_STATION.OUTPUT_LIMIT,inputZone:R.PROPS.CRATE_STATION.INPUT_ZONE,outputZone:R.PROPS.CRATE_STATION.OUTPUT_ZONE,slotPositions:R.PROPS.CRATE_STATION.SLOT_POSITIONS,panelPos:R.PROPS.CRATE_STATION.PANEL_POS,stationGroup:t,floatingIconType:R.ITEMS.APRICOT,scene:this.scene,onWarning:this.onWarning});const e=io();e.position.set(R.PROPS.DRYING_RACK_1.POS.x,0,R.PROPS.DRYING_RACK_1.POS.z),this.dryingRack1=new ns({id:R.STATIONS.DRYING_RACK_1.ID,name:R.STATIONS.DRYING_RACK_1.NAME,inputType:R.STATIONS.DRYING_RACK_1.INPUT_TYPE,outputType:R.STATIONS.DRYING_RACK_1.OUTPUT_TYPE,inputPerBatch:R.STATIONS.DRYING_RACK_1.INPUT_PER_BATCH,processTime:R.STATIONS.DRYING_RACK_1.PROCESS_TIME,slotCount:R.STATIONS.DRYING_RACK_1.SLOT_COUNT,inputBufferCapacity:R.STATIONS.DRYING_RACK_1.INPUT_BUFFER_CAPACITY,outputLimit:R.STATIONS.DRYING_RACK_1.OUTPUT_LIMIT,inputZone:R.PROPS.DRYING_RACK_1.INPUT_ZONE,outputZone:R.PROPS.DRYING_RACK_1.OUTPUT_ZONE,slotPositions:R.PROPS.DRYING_RACK_1.SLOT_POSITIONS,panelPos:R.PROPS.DRYING_RACK_1.PANEL_POS,stationGroup:e,floatingIconType:R.ITEMS.CRATE_FRESH,scene:this.scene,onWarning:this.onWarning});const n=ip();n.position.set(R.PROPS.SULFUR_TENT.POS.x,0,R.PROPS.SULFUR_TENT.POS.z);const s=se?se.getStat("tentSlots"):R.STATIONS.SULFUR_TENT.SLOT_COUNT;this.sulfurTent=new ns({id:R.STATIONS.SULFUR_TENT.ID,name:R.STATIONS.SULFUR_TENT.NAME,inputType:R.STATIONS.SULFUR_TENT.INPUT_TYPE,outputType:R.STATIONS.SULFUR_TENT.OUTPUT_TYPE,inputPerBatch:R.STATIONS.SULFUR_TENT.INPUT_PER_BATCH,processTime:R.STATIONS.SULFUR_TENT.PROCESS_TIME,slotCount:s,inputBufferCapacity:s*R.STATIONS.SULFUR_TENT.INPUT_PER_BATCH+2,outputLimit:R.STATIONS.SULFUR_TENT.OUTPUT_LIMIT,inputZone:R.PROPS.SULFUR_TENT.INPUT_ZONE,outputZone:R.PROPS.SULFUR_TENT.OUTPUT_ZONE,slotPositions:R.PROPS.SULFUR_TENT.SLOT_POSITIONS,panelPos:R.PROPS.SULFUR_TENT.PANEL_POS,stationGroup:n,hasSmoke:R.STATIONS.SULFUR_TENT.HAS_SMOKE,smokeOrigin:R.PROPS.SULFUR_TENT.SMOKE_ORIGIN,floatingIconType:R.ITEMS.CRATE_DRY1,scene:this.scene,onWarning:this.onWarning}),se&&se.onUpgradeChanged(a=>{(a==="tentCapacity"||a==="*")&&this.sulfurTent.setSlotCount(se.getStat("tentSlots"))});const r=io();r.position.set(R.PROPS.DRYING_RACK_2.POS.x,0,R.PROPS.DRYING_RACK_2.POS.z),this.dryingRack2=new ns({id:R.STATIONS.DRYING_RACK_2.ID,name:R.STATIONS.DRYING_RACK_2.NAME,inputType:R.STATIONS.DRYING_RACK_2.INPUT_TYPE,outputType:R.STATIONS.DRYING_RACK_2.OUTPUT_TYPE,inputPerBatch:R.STATIONS.DRYING_RACK_2.INPUT_PER_BATCH,processTime:R.STATIONS.DRYING_RACK_2.PROCESS_TIME,slotCount:R.STATIONS.DRYING_RACK_2.SLOT_COUNT,inputBufferCapacity:R.STATIONS.DRYING_RACK_2.INPUT_BUFFER_CAPACITY,outputLimit:R.STATIONS.DRYING_RACK_2.OUTPUT_LIMIT,inputZone:R.PROPS.DRYING_RACK_2.INPUT_ZONE,outputZone:R.PROPS.DRYING_RACK_2.OUTPUT_ZONE,slotPositions:R.PROPS.DRYING_RACK_2.SLOT_POSITIONS,panelPos:R.PROPS.DRYING_RACK_2.PANEL_POS,stationGroup:r,floatingIconType:R.ITEMS.CRATE_SULFUR,scene:this.scene,onWarning:this.onWarning}),this.salesStand=new _p({scene:this.scene,onWarning:this.onWarning})}update(t,e,n){const s=e.getPosition(),r=n.hasInput();this.trees.forEach(a=>{const l=s.distanceTo(a.position)<=R.HARVEST.TRIGGER_DISTANCE;switch(a.state){case"READY":if(l){const u=e.getCurrentType();if(u!==null&&u!==R.ITEMS.APRICOT){r||this.onWarning(R.STRINGS.WARNING_EMPTY_HANDS),a.standTimer=0,a.crownGroup.rotation.z=0;break}if(!e.isFull())if(r)a.standTimer=0,a.crownGroup.rotation.z=0;else{a.standTimer+=t;const d=se?se.getStat("standStillTime"):R.HARVEST.STAND_STILL_TIME,f=a.standTimer/d;f>.4&&(a.crownGroup.rotation.z=Math.sin(a.standTimer*20)*(.02*f)),a.standTimer>=d&&(a.state="SHAKING",a.shakeTimer=0,a.standTimer=0)}}else a.standTimer=0,a.crownGroup.rotation.z=0;break;case"SHAKING":a.shakeTimer+=t;const c=Math.sin(a.shakeTimer*R.HARVEST.SHAKE_FREQUENCY);a.crownGroup.rotation.z=c*R.HARVEST.SHAKE_INTENSITY,a.crownGroup.rotation.x=Math.cos(a.shakeTimer*R.HARVEST.SHAKE_FREQUENCY)*(R.HARVEST.SHAKE_INTENSITY*.6),a.shakeTimer>=R.HARVEST.SHAKE_DURATION&&(a.crownGroup.rotation.set(0,0,0),a.state="COOLDOWN",a.cooldownTimer=R.HARVEST.RESPAWN_COOLDOWN,a.fruitMeshes.forEach(u=>u.visible=!1),this._spawnHarvestDrop(a,e));break;case"COOLDOWN":a.cooldownTimer-=t,a.cooldownTimer<=0&&(a.state="READY",a.standTimer=0,a.fruitMeshes.forEach(u=>{u.visible=!0,u.scale.set(.01,.01,.01)}),a.respawnScale=.01);break}a.state==="READY"&&a.respawnScale<1&&(a.respawnScale=Math.min(1,a.respawnScale+t*3.5),a.fruitMeshes.forEach(c=>{c.scale.setScalar(a.respawnScale)}))}),this._updateFlyingFruits(t,e),this.crateStation.update(t,e,this.camera),this.dryingRack1.update(t,e,this.camera),this.sulfurTent.update(t,e,this.camera),this.dryingRack2.update(t,e,this.camera),this.salesStand.update(t,e,this.camera),this._updateCamera(t,s)}_spawnHarvestDrop(t,e){const n=R.TREES.FRUITS_PER_TREE;for(let s=0;s<n;s++){const r=ps(!1);this.scene.add(r);const a=t.fruitMeshes[s],o=new O;a.getWorldPosition(o),r.position.copy(o),this.flyingFruits.push({mesh:r,startPos:o.clone(),progress:0,delay:s*.08,duration:R.HARVEST.DROP_FLIGHT_DURATION,arcHeight:R.HARVEST.DROP_ARC_HEIGHT})}}_updateFlyingFruits(t,e){const n=new O;for(let s=this.flyingFruits.length-1;s>=0;s--){const r=this.flyingFruits[s];if(r.delay>0){r.delay-=t;continue}if(r.progress+=t/r.duration,e.getStackWorldPosition(n),r.progress>=1)this.scene.remove(r.mesh),e.addApricot(),re.emit("apricot_collected",{count:e.getCount()}),this.flyingFruits.splice(s,1);else{const a=r.progress;r.mesh.position.lerpVectors(r.startPos,n,a);const o=Math.sin(a*Math.PI)*r.arcHeight;r.mesh.position.y+=o,r.mesh.rotation.x+=t*8,r.mesh.rotation.y+=t*6}}}_updateCamera(t,e){this.cameraTarget.lerp(e,R.CAMERA.FOLLOW_LERP),this.camera.position.copy(this.cameraTarget).add(this.cameraOffset),this.camera.lookAt(this.cameraTarget.x,this.cameraTarget.y+.6,this.cameraTarget.z)}onResize(){const t=this.container.clientWidth,e=this.container.clientHeight;if(t===0||e===0)return;const n=t/e,s=R.CAMERA.FRUSTUM_SIZE;let r,a;n>=1?(a=s/2,r=a*n):(r=Math.max(12,s*n)/2,a=r/n),this.camera.left=-r,this.camera.right=r,this.camera.top=a,this.camera.bottom=-a,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,e)}render(){this.renderer.render(this.scene,this.camera)}}class Sp{constructor(t){this.scene=t,this.group=ap(),this.scene.add(this.group),this.currentType=null,this.stack=[],this.speed=R.PLAYER.SPEED,this.fruitAnchor=this.group.userData.fruitAnchor,this.crateAnchor=this.group.userData.crateAnchor,this.leftFoot=this.group.userData.leftFoot,this.rightFoot=this.group.userData.rightFoot,this.velocity=new O(0,0,0),this.walkCycle=0,this.targetRotationY=0,this.group.position.set(0,0,0)}update(t,e){if(e.lengthSq()>.001){const s=se?se.getStat("walkSpeed"):this.speed,r=e.x*s*t,a=e.y*s*t;this.group.position.x+=r,this.group.position.z+=a;const o=R.WORLD.BOUNDS;this.group.position.x=Math.max(o.MIN_X,Math.min(o.MAX_X,this.group.position.x)),this.group.position.z=Math.max(o.MIN_Z,Math.min(o.MAX_Z,this.group.position.z)),this.targetRotationY=Math.atan2(e.x,e.y);let l=this.targetRotationY-this.group.rotation.y;for(;l<-Math.PI;)l+=Math.PI*2;for(;l>Math.PI;)l-=Math.PI*2;this.group.rotation.y+=l*R.PLAYER.ROTATION_LERP,this.walkCycle+=t*14;const c=Math.sin(this.walkCycle)*.22;this.leftFoot&&(this.leftFoot.position.z=c),this.rightFoot&&(this.rightFoot.position.z=-c),this.group.position.y=Math.abs(Math.sin(this.walkCycle))*.05;const u=Math.min(this.stack.length/5,1),d=Math.sin(this.walkCycle)*.08*(.3+.7*u),f=-.06;this.fruitAnchor&&(this.fruitAnchor.rotation.z=d,this.fruitAnchor.rotation.x=f),this.crateAnchor&&(this.crateAnchor.rotation.z=d*.7,this.crateAnchor.rotation.x=f)}else this.leftFoot&&(this.leftFoot.position.z=0),this.rightFoot&&(this.rightFoot.position.z=0),this.group.position.y=0,this.fruitAnchor&&(this.fruitAnchor.rotation.z*=.8,this.fruitAnchor.rotation.x*=.8),this.crateAnchor&&(this.crateAnchor.rotation.z*=.8,this.crateAnchor.rotation.x*=.8)}addItem(t){if(this.currentType!==null&&this.currentType!==t)return!1;const e=this.getCapacity(t);if(this.stack.length>=e)return!1;this.currentType=t;const n=this.stack.length;if(t===R.ITEMS.APRICOT){const s=ps(!1),r=R.PLAYER.STACK;s.scale.setScalar(r.SCALE);const a=r.COLS*r.ROWS,o=Math.floor(n/a),l=n%a,c=l%r.COLS,u=Math.floor(l/r.COLS),d=(c-(r.COLS-1)/2)*r.SPACING_X,f=o*r.SPACING_Y,p=(u-(r.ROWS-1)/2)*r.SPACING_Z;s.position.set(d,f,p),this.fruitAnchor.add(s),this.stack.push(s)}else{const s=Gn(t),r=R.PLAYER.CRATE_STACK;s.scale.setScalar(r.SCALE);const a=n*r.SPACING_Y;s.position.set(0,a,0),this.crateAnchor.add(s),this.stack.push(s)}return!0}removeItem(){if(this.stack.length===0)return!1;const t=this.stack.pop();return t.parent&&t.parent.remove(t),this.stack.length===0&&(this.currentType=null),!0}discardAll(){const t=this.stack.length;if(t===0)return 0;for(;this.stack.length>0;){const e=this.stack.pop();e&&e.parent&&e.parent.remove(e)}return this.currentType=null,t}addApricot(){return this.addItem(R.ITEMS.APRICOT)}getCurrentType(){return this.currentType}getCount(){return this.stack.length}getCapacity(t=this.currentType){return t?se?t===R.ITEMS.APRICOT?se.getStat("carryCapacityApricot"):se.getStat("carryCapacityCrate"):R.CAPACITIES[t]||0:0}isFull(){return this.currentType?this.stack.length>=this.getCapacity():!1}getPosition(){return this.group.position}getStackWorldPosition(t=new O){return this.fruitAnchor.getWorldPosition(t),t}}class vp{constructor(){this.moveVector=new Bt(0,0),this.screenVector=new Bt(0,0),this.keys={up:!1,down:!1,left:!1,right:!1},this.isJoystickActive=!1,this.joystickPointerId=null,this.joystickOrigin={x:0,y:0},this.joystickDelta={x:0,y:0},this.zoneEl=document.getElementById("joystick-zone"),this.baseEl=document.getElementById("joystick-base"),this.knobEl=document.getElementById("joystick-knob"),this._initKeyboard(),this._initJoystick()}_initKeyboard(){window.addEventListener("keydown",t=>{t.code==="KeyQ"&&this.onDiscardCallback&&this.onDiscardCallback(),this._handleKey(t.code,!0)}),window.addEventListener("keyup",t=>{this._handleKey(t.code,!1)}),window.addEventListener("blur",()=>{this.keys.up=!1,this.keys.down=!1,this.keys.left=!1,this.keys.right=!1})}_handleKey(t,e){switch(t){case"KeyW":case"ArrowUp":this.keys.up=e;break;case"KeyS":case"ArrowDown":this.keys.down=e;break;case"KeyA":case"ArrowLeft":this.keys.left=e;break;case"KeyD":case"ArrowRight":this.keys.right=e;break}}_initJoystick(){if(!this.zoneEl||!this.baseEl||!this.knobEl)return;this.zoneEl.addEventListener("pointerdown",e=>{if(this.isJoystickActive)return;this.isJoystickActive=!0,this.joystickPointerId=e.pointerId,this.zoneEl.setPointerCapture(e.pointerId);const n=this.zoneEl.getBoundingClientRect(),s=e.clientX,r=e.clientY;this.joystickOrigin={x:s,y:r},this.baseEl.style.left=`${s-n.left}px`,this.baseEl.style.top=`${r-n.top}px`,this.baseEl.style.bottom="auto",this.baseEl.classList.add("active"),this._updateJoystick(s,r)}),this.zoneEl.addEventListener("pointermove",e=>{!this.isJoystickActive||e.pointerId!==this.joystickPointerId||this._updateJoystick(e.clientX,e.clientY)});const t=e=>{!this.isJoystickActive||e&&e.pointerId!==this.joystickPointerId||(this.isJoystickActive=!1,this.joystickPointerId=null,this.joystickDelta={x:0,y:0},this.knobEl.style.transform="translate(0px, 0px)",this.baseEl.classList.remove("active"),this.baseEl.style.left=`${R.JOYSTICK.DEFAULT_POS.x}px`,this.baseEl.style.bottom=`${R.JOYSTICK.DEFAULT_POS.y}px`,this.baseEl.style.top="auto")};this.zoneEl.addEventListener("pointerup",t),this.zoneEl.addEventListener("pointercancel",t)}_updateJoystick(t,e){const n=t-this.joystickOrigin.x,s=e-this.joystickOrigin.y,r=Math.hypot(n,s),a=R.JOYSTICK.MAX_RADIUS;let o=n,l=s;if(r>a){const u=Math.atan2(s,n);o=Math.cos(u)*a,l=Math.sin(u)*a}this.knobEl.style.transform=`translate(${o}px, ${l}px)`;const c=R.JOYSTICK.DEADZONE*a;r<c?this.joystickDelta={x:0,y:0}:this.joystickDelta={x:o/a,y:l/a}}update(){let t=0,e=0;this.keys.right&&(t+=1),this.keys.left&&(t-=1),this.keys.up&&(e+=1),this.keys.down&&(e-=1);const n=this.joystickDelta.x,s=-this.joystickDelta.y;let r=t+n,a=e+s;const o=Math.hypot(r,a);o>1&&(r/=o,a/=o),this.screenVector.set(r,a);const l=1/Math.SQRT2,c=(r-a)*l,u=(-r-a)*l;this.moveVector.set(c,u)}getMoveVector(){return this.moveVector}hasInput(){return this.moveVector.lengthSq()>.001}}class Ep{constructor(){this.iconEl=document.getElementById("hud-item-icon"),this.labelEl=document.getElementById("hud-item-label"),this.counterEl=document.getElementById("apricot-counter"),this.fullBadgeEl=document.getElementById("full-capacity-badge"),this.toastEl=document.getElementById("warning-toast"),this.discardBtnEl=document.getElementById("discard-btn"),this.audioToggleBtn=document.getElementById("audio-toggle-btn"),this.moneyEl=document.getElementById("money-counter"),this.devPanelEl=document.getElementById("dev-panel"),this.devToggleBtn=document.getElementById("dev-panel-toggle"),this.devCloseBtn=document.getElementById("dev-panel-close"),this.devMoneyRateEl=document.getElementById("dev-money-rate"),this.devTotalCratesEl=document.getElementById("dev-total-crates"),this.devAvgTruckEl=document.getElementById("dev-avg-truck"),this.devSummonTruckBtn=document.getElementById("dev-summon-truck"),this.devResetSaveBtn=document.getElementById("dev-reset-save"),this.devFpsEl=document.getElementById("dev-fps"),this.devAppVersionEl=document.getElementById("dev-app-version"),this.devAppVersionEl&&R.APP_VERSION&&(this.devAppVersionEl.textContent=`v${R.APP_VERSION}`),this.pwaBannerEl=document.getElementById("pwa-install-banner"),this.pwaInstallBtn=document.getElementById("pwa-install-btn"),this.pwaDismissBtn=document.getElementById("pwa-dismiss-btn"),this.pwaBannerText=document.getElementById("pwa-banner-text"),this.deferredPrompt=null,this._initPwaInstallBanner(),this.devToolsSectionEl=document.getElementById("dev-tools-section"),this.devAdd1000Btn=document.getElementById("dev-add-1000"),this.devAdd10000Btn=document.getElementById("dev-add-10000"),this.devMaxUpgradesBtn=document.getElementById("dev-max-upgrades"),this.timescaleBtns=document.querySelectorAll(".timescale-btn"),this.upgradeBtnEl=document.getElementById("upgrade-btn"),this.upgradePanelEl=document.getElementById("upgrade-panel"),this.upgradePanelCloseEl=document.getElementById("upgrade-panel-close"),this.upgradeListEl=document.getElementById("upgrade-list"),this.upgradeModalBackdropEl=this.upgradePanelEl?this.upgradePanelEl.querySelector(".upgrade-modal-backdrop"):null,this.fullBadgeEl&&(this.fullBadgeEl.textContent=R.STRINGS.FULL),this.discardBtnEl&&(this.discardBtnEl.textContent=R.STRINGS.DISCARD_BUTTON),this.lastType=void 0,this.lastCount=-1,this.lastCapacity=-1,this.lastIsFull=!1,this.lastHasItems=!1,this.lastMoney=-1,this.toastTimer=null,this.onDiscardCallback=null,this.onSummonTruckCallback=null,this.onResetSaveCallback=null,this.onTimeScaleCallback=null,this.currentTimeScale=1,this.gameStateRef=null,this.lastSoundEnabled=void 0,this.audioToggleBtn&&this.audioToggleBtn.addEventListener("click",()=>{if(this.gameStateRef){const t=!this.gameStateRef.isSoundEnabled();this.gameStateRef.setSoundEnabled(t),this.updateAudioButton(t)}}),this.discardBtnEl&&this.discardBtnEl.addEventListener("click",()=>{this.onDiscardCallback&&this.onDiscardCallback()}),this.devToggleBtn&&this.devToggleBtn.addEventListener("click",()=>{this.toggleDevPanel()}),this.devCloseBtn&&this.devCloseBtn.addEventListener("click",()=>{this.closeDevPanel()}),this.devSummonTruckBtn&&this.devSummonTruckBtn.addEventListener("click",()=>{this.onSummonTruckCallback&&this.onSummonTruckCallback()}),this.devResetSaveBtn&&this.devResetSaveBtn.addEventListener("click",()=>{confirm(R.STRINGS.RESET_SAVE_CONFIRM)&&this.onResetSaveCallback&&this.onResetSaveCallback()}),this.devAdd1000Btn&&this.devAdd1000Btn.addEventListener("click",()=>{this.gameStateRef&&this.gameStateRef.addMoney(1e3)}),this.devAdd10000Btn&&this.devAdd10000Btn.addEventListener("click",()=>{this.gameStateRef&&this.gameStateRef.addMoney(1e4)}),this.devMaxUpgradesBtn&&this.devMaxUpgradesBtn.addEventListener("click",()=>{this.gameStateRef&&(this.gameStateRef.maxAllUpgrades(),this.updateUpgradeRows(this.gameStateRef))}),this.timescaleBtns&&this.timescaleBtns.forEach(t=>{t.addEventListener("click",()=>{const e=parseFloat(t.dataset.scale)||1;this.setTimeScale(e),this.onTimeScaleCallback&&this.onTimeScaleCallback(e)})}),this.upgradeBtnEl&&this.upgradeBtnEl.addEventListener("click",()=>{this.openUpgradePanel()}),this.upgradePanelCloseEl&&this.upgradePanelCloseEl.addEventListener("click",()=>{this.closeUpgradePanel()}),this.upgradeModalBackdropEl&&this.upgradeModalBackdropEl.addEventListener("click",()=>{this.closeUpgradePanel()}),window.addEventListener("keydown",t=>{t.key==="F2"||t.key==="`"?(t.preventDefault(),this.toggleDevPanel()):t.key==="Escape"&&(this.isUpgradePanelOpen()?this.closeUpgradePanel():this.isDevPanelOpen()&&this.closeDevPanel())})}onSummonTruck(t){this.onSummonTruckCallback=t}onResetSave(t){this.onResetSaveCallback=t}onTimeScaleChange(t){this.onTimeScaleCallback=t}setTimeScale(t){this.currentTimeScale=t,this.timescaleBtns&&this.timescaleBtns.forEach(e=>{(parseFloat(e.dataset.scale)||1)===t?e.classList.add("is-active"):e.classList.remove("is-active")})}toggleDevPanel(t){if(!this.devPanelEl)return;(t!==void 0?t:this.devPanelEl.classList.contains("dev-panel-hidden"))?this.devPanelEl.classList.remove("dev-panel-hidden"):this.devPanelEl.classList.add("dev-panel-hidden")}closeDevPanel(){this.devPanelEl&&this.devPanelEl.classList.add("dev-panel-hidden")}isDevPanelOpen(){return this.devPanelEl&&!this.devPanelEl.classList.contains("dev-panel-hidden")}openUpgradePanel(){this.upgradePanelEl&&(this.upgradePanelEl.classList.remove("panel-hidden"),this.gameStateRef&&this.renderUpgradePanel(this.gameStateRef))}closeUpgradePanel(){this.upgradePanelEl&&this.upgradePanelEl.classList.add("panel-hidden")}isUpgradePanelOpen(){return this.upgradePanelEl&&!this.upgradePanelEl.classList.contains("panel-hidden")}renderUpgradePanel(t){if(!this.upgradeListEl||!R.UPGRADES)return;this.gameStateRef=t;const e=Object.values(R.UPGRADES);if(this.upgradeListEl.children.length===e.length){this.updateUpgradeRows(t);return}this.upgradeListEl.innerHTML="",e.forEach(n=>{const s=document.createElement("div");s.className="upgrade-row",s.id=`upgrade-row-${n.ID}`,s.dataset.upgradeId=n.ID,s.innerHTML=`
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
      `,s.querySelector(".upgrade-buy-btn").addEventListener("click",()=>{this.handleBuyUpgrade(n.ID,s)}),this.upgradeListEl.appendChild(s)}),this.updateUpgradeRows(t)}updateUpgradeRows(t){!this.upgradeListEl||!R.UPGRADES||Object.values(R.UPGRADES).forEach(e=>{const n=t.getUpgradeLevel(e.ID),s=n>=e.MAX_LEVEL,r=t.getUpgradeCost(e.ID),a=!s&&r!==null&&t.getMoney()>=r,o=document.getElementById(`upgrade-lvl-${e.ID}`),l=document.getElementById(`upgrade-effect-${e.ID}`),c=document.getElementById(`upgrade-btn-${e.ID}`);o&&(o.textContent=`Seviye ${n}/${e.MAX_LEVEL}`),l&&(l.textContent=this._getUpgradeEffectText(e.ID,n,t)),c&&(s?(c.textContent=R.STRINGS.LEVEL_MAX,c.disabled=!0,c.className="upgrade-buy-btn is-max"):(c.textContent=`${R.STRINGS.BUY_BUTTON} (${r.toLocaleString("tr-TR")} 💰)`,c.disabled=!a,a?c.className="upgrade-buy-btn":c.className="upgrade-buy-btn is-disabled"))})}_getUpgradeEffectText(t,e,n){switch(t){case"tentCapacity":{const s=n.getStat("tentSlots");return e>=5?`Maksimum Kapasite (${s} Yuva)`:`+1 Kükürt Yuvası (Mevcut: ${s})`}case"walkSpeed":{const s=Math.round(e*12);return e>=5?`Maksimum Hız (+%${s})`:`+%12 Hız (Şu an: +%${s})`}case"carryCapacity":{const s=n.getStat("carryCapacityApricot"),r=n.getStat("carryCapacityCrate");return e>=5?`Maksimum Kapasite (${s} 🍑 / ${r} 📦)`:`+3 Kayısı, +1 Kasa (Mevcut: ${s}/${r})`}case"harvestSpeed":{const s=Math.round(e*15);return e>=5?`Maksimum Hız (-%${s} Süre)`:`-%15 Silkeleme Süresi (Şu an: -%${s})`}default:return""}}handleBuyUpgrade(t,e){if(!this.gameStateRef)return;this.gameStateRef.purchaseUpgrade(t)&&(e&&(e.classList.remove("upgrade-success-flash"),e.offsetWidth,e.classList.add("upgrade-success-flash")),this.updateUpgradeRows(this.gameStateRef))}onDiscard(t){this.onDiscardCallback=t}updateAudioButton(t){this.audioToggleBtn&&(this.audioToggleBtn.textContent=t?"🔊":"🔇",this.audioToggleBtn.title=t?"Sesi Kapat":"Sesi Aç")}setFPS(t){this.devFpsEl&&this.isDevPanelOpen()&&(this.devFpsEl.textContent=Math.round(t).toString())}_initPwaInstallBanner(){if(!this.pwaBannerEl)return;const t=localStorage.getItem("kayisi_pwa_dismissed")==="1",e=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0;if(t||e)return;const n=/iPhone|iPad|iPod/.test(navigator.userAgent)&&!window.MSStream;(n||/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768)&&(n?(this.pwaBannerText&&(this.pwaBannerText.textContent="Ana ekrana eklemek için: Paylaş ➔ Ana Ekrana Ekle seçeneğine dokun."),this.pwaInstallBtn&&(this.pwaInstallBtn.style.display="none"),setTimeout(()=>{!localStorage.getItem("kayisi_pwa_prompt_dismissed")&&this.pwaBannerEl&&this.pwaBannerEl.classList.remove("pwa-banner-hidden")},2500)):(window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),this.deferredPrompt=r,!localStorage.getItem("kayisi_pwa_prompt_dismissed")&&this.pwaBannerEl&&this.pwaBannerEl.classList.remove("pwa-banner-hidden")}),this.pwaInstallBtn&&this.pwaInstallBtn.addEventListener("click",async()=>{if(this.deferredPrompt){this.deferredPrompt.prompt();try{const{outcome:r}=await this.deferredPrompt.userChoice;console.log("[PWA] User choice:",r)}catch{}this.deferredPrompt=null}this._dismissPwaBanner()})),this.pwaDismissBtn&&this.pwaDismissBtn.addEventListener("click",()=>{this._dismissPwaBanner()}))}_dismissPwaBanner(){this.pwaBannerEl&&(this.pwaBannerEl.classList.add("pwa-banner-hidden"),this.pwaBannerEl.style.display="none"),localStorage.setItem("kayisi_pwa_prompt_dismissed","true")}showWarning(t){re.emit("warning",{message:t}),this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.remove("toast-hidden"),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastEl.classList.add("toast-hidden"),this.toastTimer=null},2200))}update(t,e){this.gameStateRef=e;const n=t.getCurrentType(),s=t.getCount(),r=t.getCapacity(),a=t.isFull(),o=s>0;if(n!==this.lastType){this.lastType=n;const l=n?R.ITEM_LABELS[n]:R.ITEM_LABELS.EMPTY;this.iconEl&&(this.iconEl.textContent=l.icon),this.labelEl&&(this.labelEl.textContent=l.label)}if((s!==this.lastCount||r!==this.lastCapacity)&&(this.lastCount=s,this.lastCapacity=r,this.counterEl&&(n?this.counterEl.textContent=`${s} / ${r}`:this.counterEl.textContent="0 / 0")),a!==this.lastIsFull&&(this.lastIsFull=a,this.fullBadgeEl&&(a?this.fullBadgeEl.classList.remove("badge-hidden"):this.fullBadgeEl.classList.add("badge-hidden"))),o!==this.lastHasItems&&(this.lastHasItems=o,this.discardBtnEl&&(o?this.discardBtnEl.classList.remove("discard-btn-hidden"):this.discardBtnEl.classList.add("discard-btn-hidden"))),e&&this.moneyEl){const l=e.getMoney();l!==this.lastMoney&&(this.lastMoney=l,this.moneyEl.textContent=l.toLocaleString("tr-TR"))}if(e&&this.isDevPanelOpen()&&(this.devMoneyRateEl&&(this.devMoneyRateEl.textContent=`${e.getMoneyPerMinute()} 💰/dk`),this.devTotalCratesEl&&(this.devTotalCratesEl.textContent=e.getTotalCratesSold().toString()),this.devAvgTruckEl&&(this.devAvgTruckEl.textContent=`${e.getAveragePerTruck()} 💰`)),e&&this.isUpgradePanelOpen()&&this.updateUpgradeRows(e),e){const l=e.isSoundEnabled();l!==this.lastSoundEnabled&&(this.lastSoundEnabled=l,this.updateAudioButton(l))}}}class Tp{constructor(){this.ctx=null,this.masterGain=null,this.lastCollectTime=0,this.initialized=!1,this._setupUserGestureListener(),this._bindEvents()}_setupUserGestureListener(){const t=()=>{this._ensureContext(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t),window.removeEventListener("click",t)};window.addEventListener("pointerdown",t,{once:!0}),window.addEventListener("keydown",t,{once:!0}),window.addEventListener("touchstart",t,{once:!0}),window.addEventListener("click",t,{once:!0})}_ensureContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(t)try{this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.22,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.initialized=!0}catch(e){console.warn("AudioContext initialization failed:",e)}}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}_canPlay(){return se.isSoundEnabled()?(this.ctx||this._ensureContext(),this.ctx&&this.ctx.state==="running"):!1}_bindEvents(){re.on("apricot_collected",()=>this.playCollect()),re.on("crate_made",()=>this.playCrateMade()),re.on("station_ready",()=>this.playStationReady()),re.on("sold",()=>this.playSold()),re.on("upgrade_bought",()=>this.playUpgrade()),re.on("warning",()=>this.playWarning())}playCollect(){const t=performance.now()/1e3,e=R.AUDIO&&R.AUDIO.MIN_COLLECT_INTERVAL||.125;if(!(t-this.lastCollectTime<e)&&(this.lastCollectTime=t,!!this._canPlay()))try{const n=this.ctx.currentTime,s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(450,n),s.frequency.exponentialRampToValueAtTime(750,n+.05),r.gain.setValueAtTime(.25,n),r.gain.exponentialRampToValueAtTime(.001,n+.06),s.connect(r),r.connect(this.masterGain),s.start(n),s.stop(n+.06)}catch{}}playCrateMade(){if(this._canPlay())try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(55,t+.12),n.gain.setValueAtTime(.32,t),n.gain.exponentialRampToValueAtTime(.001,t+.14),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.14)}catch{}}playStationReady(){if(this._canPlay())try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(880,t),e.frequency.exponentialRampToValueAtTime(1320,t+.04),n.gain.setValueAtTime(.24,t),n.gain.exponentialRampToValueAtTime(.001,t+.32),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.32)}catch{}}playSold(){if(this._canPlay())try{const t=[987.77,1318.51,1760],e=this.ctx.currentTime;t.forEach((n,s)=>{const r=e+s*.08,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(n,r),o.gain.setValueAtTime(.22,r),o.gain.exponentialRampToValueAtTime(.001,r+.22),a.connect(o),o.connect(this.masterGain),a.start(r),a.stop(r+.22)})}catch{}}playUpgrade(){if(this._canPlay())try{const t=[523.25,659.25,783.99,1046.5],e=this.ctx.currentTime;t.forEach((n,s)=>{const r=e+s*.07,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(n,r),o.gain.setValueAtTime(.28,r),o.gain.exponentialRampToValueAtTime(.001,r+.26),a.connect(o),o.connect(this.masterGain),a.start(r),a.stop(r+.26)})}catch{}}playWarning(){if(this._canPlay())try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(95,t+.14),n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.15)}catch{}}}const xp=new Tp;class Mp{constructor(t){this.scene=t,this.poolSize=R.PARTICLES&&R.PARTICLES.POOL_SIZE||30,this.activePoolLimit=this.poolSize,this.quality="high",this.particles=[];const e=new Vt(.12,.12,.12);for(let n=0;n<this.poolSize;n++){const s=new Nt({color:16777215,flatShading:!0,transparent:!0,opacity:1}),r=new ut(e,s);r.visible=!1,this.scene.add(r),this.particles.push({mesh:r,mat:s,active:!1,life:0,maxLife:1,velocity:new O,gravity:-9.8,startScale:1,rotSpeed:new O})}this._bindEvents()}_bindEvents(){re.on("sold",t=>{const e=t&&t.pos?t.pos:{x:23.8,y:1.5,z:0};this.burstGold(e)}),re.on("station_ready",t=>{t&&t.position&&this.burstReady(t.position)}),re.on("dropped",t=>{t&&t.action==="discard"&&t.pos&&this.burstDust(t.pos)})}reduceQuality(){if(this.quality!=="low"){this.quality="low",this.activePoolLimit=Math.floor(this.poolSize/2);for(let t=this.activePoolLimit;t<this.particles.length;t++)this.particles[t].active=!1,this.particles[t].mesh.visible=!1;console.warn("[Performance] Düşük FPS tespit edildi, parçacık havuzu 15'e düşürüldü.")}}getQualityLevel(){return this.quality}getQuality(){return this.quality}getActivePoolLimit(){return this.activePoolLimit}spawn({pos:t={x:0,y:0,z:0},count:e=6,color:n=16763904,speed:s=2,gravity:r=-9.8,life:a=.8,scale:o=1,spreadX:l=1,spreadY:c=1,spreadZ:u=1,baseVy:d=2}){let f=0;const p=this.quality==="low"?Math.max(1,Math.round(e*.5)):e;for(let _=0;_<this.activePoolLimit&&!(f>=p);_++){const S=this.particles[_];if(S.active)continue;S.active=!0,S.life=0,S.maxLife=a*(.8+Math.random()*.4),S.gravity=r,S.startScale=o*(.8+Math.random()*.5),S.mat.color.setHex(n),S.mat.opacity=1,S.mesh.position.set(t.x+(Math.random()-.5)*.3,t.y+(Math.random()-.5)*.2,t.z+(Math.random()-.5)*.3),S.mesh.scale.setScalar(S.startScale),S.mesh.visible=!0;const m=Math.random()*Math.PI*2,h=s*(.4+Math.random()*.6);S.velocity.set(Math.cos(m)*h*l,d+Math.random()*s*c,Math.sin(m)*h*u),S.rotSpeed.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),f++}}burstGold(t){this.spawn({pos:t,count:9,color:16096779,speed:2.5,gravity:-11,life:.9,scale:1.1,baseVy:3.5})}burstUpgrade(t){this.spawn({pos:t,count:10,color:2278750,speed:3,gravity:-7,life:.85,scale:1,baseVy:2.8})}burstReady(t){this.spawn({pos:t,count:5,color:16707722,speed:1.2,gravity:-3.5,life:.7,scale:.8,baseVy:1.8})}burstDust(t){this.spawn({pos:{x:t.x,y:.1,z:t.z},count:7,color:13948120,speed:2,gravity:-10,life:.55,scale:.9,baseVy:1.4,spreadY:.4})}update(t){for(const e of this.particles){if(!e.active)continue;if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;continue}const n=e.life/e.maxLife;e.velocity.y+=e.gravity*t,e.mesh.position.addScaledVector(e.velocity,t),e.mesh.rotation.x+=e.rotSpeed.x*t,e.mesh.rotation.y+=e.rotSpeed.y*t,e.mesh.rotation.z+=e.rotSpeed.z*t;const s=e.startScale*Math.max(.01,1-n*.75);e.mesh.scale.setScalar(s),e.mat.opacity=Math.max(0,1-n)}}}class yp{constructor(t,e={}){this.scene=t,this.gameContext=e,this.steps=R.TUTORIAL&&R.TUTORIAL.STEPS||[],this.currentStepIndex=0,this.isActive=!1,this.animTime=0,this.stepTimer=0,this.predicateTimer=0,this.overlayEl=document.getElementById("tutorial-overlay"),this.bannerEl=document.getElementById("tutorial-banner"),this.counterEl=document.getElementById("tutorial-step-counter"),this.textEl=document.getElementById("tutorial-text"),this.skipBtn=document.getElementById("tutorial-skip-btn"),this.closeBtn=document.getElementById("tutorial-close-btn"),this.edgePointerEl=document.getElementById("tutorial-edge-pointer"),this.edgeArrowEl=this.edgePointerEl?this.edgePointerEl.querySelector(".edge-pointer-arrow"):null,this._create3DMarker(),this._initPredicates(),se.isTutorialDone()||this.steps.length===0?this.hide():this.start(),this._bindUI()}setGameContext(t){this.gameContext=t}_initPredicates(){this.predicates={tree:(t,e,n)=>{const s=e.getCurrentType(),r=e.getCount();return!!(s==="apricot"&&r>0||s&&s!=="apricot"||t.crateStation&&(t.crateStation.getTotalItems()>0||t.crateStation.hasReadyCrate())||t.dryingRack1&&t.dryingRack1.getTotalItems()>0||t.sulfurTent&&t.sulfurTent.getTotalItems()>0||t.dryingRack2&&t.dryingRack2.getTotalItems()>0||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},crate_station:(t,e,n)=>{const s=e.getCurrentType();return!!(t.crateStation&&(t.crateStation.getTotalItems()>0||t.crateStation.hasReadyCrate())||s&&s!=="apricot"||t.dryingRack1&&t.dryingRack1.getTotalItems()>0||t.sulfurTent&&t.sulfurTent.getTotalItems()>0||t.dryingRack2&&t.dryingRack2.getTotalItems()>0||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},pick_crate:(t,e,n)=>{const s=e.getCurrentType();return!!(s==="crate_fresh"||s==="crate_dry1"||s==="crate_sulfur"||s==="crate_dry2"||t.dryingRack1&&t.dryingRack1.getTotalItems()>0||t.sulfurTent&&t.sulfurTent.getTotalItems()>0||t.dryingRack2&&t.dryingRack2.getTotalItems()>0||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},rack_1:(t,e,n)=>{const s=e.getCurrentType();return!!(t.dryingRack1&&t.dryingRack1.getTotalItems()>0||s==="crate_dry1"||s==="crate_sulfur"||s==="crate_dry2"||t.sulfurTent&&t.sulfurTent.getTotalItems()>0||t.dryingRack2&&t.dryingRack2.getTotalItems()>0||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},tent:(t,e,n)=>{const s=e.getCurrentType();return!!(t.sulfurTent&&t.sulfurTent.getTotalItems()>0||s==="crate_sulfur"||s==="crate_dry2"||t.dryingRack2&&t.dryingRack2.getTotalItems()>0||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},rack_2:(t,e,n)=>{const s=e.getCurrentType();return!!(t.dryingRack2&&t.dryingRack2.getTotalItems()>0||s==="crate_dry2"||t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0)},sales:(t,e,n)=>!!(t.salesStand&&t.salesStand.getCratesCount()>0||n&&n.getTotalCratesSold()>0),wait_truck:(t,e,n)=>!!(n&&n.getTotalCratesSold()>0||n&&n.getTotalUpgradesCount()>0),upgrade:(t,e,n)=>n&&n.getTotalUpgradesCount()>=1}}_create3DMarker(){this.markerGroup=new ee,this.markerGroup.visible=!1;const t=new Zr(.7,.95,24);t.rotateX(-Math.PI/2);const e=new Ge({color:16436245,side:je,transparent:!0,opacity:.85});this.ringMesh=new ut(t,e),this.ringMesh.position.y=.05,this.markerGroup.add(this.ringMesh),this.arrowGroup=new ee,this.arrowGroup.position.y=1.3;const n=new qr(.3,.55,6);n.rotateX(Math.PI);const s=new Nt({color:16096779,flatShading:!0}),r=new ut(n,s);r.position.y=-.15,this.arrowGroup.add(r);const a=new me(.12,.12,.45,6),o=new ut(a,s);o.position.y=.3,this.arrowGroup.add(o),this.markerGroup.add(this.arrowGroup),this.scene.add(this.markerGroup)}_bindUI(){this.skipBtn&&this.skipBtn.addEventListener("click",t=>{t.stopPropagation(),this.nextStep()}),this.closeBtn&&this.closeBtn.addEventListener("click",t=>{t.stopPropagation(),this.closeTutorial()})}start(){this.currentStepIndex=0,this.stepTimer=0,this.isActive=!0,this.overlayEl&&this.overlayEl.classList.remove("tutorial-hidden"),this._renderCurrentStep()}getCurrentStep(){return this.currentStepIndex<this.steps.length?this.steps[this.currentStepIndex]:null}nextStep(){this.currentStepIndex++,this.stepTimer=0,this.skipBtn&&this.skipBtn.classList.remove("tutorial-btn-highlight"),this.currentStepIndex>=this.steps.length?this._completeTutorial():this._renderCurrentStep()}_renderCurrentStep(){const t=this.getCurrentStep();t&&(this.counterEl&&(this.counterEl.textContent=`${this.currentStepIndex+1}/${this.steps.length}`),this.textEl&&(this.textEl.textContent=t.text),t.target?(this.markerGroup.position.set(t.target.x,t.target.y,t.target.z),this.markerGroup.visible=!0):(this.markerGroup.visible=!1,this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden")))}_completeTutorial(){this.isActive=!1,this.markerGroup.visible=!1,this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden"),se.setTutorialDone(!0),this.counterEl&&(this.counterEl.textContent="🎉"),this.textEl&&(this.textEl.textContent=R.TUTORIAL&&R.TUTORIAL.STRINGS&&R.TUTORIAL.STRINGS.COMPLETE_TEXT||"Tebrikler! Çiftlik döngüsünü öğrendin. Bol kazançlar!"),this.skipBtn&&(this.skipBtn.style.display="none"),setTimeout(()=>{this.hide()},3500)}closeTutorial(){this.isActive=!1,this.markerGroup.visible=!1,this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden"),se.setTutorialDone(!0),this.hide()}hide(){this.isActive=!1,this.markerGroup&&(this.markerGroup.visible=!1),this.overlayEl&&this.overlayEl.classList.add("tutorial-hidden"),this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden"),this.skipBtn&&this.skipBtn.classList.remove("tutorial-btn-highlight")}_checkStepPredicates(){if(!this.isActive)return;const{world:t,player:e,state:n}=this.gameContext;if(!t||!e||!n)return;let s=0;for(;this.isActive&&s<9;){const r=this.getCurrentStep();if(!r)break;const a=this.predicates[r.id];if(a&&a(t,e,n))this.nextStep(),s++;else break}}update(t,e,n){if(!this.isActive)return;this.animTime+=t,this.stepTimer+=t,this.stepTimer>=45&&this.skipBtn&&!this.skipBtn.classList.contains("tutorial-btn-highlight")&&this.skipBtn.classList.add("tutorial-btn-highlight"),this.predicateTimer+=t,this.predicateTimer>=.1&&(this.predicateTimer=0,this._checkStepPredicates());const s=this.getCurrentStep();if(!s||!s.target||!n){this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden");return}this.arrowGroup.position.y=1.3+Math.sin(this.animTime*4.5)*.18,this.arrowGroup.rotation.y+=t*2.2;const r=1+Math.sin(this.animTime*3.5)*.12;this.ringMesh.scale.set(r,r,1);const o=new O(s.target.x,s.target.y,s.target.z).clone().project(n);if(o.x>=-.8&&o.x<=.8&&o.y>=-.78&&o.y<=.78&&o.z<1)this.markerGroup.visible=!0,this.edgePointerEl&&this.edgePointerEl.classList.add("edge-pointer-hidden");else if(this.markerGroup.visible=!1,this.edgePointerEl){this.edgePointerEl.classList.remove("edge-pointer-hidden");const c=window.innerWidth,u=window.innerHeight,d=c/2,f=u/2,p=Math.atan2(o.y,o.x),_=36,S=56,m=d-_,h=f-S;let A,M;const T=Math.tan(p);if(Math.abs(Math.cos(p))*h>Math.abs(Math.sin(p))*m){const P=o.x>0?1:-1;A=d+P*m,M=f-P*m*T}else{const P=o.y>0?1:-1;M=f-P*h,A=d+P*h/(T||1e-4)}if(A=Math.max(_,Math.min(c-_,A)),M=Math.max(S,Math.min(u-S,M)),this.edgePointerEl.style.left=`${A}px`,this.edgePointerEl.style.top=`${M}px`,this.edgePointerEl.style.transform="translate(-50%, -50%)",this.edgeArrowEl){const P=-(p*180)/Math.PI;this.edgeArrowEl.style.transform=`rotate(${P}deg)`}}}}const Ap="modulepreload",Rp=function(i){return"/"+i},ro={},bp=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let a=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=a(e.map(c=>{if(c=Rp(c),c in ro)return;ro[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Ap,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((p,_)=>{f.addEventListener("load",p),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function Cp(i={}){const{immediate:t=!1,onNeedReload:e,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:a,onRegisterError:o}=i;let l,c,u;const d=async(p=!0)=>{await c,u==null||u()};async function f(){if("serviceWorker"in navigator){if(l=await bp(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/sw.js",{scope:"/",type:"classic"})).catch(p=>{o==null||o(p)}),!l)return;u=()=>{l==null||l.messageSkipWaiting()};{let p=!1;const _=()=>{p=!0,l==null||l.addEventListener("controlling",S=>{S.isUpdate&&(e?e():window.location.reload())}),n==null||n()};l.addEventListener("installed",S=>{typeof S.isUpdate>"u"?typeof S.isExternal<"u"&&S.isExternal?_():!p&&(s==null||s()):S.isUpdate||s==null||s()}),l.addEventListener("waiting",_)}l.register({immediate:t}).then(p=>{a?a("/sw.js",p):r==null||r(p)}).catch(p=>{o==null||o(p)})}}return c=f(),d}function wp(){const i=document.getElementById("pwa-update-prompt"),t=document.getElementById("pwa-reload-btn"),e=Cp({onNeedRefresh(){i&&i.classList.remove("pwa-prompt-hidden")},onOfflineReady(){console.log("[PWA] Çevrimdışı çalışmaya hazır.")}});t&&t.addEventListener("click",()=>{e(!0)})}function ao(){const i=document.getElementById("canvas-container");if(!i){console.error("Canvas container not found");return}const t=new Ep,e=new gp(i,M=>t.showWarning(M)),n=new Sp(e.scene),s=new vp,r=new Mp(e.scene),a=new yp(e.scene,{world:e,player:n,state:se});re.on("upgrade_bought",()=>{const M=n.getPosition();r.burstUpgrade({x:M.x,y:1,z:M.z})});const o=()=>{if(n.getCount()>0){const M=n.getPosition().clone(),T=n.getCount(),P=n.getCurrentType();n.discardAll(),t.showWarning(R.STRINGS.TOAST_DISCARDED),re.emit("dropped",{action:"discard",itemType:P,count:T,pos:M})}};t.onDiscard(o),s.onDiscardCallback=o,t.onSummonTruck(()=>{e.salesStand&&e.salesStand.callTruckImmediately()}),t.onResetSave(()=>{se.resetSave(),window.location.reload()});let l=1;t.onTimeScaleChange(M=>{l=M});let c=0;const u=R.STORAGE&&R.STORAGE.AUTO_SAVE_INTERVAL||5;let d=0,f=0,p=60,_=0,S=0;wp(),document.addEventListener("visibilitychange",()=>{document.hidden||h.getDelta(),se.save()}),window.addEventListener("beforeunload",()=>{se.save()});const m=new Bt(0,0),h=new gc;function A(){requestAnimationFrame(A);const M=Math.min(h.getDelta(),.1);d++,f+=M,f>=.5&&(p=Math.round(d/f),t.setFPS(p),p<40?(_+=f,_>=3&&r.reduceQuality()):_=0,d=0,f=0),c+=M,c>=u&&(c=0,se.save()),s.update();const T=t.isUpgradePanelOpen()?m:s.getMoveVector();n.update(M,T);const P=M*l;e.update(P,n,s),r.update(P),a.update(P,n.getPosition(),e.camera),t.update(n,se),document.hidden?S++:e.render()}e.onResize(),window.__GAME__={world:e,player:n,input:s,ui:t,state:se,particles:r,tutorial:a,audio:xp,events:re,trees:e.trees,stations:e.stations,salesStand:e.salesStand,salesDepot:e.salesStand,handleDiscard:o,getFPS:()=>p,getRenderSkippedCount:()=>S,getTimeScale:()=>l,setTimeScale:M=>{l=M,t.setTimeScale(M)}},requestAnimationFrame(A)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ao):ao();
