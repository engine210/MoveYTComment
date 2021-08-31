var primaryDOM = document.querySelector("#primary");
var commentsDOM = document.querySelector("#comments");
var secondaryDOM = document.querySelector("#secondary");
var secondary_innDOM = document.querySelector("#secondary-inner");
console.log(secondaryDOM);
secondaryDOM.appendChild(commentsDOM);
primaryDOM.appendChild(secondary_innDOM);
commentsDOM.style.maxHeight='85vh';
commentsDOM.style.overflow='scroll';
commentsDOM.style["overscroll-behavior-block"] = "none";

// not yet finish, still have a bug: it's won't work when first load yt page, must reload to take effects
// refer to: https://stackoverflow.com/questions/34077641/how-to-detect-page-navigation-on-youtube-and-modify-its-appearance-seamlessly/34100952#34100952
// function swap() {
//   if (document.querySelector("#secondary").hasChildNodes()) {
//         var primaryDOM = document.querySelector("#primary");
//         var commentsDOM = document.querySelector("#comments");
//         var secondaryDOM = document.querySelector("#secondary");
//         var secondary_innDOM = document.querySelector("#secondary-inner");
//         console.log(secondaryDOM);
//         secondaryDOM.appendChild(commentsDOM);
//         primaryDOM.appendChild(secondary_innDOM);
//         commentsDOM.style.maxHeight='85vh';
//         commentsDOM.style.overflow='scroll';
//         commentsDOM.style["overscroll-behavior-block"] = "none";
//   }
// }

// if (document.body) swap();
// document.addEventListener('DOMContentLoaded', swap);
// document.addEventListener('yt-navigate-finish', swap);
// onUpdated.addListener(swap);