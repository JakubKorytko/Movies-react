(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"name":"We Bare Bears: The Movie","image":"we-bare-bears-the-movie.jpg"},{"name":"The Croods: A New Age","image":"croods-2-family.jpg"},{"name":"The Willoughbys","image":"willhoughbys-netflix.jpg"},{"name":"Trolls World Tour","image":"trolls-world-tour-vibe-city.png"},{"name":"A Shaun the Sheep Movie: Farmageddon","image":"shaun-the-sheep-farmageddon.jpg"},{"name":"Lupin III: The First","image":"lupin-iii-the-first-hat.jpg"},{"name":"Over the Moon","image":"over-the-moon-netflix-goddess.jpg"},{"name":"Onward","image":"onward-pixar-tom-holland-chris-pratt-field-social.jpg"},{"name":"Wolfwalkers","image":"wolfwalkers.jpg"},{"name":"Soul","image":"SOUL-ONLINE-USE-s374_140a_pub.pub16.489.jpg"}]')},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(7),r=a.n(i),s=(a(13),a(2)),o=a(3),c=a(5),m=a(4),l=(a(14),a(15),a(0)),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).hoverStar=function(e){n.setState({trialRating:e})},n.blurStar=function(){n.setState({trialRating:n.state.rating})},n.setRating=function(e){n.setState({rating:e})},n.state={image:n.props.image,name:n.props.name,rating:0,trialRating:0},n}return Object(o.a)(a,[{key:"render",value:function(){for(var e=this,t=[],a=function(a){t.push(Object(l.jsx)("div",{onClick:function(){e.setRating(a+1)},onMouseOut:e.blurStar,onMouseOver:function(){e.hoverStar(a+1)},style:{backgroundImage:"url('./gfx/"+(a>=e.state.trialRating?"empty_":"")+"star.png')"},className:"star"},a))},n=0;n<5;n++)a(n);return Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("div",{className:"nameContainer",children:Object(l.jsx)("h1",{children:this.state.name})}),Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{className:"previewImg",src:this.state.image})}),Object(l.jsx)("div",{className:"starContainer",children:t})]})}}]),a}(n.Component),u=a(8),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=u.map((function(e,t){return Object(l.jsx)(g,{image:"/moviesGfx/"+e.image,name:e.name},t)}));return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{id:"movies",children:e})})}}]),a}(n.Component),p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};r.a.render(Object(l.jsx)(h,{}),document.getElementById("root")),p()}],[[17,1,2]]]);
//# sourceMappingURL=main.f494a3b5.chunk.js.map