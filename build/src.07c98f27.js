parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"08jD":[function(require,module,exports) {
var define;
var t;!function(e,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof t&&t.amd?t([],i):"object"==typeof exports?exports.terminaltxt=i():e.terminaltxt=i()}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var n,r=function(){function t(e,i){if(void 0===e&&(e=t.getDefaultCharacterSet()),"string"==typeof e){for(var n=[],r=0;r<e.length;r++){var o=e.charCodeAt(r);-1===n.indexOf(o)&&n.push(o)}this.set=n}else this.set=e;this.unknown=i?"string"==typeof i?i.charCodeAt(0):i:"�".charCodeAt(0)}return t.getDefaultCharacterSet=function(){return[32,9608]},t.prototype.getIndex=function(t){return this.set.indexOf(t.charCodeAt(0))},t.prototype.getValue=function(t){return t>=0&&t<this.set.length?this.set[t]:this.unknown},t.prototype.size=function(){return this.set.length},t.prototype.toString=function(t){return String.fromCharCode(this.getValue(t))},t}();!function(t){t[t.KEYDOWN=0]="KEYDOWN",t[t.KEYUP=1]="KEYUP",t[t.KEYPRESS=2]="KEYPRESS"}(n||(n={}));var o,s=function(){function t(){this.actions=[],this.logKeys=!1,this.handleKey=this.handleKey.bind(this),document.addEventListener("keydown",this.handleKey),document.addEventListener("keyup",this.handleKey),document.addEventListener("keypress",this.handleKey)}return t.prototype.addAction=function(t){this.actions.push(t)},t.prototype.setLogKeys=function(t){this.logKeys=t},t.prototype.handleKey=function(t){this.logKeys&&console.log("InputTracker Key Log: '"+t.key+"', type: "+t.type);for(var e=0;e<this.actions.length;e++)-1!==this.actions[e].keys.indexOf(t.key)&&("keydown"===t.type&&this.actions[e].keyEventType===n.KEYDOWN?this.actions[e].action(t.key):"keyup"===t.type&&this.actions[e].keyEventType===n.KEYUP?this.actions[e].action(t.key):"keypress"===t.type&&this.actions[e].keyEventType===n.KEYPRESS&&this.actions[e].action(t.key))},t}(),h=function(){function t(e){void 0===e&&(e=t.defaultContainer()),this.container=e,this.pre=document.createElement("pre"),this.code=document.createElement("code"),this.display=document.createElement("span"),this.idNumber=t.getID(),this.container.appendChild(this.pre),this.pre.appendChild(this.code),this.code.appendChild(this.display),this.setIDs(),this.setClasses()}return t.defaultContainer=function(){var t=document.createElement("div");return document.body.appendChild(t),t},t.getID=function(){var e=t.idCounter;return t.idCounter++,e},t.prototype.clear=function(){this.display.innerHTML=""},t.prototype.setClasses=function(){this.container.classList.add("termtxt-container"),this.pre.classList.add("termtxt-pre"),this.code.classList.add("termtxt-code"),this.display.classList.add("termtxt-display")},t.prototype.setIDs=function(){var t;t=0===this.idNumber?"":"-"+this.idNumber.toString(),this.container.id="termtxt-container"+t,this.pre.id="termtxt-pre"+t,this.code.id="termtxt-code"+t,this.display.id="termtxt-display"+t},t.idCounter=0,t}(),a=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),l=function(t){function e(e,i){void 0===e&&(e=-1);var n=this;return(n=i?t.call(this,i)||this:t.call(this)||this).maxLines=e,n.lines=[],n.addLine(),n.removeFirstChild(1),n}return a(e,t),e.prototype.addLine=function(t){void 0===t&&(t=""),this.display.appendChild(document.createTextNode("\n")),this.lines.push(document.createElement("span")),this.display.appendChild(this.lines[this.lines.length-1]),this.setCurrentLine(t)},e.prototype.appendCurrentLine=function(t){this.lines[this.lines.length-1].innerHTML+=t,this.checkForOverflow()},e.prototype.removeFirstLine=function(){this.removeFirstChild(2),this.lines.shift()},e.prototype.setCurrentLine=function(t){this.lines[this.lines.length-1].innerHTML=t,this.checkForOverflow()},e.prototype.checkForOverflow=function(){if(this.maxLines>=0)for(;this.lines.length>this.maxLines;)this.removeFirstLine()},e.prototype.removeFirstChild=function(t){for(var e=0;e<t;e++)this.display.removeChild(this.display.childNodes[0])},e}(h),u=function(){function t(t,e){void 0===t&&(t={}),void 0===e&&(e=""),this.linesToCheck=0,t.width?this.width=t.width:this.width=80,t.height?this.height=t.height:this.height=25,t.container?this.lineController=new l(this.height,t.container):this.lineController=new l(this.height),e.length>this.getWidth()&&(e=""),this.lineController.setCurrentLine(e)}return t.prototype.getHeight=function(){return this.height},t.prototype.getWidth=function(){return this.width<0?Number.MAX_VALUE:this.width},t.prototype.newLine=function(){this.lineController.addLine()},t.prototype.overwrite=function(t){var e;e=Math.ceil(t.length/this.getWidth())>this.linesToCheck?Math.ceil(t.length/this.getWidth()):this.linesToCheck;for(var i=0;i<=e;i++){var n=this.lineController.lines.length-(i+1);if(n>=0&&n<this.lineController.lines.length&&this.lineController.lines[n].innerHTML.substring(0,1)===t.substring(0,1)){var r=t.match(new RegExp(".{1,"+this.getWidth()+"}","g"));if(null!==r){for(var o=0;o<r.length;o++)n+o<this.lineController.lines.length?this.lineController.lines[n+o].innerHTML=r[o]:this.writeln(r[o]);for(o=r.length;o<=i;o++)n+o<this.lineController.lines.length&&(this.lineController.lines[n+o].innerHTML="");return void(this.linesToCheck=r.length+1)}}}1===this.lineController.lines.length&&""===this.lineController.lines[0].innerHTML?this.write(t):this.writeln(t)},t.prototype.resetLinesToCheck=function(){this.linesToCheck=0},t.prototype.write=function(t){var e=this.lineController.lines[this.lineController.lines.length-1].innerHTML.length;e+t.length<=this.getWidth()?this.lineController.appendCurrentLine(t):e===this.getWidth()?this.lineController.addLine(t):(this.lineController.appendCurrentLine(t.substring(0,this.getWidth()-e)),this.writeln(t.substring(this.getWidth()-e,t.length)))},t.prototype.writeln=function(t){if(t.length<=this.getWidth())this.lineController.addLine(t);else{var e=t.match(new RegExp(".{1,"+this.getWidth()+"}","g"));if(null!==e)for(var i=0;i<e.length;i++)this.lineController.addLine(e[i])}},t}(),c=function(){function t(t){void 0===t&&(t=new u),this.history=[],this.historyCounter=0,this.historyMax=100,this.current="",this.commands=[],this.input=new s,this.output=t,this.finalizeCurrent=this.finalizeCurrent.bind(this),this.addToCurrent=this.addToCurrent.bind(this),this.backspaceCurrent=this.backspaceCurrent.bind(this),this.historyForwards=this.historyForwards.bind(this),this.historyBack=this.historyBack.bind(this),this.helpCommand=this.helpCommand.bind(this),this.setupInput(),this.registerCommand({name:"help",description:"Provides information about available commands.",command:this.helpCommand,options:[{argument:"lookup",description:"Use to look up help pages for a specific registered command."}]}),this.update()}return t.indexOfCommandArgument=function(t,e){for(var i=0;i<e.length;i++)if(e[i].argument===t)return i;return-1},t.indexOfCommandArguments=function(e,i){for(var n=[],r=0;r<e.length;r++)n.push(t.indexOfCommandArgument(e[r],i));return n},t.prototype.finalizeCurrent=function(t){for(var e=-1,i=this.current.split(" "),n=0;n<this.commands.length;n++)if(this.commands[n].name.toLowerCase()===i[0].toLowerCase()){var r=this.parseArguments(i);e=this.commands[n].command(this.output,r);break}-1===e?this.output.writeln("no '"+this.current+"' found, please try again or enter 'help' for more information."):e>0&&this.output.writeln("'"+i[0]+"' exit code ["+e+"]. Use 'help --lookup "+i[0]+"' for more information."),this.addToHistory(this.current),this.output.newLine(),this.output.resetLinesToCheck(),this.current="",this.update()},t.prototype.helpCommand=function(e,i){if(0===i.length){e.writeln("COMMAND HELP"),e.writeln("------------");for(var n=0;n<this.commands.length;n++)e.writeln("Command: "+this.commands[n].name),e.writeln("Description: "+this.commands[n].description);return e.writeln("Use 'help --lookup command-name' for more info on specific commands."),0}var r=t.indexOfCommandArguments(["lookup"],i);if(-1!==r[0]){var o=i[r[0]];if(void 0===o.parameters||1!==o.parameters.length)return e.writeln("Invalid number of arguments for help --lookup. Example: 'help --lookup command-name'."),-2;var s=null;for(n=0;n<this.commands.length;n++)this.commands[n].name===o.parameters[0]&&(s=this.commands[n]);if(null===s)return e.writeln(o.parameters[0]+" is not a command. Use 'help' to list commands."),-2;if(e.writeln("HELP for "+s.name),e.writeln("Description: "+s.description),e.writeln("OPTIONAL ARGUMENTS"),void 0!==s.options)for(e.writeln("Single letter optional arguments should be prefaced with '-' and multi-letter arguments should be prefaced with '--'."),n=0;n<s.options.length;n++)e.writeln("  arg: "+s.options[n].argument),e.writeln("  description: "+s.options[n].description);else e.writeln("No optional arguments defined.");if(e.writeln("EXIT CODES"),void 0!==s.exitCodes)for(n=0;n<s.exitCodes.length;n++)e.writeln("  exit code: "+s.exitCodes[n].code),e.writeln("  description: "+s.exitCodes[n].description);else e.writeln("No exit codes defined.");return 0}return e.writeln("Invalid help command! Use 'help --lookup help' for more info."),-2},t.prototype.registerCommand=function(t){this.commands.push(t)},t.prototype.update=function(){this.output.overwrite("$ "+this.current)},t.prototype.addToCurrent=function(t){this.current=this.current+t,this.update()},t.prototype.addToHistory=function(t){this.history.push(t),this.history.length>this.historyMax&&this.history.shift(),this.historyCounter=this.history.length},t.prototype.backspaceCurrent=function(t){this.current=this.current.substring(0,this.current.length-1),this.update()},t.prototype.historyBack=function(t){this.history.length>0&&(this.historyCounter>0&&this.historyCounter--,this.current=this.history[this.historyCounter],this.update())},t.prototype.historyForwards=function(t){this.history.length>0&&(this.historyCounter<this.history.length-1&&this.historyCounter++,this.current=this.history[this.historyCounter],this.update())},t.prototype.parseArguments=function(t){for(var e=[],i=1;i<t.length;){if("--"===t[i].substring(0,2)){var n,r=[];for(n=t[i].substring(2),i++;i<t.length&&"-"!==t[i].substring(0,1);)r.push(t[i]),i++;i--,e.push({argument:n,parameters:r})}else if("-"===t[i].substring(0,1))for(var o=1;o<t[i].length;o++)e.push({argument:t[i].substring(o,o+1)});i++}return e},t.prototype.setupInput=function(){this.input.addAction({keys:["Backspace"],action:this.backspaceCurrent,keyEventType:n.KEYUP}),this.input.addAction({keys:["Enter"],action:this.finalizeCurrent,keyEventType:n.KEYPRESS}),this.input.addAction({keys:[" ","-","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],action:this.addToCurrent,keyEventType:n.KEYPRESS}),this.input.addAction({keys:["ArrowUp"],action:this.historyBack,keyEventType:n.KEYUP}),this.input.addAction({keys:["ArrowDown"],action:this.historyForwards,keyEventType:n.KEYUP})},t}(),d=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),p=function(t){function e(e,i,n){var r=this;return(r=n?t.call(this,n)||this:t.call(this)||this).width=e,r.height=i,r.cells=[],r.initCells(),r}return d(e,t),e.prototype.getHeight=function(){return this.height},e.prototype.getWidth=function(){return this.width},e.prototype.index=function(t,e){return t+e*this.width},e.prototype.setCellValue=function(t,e,i){var n;n=i?this.index(e,i):e,this.cells[n].innerHTML=t},e.prototype.initCells=function(){for(var t=0;t<this.height;t++){for(var e=0;e<this.width;e++)this.cells.push(document.createElement("span")),this.display.appendChild(this.cells[this.cells.length-1]),this.cells[this.cells.length-1].id=t+"-"+e;this.display.appendChild(document.createTextNode("\n"))}},e}(h),f=function(){function t(t,e){this.changed=[],this.data=[],this.width=t,this.height=e,this.initData(),this.initChanged()}return t.prototype.doneChange=function(t){this.changed[t]=!1},t.prototype.getCell=function(t){return this.data[t]},t.prototype.getHeight=function(){return this.height},t.prototype.getWidth=function(){return this.width},t.prototype.hasBeenChanged=function(t){return this.changed[t]},t.prototype.index=function(t,e){return t+e*this.width},t.prototype.numberOfCells=function(){return this.width*this.height},t.prototype.setCell=function(t,e){this.data[e]=t,this.changed[e]=!0},t.prototype.initChanged=function(){this.changed=[];for(var t=0;t<this.width*this.height;t++)this.changed.push(!0)},t.prototype.initData=function(){this.data=[];for(var t=0;t<this.width*this.height;t++)this.data.push(0)},t}(),y=function(){function t(t,e){void 0===t&&(t={}),void 0===e&&(e=new r),t.width?this.width=t.width:this.width=80,t.height?this.height=t.height:this.height=25,t.container?this.cellController=new p(this.width,this.height,t.container):this.cellController=new p(this.width,this.height),this.cellData=new f(this.width,this.height),this.characterSet=e}return t.prototype.getCharacterSet=function(){return this.characterSet},t.prototype.getHeight=function(){return this.height},t.prototype.getWidth=function(){return this.width},t.prototype.setCell=function(t,e,i){var n;n="string"==typeof t?this.characterSet.getIndex(t):t>=0&&t<this.characterSet.set.length?t:-1,this.cellData.setCell(n,this.cellData.index(e,i))},t.prototype.update=function(){for(var t=0;t<this.cellData.numberOfCells();t++)this.cellData.hasBeenChanged(t)&&(this.cellController.setCellValue(this.characterSet.toString(this.cellData.getCell(t)),t),this.cellData.doneChange(t))},t}();i.d(e,"CharacterSet",function(){return r}),i.d(e,"InputTracker",function(){return s}),i.d(e,"KeyEventType",function(){return n}),i.d(e,"CommandTracker",function(){return c}),i.d(e,"GraphicsTerminal",function(){return y}),i.d(e,"OutputTerminal",function(){return u})}])});
},{}],"5Z7a":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=function(){function t(t,i){void 0===t&&(t=0),void 0===i&&(i=0),this.x=t,this.y=i}return t.copy=function(i){return new t(i.x,i.y)},t.prototype.add=function(t,i){"number"==typeof t?(this.x+=t,this.y+=i):(this.x+=t.x,this.y+=t.y)},t}();exports.Vec2=t;
},{}],"bpbR":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=require("./Vec2"),i=function(){function i(t,i,s,n){this.xMin=t,this.xMax=i,this.yMin=s,this.yMax=n,this.reset()}return i.prototype.reset=function(){this.pos=new t.Vec2(Math.round(Math.random()*(this.xMax-this.xMin)+this.xMin),Math.round(Math.random()*(this.yMax-this.yMin)+this.yMin))},i}();exports.Leaf=i;
},{"./Vec2":"5Z7a"}],"Q/Ts":[function(require,module,exports) {
"use strict";var e;exports.__esModule=!0,function(e){e[e.NORTH=0]="NORTH",e[e.EAST=1]="EAST",e[e.SOUTH=2]="SOUTH",e[e.WEST=3]="WEST"}(e=exports.Direction||(exports.Direction={}));
},{}],"afOG":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=require("./Vec2"),i=require("./Direction"),o=function(){function o(o,e){this.body=[],this.erase=[],this.dead=!1,this.body.push(o),this.body.push(t.Vec2.copy(this.body[0])),this.body[0].add(0,1),this.direction=i.Direction.NORTH,this.length=2,this.fill=e,this.goNorth=this.goNorth.bind(this),this.goEast=this.goEast.bind(this),this.goSouth=this.goSouth.bind(this),this.goWest=this.goWest.bind(this),this.grow=this.grow.bind(this)}return o.prototype.show=function(t){for(var i=0;i<this.body.length;i++)t.setCell(this.fill,this.body[i].x,this.body[i].y);for(i=0;i<this.erase.length;i++)t.setCell(0,this.erase[i].x,this.erase[i].y);this.erase=[]},o.prototype.move=function(){var o=t.Vec2.copy(this.body[this.body.length-1]);switch(this.direction){case i.Direction.NORTH:o.add(0,-1);break;case i.Direction.EAST:o.add(1,0);break;case i.Direction.SOUTH:o.add(0,1);break;case i.Direction.WEST:o.add(-1,0)}for(this.body.push(o);this.body.length>this.length;)this.erase.push(this.body.shift())},o.prototype.grow=function(){this.length++},o.prototype.goNorth=function(){this.direction!==i.Direction.SOUTH&&(this.direction=i.Direction.NORTH)},o.prototype.goEast=function(){this.direction!==i.Direction.WEST&&(this.direction=i.Direction.EAST)},o.prototype.goSouth=function(){this.direction!==i.Direction.NORTH&&(this.direction=i.Direction.SOUTH)},o.prototype.goWest=function(){this.direction!==i.Direction.EAST&&(this.direction=i.Direction.WEST)},o.prototype.checkGrow=function(t,i){t.pos.x===this.body[this.body.length-1].x&&t.pos.y===this.body[this.body.length-1].y&&(this.grow(),i(this))},o.prototype.checkEdges=function(t){var i=this.body[this.body.length-1];if(i.x<=0||i.x>=t.getWidth()-1||i.y<=0||i.y>=t.getHeight()-1)this.dead=!0;else for(var o=0;o<this.body.length-2;o++)if(i.x===this.body[o].x&&i.y===this.body[o].y)return void(this.dead=!0)},o}();exports.Caterpillar=o;
},{"./Vec2":"5Z7a","./Direction":"Q/Ts"}],"LeA6":[function(require,module,exports) {
"use strict";function e(e,t,r,s,o){return(e-t)/(r-t)*(o-s)+s}exports.__esModule=!0,exports.map=e;
},{}],"7QCb":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("terminaltxt"),t=require("./Leaf"),n=require("./Caterpillar"),r=require("./Vec2"),o=require("./Map");"complete"===document.readyState?u():window.addEventListener("load",u,!1);var i,a,l,c,s,d=80,y=25;function u(){s=new e.InputTracker,h()}function h(){(i=new e.OutputTerminal({container:document.getElementById("output-container"),width:d,height:y})).write(C("Caterpillar",d)),i.writeln("by Fi Graham"),i.newLine(),i.writeln("Caterpillar is a clone of the classic snake game. It was created using "),i.writeln("TerminalTXT a typescript library. Please enjoy!"),i.newLine(),i.writeln("Use the arrow keys on your keyboard to move. Press 'Space' to restart the game."),i.writeln("Press 'Enter' to begin."),s.addAction({keys:["Enter"],keyEventType:e.KeyEventType.KEYUP,action:p})}function p(){m(),a=new e.GraphicsTerminal({container:document.getElementById("game-container"),width:80,height:25},new e.CharacterSet(" ○●║═╔╗╚╝")),g(),T(120)}function g(){w(),E(),f(l),v(),a.update(),k()}function w(){for(var e=0;e<d;e++)for(var t=0;t<y;t++)a.setCell(0,e,t)}function v(){for(var e=1;e<a.getWidth()-1;e++)a.setCell(4,e,0),a.setCell(4,e,a.getHeight()-1);for(var t=1;t<a.getHeight()-1;t++)a.setCell(3,0,t),a.setCell(3,a.getWidth()-1,t);a.setCell(5,0,0),a.setCell(6,a.getWidth()-1,0),a.setCell(7,0,a.getHeight()-1),a.setCell(8,a.getWidth()-1,a.getHeight()-1)}function E(){(l=new n.Caterpillar(new r.Vec2(Math.floor(d/2),Math.floor(y/2)),1)).show(a)}function f(e){var n=!1;do{c=new t.Leaf(1,a.getWidth()-2,1,a.getHeight()-2);for(var r=0;r<e.body.length;r++)if(c.pos.x===e.body[r].x&&c.pos.y===e.body[r].y){n=!0;break}}while(n);a.setCell(2,c.pos.x,c.pos.y)}function m(){var e=document.getElementById("termtxt-container");e.parentElement.removeChild(e)}function k(){(s=new e.InputTracker).addAction({keys:["ArrowUp"],keyEventType:e.KeyEventType.KEYDOWN,action:l.goNorth}),s.addAction({keys:["ArrowRight"],keyEventType:e.KeyEventType.KEYDOWN,action:l.goEast}),s.addAction({keys:["ArrowDown"],keyEventType:e.KeyEventType.KEYDOWN,action:l.goSouth}),s.addAction({keys:["ArrowLeft"],keyEventType:e.KeyEventType.KEYDOWN,action:l.goWest}),s.addAction({keys:[" "],keyEventType:e.KeyEventType.KEYUP,action:g})}function T(e){setTimeout(function(){l.dead||(l.move(),l.show(a),l.checkGrow(c,f),l.checkEdges(a)),l.dead||a.update(),T(o.map(l.length,2,10,80,60))},e)}function C(e,t,n){void 0===n&&(n=" ");for(var r=[],o=0;o<t-e.length;o++)r.push(n);return e+r.join("")}
},{"terminaltxt":"08jD","./Leaf":"bpbR","./Caterpillar":"afOG","./Vec2":"5Z7a","./Map":"LeA6"}]},{},["7QCb"], null)
//# sourceMappingURL=/src.07c98f27.js.map