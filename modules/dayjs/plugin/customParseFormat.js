!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.dayjs_plugin_customParseFormat=e()}(this,function(){"use strict";var t,e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^\s\d-:/()]+/;var s=function(t){return function(e){this[t]=+e}},i=[/[+-]\d\d:?\d\d/,function(t){var e,n;(this.zone||(this.zone={})).offset=(e=t.match(/([+-]|\d\d)/g),0===(n=60*e[1]+ +e[2])?0:"+"===e[0]?-n:n)}],a=function(e){var n=t[e];return n&&(n.indexOf?n:n.s.concat(n.f))},h={A:[/[AP]M/,function(t){this.afternoon="PM"===t}],a:[/[ap]m/,function(t){this.afternoon="pm"===t}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var n=t.ordinal,r=e.match(/\d+/);if(this.day=r[0],n)for(var o=1;o<=31;o+=1)n(o).replace(/\[|\]/g,"")===e&&(this.day=o)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(t){var e=a("months"),n=(a("monthsShort")||e.map(function(t){return t.substr(0,3)})).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(t){var e=a("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){t=+t,this.year=t+(t>68?1900:2e3)}],YYYY:[/\d{4}/,s("year")],Z:i,ZZ:i};var f=function(t,n,r){try{var o=function(t){for(var n=t.match(e),r=n.length,o=0;o<r;o+=1){var s=n[o],i=h[s],a=i&&i[0],f=i&&i[1];n[o]=f?{regex:a,parser:f}:s.replace(/^\[|\]$/g,"")}return function(t){for(var e={},o=0,s=0;o<r;o+=1){var i=n[o];if("string"==typeof i)s+=i.length;else{var a=i.regex,h=i.parser,f=t.substr(s),u=a.exec(f)[0];h.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}(n)(t),s=o.year,i=o.month,a=o.day,f=o.hours,u=o.minutes,c=o.seconds,d=o.milliseconds,l=o.zone,m=new Date,v=a||(s||i?1:m.getDate()),p=s||m.getFullYear(),y=0;s&&!i||(y=i>0?i-1:m.getMonth());var D=f||0,M=u||0,g=c||0,Y=d||0;return l?new Date(Date.UTC(p,y,v,D,M,g,Y+60*l.offset*1e3)):r?new Date(Date.UTC(p,y,v,D,M,g,Y)):new Date(p,y,v,D,M,g,Y)}catch(t){return new Date("")}};return function(e,n,r){r.p.customParseFormat=!0;var o=n.prototype,s=o.parse;o.parse=function(e){var n=e.date,o=e.utc,i=e.args;this.$u=o;var a=i[1];if("string"==typeof a){var h=!0===i[2],u=!0===i[3],c=h||u,d=i[2];u&&(d=i[2]),h||(t=d?r.Ls[d]:this.$locale()),this.$d=f(n,a,o),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&n!==this.format(a)&&(this.$d=new Date(""))}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){i[1]=a[m-1];var v=r.apply(this,i);if(v.isValid()){this.$d=v.$d,this.$L=v.$L,this.init();break}m===l&&(this.$d=new Date(""))}else s.call(this,e)}}});
