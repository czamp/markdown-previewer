(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,n,t){e.exports=t(308)},176:function(e,n,t){},308:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),o=t(33),r=t.n(o),s=t(138),l=t(139),c=t(159),d=t(140),h=t(160),m=t(73),p=t.n(m),u='Welcome to my React Markdown Previewer!\n============\n\n`You can maximize the editor or the previewer by clicking the icon on the right side of the toolbar`\n\nParagraphs are separated by a blank line.\n\n2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\nlook like:\n\n  * this one\n  * that one\n  * the other one\n\nNote that --- not considering the asterisk --- the actual text\ncontent starts at 4-columns in.\n\n> Block quotes are\n> written like so.\n>\n> They can span multiple paragraphs,\n> if you like.\n\nUse 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it\'s all\nin chapters 12--14"). Three dots ... will be converted to an ellipsis.\nUnicode is supported. \u263a\n\n\n\nAn h2 header\n------------\n\nHere\'s a numbered list:\n\n 1. first item\n 2. second item\n 3. third item\n\nNote again how the actual text starts at 4 columns in (4 characters\nfrom the left side). Here\'s a code sample:\n\n    # Let me re-iterate ...\n    for i in 1 .. 10 { do-something(i) }\n\nAs you probably guessed, indented 4 spaces. By the way, instead of\nindenting the block, you can use delimited blocks, if you like:\n\n~~~\ndefine foobar() {\n    print "Welcome to flavor country!";\n}\n~~~\n\n(which makes copying & pasting easier). You can optionally mark the\ndelimited block for Pandoc to syntax highlight it:\n\n~~~python\nimport time\n# Quick, count to ten!\nfor i in range(10):\n    # (but not *too* quick)\n    time.sleep(0.5)\n    print(i)\n~~~\n\n\n\n### An h3 header ###\n\nNow a nested list:\n\n 1. First, get these ingredients:\n\n      * carrots\n      * celery\n      * lentils\n\n 2. Boil some water.\n\n 3. Dump everything in the pot and follow\n    this algorithm:\n\n        find wooden spoon\n        uncover pot\n        stir\n        cover pot\n        balance wooden spoon precariously on pot handle\n        wait 10 minutes\n        goto first step (or shut off burner when done)\n\n    Do not bump wooden spoon or it will fall.\n\nNotice again how text always lines up on 4-space indents (including\nthat last line which continues item 3 above).\n\nHere\'s a link to [a website](http://foo.bar), to a [local\ndoc](local-doc.html), and to a [section heading in the current\ndoc](#an-h2-header). Here\'s a footnote [^1].\n\n[^1]: Some footnote text.\n\nTables can look like this:\n\nName           Size  Material      Color\n------------- -----  ------------  ------------\nAll Business      9  leather       brown\nRoundabout       10  hemp canvas   natural\nCinderella       11  glass         transparent\n\nTable: Shoes sizes, materials, and colors.\n\n(The above is the caption for the table.) Pandoc also supports\nmulti-line tables:\n\n--------  -----------------------\nKeyword   Text\n--------  -----------------------\nred       Sunsets, apples, and\n          other red or reddish\n          things.\n\ngreen     Leaves, grass, frogs\n          and other things it\'s\n          not easy being.\n--------  -----------------------\n\nA horizontal rule follows.\n\n***\n\nHere\'s a definition list:\n\napples\n  : Good for making applesauce.\n\noranges\n  : Citrus!\n\ntomatoes\n  : There\'s no "e" in tomatoe.\n\nAgain, text is indented 4 spaces. (Put a blank line between each\nterm and  its definition to spread things out more.)\n\nHere\'s a "line block" (note how whitespace is honored):\n\n| Line one\n|   Line too\n| Line tree\n\nand images can be specified like so:\n\n![example image](example-image.jpg "An exemplary image")\n\nInline math equation: $omega = dphi / dt$. Display\nmath should get its own line like so:\n\n$$I = int \rho R^{2} dV$$\n\nAnd note that you can backslash-escape any punctuation characters\nwhich you wish to be displayed literally, ex.: `foo`, *bar*, etc.\n',w=t(317),g=t(321),b=t(320),f=t(46),k=t(322),x=t(319),v=t(318);t(176);p.a.setOptions({breaks:!0});var y=new p.a.Renderer;y.link=function(e,n,t){return'<a target="_blank" rel="noopener noreferrer" href="'.concat(e,'">').concat(t)+"</a>"};var z=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(i)))).state={markdown:u,editorMaximized:!1,previewMaximized:!1},t.handleChange=function(e){t.setState({markdown:e.target.value})},t.handleEditorMaximize=function(){t.setState({editorMaximized:!t.state.editorMaximized})},t.handlePreviewMaximize=function(){t.setState({previewMaximized:!t.state.previewMaximized})},t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(w.a,null,i.a.createElement(g.a,{size:"huge",textAlign:"center",style:this.state.previewMaximized||this.state.editorMaximized?{display:"none"}:{marginTop:"2rem"}},"React Markdown Previewer"),i.a.createElement("div",{className:"editorWrapper ".concat(this.state.editorMaximized&&"maximized"," ").concat(this.state.previewMaximized&&"hide")},i.a.createElement(E,{icon:"edit",text:"Markdown Editor",expanded:this.state.editorMaximized?"compress":"expand",onClick:this.handleEditorMaximize}),i.a.createElement(M,{markdown:this.state.markdown,onChange:this.handleChange})),i.a.createElement("div",{className:"converter"}),i.a.createElement("div",{className:"previewWrapper ".concat(this.state.previewMaximized&&"maximized"," ").concat(this.state.editorMaximized&&"hide")},i.a.createElement(E,{icon:"eye",text:"Markdown Previewer",expanded:this.state.previewMaximized?"compress":"expand",onClick:this.handlePreviewMaximize}),i.a.createElement(C,{markdown:this.state.markdown})),i.a.createElement("p",null,"Created by ",i.a.createElement("a",{href:"https://github.com/czamp",target:"_blank",rel:"noopener noreferrer"},"czamp"),"."))}}]),n}(i.a.Component),E=function(e){return i.a.createElement(b.a,{attached:"top",className:"toolbar"},i.a.createElement(b.a.Item,null,i.a.createElement(f.a,{name:e.icon})),i.a.createElement(b.a.Item,{header:!0},e.text),i.a.createElement(b.a.Menu,{position:"right"},i.a.createElement(b.a.Item,{onClick:e.onClick},i.a.createElement(f.a,{name:e.expanded}))))},M=function(e){return i.a.createElement(k.a,{attached:"bottom",style:{padding:0}},i.a.createElement(x.a,null,i.a.createElement(v.a,{style:{borderRadius:0},id:"editor",value:e.markdown,onChange:e.onChange})))},C=function(e){return i.a.createElement(k.a,{attached:"bottom"},i.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:p()(e.markdown,{renderer:y})}}))},A=z;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(307);r.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[171,1,2]]]);
//# sourceMappingURL=main.dbcfd6d3.chunk.js.map